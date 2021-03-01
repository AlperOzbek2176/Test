import React, { Component } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const bgdanger = { backgroundColor: '#ff4444' }
        const container = { height: 1300 }
        return (
            <div>
                <header>
                    <MDBNavbar style={bgdanger} dark expand="md" scrolling fixed="top">
                        <MDBNavbarBrand href="/">
                            <strong>HOME</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.onClick} />
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink to="/Login" onClick={() => this.onClick()}>Login</MDBNavLink>
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
                <MDBContainer style={container} className="text-center mt-5 pt-5">
                    <h5>THIS IS THE TEST PAGE FOR</h5>
                    <br></br><br></br>
                    <h3>Springboot   React   MySQL</h3>
                </MDBContainer>
            </div>
        );
    }
}
export default Home;