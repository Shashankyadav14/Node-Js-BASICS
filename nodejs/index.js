// const person = require('./person');
// //console.log(person.name)
// const person1 = new person('jon',30);
// person1.greeting();

// Event Emitter
// const Logger = require("./logger");
// const logger = new Logger();
// logger.on("message", data => console.log("Called Listener:", data));

// logger.log("Hello World");

// Putting together what we have learnt
const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  //  build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url == "/" ? "index.html" : req.url
  );
  // extension of file
  let extname = path.extname(filePath);
  console.log(extname);
  // Check ext  and set Content-Type
  switch (extname) {
    case ".js":
      contentType = "text/javaScript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".html":
      contentType = "text/html";
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENONET") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // some Server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Succes
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
    // console.log(filePath);
    // res.end();
  });
});
//   console.log(req.url);
//   if (req.url == "/") {
//     fs.readFile(
//       path.join(__dirname, "public", "hello.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(content);
//       }
//     );
//   }

//   if (req.url == "/api/users") {
//     const users = [
//       {
//         name: "Shashank",
//         age: 20
//       },
//       {
//         name: "Muni",
//         age: 20
//       }
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//     // fs.readFile(
//     //   path.join(__dirname, "public", "about.html"),
//     //   (err, content) => {
//     //     if (err) throw err;
//     //     res.writeHead(200, { "Content-Type": "text/html" });
//     //     res.end(content);
//     //   }
//     // );
//   }
// });

server.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
