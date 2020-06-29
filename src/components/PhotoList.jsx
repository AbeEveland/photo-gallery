import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photos from './samplePhotos.json'

class PhotoListPhoto extends Component {
  render() {
    return (
      <body>
        <div key={this.props.index}>
          <div className=" photoList">
            <figure className="image">
              <Link to={`/${this.props.categoryName}/${this.props.index}`}>
                <img
                  src={this.props.photo.imageURL}
                  alt={this.props.photo.title}
                  width="100px"
                />
              </Link>
              <Link
                className="photoListTitles"
                to={`/${this.props.categoryName}/${this.props.index}`}
              >
                {this.props.photo.title}
              </Link>
            </figure>
          </div>
        </div>
      </body>
    )
  }
}
export class PhotoList extends Component {
  render() {
    const categoryName = this.props.match.params.categoryName
    const category = photos[categoryName]
    const categoryPhotos = category.photos
    return (
      <>
        <ul>
          <li>
            <Link className="linkPosition" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="linkPosition" to={`/${categoryName}`}>
              {category.title}
            </Link>
          </li>
        </ul>
        <h3 className="titlea">{category.title}</h3>
        <h4 className="subtitle titlea">{category.description}</h4>
        {categoryPhotos.map((photo, index) => (
          <PhotoListPhoto
            key={index}
            index={index}
            photo={photo}
            categoryName={categoryName}
          />
        ))}
      </>
    )
  }
}
