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
      // the naming can be any, depends on you.
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
              <div className={isVisible ? "animate__animated": ""}>
                <div className="col-12">
                
                    <div className="skill-bx mt-2 ">
                        <h2>Skills</h2>
                            <p>Mastering the digital symphony, I wield a formidable arsenal of skills. From the harmonious melodies of C, C++, Python, and JavaScript to the mesmerizing rhythms of React, Laravel, and Django, I orchestrate enchanting web and mobile experiences. With an unwavering dedication to excellence, I blend innovation and precision to compose elegant solutions. Join me in the pursuit of technological brilliance and let's create a symphony of success together.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="cpp" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="brand" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="logo" />
                                <h5>React / Native</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="web" />
                                <h5>Web Development</h5>
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