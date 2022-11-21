import "./navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
    <div className="nav">
    <div className="topLeft"><Link to='/'>Home</Link></div>
    <div className="topLeft1"><Link to='/bollywood'>Bollywood</Link></div>
    <div className="topCenter"><Link to='/bollywood'>Technology</Link></div>
    <div className="topCenter1"><Link to='/bollywood'>Hollywood</Link></div>
    <div className="topRight"><Link to='/bollywood'>Fitness</Link></div>
    <div className="topRight1"><Link to='/contact'>Contact Us</Link></div>
    </div>
    </>
  )
}
