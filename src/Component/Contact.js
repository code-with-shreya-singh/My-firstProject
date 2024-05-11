import { Link , Outlet } from "react-router-dom";
// import Company from './Component/Company';
// import Channel from './Component/Channel';
// import Other from './Component/Other';

function Contact() {
    return (
        <div>
            <h1> Contact page</h1>
            <p>A Contact Us page is essential to building a brand's website as it allows visitors to
                 contact you easily without leaving their browser.
                They also give you the opportunity to capture leads and improve customer service.
                Generally, visitors can also leave feedback or ask questions through these channels.
                You’ll receive valuable information about your customers preferences and expectations if done correctly.</p>
                
               <Link to='/'>Got to contact page</Link>
                   <li> <Link to='/Contact/Company'>Company</Link></li>
                   <li> <Link to='/Contact/ Channel'>Channel</Link></li>
                    <li> <Link to='/Contact/ Other'>Other</Link></li>
              
        
                {/* <Link to="/Company" >Company</Link>
                <br/>
                <Link to="/Channnel">Channel</Link>
                <br />
                <Link to="/Other">Other</Link> */}
                 <Outlet/>
              {/* <Company />
              <Channel />
              <Other/>  */}
        </div>
    )
}
export default Contact;