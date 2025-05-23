import inquirer from "inquirer";
import chalk from "chalk";
import { runCommand } from "./utils/shell";

export default async function startApp() {
  console.log(chalk.cyan.bold("\n🚀 Iniciando o CareApp...\n"));

  const { platform } = await inquirer.prompt([
    {
      type: "list",
      name: "platform",
      message: chalk.yellow("Como você quer iniciar o app?"),
      choices: [
        { name: "📱 Expo QR Code (padrão)", value: "default" },
        { name: "🤖 Android", value: "android" },
        { name: "🍎 iOS", value: "ios" },
        { name: "❌ Cancelar", value: "cancel" },
      ],
    },
  ]);

  switch (platform) {
    case "default":
      runCommand("expo start");
      break;
    case "android":
      runCommand("expo start --android");
      break;
    case "ios":
      runCommand("expo start --ios");
      break;
    case "cancel":
    default:
      console.log(chalk.green("👋 Cancelado."));
      process.exit(0);
  }
}
