const fs = require("fs"); // módulo file system / nome do modulo = nome variavel
fs.readFile("arquivo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});
