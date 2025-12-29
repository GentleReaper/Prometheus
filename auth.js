document.addEventListener('DOMContentLoaded', () => {

    // ============================
    // SIGN UP LOGIC
    // ============================
    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload

            // 1. Capture Data
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;

            // 2. Simple Validation
            if (!fullname || !email || !password || !role) {
                alert("Please fill in all required fields.");
                return;
            }

            // 3. Create User Object
            const newUser = {
                fullname,
                email,
                phone,
                password,
                role
            };

            // 4. Save to LocalStorage (Simulating a Database)
            // Get existing users or start empty list
            const users = JSON.parse(localStorage.getItem('phoenixUsers')) || [];

            // Check if email already exists
            const userExists = users.find(u => u.email === email);
            if (userExists) {
                alert("An account with this email already exists!");
                return;
            }

            // Add new user
            users.push(newUser);
            localStorage.setItem('phoenixUsers', JSON.stringify(users));


            // For now, redirect to login page after signup
            window.location.href = 'login.html';
        });
    }

    // ============================
    // LOGIN LOGIC
    // ============================
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            // 1. Get Users from Storage
            const users = JSON.parse(localStorage.getItem('phoenixUsers')) || [];

            // 2. Find User
            const validUser = users.find(u => u.email === email && u.password === password);

            if (validUser) {
                // 3. Save Session (Simulated)
                localStorage.setItem('currentUser', JSON.stringify(validUser));

                alert(`Welcome back, ${validUser.fullname}!`);
                window.location.href = 'home.html';
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }

});

