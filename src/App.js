import React , {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items=[
{
    title:'What is react ?',
    content:'React is the framework of javascrit'
},
{
    title:'test tets test etste t',
    content:'React is the faforite framework'
},
{
    title:'test12 tets test etste t',
    content:'React is the faforite qesfas framework'
}
  
];

const options=[{label:'red',value1:'rdfgkhsaf1'},{label:'red0',value1:'rdfgkhsaf1'},{label:'red2',value1:'red3'}]

export default ()=> {
      const [selected,setSelected]=useState(options[0]);

    return (
        <div>
            <Header/>
             <Route path="/">
               <Accordion items={items}/>
             </Route>
             <Route path='/list'>
                <Search />
             </Route>
             <Route path='/list'>
                <Dropdown 
                 label="select a color"
                 options={options}
                 selected={selected}
                 onSelectedChange={setSelected}
                />
             </Route>
             <Route path='/translate'>
                <Translate />
             </Route>
        </div>
    
    )
};