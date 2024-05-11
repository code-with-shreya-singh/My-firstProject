import { Link } from "react-router-dom"

function Home()
{
    return(
        <div>
            <h1> Home Page</h1>
            <p>This is About of our awesome App</p>
            <p>And here we are learing about Router</p>
            <Link to="/About" >Go to About Page</Link>
        </div>
    )
}
export default  Home;