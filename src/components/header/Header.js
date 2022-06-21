import './Header.css';
import CTA from './CTA';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className='jet'>
                    <img src='https://i.ibb.co/WVnZn2M/IMG-0637.jpg' />
                </div>
                <h1 className='timothy'>Timothy Cebula</h1>
                <div className='me'>
                        <img src='https://i.ibb.co/vxPDpSk/A70085-B1-39-D1-438-C-B1-B5-9999-D7295918-1-201-a.jpg' />
                </div>
            </div>
                
            <div className='download'>
                <CTA />
                <HeaderSocials />
            </div>
        </>
    )
}

export default Header