document.addEventListener('DOMContentLoaded', function () {
    const registrationBtn = document.getElementById('registrationBtn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Define the user credentials and corresponding URLs
    const userCredentials = {

//  Important -  username is user1 , user2 , user3 you can change according to yourself .
// password is pass123 of every user you can change according to yourself.

      // Class 1st student      
       user1: {
            password: 'pass123',
            url: 'class/class1.html',
        },
        user2: {
            password: 'pass123',
            url: 'class/class1.html',
        },
       

        // class 2nd student
        user3: {
            password: 'pass123',
            url: 'class/class2.html',
        },
        user4: {
            password: 'pass123',
            url: 'class/class2.html',
        },

// class 3rd student

       user5: {
            password: 'pass123',
            url: 'class/class3.html',
        },
        user6: {
            password: 'pass123',
            url: 'class/class3.html',
        },

        
// class 4th student        

user7: {
    password: 'pass123',
    url: 'class/class4.html',
},
user8: {
    password: 'pass123',
    url: 'class/class4.html',
},


// class 5th student        

user9: {
    password: 'pass123',
    url: 'class/class5.html',
},
user10: {
    password: 'pass123',
    url: 'class/class5.html',
},



// class 6th student        

user11: {
    password: 'pass123',
    url: 'class/class6.html',
},
user12: {
    password: 'pass123',
    url: 'class/class6.html',
},


// class 7th student        

user13: {
    password: 'pass123',
    url: 'class/class7.html',
},
user14: {
    password: 'pass123',
    url: 'class/class7.html',
},

// class 8th student        

user15: {
    password: 'pass123',
    url: 'class/class8.html',
},
user16: {
    password: 'pass123',
    url: 'class/class8.html',
},


// class 9th student        

user17: {
    password: 'pass123',
    url: 'class/class9.html',
},
user18: {
    password: 'pass123',
    url: 'class/class9.html',
},


// class 10th student        

user19: {
    password: 'pass123',
    url: 'class/class10.html',
},
user20: {
    password: 'pass123',
    url: 'class/class10.html',
},

    };

    // Show the registration pop-up
    registrationBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Close the pop-up when the close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the pop-up if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // Check if the entered credentials match a user's credentials
        if (userCredentials[enteredUsername] && userCredentials[enteredUsername].password === enteredPassword) {
            // Redirect to the corresponding HTML page for the user
            const redirectUrl = userCredentials[enteredUsername].url;
            window.location.href = redirectUrl;
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    });
});




