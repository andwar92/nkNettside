function initChat() {
  try {
    const toggleChat = document.getElementById("toggleChat");
    const chatPopup = document.getElementById("chatPopup");
    const closeBtn = document.getElementById("closeBtn");
    const userSelect = document.getElementById("userSelect");
    const messagesDiv = document.getElementById("messages");
    const sendBtn = document.getElementById("sendBtn");
    const input = document.getElementById("messageInput");
    const chatTitle = document.getElementById("chatTitle");
    const newGroupBtn = document.getElementById("newGroupBtn");


    if (!toggleChat || !chatPopup || !userSelect || !messagesDiv) {
      console.warn("initChat: chat-elementer ikke funnet i DOM. Init avbrutt.");
      return;
    }


    toggleChat.onclick = null;
    closeBtn.onclick = null;
    userSelect.onchange = null;
    newGroupBtn.onclick = null;
    sendBtn.onclick = null;
    input.onkeydown = null;


    let chatList = JSON.parse(localStorage.getItem("chatList")) || ["Kari", "Pål", "Ola"];
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || {};
    let currentChat = localStorage.getItem("currentChat") || chatList[0];


    if (!chatList.includes(currentChat)) currentChat = chatList[0];

    function persist() {
      localStorage.setItem("chatList", JSON.stringify(chatList));
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
      localStorage.setItem("currentChat", currentChat);
    }

    function renderSelect() {
      userSelect.innerHTML = chatList
        .map((u) => `<option value="${u}">${u}</option>`)
        .join("");
      userSelect.value = currentChat;
      chatTitle.textContent = `Chat med ${currentChat}`;
      updateMessages();
    }

    renderSelect();

    // Toggle åpne/lukke
    toggleChat.onclick = () => {
      const isOpen = chatPopup.style.display === "flex" || getComputedStyle(chatPopup).display === "flex";
      chatPopup.style.display = isOpen ? "none" : "flex";
      if (!isOpen) messagesDiv.scrollTop = messagesDiv.scrollHeight;
    };

    closeBtn.onclick = () => {
      chatPopup.style.display = "none";
    };

    userSelect.onchange = () => {
      currentChat = userSelect.value;
      chatTitle.textContent = `Chat med ${currentChat}`;
      persist();
      updateMessages();
    };

    newGroupBtn.onclick = () => {
      const name = prompt("Navn på ny gruppe:");
      if (!name) return;
      if (chatList.includes(name)) {
        alert("Den gruppen finnes allerede!");
        return;
      }
      chatList.push(name);
      chatHistory[name] = [];
      currentChat = name;
      persist();
      renderSelect();
    };

    sendBtn.onclick = sendMessage;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;
      if (!chatHistory[currentChat]) chatHistory[currentChat] = [];

      chatHistory[currentChat].push({ sender: "me", text, time: Date.now() });
      input.value = "";
      persist();
      updateMessages();

      // Simuler svar (kun demo)
      setTimeout(() => {
        chatHistory[currentChat].push({
          sender: "other",
          text: `${currentChat}: Hei, jeg fikk meldingen "${text}" 👋`,
          time: Date.now(),
        });
        persist();
        updateMessages();
      }, 800);
    }

    function updateMessages() {
      messagesDiv.innerHTML = "";
      const messages = chatHistory[currentChat] || [];
      messages.forEach((msg) => {
        const div = document.createElement("div");
        div.textContent = msg.sender === "me" ? `Du: ${msg.text}` : msg.text;
        div.className = "msg " + (msg.sender === "me" ? "me" : "other");
        messagesDiv.appendChild(div);
      });
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    if (!chatPopup.style.display) chatPopup.style.display = "none";

  } catch (err) {
    console.error("initChat error:", err);
  }
}