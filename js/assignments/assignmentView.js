function assignmentView() {
  let assignmentHTML = /*HTML*/`
  <div class="container">
    <div class="box">
      <div class="content">bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets</div>
      <select class="gruppebox" value="">
        <option value="">Velg gruppe</option>
        <option value="">Alle Grupper</option>
        <option value="">Fagskolen Intro</option>
        <option value="">Start IT</option>
        <option value="">Frontend</option>
      </select>
      <select id="assignmentTagSelect" class="tagBox" onchange="updateTagStyle()">
        <option value="velgTag">Velg en tag</option>
        <option value="growthMindset">Growth Mindset</option>
        <option value="psykologiskTrygghet">Psykologisk trygghet</option>
        <option value="learning">Læring</option>
        <option value="locusOfControl">Locus of Control</option>
        <option value="grit">GRIT</option>
      </select>
    </div>
    <div class="assignmentContainer">
      <textarea class="autoExpand" id="assignmentText" placeholder="Skriv her..."></textarea>
      <button class="logout-btn">Publiser</button>
    </div>
  </div>
    `;
  return assignmentHTML;
};

