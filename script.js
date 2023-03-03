// TODO: add code here

window.addEventListener('load', function () {
  fetch(
    'https://handlers.education.launchcode.org/static/astronauts.json'
  ).then(function (response) {
    response.json().then(function (json) {
      const astronauts = json;
      console.log(astronauts);

      for (astronaut of astronauts) {
        const container = document.getElementById('container');
        const astronautDiv = document.createElement('div');
        container.appendChild(astronautDiv);
        astronautDiv.classList.add('astronaut');
        const bioDiv = document.createElement('div');
        bioDiv.classList.add('bio');
        astronautDiv.appendChild(bioDiv);
        const nameHeader = document.createElement('h3');
        nameHeader.textContent = `${astronaut.firstName} ${astronaut.lastName}`;
        bioDiv.appendChild(nameHeader);
      }
    });
  });
});
