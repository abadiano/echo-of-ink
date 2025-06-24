document.addEventListener("DOMContentLoaded", () => {
  const model_selector = document.getElementById("model_selector");
  const author_selector = document.getElementById("author_selector");
  const response_area = document.getElementById("response_area");
  const user_input = document.getElementById("user_input");
  const clear_button = document.getElementById("clear_button");
  const char_counter = document.getElementById("char_counter");
  const my_form = document.getElementById("my_form");
  const links = document.querySelectorAll("nav ul li a");
  const tabs = document.querySelectorAll(".tab");
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
    "В каждом вопросе — стих, в каждом ответе — загадка.",
  ];

  // InMemory
  model_selector.addEventListener("change", () => {
    localStorage.setItem("model", model_selector.value);
  });

  author_selector.addEventListener("change", () => {
    localStorage.setItem("author", author_selector.value);
  });

  const storedModel = localStorage.getItem("model");
  const storedAuthor = localStorage.getItem("author");

  if (storedModel) model_selector.value = storedModel;

  if (storedAuthor) author_selector.value = storedAuthor;

  // Switch Tabs
  links.forEach((link) => {
    link.addEventListener("click", () => {
      const currentLink = link.dataset.tab;
      tabs.forEach((tab) => {
        tab.classList.toggle("active", tab.id === currentLink);
      });
    });
  });

  // Handle Form
  my_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = user_input.value.trim();
    const response =
      randomResponses[Math.floor(Math.random() * randomResponses.length)];
    const model = model_selector.value;
    const author = author_selector.value;
    const timestamp = new Date().toLocaleTimeString();

    const userMsg = document.createElement("div");
    userMsg.className = "chat_bot user";
    userMsg.innerHTML = `<p><strong>You: </strong> ${query} <span class="timestamp">${timestamp}</span></p>`;
    response_area.appendChild(userMsg);

    const loadingMsg = document.createElement("div");
    loadingMsg.className = "chat_bot bot";
    loadingMsg.innerHTML = `Bot is thinking...`;
    response_area.appendChild(loadingMsg);

    const botMsg = document.createElement("div");
    botMsg.className = "chat_bot bot";
    botMsg.innerHTML = `<p><strong>Bot: </strong> ${response} <span class="timestamp">${timestamp}</span></p>`;
    setTimeout(() => {
      loadingMsg.remove();
      response_area.appendChild(botMsg);
    }, 1500);

    user_input.value = "";
    char_counter = "";
    botMsg.scrollIntoView({ behavior: "smooth" });
  });

  // Clear Button
  clear_button.addEventListener("click", () => {
    response_area.textContent = "";
  });

  // Char Counter
  user_input.addEventListener("input", () => {
    char_counter.innerHTML = `${user_input.value.length} characters`;
  });
});
