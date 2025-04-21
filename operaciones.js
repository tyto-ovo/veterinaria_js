const fs = require("fs");

const registrar = (name, age, type, colour, problem) => {
  const nuevaCita = {
    Nombre: name,
    Edad: age,
    Tipo: type,
    Color: colour,
    Enfermedad: problem,
  };
  const dataJSON = JSON.parse(fs.readFileSync("citas.json", "utf-8"));

  dataJSON.push(nuevaCita);
  fs.writeFileSync("citas.json", JSON.stringify(dataJSON));
};

const leer = () => {
  const lectura = JSON.parse(fs.readFileSync("citas.json", "itf-8"));
  console.log(lectura);
};

module.exports = { registrar, leer };
