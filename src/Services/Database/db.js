import Dexie from 'dexie';

const db = new Dexie('myDatabase');
db.version(1).stores({
  users: '++id,username,password',
});

function addUser(username, password) {
  return db.users.add({ username, password });
}

function checkCredentials(username, password) {
  return db.users.where({ username, password }).count().then(response => response );
}

export { addUser, checkCredentials, db };
