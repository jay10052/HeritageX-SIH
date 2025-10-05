const questions = [
    {
        q: "taj",
        a: "The **Taj Mahal** is not just a building, but a timeless symbol of love, located in Agra, Uttar Pradesh. It was commissioned in 1632 by the Mughal emperor **Shah Jahan** to house the tomb of his favorite wife, Mumtaz Mahal. It’s renowned for its immaculate white marble, intricate inlay work (Pietra Dura), and perfect symmetry. The four minarets surrounding the central dome lean slightly outwards to prevent them from crashing onto the tomb in case of an earthquake. It is truly one of the 'New Wonders of the World'."
    },
    {
        q: "bhangra",
        a: "Bhangra is a powerful and vibrant folk dance that originated in **Punjab**, primarily as a harvest dance (Baisakhi). It's known for its energetic movements, acrobatic stunts, and rhythmic beats of the **Dhol** drum. Traditionally, men perform Bhangra, wearing bright, colorful costumes like the *pagri* (turban) and *turla*. It has evolved significantly and is now a popular dance form celebrated globally, often fused with modern music genres."
    },
    {
        q: "diwali",
        a: "The festival of **Diwali** (Deepawali), or the 'festival of lights', is one of the most important Hindu festivals. It symbolizes the **spiritual victory of light over darkness, good over evil, and knowledge over ignorance**. It is traditionally celebrated over five days. The main day commemorates **Lord Rama’s return** to Ayodhya after defeating Ravana, and also the worship of Goddess Lakshmi, the goddess of wealth and prosperity. It is celebrated by lighting earthen lamps (*diyas*), fireworks, and exchanging sweets."
    },
    {
        q: "kathakali",
        a: "**Kathakali** is a major form of classical Indian dance and drama, originating in **Kerala**. It is instantly recognizable by its elaborate **make-up (*chutti*)**, detailed costumes, unique facial expressions (*mudras*), and dramatic gestures. Kathakali literally translates to 'Story-Play'. Performers enact stories from the Hindu epics (like Ramayana and Mahabharata) and Puranas, communicating entirely through body language and rhythmic footwork, accompanied by percussion and singing."
    },
    {
        q: "ajanta",
        a: "The **Ajanta Caves** are a set of about 30 rock-cut Buddhist cave monuments located in Maharashtra. They are famous globally for their stunning and fragile **mural paintings** and beautiful sculptures that date back from the 2nd century BCE to about 480 CE. The art depicts the **Jataka tales** (stories of the Buddha's previous lives). These masterpieces are considered some of the finest surviving examples of ancient Indian art and are a **UNESCO World Heritage Site**."
    },
    {
        q: "jaipur",
        a: "**Jaipur**, the capital of Rajasthan, is known as the **'Pink City'** because of the distinct color of its buildings in the old city area, painted pink for a visit by the Prince of Wales in 1876. It is home to iconic heritage sites like the **Hawa Mahal** (Palace of Winds), **Amber Fort**, and **City Palace**. It was founded in 1727 by Maharaja Sawai Jai Singh II and is one of the best-planned cities of early India."
    },
    {
        q: "ladakh|mountains",
        a: "**Ladakh**, often called 'The Land of High Passes', is famous for its breathtaking and rugged **mountain landscapes**. It is a high-altitude cold desert, situated between the Karakoram and Great Himalayas. It is known for its stark beauty, crystalline lakes (like Pangong Tso), high-altitude passes, and unique **Tibetan Buddhist culture** (evident in its many monasteries, or *Gompas*, like Hemis and Thiksey). Tourism here focuses on adventure, culture, and nature."
    },
    {
        q: "hampi|vijayanagara",
        a: "**Hampi** is a UNESCO World Heritage Site in Karnataka, known for the magnificent ruins of the **Vijayanagara Empire**, a powerful Hindu kingdom from the 14th to 16th centuries. The landscape is dotted with enormous boulders and stunning temples like the **Virupaksha Temple** and the stone chariot at the Vittala Temple complex. It's an archaeological marvel that showcases sophisticated urban planning and temple architecture."
    },
    {
        q: "kolkata|calcutta",
        a: "**Kolkata** (formerly Calcutta), the capital of West Bengal, is often referred to as the **'Cultural Capital of India'** and the 'City of Joy'. It's famous for its grand colonial architecture, including the **Victoria Memorial**, the Howrah Bridge, and its rich intellectual history. It was the capital of British India until 1911 and remains a major center for art, literature, and cinema."
    },
    {
        q: "sarnath|buddhism",
        a: "**Sarnath**, located near Varanasi in Uttar Pradesh, is a place of immense historical and religious significance, especially for **Buddhism**. It is here that **Gautama Buddha** gave his first sermon after attaining enlightenment, setting the **Dharma Chakra** (Wheel of Dharma) in motion. Key structures include the Dhamek Stupa and the Ashoka Pillar. It symbolizes the birth of the Buddhist *Sangha* (community)."
    }
];

// DOM Elements
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton'); 

// Function to add a message to the chatbox
function displayMessage(text, sender) {
    const msgElement = document.createElement('p');
    msgElement.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    msgElement.innerHTML = text;
    chatbox.appendChild(msgElement);
    
    // Auto-scroll to the latest message
    chatbox.scrollTop = chatbox.scrollHeight;
}

//function to handle user input and AI response
function sendMessage() {
    const input = userInput.value.trim();
    if (input === "") return;
    displayMessage(input, 'user');
    userInput.value = ""; 
    let response = "I'm still learning about that specific aspect of Indian heritage! Try asking me about key historical sites like the **Taj Mahal**, **Hampi**, **Sarnath**, or cultural elements like **Bhangra** or **Diwali**.";
    const lowerInput = input.toLowerCase();
    
    // Simple keyword matching
    for (const item of questions) {
        const keywords = item.q.split('|');
        if (keywords.some(keyword => lowerInput.includes(keyword))) {
            response = item.a;
            break;
        }
    }
    setTimeout(() => {
        displayMessage(response, 'ai'); 
    }, 500); 
}

// Event Listeners for seamless interaction
document.addEventListener('DOMContentLoaded', () => {
    // Initial welcome message when the page loads
    displayMessage("Hello! I am your AI Heritage Guide. Ask me anything about Indian heritage like **Taj Mahal** or **Bhangra**.", 'ai');
    
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }

    // Enter key press in the input field
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});