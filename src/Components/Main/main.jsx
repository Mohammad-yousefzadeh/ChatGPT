import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane , faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../Context/context'
import { useContext, useState} from 'react'
import GptLogo from '../../Assests/vecteezy_chatgpt-logo-chat-gpt-icon-on-green-background_21059825.jpg'

const Main = () => {

    const {input ,setInput ,result ,showResult ,recentPrompt , setRecentPrompt ,setResult ,setShowResult , onSent } = useContext(Context)

    const handleClick = () =>{
      onSent(input)                 
      setResult('Chat GPT is typing.....')
    }
    return (
        <>
         <div className='chatBox pt-5'>
               {
                !showResult ? 
                <>
                 <div className='text-center mt-5 p-4 '>
                    <h1 className='display-2 text-primary fw-bold'>Chat GPT</h1>
                    <h3>Start a conversation !
                      Try with VPN
                    </h3>
                 </div>
                </>
                :
                <>
                  <div className="chat">
                    <img className='my-3' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>{recentPrompt}</p>
                  </div>
                  <div className="chat bot rounded-3">
                    <img className='my-3' src={GptLogo} alt="" />
                    <p>{result}</p>
                  </div>
                </>
               }
            <div className="inputBox rounded-3">
                <input onKeyUp={(e)=>{
                  if(e.key === 'Enter'){
                    handleClick()
                  }         
                }} onChange={(e)=>{
                    setInput(e.target.value)
                }} value={input} type="text" placeholder='What do you want ?'/>
                <button onClick={handleClick} className='inputBtn'>{<FontAwesomeIcon className='text-white' icon={faPaperPlane} />}</button>
            </div>
         </div>
        </>
    );
}
 
export default Main;