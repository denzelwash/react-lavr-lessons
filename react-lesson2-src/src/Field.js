import React, {useRef, useEffect } from "react"
import useClickInside from "./hooks/useClickInside";
import {Button, Card} from 'react-bootstrap'

export default function ({onChange}) {
  const elem = useRef()
  const inside = useClickInside(elem)

  useEffect(() => {
		if (inside === false) {
      onChange()
    }
	}, [inside])

  return <Card style={{ width: '18rem' }} ref={elem}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
}