import OpenAI from 'openai'
import { pickDeityByGender } from './rotation.js'
import { invokeName } from './invocation.js'
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
export async function divineReply({gender='male', userName='Warrior', message='', premium=false}){
  const { name, config } = pickDeityByGender(gender)
  const system = config.system + (premium ? " You remember prior sessions and adapt emotionally." : " Keep guidance general; do not rely on prior sessions.")
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{role:'system',content:system},{role:'user',content:message||'Offer guidance for training today.'}], temperature: 0.8
  })
  let text = completion.choices?.[0]?.message?.content || "The gods are silent."
  text = invokeName(text, userName)
  return { deity: name, text }
}
