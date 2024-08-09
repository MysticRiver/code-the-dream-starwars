document.addEventListener('DOMContentLoaded', function() {
    const apiBaseUrl = 'https://swapi.tech/api/';
    const mainContent = document.getElementById('main-content');

    function fetchData() {
        const currentUrl = window.location.href;
        let model;

        if (currentUrl.includes('index.html')) {
            model = 'people';
        } else if (currentUrl.includes('starships.html')) {
            model = 'starships';
        } else {
            console.error('Invalid URL');
            return;
        }

        const apiUrl = `${apiBaseUrl}${model}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayData(data.results, model);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayData(results, model) {
        mainContent.innerHTML = ''; // Clear previous content

        results.forEach(item => {
            const itemDiv = document.createElement('div');

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

            mainContent.appendChild(itemDiv);
        });
    }

    // Fetch data based on the current page URL
    fetchData();
});

