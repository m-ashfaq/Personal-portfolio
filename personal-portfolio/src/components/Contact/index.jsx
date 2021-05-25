
import "./style.css";

const About = () => {
  return (
    <div className = "contact-info">
            
    <div className = "title">
<h1>Contact Me</h1>
    </div>
    
    <form className = "contact-form">
<div className = "form-group">
        <input type = "text" class = "form-control" placeholder="Full name"></input>
        </div>
        <div>
        <input type = "email" class = "form-control" placeholder="Email address"></input>
    </div>
        <input type = "text" class = "form-control" placeholder="Subject"></input>
        <textarea rows = "5" class = "form-control" placeholder="Message"></textarea>
        <input type = "submit" class = "btn contact-btn" value = "Send Message"></input>
    </form>

    <div className = "contact-details">
      <h4>Phone</h4>
      <p>0466 775 855</p>

      <h4>Email</h4>
      <p>muhammad_ashfaq@live.com</p>
      </div>
    </div>
  );
};
export default About;