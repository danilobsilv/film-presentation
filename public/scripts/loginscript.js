let password = document.querySelector("#password").value;
let username = document.querySelector("#username").value;

fetch('/json/users.json')
  .then(response => response.json())
  .then(users => {
    const user = users.find(data => data.username === username && data.password === password);
    if (user) {
      
    } else {

    }
  })
  .catch(error => console.error(error));
