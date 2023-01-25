import { Bot, session } from "grammy";
import * as dotenv from "dotenv";
import { conversations, createConversation } from "@grammyjs/conversations";
import createCharacter from "./conversations/createCharacter.js";

dotenv.config({ path: "src/config.env" });

const TOKEN: string = process.env.TOKEN || "";

const bot: Bot = new Bot(TOKEN);

await bot.api.setMyCommands([
    { command: "start", description: "start" },
    { command: "help", description: "help" },
    { command: "create_character", description: "create a character" },
]);

bot.use(session());

bot.use(conversations());

bot.use(createConversation(createCharacter));

bot.command("create_character", (ctx) => ctx.reply("хуй там"));

await bot.start();
