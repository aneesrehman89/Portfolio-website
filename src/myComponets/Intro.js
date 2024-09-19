import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
export default function Intro() {
  // const [text, setText] = useState('');
  // const [index, setIndex] = useState(0);
  const texts = useMemo(
    () => ["A Software Engineer", "As a Full Stack Developer"],
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
  // function SlowMotionText() {
  //     const initialText = `I am a Student of BS Software Engineering currently
  // working as a Full Stack Developer. Insha'Allah in the future I will move
  // toward Data Science.`;
  //     useEffect(() => {
  //         const printText = () => {
  //             if (index < initialText.length) {
  //                 setText((prevText) => prevText + initialText.charAt(index));
  //                 setIndex((prevIndex) => prevIndex + 1);
  //             }
  //         };

  //         const interval = setInterval(printText, 20); // Adjust the delay between characters here (e.g., 100ms)

  //         // Clear the interval when the text is fully printed
  //         if (index === initialText.length) {
  //             clearInterval(interval);
  //         }

  //         return () => clearInterval(interval); // Clean up the interval on unmount
  //     }, [initialText]);
  // }
  // SlowMotionText()
  return (
    <div>
      <Navbar />
      <div className="backGroundColor">
        <div className="container">
          <div className="row featurette d-flex  justify-content-center align-items-center mx-auto my-3">
            <div className="col-md-7 ">
              <h2 className="featurette-heading textColor">
                <p>
                  Hello, I'm Anees Ur Rehman
                  <br />
                </p>
                <span className="text-warning">{currentText}</span>
              </h2>
              <p className="lead textColor">
                I am a Student of BS Information Technology currently working as a
                React.js Developer passionate about becoming a Full Stack developer. Insha'Allah in the future I will move
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
                className="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded Picture"
                width="500"
                height="500"
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706047800/best_abc7ya.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
