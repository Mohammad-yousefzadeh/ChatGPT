import './upperSide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react'
import { Context } from '../Context/context'

const UpperSide = () => {

    const {setShowResult , setRecentPrompt , setInput } = useContext(Context)

    return (
        <>
         <div className="uppserSide">
            <h3 className='p-4 pb-2 fw-bold text-center'>ChatGPT</h3>
            <div className='d-flex flex-column '>
                <button onClick={()=>{
                    setShowResult(false)
                    setRecentPrompt('')
                    setInput('')
                }} className="upperside-btn"><FontAwesomeIcon icon={faPlus} /> New Chat</button>
                <button className="upperside-questions"><FontAwesomeIcon icon={faMessage} size='lg' className='pe-1' /> What is programming?</button>
                <button className="upperside-questions"><FontAwesomeIcon icon={faMessage} size='lg' className='pe-1' /> How to use API?</button>
            </div>
         </div>
        </>
    );
}
 
export default UpperSide;