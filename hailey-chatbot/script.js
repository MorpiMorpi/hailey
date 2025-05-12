// Function to send a message to the chatbox
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Display the user's message
    addMessage(userInput, 'user');

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Simulate a response from HAILEY (You can replace this with Botpress API interaction)
    setTimeout(() => {
        // Example response, replace with real Botpress API call
        const response = getBotResponse(userInput);
        addMessage(response, 'bot');
    }, 1000);
}

// Function to display messages in the chatbox
function addMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the latest message
}

// Function to simulate Botpress API response (replace with real API interaction)
function getBotResponse(userInput) {
    // For demo purposes, simulate different responses based on user input
    if (userInput.includes("stressed")) {
        return "It seems like you're feeling stressed. Would you like a breathing exercise or a positive affirmation?";
    } else if (userInput.includes("happy")) {
        return "I'm glad you're feeling good! Keep up the positivity!";
    } else {
        return "I'm here to help you. Can you tell me more about how you're feeling?";
    }
}
