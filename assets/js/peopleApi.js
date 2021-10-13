const API = "https://jsonplaceholder.typicode.com/users";
const btnSearch = document.getElementById("btnSearch");

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      //  console.log(json);
      fillData(json);
    })
    .catch((error) => {
      console.log("Error in the API", error);
    });
};

const fillData = (data) => {
  let html = "";

 data.forEach((pp) => {
    html += '<div class="col">';
    html += ' <div class="card h-100">';
    html += `<h5 class="card-title">${pp.name}</h5>`;
    html += '<div class="card-body">';
    html += `<small class="text-muted">${pp.address.suite}</small>`;
    html += `<p class="card-text">${pp.email}</p>`;
    html += `<p class="card-text">Episodes: ${pp.phone}</p>`;
    html += `<p class="card-text"> <a  href="${pp.website}" target="_blank">Web personal</a></p>`;

    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("dataPeople").innerHTML = html;
};

btnSearch.onclick = function () {
  getData(API);
};
