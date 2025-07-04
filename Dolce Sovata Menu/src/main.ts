import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img class="logo" alt="Vite logo"  src="../public/vite.svg"/>
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img class="logo vanilla" alt="TypeScript logo" src="../public/typescript.svg"/>
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
