
function titleTag(){
    let titleValue = document.getElementById("assignmentTagSelect");
    model.data.assignmentPage.title = titleValue;
}

function descriptionInput(){
    let descriptionValue = document.getElementById("bodyInput");
    model.data.assignmentPage.description = descriptionValue;
}

function publishAssignmemt() {
  if (model.app.currentPage === 'assignmentView') {
    
    model.data.assignmentPage.push({
      assignmentID: model.data.assignmentPage[model.data.assignmentPage.length-1].assignmentID + 1,
      title: model.input.assignmentPage.title,
      description: 'Oppgaveinnhold om Growth Mindset',
      subject: 'Fixed vs Growth Mindset',
      groupID: [0, 1],
      date: '10/17/2025',
      attachment: 'growth_mindset.pdf',
    })
    
  };
}

function createNewId(currentPath, idName) {
    const newId = Math.floor(Math.random() * 1000)
    if (currentPath.some(obj => obj[idName] === newId)) {
        return createNewId(currentPath, idName)
    } else {
        return newId
    }
}


