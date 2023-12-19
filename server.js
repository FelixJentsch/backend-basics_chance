import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((req, res) => {
  const name = chance.name();
  const age = chance.age({ type: "adult" });
  const profession = chance.profession();

  const response = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(response);
});
