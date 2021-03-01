import React, { Component } from 'react';
import ReCAPTCHA from "react-recaptcha";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBRow, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBCol } from "mdbreact";

const SITE_KEY = "6Le49kwaAAAAADKWpEorEbkgVIIeg4neUemtxZUR";
const DELAY = 1000;

const usersJson = {
  description: "Login: Email and passwords of users",
  users: {
    testUser: {
      email: "test",
      password: "test",
      type: "test"
    }
  }
};

export class Login extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: "not fired",
      value: "[empty]",
      load: false,
      expired: "false"
    };
    this._reCaptchaRef = React.createRef();
  }

  state = {
    email: "",
    password: "",
    usersJson: {}
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
    this.setState({ usersJson });
  }

  handleChange = value => {
    console.log("Captcha value:", value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };

  getLoginData = (value, type) =>
    this.setState({
      [type]: value
    });

  onFormSubmit = e => {
    e.preventDefault();
    const { usersJson, email, password } = this.state;
    const filterEmail = Object.keys(usersJson.users).filter(
      e => e === email
    );
    if (
      filterEmail.length > 0 &&
      usersJson.users[email].password === password
    ) {
      this.props.history.push("test");
      window.localStorage.setItem(
        "user",
        JSON.stringify(usersJson.users[email])
      );
    } else {
      alert("Wrong login or password");
    }
  };

  render() {
    const bgdanger = { backgroundColor: '#ff4444' }
    const { load } = this.state || {};
    return (
      <div>
        <header>
          <MDBNavbar style={bgdanger} dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="/">
              <strong>HOME</strong>
            </MDBNavbarBrand>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/Login">Login</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem active>
                <MDBNavLink to="/Register">Register</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/Table">Data Table</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/Textedit">Text Editor</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            </MDBNavbarNav>
          </MDBNavbar>
        </header>
        <br></br>
        <MDBContainer className="d-flex justify-content-center">
          <MDBRow>
            <MDBCol md="auto">
              <MDBCard>
                <MDBCardBody className="mx-3 mt-3 justify-content-center">
                  <form>
                    <h3 className="pt-4 dark-grey-text d-flex justify-content-center" > LOGIN </h3>
                    <div>
                      <MDBInput label="E-mail" hint="Enter Your E-mail" icon="envelope" group type="email" validate error="wrong" success="right" getValue={value => this.getLoginData(value, "email")} />
                      <MDBInput label="Password" hint="Enter Your Password" icon="key" group type="password" validate getValue={value => this.getLoginData(value, "password")} />
                    </div>
                    <br></br>
                    <div>
                      <MDBBtn className="btn-block d-flex justify-content-center" color="danger" type="submit" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "http://localhost:8080/Table";
                      }}> Login </MDBBtn>
                    </div>
                    <br></br>
                    <div className="font-small grey-text d-flex justify-content-center">
                      Don't have an account?
                </div>
                    <br></br>
                    <div>
                      <MDBBtn type="button" className="btn-block dark-grey-text font-weight-bold ml-1 d-flex justify-content-center" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "http://localhost:8080/Register";
                      }} > Sign up </MDBBtn>
                    </div>
                    <br></br>
                    <div className="container">
                      {load && (
                        <ReCAPTCHA
                          style={{ display: "inline-block" }}
                          theme="white"
                          ref={this._reCaptchaRef}
                          sitekey={SITE_KEY}
                          onChange={this.handleChange}
                          asyncScriptOnLoad={this.asyncScriptOnLoad}
                        />
                      )}
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default Login;