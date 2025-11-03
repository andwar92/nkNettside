function assignmentView() {
  let assignmentHTML = /*HTML*/`
<div class="container">
  <div class="card">
    <header><h1>Ny oppgave</h1></header>
      <div class="row">
        <div class="field">
          <select id="assignmentTagSelect" class="tagBox" onchange="updateTagStyle()">Psykologisk trygghet
            <option value="velgTag">Velg en tag</option>
            <option value="growthMindset">Growth Mindset</option>
            <option value="psykologiskTrygghet">Psykologisk trygghet</option>
            <option value="learning">Læring</option>
            <option value="locusOfControl">Locus of Control</option>
            <option value="grit">GRIT</option>
          </select>
          <select class="tag-box" value="">
            <option value="">Velg gruppe</option>
            <option value="">Alle Grupper</option>
            <option value="">Fagskolen Intro</option>
            <option value="">Start IT</option>
            <option value="">Frontend</option>
          </select>
          <button class="publish-btn">Publiser</button>
      </div>
    </div>
  </div>
</div>
    `;
  return assignmentHTML;
};

