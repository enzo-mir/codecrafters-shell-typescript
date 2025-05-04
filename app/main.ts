import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promt = () => {
  rl.question("$ ", (answer) => {
    console.log(`${answer}: command not found`);
    promt();
    process.exit(0);
  });
};
promt();
