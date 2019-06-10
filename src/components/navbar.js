import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

import {
  faPhoneSquareAlt,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons"

const CustomNavbar = ({ brandName }) => (
  <div class="d-flex align-items-center justify-content-around">
    <Navbar bg="light" expand="lg" className="navbar-fancy mr-auto">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-item nav-link" to="/" activeClassName="active">
            Start
          </Link>
          <Link
            className="nav-item nav-link"
            to="/about"
            activeClassName="active"
          >
            Über uns
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <div style={{'fontSize': '2rem'}}>{brandName}</div>

    <Navbar bg="light" className="navbar-fancy">
      <Nav className="ml-auto">
        <a class="nav-item nav-link" target="_blank" href="htts://facebook.com">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          class="nav-item nav-link"
          target="_blank"
          href="https://instagram.com"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a class="nav-item nav-link" target="_blank" href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a class="nav-item nav-link" href="tel:555-555-5555">
          <FontAwesomeIcon icon={faPhoneSquareAlt} />
        </a>
        <a class="nav-item nav-link" href="mailto:sth@example.com">
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
      </Nav>
    </Navbar>
  </div>
)

CustomNavbar.propTypes = {
  brandName: PropTypes.string,
}

CustomNavbar.defaultProps = {
  brandName: ``,
}

export default CustomNavbar
