function assignmentView() {
  let assignmentHTML = /*HTML*/`
  <div class="wrap">
    <header>
      <h1>Ny oppgave</h1>
      <div class="status" id="statusText">—</div>
    </header>

    <div class="card">
      <!-- Toppvalg: Tag/Subtag -->
      <div class="row">
        <div class="field">
          <label for="tagSelect">Emne</label>
          <select id="assignmentTagSelect" onchange="updateTagStyle()" required>
            <option value="" disabled selected>Velg emne…</option>
            <option value="growth-mindset">Growth Mindset</option>
            <option value="psykologiskTrygghet">Psykologisk trygghet</option>
            <option value="learning">Læring</option>
            <option value="locusOfControl">Locus of Control</option>
            <option value="grit">GRIT</option>
          </select>
        </div>
        <div class="field">
          <label for="subtagSelect">Subtag </label>
          <select id="assignmentSubtagSelect" disabled>
            <option value="" selected>Velg subtag…</option>
          </select>
        </div>
      </div>

      <!-- Tittel og tekst -->
      <div class="field">
        <label for="titleInput">Tittel</label>
        <input id="titleInput" type="text" placeholder="Kort, tydelig tittel" required />
      </div>

      <div class="field">
        <label for="bodyInput">Oppgave</label>
        <textarea id="bodyInput" rows="10" placeholder="Skriv oppgaven her…" required></textarea>
        <div class="hint">Tips: Bruk punktlister, del opp steg, og legg ved lenker.</div>
      </div>

      <div class="sep"></div>

      <!-- Grupper -->
      <div class="field">
        <label>Tilgang (grupper)</label>
        <div class="group-grid" id="groupGrid"></div>
      </div>

      <!-- Handlinger -->
      <div class="actions">
        <button type="button" id="saveDraftBtn">Lagre kladd</button>
        <button type="button" class="primary" id="publishBtn">Publiser</button>
      </div>
    </div>
  </div>

    `;
  return assignmentHTML;
};

