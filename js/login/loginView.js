function loginView() {
    let loginHTML = /*HTML*/`
    <header class="logo">
        <img src="img/logo.png">
    </header>
    <div class="loginContainer">
    <h2 style="text-align: center; color: white;"> Login </h2>
    <input type="text" id="username" placeholder="Username" oninput="usernameLogin(this.value)"/>
    <input type="password" id="password" placeholder="Password" oninput="passwordLogin(this.value)"/>
    <button id="loginButton" onclick="loginCheck()"> Login</button>
    </div>
    `;
    return loginHTML;
}