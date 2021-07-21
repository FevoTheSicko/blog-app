

async function signup() {
    const username = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (username && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
    }

}