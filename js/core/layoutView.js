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


        <div id="sidebar" class="sidebar">
            <a onclick="setPage('dashboardView')" href="#">Hjem</a>
            <a onclick="setPage('assignmentView')"href="#">Oppgaver</a>
            <a href="#">Chat</a>
            <a href="#">Kalender</a>
        </div>

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