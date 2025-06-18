document.addEventListener('DOMContentLoaded', () => {
const response_area = document.getElementById('response_area');
const chat_form  = document.getElementById('chat_form');
const user_input = document.getElementById('user_input');
const click_button = document.getElementById('click_button');

const randomReplies = ['Me', 'You', 'We'];

chat_form.addEventListener('submit', (event) => {
    event.preventDefault();

    const timestemp = new Date().toLocaleTimeString();

    const query = user_input.value.trim();

    const userMsg = document.createElement('div');
    userMsg.className = 'message-box user';
    userMsg.innerHTML = `You: ${query} <span class="timestemp">${timestemp}</span>`;
    response_area.appendChild(userMsg);

    const botMsg = document.createElement('div');
    const currentReply = randomReplies[Math.floor((Math.random() * randomReplies.length))];
    botMsg.className = 'message-box bot';
    botMsg.innerHTML = `Bot: ${currentReply} <span class="timestemp">${timestemp}</span>`;
    response_area.appendChild(botMsg);

    user_input.value = ``;
    response_area.scrollTop = response_area.scrollHeight;
});

click_button.addEventListener('click', () => {
    response_area.innerHTML = '';
});
});