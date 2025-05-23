// scripts/clean.ts
import { execSync } from "child_process";
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "./utils/common";

async function cleanProject() {
  const { options } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "options",
      message: chalk.cyan("🧹 O que você quer limpar?"),
      choices: [
        new inquirer.Separator(" "),
        { name: "🧠 Cache do Expo", value: "expo" },
        { name: "📦 node_modules", value: "nodeModules" },
        { name: "📂 Diretório android/build", value: "androidBuild" },
        { name: "🧱 Cache Gradle", value: "gradleCache" },
        { name: "💣 Limpeza completa (tudo acima)", value: "all" },
        new inquirer.Separator(" "),
        { name: "↩️ Voltar ao menu anterior", value: "back" },
      ],
      pageSize: 10,
      loop: false,
    },
  ]);

  if (options.includes("back")) {
    log.info("🔙 Voltando ao menu anterior...");
    return;
  }

  if (options.length === 0) {
    log.info("⚠️ Você deve selecionar pelo menos uma opção.");
    return await cleanProject(); // chama novamente o prompt
  }

  const shouldRun = (opt: string) => {
    return options.includes("all") || options.includes(opt);
  };

  log.line();

  try {
    if (shouldRun("expo")) {
      log.info("🧠 Limpando cache do Expo...");
      execSync("npx expo start -c", { stdio: "inherit" });
    }

    if (shouldRun("nodeModules")) {
      log.info("📦 Removendo node_modules...");
      execSync("rm -rf node_modules && rm -f yarn.lock", {
        stdio: "inherit",
      });
    }

    if (shouldRun("androidBuild")) {
      log.info("📂 Limpando android/build...");
      execSync("rm -rf android/app/build", { stdio: "inherit" });
    }

    if (shouldRun("gradleCache")) {
      log.info("🧱 Limpando cache do Gradle...");
      execSync("cd android && ./gradlew clean && cd ..", {
        stdio: "inherit",
      });
    }

    log.success("\n✅ Limpeza concluída!\n");
  } catch (err) {
    log.error("❌ Erro durante a limpeza.");
    console.error(err);
  }
}

export default cleanProject;
