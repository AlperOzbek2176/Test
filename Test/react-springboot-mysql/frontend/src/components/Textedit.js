import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBInput, MDBBtn, MDBCardHeader, MDBIcon } from "mdbreact";
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { EditorState } from 'draft-js';
import { ContentState, convertToRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import { Editor } from 'react-draft-wysiwyg';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../index.css';

export default function Texteditor() {

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const [convertedContent, setConvertedContent] = React.useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }

  const _contentState = ContentState.createFromText('');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = React.useState(raw)

  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }

  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleCollapse = () => setIsOpen(!isOpen);

  const bgdanger = { backgroundColor: '#ff4444' }
  const bggrey = { backgroundColor: '#eeeeee' }
  return (
    <>
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
      <MDBCardHeader style={bggrey} dark expand="md" scrolling fixed="top"> ADD NEW EVENT
        </MDBCardHeader>
      <MDBContainer fluid>
        <form>
          <MDBCheckbox class="custom-control custom-checkbox" id="defaultUnchecked" for="defaultUnchecked" ></MDBCheckbox> Active
            <br></br><br></br>
          <div className="grey-text">
            <MDBInput label="Title" type="text" />
            <br></br>
            <MDBInput label="Date" type="date" />
          </div>
          <br></br>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            defaultContentState={contentState}
            onContentStateChange={setContentState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
          <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
          <br></br>
          <div className="mx-2 d-flex justify-content-center">
            <MDBBtn color='primary' type="save" onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:8080/Table";
            }}><MDBIcon className="fas fa-save" /> Save </MDBBtn>
          </div>
        </form>
      </MDBContainer>
    </>
  )
}

