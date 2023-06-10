const fs = require("fs");
const express = require("express");
const cors = require("cors");
const {v4 : uuid} = require("uuid");
const mysql = require('mysql');
const multer = require("multer");
const bodyParser = require('body-parser');

let userLogged = {};

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

const imgFolderPath = 'D:\\Desktop\\pfe2\\uploads\\img';

// Check if the img folder exists, if not create it
if (!fs.existsSync(imgFolderPath)) {
  fs.mkdirSync(imgFolderPath, { recursive: true });
}


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

require('dotenv').config();


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // password: 'DaifouHkt26062003',
    database: 'pfe_immobile'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});



app.post('/auth', (req, res) => {
    let {email, password} = req.body;
    let sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        if(result.length > 0){
            userLogged = result[0];
            res.status(200).json(result[0]);
        }else{
            res.status(401).json({"error" : "Wrong username or password"});
        }
    });
});







app.post('/auth/signup', (req, res) => {
    let sql = 'INSERT INTO users SET ?';
    let post = {fullname: req.body.fullname, email: req.body.email, password: req.body.password, type: req.body.type, telephone: req.body.ntel}

    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('User added...');
    }
    );
});

const Storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        if (file.mimetype === 'application/pdf') {
            cb(null, 'uploads/pdf/');
          } else {
            cb(null, 'uploads/img/');
          }
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    },
});
const upload = multer({storage: Storage}).fields([
        { name: 'document', maxCount: 1 },
        { name: 'testImage', maxCount: 1 },
        { name: 'testImage2', maxCount: 1 },
        { name: 'testImage3', maxCount: 1 },
    ]);


app.post('/add-project', (req, res) => {
    
    upload(req, res, (err)=>{
        let sql = 'INSERT INTO project SET ?';
        if(err)
            res.status(500).json(err);
        else{
            let post = {
                project_id: uuid(), 
                project_name: req.body.nom,
                project_ville: req.body.ville,
                project_desc: req.body.description,
                user_id: req.body.uid,
                project_status: "En Cours",
                f2_price: req.body.f2_price,
                f3_price: req.body.f3_price,
                f4_price: req.body.f4_price,
                f5_price: req.body.f5_price,

            }
            let query = db.query(sql, post, (err, result) => {
                if(err) throw err;
        
            })

            let sqlimage = 'INSERT INTO image SET ?';

            
                let postimage = {
                    id: uuid(),
                    image_url : 'uploads/img/' + req.body.img_title,
                    project_id : post.project_id
                }
                let queryimage = db.query(sqlimage, postimage, (err, result) => {
                    if(err) throw err;
                });
            
                let postimage2 = {
                    id: uuid(),
                    image_url : 'uploads/img/' + req.body.img_title2,
                    project_id : post.project_id
                }
                let queryimage2 = db.query(sqlimage, postimage2, (err, result) => {
                    if(err) throw err;
                });

                let postimage3= {
                    id: uuid(),
                    image_url : 'uploads/img/' + req.body.img_title3,
                    project_id : post.project_id
                }
                let queryimage3= db.query(sqlimage, postimage3, (err, result) => {
                    if(err) throw err;
                });
                
            let postdoc = {
                doc_id: uuid(),
                doc_url : 'uploads/pdf/' + req.body.doc_title,
                project_id : post.project_id
            }
            let sqldoc = 'INSERT INTO document SET ?';
            let querydoc = db.query(sqldoc, postdoc, (err, result) => {
                if(err) throw err;
            });


            
            
            let nbrbloc = parseInt(req.body.nbr_bloc);
            let nbretage = parseInt(req.body.nbr_etage);
            let nbrappart = parseInt(req.body.nbr_appart);
            
            for(i = 0 ;  i < nbrbloc ; i++){
                let sqlbloc= 'INSERT INTO bloc SET ?';
                let postbloc = {
                    bloc_id: uuid(),
                    bloc_name : `${post.project_name} - Bloc ${i+1}`,
                    project_id : post.project_id
                }
                let queryBloc = db.query(sqlbloc, postbloc, (err, result) => {
                    if(err) throw err;
                })
                for(j = 0 ; j < nbretage ; j++){
                    let sqletage= 'INSERT INTO etage SET ?';
                    let postetage = {
                        etage_id: uuid(),
                        etage_name : `${post.project_name} - Bloc ${i+1} - Etage ${j+1}`,
                        bloc_id : postbloc.bloc_id
                    }
                    let queryEtage = db.query(sqletage, postetage, (err, result) => {
                        if(err) throw err;
                    })
                    for(k = 0 ; k < nbrappart ; k++){
                        let sqlappart= 'INSERT INTO appartement SET ?';
                        let postappart = {
                            appartement_id: uuid(),
                            prix_total: 0,
                            prix_reste: 0,
                            surface: 0,
                            etape_index: 0,
                            lot: 0,
                            chambre: 0,
                            appartement_name : `${post.project_name} - Bloc ${i+1} - Etage ${j+1} - Appartement ${k+1}`,
                            etage_id : postetage.etage_id
                        }
                        let queryAppart = db.query(sqlappart, postappart, (err, result) => {
                            if(err) throw err;
                        })
                    }
                }
                
            }
            
            res.json({...post});
            
        }
    });
    

});

app.post('/add-client', (req, res)=>{
    let sql = 'INSERT INTO client SET ?';
    let post = {
        client_id: uuid(), 
        client_nom: req.body.nom, 
        client_prenom: req.body.prenom, 
        client_phone: req.body.phone,
        client_adresse: req.body.address, 
        client_type: req.body.type, 
        project_id: req.body.project_id,
        user_id: req.body.user_id,
        date: new Date(),
        etape_versement: 0
    }
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

app.get('/get-pending-project/:id', (req, res)=>{
    let sql = `SELECT * FROM project WHERE project_status = 'En Cours' AND user_id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

app.get('/get-finished-project/:id', (req, res)=>{
    let sql = `SELECT * FROM project WHERE project_status = 'Fini' AND user_id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

app.get('/get-project/:id', (req, res)=>{
    let sql = `SELECT * FROM project WHERE project_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result[0]);
    })
});
app.get('/get-all-project/:id', (req, res)=>{
    let sql = `SELECT * FROM project WHERE user_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    })
});

// PUT METHOD 

app.put('/finished-project/:id', (req, res)=>{
    let sql = `UPDATE project SET project_status = 'Fini' WHERE project_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});
app.put('/pending-project/:id', (req, res)=>{
    let sql = `UPDATE project SET project_status = 'En Cours' WHERE project_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

app.get('/get-client/:id', (req, res)=>{
    let sql = `SELECT client_nom,
        client_prenom,      
        client_phone,
        client_adresse,
        client_type,
        project_name,
        client_id,
        etape_versement,
        date
        FROM client C, users U, project P
        WHERE C.user_id = U.id
        AND C.project_id = P.project_id
        AND C.user_id = '${req.params.id}'`;
        
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});
app.get('/get-client-information/:id', (req, res)=>{
    let sql = `SELECT client_nom,
        client_prenom,      
        client_phone,
        client_adresse,
        client_type,
        project_name,
        client_id,
        etape_versement,
        date
        FROM client C, users U, project P
        WHERE C.user_id = U.id
        AND C.project_id = P.project_id
        AND C.client_id= '${req.params.id}'`;
        
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

app.get('/get-bloc/:id', (req, res)=>{
    
    let sql = `SELECT * FROM bloc WHERE project_id = '${req.params.id}' ORDER BY bloc_name ASC`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
        
    
});


app.get('/get-etage/:id', (req, res)=>{
        
        let sql = `SELECT * FROM etage WHERE bloc_id = '${req.params.id}' ORDER BY etage_name ASC`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        })
            
        
    }
);

app.get('/get-appartement/:id', (req, res)=>{
        
    let sql = `SELECT * FROM appartement WHERE etage_id = '${req.params.id}' ORDER BY appartement_name ASC`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
        
    
}
);
app.get('/get-client-project/:id', (req,
    res)=>{
            
            let sql = `SELECT * FROM client 
            WHERE project_id = '${req.params.id}'
            AND NOT EXISTS 
            (SELECT * 
                FROM appartement
                WHERE appartement.purchased_by = client.client_id
                )`;
            let query = db.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            })
                
            
        }
);

app.post("/update-appartement/:id", (req, res)=>{
    let sql = `SELECT ${(req.body.chambre).toLowerCase()}_price AS total FROM project WHERE project_id = '${req.body.project_id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
          result[0].total;
         let sql2 = `UPDATE appartement SET 
         purchased_by = '${req.body.client}', 
         chambre = '${req.body.chambre}', 
         prix_total = '${result[0].total}', 
         surface = ${req.body.surface}, 
         lot = '${req.body.lot}',
         prix_reste = '${parseInt(result[0].total) * 20 / 100}'
         WHERE appartement_id = '${req.params.id}'`;
         let query2 = db.query(sql2, (err, result) => {
             if(err) throw err;
             res.json(result);
         }
         )
           
        
    });

    
});
app.put("/update-reste/:id", (req, res)=>{
   let sql = `UPDATE appartement SET 
         prix_reste = ${req.body.prix_reste}
         WHERE appartement_id = '${req.params.id}'`;

         let query= db.query(sql, (err, result) => {
             if(err) throw err;
             res.json(result);
         }
         )
           
        
    });

app.post("/update-etape/:id", (req, res)=>{
    console.log(req.body.client);
    let sql = `UPDATE appartement SET etape_index = '${req.body.etape}', prix_reste = ${req.body.prix_reste} WHERE appartement_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
    });

    let etape_index = parseInt(req.body.etape)
        let etape_percent = 0;

    switch(etape_index){
        case 1:
            etape_percent = 20;
            break;
        case 2:
            etape_percent = 35;
            break;
        case 3:
            etape_percent = 70;
            break;
        case 4:
            etape_percent = 95;
            break;
        case 5:
            etape_percent = 100;
            break;
    
    }
    console.log(etape_percent);
    

    let sql2 = `UPDATE client SET etape_versement = '${etape_percent}' WHERE client_id = '${req.body.client}'`;
    let query2 = db.query(sql2, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json(result);
    })
    
}
);

app.get('/get-todolist/:id', (req, res)=>{
    let sql = `SELECT * FROM todolist WHERE user_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

app.post('/add-todolist/:id', (req, res)=>{
    let sql = `INSERT INTO todolist SET ?`;
    let body = {
        todo_id: req.body.uuid,
        todo_content: req.body.task,
        todo_state: 'En cours',
        user_id: req.params.id
    }
    let query = db.query(sql, body, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

app.put('/update-todolist-pending/:id', (req, res) =>{
    let sql = `UPDATE todolist SET todo_state = 'En cours' WHERE todo_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

app.put('/update-todolist-done/:id', (req, res) =>{
    let sql = `UPDATE todolist SET todo_state = 'Terminé' WHERE todo_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});


app.post('/add-commercial/:id', (req, res)=>{
    let sql = `INSERT INTO commercial SET ?`;
    let body = {
        commercial_id: uuid(),
        width: req.body.width,
        height: req.body.height,
        amount: req.body.amount.split(',').join(""),
        user_id: req.params.id
    }

    
    let query = db.query(sql, body, (err, result) => {
        if(err) throw err;
        let nbr = parseInt(req.body.number);
    let sql2 = `INSERT INTO commercial_local SET ?`;
    for(let i = 0; i < nbr; i++){
        let body2 = {
            commercial_id: body.commercial_id,
            commercial_local_id: uuid()
        }
        let query2 = db.query(sql2, body2, (err, result) => {
            if(err) throw err;
        })
    }
    })
    
})
    app.get('/get-commercial/:id', (req, res)=>{
        let sql = `SELECT * FROM commercial WHERE user_id = '${req.params.id}'`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        })
    });
    app.get('/get-commercial-local/:id', (req, res)=>{
        let sql = `SELECT * FROM commercial_local WHERE commercial_id = '${req.params.id}'`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        })
    });

    app.put('/update-commercial/:id', (req, res)=>{
        let sql = `UPDATE commercial_local SET  client_id = '${req.body.clientId}' WHERE commercial_local_id = '${req.params.id}'`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        })
    })
    
app.get("/get-parkingPlaces/:id", (req, res)=>{
    let sql = `SELECT * FROM parking P, client C WHERE P.user_id = '${req.params.id}' AND P.client_id = C.client_id`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});
app.post('/add-parkingPlace', (req, res)=>{
    let sql = `INSERT INTO parking SET ?`;
    let body = {
        parking_id: uuid(),
        parking_number: req.body.parkingNbr,
        client_id: req.body.clientId,
        parking_prix: req.body.parkingPrice.split(',').join(""),
        user_id: req.body.userId
    }
    let query = db.query(sql, body, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

app.get('/all-project', (req, res)=>{
    let sql = `SELECT * FROM project`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

app.get("/get-images/:id" , (req, res)=>{
    let sql = `SELECT * FROM image WHERE project_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});
app.get("/get-documents/:id", (req, res)=>{
    let sql = `SELECT * FROM documents WHERE projet_id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

app.get('/get-user-info/:id', (req, res)=>{
    let sql = `SELECT * FROM users WHERE id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})


    

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})
