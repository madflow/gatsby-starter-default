import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import ContactBox from "../components/contact-box"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons"

import { Button, Card, CardDeck } from "react-bootstrap"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="landing-home">
      <CardDeck>
        <Card className="card-transparent">
          <Card.Body>
            <Card.Text className="text-light" style={{ "font-size": "2rem" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button href="tel:555-555-5555" variant="primary">
              <FontAwesomeIcon icon={faPhoneSquareAlt} fixedWidth />
              <span>Anruf</span>
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button href="tel:555-555-5555" variant="primary">
              <FontAwesomeIcon icon={faPhoneSquareAlt} fixedWidth />
              <span>Anruf</span>
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  </Layout>
)

export default IndexPage
