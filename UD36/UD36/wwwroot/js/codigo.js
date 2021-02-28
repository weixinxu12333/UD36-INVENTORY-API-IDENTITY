//token
function ajaxLogin(url, method, x1, x2) {
    fetch(url,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: method,
            body: JSON.stringify({
                email: x1,
                password: x2
            })
        })
        .then(res => res.text())
        .then(token => {
            localStorage.setItem('token', token);
            console.log(token);
        });
}
