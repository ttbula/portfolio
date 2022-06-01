import { AiOutlineLinkedin, AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/timothy-cebula-75a8701a0/" target="_blank">
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com/ttbula" target="_blank">
        <AiFillGithub />
      </a>
    </div>
  )
}

export default HeaderSocials;