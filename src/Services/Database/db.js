import Dexie from "dexie";

const db = new Dexie("myDatabase");
db.version(1).stores({
  users: "++id,username,password",
});

function addUser(username, password) {
  return db.users
    .add({ username, password })
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.error("Error adding user:", error);
      return false;
    });
}

function checkCredentials(username, password) {
  return db.transaction("r", db.users, async () => {
    const usernameCount = await db.users
      .where("username")
      .equals(username)
      .count();

    const passwordCount = await db.users
      .where("password")
      .equals(password)
      .count();
    console.log("checkCredentials: ", usernameCount > 0 && passwordCount > 0);
    return usernameCount > 0 && passwordCount > 0;
  });
}

export { addUser, checkCredentials, db };
