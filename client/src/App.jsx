import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
    useEffect(()=>{
      axios.get("http://localhost:3000/demo")
      .then(res=>{console.log(res)})
    },[])
  return (
    <>
    <h1>Hello World</h1>
    </>
  )
}

export default App
