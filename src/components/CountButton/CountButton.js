import React, {useState, useEffect} from "react";
import "./CountButton.css"


const CountButton = (props) => {
console.log(props.incrementBy)

const [currentCount, setCurrentCount] = useState(0)
const handleCliik =  () => {
   setCurrentCount(currentCount + props.incrementBy)


}
useEffect (() => {
console.log(currentCount)
if (currentCount === 10) {

   currentCount(0)
}

}, [currentCount])
const buttonStyles = {
background: props.buttonColor,



}
    return (
        
        <div >
        <button style={buttonStyles}  onClick={handleCliik}>{props.incrementBy}</button>
        <div className={"count-display"}>{currentCount}</div>


    </div>
    )


}
export default CountButton