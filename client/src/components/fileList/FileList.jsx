import React from 'react';
import axios from "axios";
import folderIcon from "/src/asserts/icons/filetype_ico_folder_fold_72.png"
import fileIcon from "/src/asserts/icons/img.png"

const FileList = (props) => {
  const [ items,  setItems ] = React.useState([])
  
  React.useEffect(()=>{
    axios.post("http://localhost:80/content", {dirName: "my-folder"}).then(r =>{
     setItems(r.data)
    console.log(r.data)
    })
  }, [])
  
  
  function getIndexRecur(items, name, data){
    for (const item of items) {
      if(Array.isArray(item.sub)){
        getIndexRecur(item.sub, name, data)
      }
      if(item.name ===  name){
        item.sub = data
      }
    }
  }
  
  function getContextFiles(e, item){
    if(item.type === "dir") {
      axios.post("http://localhost:80/content", {dirName: item.path}).then(r => {
        getIndexRecur(items, item.name, r.data)
        let updatedItems = [...items]
        setItems(updatedItems)
        // localStorage.setItem("data", JSON.stringify(updatedItems))
      })
    }
  }
  
  
  return (
    <div>
      { items && items.map(item=> <List getContextFiles={getContextFiles} onClick={(e)=>getContextFiles(e, item)} key={item.name} item={item} /> ) }
    </div>
  );
};


const List = ({item, getContextFiles, onClick})=>{
  
  const nestedList = (item.sub || []).map((item, i)=>{
    return <List getContextFiles={getContextFiles} onClick={(e)=> getContextFiles(e, item) } key={i} item={item} />
  })

  return (
    <ul className="item">
      <li onClick={onClick}>
        <div>
          <img className={[item.type !== "dir" ? "file_icon" : "dir_icon"].join(" ")} src={item.type === "dir" ? folderIcon : fileIcon} alt=""/>
        </div>
        {item.name}
      </li>
      
      <div>{nestedList}</div>
    </ul>
  )
}

export default FileList;
