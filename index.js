const app = "I don't do much.";

// let xhr = new XMLHttpRequest();
// xhr.open("GET", 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';

// xhr.onload = function() {
//   console.log(xhr.response);
// };

// xhr.onerror = function() {
//   console.log('Booo');
// };

// xhr.send();


// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json())
//   .then(json => console.log(json));


const token = "ACCESS_TOKEN"

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token $(token)`
  }
}).then(res => res.json()).then(json => console.log(json));


  




