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
var ref = db.ref("cnamacces31");



var salles = [
    {
        "_id" : 1,
        "numero_salle" : "31.1.01"
    },
    {
        "_id" : 2,
        "numero_salle" : "31.1.02"
    },
    {
        "_id" : 3,
        "numero_salle" : "31.1.03"
    },
    {
        "_id" : 4,
        "numero_salle" : "31.1.04"
    },
    {
        "_id" : 5,
        "numero_salle" : "31.2.01"
    },
    {
        "_id" : 6,
        "numero_salle" : "31.2.02"
    },
    {
        "_id" : 7,
        "numero_salle" : "31.2.03"
    },
    {
        "_id" : 8,
        "numero_salle" : "31.2.04"
    },
    {
        "_id" : 9,
        "numero_salle" : "31.3.01"
    },
    {
        "_id" : 10,
        "numero_salle" : "31.3.02"
    },
    {
        "_id" : 11,
        "numero_salle" : "31.3.03"
    },
    {
        "_id" : 12,
        "numero_salle" : "31.3.04"
    }
];

//tiré de https://firebase.google.com/docs/database/admin/save-data#node.js
salles.forEach(function(obj) {
    var usersRef = ref.child("salles");
    usersRef.child(obj._id).set({
      numero_salle: obj.numero_salle
    }).then(function(docRef) {
          console.log("Document written with ID: ", docRef._id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
});