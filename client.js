const axios = require("axios");

const keycloakUrl = "http://127.0.0.1:8080";
const cpgUrl = "http://127.0.0.1:8201";

(async () => {
  try {
    const response = await axios.get(`${keycloakUrl}`);
    console.log("Keycloak response:", response.data);
  } catch (error) {
    console.error("Error fetching Keycloak data:", error);
  }
})();

(async () => {
  try {
    const response = await axios.get(`${cpgUrl}`);
    console.log("cpg response:", response.data);
  } catch (error) {
    console.error("Error fetching cpg data:", error);
  }
})();

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
