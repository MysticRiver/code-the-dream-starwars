//Fetch data from SWAPI and display it in script.js
document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://swapi.tech/api/people';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const mainContent = document.getElementById('main-content');
            data.results.forEach(person => {
                const personDiv = document.createElement('div');
                personDiv.innerHTML = `<h2>${person.name}</h2>
                                       <p>Height: ${person.height}</p>
                                       <p>Mass: ${person.mass}</p>`;
                mainContent.appendChild(personDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});