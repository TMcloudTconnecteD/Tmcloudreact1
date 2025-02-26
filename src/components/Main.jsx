import React from 'react'

const Main = () => {
  return (
    <div>
        
        <h1>Intro to main content</h1>
        
        <p >If you are here, you are a great person indefinitely!</p>
        <section>
            <form>
                <label htmlFor="email" >Email: </label>
                <input type="email" placeholder='enter your email'/><br />
                <label htmlFor="name">Name: </label>
                <input list="names" name='name' placeholder='enter your name' /><br />
                <datalist id='names'>
                    <option value="M'Imea">
                        <option value="Thuranira">
                            <option value="Mutembei">
                                <option value="Makena">
                                    <option value="Rukia">
                                        <option value="Ntinyari">
                                            <option value="Glory">
                                                <option value="Edna">
                                                    <option value="Brandon">
                                                        <option value="Bakhita">
                                                            
                                                        </option>
                                                    </option>
                                                </option>
                                            </option>
                                        </option>
                                    </option>
                                </option>
                            </option>
                        </option>
                    </option>
                </datalist>
                <label htmlFor="age">Age: </label>
                <input type="number" min={18} max={100000000} placeholder='18+'/><br /><br />
                <button type="submit">Register to get curriculum</button>
            
            </form>
        </section>
        </div>
  );
}

export default Main