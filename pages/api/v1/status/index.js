import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("");
  response.status(200).send("Tudo ok!");
}

export default status;
