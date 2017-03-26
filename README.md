## PHONEBOOK

**Phonebook is a web application that stores contact information.The user can either see a list of all contacts or click on the contact name to view more detail. There is also an option to create, update or delete a contact. **

**Technologies and frameworks:**

* Back end:
  * [Sequelize](http://docs.sequelizejs.com/en/v3/) - ORM to connect the PostgreSQL database
  * [Express framework](https://expressjs.com/) - RESTful API routes

* Front end:
  * [React](https://facebook.github.io/react/)
  * [Redux](http://redux.js.org/)
  * [React Router](https://reacttraining.com/react-router/)
  * [Redux Thunk](https://github.com/gaearon/redux-thunk)
  * [Webpack](https://webpack.js.org/)
  * [Babel](https://babeljs.io/)

API End Points
1. `/api/people` GET all people
2. `/api/people/:id` GET a specific person by id
3. `/api/people/` POST (create) a new person
4. `/api/people/:id` DELETE a person by id
5. `/api/people/:id` PUT (update) a specific person's info


### Installation

```sh
$ npm install
```
Set up the `server/db/config/config.json` file to your own configuration.
Add a database named `Spotify` to your PostgreSQL database.

To run the app:

```sh
$ npm start
```

---

### Frequently Asked Questions:

<dl>
  <dt>Do you have to go to the contact's to update them?</dt>
  <dd>No. There is an option to edit the user on the list view. You can find the list view on the home page</dd>

  <dt>What was the most challenging part of the project?</dt>
  <dd>Allowing components to be reusable for multiple purposes. For example the DisplayPerson component is used in the list view and the profile page.</dd>

  <dt>What do you plan on implementing in the future?</dt>
  <dd>1. Allow users to sign in.
      2. Add more contact information in the database.
  </dd>
</dl>

##License:
All content of this project is licensed for use under the MIT license.
All registered trademarks belong to their respective owners.
