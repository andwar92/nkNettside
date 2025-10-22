function usernameLogin(inputUsername) {
    model.input.loginPage.username = inputUsername;
};
function passwordLogin(inputPassword) {
    model.input.loginPage.password = inputPassword;
};

// A simple model to store login data
const model = {
    loginpage: {
        username: '',
        password: ''
    }
};

function loginCheck() {
    let popupMessage = "";
    for (let i = 0; i < model.data.users.length; i++) {
        if
            (
            model.data.users[i].username == model.input.loginPage.username &&
            model.data.users[i].password == model.input.loginPage.password
        ) {
            popupMessage = "Riktig brukernavn og passord"
        } else if (
            model.data.users[i].username != model.input.loginPage.username &&
            model.data.users[i].password != model.input.loginPage.password

        ) {
            popupMessage = "Feil brukernavn eller passord"
        }
    }
};
// Called when the user types in the username field
function usernameLogin(value) {
    model.input.loginPage.username = value;
}

// Called when the user clicks the login button
function checkLoginInfo() {
    const { username, password } = model.loginpage;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Simulate a basic login check
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        // You could load another view or redirect here
        // e.g. mainView() or window.location = 'dashboard.html';
    } else {
        alert("Invalid username or password.");
    }
}