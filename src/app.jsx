import Main from "./Components/Main/main";
import LowerSide from "./Components/Slider/lowerSide";
import UpperSide from "./Components/Slider/upperSide";
import './app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useRef ,useState } from "react"; 

const App = () => {

    const [showHumberger , setShowHumberger] = useState(false)

    const humbergerIcon = useRef()

    return (
        <>
         <div className="container-fluid">
             <FontAwesomeIcon ref={humbergerIcon} icon={faBars} className="humburger" onClick={()=>{
                !showHumberger ? setShowHumberger(true) : setShowHumberger(false) 
             }} />  
            <div className="row">
                <div className={`col-9 col-md-5 col-lg-3 upper-sideBar d-flex flex-column ${showHumberger ? 'slider-hide' : ''}`}>
                    <UpperSide />
                    <LowerSide />
                </div>
                <div className="col-12 col-lg-9 apperance">
                    <Main />
                </div>
            </div>
         </div>
        </>
    );
}
 
export default App;