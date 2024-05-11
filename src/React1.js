function React1 ()
{
    let data="Ankish Kumar";

    function Rajput()
    {
        data="singh";
        alert(data);
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={Rajput}>Minshu</button>
        </div>
    )
}
export default React1;