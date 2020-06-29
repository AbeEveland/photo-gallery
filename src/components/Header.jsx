import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <body>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="Header">
                <Link className="titlea" to="/">
                  My Hobbies
                </Link>
              </h1>
            </div>
          </div>
        </section>
      </body>
    )
  }
}
