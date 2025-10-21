import { PERSONAS } from './personas.js'
export function pickDeityByGender(g){const m=['Odin','Thor'], f=['Freyja','Frigg']; const pool=(g?.toLowerCase()==='female')?f:m; const name=pool[Math.floor(Math.random()*pool.length)]; return {name, config:PERSONAS[name]}}
