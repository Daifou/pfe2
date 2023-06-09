

document.querySelector("#signup").addEventListener('click', ()=>{
    const fullname = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const password2 = document.querySelectorAll('input[type="password"]')[1].value;
    const type = document.querySelector('select').value;
    if(password != password2){
        document.getElementById("error").style.display = "block"
        document.getElementById("error").innerHTML = "Paasword does not match"
        return
    }

    if(fullname == '' || email == '' || password == '' || type == ''){
        document.getElementById("error").style.display = "block"
        document.getElementById("error").innerHTML = "Complete all the fields"

        return
    }

    

    fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullname, email, password, type})
    }).then(res => {
        if(res.ok)  {
            res.json()
            return window.location.href = "Login.html"
        }
        
    }).then(data => {
        console.log(data)
    })
})
