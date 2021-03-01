import React from 'react';
import { MDBContainer, MDBCardHeader, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBDataTableV5, MDBBtn } from 'mdbreact';

export default function Table() {

  const [datatable] = React.useState({
    columns: [
      {
        label: 'No',
        field: 'no',
        width: 50,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'No',
        },
      },
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Date',
        field: 'date',
        width: 270,
      },
      {
        label: 'Status',
        field: 'status',
        width: 150,
      },
      {
        label: 'Action',
        field: 'action',
        width: 50,
      },
      {
        label: 'Remove',
        field: 'remove',
        width: 50,
      },

    ],
    rows: [
      {
        no: '6',
        name: 'Introductory meeting',
        date: '2019-04-15 : 00:00:00',
        status: 'Active',
        action: [<MDBIcon className="fa fa-edit" onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8080/Textedit";
        }} />],
        remove: [<MDBBtn size="sm"><MDBIcon icon="trash-alt" /></MDBBtn>],
      },
      {
        no: '1',
        name: '',
        date: '2018-01-23 : 23:04:47',
        status: 'Passive',
        action: [<MDBIcon className="fa fa-edit" onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8080/Textedit";
        }} />],
        remove: [<MDBBtn size="sm"><MDBIcon icon="trash-alt" /></MDBBtn>],
      },
      {
        no: '4',
        name: 'Meeting',
        date: '2019-03-15 : 12:30:00',
        status: 'Active',
        action: [<MDBIcon className="fa fa-edit" onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8080/Textedit";
        }} />],
        remove: [<MDBBtn size="sm"><MDBIcon icon="trash-alt" /></MDBBtn>],
      },
      {
        no: '2',
        name: 'Meeting for planning project',
        date: '2019-04-10 : 10:30:00',
        status: 'Active',
        action: [<MDBIcon className="fa fa-edit" onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8080/Textedit";
        }} />],
        remove: [<MDBBtn size="sm"><MDBIcon icon="trash-alt" /></MDBBtn>],
      },
      {
        no: '3',
        name: 'Requirement document analysis',
        date: '2019-04-05 : 13:00:00',
        status: 'Passive',
        action: [<MDBIcon className="fa fa-edit" onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8080/Textedit";
        }} />],
        remove: [<MDBBtn size="sm"><MDBIcon icon="trash-alt" /></MDBBtn>],
      },
      {
        no: '5',
        name: 'Scrum meeting',
        date: '2019-04-08 : 09:00:00',
        status: 'Passive',
        action: [<MDBIcon className="fa fa-edit" onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8080/Textedit";
        }} />],
        remove: [<MDBBtn size="sm"><MDBIcon icon="trash-alt" /></MDBBtn>],
      },
    ],
  });

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  const bgdanger = { backgroundColor: '#ff4444' }
  const bggrey = { backgroundColor: '#eeeeee' }
  return (
    <div>
      <br></br><br></br>
      <MDBCardHeader style={bggrey} dark expand="md" scrolling fixed="top" >
        <MDBIcon icon="far fa-sun" className="mr-1" /> EVENTS <MDBIcon icon="fas fa-angle-double-right" /> EVENT LIST
        </MDBCardHeader>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        checkbox
        headCheckboxID='id2'
        bodyCheckboxID='checkboxes2'
      />
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
      <MDBContainer fluid>
      </MDBContainer>
    </div>
  );
}
