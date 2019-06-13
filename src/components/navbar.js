import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import SwipeableTemporaryDrawer from './swipable-temporary-drawer';

const useStyles = makeStyles(theme => ({
  navbar: {
    flexGrow: 1,
    alignItems: "center",
    margin: 0,
  },
  title: {
    fontWeight: 600,
  },
}))

const Navbar = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <div className={classes.navbar}>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <SwipeableTemporaryDrawer />
          <Typography variant="h5" className={classes.title}>
            {siteTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
