import { Bot } from "grammy";
import * as dotenv from "dotenv";

dotenv.config({ path: "src/config.env" });

const TOKEN: string = process.env.TOKEN || "";

const bot: Bot = new Bot(TOKEN);

await bot.start();
