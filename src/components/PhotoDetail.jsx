import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photos from './samplePhotos.json'

export class PhotoDetail extends Component {
  render() {
    const categoryName = this.props.match.params.categoryName
    const arrayIndexOfThePhoto = this.props.match.params.arrayIndexOfThePhoto
    const category = photos[categoryName]
    const categoryPhotos = category.photos
    const photo = categoryPhotos[arrayIndexOfThePhoto]
    return (
      <body>
        <ul>
          <Link className="linkPosition" to="/">
            <span>Home</span>
          </Link>
          <li className="">
            <Link className="linkPosition" to={`/${categoryName}`}>
              {category.title}
            </Link>
          </li>
          <Link
            className="linkPosition"
            to={`/${categoryName}/${arrayIndexOfThePhoto}`}
          >
            {photo.title}
          </Link>
        </ul>
        <h3 className="title">{photo.title}</h3>
        <figure className="image title">
          <img src={photo.imageURL} alt={photo.title} width="400px" />
        </figure>
        <p>
          <a className="title" href={photo.sourceURL}>
            Source
          </a>
        </p>
      </body>
    )
  }
}
