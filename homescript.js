const listProjectForm = document.querySelector('.form-container .form select');
const valid = document.querySelector('.form-container .form button');
const id = sessionStorage.getItem('id');

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
        event.preventDefault();
        var width = $('#widthInput').val();
        var height = $('#heightInput').val();
        var amount = $('#amountInput').val();
        var numberOfClients = $('#numberInput').val();
        var name = $('#nameInput').val();

        console.log('Width:', width);
        console.log('Height:', height);
        console.log('Amount:', amount);
        console.log('Number of Clients:', numberOfClients);
        console.log('Name:', name);
    });
});

document.getElementById('addParkingButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    var parkingPlacesContainer = document.getElementById('parkingPlaces');
    var firstParkingPlace = parkingPlacesContainer.firstElementChild;
    var newParkingPlace = firstParkingPlace.cloneNode(true);
    newParkingPlace.querySelector('input').value = '';

    // Get the selected numbers in the existing parking places
    var selectedNumbers = Array.from(parkingPlacesContainer.querySelectorAll('select')).map(function (
        select,
    ) {
        return select.value;
    });

    // Remove already selected numbers from the new parking place options
    var options = newParkingPlace.querySelectorAll('option');
    options.forEach(function (option) {
        if (selectedNumbers.includes(option.value)) {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    });

    parkingPlacesContainer.appendChild(newParkingPlace);
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

const musicPlayer = document.getElementById('music-player');
const musicPlayerIcon = document.querySelector('.music-player-icon');

musicPlayerIcon.addEventListener('click', () => {
    if (musicPlayer.paused) {
        musicPlayer.play();
        musicPlayerIcon.classList.add('fa-pause');
        musicPlayerIcon.classList.remove('fa-play');
    } else {
        musicPlayer.pause();
        musicPlayerIcon.classList.add('fa-play');
        musicPlayerIcon.classList.remove('fa-pause');
    }
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
    let file = document.getElementById('photo');
    let documentpdf = document.getElementById('documents')
    let nbrbloc = document.getElementById('nbr_bloc').value;
    let nbrEtage = document.getElementById('nbr-etage').value;
    let nbrAppart = document.getElementById('nbr-appart').value;

    let f2Price = document.getElementById('f2-price').value;
    let f3Price = document.getElementById('f3-price').value;
    let f4Price = document.getElementById('f4-price').value;
    let f5Price = document.getElementById('f5-price').value;



    

    if (
        nom.length == 0 ||
        desc.length == 0 ||
        file.files.length == 0 ||
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

        let formData = new FormData();
        formData.append('nom', nom);
        formData.append('description', desc);
        formData.append('testImage', file.files[0]);
        formData.append('img_title', file.files[0].name)
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
            });
    }
});

function formatMoneyInput(input) {
    let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); // Add commas every three numbers
    input.value = value;
}
