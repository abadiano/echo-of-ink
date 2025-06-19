document.addEventListener('DOMContentLoaded', () => {
    const chat_form = document.getElementById('chat_form');
    const user_input = document.getElementById('user_input');
    const clear_button = document.getElementById('clear_button');
    const char_counter = document.getElementById('char_counter');
    const response_area = document.getElementById('response_area');
    const model_selector = document.getElementById('model_selector');
    const author_selector = document.getElementById('author_selector');
    const links = document.querySelectorAll('nav ul li a');
    const tabs = document.querySelectorAll('.tab');
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

    // local storage
    model_selector.addEventListener('change', () => {localStorage.setItem('model', model_selector.value);});
    const storedModel = localStorage.getItem('model');
    if (storedModel) model_selector.value = storedModel;
    
    author_selector.addEventListener('change', () => {localStorage.setItem('author', author_selector.value);});
    const storedAuthor = localStorage.getItem('author');
    if (storedAuthor) author_selector.value = storedAuthor;

    // Tab switching logic
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const current_link = link.dataset.tab;
            tabs.forEach(tab => {
                tab.classList.toggle('active', tab.id === current_link);
            });
        });
    });
    
    // Add listener to form
    chat_form.addEventListener('submit', (event) => {
        event.preventDefault();

        const query = user_input.value.trim();
        const response = randomResponses[Math.floor(Math.random ()* randomResponses.length)];
        const timestamp = new Date().toLocaleTimeString();
        const model = model_selector.value;
        const author = author_selector.value;


        const userMsg = document.createElement('div');
        userMsg.className = 'chat_message user';
        userMsg.innerHTML = `<p><strong>You:</strong> ${query} <span id="timestamp">${timestamp}</span></p>`;
        response_area.appendChild(userMsg);

        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'chat_message bot';
        typingIndicator.innerHTML = `<p>Bot is thinking...</p>`;
        response_area.appendChild(typingIndicator);
        
        const botMsg = document.createElement('div');
        botMsg.className = 'chat_message bot';
        botMsg.innerHTML = `<p><strong>Bot ${model} ${author}:</strong> ${response} <span id="timestamp">${timestamp}</span></p>`;
        setTimeout(() => {typingIndicator.remove(); response_area.appendChild(botMsg);}, 1000);

        user_input.value = '';
        char_counter.innerHTML = '';
        response_area.scrollTop = response_area.scrollHeight;
    });


    // Clear button
    clear_button.addEventListener('click', (event) => {
        response_area.innerHTML = '';
    });

    // Character Counter
    user_input.addEventListener('input', () => {
        char_counter.innerHTML = `${user_input.value.length} characters`;
    });
});