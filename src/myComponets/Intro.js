import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import anees1 from '../Pics/anees1.jpg'
export default function Intro() {
  const texts = useMemo(
    () => ["A Software Engineer", "As a MERN Stack Developer"],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index, looping back to 0 if it reaches the end
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
      setCurrentText(texts[nextIndex]);
    }, 3000); // Change text every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex, texts]);
  return (
    <div>
      <Navbar />
      <div className="backGroundColor">
        <div className="container">
          <div className="row featurette d-flex  justify-content-center align-items-center mx-auto my-3">
            <div className="col-md-7 heading-s1 ">
              <h2 className="featurette-heading textColor">
                <p>
                  Hello, I'm Anees Ur Rehman
                  <br />
                </p>
                <span className="text-warning">{currentText}</span>
              </h2>
              <p className="lead textColor">
                I am a Student of BS Information Technology currently working as a
                MERN stack Developer passionate about becoming a Full Stack developer. Insha'Allah in the future I will move
                toward machine learning and AI.
              </p>
              <div className="ref ">
                <button
                  type="button"
                  className="btn btn-outline-warning bg-light"
                >
                  <Link to="https://github.com/aneesrehman89">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "#212529" }}
                    ></i>
                  </Link>
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-outline-warning bg-light"
                >
                  <Link to="https://www.linkedin.com/in/aneesrehman89/">
                    <i
                      className="fa-brands fa-linkedin-in"
                      style={{ color: "#212529" }}
                    ></i>
                  </Link>
                </button>
                &nbsp;
                <button 
                  type="button"
                  className="btn btn-outline-warning bg-light"
                  style={{ marginRight: "3px" }}
                >
                  <Link to="https://stackoverflow.com/users/19068397/anees-ur-rehman-mian">
                  <i className="fa-brands fa-stack-overflow"  
                   style={{ color: "#212529" }}></i> 
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning bg-light"
                >
                  <Link to="mailto:umer_yasir_718">
                    <i
                      className="fa-solid fa-g"
                      style={{ color: "#212529" }}
                    ></i>
                  </Link>
                </button>
                &nbsp;
              
                <br />
                <br />

              </div>
            </div>
            <div className="col-md-5 my-4 Picture">
              <img
                className="bd-placeholder-img bd-placeholder-img-sm featurette-image rounded Picture"
                width="450"
                height="450"
                src={anees1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
