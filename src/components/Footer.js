import { Container, Row, Col } from "react-bootstrap";
import {  BsInstagram, BsGithub, BsLinkedin, BsAt } from "react-icons/bs";
import {ImFacebook} from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <a href="https://facebook.com/raazkhnl"><span><ImFacebook color="white" fontSize={'100px'}/></span></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://linkedin.com/raazkhnl"><span><BsLinkedin color="white"/></span></a>
                <a href="https://instagram.com/raazkhnl"><span><BsInstagram color="white"/></span></a>
                <a href="to:raazkhnl@gmail.com"><span><BsAt color="white"/></span></a>
                <a href="https://github.com/raazkhnl"><span><BsGithub color="white"/></span></a>
            </div>
          </Col>
        </Row>
          <p style={{textAlign: 'center'}}>©raazkhnl 2023. All Rights Reserved</p>
      </Container>
    </footer>
  )
}

export default Footer