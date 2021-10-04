import React from 'react';

const ObjectInfo = ({ object }) => {

  return (
    <section className="details-container">
      <div className="details-container__banner">
        <img src={object.headerImage.url} alt="obj-banner" />
      </div>

      <div className="details-container__info">
        <h3>{object.longTitle}</h3>
        <span>Object number: {object.objectNumber}</span>
        <p><span>Artist: {object.principalOrFirstMaker}</span></p>
        <div>
          <p>Production places: </p>
          {object.productionPlaces.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
      </div>

      <div className="details-container__artwork">
        <img src={object.webImage.url} alt="artwork" />
      </div>
    </section>
  )
}

export default ObjectInfo;