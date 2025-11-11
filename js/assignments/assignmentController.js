function updateTagStyle() {
  const tagValue = document.getElementById("assignmentTagSelect").value;
  const textBox  = document.getElementById("assignmentTagSelect"); // <— farg denne

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
function titleValue() {
    let titleValue = document.getElementById("assignmentTagSelect").value;
    model.data.assignmentPage.title = titleValue;
}

function descriptionInput() {
    let descriptionValue = document.getElementById("bodyInput").value;
    model.data.assignmentPage.description = descriptionValue;
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
function publishBtn(){
    descriptionInput();
}

function createAssignment() {
    // Hent verdier fra skjemaet
    const tagSelect = document.getElementById("assignmentTagSelect");
    const subtagInput = document.getElementById("assignmentSubtagSelect");
    const descriptionInput = document.getElementById("bodyInput");
    
    // Finn label for valgt tema
    const selectedOption = tagSelect.options[tagSelect.selectedIndex];
    const titleLabel = selectedOption ? selectedOption.textContent : '';
    
    // Hent valgte grupper
    const selectedGroups = [];
    const groupCheckboxes = document.querySelectorAll('.group-checkbox:checked');
    groupCheckboxes.forEach(checkbox => {
        if (checkbox.id !== 'selectAllGroups') {
            const groupId = parseInt(checkbox.value);
            selectedGroups.push(groupId);
        }
    });
    
    // Oppdater model.input med nye verdier
    model.input.assignmentPage.title = titleLabel;
    model.input.assignmentPage.description = descriptionInput.value;
    model.input.assignmentPage.subject = subtagInput.value;
    model.input.assignmentPage.tag = tagSelect.value;
    model.input.assignmentPage.groupID = selectedGroups;
    model.input.assignmentPage.date = new Date().toLocaleDateString('no-NO');
    model.input.assignmentPage.status = 'published';
    
    // Legg til i data.assignmentPage array
    const newAssignment = {
        assignmentID: model.data.assignmentPage.length,
        title: model.input.assignmentPage.title,
        description: model.input.assignmentPage.description,
        subject: model.input.assignmentPage.subject,
        groupID: model.input.assignmentPage.groupID,
        date: model.input.assignmentPage.date,
        attachment: null,
    };
    
    model.data.assignmentPage.push(newAssignment);
    
    // Gå til dashboardView
    setPage('dashboardView');
}


function createNewId(currentPath, idName) {
    const newId = Math.floor(Math.random() * 1000)
    if (currentPath.some(obj => obj[idName] === newId)) {
        return createNewId(currentPath, idName)
    } else {
        return newId
    }
}

