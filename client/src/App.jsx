import React, { useState } from 'react'
import './App.css'
import FileList from "./components/fileList/FileList";
import getApis from "./apis";

function App() {
  const [count, setCount] = useState(0)

  
  React.useEffect(()=>{
    getApis().get("/").then(response=>{
      console.log(response)
    })
  }, [])
  
  
  return (
    <div className="App">
      <FileList />
    </div>
  )
}

export default App
