function generateCountry() {
    const nameInput = document.getElementById('name').value;
    const countries = ['USA', 'Canada', 'Australia', 'Japan', 'Germany', 'Brazil', 'India', 'South Africa', 'France', 'UK'];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * countries.length);

    // Get the country name
    const countryName = countries[randomIndex];

    // Display the pop-up
    const popup = document.getElementById('popup');
    const countryNameElement = document.getElementById('countryName');
    countryNameElement.innerText = `${nameInput}, you might end up in ${countryName}!`;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
