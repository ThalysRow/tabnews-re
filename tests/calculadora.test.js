const { somar } = require("../models/calculadora.js");

test("somar 2 + 2 deve retornar 4", () => {
  const resultado = somar(2, 2);
  expect(resultado).toBe(4);
});

test("soma de 100 + 5 deve retornar 105", () => {
  const resultado = somar(100, 5);
  expect(resultado).toBe(105);
});

test("somar string + 100 deve retornar erro", () => {
  const resultado = somar("string", 100);
  expect(resultado).toBe("Error");
});

test("somar string + string deve retornar erro", () => {
  const resultado = somar("1", "2");
  expect(resultado).toBe("Error");
});
