const getFromLocalStorage=()=>{
  const getData=localStorage.getItem("Donate");
  if(getData){
    return JSON.parse(getData)
  }
  return []
}


const saveToLocalStorage =(data)=>{
  const savedData= getFromLocalStorage()

  const isExists=savedData.find(item=> item.id== data.id);

  if(!isExists){
    savedData.push(data);
    localStorage.setItem("Donate", JSON.stringify(savedData));
  }

  
}

export  {saveToLocalStorage, getFromLocalStorage};