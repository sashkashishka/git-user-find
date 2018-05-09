var git =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/repository-info/repo.js":
/*!************************************************!*\
  !*** ./app/components/repository-info/repo.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
        };
    }

    toDateString(value) {
        let date = new Date(value);
        let day = date.getDate();
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
        let repoInfoContainer = this.createElem("div", this.css.repoInfoContainer);

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
            stars = this.createElem('div', this.css.repoStars);
            stars.innerText = this.stargazersCount;
        }

        if (this.forksCount) {
            forks = this.createElem("div", this.css.repoForks);
            forks.innerText = this.forksCount;
        }

        if (this.openIssuesCount) {
            issues = this.createElem("div", this.css.repoIssues);
            issues.innerText = this.openIssuesCount;
        }

        if (this.language) {
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
    `;

        repoInfoContainer.appendChild(briefRepoInfo);
        repoInfoContainer.appendChild(description);
        repoInfoContainer.appendChild(datesContainer);

        repoCardContainer.appendChild(indexContainer);
        repoCardContainer.appendChild(repoInfoContainer);

        return repoCardContainer;
    }
};

/***/ }),

/***/ "./app/components/user-info/user.js":
/*!******************************************!*\
  !*** ./app/components/user-info/user.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
    };
  }

  toDateString(value) {
    let date = new Date(value);
    let day = date.getDate();
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
    `;

    userCardContainer.appendChild(avatar);
    userCardContainer.appendChild(userInfoContainer);
    userCardContainer.appendChild(repoAndGistContainer);

    return userCardContainer;
  }
};

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.styl */ "./app/main.styl");
/* harmony import */ var _main_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_user_info_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-info/user.js */ "./app/components/user-info/user.js");
/* harmony import */ var _components_user_info_user_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_user_info_user_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_repository_info_repo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/repository-info/repo.js */ "./app/components/repository-info/repo.js");
/* harmony import */ var _components_repository_info_repo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_repository_info_repo_js__WEBPACK_IMPORTED_MODULE_2__);
// load styles


// load constructors



let mainBody = document.querySelector(".main-body");
let userInfoContainer = document.querySelector(".user-info");
let searchInput = document.querySelector(".search-tab__search-input");
let searchBtn = document.querySelector(".search-tab__search-btn");
let userInfo = {},
    repoInfo = [];

// after window was reloaded - clear all data in localstorage    
window.onload = () => {
  localStorage.clear();
};

// validation and then finding
searchBtn.onclick = () => {
  let username = searchInput.value;
  searchInput.classList.remove("search-tab__search-input_no-validation");

  // if empty field highlight it
  if (username == "") {
    searchInput.classList.add("search-tab__search-input_no-validation");
    return;
  }

  // if userName coincides with value in input - don't provide search
  if (localStorage.userName == username) return;

  findUser(username);
};

// find user info by requesting to the server
function findUser(name) {

  // to find user even when client enters some uppercase letters 
  name = name.toLowerCase();

  return Promise.all([new Promise((resolve, reject) => {
    AJAXRequest(`/fixtures/users/${name}.json`, ajax => {
      switch (ajax.status) {
        case 200:
          resolve(JSON.parse(ajax.responseText));
          break;

        default:
          reject({
            status: ajax.status,
            statusText: ajax.statusText
          });

      }
    });
  }), new Promise((resolve, reject) => {
    AJAXRequest(`/fixtures/users/${name}/repos.json`, ajax => {
      switch (ajax.status) {
        case 200:
          resolve(JSON.parse(ajax.responseText));
          break;

        default:
          reject({
            status: ajax.status,
            statusText: ajax.statusText
          });
      }
    });
  })]).then(result => {
    // sort recieved data and assign to variables
    result.forEach(item => {
      if (item.splice) {
        repoInfo = item;
      } else {
        userInfo = item;
      }
    });

    // clear field from last searchig session
    userInfoContainer.innerHTML = '';
    userInfoContainer.classList.remove("user-info_not-found");

    // create userContainer HTML-element
    let userContainer = new _components_user_info_user_js__WEBPACK_IMPORTED_MODULE_1___default.a(userInfo);
    userContainer = userContainer.createMarkup();

    // create repoContainer HTML-element
    let repoContainer = document.createElement("div");
    repoContainer.className = "repo-container";
    repoContainer.innerHTML = `<h2 class="repo-container__title">Repositories</h2>`;

    repoInfo.forEach((item, i) => {
      let repositoryCard = new _components_repository_info_repo_js__WEBPACK_IMPORTED_MODULE_2___default.a(item);
      repositoryCard = repositoryCard.createMarkup(i + 1);
      repoContainer.appendChild(repositoryCard);
    });

    userInfoContainer.appendChild(userContainer);
    userInfoContainer.appendChild(repoContainer);

    // write name of user into localStorage
    localStorage.userName = name;
  }, obj => {
    // reject: handle other responses
    if (obj.status == 404) {
      userInfoContainer.classList.add("user-info_not-found");
      userInfoContainer.innerHTML = "User not found";
    } else {
      console.log(obj.status + ": " + obj.statusText);
    }
  }).catch(error => {
    console.log(error);
  });
}

// function to create AJAX requests
function AJAXRequest(dest, handler) {
  let ajax = new XMLHttpRequest();

  ajax.open("GET", dest, true);

  ajax.onreadystatechange = () => {
    // if response doesn't loaded    
    if (ajax.readyState != 4) return;

    handler(ajax);
  };

  ajax.send();
}

/***/ }),

/***/ "./app/main.styl":
/*!***********************!*\
  !*** ./app/main.styl ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0Ly4vYXBwL2NvbXBvbmVudHMvcmVwb3NpdG9yeS1pbmZvL3JlcG8uanMiLCJ3ZWJwYWNrOi8vZ2l0Ly4vYXBwL2NvbXBvbmVudHMvdXNlci1pbmZvL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZ2l0Ly4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2dpdC8uL2FwcC9tYWluLnN0eWwiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlJlcG9DYXJkIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwibmFtZSIsImh0bWxVcmwiLCJodG1sX3VybCIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkX2F0IiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsInN0YXJnYXplcnNDb3VudCIsInN0YXJnYXplcnNfY291bnQiLCJmb3Jrc0NvdW50IiwiZm9ya3NfY291bnQiLCJvcGVuSXNzdWVzQ291bnQiLCJvcGVuX2lzc3Vlc19jb3VudCIsImNzcyIsInJlcG9DYXJkQ29udGFpbmVyIiwiaW5kZXhDb250YWluZXIiLCJyZXBvSW5mb0NvbnRhaW5lciIsImJyaWVmUmVwb0luZm8iLCJyZXBvTGluayIsInRlY2hJbmZvIiwicmVwb1N0YXJzIiwicmVwb0ZvcmtzIiwicmVwb0lzc3VlcyIsInJlcG9MYW5nIiwiZGF0ZXNDb250YWluZXIiLCJkYXJrQW5kQm9sZCIsIndpZGVyV2lkdGgiLCJ0b0RhdGVTdHJpbmciLCJ2YWx1ZSIsImRhdGUiLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJjcmVhdGVFbGVtIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVNYXJrdXAiLCJpbmRleCIsImlubmVyVGV4dCIsImhyZWYiLCJ0YXJnZXQiLCJkZWZhdWx0VmFsdWUiLCJzdGFycyIsImZvcmtzIiwiaXNzdWVzIiwibGFuZyIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiVXNlckNhcmQiLCJhdmF0YXJVcmwiLCJhdmF0YXJfdXJsIiwiYmxvZyIsImxvY2F0aW9uIiwicHVibGljUmVwb3MiLCJwdWJsaWNfcmVwb3MiLCJwdWJsaWNHaXN0cyIsInB1YmxpY19naXN0cyIsInVzZXJDYXJkQ29udGFpbmVyIiwiYXZhdGFyIiwidXNlckluZm9Db250YWluZXIiLCJ3cmFwcGVyIiwibGlua0NvbnRhaW5lciIsImxpbmsiLCJyZXBvQW5kR2lzdENvbnRhaW5lciIsInJlcG9zaXRvcml1bSIsImdpc3QiLCJiaWdOdW0iLCJzcmMiLCJ0aW1lVGFibGUiLCJtYWluQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJ0biIsInVzZXJJbmZvIiwicmVwb0luZm8iLCJ3aW5kb3ciLCJvbmxvYWQiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsIm9uY2xpY2siLCJ1c2VybmFtZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInVzZXJOYW1lIiwiZmluZFVzZXIiLCJ0b0xvd2VyQ2FzZSIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwicmVqZWN0IiwiQUpBWFJlcXVlc3QiLCJhamF4Iiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNwbGljZSIsInVzZXJDb250YWluZXIiLCJyZXBvQ29udGFpbmVyIiwiaSIsInJlcG9zaXRvcnlDYXJkIiwib2JqIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJkZXN0IiwiaGFuZGxlciIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFD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LENBNkVEQyxTQUFTO0FBQ2RILFlBQVFDLEdBQVIsQ0FBWUUsS0FBWjtBQUNELEdBL0VPLENBQVI7QUFpRkg7O0FBR0Q7QUFDQSxTQUFTcEIsV0FBVCxDQUFxQnFCLElBQXJCLEVBQTJCQyxPQUEzQixFQUFvQztBQUNsQyxNQUFJckIsT0FBTyxJQUFJc0IsY0FBSixFQUFYOztBQUVBdEIsT0FBS3VCLElBQUwsQ0FBVSxLQUFWLEVBQWlCSCxJQUFqQixFQUF1QixJQUF2Qjs7QUFFQXBCLE9BQUt3QixrQkFBTCxHQUEwQixNQUFNO0FBQzlCO0FBQ0EsUUFBSXhCLEtBQUt5QixVQUFMLElBQW1CLENBQXZCLEVBQTBCOztBQUUxQkosWUFBUXJCLElBQVI7QUFDRCxHQUxEOztBQU9BQSxPQUFLMEIsSUFBTDtBQUNELEM7Ozs7Ozs7Ozs7O0FDaEpELHlDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUmVwb0NhcmQge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgIHRoaXMuaHRtbFVybCA9IG9wdGlvbnMuaHRtbF91cmw7XHJcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IG9wdGlvbnMuY3JlYXRlZF9hdDtcclxuICAgIHRoaXMudXBkYXRlZEF0ID0gb3B0aW9ucy51cGRhdGVkX2F0O1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG9wdGlvbnMuZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmxhbmd1YWdlID0gb3B0aW9ucy5sYW5ndWFnZTtcclxuICAgIHRoaXMuc3RhcmdhemVyc0NvdW50ID0gb3B0aW9ucy5zdGFyZ2F6ZXJzX2NvdW50O1xyXG4gICAgdGhpcy5mb3Jrc0NvdW50ID0gb3B0aW9ucy5mb3Jrc19jb3VudDtcclxuICAgIHRoaXMub3Blbklzc3Vlc0NvdW50ID0gb3B0aW9ucy5vcGVuX2lzc3Vlc19jb3VudDtcclxuICAgIFxyXG4gICAgdGhpcy5jc3MgPSB7XHJcbiAgICAgIHJlcG9DYXJkQ29udGFpbmVyOiBcInJlcG8tY2FyZFwiLFxyXG4gICAgICBpbmRleENvbnRhaW5lcjogXCJyZXBvLWNhcmRfX2luZGV4LWNvbnRhaW5lclwiLFxyXG4gICAgICByZXBvSW5mb0NvbnRhaW5lcjogXCJyZXBvLWNhcmRfX3JlcG8taW5mby1jb250YWluZXJcIixcclxuICAgICAgYnJpZWZSZXBvSW5mbzogXCJyZXBvLWNhcmRfX2JyaWVmLWluZm9cIixcclxuICAgICAgcmVwb0xpbms6IFwicmVwby1jYXJkX19yZXBvLWxpbmtcIixcclxuICAgICAgdGVjaEluZm86IFwicmVwby1jYXJkX190ZWNoLWluZm9cIixcclxuICAgICAgcmVwb1N0YXJzOiBcInJlcG8tY2FyZF9fcmVwby1zdGFyc1wiLFxyXG4gICAgICByZXBvRm9ya3M6IFwicmVwby1jYXJkX19yZXBvLWZvcmtzXCIsXHJcbiAgICAgIHJlcG9Jc3N1ZXM6IFwicmVwby1jYXJkX19yZXBvLWlzc3Vlc1wiLFxyXG4gICAgICByZXBvTGFuZzogXCJyZXBvLWNhcmRfX3JlcG8tbGFuZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJyZXBvLWNhcmRfX2Rlc2NyaXB0aW9uXCIsXHJcbiAgICAgIGRhdGVzQ29udGFpbmVyOiBcInJlcG8tY2FyZF9fZGF0ZXMtY29udGFpbmVyXCIsXHJcbiAgICAgIGRhcmtBbmRCb2xkOiBcInJlcG8tY2FyZF9fZGF0ZXMtY29udGFpbmVyX2RhcmstYW5kLWJvbGRcIixcclxuICAgICAgd2lkZXJXaWR0aDogXCJyZXBvLWNhcmRfX2RhdGVzLWNvbnRhaW5lcl93aWRlci13aWR0aFwiXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b0RhdGVTdHJpbmcodmFsdWUpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMSA8IDEwID8gXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkgOiBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgcmV0dXJuIGAke2RheX0uJHttb250aH0uJHt5ZWFyfWA7IFxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbSh0YWdOYW1lLCBjbGFzc05hbWUpIHtcclxuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lIHx8IFwiZGl2XCIpO1xyXG4gICAgZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgXCJcIjtcclxuXHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1hcmt1cChpbmRleCkge1xyXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgcmVwbyBpbmZvXHJcbiAgICBsZXQgcmVwb0NhcmRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW0oXCJkaXZcIiwgdGhpcy5jc3MucmVwb0NhcmRDb250YWluZXIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIGluZGV4IG51bWJlclxyXG4gICAgbGV0IGluZGV4Q29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLmluZGV4Q29udGFpbmVyKTtcclxuICAgIGluZGV4Q29udGFpbmVyLmlubmVyVGV4dCA9IGluZGV4IHx8ICcxJztcclxuXHJcbiAgICAvLyBjcmVhdGUgcmVwbyBpbmZvIGNvbnRhaW5lclxyXG4gICAgbGV0IHJlcG9JbmZvQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLnJlcG9JbmZvQ29udGFpbmVyKVxyXG5cclxuICAgIC8vIGJyaWVmIGluZm8gYWJvdXQgbmFtZSwgc3RhcnMsIGZvcmtzLCBpc3N1ZXMgYW5kIGxhbmd1YWdlXHJcbiAgICBsZXQgYnJpZWZSZXBvSW5mbyA9IHRoaXMuY3JlYXRlRWxlbShcImRpdlwiLCB0aGlzLmNzcy5icmllZlJlcG9JbmZvKTtcclxuICAgIFxyXG4gICAgLy8gY3JlYXRlIGxpbmsgb24gcmVwb1xyXG4gICAgbGV0IHJlcG9MaW5rID0gdGhpcy5jcmVhdGVFbGVtKFwiYVwiLCB0aGlzLmNzcy5yZXBvTGluayk7XHJcbiAgICByZXBvTGluay5pbm5lclRleHQgPSB0aGlzLm5hbWU7XHJcbiAgICByZXBvTGluay5ocmVmID0gdGhpcy5odG1sVXJsO1xyXG4gICAgcmVwb0xpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuXHJcblxyXG4gICAgLy8gY3JlYXRlIHRlY2gtaW5mbyBhYm91dFxyXG4gICAgbGV0IHRlY2hJbmZvID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLnRlY2hJbmZvKTtcclxuXHJcbiAgICAvLyBhZGRpbmcgZXhpc3RpbmcgaW5mb3JtYXRpb25cclxuICAgIGxldCBkZWZhdWx0VmFsdWUgPSB0aGlzLmNyZWF0ZUVsZW0oXCJzcGFuXCIpO1xyXG4gICAgbGV0IHN0YXJzLCBmb3JrcywgaXNzdWVzLCBsYW5nO1xyXG5cclxuICAgIHN0YXJzID0gZm9ya3MgPSBpc3N1ZXMgPSBsYW5nID0gZGVmYXVsdFZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXJnYXplcnNDb3VudCkge1xyXG4gICAgICBzdGFycyA9IHRoaXMuY3JlYXRlRWxlbSgnZGl2JywgdGhpcy5jc3MucmVwb1N0YXJzKVxyXG4gICAgICBzdGFycy5pbm5lclRleHQgPSB0aGlzLnN0YXJnYXplcnNDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmZvcmtzQ291bnQpIHtcclxuICAgICAgZm9ya3MgPSB0aGlzLmNyZWF0ZUVsZW0oXCJkaXZcIiwgdGhpcy5jc3MucmVwb0ZvcmtzKTtcclxuICAgICAgZm9ya3MuaW5uZXJUZXh0ID0gdGhpcy5mb3Jrc0NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMub3Blbklzc3Vlc0NvdW50KSB7XHJcbiAgICAgIGlzc3VlcyA9IHRoaXMuY3JlYXRlRWxlbShcImRpdlwiLCB0aGlzLmNzcy5yZXBvSXNzdWVzKTtcclxuICAgICAgaXNzdWVzLmlubmVyVGV4dCA9IHRoaXMub3Blbklzc3Vlc0NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMubGFuZ3VhZ2UpIHtcclxuICAgICAgaXNzdWVzID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLnJlcG9MYW5nKTtcclxuICAgICAgaXNzdWVzLmlubmVyVGV4dCA9IHRoaXMubGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGVjaEluZm8uYXBwZW5kQ2hpbGQoc3RhcnMpO1xyXG4gICAgdGVjaEluZm8uYXBwZW5kQ2hpbGQoZm9ya3MpO1xyXG4gICAgdGVjaEluZm8uYXBwZW5kQ2hpbGQoaXNzdWVzKTtcclxuICAgIHRlY2hJbmZvLmFwcGVuZENoaWxkKGxhbmcpO1xyXG5cclxuICAgIGJyaWVmUmVwb0luZm8uYXBwZW5kQ2hpbGQocmVwb0xpbmspO1xyXG4gICAgYnJpZWZSZXBvSW5mby5hcHBlbmRDaGlsZCh0ZWNoSW5mbyk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gYWRkaW5nIGRlc2NyaXB0aW9uXHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSB0aGlzLmNyZWF0ZUVsZW0oXCJkaXZcIiwgdGhpcy5jc3MuZGVzY3JpcHRpb24pO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAvLyBhZGRpbmcgY3JlYXRpb24gYW5kIHVwZGF0ZSBkYXRlc1xyXG4gICAgbGV0IGRhdGVzQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwidGFibGVcIiwgdGhpcy5jc3MuZGF0ZXNDb250YWluZXIpO1xyXG4gICAgZGF0ZXNDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiJHt0aGlzLmNzcy53aWRlcldpZHRofVwiPkNyZWF0ZWQ6IDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNzcy5kYXJrQW5kQm9sZH1cIj4ke3RoaXMudG9EYXRlU3RyaW5nKHRoaXMuY3JlYXRlZEF0KX08L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCIke3RoaXMuY3NzLndpZGVyV2lkdGh9XCI+VXBkYXRlZDogPHNwYW4gY2xhc3M9XCIke3RoaXMuY3NzLmRhcmtBbmRCb2xkfVwiPiR7dGhpcy50b0RhdGVTdHJpbmcodGhpcy5jcmVhdGVkQXQpfTwvc3Bhbj48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgYFxyXG5cclxuICAgIHJlcG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGJyaWVmUmVwb0luZm8pO1xyXG4gICAgcmVwb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgcmVwb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZXNDb250YWluZXIpO1xyXG5cclxuICAgIHJlcG9DYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZGV4Q29udGFpbmVyKTtcclxuICAgIHJlcG9DYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlcG9JbmZvQ29udGFpbmVyKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHJlcG9DYXJkQ29udGFpbmVyO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVXNlckNhcmQge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuYXZhdGFyVXJsID0gb3B0aW9ucy5hdmF0YXJfdXJsO1xyXG4gICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gICAgdGhpcy5odG1sVXJsID0gb3B0aW9ucy5odG1sX3VybDtcclxuICAgIHRoaXMuYmxvZyA9IG9wdGlvbnMuYmxvZyB8fCBcIlwiO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IG9wdGlvbnMubG9jYXRpb24gfHwgbnVsbDtcclxuICAgIHRoaXMucHVibGljUmVwb3MgPSBvcHRpb25zLnB1YmxpY19yZXBvcyB8fCAwO1xyXG4gICAgdGhpcy5wdWJsaWNHaXN0cyA9IG9wdGlvbnMucHVibGljX2dpc3RzIHx8IDA7XHJcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IG9wdGlvbnMuY3JlYXRlZF9hdDtcclxuICAgIHRoaXMudXBkYXRlZEF0ID0gb3B0aW9ucy51cGRhdGVkX2F0O1xyXG5cclxuICAgIHRoaXMuY3NzID0ge1xyXG4gICAgICB1c2VyQ2FyZENvbnRhaW5lcjogXCJ1c2VyLWNhcmRcIixcclxuICAgICAgYXZhdGFyOiBcInVzZXItY2FyZF9fYXZhdGFyXCIsXHJcbiAgICAgIHVzZXJJbmZvQ29udGFpbmVyOiBcInVzZXItY2FyZF9fdXNlci1pbmZvLWNvbnRhaW5lclwiLFxyXG4gICAgICB3cmFwcGVyOiBcIndyYXBwZXJcIixcclxuICAgICAgbmFtZTogXCJ1c2VyLWNhcmRfX25hbWVcIixcclxuICAgICAgbGlua0NvbnRhaW5lcjogXCJ1c2VyLWNhcmRfX2xpbmstY29udGFpbmVyXCIsXHJcbiAgICAgIGxpbms6IFwibGluayB1c2VyLWNhcmRfX2xpbmtcIixcclxuICAgICAgbG9jYXRpb246IFwidXNlci1jYXJkX19sb2NhdGlvblwiLFxyXG4gICAgICBkYXRlc0NvbnRhaW5lcjogXCJ1c2VyLWNhcmRfX2RhdGVzLWNvbnRhaW5lclwiLFxyXG4gICAgICBkYXRlOiBcInVzZXItY2FyZF9fZGF0ZVwiLFxyXG4gICAgICByZXBvQW5kR2lzdENvbnRhaW5lcjogXCJ1c2VyLWNhcmRfX3JlcG8tYW5kLWdpc3QtY29udGFpbmVyXCIsXHJcbiAgICAgIHJlcG9zaXRvcml1bTogXCJ1c2VyLWNhcmRfX3JlcG9zaXRvcml1bVwiLFxyXG4gICAgICBnaXN0OiBcInVzZXItY2FyZF9fZ2lzdFwiLFxyXG4gICAgICBiaWdOdW06IFwidXNlci1jYXJkX2ZvbnQtc2l6ZV9iaWdcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9EYXRlU3RyaW5nKHZhbHVlKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCA/IFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpIDogZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gOyBcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW0odGFnTmFtZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSB8fCBcImRpdlwiKTtcclxuICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYXJrdXAoKSB7XHJcbiAgICAvLyBjcmVhdGUgdXNlciBjYXJkIGNvbnRhaW5lclxyXG4gICAgbGV0IHVzZXJDYXJkQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLnVzZXJDYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYXZhdGFyIGltYWdlXHJcbiAgICBsZXQgYXZhdGFyID0gdGhpcy5jcmVhdGVFbGVtKFwiaW1nXCIsIHRoaXMuY3NzLmF2YXRhcik7XHJcbiAgICBhdmF0YXIuc3JjID0gdGhpcy5hdmF0YXJVcmw7XHJcblxyXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciB3aXRoIGluZm8gKHdpdGhvdXQgcXVhbnRpdHkgb2YgcmVwb3MgYW5kIGdpc3RzKVxyXG4gICAgbGV0IHVzZXJJbmZvQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLnVzZXJJbmZvQ29udGFpbmVyKTtcclxuXHJcblxyXG4gICAgLy8gd3JhcCBlbGVtZW50cyBiZWxvdyBmb3IgcG9zaXRpb25pbmdcclxuICAgIGxldCB3cmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLndyYXBwZXIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBuYW1lIHRpdGxlXHJcbiAgICBsZXQgbmFtZSA9IHRoaXMuY3JlYXRlRWxlbShcImgyXCIsIHRoaXMuY3NzLm5hbWUpO1xyXG4gICAgbmFtZS5pbm5lclRleHQgPSB0aGlzLm5hbWU7XHJcblxyXG4gICAgLy8gY3JlYXRlIGxpbmtzIG9uIGdpdGh1YiBhbmQgYmxvZyBhY2NvdW50cyBcclxuICAgIGxldCBsaW5rQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwic3BhblwiLCB0aGlzLmNzcy5saW5rQ29udGFpbmVyKTtcclxuICAgIGxpbmtDb250YWluZXIuaW5uZXJIVE1MID0gYFsgPGEgaHJlZj1cIiR7dGhpcy5odG1sVXJsfVwiIGNsYXNzPVwiJHt0aGlzLmNzcy5saW5rfVwiIHRhcmdldD1cIl9ibGFua1wiPkdpdGh1YjwvYT4gfCA8YSBocmVmPVwiJHt0aGlzLmJsb2d9XCIgY2xhc3M9XCIke3RoaXMuY3NzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPkJsb2c8L2E+IF1gO1xyXG5cclxuICAgIC8vIGFwcGVuZCBuYW1lIGFuZCBsaW5rQ29udGFpbmVyIHRvIHdyYXBwZXJcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xyXG5cclxuXHJcbiAgICAvLyBsb2NhdGlvbiBsb2dvIHdpbGwgYXBwZW5kIHRocm91Z2ggQ1NTXHJcbiAgICBsZXQgbG9jYXRpb24gPSB0aGlzLmNyZWF0ZUVsZW0oXCJzcGFuXCIsIHRoaXMuY3NzLmxvY2F0aW9uKTtcclxuICAgIGxvY2F0aW9uLmlubmVyVGV4dCA9IHRoaXMubG9jYXRpb24gfHwgXCJ1bmtub3duXCI7XHJcblxyXG4gICAgXHJcbiAgICAvLyBkYXRlIHRhYmxlIGNyZWF0aW9uXHJcbiAgICBsZXQgdGltZVRhYmxlID0gdGhpcy5jcmVhdGVFbGVtKFwidGFibGVcIiwgdGhpcy5jc3MuZGF0ZXNDb250YWluZXIpO1xyXG4gICAgdGltZVRhYmxlLmlubmVySFRNTCA9IGBcclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD5DcmVhdGVkOjwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiJHt0aGlzLmNzcy5kYXRlfVwiPiR7dGhpcy50b0RhdGVTdHJpbmcodGhpcy5jcmVhdGVkQXQpfTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+VXBkYXRlZDo8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cIiR7dGhpcy5jc3MuZGF0ZX1cIj4ke3RoaXMudG9EYXRlU3RyaW5nKHRoaXMudXBkYXRlZEF0KX08L3RkPiAgICAgICAgXHJcbiAgICAgIDwvdHI+XHJcbiAgICBgO1xyXG5cclxuXHJcbiAgICB1c2VySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgIHVzZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuICAgIHVzZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVUYWJsZSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgcXVhbnRpdHkgb2YgcmVwb3NpdG9yaWVzIGFuZCBnaXN0c1xyXG4gICAgbGV0IHJlcG9BbmRHaXN0Q29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwidGFibGVcIiwgdGhpcy5jc3MucmVwb0FuZEdpc3RDb250YWluZXIpO1xyXG4gICAgcmVwb0FuZEdpc3RDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiJHt0aGlzLmNzcy5iaWdOdW19ICR7dGhpcy5jc3MucmVwb3NpdG9yaXVtfVwiPiR7dGhpcy5wdWJsaWNSZXBvc308L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cIiR7dGhpcy5jc3MuYmlnTnVtfSAke3RoaXMuY3NzLmdpc3R9XCI+JHt0aGlzLnB1YmxpY0dpc3RzfTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cIiR7dGhpcy5jc3MucmVwb3NpdG9yaXVtfVwiPnJlcG9zPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCIke3RoaXMuY3NzLmdpc3R9XCI+Z2lzdHM8L3RkPiAgICAgICAgXHJcbiAgICAgIDwvdHI+XHJcbiAgICBgXHJcblxyXG5cclxuICAgIHVzZXJDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGF2YXRhcik7XHJcbiAgICB1c2VyQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VySW5mb0NvbnRhaW5lcik7XHJcbiAgICB1c2VyQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXBvQW5kR2lzdENvbnRhaW5lcilcclxuXHJcbiAgICByZXR1cm4gdXNlckNhcmRDb250YWluZXI7XHJcbiAgfVxyXG59IiwiLy8gbG9hZCBzdHlsZXNcclxuaW1wb3J0IFwiLi9tYWluLnN0eWxcIjtcclxuXHJcbi8vIGxvYWQgY29uc3RydWN0b3JzXHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL3VzZXItaW5mby91c2VyLmpzXCI7XHJcbmltcG9ydCBSZXBvQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL3JlcG9zaXRvcnktaW5mby9yZXBvLmpzXCI7XHJcblxyXG5cclxuXHJcbmxldCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ib2R5XCIpO1xyXG5sZXQgdXNlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItaW5mb1wiKTtcclxubGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtdGFiX19zZWFyY2gtaW5wdXRcIik7XHJcbmxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC10YWJfX3NlYXJjaC1idG5cIik7XHJcbmxldCB1c2VySW5mbyA9IHt9LFxyXG4gICAgcmVwb0luZm8gPSBbXTtcclxuXHJcblxyXG4vLyBhZnRlciB3aW5kb3cgd2FzIHJlbG9hZGVkIC0gY2xlYXIgYWxsIGRhdGEgaW4gbG9jYWxzdG9yYWdlICAgIFxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG59XHJcblxyXG4vLyB2YWxpZGF0aW9uIGFuZCB0aGVuIGZpbmRpbmdcclxuc2VhcmNoQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgbGV0IHVzZXJuYW1lID0gc2VhcmNoSW5wdXQudmFsdWU7XHJcbiAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC10YWJfX3NlYXJjaC1pbnB1dF9uby12YWxpZGF0aW9uXCIpO1xyXG5cclxuICAvLyBpZiBlbXB0eSBmaWVsZCBoaWdobGlnaHQgaXRcclxuICBpZiAodXNlcm5hbWUgPT0gXCJcIikge1xyXG4gICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZChcInNlYXJjaC10YWJfX3NlYXJjaC1pbnB1dF9uby12YWxpZGF0aW9uXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdXNlck5hbWUgY29pbmNpZGVzIHdpdGggdmFsdWUgaW4gaW5wdXQgLSBkb24ndCBwcm92aWRlIHNlYXJjaFxyXG4gIGlmIChsb2NhbFN0b3JhZ2UudXNlck5hbWUgPT0gdXNlcm5hbWUpIHJldHVybjtcclxuXHJcbiAgZmluZFVzZXIodXNlcm5hbWUpO1xyXG59XHJcblxyXG4vLyBmaW5kIHVzZXIgaW5mbyBieSByZXF1ZXN0aW5nIHRvIHRoZSBzZXJ2ZXJcclxuZnVuY3Rpb24gZmluZFVzZXIobmFtZSkge1xyXG5cclxuICAvLyB0byBmaW5kIHVzZXIgZXZlbiB3aGVuIGNsaWVudCBlbnRlcnMgc29tZSB1cHBlcmNhc2UgbGV0dGVycyBcclxuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gIFByb21pc2UuYWxsKFtcclxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBBSkFYUmVxdWVzdChgL2ZpeHR1cmVzL3VzZXJzLyR7bmFtZX0uanNvbmAsIChhamF4KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWpheC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShhamF4LnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgXHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogYWpheC5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGFqYXguc3RhdHVzVGV4dFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KSxcclxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBBSkFYUmVxdWVzdChgL2ZpeHR1cmVzL3VzZXJzLyR7bmFtZX0vcmVwb3MuanNvbmAsIChhamF4KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWpheC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShhamF4LnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgXHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogYWpheC5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGFqYXguc3RhdHVzVGV4dFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG5cclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgLy8gc29ydCByZWNpZXZlZCBkYXRhIGFuZCBhc3NpZ24gdG8gdmFyaWFibGVzXHJcbiAgICAgIHJlc3VsdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnNwbGljZSkge1xyXG4gICAgICAgICAgcmVwb0luZm8gPSBpdGVtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1c2VySW5mbyA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gY2xlYXIgZmllbGQgZnJvbSBsYXN0IHNlYXJjaGlnIHNlc3Npb25cclxuICAgICAgdXNlckluZm9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHVzZXJJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ1c2VyLWluZm9fbm90LWZvdW5kXCIpXHJcblxyXG4gICAgICAvLyBjcmVhdGUgdXNlckNvbnRhaW5lciBIVE1MLWVsZW1lbnRcclxuICAgICAgbGV0IHVzZXJDb250YWluZXIgPSBuZXcgVXNlckNhcmQodXNlckluZm8pO1xyXG4gICAgICB1c2VyQ29udGFpbmVyID0gdXNlckNvbnRhaW5lci5jcmVhdGVNYXJrdXAoKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSByZXBvQ29udGFpbmVyIEhUTUwtZWxlbWVudFxyXG4gICAgICBsZXQgcmVwb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHJlcG9Db250YWluZXIuY2xhc3NOYW1lID0gXCJyZXBvLWNvbnRhaW5lclwiO1xyXG4gICAgICByZXBvQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJyZXBvLWNvbnRhaW5lcl9fdGl0bGVcIj5SZXBvc2l0b3JpZXM8L2gyPmA7XHJcblxyXG4gICAgICByZXBvSW5mby5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlcG9zaXRvcnlDYXJkID0gbmV3IFJlcG9DYXJkKGl0ZW0pO1xyXG4gICAgICAgIHJlcG9zaXRvcnlDYXJkID0gcmVwb3NpdG9yeUNhcmQuY3JlYXRlTWFya3VwKGkgKyAxKTtcclxuICAgICAgICByZXBvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlcG9zaXRvcnlDYXJkKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHVzZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJDb250YWluZXIpO1xyXG4gICAgICB1c2VySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXBvQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIC8vIHdyaXRlIG5hbWUgb2YgdXNlciBpbnRvIGxvY2FsU3RvcmFnZVxyXG4gICAgICBsb2NhbFN0b3JhZ2UudXNlck5hbWUgPSBuYW1lO1xyXG4gICAgfSxcclxuICAgIChvYmopID0+IHsgLy8gcmVqZWN0OiBoYW5kbGUgb3RoZXIgcmVzcG9uc2VzXHJcbiAgICAgIGlmIChvYmouc3RhdHVzID09IDQwNCkge1xyXG4gICAgICAgIHVzZXJJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ1c2VyLWluZm9fbm90LWZvdW5kXCIpXHJcbiAgICAgICAgdXNlckluZm9Db250YWluZXIuaW5uZXJIVE1MID0gXCJVc2VyIG5vdCBmb3VuZFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9iai5zdGF0dXMgKyBcIjogXCIgKyBvYmouc3RhdHVzVGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBBSkFYIHJlcXVlc3RzXHJcbmZ1bmN0aW9uIEFKQVhSZXF1ZXN0KGRlc3QsIGhhbmRsZXIpIHtcclxuICBsZXQgYWpheCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICBhamF4Lm9wZW4oXCJHRVRcIiwgZGVzdCwgdHJ1ZSk7XHJcblxyXG4gIGFqYXgub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgLy8gaWYgcmVzcG9uc2UgZG9lc24ndCBsb2FkZWQgICAgXHJcbiAgICBpZiAoYWpheC5yZWFkeVN0YXRlICE9IDQpIHJldHVybjtcclxuXHJcbiAgICBoYW5kbGVyKGFqYXgpO1xyXG4gIH1cclxuXHJcbiAgYWpheC5zZW5kKCk7XHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9