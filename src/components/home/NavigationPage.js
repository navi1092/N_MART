import { FaUserCircle } from 'react-icons/fa';
import { TfiShoppingCart } from "react-icons/tfi";

function NavigationPage(){
  
    return(
        <>
        {/* <!-- Navigation section --> */}
        <section id="header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="container">
                  <a className="navbar-brand" href="#">
                    <img src="Images/logo1.png" alt="logo" className="logoimg"/>
                  </a>
                 
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#products">Products</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#special">Special</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-4" href="#contact">Contact</a>
                      </li>
                    </ul>
                    <span className='me-3'><FaUserCircle/></span>
                    <span className='ms-2'><TfiShoppingCart/></span>
                  </div>
                </div>
              </nav>  
        </section>
        </>
    )
    
}
export default NavigationPage;