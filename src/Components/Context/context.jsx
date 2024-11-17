import { createContext, useState } from "react";
import run from "../Config/ChatGptApi";

export const Context = createContext()

const ContextProvider = (props) =>{

    const [input , setInput] = useState('')
    const [recentPrompt , setRecentPrompt] = useState('')
    const [result , setResult] = useState('')
    const [showResult , setShowResult] = useState(false)
    
    const onSent = async (prompt) => {

        setShowResult(true)
        setRecentPrompt(prompt)
        setInput('')
        console.log(prompt);
        const response = await run(prompt)
        setResult(response)
    }
    
    const ContextValue ={
        input ,
        setInput ,
        recentPrompt , 
        setRecentPrompt ,
        result ,
        showResult ,
        setResult ,
        setShowResult ,
        onSent ,
    }
    
    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;