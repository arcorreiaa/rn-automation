// scripts/build-android.ts

import { execSync, spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import readline from "readline";

function hasEnvFile(env: string): boolean {
  return fs.existsSync(path.resolve(process.cwd(), `.env.${env}`));
}

function askEnv(): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Qual ambiente deseja usar? (dev, stage, prod): ", (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

function isEasInstalled(): boolean {
  try {
    execSync("eas --version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

export default async function buildAndroid() {
  // Verifica se eas-cli está instalado
  if (!isEasInstalled()) {
    console.log("⚠️ eas-cli não encontrado. Instalando globalmente...");
    const install = spawnSync("npm", ["install", "-g", "eas-cli"], {
      stdio: "inherit",
    });
    if (install.status !== 0) {
      console.error("❌ Erro ao instalar eas-cli globalmente. Abortando.");
      process.exit(1);
    }
    console.log("✅ eas-cli instalado.");
  } else {
    console.log("✅ eas-cli encontrado.");
  }

  const envs = ["dev", "stage", "prod"];
  const availableEnvs = envs.filter(hasEnvFile);

  let envToUse: string | undefined;

  if (availableEnvs.length === 1) {
    envToUse = availableEnvs[0];
    console.log(`✅ Usando o único ambiente disponível: ${envToUse}`);
  } else if (availableEnvs.length > 1) {
    envToUse = await askEnv();

    if (!availableEnvs.includes(envToUse)) {
      console.error(
        `❌ Ambiente inválido. O arquivo .env.${envToUse} não existe.`
      );
      process.exit(1);
    }
  } else {
    console.log(
      "⚠️ Nenhum arquivo .env.[dev|stage|prod] encontrado. Gerando APK padrão."
    );
  }

  if (envToUse) {
    process.env.EXPO_ENV = envToUse;
    console.log(`🚀 Gerando APK com ambiente: ${envToUse}`);
  } else {
    console.log("🚀 Gerando APK padrão (sem ambiente).");
  }

  try {
    execSync("eas build -p android --profile preview", {
      stdio: "inherit",
      env: { ...process.env },
    });
  } catch (e) {
    console.error("❌ Erro ao executar o build do APK:", e);
    process.exit(1);
  }
}
