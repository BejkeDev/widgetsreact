import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search=()=>{
    // meqense na nxjerr error qe ne fillim te egzekutimit perdorim default pragraming ose nje menyre tjt 
    // si me poshte 
    const [term,setTerm]=useState('programming');
    const [results,setResults]=useState([]);

    useEffect(() => {
        // kete axios nuk mund ta perdorim direkt tek useEffect por mund te shkruajm nje funksion tjt per ta perdore 
           const search= async()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                  params:{
                      action:'query',
                      list:'search',
                      origin:'*',
                      format:'json',
                      srsearch:term,

                  }
              });

              setResults(data.query.search);
           } 
            // search();





         if (term && !results.length){
             search();
         }   else{

              //    ose ne kete menyre duke kontrolluar nese esht termi
       const timeoutid= setTimeout(()=>{
            
        if(term){
         search();
        }
        
     },1000);
     return ()=>{
         clearTimeout(timeoutid);
     }
     //    menyra e dyte esht duke e vene direkt axios pa function tjeter ne kete menyre si me poshte 
     // por duke qene se nuk esht thirrrur per te thirrur veprojm si me poshte 
     // async()=>{
     //     await axios.get('jksdhlvdfvjdfk;');
     //  } 
     //  kjo menyra ktu esht thirrja 
     //  (async()=>{
     //     awaaxios.get('jksdhlvdfvjdfk;');
     //  })() 


         }
      

    },[term,results.length]);

     const renderedResults=results.map((result)=>{
     return (
        <div className="item" key={result.pageid}>
            <div className="right floated content">
               <a
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                className="ui button">
                   Go
               </a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
              
            </div>
        </div>
     )
     })
    

     return(
         <div>
             <div className="ui form ">
                 <div className="field">
                      <label>Enter a search name </label>
                      <input 
                      value={term}
                      onChange={(e)=>setTerm(e.target.value)}
                      className="input"/>
                 </div>

             </div>
             <div className="ui celled list ">
                 {renderedResults}
             </div>
         </div>
     )
}

export default Search;