import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promt = () => {
  rl.question("$ ", (answer) => {
    if (answer === "exit 0") {
      rl.close();
      return;
    }
    if(answer.includes("echo")) {
      const echo = answer.split("echo ")[1];
      console.log(echo);
      promt();
      return;
    }
    console.log(`${answer}: command not found`);
    promt();
  });
};
promt();
