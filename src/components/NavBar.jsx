import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="align-items-center">
        <div></div>
        <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
            <NavLink to="/products">Our Products</NavLink>
            </li>
            <li>
            <NavLink to="/services">Services</NavLink>
            </li>
            <li>
            <NavLink to="/contact_us">Contact Us</NavLink>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBar