import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="card home-card">
        <h5>John Doe</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>Post Title</h6>
          <p>welcome to the world to coding</p>
          <input type="text" placeholder="Enter comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>John Doe</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>Post Title</h6>
          <p>welcome to the world to coding</p>
          <input type="text" placeholder="Enter comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>John Doe</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>Post Title</h6>
          <p>welcome to the world to coding</p>
          <input type="text" placeholder="Enter comment" />
        </div>
      </div>
    </div>
  );
};
export default Home;
