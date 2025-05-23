import inquirer from "inquirer";
import { mkdirSync, writeFileSync } from "fs";
import chalk from "chalk";

export default async function createScreen() {
  const { screenName } = await inquirer.prompt([
    {
      type: "input",
      name: "screenName",
      message: chalk.cyan("Nome da nova tela:"),
      validate: (input) => (input ? true : "O nome da tela é obrigatório."),
    },
  ]);

  const folderPath = `src/screens/${screenName}`;
  const filePath = `${folderPath}/index.tsx`;

  try {
    mkdirSync(folderPath, { recursive: true });

    const content = `import { View, Text } from 'react-native';
    import React from "react";

export default function ${screenName}() {
  return (
    <View>
      <Text>${screenName}</Text>
    </View>
  );
}
`;

    writeFileSync(filePath, content);

    console.log(chalk.green(`✅ Tela criada em: ${filePath}`));
  } catch (err) {
    console.error(chalk.red("❌ Erro ao criar a tela:"), err);
  }
}
