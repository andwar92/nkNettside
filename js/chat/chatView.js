function chatView() {
    let chatHTML = /*HTML*/`
<div class="chatContainer">
  <div class="friendList">
    <button class="active">Kari</button>
    <button>Student 1</button>
    <button>Student 2</button>
    <button>Student 3</button>
  </div>
  <div class="chatPanel">
   <div class="chatHeader">Chat med Kari</div>
    <div class="chatMessages">
      <div class="message teacher">${model.app.currentUserName}: Hei, velkommen!</div>
      <div class="message student">Deg: Hei!</div>
    </div>
    <div class="chatInput">
      <textarea placeholder="Skriv melding..."></textarea>
      <button>Send</button>
    </div>
  </div>
</div>

    `;
    return chatHTML;
};