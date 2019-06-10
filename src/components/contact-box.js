import React from "react"
import { Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons"

const ContactBox = () => (
  <Card>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button href="tel:555-555-5555" variant="primary">
        <FontAwesomeIcon icon={faPhoneSquareAlt} fixedWidth />
        <span>Anruf</span>
      </Button>
    </Card.Body>
  </Card>
)

export default ContactBox
