import {useEffect} from "react";
import svgfor from "../.files/404.svg"
const AppError = () =>{
                return (
                <div className='for-content'>
                    <img src={svgfor} id='for-svg'/>
                    <p id='for-text'>
                        404 Error page not found 
                    </p>
                </div>
                    )

}
export default AppError;
