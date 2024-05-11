function Student(props)
{
    console.log(props.name)

    return(
        <div style={{backgroundColor:"skyblue" ,margin:10}}>

            <h1> Name: {props.name}</h1>
            <h2> Email: {props.email}</h2>
            <h3> Other: {props.other.address}</h3> 
            <h4> MobileNumber: {props.other.MobileNumber}</h4>
        </div>
    )
}
export default Student ;
