function loginView() {
    let loginHTML = /*HTML*/`
    <div class="loginContainer">
    <h2> Login </h2>
    <input type="text" id="username" placeholder="Username" onclick="usernameLogin(this.value)"/>
    <input type="password" id="password" placeholder="Password" onclick="passwordLogin(this.value)"/>
    <button id="loginButton" onclick="checkLoginInfo()"> Login</button>
    </div>
    `;
    return loginHTML;
}