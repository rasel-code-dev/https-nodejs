import React, { useState } from 'react'
import './App.css'
import FileList from "./components/fileList/FileList";
import getApis from "./apis";

function App() {
  const [count, setCount] = useState(0)

  
  React.useEffect(()=>{
    getApis().get("/").then(response=>{
      let decrypted = CryptoJS.AES.decrypt(response.data, "pass")
      let data = CryptoJS.enc.Utf8.stringify(decrypted)
      console.log(data)
    })
  }, [])
  
  
  return (
    <div className="App">
      <FileList />
    </div>
  )
}

export default App
