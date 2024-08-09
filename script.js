// **Event Listener:** Waits for the DOM to fully load before executing the code

document.addEventListener('DOMContentLoaded', function () {
    // **Base URL for the Star Wars API**
    const apiBaseUrl = 'https://swapi.dev/api/';
    
    // **Reference to the main content area in the HTML**
    const mainContent = document.getElementById('main-content');

    // **Fetches data from the Star Wars API based on the current page URL**
    function fetchData() {
        const currentUrl = window.location.href;
        let model;

        // **Determines the data model ('people' or 'starships') based on the URL**
        if (currentUrl.includes('index.html')) {
            model = 'people';
        } else if (currentUrl.includes('starships.html')) {
            model = 'starships';
        } else {
            console.error('Invalid URL');
            return; // **Exits the function if the URL is invalid**
        }

        const apiUrl = `${apiBaseUrl}${model}`; // **Constructs the full API URL**

        // **Fetches data from the API**
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayData(data.results, model); // **Calls the displayData function to render the fetched data**
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // **Dynamically renders the fetched data based on the model**
    function displayData(results, model) {
        mainContent.innerHTML = ''; // **Clears previous content**

        results.forEach(item => {
            const itemDiv = document.createElement('div');

            // **Uses a switch statement to determine the content to display based on the model**
            switch (model) {
                case 'people':
                    itemDiv.innerHTML = `<h2>${item.name}</h2>
                                        <p>Height: ${item.height}</p>
                                        <p>Mass: ${item.mass}</p>`;
                    break;
                case 'starships':
                    itemDiv.innerHTML = `<h2>${item.name}</h2>
                                        <p>Model: ${item.model}</p>
                                        <p>Manufacturer: ${item.manufacturer}</p>`;
                    break;
                default:
                    break;
            }

            mainContent.appendChild(itemDiv); // **Appends the created div to the main content area**
        });
    }

    // **Initial data fetch when the page loads**
    fetchData();
});