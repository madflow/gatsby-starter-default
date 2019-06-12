import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    margin: 0,
  },
}))

const Header = ({ siteTitle }) => (
  <header className={useStyles.root}>
    <Navbar siteTitle={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
