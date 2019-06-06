import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Navbar = ({ brandName }) => (
  <div>
    <nav class="navbar navbar-expand-lg navbar-fancy">
      <Link className="navbar-brand" to="/">
        {brandName}
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <Link className="nav-item nav-link" activeClassName="active" to="/">
            Home
          </Link>
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to="/imprint"
          >
            Imprint
          </Link>
        </div>
      </div>
    </nav>
  </div>
)

Navbar.propTypes = {
  brandName: PropTypes.string,
}

Navbar.defaultProps = {
  brandName: ``,
}

export default Navbar
