document.querySelector('#login').addEventListener('click', () => {
    document.getElementById("login").disabled = true 
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    fetch('http://localhost:3000/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(res => {
        if(res.ok)  {
           return res.json()
        }
        else{
            document.getElementById("login").disabled = false 
            document.getElementById("error").style.display = "block"
        }
    }).then(data => {
        sessionStorage.setItem('id', data.id);
        sessionStorage.setItem('fullname', data.fullname);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('type', data.type);
        

        data.type == 'Promoteur' ? window.location.href = "home.html" : window.location.href = "index.html"
    })
    .catch(error => console.log(error))

});

