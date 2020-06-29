import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomePage extends Component {
  render() {
    return (
      <body>
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <Link to="/">
                <Link className="linkPosition " to="/">
                  Home
                </Link>
              </Link>
            </ul>
          </nav>

          <div className="content p">
            <h2>
              <Link className="titlea " to="/RollerBlades">
                Roller Blading
              </Link>
            </h2>
            <p className="title ">
              Roller blading is a hobby I picked up this year. <br />
              It is a great way to get exercise while having fun!
            </p>
            <figure className="image title">
              <img
                src="https://cdn.skatepro.com/product/440/rollerblade-rb-110-3wd-freeskates-n2.jpg"
                alt="RB 110"
                width="120px"
                height="80px"
              />
            </figure>
          </div>

          <div className="content p">
            <h2>
              <Link className="titlea " to="/Shoes">
                {' '}
                Shoes
              </Link>
            </h2>
            <p className="title ">
              Shoes aren't so much a "hobby", but something I like to collect.
            </p>
            <figure className="image title">
              <img
                src="https://nb.scene7.com/is/image/NB/m1080g10_nb_02_i?$pdpflexf22x$"
                alt="New Balance 1080v10 "
                width="120px"
                height="80px"
              />
            </figure>
          </div>
        </div>
      </body>
    )
  }
}
