import inquirer from "inquirer";
import { readJSON, writeJSON } from "./utils/file";
import { runCommand } from "./utils/shell";
import chalk from "chalk";

export default async function publish() {
  console.log(chalk.magenta("🚀 Iniciando publicação..."));

  const packageJson = await readJSON("./package.json");
  const appJson = await readJSON("./app.json");

  console.log(chalk.yellow(`Versão atual: ${packageJson.version}`));

  const { newVersion } = await inquirer.prompt([
    {
      type: "input",
      name: "newVersion",
      message: chalk.cyan("Informe a nova versão:"),
      validate: (input) => !!input,
    },
  ]);

  packageJson.version = newVersion;
  appJson.expo.version = newVersion;

  await writeJSON("./package.json", packageJson);
  await writeJSON("./app.json", appJson);

  console.log(chalk.green(`✅ Versão atualizada para ${newVersion}`));

  runCommand("expo publish");
}
