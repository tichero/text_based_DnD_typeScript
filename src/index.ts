import { Bot, Context, SessionFlavor, session } from "grammy";
import * as dotenv from "dotenv";

dotenv.config({ path: "src/config.env" });

const TOKEN: string = process.env.TOKEN || "";

interface SessionData {
    messageCount: number;
}

type MyContext = Context & SessionFlavor<SessionData>;

const bot = new Bot<MyContext>(TOKEN);

// start

function initial(): SessionData {
    return { messageCount: 0 };
}
bot.use(session({ initial }));

bot.command("hunger", async (ctx) => {
    const count = ctx.session.messageCount;
    await ctx.reply(`Your hunger level is ${count}!`);
});

// eslint-disable-next-line no-plusplus
bot.hears(/.*.*/, (ctx) => ctx.session.messageCount++);

// finish

await bot.api.setMyCommands([
    { command: "start", description: "start" },
    { command: "help", description: "help" },
    { command: "create_character", description: "create a character" },
]);

bot.command("create_character", (ctx) => ctx.reply("хуй там"));

// eslint-disable-next-line no-console
await bot.init().then(() => console.log(`hello from @${bot.botInfo.username}`));

await bot.start().then();
