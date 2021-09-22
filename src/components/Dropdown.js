import React , {useState,useEffect} from 'react';

const Dropdown=({options,selected,onSelectedChange})=>{

    const [open,setOpen]=useState(false); 
     
    
    useEffect(()=>{
      document.body.addEventListener('click',()=>{
        //  console.log('gljdfsfhsdflsd')
      })
           },[]);
     
    const optionstest= options.map((option)=>{
      if(option.value===selected.value)
      {
        return null ;
      }

         return(
             <div className="item" 
             key={option.value} 
             onClick={()=>onSelectedChange(option)} 
             >
                 <label>{option.label}</label>
             </div>
         )
    });

   return (
      <div className="ui form" >
          <div className="field">
                 <div onClick={()=>{setOpen(!open) }}

                   className={`ui selection dropdown  ${open ? 'visible active':''}`}
                    >
                    <i className="dropdown icon"></i>
                    <div className="text">
                           {selected.label}
                    </div>
                    <div className={`menu ${open ? 'visible transition':'test'}`}>
                         {optionstest}
                    </div>

                 </div>
          </div>
        {optionstest}
      </div>
   )
}
export default Dropdown;