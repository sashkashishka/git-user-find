// load styles
import "./main.styl";

// load constructors
import UserCard from "./components/user-info/user.js";
import RepoCard from "./components/repository-info/repo.js";



let mainBody = document.querySelector(".main-body");
let userInfoContainer = document.querySelector(".user-info");
let searchInput = document.querySelector(".search-tab__search-input");
let searchBtn = document.querySelector(".search-tab__search-btn");
let userInfo = {},
    repoInfo = [];


// after window was reloaded - clear all data in localstorage    
window.addEventListener("load", () => {
  localStorage.clear();
})

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
}

// find user info by requesting to the server
function findUser(name) {

  // to find user even when client enters some uppercase letters 
  name = name.toLowerCase();


    return  Promise.all([
        new Promise((resolve, reject) => {
          AJAXRequest(`/fixtures/users/${name}.json`, (ajax) => {
            switch (ajax.status) {
              case 200:
                resolve(JSON.parse(ajax.responseText));
                break;
  
              default:
                reject({
                  status: ajax.status,
                  statusText: ajax.statusText
                })
  
            }
          })
        }),
        new Promise((resolve, reject) => {
          AJAXRequest(`/fixtures/users/${name}/repos.json`, (ajax) => {
            switch (ajax.status) {
              case 200:
                resolve(JSON.parse(ajax.responseText));
                break;
  
              default:
                reject({
                  status: ajax.status,
                  statusText: ajax.statusText
                })
            }
          })
        })
      ])
    .then((result) => {
      // sort recieved data and assign to variables
      result.forEach(item => {
        if (item.splice) {
          repoInfo = item;
        } else {
          userInfo = item;
        }
      })

      // clear field from last searchig session
      userInfoContainer.innerHTML = '';
      userInfoContainer.classList.remove("user-info_not-found")

      // create userContainer HTML-element
      let userContainer = new UserCard(userInfo);
      userContainer = userContainer.createMarkup();

      // create repoContainer HTML-element
      let repoContainer = document.createElement("div");
      repoContainer.className = "repo-container";
      repoContainer.innerHTML = `<h2 class="repo-container__title">Repositories</h2>`;

      repoInfo.forEach((item, i) => {
        let repositoryCard = new RepoCard(item);
        repositoryCard = repositoryCard.createMarkup(i + 1);
        repoContainer.appendChild(repositoryCard);
      })

      userInfoContainer.appendChild(userContainer);
      userInfoContainer.appendChild(repoContainer);

      // write name of user into localStorage
      localStorage.userName = name;
    },
    (obj) => { // reject: handle other responses
      if (obj.status == 404) {
        userInfoContainer.classList.add("user-info_not-found")
        userInfoContainer.innerHTML = "User not found";
      } else {
        console.log(obj.status + ": " + obj.statusText);
      }
    })
    .catch(error => {
      console.log(error);
    })

}


// function to create AJAX requests
function AJAXRequest(dest, handler) {
  let ajax = new XMLHttpRequest();

  ajax.open("GET", dest, true);

  ajax.onreadystatechange = () => {
    // if response doesn't loaded    
    if (ajax.readyState != 4) return;

    handler(ajax);
  }

  ajax.send();
}
