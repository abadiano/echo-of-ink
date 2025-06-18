document.addEventListener('DOMContentLoaded', () => {
    const response_area = document.getElementById('response_area');
    const chat_form = document.getElementById('chat_form');
    const user_input = document.getElementById('user_input');
    const clear_button = document.getElementById('clear_button');
    const model_selector = document.getElementById('model_selector');
    const poet_selector = document.getElementById('poet_selector');
    const links = document.querySelectorAll('nav li a');
    const tabs = document.querySelectorAll('.tab');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedTab = link.dataset.tab;
            
            tabs.forEach(tab => {
                tab.classList.toggle('active', tab.id === selectedTab);
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


chat_form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const timestamp = new Date().toLocaleTimeString();
    const query = user_input.value.trim();
    const response = randomResponses[Math.floor((Math.random() * randomResponses.length))];
    const model = model_selector.value;
    const poet = poet_selector.value;

    const userMsg = document.createElement('div');
    userMsg.className = 'chat_box user';
    userMsg.innerHTML = `You: ${query} <span class="timestamp">${timestamp}</span>`;
    response_area.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.className = 'chat_box bot';
    botMsg.innerHTML = `Bot ${model} ${poet}: ${response}`;
    response_area.appendChild(botMsg);

    user_input.value = '';
    response_area.scrollTop = response_area.scrollHeight;
});

clear_button.addEventListener('click', (event) => {
    event.preventDefault();
    response_area.innerHTML = '';
});

});