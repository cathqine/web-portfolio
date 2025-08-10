import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(JSON.parse(localStorage.getItem('dark-mode') as string));

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode.toString());
  }, [darkMode])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='text-9xl'>Vite + React</div>
      <div className="card">
        <button onClick={() => {
          JSON.parse(localStorage.getItem('dark-mode') as string) === true ? setDarkMode(false) : setDarkMode(true)
        }}>
          darkMode is {darkMode.toString()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
