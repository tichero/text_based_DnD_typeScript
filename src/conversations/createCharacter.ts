import { Context } from "grammy";
import { type Conversation } from "@grammyjs/conversations";

export default async function createCharacter(
    conversation: Conversation<Context>,
    ctx: Context
) {
    await ctx.reply("Hello");

    const { message } = await conversation.wait();

    await ctx.reply(`${message?.text || "stranger"}`);
}
