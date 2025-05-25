import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const acceptedCommands = ["echo", "type", "exit", "PATH"];

const promt = () => {
  rl.question("$ ", (answer) => {
    const firstCommand = answer.split(" ")[0];

    if (firstCommand.includes("exit")) {
      rl.close();
      return;
    }
    if (firstCommand.includes("echo")) {
      const echo = answer.split("echo ")[1];
      console.log(echo);
      promt();
      return;
    }
    if (firstCommand.includes("type")) {
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
