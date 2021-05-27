import "./style.css";
import React from 'react';

const About = () => {
  return (

    <div className = "projects">
      <h1>Projects</h1>

      {/* project 1 */}


      <div className = "project-item">
     
      <a href="https://github.com/m-ashfaq/tic-tac-toe">
        <img 
          src={`${process.env.PUBLIC_URL}/images/tic-tac-toe.png`} className="image"
          alt="project"/>
</a>

      </div>

      {/* project 2 */}


      <div className = "project-item">
      <a href="https://github.com/m-ashfaq/Task-Tracker">
        <img
          src={`${process.env.PUBLIC_URL}/images/task-tracker.png`}
          alt="project"/>
        </a>
      </div>

      {/* project 3 */}


      <div className = "project-item">
      <a href="https://github.com/m-ashfaq/Table-Booking">
        <img
          src={`${process.env.PUBLIC_URL}/images/table-booking.png`}
          alt="project"
        />
        </a>
      </div>


      {/* project 4 */}  


      <div className="project-item">
      <a href="https://github.com/m-ashfaq/Restaurant-Booking">
        <img
          src={`${process.env.PUBLIC_URL}/images/Kebab-shop-site.png`}
          alt="project"
        />
        </a>
      </div>   

      {/* project 5 */}   


      <div className="project-item">
      <a href="https://github.com/m-ashfaq/Guest-database">
        <img
          src={`${process.env.PUBLIC_URL}/images/Guest Database.png`}
          alt="project"
        />
        </a>
      </div>

      {/* project 6 */}


      <div className="project-item">
      <a href="https://github.com/m-ashfaq/e-commerce-site">
        <img
          src={`${process.env.PUBLIC_URL}/images/ecommerce-site.png`}
          alt="project"
        />
        </a>
      </div>

      {/* project 7 */}


      <div className="project-item">
      <a href="https://github.com/m-ashfaq/todo-list">
        <img
          src={`${process.env.PUBLIC_URL}/images/to do list.png`}
          alt="project"
        />
        </a>
      </div>      
    </div>
    
  );
};

export default About;
