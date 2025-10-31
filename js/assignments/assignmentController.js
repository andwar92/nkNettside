function updateTagStyle() {
  const tagValue = document.getElementById("assignmentTagSelect").value;
  const textBox  = document.getElementById("assignmentTagSelect"); // <— farg denne

  // nullstill
  textBox.style.backgroundColor = "";
  textBox.style.color = "";

  if (tagValue === "growthMindset") {
    textBox.style.backgroundColor = "#fff4acff";
    textBox.style.color = "#c0ad36ff";
  } else if (tagValue === "psykologiskTrygghet") {
    textBox.style.backgroundColor = "#a0f0a0";
    textBox.style.color = "#1ca71cff";
  } else if (tagValue === "learning") {
    textBox.style.backgroundColor = "#6591ffff";
    textBox.style.color = "#174496ff";
  } else if (tagValue === "locusOfControl") {
    textBox.style.backgroundColor = "#f4cccc";
    textBox.style.color = "#d21600";
  } else if (tagValue === "grit") {
    textBox.style.backgroundColor = "#c68dffff";
    textBox.style.color = "#8d3ffbff";
  }
}


function createAssignment(){

};


// 1) Undertema per hovedtag
const SUB_TAGS = {
  growthMindset: [
    { value: 'feiling', label: 'Feiling' },
    { value: 'fixedVsGrowth', label: 'Fixed vs Growth Mindset' },
  ],
  psykologiskTrygghet: [
    { value: 'bliKjent', label: 'Bli kjent' },
    { value: 'signaturstyrker', label: 'Signaturstyrker' },
    { value: 'lytting', label: 'Lytting' },
    { value: 'morramote', label: 'Morramøte' },
    { value: 'kommunikasjon', label: 'Kommunikasjon' },
  ],
  learning: [
    { value: 'pomodoro', label: 'Pomodoro' },
    { value: 'focusedDiffused', label: 'Focused/diffused learning' },
    { value: 'logg', label: 'Logg' },
    { value: 'læringsteknikker', label: 'Læringsteknikker' },
  ],
  locusOfControl: [
    { value: 'stress', label: 'Stress' },
    { value: 'beProactive', label: 'Be proactive' },
    { value: 'metakognisjon', label: 'Metakognisjon' },
    { value: 'locus', label: 'Locus of Control' },
    { value: 'blindsoner', label: 'Blindsoner' },
  ],
  grit: [
    { value: 'vaner', label: 'Vaner' },
    { value: 'mal', label: 'Mål' },
  ],
};

// 2) Kalles når hovedtag endres
function onMainTagChange() {
  // behold farge-logikken din
  updateTagStyle();

  const main = document.getElementById('assignmentTagSelect').value;
  const sub  = document.getElementById('subTagSelect');

  // tøm/bygg undertag-lista
  sub.innerHTML = '<option value="">Velg undertema</option>';

  const items = SUB_TAGS[main] || [];
  if (items.length === 0) {
    sub.disabled = true;
    return;
  }

  for (const it of items) {
    const opt = document.createElement('option');
    opt.value = it.value;
    opt.textContent = it.label;
    sub.appendChild(opt);
  }
  sub.disabled = false;
}