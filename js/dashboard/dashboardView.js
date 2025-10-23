function dashboardView() {
   let dashboardHTML= /*HTML*/`
    <h1>Welcome to the Dashboard</h1>
    <p>This is the dashboard view.</p>
    <button onclick="updateView('loginView')">Logout</button>
    `;
    return dashboardHTML;
}

