import {Link} from 'react-router-dom'
function About()
{
    return(
        <div>
            <h1>About Page</h1>
            <p>This is About of our awesome App</p>
            <p>And here we are learing about Router</p>
            <Link to='/'>Got to Home Page</Link>
            <li> <Link to='/User/anil'>Anil</Link></li>
             <li> <Link to='/User/peter'>peter</Link></li>
        </div>
    )
}
export default About;