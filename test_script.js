const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
console.log(client);
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query('SELECT * FROM famous_people WHERE last_name = $1', ['Lincoln'], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    //console.log(result);
    console.log(result.rows); //output: 1
    client.end();
  });
});