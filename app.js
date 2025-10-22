function updateView(){
    let page = model.app.currentPage;
    let currentPage = '';
    
    switch(page) {
        case 'dashboard':
            model.app.previousPage.push('dashboard')
            currentPage = dashboardView();
            break;
        case 'loginView':
            currentPage = loginView();
            break;
        }
    
    document.getElementById('app').innerHTML = `
    ${currentPage}
    `;
}