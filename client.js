const axios = require("axios");

const keycloakUrl = "http://127.0.0.1:8080";

(async () => {
  try {
    const response = await axios.get(`${keycloakUrl}`);
    console.log("Keycloak response:", response.data);
  } catch (error) {
    console.error("Error fetching Keycloak data:", error);
  }
})();

// const axios = require("axios");

// const { Client } = require("pg");

// (async () => {
//   axios
//     .get("http://localhost:8080/auth")
//     .then(function (response) {
//       // handle success
//       console.log("8080", response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .finally(function () {
//       // always executed
//     });
// })();

// (async () => {
//   axios
//     .get("https://localhost:8080/auth")
//     .then(function (response) {
//       // handle success
//       console.log("8080s", response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .finally(function () {
//       // always executed
//     });
// })();

// const pgclient = new Client({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "example",
//   database: "keycloak_db",
// });

// pgclient.connect();

// const table =
//   "CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))";
// const text =
//   "INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *";
// const values = [
//   "Mona the",
//   "Octocat",
//   9,
//   "88 Colin P Kelly Jr St, San Francisco, CA 94107, United States",
//   "octocat@github.com",
// ];

// pgclient.query(table, (err, res) => {
//   if (err) throw err;
// });

// pgclient.query(text, values, (err, res) => {
//   if (err) throw err;
// });

// pgclient.query("SELECT * FROM student", (err, res) => {
//   if (err) throw err;
//   console.log(err, res.rows); // Print the data in student table
//   pgclient.end();
// });
