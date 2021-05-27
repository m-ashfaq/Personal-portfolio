
import "./style.css";

const About = () => {
  return (
    <div className = "contact-info">
            
    <div className = "title">
<h1>Contact Me</h1>
    </div>
    
    <form className = "contact-form">
    <form action="mailto:muhammad_ashfaq@live.com" method="POST"/>
<div className = "form-group">
        <input type = "text" className = "form-control" placeholder="Full Name"></input>
        </div>
        <div>
        <input type = "email" className = "form-control" placeholder="Email Address"></input>
    </div>
        <input type = "text" className = "form-control" placeholder="Subject"></input>
        <textarea rows = "5" className = "form-control" placeholder="Message"></textarea>
        <input type = "submit" className = "btn contact-btn" value = "Send Message"></input>
    </form>

    <div className = "contact-details">
      <h4>Phone</h4>
      <p>0466 775 855</p>


      </div>
    </div>
  );
};
export default About;