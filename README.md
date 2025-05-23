# React Native Automation

This custom CLI was created to make it easier to develop and manage a React Native project with Expo. The scripts are written in TypeScript and organized in the `scripts/` folder, with helper functions in `scripts/utils`.

---

## ⚙️ Available Scripts

### 🏁 Launch the application

File: `start-app.ts`

Allows you to start the app with options:

- Expo QR Code (padrão)
- Android
- iOS

---

### 📦 Install dependencies

File: `install-deps.ts`

Execute `yarn install` with visual feedback.

---

### ⚙️ Performance optimizations

File: `perfomace.ts`

Interactive menu with options:

- Aumentar memória do Node.js (simulado)
- Desabilitar logs de debug (simulado)

---

### 📱 Generate Android APK

File: `build-android.ts`

- Verifica arquivos `.env.dev`, `.env.stage`, `.env.prod`
- Permite escolher o ambiente antes de rodar `eas build`
- Instala `eas-cli` se necessário

---

### 🧹 Limpar o projeto

File: `clean.ts`

Menu with options to clean:

- Cache do Expo
- node_modules
- android/build
- Cache Gradle
- Todos os anteriores

---

### 🚀 Publish app

File: `publish.ts`

- Solicita nova versão
- Atualiza `package.json` e `app.json`
- Executa `expo publish`

---

### 🆕 Create new screen

File: `create-screen.ts`

- Cria uma nova pasta e `index.tsx` dentro de `src/screens/`
- Estrutura básica React Native

---

## 🧰 Utilities (scripts/utils)

### common.ts

- `printBanner()` — imprime cabeçalho estilizado com cfonts
- `withSpacing()` — adiciona espaçamentos em menus
- `log` — logger com `info`, `success`, `error`, `line`

### file.ts

- `readJSON`, `writeJSON`, `fileExists`

### shell.ts

- `runCommand()` — executa comandos com exibição estilizada

---

## 🚀 Initialization

### Main command

```bash
yarn start
# ou
yarn cli

```
