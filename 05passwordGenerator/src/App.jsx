import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str +="0123456789"
    if(char) str += "~!@#$%^&*()_+{}|:<>?/.,';][=-"

    for (let i = 0; i < length; i++){
      const character = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(character)
   }

   setPassword(pass)

  }, [length, num, char, setPassword])

  const copyPaasToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenrator()
  }, [length, num, char, passwordGenrator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3 bg-white'
              placeholder='password'
              readOnly
              ref={passwordRef}
          />
          <button onClick={copyPaasToClipboard} className='bg-blue-700 text-white px-4 py-1'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
                type="range" 
                min={6} 
                max={100} 
                value={length} 
                className='cursor-pointer'
                onChange={(e) =>{setLength(e.target.value)}}
            /><label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
                type="checkbox"
                defaultChecked={num}
                id='numberInput'
                onChange={()=>{setNum((prev) =>!prev)}}    
            /><label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
                type="checkbox"
                defaultChecked={char}
                id='numberInput'
                onChange={()=>{
                  setChar((prev) =>!prev)
                }}    
            /><label htmlFor='numberInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
