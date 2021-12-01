import React, { Component } from 'react'


 class SliderComponent extends Component {
    render() {
      
        return (
          <div  >
            <section className="ProductCarousel">
            <div id="carouselCybersoft" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselCybersoft" data-slide-to={0} className="active" />
                <li data-target="#carouselCybersoft" data-slide-to={1} />
                <li data-target="#carouselCybersoft" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./img/slide_1.jpg" alt="..." />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./img/slide_2.jpg" alt="..." />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./img/slide_3.jpg" alt="..." />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselCybersoft" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#ccarouselCybersoft" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            </section>
        </div>
        )
    }
    
}
export default SliderComponent