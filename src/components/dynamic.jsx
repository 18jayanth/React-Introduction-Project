import xyz from "../assets/config.png"
export default function Dynamic()
{
    const fruits=["mango","orange","banana"]
    function getrandom(max)
    {
        return Math.floor(Math.random()*(max+1));
    }
    const a=fruits[getrandom(2)];
    return(
        <>
        <p>{a} is my favoutite fruit</p>
        <img src={xyz}/>
        </>

    );
}