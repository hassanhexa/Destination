// Create an array to store participants
const participantsList = [];

function generateCountry() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const friends = {
        hassan: 'JANNAT',
        arslan: 'SAUDIA ARABIA',
        hamza: 'NORWAY',
        jahanzaib: 'MEXICO',
        ruman: 'AFGHANISTAN',
        khizar: 'PALESTINE',
        hammad: 'INDIA',
        osama: 'USA',
        shajee: 'IRAN',
    };

    // Check if the entered name is in the friends list
    const country = friends[nameInput];

    if (country) {
        // Display the pop-up
        const popup = document.getElementById('popup');
        const friendNameElement = document.getElementById('friendName');
        const countryNameElement = document.getElementById('countryName');
        friendNameElement.innerText = `${nameInput}, your fate awaits...`;
        countryNameElement.innerText = `You might end up in ${country}!`;
        popup.style.display = 'block';

        // Add the participant to the list
        participantsList.push({ name: nameInput, country });

        // Update the participants list on the page
        updateParticipantsList();
    } else {
        // Display an error message if the name is not found
        alert('Sorry, the name is not in the list of friends.');
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Function to update the participants list on the page
function updateParticipantsList() {
    const participantsListElement = document.getElementById('participantsList');
    participantsListElement.innerHTML = '';

    participantsList.forEach((participant) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${participant.name}: ${participant.country}`;
        participantsListElement.appendChild(listItem);
    });
}
