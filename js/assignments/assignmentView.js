function assignmentView() {
  let assignmentHTML = /*HTML*/`
  <div class="assignment-page">
  
  <div class="card">
  <header><h1 class="header-box">Ny oppgave</h1></header>
      <!-- Toppvalg: Tag/Subtag -->
      <div class="row">
        <div class="field">
          <label for="tagSelect"><h2>Tema</h2></label>
          <select  id="assignmentTagSelect" class="input-style" required>
            <option value="" disabled selected onchange="updateTitle(this.value)">Velg tema...</option>
            ${model.data.keyCompetences}
          </select>
        </div>
        <div class="field">
          <label for="subtagSelect"><h2>Under Tema</h2></label>
          <input id="assignmentSubtagSelect" placeholder="Under Tema…" onchange="updateTagStyle()" class="input-style">
          </select>
        </div>
      </div>

      <!-- Oppgavefelt -->
      <div class="field">
        <label for="bodyInput"><h2>Oppgave</h2></label>
        <textarea onchage ="descriptionInput()" id="bodyInput" class="text-style" rows="10" placeholder="Skriv oppgaven her…" required></textarea>
        <div class="hint">Tips: Bruk punktlister, del opp steg, og legg ved lenker.</div>
      </div>

    <div class="sep"></div>
      <!-- Grupper -->
      <div class="field">
        <label><h2>Tilgang (grupper)</h2></label>
        <div class="group-grid" id="groupGrid">
        ${model.data.groups.map(group => /*HTML*/`
        <div class="group-checkbox-row">
          <input type="checkbox" id="group${group.groupID}" name="groups" value="${group.groupID}" class="group-checkbox" />
          <label for="group${group.groupID}" class="group-label">${group.groupName}</label>
        </div>
      `).join('')}
      <div class="group-checkbox-row">
        <input type="checkbox" id="selectAllGroups" class="group-checkbox" />
        <label for="selectAllGroups" class="group-label"><b>Velg alle</b></label>
      </div>
        </div>

      <!-- Handlinger -->
      <div class="actions">
        <button type="button" id="saveDraftBtn" class="primary">Lagre kladd</button>
        <button type="button" onclick="createAssignment()" class="primary" id="publishBtn">Publiser</button>
      </div>
    </div>
  </div>
  `;
  return assignmentHTML;
};