import React from 'react'

const ReactIteamLists = () => {
    const [item,setItem] = React.useState('');
    const [allItems,setAllItems] = React.useState([]);

    const handleSubmit = () =>{
        console.log(item)
       setAllItems([...allItems,{'name':item,'id':Math.random()}]);
    }

    const handleDelete = (index) =>{
        const clickedItem = allItems.filter((_,i)=>index!==i);
        setAllItems(clickedItem)

    }
  return (
    <div style={{display:'flex', flexDirection:'column', width:'300px', margin:'auto', marginTop:'5%'}}>
        <input type="text" placeholder='Type to Add Item' value={item} onChange={(e)=>setItem(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <div>
            {allItems.map((data ,index)=>{
                return <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between', width:'300px'}}>
               <p key={`name_${index}`}>{data.name}</p>
               <button onClick={()=>handleDelete(index)}>Delete</button>
                </div>
            })}
        </div>
    </div>
  )
}

export default ReactIteamLists