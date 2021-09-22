import React, { useState } from 'react';


const Accordion=({items})=>{
    const [acitiveIndex,setActiveIndex] = useState(null);

    const onTitleClicled=(index)=>{
      setActiveIndex(index )
    }

    const recomendeditems=items.map((item,index)=>{

        const active=index===acitiveIndex ? 'active':'';

        return (
        <React.Fragment key={item.title}>
            <div className={`title ${active}`}
             onClick={()=>onTitleClicled(index)} >
                <i className="dropdown icon">  </i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        )
       
    });

    return <div className="ui styled accordion">{recomendeditems}
    </div>
}

export default Accordion;