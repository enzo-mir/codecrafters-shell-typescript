import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const acceptedCommands = ["echo", "type", "exit"];

const promt = () => {
  rl.question("$ ", (answer) => {
    if (answer === "exit 0") {
      rl.close();
      return;
    }
    if (answer.includes("echo")) {
      const echo = answer.split("echo ")[1];
      console.log(echo);
      promt();
      return;
    }
    if (answer.includes("type")) {
      const type = answer.split("type ")[1];

      if (acceptedCommands.includes(type)) {
        console.log(`${type} is a shell builtin`);
        promt();
        return;
      } else {
        console.log(`${type}: not found`);
        promt();
        return;
      }
    }
    console.log(`${answer}: command not found`);
    promt();
  });
};
promt();
