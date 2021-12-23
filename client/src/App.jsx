import React, { useState } from 'react'
import './App.css'
import FileList from "./components/fileList/FileList";
import getApis, {secretKey} from "./apis";

import CryptoJS  from "crypto-js"

function App() {
  
  const [posts, setPosts] = useState([])

  
  React.useEffect(()=>{
    getApis().get("/",).then(response=>{

      if(response.status === 200) {
        const {content} = response.data
  
        //Create Key
        const pass = CryptoJS.enc.Utf8.parse(secretKey);
  
        //Get Iv
        const iv = CryptoJS.enc.Utf8.parse(secretKey.slice(0, 16));
  
        const decrypted = CryptoJS.AES.decrypt(response.data, pass, {iv: iv});
        const decrypted_data = decrypted.toString(CryptoJS.enc.Utf8)
        setPosts(JSON.parse(decrypted_data))
      }
      
    })
  }, [])

  
  return (
    <div className="App">
      
      <ul className="posts">
        { posts.map(post=>(
          <div className="post">
            <h4>{post.title}</h4>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        )) }
      </ul>
      
    </div>
  )
}

export default App
