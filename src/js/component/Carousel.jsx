import React from 'react'

const Carousel = () => {

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true" style={{width: '100%', height: '75vh'}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/image_24641330.jpeg?region=0,101,2160,1215&width=960" className="d-block w-100 rounded-2" alt="img-1" style={{width: '100%', height: '75vh'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>STAR WARS 1</h5>
                            <p>picture 1 | texto descripivo.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.rockaxis.com/img/newsList/2736143.jpg" className="d-block w-100 rounded-2" alt="img-2" style={{width: '100%', height: '75vh'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>STAR WARS 2</h5>
                            <p>picture 2 | texto descripivo.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg" className="d-block w-100 rounded-2" alt="img-3" style={{width: '100%', height: '75vh'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>STAR WARS 3</h5>
                            <p>picture 3 | texto descripivo.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel