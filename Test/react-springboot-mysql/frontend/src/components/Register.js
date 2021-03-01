import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBRow, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBCol } from "mdbreact";

export default function Register() {

  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleCollapse = () => setIsOpen(!isOpen);

  const [firstLoad, setLoad] = React.useState(true);

  const [name, setName] = React.useState("");
  const [phone_no, setPhone_No] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNameChange = event => setName(event.target.value);
  const handlePhone_NoChange = event => setPhone_No(event.target.value);
  const handlEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  async function sampleFunc(toInput) {
    const response = await fetch("/register/user", {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json"
         },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(toInput) 
    });
    const body = await response.json();
    console.log(body.id);

  }

  const handleSubmit = variables => {
    const toInput = { name, phone_no, email, password };
    sampleFunc(toInput);
    setName("");
    setPhone_No("");
    setEmail("");
    setPassword("");
  };

  if (firstLoad) {
    // sampleFunc();
    setLoad(false);
  }
  const bgdanger = { backgroundColor: '#ff4444' }
  return (
    <div>
    <header>
      <MDBNavbar style={bgdanger} dark expand="md" scrolling fixed="top">
          <MDBNavbarBrand href="/">
              <strong>HOME</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse isOpen={isOpen} navbar>
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
          </MDBCollapse>
      </MDBNavbar>
  </header>
  <br></br><br></br>
    <MDBContainer className="d-flex justify-content-center">
      <MDBRow>
        <MDBCol md="auto">
          <MDBCard>
            <MDBCardBody>
              <form>
                <h3 className="d-flex justify-content-center"> SIGN UP </h3>
                <div className="grey-text">
                  <MDBInput
                    required
                    fullWidth
                    icon="user"
                    id="name"
                    value={name}
                    label="Name"
                    name="name"
                    autoComplete="name"
                    onChange={handleNameChange}
                  />
                  <MDBInput
                    required
                    fullWidth
                    icon="phone"
                    id="phone_no"
                    value={phone_no}
                    label="Phone No"
                    name="phone_no"
                    autoComplete="phone_no"
                    onChange={handlePhone_NoChange}
                  />
                  <MDBInput
                    required
                    fullWidth
                    icon="envelope"
                    id="email"
                    value={email}
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={handlEmailChange}
                  />
                  <MDBInput
                    required
                    fullWidth
                    icon="lock"
                    id="password"
                    value={password}
                    label="Password"
                    name="password"
                    onChange={handlePasswordChange}
                  />
                </div>
                <br></br>
                <div className="mx-2 d-flex justify-content-center">
                 <MDBBtn color="danger" type="submit" preventDefault onClick={handleSubmit}> Register </MDBBtn>
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
