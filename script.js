function generateCountry() {
    const nameInput = document.getElementById('name').value;
    const countries = [
        { name: 'USA', message: 'The land of freedom and opportunities!', image: 'usa.jpg' },
        { name: 'Canada', message: 'Get ready for some maple syrup and hockey!', image: 'canada.jpg' },
        { name: 'Australia', message: 'G'day mate! Prepare for kangaroos and the Outback!', image: 'australia.jpg' },
        { name: 'Japan', message: 'Experience the beauty of cherry blossoms and sushi!', image: 'japan.jpg' },
        { name: 'Germany', message: 'Get ready for bratwurst and the Autobahn!', image: 'germany.jpg' },
        { name: 'Brazil', message: 'Samba, soccer, and the Amazon rainforest await you!', image: 'brazil.jpg' },
        { name: 'India', message: 'Namaste! Explore the rich culture and spices of India!', image: 'india.jpg' },
        { name: 'South Africa', message: 'Witness the beauty of wildlife and diverse landscapes!', image: 'south_africa.jpg' },
        { name: 'France', message: 'Bonjour! Enjoy art, cuisine, and the Eiffel Tower!', image: 'france.jpg' },
        { name: 'UK', message: 'Cheers! Brace yourself for tea, accents, and historical landmarks!', image: 'uk.jpg' },
    ];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * countries.length);

    // Get the selected country
    const selectedCountry = countries[randomIndex];

    // Display the pop-up
    const popup = document.getElementById('popup');
    const countryNameElement = document.getElementById('countryName');
    const countryMessageElement = document.getElementById('countryMessage');
    const countryImageElement = document.getElementById('countryImage');
    countryNameElement.innerText = `${nameInput}, you might end up in ${selectedCountry.name}!`;
    countryMessageElement.innerText = selectedCountry.message;
    countryImageElement.src = selectedCountry.image;
    popup.style.display = 'block';

    // Play a sound effect (you can add your own sound file)
    const audio = new Audio('pop.mp3');
    audio.play();
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function shareResult() {
    // Implement the logic to share the result on social media
    alert('Sharing functionality coming soon!');
}
