import React from "react"
import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a Feedback app</p>

        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
