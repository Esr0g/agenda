# agenda

## Utilisation

- `git clone`
- `cd agenda`
- `npm install`
- Commandes exécutables sous Ubuntu
  - `npm run build` (`npm run watch` pour compiler le programme en continue, celui-ci se recompile automatiquement lorsque un fichier est enregistré)
  - `npm start`
- Commandes exécutables sous Windows
  - `npm run build2`
  - `npm run start2`
- Rendez-vous sur <http://localhost:3000> pour accéder au site

## Documentation

- Routes :

  - POST : `/api/register`, Permet d'enregistrer un nouvel utilisateur. Prend un objet de la forme :

  ```javascript
    {
        username: yourUsername,
        password: yourPassword
    }
  ```

  - POST : `/api/login`, Permet de se connecter. Prend un objetde la forme :

  ```javascript
    {
        username: yourUsername,
        password: yourPassword
    }
  ```

  A partir d'ici, il est nécesaire de s'être connecté pour pouvoir utiliser les prochaine routes.

  - GET : `/api/auth/isAuthenticated`, Permet de savoir si un utilisateur est connecté.

  - DELETE : `/api/auth/deleteUser`, Permet de supprimer un utilisateur. Prend un objet de la forme :

  ```javascript
    {
        id: x (x doit être un entier)
    }
  ```

  - GET : `/api/auth/logout`, Permet de se déconnecter.

  - POST : `/api/auth/addEvent`, Permet d'ajouter un événement. Prend un objet de la forme :

  ```javascript
    {
        userID: un entier,
        dateDeb: date parsable par la librairie dayjs,
        dateFin: idem que dateDeb,
        name: String,
        adresse: String,
        description: String,
        allDay: bool
        }
  ```

  - GET : `/api/auth/getEventParam`, Permet de récupérer les événements entre 2 dates définie. Elle retourne l'ensemble des événements sous la forme d'un tableau. Prend objet de la forme (dans l'objet req.querry) :

  ```javascript
    {
        userID: un entier,
        dateDeb: une date parsable par dayjs,
        dateFin: idem dateDeb
    }
  ```

  - GET : `/api/auth/getEventUpdate`, Route qui permet d'effectuer le long polling. Synchronise les données de l'utilisateurs avec celle du serveur.

  - DELETE : `/api/auth/deleteEvent`, Permet de supprimer un événement. Prend un objet de la forme :

  ```javascript
    {
        userID: un entier,
        eventID: un entier
    }
  ```

  - PUT : `/api/auth/modifyEvent`, Permet de modifier un événement. Prend un objet de la forme :

  ```javascript
    {
        userID: un entier,
        dateDeb: date parsable par dayjs,
        dateFin: idem que dateDeb,
        name: String,
        adresse: String,
        description: String,
        allDay: bool,
        id: idEvent un entier
    }
  ```
