import "./style.css";
const Footer = () => {
    return (
        <footer>
      <a href="https://github.com/m-ashfaq">
        <img
          src={`${process.env.PUBLIC_URL}/Images/github.png`}
          alt="github-icon" 
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ashfaq-dev/"
      >
        <img
          src={`${process.env.PUBLIC_URL}/Images/Linkedin.png`}
          alt="LinkIn-icon"
        />
      </a>
      <a href="https://www.facebook.com/muhammad.ashfaq.902" 
      >
        <img
          src={`${process.env.PUBLIC_URL}/Images/facebook.png`}
          alt="facebook-icon"
        />
      </a>
        </footer>
    )
}

export default Footer
