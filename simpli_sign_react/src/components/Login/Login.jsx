import React, { Component, Fragment } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    showPassword: false,
    validationErrors: false,
  };

  handleShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
  };

  render() {
    const { showPassword, validationErrors } = this.state;

    return (
      <Fragment>
        <Container>
        <Row className="justify-content-md-center">
            <Col xs lg="12">
              <div className="sign-title">Login</div>
              </Col>
              </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="6">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="password-wrap">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                    <FontAwesomeIcon
                      className="show-password"
                      icon={showPassword ? faEye : faEyeSlash}
                      onClick={this.handleShowPassword}
                    />
                  </div>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={validationErrors}
                >
                  Submit
                </Button>
                <div>
                  <Link to="/signup">Not yet registered yet?</Link>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Login;
