import {useState,useEffect} from 'react';
import  './AutocorrectStyle.css';

export default function AutocorrectTextarea(){
    const [input,setInput]=useState('');
    const corrections={
        'realy': 'really',
        'wierd': 'weird'
    };

useEffect(()=>{
    console.log("Rendering useEffect only during initial render phase");
    document.title="Auto Correction";

},[]);

useEffect(()=>{
    console.log("Rendering useEffect since input changed");
     if(input==="" || input===undefined)   return;
        const inputArray=input.replace("\n"," ").split(" ");
        inputArray.map((value,index)=>{
            if(value===""){ 
                return true; 
            }

            if(corrections && corrections.hasOwnProperty(value) && (/\s$/).test(input)){
                inputArray[index]=corrections[value];
                setInput( ()=> inputArray.filter((index)=>  index).join(" ")+" "); // to remove blank array
                
              
            }
            return true;
        });
    return ()=>{  

        console.log("cleanup");
        
       };
    

},[input])

    return (
        <div>
            <header>This is sample code for AutoCorrection Feature</header>
            <textarea data-testid="textarea" value ={input} onChange={(e)=>setInput(e.target.value)}>
            </textarea>
        </div>
    );

}