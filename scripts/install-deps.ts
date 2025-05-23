import { runCommand } from "./utils/shell";
import chalk from "chalk";

export default async function installDeps() {
  console.log(chalk.blue("🔧 Instalando dependências..."));

  try {
    runCommand("yarn install");
    console.log(chalk.green("✅ Dependências instaladas com sucesso!"));
  } catch (err) {
    console.error(chalk.red("❌ Erro ao instalar dependências"), err);
  }
}
