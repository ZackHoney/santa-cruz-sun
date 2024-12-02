import '../css/services-gallery.css'
// import img1 from '../assets/images/Tile Shower.jpeg'
// import img2 from '../assets/images/image1.jpeg'


const bathroomRemodel = () => {
  return (
    <section className='services-body'>
            <h2>Bathroom Remodels</h2>
            
            <p className='service-description'>Transform your old bathroom into a spa!</p>
            
            <div className='service-images-container'>

            <div className='service-image'>
                {/* <img src={img1} alt='Tile Shower'/> */}
            </div>
            <div className='service-image'>
                {/* <img src={img2} alt='Tile Shower'/> */}
            </div>
                
            </div>
        </section>
  )
}

export default bathroomRemodel