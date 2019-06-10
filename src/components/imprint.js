import React from "react"
import { Button, Modal } from "react-bootstrap"

class Imprint extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    return (
      <>
        <a href="#" onClick={this.handleShow}>
          Imprint
        </a>

        <Modal show={this.state.show} onHide={this.handleClose} size="xl" scrollable>
          <Modal.Header closeButton>
            <Modal.Title>Imprint</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Skate ipsum dolor sit amet, John Lucero 900 ollie hole rail slide
              yeah. Melancholy carve slide nose-bump. Half-cab face plant 360
              street. Roll-in crooked grind pop shove-it noseblunt slide.
              Handplant nosebone slob air helipop. Rail carve hang ten berm.
              Feeble shoveit Dudesblood slob air vert. Concave mini ramp slam
              wall ride Steve Chumney. Aerial nose slide goofy footed hang ten.
              180 berm slide spine. Front foot impossible birdie Saran Wrap
              casper.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Imprint
