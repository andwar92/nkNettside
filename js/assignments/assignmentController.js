function updateTagStyle() {
  const tagValue = document.getElementById("assignmentTagSelect").value;
  const textBox  = document.getElementById("assignmentTagSelect"); // <— farg denne

  // nullstill
  textBox.style.backgroundColor = "";
  textBox.style.color = "";

  if (tagValue === "growth-mindset") {
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

function titleTag(){
let title = document.getElementById("assignmentTagSelect");

model.data.keyCompetences.forEach(element => {
  const option = document.createElement("option");
  option.value = element.value;
  option.textContent = element.label;
  title.appendChild(option);
});
}

// Håndterer "Velg alle"-checkbox for grupper
function toggleSelectAllGroups(selectAllId = 'selectAllGroups', checkboxClass = 'group-checkbox') {
  const selectAll = document.getElementById(selectAllId);
  if (!selectAll) return;
  selectAll.addEventListener('change', function(e) {
    const checked = e.target.checked;
    document.querySelectorAll(`.${checkboxClass}`).forEach(cb => {
      if (cb.id !== selectAllId) cb.checked = checked;
    });
  });
}