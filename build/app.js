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
window.addEventListener("load", () => {
  localStorage.clear();
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0Ly4vYXBwL2NvbXBvbmVudHMvcmVwb3NpdG9yeS1pbmZvL3JlcG8uanMiLCJ3ZWJwYWNrOi8vZ2l0Ly4vYXBwL2NvbXBvbmVudHMvdXNlci1pbmZvL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZ2l0Ly4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2dpdC8uL2FwcC9tYWluLnN0eWwiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlJlcG9DYXJkIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwibmFtZSIsImh0bWxVcmwiLCJodG1sX3VybCIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkX2F0IiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsInN0YXJnYXplcnNDb3VudCIsInN0YXJnYXplcnNfY291bnQiLCJmb3Jrc0NvdW50IiwiZm9ya3NfY291bnQiLCJvcGVuSXNzdWVzQ291bnQiLCJvcGVuX2lzc3Vlc19jb3VudCIsImNzcyIsInJlcG9DYXJkQ29udGFpbmVyIiwiaW5kZXhDb250YWluZXIiLCJyZXBvSW5mb0NvbnRhaW5lciIsImJyaWVmUmVwb0luZm8iLCJyZXBvTGluayIsInRlY2hJbmZvIiwicmVwb1N0YXJzIiwicmVwb0ZvcmtzIiwicmVwb0lzc3VlcyIsInJlcG9MYW5nIiwiZGF0ZXNDb250YWluZXIiLCJkYXJrQW5kQm9sZCIsIndpZGVyV2lkdGgiLCJ0b0RhdGVTdHJpbmciLCJ2YWx1ZSIsImRhdGUiLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJjcmVhdGVFbGVtIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVNYXJrdXAiLCJpbmRleCIsImlubmVyVGV4dCIsImhyZWYiLCJ0YXJnZXQiLCJkZWZhdWx0VmFsdWUiLCJzdGFycyIsImZvcmtzIiwiaXNzdWVzIiwibGFuZyIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiVXNlckNhcmQiLCJhdmF0YXJVcmwiLCJhdmF0YXJfdXJsIiwiYmxvZyIsImxvY2F0aW9uIiwicHVibGljUmVwb3MiLCJwdWJsaWNfcmVwb3MiLCJwdWJsaWNHaXN0cyIsInB1YmxpY19naXN0cyIsInVzZXJDYXJkQ29udGFpbmVyIiwiYXZhdGFyIiwidXNlckluZm9Db250YWluZXIiLCJ3cmFwcGVyIiwibGlua0NvbnRhaW5lciIsImxpbmsiLCJyZXBvQW5kR2lzdENvbnRhaW5lciIsInJlcG9zaXRvcml1bSIsImdpc3QiLCJiaWdOdW0iLCJzcmMiLCJ0aW1lVGFibGUiLCJtYWluQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJ0biIsInVzZXJJbmZvIiwicmVwb0luZm8iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJvbmNsaWNrIiwidXNlcm5hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ1c2VyTmFtZSIsImZpbmRVc2VyIiwidG9Mb3dlckNhc2UiLCJQcm9taXNlIiwiYWxsIiwicmVzb2x2ZSIsInJlamVjdCIsIkFKQVhSZXF1ZXN0IiwiYWpheCIsInN0YXR1cyIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJ0aGVuIiwicmVzdWx0IiwiZm9yRWFjaCIsIml0ZW0iLCJzcGxpY2UiLCJ1c2VyQ29udGFpbmVyIiwicmVwb0NvbnRhaW5lciIsImkiLCJyZXBvc2l0b3J5Q2FyZCIsIm9iaiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZGVzdCIsImhhbmRsZXIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNB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QztBQUNBeEIsd0JBQWtCWixTQUFsQixHQUE4QixnQkFBOUI7QUFDRCxLQUhELE1BR087QUFDTDZELGNBQVFDLEdBQVIsQ0FBWUYsSUFBSWQsTUFBSixHQUFhLElBQWIsR0FBb0JjLElBQUlWLFVBQXBDO0FBQ0Q7QUFDRixHQTVFTyxFQTZFUGEsS0E3RU8sQ0E2RURDLFNBQVM7QUFDZEgsWUFBUUMsR0FBUixDQUFZRSxLQUFaO0FBQ0QsR0EvRU8sQ0FBUjtBQWlGSDs7QUFHRDtBQUNBLFNBQVNwQixXQUFULENBQXFCcUIsSUFBckIsRUFBMkJDLE9BQTNCLEVBQW9DO0FBQ2xDLE1BQUlyQixPQUFPLElBQUlzQixjQUFKLEVBQVg7O0FBRUF0QixPQUFLdUIsSUFBTCxDQUFVLEtBQVYsRUFBaUJILElBQWpCLEVBQXVCLElBQXZCOztBQUVBcEIsT0FBS3dCLGtCQUFMLEdBQTBCLE1BQU07QUFDOUI7QUFDQSxRQUFJeEIsS0FBS3lCLFVBQUwsSUFBbUIsQ0FBdkIsRUFBMEI7O0FBRTFCSixZQUFRckIsSUFBUjtBQUNELEdBTEQ7O0FBT0FBLE9BQUswQixJQUFMO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNoSkQseUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBSZXBvQ2FyZCB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gICAgdGhpcy5odG1sVXJsID0gb3B0aW9ucy5odG1sX3VybDtcclxuICAgIHRoaXMuY3JlYXRlZEF0ID0gb3B0aW9ucy5jcmVhdGVkX2F0O1xyXG4gICAgdGhpcy51cGRhdGVkQXQgPSBvcHRpb25zLnVwZGF0ZWRfYXQ7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gb3B0aW9ucy5kZXNjcmlwdGlvbjtcclxuICAgIHRoaXMubGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlO1xyXG4gICAgdGhpcy5zdGFyZ2F6ZXJzQ291bnQgPSBvcHRpb25zLnN0YXJnYXplcnNfY291bnQ7XHJcbiAgICB0aGlzLmZvcmtzQ291bnQgPSBvcHRpb25zLmZvcmtzX2NvdW50O1xyXG4gICAgdGhpcy5vcGVuSXNzdWVzQ291bnQgPSBvcHRpb25zLm9wZW5faXNzdWVzX2NvdW50O1xyXG4gICAgXHJcbiAgICB0aGlzLmNzcyA9IHtcclxuICAgICAgcmVwb0NhcmRDb250YWluZXI6IFwicmVwby1jYXJkXCIsXHJcbiAgICAgIGluZGV4Q29udGFpbmVyOiBcInJlcG8tY2FyZF9faW5kZXgtY29udGFpbmVyXCIsXHJcbiAgICAgIHJlcG9JbmZvQ29udGFpbmVyOiBcInJlcG8tY2FyZF9fcmVwby1pbmZvLWNvbnRhaW5lclwiLFxyXG4gICAgICBicmllZlJlcG9JbmZvOiBcInJlcG8tY2FyZF9fYnJpZWYtaW5mb1wiLFxyXG4gICAgICByZXBvTGluazogXCJyZXBvLWNhcmRfX3JlcG8tbGlua1wiLFxyXG4gICAgICB0ZWNoSW5mbzogXCJyZXBvLWNhcmRfX3RlY2gtaW5mb1wiLFxyXG4gICAgICByZXBvU3RhcnM6IFwicmVwby1jYXJkX19yZXBvLXN0YXJzXCIsXHJcbiAgICAgIHJlcG9Gb3JrczogXCJyZXBvLWNhcmRfX3JlcG8tZm9ya3NcIixcclxuICAgICAgcmVwb0lzc3VlczogXCJyZXBvLWNhcmRfX3JlcG8taXNzdWVzXCIsXHJcbiAgICAgIHJlcG9MYW5nOiBcInJlcG8tY2FyZF9fcmVwby1sYW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcInJlcG8tY2FyZF9fZGVzY3JpcHRpb25cIixcclxuICAgICAgZGF0ZXNDb250YWluZXI6IFwicmVwby1jYXJkX19kYXRlcy1jb250YWluZXJcIixcclxuICAgICAgZGFya0FuZEJvbGQ6IFwicmVwby1jYXJkX19kYXRlcy1jb250YWluZXJfZGFyay1hbmQtYm9sZFwiLFxyXG4gICAgICB3aWRlcldpZHRoOiBcInJlcG8tY2FyZF9fZGF0ZXMtY29udGFpbmVyX3dpZGVyLXdpZHRoXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvRGF0ZVN0cmluZyh2YWx1ZSkge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPCAxMCA/IFwiMFwiICsgZGF0ZS5nZXREYXRlKCkgOiBkYXRlLmdldERhdGUoKTtcclxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCA/IFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpIDogZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gOyBcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW0odGFnTmFtZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSB8fCBcImRpdlwiKTtcclxuICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYXJrdXAoaW5kZXgpIHtcclxuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIHJlcG8gaW5mb1xyXG4gICAgbGV0IHJlcG9DYXJkQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLnJlcG9DYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciBpbmRleCBudW1iZXJcclxuICAgIGxldCBpbmRleENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbShcImRpdlwiLCB0aGlzLmNzcy5pbmRleENvbnRhaW5lcik7XHJcbiAgICBpbmRleENvbnRhaW5lci5pbm5lclRleHQgPSBpbmRleCB8fCAnMSc7XHJcblxyXG4gICAgLy8gY3JlYXRlIHJlcG8gaW5mbyBjb250YWluZXJcclxuICAgIGxldCByZXBvSW5mb0NvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbShcImRpdlwiLCB0aGlzLmNzcy5yZXBvSW5mb0NvbnRhaW5lcilcclxuXHJcbiAgICAvLyBicmllZiBpbmZvIGFib3V0IG5hbWUsIHN0YXJzLCBmb3JrcywgaXNzdWVzIGFuZCBsYW5ndWFnZVxyXG4gICAgbGV0IGJyaWVmUmVwb0luZm8gPSB0aGlzLmNyZWF0ZUVsZW0oXCJkaXZcIiwgdGhpcy5jc3MuYnJpZWZSZXBvSW5mbyk7XHJcbiAgICBcclxuICAgIC8vIGNyZWF0ZSBsaW5rIG9uIHJlcG9cclxuICAgIGxldCByZXBvTGluayA9IHRoaXMuY3JlYXRlRWxlbShcImFcIiwgdGhpcy5jc3MucmVwb0xpbmspO1xyXG4gICAgcmVwb0xpbmsuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG4gICAgcmVwb0xpbmsuaHJlZiA9IHRoaXMuaHRtbFVybDtcclxuICAgIHJlcG9MaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcblxyXG5cclxuICAgIC8vIGNyZWF0ZSB0ZWNoLWluZm8gYWJvdXRcclxuICAgIGxldCB0ZWNoSW5mbyA9IHRoaXMuY3JlYXRlRWxlbShcImRpdlwiLCB0aGlzLmNzcy50ZWNoSW5mbyk7XHJcblxyXG4gICAgLy8gYWRkaW5nIGV4aXN0aW5nIGluZm9ybWF0aW9uXHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gdGhpcy5jcmVhdGVFbGVtKFwic3BhblwiKTtcclxuICAgIGxldCBzdGFycywgZm9ya3MsIGlzc3VlcywgbGFuZztcclxuXHJcbiAgICBzdGFycyA9IGZvcmtzID0gaXNzdWVzID0gbGFuZyA9IGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGFyZ2F6ZXJzQ291bnQpIHtcclxuICAgICAgc3RhcnMgPSB0aGlzLmNyZWF0ZUVsZW0oJ2RpdicsIHRoaXMuY3NzLnJlcG9TdGFycylcclxuICAgICAgc3RhcnMuaW5uZXJUZXh0ID0gdGhpcy5zdGFyZ2F6ZXJzQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5mb3Jrc0NvdW50KSB7XHJcbiAgICAgIGZvcmtzID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLnJlcG9Gb3Jrcyk7XHJcbiAgICAgIGZvcmtzLmlubmVyVGV4dCA9IHRoaXMuZm9ya3NDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLm9wZW5Jc3N1ZXNDb3VudCkge1xyXG4gICAgICBpc3N1ZXMgPSB0aGlzLmNyZWF0ZUVsZW0oXCJkaXZcIiwgdGhpcy5jc3MucmVwb0lzc3Vlcyk7XHJcbiAgICAgIGlzc3Vlcy5pbm5lclRleHQgPSB0aGlzLm9wZW5Jc3N1ZXNDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmxhbmd1YWdlKSB7XHJcbiAgICAgIGlzc3VlcyA9IHRoaXMuY3JlYXRlRWxlbShcImRpdlwiLCB0aGlzLmNzcy5yZXBvTGFuZyk7XHJcbiAgICAgIGlzc3Vlcy5pbm5lclRleHQgPSB0aGlzLmxhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHRlY2hJbmZvLmFwcGVuZENoaWxkKHN0YXJzKTtcclxuICAgIHRlY2hJbmZvLmFwcGVuZENoaWxkKGZvcmtzKTtcclxuICAgIHRlY2hJbmZvLmFwcGVuZENoaWxkKGlzc3Vlcyk7XHJcbiAgICB0ZWNoSW5mby5hcHBlbmRDaGlsZChsYW5nKTtcclxuXHJcbiAgICBicmllZlJlcG9JbmZvLmFwcGVuZENoaWxkKHJlcG9MaW5rKTtcclxuICAgIGJyaWVmUmVwb0luZm8uYXBwZW5kQ2hpbGQodGVjaEluZm8pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIGFkZGluZyBkZXNjcmlwdGlvblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLmRlc2NyaXB0aW9uKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XHJcblxyXG4gICAgLy8gYWRkaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGUgZGF0ZXNcclxuICAgIGxldCBkYXRlc0NvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbShcInRhYmxlXCIsIHRoaXMuY3NzLmRhdGVzQ29udGFpbmVyKTtcclxuICAgIGRhdGVzQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cIiR7dGhpcy5jc3Mud2lkZXJXaWR0aH1cIj5DcmVhdGVkOiA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jc3MuZGFya0FuZEJvbGR9XCI+JHt0aGlzLnRvRGF0ZVN0cmluZyh0aGlzLmNyZWF0ZWRBdCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiJHt0aGlzLmNzcy53aWRlcldpZHRofVwiPlVwZGF0ZWQ6IDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNzcy5kYXJrQW5kQm9sZH1cIj4ke3RoaXMudG9EYXRlU3RyaW5nKHRoaXMuY3JlYXRlZEF0KX08L3NwYW4+PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIGBcclxuXHJcbiAgICByZXBvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChicmllZlJlcG9JbmZvKTtcclxuICAgIHJlcG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIHJlcG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVzQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXBvQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmRleENvbnRhaW5lcik7XHJcbiAgICByZXBvQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXBvSW5mb0NvbnRhaW5lcik7XHJcblxyXG5cclxuICAgIHJldHVybiByZXBvQ2FyZENvbnRhaW5lcjtcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFVzZXJDYXJkIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLmF2YXRhclVybCA9IG9wdGlvbnMuYXZhdGFyX3VybDtcclxuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgIHRoaXMuaHRtbFVybCA9IG9wdGlvbnMuaHRtbF91cmw7XHJcbiAgICB0aGlzLmJsb2cgPSBvcHRpb25zLmJsb2cgfHwgXCJcIjtcclxuICAgIHRoaXMubG9jYXRpb24gPSBvcHRpb25zLmxvY2F0aW9uIHx8IG51bGw7XHJcbiAgICB0aGlzLnB1YmxpY1JlcG9zID0gb3B0aW9ucy5wdWJsaWNfcmVwb3MgfHwgMDtcclxuICAgIHRoaXMucHVibGljR2lzdHMgPSBvcHRpb25zLnB1YmxpY19naXN0cyB8fCAwO1xyXG4gICAgdGhpcy5jcmVhdGVkQXQgPSBvcHRpb25zLmNyZWF0ZWRfYXQ7XHJcbiAgICB0aGlzLnVwZGF0ZWRBdCA9IG9wdGlvbnMudXBkYXRlZF9hdDtcclxuXHJcbiAgICB0aGlzLmNzcyA9IHtcclxuICAgICAgdXNlckNhcmRDb250YWluZXI6IFwidXNlci1jYXJkXCIsXHJcbiAgICAgIGF2YXRhcjogXCJ1c2VyLWNhcmRfX2F2YXRhclwiLFxyXG4gICAgICB1c2VySW5mb0NvbnRhaW5lcjogXCJ1c2VyLWNhcmRfX3VzZXItaW5mby1jb250YWluZXJcIixcclxuICAgICAgd3JhcHBlcjogXCJ3cmFwcGVyXCIsXHJcbiAgICAgIG5hbWU6IFwidXNlci1jYXJkX19uYW1lXCIsXHJcbiAgICAgIGxpbmtDb250YWluZXI6IFwidXNlci1jYXJkX19saW5rLWNvbnRhaW5lclwiLFxyXG4gICAgICBsaW5rOiBcImxpbmsgdXNlci1jYXJkX19saW5rXCIsXHJcbiAgICAgIGxvY2F0aW9uOiBcInVzZXItY2FyZF9fbG9jYXRpb25cIixcclxuICAgICAgZGF0ZXNDb250YWluZXI6IFwidXNlci1jYXJkX19kYXRlcy1jb250YWluZXJcIixcclxuICAgICAgZGF0ZTogXCJ1c2VyLWNhcmRfX2RhdGVcIixcclxuICAgICAgcmVwb0FuZEdpc3RDb250YWluZXI6IFwidXNlci1jYXJkX19yZXBvLWFuZC1naXN0LWNvbnRhaW5lclwiLFxyXG4gICAgICByZXBvc2l0b3JpdW06IFwidXNlci1jYXJkX19yZXBvc2l0b3JpdW1cIixcclxuICAgICAgZ2lzdDogXCJ1c2VyLWNhcmRfX2dpc3RcIixcclxuICAgICAgYmlnTnVtOiBcInVzZXItY2FyZF9mb250LXNpemVfYmlnXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvRGF0ZVN0cmluZyh2YWx1ZSkge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPCAxMCA/IFwiMFwiICsgZGF0ZS5nZXREYXRlKCkgOiBkYXRlLmdldERhdGUoKTtcclxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCA/IFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpIDogZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gOyBcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW0odGFnTmFtZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSB8fCBcImRpdlwiKTtcclxuICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYXJrdXAoKSB7XHJcbiAgICAvLyBjcmVhdGUgdXNlciBjYXJkIGNvbnRhaW5lclxyXG4gICAgbGV0IHVzZXJDYXJkQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLnVzZXJDYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYXZhdGFyIGltYWdlXHJcbiAgICBsZXQgYXZhdGFyID0gdGhpcy5jcmVhdGVFbGVtKFwiaW1nXCIsIHRoaXMuY3NzLmF2YXRhcik7XHJcbiAgICBhdmF0YXIuc3JjID0gdGhpcy5hdmF0YXJVcmw7XHJcblxyXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciB3aXRoIGluZm8gKHdpdGhvdXQgcXVhbnRpdHkgb2YgcmVwb3MgYW5kIGdpc3RzKVxyXG4gICAgbGV0IHVzZXJJbmZvQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLnVzZXJJbmZvQ29udGFpbmVyKTtcclxuXHJcblxyXG4gICAgLy8gd3JhcCBlbGVtZW50cyBiZWxvdyBmb3IgcG9zaXRpb25pbmdcclxuICAgIGxldCB3cmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtKFwiZGl2XCIsIHRoaXMuY3NzLndyYXBwZXIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBuYW1lIHRpdGxlXHJcbiAgICBsZXQgbmFtZSA9IHRoaXMuY3JlYXRlRWxlbShcImgyXCIsIHRoaXMuY3NzLm5hbWUpO1xyXG4gICAgbmFtZS5pbm5lclRleHQgPSB0aGlzLm5hbWU7XHJcblxyXG4gICAgLy8gY3JlYXRlIGxpbmtzIG9uIGdpdGh1YiBhbmQgYmxvZyBhY2NvdW50cyBcclxuICAgIGxldCBsaW5rQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwic3BhblwiLCB0aGlzLmNzcy5saW5rQ29udGFpbmVyKTtcclxuICAgIGxpbmtDb250YWluZXIuaW5uZXJIVE1MID0gYFsgPGEgaHJlZj1cIiR7dGhpcy5odG1sVXJsfVwiIGNsYXNzPVwiJHt0aGlzLmNzcy5saW5rfVwiIHRhcmdldD1cIl9ibGFua1wiPkdpdGh1YjwvYT4gfCA8YSBocmVmPVwiJHt0aGlzLmJsb2d9XCIgY2xhc3M9XCIke3RoaXMuY3NzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPkJsb2c8L2E+IF1gO1xyXG5cclxuICAgIC8vIGFwcGVuZCBuYW1lIGFuZCBsaW5rQ29udGFpbmVyIHRvIHdyYXBwZXJcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xyXG5cclxuXHJcbiAgICAvLyBsb2NhdGlvbiBsb2dvIHdpbGwgYXBwZW5kIHRocm91Z2ggQ1NTXHJcbiAgICBsZXQgbG9jYXRpb24gPSB0aGlzLmNyZWF0ZUVsZW0oXCJzcGFuXCIsIHRoaXMuY3NzLmxvY2F0aW9uKTtcclxuICAgIGxvY2F0aW9uLmlubmVyVGV4dCA9IHRoaXMubG9jYXRpb24gfHwgXCJ1bmtub3duXCI7XHJcblxyXG4gICAgXHJcbiAgICAvLyBkYXRlIHRhYmxlIGNyZWF0aW9uXHJcbiAgICBsZXQgdGltZVRhYmxlID0gdGhpcy5jcmVhdGVFbGVtKFwidGFibGVcIiwgdGhpcy5jc3MuZGF0ZXNDb250YWluZXIpO1xyXG4gICAgdGltZVRhYmxlLmlubmVySFRNTCA9IGBcclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD5DcmVhdGVkOjwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiJHt0aGlzLmNzcy5kYXRlfVwiPiR7dGhpcy50b0RhdGVTdHJpbmcodGhpcy5jcmVhdGVkQXQpfTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+VXBkYXRlZDo8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cIiR7dGhpcy5jc3MuZGF0ZX1cIj4ke3RoaXMudG9EYXRlU3RyaW5nKHRoaXMudXBkYXRlZEF0KX08L3RkPiAgICAgICAgXHJcbiAgICAgIDwvdHI+XHJcbiAgICBgO1xyXG5cclxuXHJcbiAgICB1c2VySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgIHVzZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuICAgIHVzZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVUYWJsZSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgcXVhbnRpdHkgb2YgcmVwb3NpdG9yaWVzIGFuZCBnaXN0c1xyXG4gICAgbGV0IHJlcG9BbmRHaXN0Q29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtKFwidGFibGVcIiwgdGhpcy5jc3MucmVwb0FuZEdpc3RDb250YWluZXIpO1xyXG4gICAgcmVwb0FuZEdpc3RDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiJHt0aGlzLmNzcy5iaWdOdW19ICR7dGhpcy5jc3MucmVwb3NpdG9yaXVtfVwiPiR7dGhpcy5wdWJsaWNSZXBvc308L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cIiR7dGhpcy5jc3MuYmlnTnVtfSAke3RoaXMuY3NzLmdpc3R9XCI+JHt0aGlzLnB1YmxpY0dpc3RzfTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cIiR7dGhpcy5jc3MucmVwb3NpdG9yaXVtfVwiPnJlcG9zPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCIke3RoaXMuY3NzLmdpc3R9XCI+Z2lzdHM8L3RkPiAgICAgICAgXHJcbiAgICAgIDwvdHI+XHJcbiAgICBgXHJcblxyXG5cclxuICAgIHVzZXJDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGF2YXRhcik7XHJcbiAgICB1c2VyQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VySW5mb0NvbnRhaW5lcik7XHJcbiAgICB1c2VyQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXBvQW5kR2lzdENvbnRhaW5lcilcclxuXHJcbiAgICByZXR1cm4gdXNlckNhcmRDb250YWluZXI7XHJcbiAgfVxyXG59IiwiLy8gbG9hZCBzdHlsZXNcclxuaW1wb3J0IFwiLi9tYWluLnN0eWxcIjtcclxuXHJcbi8vIGxvYWQgY29uc3RydWN0b3JzXHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL3VzZXItaW5mby91c2VyLmpzXCI7XHJcbmltcG9ydCBSZXBvQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL3JlcG9zaXRvcnktaW5mby9yZXBvLmpzXCI7XHJcblxyXG5cclxuXHJcbmxldCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ib2R5XCIpO1xyXG5sZXQgdXNlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItaW5mb1wiKTtcclxubGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtdGFiX19zZWFyY2gtaW5wdXRcIik7XHJcbmxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC10YWJfX3NlYXJjaC1idG5cIik7XHJcbmxldCB1c2VySW5mbyA9IHt9LFxyXG4gICAgcmVwb0luZm8gPSBbXTtcclxuXHJcblxyXG4vLyBhZnRlciB3aW5kb3cgd2FzIHJlbG9hZGVkIC0gY2xlYXIgYWxsIGRhdGEgaW4gbG9jYWxzdG9yYWdlICAgIFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG59KVxyXG5cclxuLy8gdmFsaWRhdGlvbiBhbmQgdGhlbiBmaW5kaW5nXHJcbnNlYXJjaEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gIGxldCB1c2VybmFtZSA9IHNlYXJjaElucHV0LnZhbHVlO1xyXG4gIHNlYXJjaElucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWFyY2gtdGFiX19zZWFyY2gtaW5wdXRfbm8tdmFsaWRhdGlvblwiKTtcclxuXHJcbiAgLy8gaWYgZW1wdHkgZmllbGQgaGlnaGxpZ2h0IGl0XHJcbiAgaWYgKHVzZXJuYW1lID09IFwiXCIpIHtcclxuICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtdGFiX19zZWFyY2gtaW5wdXRfbm8tdmFsaWRhdGlvblwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIGlmIHVzZXJOYW1lIGNvaW5jaWRlcyB3aXRoIHZhbHVlIGluIGlucHV0IC0gZG9uJ3QgcHJvdmlkZSBzZWFyY2hcclxuICBpZiAobG9jYWxTdG9yYWdlLnVzZXJOYW1lID09IHVzZXJuYW1lKSByZXR1cm47XHJcblxyXG4gIGZpbmRVc2VyKHVzZXJuYW1lKTtcclxufVxyXG5cclxuLy8gZmluZCB1c2VyIGluZm8gYnkgcmVxdWVzdGluZyB0byB0aGUgc2VydmVyXHJcbmZ1bmN0aW9uIGZpbmRVc2VyKG5hbWUpIHtcclxuXHJcbiAgLy8gdG8gZmluZCB1c2VyIGV2ZW4gd2hlbiBjbGllbnQgZW50ZXJzIHNvbWUgdXBwZXJjYXNlIGxldHRlcnMgXHJcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblxyXG4gICAgcmV0dXJuICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgQUpBWFJlcXVlc3QoYC9maXh0dXJlcy91c2Vycy8ke25hbWV9Lmpzb25gLCAoYWpheCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFqYXguc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoYWpheC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gIFxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICBzdGF0dXM6IGFqYXguc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBhamF4LnN0YXR1c1RleHRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgQUpBWFJlcXVlc3QoYC9maXh0dXJlcy91c2Vycy8ke25hbWV9L3JlcG9zLmpzb25gLCAoYWpheCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFqYXguc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoYWpheC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gIFxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICBzdGF0dXM6IGFqYXguc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBhamF4LnN0YXR1c1RleHRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgXSlcclxuXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIC8vIHNvcnQgcmVjaWV2ZWQgZGF0YSBhbmQgYXNzaWduIHRvIHZhcmlhYmxlc1xyXG4gICAgICByZXN1bHQuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5zcGxpY2UpIHtcclxuICAgICAgICAgIHJlcG9JbmZvID0gaXRlbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXNlckluZm8gPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIGNsZWFyIGZpZWxkIGZyb20gbGFzdCBzZWFyY2hpZyBzZXNzaW9uXHJcbiAgICAgIHVzZXJJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB1c2VySW5mb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidXNlci1pbmZvX25vdC1mb3VuZFwiKVxyXG5cclxuICAgICAgLy8gY3JlYXRlIHVzZXJDb250YWluZXIgSFRNTC1lbGVtZW50XHJcbiAgICAgIGxldCB1c2VyQ29udGFpbmVyID0gbmV3IFVzZXJDYXJkKHVzZXJJbmZvKTtcclxuICAgICAgdXNlckNvbnRhaW5lciA9IHVzZXJDb250YWluZXIuY3JlYXRlTWFya3VwKCk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgcmVwb0NvbnRhaW5lciBIVE1MLWVsZW1lbnRcclxuICAgICAgbGV0IHJlcG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICByZXBvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicmVwby1jb250YWluZXJcIjtcclxuICAgICAgcmVwb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwicmVwby1jb250YWluZXJfX3RpdGxlXCI+UmVwb3NpdG9yaWVzPC9oMj5gO1xyXG5cclxuICAgICAgcmVwb0luZm8uZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIGxldCByZXBvc2l0b3J5Q2FyZCA9IG5ldyBSZXBvQ2FyZChpdGVtKTtcclxuICAgICAgICByZXBvc2l0b3J5Q2FyZCA9IHJlcG9zaXRvcnlDYXJkLmNyZWF0ZU1hcmt1cChpICsgMSk7XHJcbiAgICAgICAgcmVwb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXBvc2l0b3J5Q2FyZCk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB1c2VySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VyQ29udGFpbmVyKTtcclxuICAgICAgdXNlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocmVwb0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAvLyB3cml0ZSBuYW1lIG9mIHVzZXIgaW50byBsb2NhbFN0b3JhZ2VcclxuICAgICAgbG9jYWxTdG9yYWdlLnVzZXJOYW1lID0gbmFtZTtcclxuICAgIH0sXHJcbiAgICAob2JqKSA9PiB7IC8vIHJlamVjdDogaGFuZGxlIG90aGVyIHJlc3BvbnNlc1xyXG4gICAgICBpZiAob2JqLnN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICB1c2VySW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidXNlci1pbmZvX25vdC1mb3VuZFwiKVxyXG4gICAgICAgIHVzZXJJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiVXNlciBub3QgZm91bmRcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvYmouc3RhdHVzICsgXCI6IFwiICsgb2JqLnN0YXR1c1RleHQpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgQUpBWCByZXF1ZXN0c1xyXG5mdW5jdGlvbiBBSkFYUmVxdWVzdChkZXN0LCBoYW5kbGVyKSB7XHJcbiAgbGV0IGFqYXggPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgYWpheC5vcGVuKFwiR0VUXCIsIGRlc3QsIHRydWUpO1xyXG5cclxuICBhamF4Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgIC8vIGlmIHJlc3BvbnNlIGRvZXNuJ3QgbG9hZGVkICAgIFxyXG4gICAgaWYgKGFqYXgucmVhZHlTdGF0ZSAhPSA0KSByZXR1cm47XHJcblxyXG4gICAgaGFuZGxlcihhamF4KTtcclxuICB9XHJcblxyXG4gIGFqYXguc2VuZCgpO1xyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==