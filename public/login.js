
const loginpost = async (event) => {

    event.preventDefault();
    console.log('at login post')
    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim()

    if (username && password) {
        console.log('username password found')
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok)
            document.location.replace('/dashboard')
        else {
            console.log('fucked up')
        }

    }

}
document.querySelector('.login-form').addEventListener('submit', loginpost)