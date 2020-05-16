# Ressources

* Cette [video Youtube](https://youtu.be/lpFDFK44pX8) explique comment créer en un rien de temps une application.. 
* la [Documentation Officielle de Firebase](https://firebase.google.com/docs/database/android/start) nous explique comment commencer une application
* importer un fichier json dans une base Firebase expliqueé dans [ce post Medium](https://levelup.gitconnected.com/firebase-import-json-to-firestore-ed6a4adc2b57)
* un autre [post Medium](https://medium.com/lucas-moyer/how-to-import-json-data-into-firestore-2b370486b622) détaille un peu plus
  * ce qu'il oublie de nous dire c'est qu'il faut installer [firebase via npm](https://www.npmjs.com/package/firebase)
  
# lancer les scripts [Node.js](https://nodejs.org/en/) de création de base

* les 2 scripts sont sous le répertoire **scripts** directement sous la racine
  * *sallesBatiment.js* crée une base Firebase qui liste des salles
  * *parcoursVatiments.js* crée une base Firebase qui liste les chemins entre les salles
## prérequis

* installer nodejs et npm comme [indiqué sur ce blog (je recommande l'installation via nwm)](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)
```bash
jpmena@jpmena-P34:~$ node --version
v12.14.0
jpmena@jpmena-P34:~$ npm --version
6.13.4
```

## l'installation et le lancement

* on se place sous le répertoire **scripts** présent directement sous la racine.

### installer [le client firebase via npm](https://www.npmjs.com/package/firebase) 

* on initiliase le repo npm
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase/scripts$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (scripts) 
version: (1.0.0) 
description: 
entry point: (parcoursBatiments.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /home/jpmena/AndroidStudioProjects/FireBaseDatabase/scripts/package.json:

{
  "name": "scripts",
  "version": "1.0.0",
  "description": "",
  "main": "parcoursBatiments.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
* installer [le client firebase](https://www.npmjs.com/package/firebase)
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase/scripts$ npm i firebase --save

> core-js@3.6.5 postinstall /home/jpmena/AndroidStudioProjects/FireBaseDatabase/scripts/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> protobufjs@6.9.0 postinstall /home/jpmena/AndroidStudioProjects/FireBaseDatabase/scripts/node_modules/protobufjs
> node scripts/postinstall

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN scripts@1.0.0 No description
npm WARN scripts@1.0.0 No repository field.

+ firebase@7.14.2
added 66 packages from 70 contributors and audited 184 packages in 77.832s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities



   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │      New minor version of npm available! 6.13.4 → 6.14.4       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.14.4   │
   │               Run npm install -g npm to update!                │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯

```
## lancer les script *sallesBatiment.js* et *parcoursBatiments.js*

### prerequis créer un projet Firebase

* Jais sur la [console Firebase](https://console.firebase.google.com/u/0/) et je crée un projet
  * il se nomme Geolocalisation Indoor
* Ajouter Firebase à mon application Android
  * nom du package *fr.cnam.nfa024.jpmena.firebasedatabase*
    * on enregistre le fichier *google-services.json* sous app 
* je demande à ajouter une autre application à mon projet Firebase et c'est ce dernier
   * je choisis une application Web et c'est là que j'obtiens ces clés!
   * je retrouve la variable firebaseConfig utilsée par *fireBase.initializeApp()*!
* je vais sur Database, créer une Daatabase!!!
  * il en profite pour configurer un espace de stockage ....


### lancement du script *sallesBatiment.js*
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase/scripts$ node sallesBatiment.js 
Document written with ID:  dWXy3pIJDzmFVQreX4Wa
Document written with ID:  ual9uD2icYo40gZxrP8S
Document written with ID:  BAeDrMaia7YNWhKXC7ID
Document written with ID:  KIW0z10HyB0grzkbunPQ
Document written with ID:  igzIvvJD70dFfhwNDQ5W
Document written with ID:  802NPb7O9Myze2bUYUzU
Document written with ID:  ZACK7iOM25ycY3S1f8ek
Document written with ID:  M8SzyxaikUC8OKoKaQqU
Document written with ID:  rUPdIpDm8LDRMs0Lv9kL
Document written with ID:  rbAWOLvQuuWojQuoKnJt
Document written with ID:  DjAzN5cOSN0XPKtquQiz
Document written with ID:  d6vk5QUs2Xk25maFiQ9u
```
* problème je dois faire un CTRL+C pous qu'il lâche la main !!!!
* dans la console on retrouve bien toutes les 12 entrées
### lancement du script *parcoursBatiment.js*
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase/scripts$ node parcoursBatiment.js 
Document written with ID:  iVciLYNZ4uh2xYk69pyJ
Document written with ID:  mMQsgwKrmHw5NLNeEXrY
Document written with ID:  cDB6M8AlDIEYJa1G9Rdt
Document written with ID:  HisutBS3tSOb5QBAp6Nb
Document written with ID:  bYeD42wkykZ5cIclYDYU
Document written with ID:  iL3SAh89Z1nPKcsdRn3u
Document written with ID:  NqLO4PHSOpPRIj0VAOk8
Document written with ID:  8nwxQKdZABDxb9GeeVOw
Document written with ID:  6MYVSGn5qnGFbj18MwhK
Document written with ID:  QfUS4lF07nADHeEiqqL5
Document written with ID:  avGAC38gRS1m7SM8lUz1
Document written with ID:  7a04m5NEBk6VY0UcFeEs
Document written with ID:  QugHeidChur4QUJ3pYdT
Document written with ID:  jSfhMIMkbq31C8tCtQrX
Document written with ID:  NH8XeoBSbe4Xucjc4lI1
Document written with ID:  qua5AA8tCJMmkSePGbzg
Document written with ID:  7tJZ1ilaaqWqiAqu45QA
Document written with ID:  IU3OKnbrMevjqcDTzz3Y
Document written with ID:  WLGTmWQB4mX8rQ54aMOK
Document written with ID:  TnQYdeYPMmwT5tXcxNZ1
Document written with ID:  f34wMtRQzJWovaqJrnh1
Document written with ID:  kbcobqVIQ82G6i5nVnVZ
Document written with ID:  f18Mrwnno1CyodfXr95Y
Document written with ID:  mic7PxxPKaKPXl56Nbnj
Document written with ID:  vIZD6RsxFRFzaxMng52n
Document written with ID:  zLX66JLgMsUYS8hDclNx
Document written with ID:  Lhghu3ar9FxSIEfIXacz
Document written with ID:  fxBA8WGlUqWqlIDyFOUd
Document written with ID:  42KUIt8EIh1lLP3kOKyD
Document written with ID:  kntAYypTy2bdCq13x3M4
Document written with ID:  RStJh17QwrNB45I3zV4I
Document written with ID:  gHtQpFLH4m2rkghwYjRP
Document written with ID:  ItmJDNqR652HvOeWaKnC
Document written with ID:  qbKJnGLW3AjjFAVbIty2
Document written with ID:  cRKNg2kNYph7r8gGJ2hZ
Document written with ID:  vs0HavpgUF0cXWXJaFT0
Document written with ID:  m79136FkavckXmAnVBCb
Document written with ID:  1ZetBtPkujDmwSSwcRG8
Document written with ID:  k8WNbahHOwtJxyeDAWgp
Document written with ID:  J8JHOIf37SPTAnwSuFFb
Document written with ID:  he9VdxvtzoQfB9B1Q2iy
Document written with ID:  vqUpQFUTUQ76Tk1Szp8I
Document written with ID:  hRUdLF0I7IkTg6XdqqyX
Document written with ID:  ybHJ71JUyd0qcIoDK3Wi
Document written with ID:  USDKVZK1EaiLf7VD7eX0
```
* problème je dois faire un CTRL+C pous qu'il lâche la main !!!!

# problème j'accéde au Cloud Firestoe et non à la Realtime Database:

* un bon lien pour [sauver sur le FireBase Realtimee Database](https://firebase.google.com/docs/database/admin/save-data#node.js)

## installation de Firebase-admin

```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase/scripts$ npm install firebase-admin --save
npm WARN scripts@1.0.0 No description
npm WARN scripts@1.0.0 No repository field.

+ firebase-admin@8.11.0
added 159 packages from 106 contributors and audited 991 packages in 17.635s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
## récupérer le fichier json de configuration de l'admin Firebase

* comme noté sur ce [poost StackOverflow](https://stackoverflow.com/questions/51433374/firebase-certificate-object-must-contain-a-string-private-key-property)
* il faut aller sur la [console FireBase](https://console.firebase.google.com/u/0/)
  * cliquer sur [mon projet](https://console.firebase.google.com/u/0/project/geolocalisation-indoor/overview)
  * à droite de *Vue d'ensemble du projet* se trouve une rous crantée
  * cliquer dessus et choisir dans le popup Menu *paramètres du projet*
  * sélectionnez l'onglet *Compte de service*
* l'écran est par défaut sur l'onglet *Sdk Admin Firebase*
* on laise le bouton radio sur json 
* on clique sur Générer une nouvelle clé
  * est ce cela qui nous donne le fichier *serviceAccountKey.json* ?
  * réponse oui l'insertion se fait bien en base malgré le message suivant:
    * ligne 78 docRef n'est pas défini
## l'insertion en base des salles:
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase/scripts$ node sallesBatimentFireBase.js 
Error adding document:  TypeError: Cannot read property '_id' of undefined
    at /home/jpmena/AndroidStudioProjects/FireBaseDatabase/scripts/sallesBatimentFireBase.js:78:60
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
......................................................................
Error adding document:  TypeError: Cannot read property '_id' of undefined
    at /home/jpmena/AndroidStudioProjects/FireBaseDatabase/scripts/sallesBatimentFireBase.js:78:60
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
```
# l'insertion en base des mouvements:
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase/scripts$ node parcoursBatimentFireBase.js
indice vaut :0
indice vaut :1
...................
indice vaut :44
```  
# accès aux données via curl :

* Il faut commencer le projet REST à [Get Started](https://firebase.google.com/docs/database/rest/start?hl=fr)

## prérequis ouverture de la base en lecture à tout le monde

* au niveau de la base de donnée du projet [Geolocalisation Indoor](https://geolocalisation-indoor.firebaseio.com/)
  * menu de droite *Database* puis choisir *Realtime Database*
  * cliquer sur *l'onglet Règles*, j'ai choisi de donner à tout le monde le droit d'accès en lecture à la base
```javasscript
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": true,
    ".write": false
  }
}
``` 

## accès au données de la table des salles

* récupérer toutes les Salles avec curl
  * attention, le premier résultat est null!
```bash
#récupérer toutes les salles
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase$ curl -i https://geolocalisation-indoor.firebaseio.com/cnamacces31/salles.json 
HTTP/1.1 200 OK
Server: nginx
Date: Mon, 04 May 2020 12:56:52 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 429
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: no-cache
Strict-Transport-Security: max-age=31556926; includeSubDomains; preload

[null,{"_id":1,"numero_salle":"31.1.01"},{"_id":2,"numero_salle":"31.1.02"},{"_id":3,"numero_salle":"31.1.03"},{"_id":4,"numero_salle":"31.1.04"},{"_id":5,"numero_salle":"31.2.01"},{"_id":6,"numero_salle":"31.2.02"},{"_id":7,"numero_salle":"31.2.03"},{"_id":8,"numero_salle":"31.2.04"},{"_id":9,"numero_salle":"31.3.01"},{"_id":10,"numero_salle":"31.3.02"},{"_id":11,"numero_salle":"31.3.03"},{"_id":12,"numero_salle":"31.3.04"}]
```
* récupérer une salle particulière:
  * exemple de la salle 2
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase$ curl -i https://geolocalisation-indoor.firebaseio.com/cnamacces31/salles/2.json
HTTP/1.1 200 OK
Server: nginx
Date: Mon, 04 May 2020 13:02:22 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 34
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: no-cache
Strict-Transport-Security: max-age=31556926; includeSubDomains; preload

{"_id":2,"numero_salle":"31.1.02"}
```

## accès au données de la table des mouvements/parcours

* récupérer tous les mouvements
  * pas de null ici
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase$ curl -i https://geolocalisation-indoor.firebaseio.com/cnamacces31/mouvements.json
HTTP/1.1 200 OK
Server: nginx
Date: Mon, 04 May 2020 13:04:36 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 2017
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: no-cache
Strict-Transport-Security: max-age=31556926; includeSubDomains; preload

[{"a":2,"de":1,"mouvement":"SUD"},.............,{"a":12,"de":8,"mouvement":"NORD+EST+MONTER+OUEST+SUD"}]
```
* Récupérer un seul mouvement:
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase$ curl -i https://geolocalisation-indoor.firebaseio.com/cnamacces31/mouvements/1.json
HTTP/1.1 200 OK
Server: nginx
Date: Mon, 04 May 2020 13:08:38 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 33
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: no-cache
Strict-Transport-Security: max-age=31556926; includeSubDomains; preload

{"a":1,"de":2,"mouvement":"NORD"}
```

# ajouter le niveau database (bâtiment)

* Comme indiqué [dans ce document Android](https://firebase.google.com/docs/database/rest/retrieve-data?hl=fr#shallow) avec *shalloww* 
  * on peut n'afficher que le premier niveau
  * pour retrouver la liste des bases de données sans charger leur contenu, on ajoute **?shallow=true** à l'url et cela devient
```bash
jpmena@jpmena-P34:~/AndroidStudioProjects/FireBaseDatabase$ curl -i https://geolocalisation-indoor.firebaseio.com/buildingmaps.json?shallow=true
HTTP/1.1 200 OK
Server: nginx
Date: Wed, 06 May 2020 09:37:30 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 20
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: no-cache
Strict-Transport-Security: max-age=31556926; includeSubDomains; preload

{"cnamacces31":true}

```

# 16/05/2020 on prend en compte le cas où il y a des travaux, un plan Vigiepirate un sens de circulation (COVID)

* On ajoute pour chaque élément de parcours une entrée **accessible** qui vaut soit *true* (on passe) soit *false* (onn ne passe pas)
* On peut ajouter cette même entrée pour distinguer les salles disponibles des salles condamnées (même si provisoirement)

## test de la prise en compte de cette nouvelle entrée

* on relance les 4 scripts Node/JS...
* TODO: Mise à jour de la base de données (projet Geolocalisation Indoor) 