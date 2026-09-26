import { createServer } from "node:http";

createServer(function (request, response) {
  if (request.url === "/users") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify(
        {
          name: "Emanuel",
          email: "emanuel@mail.com",
        },
        null,
        2,
      ),
    );
    return;
  }

  response.writeHead(404, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify(
      {
        message: "Recurso não encontrado",
      },
      null,
      2,
    ),
  );
}).listen(3000);
