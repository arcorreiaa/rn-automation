// performance.ts
import inquirer from "inquirer";
import chalk from "chalk";
import { log, printBanner } from "./utils/common";

export async function performanceMenu() {
  console.clear();
  console.log(chalk.bold.green("\n⚡ Menu de Performance\n"));

  while (true) {
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: chalk.yellow("O que deseja ajustar?"),
        choices: [
          new inquirer.Separator(" "),

          { name: "🧠  Aumentar memória do Node.js", value: "increaseMem" },
          new inquirer.Separator(" "),

          { name: "🚫  Desabilitar logs de debug", value: "disableLogs" },
          new inquirer.Separator(" "),

          { name: "⬅️   Voltar ao menu principal", value: "back" },
          new inquirer.Separator(" "),
        ],
        pageSize: 10,
      },
    ]);

    if (choice === "back") {
      break; // sai do loop e volta ao menu principal
    }

    if (choice === "increaseMem") {
      await memorySubMenu();
    } else if (choice === "disableLogs") {
      log.success("Logs de debug desabilitados (simulação).");
      await pause();
    }
  }
  console.clear();
}

async function memorySubMenu() {
  const memoryOptions = [
    { name: "4GB", value: 4 },
    { name: "8GB", value: 8 },
    { name: "12GB", value: 12 },
    { name: "16GB", value: 16 },
    { name: "Voltar", value: "back" },
  ];

  while (true) {
    const { memChoice } = await inquirer.prompt([
      {
        type: "list",
        name: "memChoice",
        message: chalk.yellow(
          "Selecione a quantidade de memória para o Node.js:"
        ),
        choices: memoryOptions,
      },
    ]);

    if (memChoice === "back") {
      break; // volta para o menu performance
    }

    log.success(
      `Memória do Node.js aumentada para ${memChoice}GB (simulação).`
    );
    await pause();
  }
}

async function pause() {
  await inquirer.prompt([
    {
      type: "input",
      name: "continue",
      message: chalk.gray("Pressione Enter para continuar..."),
    },
  ]);
}
