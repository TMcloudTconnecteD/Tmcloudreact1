const Greet = () => {
const name = "Mutembei Hillary";
const date = new Date();
    return <div>
                 <article>   
                     Hallo, If you find it hard to wake up for a dream <br />
                     you absolutely have no reason to wake up at all <b>-BlackRise TM-</b>
                </article>
                <p> {name} : Date: {date.getDate()}</p>
            </div>
}
export default Greet;