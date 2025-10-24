function layoutView(contentHTML) {
    if (model.app.currentPage == 'loginView') {
        return /*HTML*/`
        <header class="headerbox">
            <img style="max-height:120px;" src="img/logo.png">
        </header>
        ${loginView()}`;
    } 
    else {
        return /*HTML*/`

    <div class="layout">
        <header class="headerbox">
            <div class="logocontainer">
            <img src="img/logo.png" alt="Logo"/>
            <button class="open-btn" onclick="toggleSidebar()">☰ Meny</button>
            </div>
            <button class="logout-btn" onclick="setPage('loginView')">Logout</button>
        </header>

        <main class="main-content">
            ${contentHTML}
        </main>

        <footer class="main-footer">
            <p>&copy; 2025 My App</p>
        </footer>
    </div>
    `;
    }
}