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

    // Hvis ikke tilstede, gjør ingenting (sikrer at init kan kalles fra ulike views)
    if (!toggleChat || !chatPopup || !userSelect || !messagesDiv) {
      console.warn("initChat: chat-elementer ikke funnet i DOM. Init avbrutt.");
      return;
    }

    // Fjern event listeners fra forrige init (unngå duplikater)
    toggleChat.onclick = null;
    closeBtn.onclick = null;
    userSelect.onchange = null;
    newGroupBtn.onclick = null;
    sendBtn.onclick = null;
    input.onkeydown = null;

    // Hent lagret data eller fallback
    let chatList = JSON.parse(localStorage.getItem("chatList")) || ["Kari", "Pål", "Ola"];
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || {};
    let currentChat = localStorage.getItem("currentChat") || chatList[0];

    // Sørg for at currentChat er gyldig
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

    // Toggle åpne/lukke (bruk flex hvis CSS forventer flex)
    toggleChat.onclick = () => {
      const isOpen = chatPopup.style.display === "flex" || getComputedStyle(chatPopup).display === "flex";
      chatPopup.style.display = isOpen ? "none" : "flex";
      // Oppdater scroll når vi åpner
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
      // scroll to bottom
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    // Sett display til none ved init (valgfritt)
    if (!chatPopup.style.display) chatPopup.style.display = "none";

    // debug-log
    // console.log("initChat: ferdig. chatList:", chatList, "currentChat:", currentChat);
  } catch (err) {
    console.error("initChat error:", err);
  }
}