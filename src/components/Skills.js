import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from 'react-on-screen';


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated" : ""}>
                <div className="col-12">

                  <div className="skill-bx mt-2 ">
                    <h2>Skills</h2>
                    <p>
                      From parsing complex state datasets to engineering robust web and mobile apps, I bring a deep understanding of full-stack development and data-driven systems. Whether building Flask-based APIs, crafting elegant UIs with React and React Native, or integrating OpenSearch and MongoDB for scalable analytics, I focus on clean architecture, performance, and clarity. My journey spans CI/CD pipelines, cloud solutions with AWS, and data correlation frameworks  — all driven by a passion for precision and progress. Let’s engineer meaningful systems, one elegant solution at a time.
                    </p>                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                      <div className="item">
                        <img src={meter3} alt="python" />
                        <h5>Python, Data Analytics</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="cpp" />
                        <h5>C/C++</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="react" />
                        <h5>React JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="ci-cd" />
                        <h5>CI/CD</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="flask" />
                        <h5>Flask</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="mongodb" />
                        <h5>MongoDB, SQL</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="react-native" />
                        <h5>React Native</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="expressjs" />
                        <h5>ExpressJS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="aws" />
                        <h5>AWS</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="css" />
                        <h5>CSS, Bootstrap, Tailwind, MaterialUI</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="llm" />
                        <h5>LLM Integration</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="flask" />
                        <h5>Flask REST, RESTFUL</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="laravel" />
                        <h5>Laravel</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="nodejs" />
                        <h5>Node JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="firebase" />
                        <h5>Firebase</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="git" />
                        <h5>Git & GitHub</h5>
                      </div>



                    </Carousel>
                  </div>
                </div>
              </div>}
          </TrackVisibility>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bgImage" />
    </section>
  )
}

export default Skills