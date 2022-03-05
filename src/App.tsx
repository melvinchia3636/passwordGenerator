import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import Slider from 'rc-slider'

function App() {
  const [password, setPassword] = useState<string>("redaxe")
  const [length, setLength] = useState(16)
  const [fuckMyLife, setFuckMyLife] = useState(false)
  const [lowercase, setLowercase] = useState(true)
  const [uppercase, setUppercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)

  const generate = () => {
    const chars = []
    if (lowercase) chars.push(...'abcdefghijklmnopqrstuvwxyz')
    if (uppercase) chars.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    if (numbers) chars.push(...'0123456789')
    if (symbols) chars.push(...'!@#$%^&*()_+-=[]{}|;\':",./<>?')
    const password = []
    for (let i = 0; i < length; i++) {
      password.push(chars[Math.floor(Math.random() * chars.length)])
    }
    setPassword(password.join(''))
  }

  const copy = () => {
    navigator.clipboard.writeText(password)
  }

  useEffect(() => generate(), [
    length, lowercase, uppercase, numbers, symbols
  ]);

  return (
    <div className="App bg-slate-800 w-full h-screen flex flex-col text-slate-100 items-center justify-center">
      <h1 className="text-4xl text-center mb-2 px-4 uppercase tracking-[0.325em]">Password Generator</h1>
      <p className="mb-12 text-lg text-center px-4 tracking-[0.15em]">I should've done this a long time ago lol</p>
      <div className="w-[calc(100vw-4rem)] md:w-1/2 p-4 whitespace-nowrap pl-6 pt-[0.8rem] text-slate-100 border-b-2 text-2xl tracking-wide flex items-center justify-between">
        <span className="overflow-x-auto overflow-y-hidden mr-6">{password}</span>
        <div className="h-full flex items-center justify-center mt-0.5 gap-4">
          <button onClick={copy}>
            <Icon icon="eva:copy-outline" className="w-6 h-6" />
          </button>
          <button onClick={generate}>
            <Icon icon="eva:refresh-outline" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="w-[calc(100vw-4rem)] md:w-auto">
        <div className="mt-8 text-lg flex flex-col 400:flex-row gap-4 400:gap-8">
          <div className="flex flex-col gap-4">
            <label>
              <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
              <span className="ml-2">Include Lowercase Character</span>
            </label>
            <label>
              <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
              <span className="ml-2">Include Numbers</span>
            </label>
          </div>
          <div className="flex flex-col gap-y-4">
            <label>
              <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
              <span className="ml-2">Include Uppercase Character</span>
            </label>
            <label>
              <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
              <span className="ml-2">Include Symbols</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-8 text-lg">
          <span className="mr-2 whitespace-nowrap block">Password Length: {length}</span>
          <div className="flex items-center gap-4">16
            <Slider onChange={(e) => setLength(e as number)} min={16} max={256} />
            256
          </div>
        </div>
      </div>
      <p className="fixed bottom-4 left-1/2 w-full text-center -translate-x-1/2 tracking-wide">Made with 💖 by <span className="underline">Melvin Chia</span>. Project under MIT License.</p>
    </div>
  )
}

export default App
