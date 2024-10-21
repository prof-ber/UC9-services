const fs = require("fs");

const cachorro = {
  nome: "Rex",
  idade: 3,
};

fs.writeFile("cachorro.json", JSON.stringify(cachorro, null, 2), (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File has been written successfully");
  }
});
