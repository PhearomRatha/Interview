

    const cars = [
        { name: 'BMW X7', image: 'asset/image/bmw_x7.png', price: '$200,000' },
        { name: 'BMW X6', image: 'asset/image/image_2024-09-05_141143625-removebg-preview.png', price: '$150,000' },
        { name: 'BMW X5', image: 'asset/image/image_2024-09-05_141435129-removebg-preview.png', price: '$180,000' },
        { name: 'BMW X4', image: 'asset/image/image_2024-09-05_142253049-removebg-preview.png', price: '$200,000' },
        { name: 'BMW X3', image: 'asset/image/image_2024-09-05_143110735-removebg-preview.png', price: '$150,000' },
        { name: 'BMW X2', image: 'asset/image/image_2024-09-05_151038236-removebg-preview.png', price: '$180,000' }
    ];

    function searchCars() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const results = document.getElementById('search-results');
        results.innerHTML = '';  // Clear previous results

        cars.forEach(car => {
            if (car.name.toLowerCase().includes(query)) {
                const listItem = document.createElement('li');
                listItem.textContent = car.name;
                listItem.onclick = () => selectCar(car);
                results.appendChild(listItem);
            }
        });
    }

    function selectCar(car) {
        localStorage.setItem('selectedCar', JSON.stringify(car));
        window.location.href = 'cart.html';
    }

