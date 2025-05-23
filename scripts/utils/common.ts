import chalk from "chalk";
import cfonts from "cfonts";

export async function printBanner() {
  console.clear();

  cfonts.say("React Native\n Automation CLI", {
    font: "block", // "block", "tiny", "chrome", etc.
    align: "center",
    colors: ["black", "red"], // pode usar até 2 cores
    background: "transparent",
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: "0",
    gradient: ["blue", "cyan", "white", "cyan", "blue"], // gradiente
    independentGradient: true,
    transitionGradient: true,
    env: "node",
  });

  console.log(
    chalk.gray(
      "\n💀  .. -- LinkedIn: https://www.linkedin.com/in/arcorreiaa/ -- .. 💀\n"
    )
  );
}

export const withSpacing = (choices: { name: string; value: string }[]) => {
  return choices.flatMap((choice) => [choice, ""]);
};

export const log = {
  info: (msg: string) => console.log(chalk.yellow(msg)),
  success: (msg: string) => console.log(chalk.greenBright.bold(msg)),
  error: (msg: string) => console.log(chalk.redBright.bold(msg)),
  line: () => console.log(chalk.gray("────────────────────────────────────")),
};
