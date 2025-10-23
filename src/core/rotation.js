import { PERSONAS } from './personas.js'

export function pickDeityByGender(gender = 'male') {
  const male = ['Odin', 'Thor']
  const female = ['Freyja', 'Frigg']
  const pool = gender.toLowerCase() === 'female' ? female : male
  const name = pool[Math.floor(Math.random() * pool.length)]
  return { name, config: PERSONAS[name] }
}