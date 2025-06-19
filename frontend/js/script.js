document.addEventListener('DOMContentLoaded', () => {
    const response_area = document.getElementById('response_area');
    const chat_form = document.getElementById('chat_form');
    const user_input = document.getElementById('user_input');
    const clear_button = document.getElementById('clear_button');
    const links = document.querySelectorAll('nav li a');
    const tabs = document.querySelectorAll('.tab');
    const model_selector = document.getElementById('model_selector');
    const author_selector = document.getElementById('author_selector');
    const char_counter = document.getElementById('char_counter');

    // Switch between tabs
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const currentLink = link.dataset.tab;
            tabs.forEach(tab => {
                tab.classList.toggle('active', tab.id === currentLink);
            });
        });
    });
    
    const randomResponses = [
        "Мудрость не в знании ответа, а в умении ждать рассвета.",
        "И в бурю сердца — покой мой ответ.",
        "Ты спрашиваешь — но ветер знает лучше.",
        "Вопрос твой звучен, но молчание — благородней.",
        "Всё пройдёт, и это — тоже откровение.",
        "Ответы приходят лишь тем, кто пишет пером на снегу.",
        "Я б ответил, да Муза ныне в раздумьях.",
        "Что ни спроси — жизнь всё равно перепишет иначе.",
        "Твоя мысль мчится, как тройка в метели — красива, но опасна.",
        "Молчи, душа моя — в молчании зреют истины.",
        "О, как бы славно было знать всё — но скучно стало бы жить.",
        "Ответ кроется в строках между строк.",
        "Я бы тебе ответил, но луна шепчет — не время.",
        "Пока ты спрашиваешь, я пишу новый сонет.",
        "В каждом вопросе — стих, в каждом ответе — загадка."
    ];

    // Store model and author selections locally
    model_selector.addEventListener('change', () => {localStorage.setItem('model', model_selector.value);});
    author_selector.addEventListener('change', () => {localStorage.setItem('author', author_selector.value);});

    // Load model and author selections if stored previously
    const savedModel = localStorage.getItem('model');
    const savedAuthor = localStorage.getItem('author');
    if (savedModel) model_selector.value = savedModel;
    if (savedAuthor) author_selector.value = savedAuthor;

    // Handle the form usage
    chat_form.addEventListener('submit', (event) => {
        event.preventDefault();

        const query = user_input.value.trim();
        const timestamp = new Date().toLocaleTimeString();
        const response = randomResponses[(Math.floor(Math.random() * randomResponses.length))];
        
        const model = model_selector.value;
        const author = author_selector.value;

        const userMsg = document.createElement('div');
        userMsg.className = 'message_box user';
        userMsg.innerHTML = `<p>You: ${query} <span class="timestamp">${timestamp}</span></p>`;
        response_area.appendChild(userMsg);
        
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message_box bot';
        typingIndicator.innerHTML = `Bot is thinking...`;
        response_area.appendChild(typingIndicator);

        const botMsg = document.createElement('div');
        botMsg.className = 'message_box bot';
        botMsg.innerHTML = `<p>Bot ${model} ${author}: ${response} <span class="timestamp">${timestamp}</span> </p>`;
        setTimeout(() => {typingIndicator.remove(), response_area.appendChild(botMsg)}, 1500);

        user_input.value = '';
        char_counter.innerHTML = '';
        response_area.scrollTop = response_area.scrollHeight;
    });

    // Handle the clear button
    clear_button.addEventListener('click', (event) => {
        event.preventDefault();
        response_area.innerHTML = '';
        char_counter.innerHTML = '';
    });

    user_input.addEventListener('input', () => {
        char_counter.innerHTML = `${user_input.value.length} characters`;
    });
});