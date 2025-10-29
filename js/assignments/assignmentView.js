function assignmentView() {
  let assignmentHTML = /*HTML*/`
<div class="container">
  <div class="box">
  <div class="content">bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets</div>
  <div class="tagBox">Psykologisk trygghet</div>
</div>

<div class="assignmentContainer">
<textarea class="autoExpand" id="assignmentText" placeholder="Skriv her..."></textarea>
<select value="${model.input.assignmentPage.tag}">
  <option value="">Velg en tag</option>
  <option value="">Psykologisk trygghet</option>
  <option value="">Growth Mindset</option>
  <option value="">Læring</option>
  <option value="">Locus of Control</option>
  <option value="">GRIT</option>
  </select>
  <button class="logout-btn">Publiser</button>
  </div>
    `;
  return assignmentHTML;
};
