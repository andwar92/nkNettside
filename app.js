function updateView() {

    let page = model.app.currentPage

    let currentPage = '';

    switch (page) {
        case 'dashboardView':
            model.app.previousPage.push('dashboardView')
            currentPage = dashboardView();
            break;
        case 'loginView':
            currentPage = loginView();
            break;
    }

    document.getElementById('app').innerHTML = layoutView(currentPage);
}
function setPage(nameOfPage) {
    model.app.previousPage.push(nameOfPage)
    model.app.currentPage = nameOfPage;
    updateView();
}

function goToPreviousPage(delta) {
    if (delta == -1 && model.app.previousPage.length > 0) {
        model.app.previousPage.pop();
        model.app.currentPage = model.app.previousPage.pop();
        setPage(model.app.currentPage)
    }
    updateView();
}



// function setPage(nameOfPage) {
//     model.app.previousPage.push(nameOfPage)
//     model.app.currentPage = nameOfPage;
//     updateView();
// }


// function goToDashboardPage() {
//     if (model.app.currentPage !== 'dashboard') {
//         // Fjern eventuelle ekstra sider fra historikken
//         model.app.previousPage = [];
//         // Sett dashboard som den nåværende siden
//         setPage('dashboard');
//     }
//     updateView();
// };

// function createNewId(currentPath, idName) {
//     const newId = Math.floor(Math.random() * 1000)
//     if (currentPath.some(obj => obj[idName] === newId)) {
//         return createNewId(currentPath, idName)
//     } else {
//         return newId
//     }
// }






