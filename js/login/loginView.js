function loginView() {
    let loginHTML = /*HTML*/`
    <div class="loginbox">
    <h2 class="loggin-title"> Logg inn </h2>
    <form>
            <label class="label required">E-Post</label>
            <input class="loginn-box" type="text" id="username" oninput="usernameLogin(this.value)" required/><br>
            <label class="label required">Passord</label>
            <input  class="loginn-box"type="password" id="password" oninput="passwordLogin(this.value)" />
            <div class="remember-row">
                <input type="checkbox" id="remember" class="remember-checkbox" />
                <label for="remember" class="remember-label">Husk meg</label>
                <button class="loginn-btn"id="loginButton" type="submit" onclick="loginCheck(); return false;">Login</button>
            </div>
            </form>
            <div class="glemt-passord">
            <a href="" target="_blank" class="forgot-password">Glemt passord?</a>
            </div>
            </div>
    `;
    return loginHTML;
}


