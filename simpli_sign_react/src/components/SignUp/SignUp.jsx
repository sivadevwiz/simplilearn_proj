import React, { Component, Fragment } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import {
  checkFirstName,
  checkLastName,
  checkEmail,
  checkPasswordSmallChar,
  checkPasswordBig,
  checkPasswordSymbol,
  checkPasswordLength,
} from "../../validators/validator";

import "../../dist/scss/common.scss";
import "./style.scss";

class SignUp extends Component {
  state = {
    showPassword: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    // passwordError: false,
    passwordReq1: false,
    passwordReq2: false,
    passwordReq3: false,
    passwordReq4: false,
    confirmPasswordError: false,
  };

  handleShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
  };

  validateFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
      firstNameError: !checkFirstName(event.target.value),
    });
  };

  validateLastName = (event) => {
    this.setState({
      lastName: event.target.value,
      lastNameError: !checkLastName(event.target.value),
    });
  };

  validateEmail = (event) => {
    this.setState({
      email: event.target.value,
      emailError: !checkEmail(event.target.value),
    });
  };

  validatePassword = (event) => {
    this.setState({
      password: event.target.value,
      passwordReq1: !checkPasswordSmallChar(event.target.value),
      passwordReq2: !checkPasswordBig(event.target.value),
      passwordReq3: !checkPasswordSymbol(event.target.value),
      passwordReq4: !checkPasswordLength(event.target.value),
    });
  };

  validateConfirmPassword = (event) => {
    const { password } = this.state;
    this.setState({
      confirmPassword: event.target.value,
      confirmPasswordError: password !== event.target.value,
    });
  };

  createAccount = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;

    const firstNameChk = checkFirstName(firstName);
    const lastNameChk = checkLastName(lastName);
    const emailChk = checkEmail(email);
    const passwordChk1 = checkPasswordSmallChar(password);
    const passwordChk2 = checkPasswordBig(password);
    const passwordChk3 = checkPasswordSymbol(password);
    const passwordChk4 = checkPasswordLength(password);

    this.setState({
      firstNameError: !firstNameChk,
      lastNameError: !lastNameChk,
      emailError: !emailChk,
      passwordReq1: !passwordChk1,
      passwordReq2: !passwordChk2,
      passwordReq3: !passwordChk3,
      passwordReq4: !passwordChk4,
      confirmPasswordError: !(password === confirmPassword),
    });

    const clearToSubmit =
      firstNameChk &&
      lastNameChk &&
      emailChk &&
      passwordChk1 &&
      passwordChk2 &&
      passwordChk3 &&
      passwordChk4 &&
      password === confirmPassword;

    if (clearToSubmit) {
      axios
        .post("http://localhost:5000/api/signup", {
          firstName: firstName,
          lastName: lastName,
          userName: email,
          password: password,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  render() {
    const {
      showPassword,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      firstNameError,
      lastNameError,
      emailError,
      passwordReq1,
      passwordReq2,
      passwordReq3,
      passwordReq4,
      confirmPasswordError,
    } = this.state;

    let passwordError =
      passwordReq1 || passwordReq2 || passwordReq3 || passwordReq4;

    let submitErrorChk =
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError;

    return (
      <Fragment>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="12">
              <div className="sign-title">Sign up!</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="6">
              <Form>
                <Row>
                  <Col xs="12" md="6" lg="6">
                    <Form.Group>
                      <Form.Label className={firstNameError ? "error" : null}>
                        First name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={firstNameError ? null : "Enter First name"}
                        name="firstName"
                        value={firstName}
                        onChange={this.validateFirstName}
                        className={firstNameError ? "error" : null}
                      />
                      {firstNameError && (
                        <Form.Text className="error">
                          Enter Valid First name
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="6" lg="6">
                    <Form.Group>
                      <Form.Label className={lastNameError ? "error" : null}>
                        Last name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={lastNameError ? null : "Enter Last name"}
                        name="lastName"
                        value={lastName}
                        onChange={this.validateLastName}
                        className={lastNameError ? "error" : null}
                      />
                      {lastNameError && (
                        <Form.Text className="error">
                          Enter Valid Last name
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className={emailError ? "error" : null}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder={emailError ? null : "Enter email"}
                    className={emailError ? "error" : null}
                    onChange={this.validateEmail}
                  />
                  {emailError && (
                    <Form.Text className="error">
                      Enter Valid Email address
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label className={passwordError ? "error" : null}>
                    Password
                  </Form.Label>
                  <div className="password-wrap">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      value={password}
                      placeholder={passwordError ? null : "Enter Password"}
                      className={passwordError ? "error" : null}
                      onChange={this.validatePassword}
                    />
                    <FontAwesomeIcon
                      className="show-password"
                      icon={showPassword ? faEye : faEyeSlash}
                      onClick={this.handleShowPassword}
                    />
                  </div>
                  {passwordError && (
                    <Form.Text className="error">
                      Enter a valid Password
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="ConfirmPassword">
                  <Form.Label className={confirmPasswordError ? "error" : null}>
                    Confirm Password
                  </Form.Label>
                  <div className="password-wrap">
                    <Form.Control
                      value={confirmPassword}
                      type={showPassword ? "text" : "password"}
                      placeholder={
                        confirmPasswordError ? null : "Confirm Password"
                      }
                      className={confirmPasswordError ? "error" : null}
                      onChange={this.validateConfirmPassword}
                    />
                    <FontAwesomeIcon
                      className="show-password"
                      icon={showPassword ? faEye : faEyeSlash}
                      onClick={this.handleShowPassword}
                    />
                  </div>
                  {confirmPasswordError && (
                    <Form.Text className="error">
                      Passwords should match
                    </Form.Text>
                  )}
                </Form.Group>

                <Row className="password-req">
                  <Col lg="12" className="title">
                    Password requirements
                  </Col>
                  <Col lg="12">Minimum 8 characters</Col>
                  <Col lg="12">Minimum one lower case</Col>
                  <Col lg="12">Minimum one upper case</Col>
                  <Col lg="12">One of the symbols = !,#,$,%,@</Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col xs lg="12">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={this.createAccount}
                      disabled={!submitErrorChk}
                    >
                      Create Account
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SignUp;
