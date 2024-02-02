import database from "../../../../infra/database.js";

function status(request, response) {
  response.status(200).send("Tudo ok!");
}

export default status;
