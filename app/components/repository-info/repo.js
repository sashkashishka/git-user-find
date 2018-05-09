module.exports = class RepoCard {
  constructor(options) {
    this.name = options.name;
    this.htmlUrl = options.html_url;
    this.createdAt = options.created_at;
    this.updatedAt = options.updated_at;
    this.description = options.description;
    this.language = options.language;
    this.stargazersCount = options.stargazers_count;
    this.forksCount = options.forks_count;
    this.openIssuesCount = options.open_issues_count;
    
    this.css = {
      repoCardContainer: "repo-card",
      indexContainer: "repo-card__index-container",
      repoInfoContainer: "repo-card__repo-info-container",
      briefRepoInfo: "repo-card__brief-info",
      repoLink: "repo-card__repo-link",
      techInfo: "repo-card__tech-info",
      repoStars: "repo-card__repo-stars",
      repoForks: "repo-card__repo-forks",
      repoIssues: "repo-card__repo-issues",
      repoLang: "repo-card__repo-lang",
      description: "repo-card__description",
      datesContainer: "repo-card__dates-container",
      darkAndBold: "repo-card__dates-container_dark-and-bold",
      widerWidth: "repo-card__dates-container_wider-width"
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

  createMarkup(index) {
    // create container for repo info
    let repoCardContainer = this.createElem("div", this.css.repoCardContainer);

    // create container for index number
    let indexContainer = this.createElem("div", this.css.indexContainer);
    indexContainer.innerText = index || '1';

    // create repo info container
    let repoInfoContainer = this.createElem("div", this.css.repoInfoContainer)

    // brief info about name, stars, forks, issues and language
    let briefRepoInfo = this.createElem("div", this.css.briefRepoInfo);
    
    // create link on repo
    let repoLink = this.createElem("a", this.css.repoLink);
    repoLink.innerText = this.name;
    repoLink.href = this.htmlUrl;
    repoLink.target = "_blank";


    // create tech-info about
    let techInfo = this.createElem("div", this.css.techInfo);

    // adding existing information
    let defaultValue = this.createElem("span");
    let stars, forks, issues, lang;

    stars = forks = issues = lang = defaultValue;

    if (this.stargazersCount) {
      stars = this.createElem('div', this.css.repoStars)
      stars.innerText = this.stargazersCount;
    }

    if(this.forksCount) {
      forks = this.createElem("div", this.css.repoForks);
      forks.innerText = this.forksCount;
    }

    if(this.openIssuesCount) {
      issues = this.createElem("div", this.css.repoIssues);
      issues.innerText = this.openIssuesCount;
    }

    if(this.language) {
      issues = this.createElem("div", this.css.repoLang);
      issues.innerText = this.language;
    }

    techInfo.appendChild(stars);
    techInfo.appendChild(forks);
    techInfo.appendChild(issues);
    techInfo.appendChild(lang);

    briefRepoInfo.appendChild(repoLink);
    briefRepoInfo.appendChild(techInfo);

    

    // adding description
    let description = this.createElem("div", this.css.description);
    description.innerText = this.description;

    // adding creation and update dates
    let datesContainer = this.createElem("table", this.css.datesContainer);
    datesContainer.innerHTML = `
      <tr>
        <td class="${this.css.widerWidth}">Created: <span class="${this.css.darkAndBold}">${this.toDateString(this.createdAt)}</span></td>
        <td class="${this.css.widerWidth}">Updated: <span class="${this.css.darkAndBold}">${this.toDateString(this.createdAt)}</span></td>
      </tr>
    `

    repoInfoContainer.appendChild(briefRepoInfo);
    repoInfoContainer.appendChild(description);
    repoInfoContainer.appendChild(datesContainer);

    repoCardContainer.appendChild(indexContainer);
    repoCardContainer.appendChild(repoInfoContainer);


    return repoCardContainer;
  }
}