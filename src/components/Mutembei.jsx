import React from 'react'

const Mutembei = () => {




  return (

        <User 
        
        img = "c:\Users\ADMN\Pictures\Saved Pictures\coursera\loho.jpg"
        name="Hillary Mutembei"
        age={25}
        isMarried= {false}
        hobbies={['Reading, ', 'Writing, ', 'Actualizing.']}
        
        />  



    
  );
};
const User = (props) => {
const date = new Date();
return (
         <section>
                <img src={props.img} alt={props.name} width={200} />
                <h3>Name: {props.name}</h3>
                <h4>Age: {props.age}</h4>
                <h5>Status: {props.isMarried}</h5>
                <h5>Hobbies: {props.hobbies}</h5>
                <h5>Date: {date.getDate()}/ {date.getMonth()+1}/ {date.getFullYear()}. {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}- {date.getMilliseconds()}: </h5>
                <p><i>I just realised computers are not perfect. 
                        its feb yet getMonth() returns January. One month behind. <br />
                        For the sake of my record, <br />
                        This masterpiece was first engineered in <b>Feb 26 2025.</b></i></p>
         </section>
)
};





export default Mutembei