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
            <a onclick="setPage('chatView')">Chat</a>
            <a onclick="setPage('calendarView')" href="#">Kalender</a>
        </div>

        <main class="main-content">
        ${contentHTML}
        </main>

        <!-- popup chat -->
        <button id="toggleChat">💬</button>

        <div id="chatPopup">
            <div id="chatHeader">
            <span id="chatTitle">Chat</span>
            <button id="closeBtn" style="background:none;border:none;color:white;font-size:18px;cursor:pointer;">×</button>
            </div>

            <select id="userSelect"></select>
            <button id="newGroupBtn">+ Ny gruppe</button>

            <div id="messages"></div>

            <div id="inputArea">
            <input id="messageInput" placeholder="Skriv melding..." />
            <button id="sendBtn">Send</button>
            </div>
        </div>
        
        <footer class="main-footer">
        <p>&copy; 2025 My App</p>
        </footer>

    </div>
    `;
    }
}