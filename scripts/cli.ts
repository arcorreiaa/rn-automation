import inquirer from "inquirer";
import chalk from "chalk";
import { printBanner, log } from "./utils/common";
import { ExitPromptError } from "@inquirer/core";
import { performanceMenu } from "./perfomace";

async function menu() {
  try {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: chalk.yellow("🧭 O que você quer fazer?\n"),
        choices: [
          new inquirer.Separator(" "),
          { name: "🏁 Iniciar o aplicativo", value: "startApp" },
          { name: "📦 Instalar dependências", value: "install" },
          { name: "⚙️  Otimizações de desempenho", value: "performance" },
          { name: "📱 Gerar APK Android", value: "buildAndroid" },
          { name: "🧹 Limpar projeto", value: "clean" },
          { name: "🚀 Publicar aplicativo", value: "publish" },
          { name: "🆕 Criar nova tela", value: "createScreen" },
          new inquirer.Separator(" "),
          { name: "❌ Sair", value: "exit" },
          new inquirer.Separator(" "),
        ],
        pageSize: 10,
        loop: false,
      },
    ]);

    log.line();

    switch (action) {
      case "startApp":
        await import("./start-app").then((mod) => mod.default());
        break;
      case "install":
        await import("./install-deps").then((mod) => mod.default());
        break;
      case "performance":
        await performanceMenu();
        break;
      case "buildAndroid":
        await import("./build-android").then((mod) => mod.default());
        break;
      case "publish":
        await import("./publish").then((mod) => mod.default());
        break;
      case "createScreen":
        await import("./create-screen").then((mod) => mod.default());
        break;
      case "clean":
        await import("./clean").then((mod) => mod.default());
        break;
      case "exit":
        log.success("👋 Saindo... Até a próxima!\n");
        process.exit(0);
    }

    log.line();
    await inquirer.prompt([
      {
        type: "input",
        name: "continue",
        message: chalk.gray("Pressione Enter para voltar ao menu..."),
      },
    ]);
    await menu();
  } catch (error) {
    if (error instanceof ExitPromptError) {
      log.success("\n👋 Saindo... Até a próxima!\n");
      process.exit(0);
    }
    throw error;
  }
}

async function main() {
  console.clear();
  await printBanner();
  await menu();
}

main();
