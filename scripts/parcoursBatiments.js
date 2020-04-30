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

parcoursElementaires.forEach(function(obj) {
    db.collection("parcoursElementaires").add({
        de: obj.de,
        a: obj.a,
        mouvement: obj.mouvement,
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});