# React Native Automation - Automação React Native e Expo

Esta CLI personalizado foi criado para facilitar o desenvolvimento e gerenciamento de um projeto React Native com Expo. Os scripts são escritos em TypeScript e organizados na pasta `scripts/`, com funções auxiliares em `scripts/utils`.

---

## ⚙️ Scripts Disponíveis

### 🏁 Iniciar o aplicativo

Arquivo: `start-app.ts`

Permite iniciar o app com opções:

- Expo QR Code (padrão)
- Android
- iOS

---

### 📦 Instalar dependências

Arquivo: `install-deps.ts`

Executa `yarn install` com feedback visual.

---

### ⚙️ Otimizações de performance

Arquivo: `perfomace.ts`

Menu interativo com opções:

- Aumentar memória do Node.js (simulado)
- Desabilitar logs de debug (simulado)

---

### 📱 Gerar APK Android

Arquivo: `build-android.ts`

- Verifica arquivos `.env.dev`, `.env.stage`, `.env.prod`
- Permite escolher o ambiente antes de rodar `eas build`
- Instala `eas-cli` se necessário

---

### 🧹 Limpar o projeto

Arquivo: `clean.ts`

Menu com opções para limpar:

- Cache do Expo
- node_modules
- android/build
- Cache Gradle
- Todos os anteriores

---

### 🚀 Publicar app

Arquivo: `publish.ts`

- Solicita nova versão
- Atualiza `package.json` e `app.json`
- Executa `expo publish`

---

### 🆕 Criar nova tela

Arquivo: `create-screen.ts`

- Cria uma nova pasta e `index.tsx` dentro de `src/screens/`
- Estrutura básica React Native

---

## 🧰 Utilitários (scripts/utils)

### common.ts

- `printBanner()` — imprime cabeçalho estilizado com cfonts
- `withSpacing()` — adiciona espaçamentos em menus
- `log` — logger com `info`, `success`, `error`, `line`

### file.ts

- `readJSON`, `writeJSON`, `fileExists`

### shell.ts

- `runCommand()` — executa comandos com exibição estilizada

---

## 🚀 Inicialização

### Comando principal

```bash
yarn start
# ou
yarn cli

```

## 📦 package.json (resumo)

```
{
"name": "rn-cli-automation",
"version": "1.0.0",
"private": true,
"type": "module",
"main": "cli.ts",
"scripts": {
    "start": "tsx scripts/cli.ts"
    },
"dependencies": {
    "chalk": "^5.3.0",
    "inquirer": "^9.2.16",
    "zx": "^7.2.3",
    "dotenv": "^16.3.1"
    },
"devDependencies": {
    "tsx": "^4.7.0",
    "typescript": "^5.4.0"
    }
}
```
