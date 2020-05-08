# Client Android pour les bases FireBase

## Ressources

* un long [post de OpenClassRooms](https://openclassrooms.com/fr/courses/4428411-developpez-des-applications-android-connectees/4433916-lisez-des-objets-json-depuis-une-requete-http)
  * il propose de tout mettre dans des Async Tasks!
* pour commencer la [réponse 29 de StackOverflow](https://stackoverflow.com/questions/34691175/how-to-send-httprequest-and-get-json-response-in-android)

## Développements

###  Première erreur
```
Caused by: android.os.NetworkOnMainThreadException
```
* Cf. cette [réponse 0 StackOverflow](https://stackoverflow.com/questions/33321280/android-post-request-error-using-httpurlconnection)
  * l'appel Web ne doit pas se faire dans le UIThread
  * de là l'usage d'une AsyncTask
* récupérer le contenu de l'AsyncTask dans l'activité cf. [réponse 18 de ce StackOverflow](https://stackoverflow.com/questions/12575068/how-to-get-the-result-of-onpostexecute-to-main-activity-because-asynctask-is-a)

## créer un menu dynamique qui affiche la liste des bâtiments:

* dans le onOptionsItemSelected on change juste la variable URLBASE
* Je voudrais que la branche le menu sélectionné ait les caractères en rouge
  * réponse 85 de cette [question StackOverflow](https://stackoverflow.com/questions/3519277/how-to-change-the-text-color-of-menu-item-in-android)
