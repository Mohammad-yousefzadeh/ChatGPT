import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faBookmark , faStar } from '@fortawesome/free-solid-svg-icons'
import './lowerSide.css'

const LowerSide = () => {
    return ( 
        <>
         <div className="lowerSide">
            <div className='lowerSide-options'>
                <h5><FontAwesomeIcon size='lg' className='pe-1' icon={faHome} /> Home</h5>
                <h5 className='my-4'><FontAwesomeIcon size='lg' className='pe-1' icon={faBookmark} /> Saved</h5>
                <h5><FontAwesomeIcon size='lg' className='pe-1' icon={faStar} /> Upgrade to Pro</h5>
            </div>
         </div>
        </>
    );
}
 
export default LowerSide;