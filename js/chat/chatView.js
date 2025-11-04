function chatView() {
    let chatHTML = /*HTML*/`
<div class="chatContainer">
  <div class="friendList">
    <button class="active">Lærer</button>
    <button>Student 1</button>
    <button>Student 2</button>
    <button>Student 3</button>
  </div>
  <div class="chatPanel">
    <div class="activePersonTag">Lærer</div>
    <div class="chatMessages">
      <div class="message teacher">Hei, velkommen!</div>
      <div class="message student">Hei!</div>
      <!-- flere meldinger -->
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