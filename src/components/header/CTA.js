import Resume from '../../assets/timothy_cebula.pdf';

const CTA = () => {
    return(
        <div className='cta'>
            <a href={Resume} download className='btn'> Download Resume </a>
            <br></br>
            <a href='#contact' className='btn btn-primary'>Let's chat</a>
        </div>
    )
}

export default CTA