import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log("user", user?.photoURL);

  const [them, setThem] = useState(true);
  //set dark and light mode start
  const lightThem = () => {
    setThem(false);
  };

  const darkThem = () => {
    setThem(true);
  };
  //set dark and light mode end

  const Userlogout = () => {
    logout().then().catch();
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Foysal Ahamed </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                {" "}
                <Link to="/" className=" text-decoration-none">
                  {" "}
                  Courses{" "}
                </Link>{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>

            <Nav>
              {/* dark and light mode btn start */}
              <Nav.Link href="#deets">
                {them ? (
                  <span onClick={lightThem}> Light </span>
                ) : (
                  <span onClick={darkThem}> Dark </span>
                )}
              </Nav.Link>
              {/* dark and light mode btn end */}
              <span>
                {user?.uid ? (
                  <span className=" d-flex">
                    <Nav.Link>
                      {" "}
                      <Image
                        className="  rounded-circle user-img"
                        src={user?.photoURL}
                      ></Image>{" "}
                    </Nav.Link>
                    <Nav.Link onClick={Userlogout}> Logout </Nav.Link>
                  </span>
                ) : (
                  <span className=" d-flex">
                    <Nav.Link>
                      {" "}
                      <Link to="/login" className=" text-decoration-none">
                        Login
                      </Link>{" "}
                    </Nav.Link>
                    <Nav.Link>
                      {" "}
                      <Link to="/register" className=" text-decoration-none">
                        Register
                      </Link>{" "}
                    </Nav.Link>
                  </span>
                )}
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
