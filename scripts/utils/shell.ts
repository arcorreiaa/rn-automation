import { execSync } from "child_process";
import chalk from "chalk";

export function runCommand(command: string) {
  console.log(chalk.blue(`> Executando: ${command}`));
  execSync(command, { stdio: "inherit" });
}
