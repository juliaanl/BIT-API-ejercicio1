const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {

    return fetch(api)

    .then((response) => response.json())
    .then((array)=> {
        
        fillData(array.results); 
    })   
    .catch((error)=> {
        console.log("Fault", error);
    })
};
const fillData = (rmInfo) => {
  let html = "";
  

  rmInfo.forEach((rm) => {
    html += '<div class="col">';
    html += ' <div class="card h-100">';
    html += `<img src="${rm.image}" class="card-img-top" alt="${rm.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${rm.name}</h5>`;
    html += `<h5 class="card-title">${rm.status}</h5>`;
  

    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("dataAlbum").innerHTML = html;
};

getData(API);