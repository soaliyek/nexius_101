import "../styles/Banner.css"
import logo from "../assets/nexius_logo.png"

function Banner({children}) {
    return (
        <div className="nx-banner">
            {children}
        </div>
    );
}

export default Banner;