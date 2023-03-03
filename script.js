// TODO: add code here

window.addEventListener('load', function () {
  fetch(
    'https://handlers.education.launchcode.org/static/astronauts.json'
  ).then(function (response) {
    response.json().then(function (json) {
      const astronauts = json;

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
        const unorderedList = document.createElement('ul');
        bioDiv.appendChild(unorderedList);
        const hoursInSpace = document.createElement('li');
        hoursInSpace.textContent = `Hours in space: ${astronaut.hoursInSpace}`;
        unorderedList.appendChild(hoursInSpace);
        const active = document.createElement('li');
        active.classList.add(astronaut.active === true ? 'green' : 'red');
        active.textContent = `Active: ${astronaut.active}`;
        unorderedList.appendChild(active);
        const skills = document.createElement('li');
        let skillsContent = '';
        const skillsArray = astronaut.skills;
        for (let i = 0; i < skillsArray.length; i++) {
          if (i === skillsArray.length - 1) {
            skillsContent += skillsArray[i];
          } else {
            skillsContent += `${skillsArray[i]}, `;
          }
        }
        skills.textContent = `Skills: ${skillsContent}`;
        unorderedList.appendChild(skills);
        const image = document.createElement('img');
        image.classList.add('avatar');
        image.setAttribute('src', astronaut.picture);
        astronautDiv.appendChild(image);
      }
    });
  });
});
