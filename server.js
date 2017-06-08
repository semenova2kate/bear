"use strict";

const http = require("http");
const fs = require("fs");

const worker = function (req, resp) {
  let url = req.url;
  let content;
  let path = "static/";

  switch(url) {
    case "/":
      url = 'index';
      path += `${url}.html`;
      break;
    default:
      path += url;
      break;
  }
  if(fs.existsSync(path)) {
    content = fs.readFileSync(path, "utf8");
  }
  else {
    content = `Path '${path}' is not found!`;
    resp.writeHead(404);
  }
  resp.write(content);
  resp.end();
};

const server = http.createServer(worker);
const port = process.env.PORT || 3000;

server.listen(port, () => {});
