import ReactLogo from "./react-1-logo.svg"

export default  function NavBar() {
    return (
       <nav className="nav-items">
         <img src={ReactLogo}></img>
         <h2 className="nav-icontext">ReactFacts</h2>
         <h3 className="nav-title">React Project-1</h3>

        </nav> 
    )
}