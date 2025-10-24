function loginView() {
    let loginHTML = /*HTML*/`
    <div class="loginbox">
        
        <div class="logincontainer">
        <h2 style="text-align: center; color: white;"> Login </h2>
            <form>
                <input type="text" id="username" placeholder="Username" oninput="usernameLogin(this.value)" />
                <input type="password" id="password" placeholder="Password" oninput="passwordLogin(this.value)" />
                <button id="loginButton" type="submit" onclick="loginCheck(); return false;">Login</button>
            </form>
        </div>
    </div>
    `;
    return loginHTML;
}


