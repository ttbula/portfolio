import './Header.css';
import CTA from './CTA';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <div className="header">
            <h5>Hello! I'm</h5>
            <h1>Timothy Cebula</h1>
            <div className='pics'>
                <img src='https://i.ibb.co/WVnZn2M/IMG-0637.jpg' />
                <img src='https://i.imgur.com/pHmI1Ut.jpg?2' />
            </div>
            <CTA />
            <HeaderSocials />
        </div>
    )
}

export default Header