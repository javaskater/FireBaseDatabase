// tiré de https://firebase.google.com/docs/database/admin/save-data#node.js
// Import Admin SDK
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./geolocalisation-indoor-firebase-adminsdk-h63nu-5326f667de.json");

// tiré de https://firebase.google.com/docs/database/admin/start
// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://geolocalisation-indoor.firebaseio.com"
});

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("buildingmaps/cnamacces32");

var parcoursElementaires = [
    {
        "de":1,
        "a":2,
        "mouvement":"SUD",
    },
    {
        "de":2,
        "a":1,
        "mouvement":"NORD",
    },
    {
        "de": 1,
        "a":3,
        "mouvement":"EST",
    },
    {
        "de": 3,
        "a":1,
        "mouvement":"OUEST",
    },
    {
        "de": 3,
        "a":4,
        "mouvement":"SUD",
    },
    {
        "de": 4,
        "a":3,
        "mouvement":"NORD",
    },
    {
        "de": 2,
        "a":4,
        "mouvement":"EST",
    },
    {
        "de": 4,
        "a":2,
        "mouvement":"OUEST",
    },
    {
        "de":3,
        "a":7,
        "mouvement":"EST+MONTER+OUEST+NORD",
    },
    {
        "de":7,
        "a":3,
        "mouvement":"EST+DESCENDRE+OUEST+NORD",
    },
    {
        "de":4,
        "a":8,
        "mouvement":"EST+MONTER+OUEST+SUD",
    },
    {
        "de":8,
        "a":4,
        "mouvement":"EST+DESCENDRE+OUEST+SUD",
    },
    {
        "de":1,
        "a":5,
        "mouvement":"OUEST+MONTER+EST+NORD",
    },
    {
        "de":5,
        "a":1,
        "mouvement":"OUEST+DESCENDRE+EST+NORD",
    },
    {
        "de":2,
        "a":6,
        "mouvement":"OUEST+MONTER+EST+SUD",
    },
    {
        "de":6,
        "a":2,
        "mouvement":"OUEST+DESCENDRE+EST+SUD",
    },
    {
        "de":5,
        "a":6,
        "mouvement":"SUD",
    },
    {
        "de":6,
        "a":5,
        "mouvement":"NORD",
    },
    {
        "de":5,
        "a":7,
        "mouvement":"EST",
    },
    {
        "de":7,
        "a":5,
        "mouvement":"OUEST",
    },
    {
        "de":6,
        "a":8,
        "mouvement":"EST",
    },
    {
        "de":8,
        "a":6,
        "mouvement":"OUEST",
    },
    {
        "de":5,
        "a":9,
        "mouvement":"SUD+OUEST+MONTER+EST+NORD",
    },
    {
        "de":9,
        "a":5,
        "mouvement":"SUD+OUEST+DESCENDRE+NORD",
    },
    {
        "de":10,
        "a":5,
        "mouvement":"NORD+OUEST+DESCENDRE+NORD",
    },
    {
        "de":6,
        "a":9,
        "mouvement":"NORD+OUEST+MONTER+EST+NORD",
    },
    {
        "de":6,
        "a":10,
        "mouvement":"NORD+OUEST+MONTER+EST+SUD",
    },
    {
        "de":9,
        "a":6,
        "mouvement":"SUD+OUEST+DESCENDRE+SUD",
     },
     {
        "de":10,
        "a":6,
        "mouvement":"NORD+OUEST+DESCENDRE+SUD",
     },
     {
        "de":9,
        "a":10,
        "mouvement":"SUD",
     },
     {
        "de":10,
        "a":9,
        "mouvement":"NORD",
     },
     {
        "de":9,
        "a":11,
        "mouvement":"EST",
     },
     {
        "de":11,
        "a":9,
        "mouvement":"OUEST",
     },
     {
        "de":10,
        "a":12,
        "mouvement":"EST",
     },
     {
        "de":12,
        "a":10,
        "mouvement":"OUEST",
     },
     {
        "de":12,
        "a":11,
        "mouvement":"NORD",
     },
     {
        "de":11,
        "a":12,
        "mouvement":"SUD",
     },
     {
        "de":11,
        "a":7,
        "mouvement":"SUD+EST+DESCENDRE+OUEST+NORD",
     },
     {
        "de":7,
        "a":11,
        "mouvement":"SUD+EST+MONTER+OUEST+NORD",
     },
     {
        "de":12,
        "a":7,
        "mouvement":"NORD+EST+DESCENDRE+OUEST+NORD",
     },
     {
        "de":7,
        "a":12,
        "mouvement":"SUD+EST+MONTER+OUEST+SUD",
     },
     {
        "de":11,
        "a":8,
        "mouvement":"SUD+EST+DESCENDRE+OUEST+SUD",
     },
     {
        "de":8,
        "a":11,
        "mouvement":"NORD+EST+MONTER+OUEST+NORD",
     },
     {
        "de":12,
        "a":8,
        "mouvement":"NORD+EST+DESCENDRE+OUEST+SUD",
     },
     {
        "de":8,
        "a":12,
        "mouvement":"NORD+EST+MONTER+OUEST+SUD",
     }
];

var indice = 0;

//tiré de https://firebase.google.com/docs/database/admin/save-data#node.js
parcoursElementaires.forEach(function(obj) {
    var parcoursRef = ref.child("mouvements");
    console.log("indice vaut :"+ indice);
    parcoursRef.child(indice).set({
      de: obj.de,
      a: obj.a,
      mouvement: obj.mouvement,
    }).then(function(docRef) {
          console.log("Document written");
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    indice = indice + 1;
});