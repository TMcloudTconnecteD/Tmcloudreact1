 import React from 'react'
 
 const Weather = () => {
let temp = 29;
if (temp < 15 ) {
    return <h3><i>It is cold outside </i></h3>
}
else if (temp >= 15 && temp <= 25) {
    return <h3>The weather is nice outside!</h3>
}

else if (temp > 25 ){
    return <h3>Its very hot outside!!</h3>
}

}


  
 
 export default Weather