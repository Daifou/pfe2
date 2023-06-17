let id = sessionStorage.getItem('id');
let type =  sessionStorage.getItem('type')
if(!id || type == "Client"){


    window.location.href = "403.html"

}

let list = document.querySelector(".task-items");
fetch(`http://localhost:3000/get-todolist/${id}`).then(res => res.json())
.then(data => {
    data.forEach(element => {
        let taskLabel = document.createElement('label')
        taskLabel.className = "task-label";

        let taskCheckbox = document.createElement('input');
        
      
        taskCheckbox.setAttribute('type', 'checkbox');
        taskCheckbox.setAttribute('id', element.todo_id);
        
        
        
        let p = document.createElement('p')
        p.className = "task-text";
        p.innerHTML = element.todo_content;
        if(element.todo_state == "Terminé"){
            taskCheckbox.setAttribute("checked", "checked");
            p.style.textDecoration = "line-through";
        }
        
        taskLabel.appendChild(taskCheckbox);
        taskLabel.appendChild(p);
        taskCheckbox.addEventListener('click', ()=>{
            if(taskCheckbox.hasAttribute("checked")){
                
                taskCheckbox.removeAttribute("checked");
                p.style.textDecoration = "none";
                fetch(`http://localhost:3000/update-todolist-pending/${element.todo_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(res =>res.json())
                .then(data => console.log(data))
            }
            else{
                p.style.textDecoration = "line-through"
                taskCheckbox.setAttribute("checked", "checked");
                fetch(`http://localhost:3000/update-todolist-done/${element.todo_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(res =>res.json())
                .then(data => console.log(data))
            }
        })

        list.prepend(taskLabel);
    });



});
document.querySelector(".add-task-btn").addEventListener("click", ()=>{
    let uuid = uuidv4();
    let task = document.querySelector(".task-input").value;
    if(task == ""){
        alert("Please enter a task")
        return;
    }

    fetch(`http://localhost:3000/add-todolist/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid, task})
    }).then(res => res.json())
    .then(result =>{
        console.log(result)
    });

    let taskLabel = document.createElement('label')
    taskLabel.className = "task-label";

    let taskCheckbox = document.createElement('input');
  
    taskCheckbox.setAttribute('type', 'checkbox');
    taskCheckbox.setAttribute('id', uuid);
    
    
    
    let p = document.createElement('p')
    p.className = "task-text";
    p.innerHTML = task;
    
    taskLabel.appendChild(taskCheckbox);
    taskLabel.appendChild(p);
    taskCheckbox.addEventListener('click', ()=>{
        if(taskCheckbox.hasAttribute("checked")){
            
            taskCheckbox.removeAttribute("checked");
            p.style.textDecoration = "none";
            fetch(`http://localhost:3000/update-todolist-pending/${uuid}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(res =>res.json())
                .then(data => console.log(data))
        }
        else{
            p.style.textDecoration = "line-through"
            taskCheckbox.setAttribute("checked", "checked");
            fetch(`http://localhost:3000/update-todolist-done/${uuid}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(res =>res.json())
                .then(data => console.log(data))
        }
    })

    list.prepend(taskLabel);
    
});

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}





  document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle');
  
    circle.addEventListener('click', function() {
      showButton();
    });
  
    function showButton() {
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
  
      const actionButton = document.createElement('button');
      actionButton.className = 'action-button';
      actionButton.textContent = 'Log Out';
  
      actionButton.addEventListener('click', function() {
        window.location.href = 'Login.html';
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('fullname');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('type');
        // Redirect to home.html
      });
  
      buttonContainer.appendChild(actionButton);
      circle.insertAdjacentElement('afterend', buttonContainer);
    }
  });


const listProjectForm = document.querySelector('.form-container .form select');
const valid = document.querySelector('.form-container .form button');
console.log(id);
const letters = sessionStorage.getItem('fullname');
document.querySelector('header .circle').innerHTML = letters[0].toUpperCase();

valid.addEventListener('click', () => {
    valid.style.backgroundColor = '#fff';
    let nom = document.querySelector('.form-container .form #nom').value;
    let prenom = document.querySelector('.form-container .form #prenom').value;
    let phone = document.querySelector('.form-container .form #telephone').value;
    let address = document.querySelector('.form-container .form #adresse').value;
    let project_id = document.querySelector('.form-container .form select').value;
    let type = '';
    let radioButtons = document.getElementsByName('statut');
    for (let radio of radioButtons) {
        if (radio.checked) {
            type = radio.value;
        }
    }

    if(
        nom == '' ||
        prenom == '' ||
        phone == '' ||
        address == '' ||
        project_id == '' ||
        type == ''
    ){

        valid.style.backgroundColor = '#EEF30F';
        alert("Complete all the field")
        return;
    }
    let body = 
        {
            nom,
            prenom ,
            phone,
            address, 
            type,
            project_id,
            user_id: id
        }

    fetch('http://localhost:3000/add-client', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        if(res.ok)  {
            return res.json()
        }   
    }).then(data => {
        alert("Client added successfully")
        window.location.href = "home.html"
    })
    .catch(error => console.log(error))
    
    
});
fetch(`http://localhost:3000/get-all-project/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(project => {
            let option = document.createElement('option');
            option.setAttribute('value', project.project_id);
            option.innerHTML = project.project_name;
            listProjectForm.appendChild(option);
        });
    })
    .catch(err => console.log(err));

function formatMoneyInput(input) {
    // Your formatMoneyInput code here
}

$(document).ready(function () {
    $('#addlocal').on('click', function (event) {
        var width = $('#widthInput').val();
        var height = $('#heightInput').val();
        var amount = $('#amountInput').val();
        var number = $('#numberInput').val();
       
        if(width.length == 0 || height.length == 0 || amount.length == 0){
            alert("Complete all the field")
            return;
        }else{
         fetch(`http://localhost:3000/add-commercial/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({width,height,amount,number})
        }).then(res => {
            if(res.ok)  {
                return res.json()
            }
        }).then(data => {
            alert("Commercial added successfully")
            window.location.href = "home.html"
         })  
        }

       
})
});

fetch(`http://localhost:3000/get-parkingPlaces/${id}`)
.then(response => response.json())
.then(data => {
    let parkingPlaces = document.querySelectorAll("#parkingPlaces select")[0]
    console.log(data);
    for(let i = 1 ; i <= 20 ; i++){
        let valid;
        data.forEach(parkingPlace => {
            if(i == parkingPlace.parking_number)
            valid = true;
        });
            if(!valid){
                let option = document.createElement('option');
                option.setAttribute('value', i);
                option.innerHTML = i;
                parkingPlaces.appendChild(option);
        }
        }
    });
fetch(`http://localhost:3000/get-client/${id}`)
.then(response => response.json())
.then(data => {
        let clients = document.querySelectorAll("#parkingPlaces select")[1]
        console.log(data);
        data.forEach(client => {
            let option = document.createElement('option');
            option.setAttribute('value', client.client_id);
            option.innerHTML = client.client_nom;
            clients.appendChild(option);
        });
    });
    
    document.getElementById('addParkingButton').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        let clients = document.querySelectorAll("#parkingPlaces select")[1].value;
        let parkingPlaceNbr = document.querySelectorAll("#parkingPlaces select")[0].value;
        let price = document.querySelector("#parkingPrice").value;

        if(clients.length == 0 || parkingPlaceNbr.length == 0 || price.length == 0){
            alert("Complete all the field")
            return;
        }
        fetch(`http://localhost:3000/add-parkingPlace`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                parkingNbr : parkingPlaceNbr,
                parkingPrice: price,
                clientId: clients,
                userId: id
        })
    }).then(res => res.json())
    .then(result => {
        alert('Parking ajouté avec succés')
        window.location.href = "home.html"
    }
    )


        
});
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const formContainer = document.querySelector('.form-container');
const formContainer2 = document.querySelector('.form-container2');

button1.addEventListener('click', () => {
    formContainer.style.display = 'flex';
});

button2.addEventListener('click', () => {
    formContainer2.style.display = 'flex';
});

formContainer.addEventListener('submit', event => {
    event.preventDefault();
    formContainer.style.display = 'none';
});
formContainer2.addEventListener('submit', event => {
    event.preventDefault();
    formContainer2.style.display = 'none';
});


function showForm(formNumber) {
    // Hide all form containers
    const formContainers = document.querySelectorAll('.form-container3');
    formContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Show the selected form container
    const selectedForm = document.getElementById(`form${formNumber}`);
    selectedForm.style.display = 'block';
}

document.querySelector('.appartement-validation').addEventListener('click', () => {
    let nom = document.getElementById('nom-projet').value;
    let desc = document.getElementById('description').value;
    let ville = document.getElementById('ville').value;
    let file = document.getElementById('photo');
    let documentpdf = document.getElementById('documents')
    let nbrbloc = document.getElementById('nbr_bloc').value;
    let nbrEtage = document.getElementById('nbr-etage').value;
    let nbrAppart = document.getElementById('nbr-appart').value;

    let f2Price = document.getElementById('f2-price').value;
    let f3Price = document.getElementById('f3-price').value;
    let f4Price = document.getElementById('f4-price').value;
    let f5Price = document.getElementById('f5-price').value;

    fetch('http://localhost:3000/is-exist-name', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nom
            })
    }).then(data => data.json())
    .then(result =>{
        if(result.exist)
            alert('Le nom de projet deja existe')
        else{
            if (
                nom.length == 0 ||
                ville.length == 0 ||
                desc.length == 0 ||
                file.files.length < 3 ||
                documentpdf.files.length == 0 ||
                nbrbloc.length == 0 ||
                nbrEtage.length == 0 ||
                nbrAppart.length == 0 ||
                f2Price.length == 0 ||
                f3Price.length == 0 ||
                f4Price.length == 0 ||
                f5Price.length == 0
        
            ) {
                alert('Veuillez remplir tous les champs');
                return;
            } else {
                f2Price = f2Price.split(',').join('');
                f3Price = f3Price.split(',').join('');
                f4Price = f4Price.split(',').join('');
                f5Price = f5Price.split(',').join('');
                let titles = [];
        
                for (let i = 0; i < file.files.length; i++) {
                    titles.push(file.files[i].name);
                }
        
                console.log(titles);
                let formData = new FormData();
        
                formData.append('nom', nom);
                formData.append('ville', ville);
                formData.append('description', desc);
                formData.append('testImage', file.files[0]);
                formData.append('testImage2', file.files[1]);
                formData.append('testImage3', file.files[2]);
                
                formData.append('img_title', file.files[0].name)
                formData.append('img_title2', file.files[1].name);
                formData.append('img_title3', file.files[2].name);
        
                formData.append('document', documentpdf.files[0]);
                formData.append('doc_title', documentpdf.files[0].name)
        
        
                formData.append('nbr_bloc', nbrbloc);
                formData.append('nbr_etage', nbrEtage);
                formData.append('nbr_appart', nbrAppart);
                formData.append('uid', id);
        
                formData.append('f2_price', f2Price);
                formData.append('f3_price', f3Price);
                formData.append('f4_price', f4Price);
                formData.append('f5_price', f5Price);
        
        
        
        
                console.log(f2Price);
                fetch('http://localhost:3000/add-project', {
                    method: 'POST',
                    body: formData,
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
        
                    })
                    .catch(error => {
                        console.log(error);
                        alert('erreur: opération no effectué a cause des image')
                    });
            }
        }
    })

    

    
});

function formatMoneyInput(input) {
    let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); // Add commas every three numbers
    input.value = value;

    
}


    
    // fetch("http://localhost:3000/add-task", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         task: task,
    //         uid: id
    //     })
    // })
    
