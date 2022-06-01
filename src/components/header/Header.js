import './Header.css';
import CTA from './CTA';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <div className="header">
            <h5>Hello! I'm</h5>
            <h1>Timothy Cebula</h1>
            <CTA />
            <HeaderSocials />
        </div>
    )
}

export default Header