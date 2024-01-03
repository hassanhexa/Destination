function generateCountry() {
    const nameInput = document.getElementById('name').value;
    const friends = {
        HASSAN: 'JANNAT',
        ARSLAN: 'SAUDIA ARABIA',
        HAMZA: 'NORWAY',
        JAHANZAIB: 'MEXICO',
        RUMAN: 'AFGHANISTAN',
        KHIZAR: 'PALESTINE',
        HAMMAD: 'INDIA',
        OSAMA: 'USA',
        SHAJEE: 'IRAN',
    };

    // Check if the entered name is in the friends list
    const country = friends[nameInput];

    if (country) {
        // Display the pop-up
        const popup = document.getElementById('popup');
        const friendNameElement = document.getElementById('friendName');
        const countryNameElement = document.getElementById('countryName');
        friendNameElement.innerText = `${nameInput}, your fate awaits...`;
        countryNameElement.innerText = `You Will end up in ${country}!`;
        popup.style.display = 'block';
    } else {
        // Display an error message if the name is not found
        alert('Sorry, the name is not in the list of friends.');
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
