function usernameLogin(inputUsername) {
    model.input.loginPage.username = inputUsername;
};
function passwordLogin(inputPassword) {
    model.input.loginPage.password = inputPassword;
};

// A simple model to store login data

function loginCheck() {
    const users = model.data.users;
    const { username, password } = model.input.loginPage;

    let foundUser = users.find(element => element.username === username && element.password === password);

    if (foundUser) {
        alert("✅ Login successful!");
        model.app.currentUserId = foundUser.userID;
        model.app.currentPage = 'dashboard';
        updateView(); // 👈 this is how navigation happens
    } else {
        alert("❌ Invalid username or password");
    }
}