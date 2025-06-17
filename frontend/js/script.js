document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('my_form');
    const response_area = document.getElementById('response-area');
    const user_input = document.getElementById('user-input');
    const clear_btn = document.getElementById('clear-btn');

    const botReplies = [
        "Interesting, go on...",
        "Pushkin would've liked that.",
        "What else can you tell me?",
        "Hmm, fascinating.",
        "I see. Please continue.",
        "That reminds me of a poem..."
    ];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userText = user_input.value.trim();
        if (userText === '') return;

        const timestamp = new Date().toLocaleTimeString();

        // user message
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-bubble user';
        userMsg.innerHTML = `<strong>You:</strong> ${userText} <span class="timestamp">${timestamp}</span>`;
        response_area.appendChild(userMsg);

        // bot message
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-bubble bot';
        const randomResponse = botReplies[Math.floor(Math.random() * botReplies.length)];
        botMsg.innerHTML = `<strong>PushkinAI:</strong> ${randomResponse} <span class="timestamp">${timestamp}</span>`;
        response_area.appendChild(botMsg);

        user_input.value = '';
        response_area.scrollTop = response_area.scrollHeight;
    });

    clear_btn.addEventListener('click', () => {
        response_area.innerHTML = '';
    });
});
