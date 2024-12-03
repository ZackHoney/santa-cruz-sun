import '../css/services-gallery.css'
import img1 from '../assets/images/New-Construction/New Basement.jpg'
import img2 from '../assets/images/New-Construction/New Kitchen.jpeg'
import img3 from '../assets/images/New-Construction/New Kitchen.jpg'

const NewConstruction= () => {
    return(
        <section className='services-body'>
            <h2>New Construction</h2>
            
            <p className='service-description'>Building new structures with precision and expertise.</p>
            
            <div className='service-images-container'>

            <div className='service-image'>
                <img src={img1} alt='Deck with furniture'/>
            </div>

            <div className='service-image'>
                <img src={img2} alt='Deck with furniture'/>
            </div>

            <div className='service-image'>
                <img src={img3} alt='Deck with furniture'/>
            </div>
                
            </div>
        </section>
    )    
};

export default NewConstruction