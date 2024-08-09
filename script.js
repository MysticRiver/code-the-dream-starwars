//Fetch data from SWAPI and display it in script.js
// Wait for the entire DOM (Document Object Model) to be fully loaded and parsed before executing the code within this function.
document.addEventListener('DOMContentLoaded', function() {

    // Define the API endpoint URL to fetch Star Wars people data.
    const apiUrl = 'https://swapi.tech/api/people'; 

    // Fetch data from the specified API URL using the Fetch API.
    fetch(apiUrl)

        // Parse the response as JSON.
        .then(response => response.json())

        // Process the fetched data.
        .then(data => {

            // Get a reference to the main content element where the data will be displayed.
            const mainContent = document.getElementById('main-content'); 

            // Iterate through each 'person' object in the 'results' array of the fetched data.
            data.results.forEach(person => {

                // Create a new 'div' element to hold the person's information.
                const personDiv = document.createElement('div');

                // Set the inner HTML of the 'div' to display the person's name, height, and mass.
                personDiv.innerHTML = `<h2>${person.name}</h2>
                                        <p>Height: ${person.height}</p>
                                        <p>Mass: ${person.mass}</p>`;

                // Append the newly created 'personDiv' to the 'mainContent' element to display it on the page.
                mainContent.appendChild(personDiv);
            });
        })

        // Handle any errors that occur during the fetch process.
        .catch(error => console.error('Error fetching data:', error)); 
});
