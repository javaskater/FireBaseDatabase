//tiré de https://medium.com/lucas-moyer/how-to-import-json-data-into-firestore-2b370486b622
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "<YOUR API KEY>",
    authDomain: "<YOUR AUTH DOMAIN>",
    projectId: "<YOUR PROJECT ID>"
  });

var db = firebase.firestore();

var salles = [
    {
        _id = "1",
        numero_salle = "31.1.01"
    },
    {
        _id = "2",
        numero_salle = "31.1.02"
    },
    {
        _id = "3",
        numero_salle = "31.1.03"
    },
    {
        _id = "4",
        numero_salle = "31.1.04"
    },
    {
        _id = "5",
        numero_salle = "31.2.01"
    },
    {
        _id = "6",
        numero_salle = "31.2.02"
    },
    {
        _id = "7",
        numero_salle = "31.2.03"
    },
    {
        _id = "8",
        numero_salle = "31.2.04"
    },
    {
        _id = "9",
        numero_salle = "31.3.01"
    },
    {
        _id = "10",
        numero_salle = "31.3.02"
    },
    {
        _id = "11",
        numero_salle = "31.3.03"
    },
    {
        _id = "12",
        numero_salle = "31.3.04"
    }
];
salles.forEach(function(obj) {
    db.collection("salles").add({
        _id: obj._id,
        numero_salle: obj.numero_salle
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});