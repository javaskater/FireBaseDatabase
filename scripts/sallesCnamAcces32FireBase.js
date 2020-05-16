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



var salles = [
    {
        "_id" : 1,
        "numero_salle" : "32.1.01",
        "accessible":true
    },
    {
        "_id" : 2,
        "numero_salle" : "32.1.02",
        "accessible":true
    },
    {
        "_id" : 3,
        "numero_salle" : "32.1.03",
        "accessible":true
    },
    {
        "_id" : 4,
        "numero_salle" : "32.1.04",
        "accessible":true
    },
    {
        "_id" : 5,
        "numero_salle" : "32.2.01",
        "accessible":true
    },
    {
        "_id" : 6,
        "numero_salle" : "32.2.02",
        "accessible":true
    },
    {
        "_id" : 7,
        "numero_salle" : "32.2.03",
        "accessible":true
    },
    {
        "_id" : 8,
        "numero_salle" : "32.2.04",
        "accessible":true
    },
    {
        "_id" : 9,
        "numero_salle" : "32.3.01",
        "accessible":true
    },
    {
        "_id" : 10,
        "numero_salle" : "32.3.02",
        "accessible":true
    },
    {
        "_id" : 11,
        "numero_salle" : "32.3.03",
        "accessible":true
    },
    {
        "_id" : 12,
        "numero_salle" : "32.3.04",
        "accessible":true
    }
];

//tiré de https://firebase.google.com/docs/database/admin/save-data#node.js
salles.forEach(function(obj) {
    var sallesRef = ref.child("salles");
    sallesRef.child(obj._id).set({
      _id:obj._id,
      numero_salle: obj.numero_salle,
      accessible: obj.accessible
    }).then(function(docRef) {
          console.log("Document written");
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
});