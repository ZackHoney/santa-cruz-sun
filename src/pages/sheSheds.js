import '../css/services-gallery.css'
// import img1 from '../assets/images/deck1.jpeg'
// import img2 from '../assets/images/Kitchen Remodel.jpeg'

const SheSheds= () => {
    return(
        <section className='services-body'>
            <h2>She Sheds</h2>
            
            <p className='service-description'>Let us build a private retreat!</p>
            
            <div className='service-images-container'>

            <div className='service-image'>
                {/* <img src={img1} alt='Deck with furniture'/> */}
            </div>
            <div className='service-image'>
                {/* <img src={img2} alt='Deck with furniture'/> */}
            </div>
                
            </div>
        </section>
    )    
};

export default SheSheds