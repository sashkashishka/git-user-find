module.exports = class UserCard {
  constructor(options) {
    this.avatarUrl = options.avatar_url;
    this.name = options.name;
    this.htmlUrl = options.html_url;
    this.blog = options.blog || "";
    this.location = options.location || null;
    this.publicRepos = options.public_repos || 0;
    this.publicGists = options.public_gists || 0;
    this.createdAt = options.created_at;
    this.updatedAt = options.updated_at;

    this.css = {
      userCardContainer: "user-card",
      avatar: "user-card__avatar",
      userInfoContainer: "user-card__user-info-container",
      wrapper: "wrapper",
      name: "user-card__name",
      linkContainer: "user-card__link-container",
      link: "link user-card__link",
      location: "user-card__location",
      datesContainer: "user-card__dates-container",
      date: "user-card__date",
      repoAndGistContainer: "user-card__repo-and-gist-container",
      repositorium: "user-card__repositorium",
      gist: "user-card__gist",
      bigNum: "user-card_font-size_big"
    }
  }

  toDateString(value) {
    let date = new Date(value);
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}.${month}.${year}`; 
  }

  createElem(tagName, className) {
    let elem = document.createElement(tagName || "div");
    elem.className = className || "";

    return elem;
  }

  createMarkup() {
    // create user card container
    let userCardContainer = this.createElem("div", this.css.userCardContainer);

    // create avatar image
    let avatar = this.createElem("img", this.css.avatar);
    avatar.src = this.avatarUrl;

    // create container with info (without quantity of repos and gists)
    let userInfoContainer = this.createElem("div", this.css.userInfoContainer);


    // wrap elements below for positioning
    let wrapper = this.createElem("div", this.css.wrapper);

    // create name title
    let name = this.createElem("h2", this.css.name);
    name.innerText = this.name;

    // create links on github and blog accounts 
    let linkContainer = this.createElem("span", this.css.linkContainer);
    linkContainer.innerHTML = `[ <a href="${this.htmlUrl}" class="${this.css.link}" target="_blank">Github</a> | <a href="${this.blog}" class="${this.css.link} target="_blank">Blog</a> ]`;

    // append name and linkContainer to wrapper
    wrapper.appendChild(name);
    wrapper.appendChild(linkContainer);


    // location logo will append through CSS
    let location = this.createElem("span", this.css.location);
    location.innerText = this.location || "unknown";

    
    // date table creation
    let timeTable = this.createElem("table", this.css.datesContainer);
    timeTable.innerHTML = `
      <tr>
        <td>Created:</td>
        <td class="${this.css.date}">${this.toDateString(this.createdAt)}</td>
      </tr>
      <tr>
        <td>Updated:</td>
        <td class="${this.css.date}">${this.toDateString(this.updatedAt)}</td>        
      </tr>
    `;


    userInfoContainer.appendChild(wrapper);
    userInfoContainer.appendChild(location);
    userInfoContainer.appendChild(timeTable);

    // create container for quantity of repositories and gists
    let repoAndGistContainer = this.createElem("table", this.css.repoAndGistContainer);
    repoAndGistContainer.innerHTML = `
      <tr>
        <td class="${this.css.bigNum} ${this.css.repositorium}">${this.publicRepos}</td>
        <td class="${this.css.bigNum} ${this.css.gist}">${this.publicGists}</td>
        </tr>
      <tr>
        <td class="${this.css.repositorium}">repos</td>
        <td class="${this.css.gist}">gists</td>        
      </tr>
    `


    userCardContainer.appendChild(avatar);
    userCardContainer.appendChild(userInfoContainer);
    userCardContainer.appendChild(repoAndGistContainer)

    return userCardContainer;
  }
}