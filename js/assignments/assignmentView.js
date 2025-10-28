function assignmentView() {
  let assignmentHTML = /*HTML*/`
  <div class="container">

         <div class="box">
         <div class="content">bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets</div>
         <div class="tagBox">Psykologisk trygghet</div>
  </div>
    <textarea class="autoExpand" id="assignmentText" placeholder="Skriv her..."></textarea>
         <button class="logout-btn">Publiser</button>
         <option value="tags">
    `;
  return assignmentHTML;
};
