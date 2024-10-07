import '../css/services-gallery.css'
import img1 from '../assets/images/deck1.jpeg'
import img2 from '../assets/images/FB_IMG_1606604670891_Original.jpeg'

const Decks= () => {
    return(
        <section className='services-body'>
            <h2>Decks</h2>
            
            <p className='service-description'>BBQ season is here! Let us build an outdoor haven for your family!</p>
            
            <div className='service-images-container'>

            <div className='service-image'>
                <img src={img1} alt='Deck with furniture'/>
            </div>
            <div className='service-image'>
                <img src={img2} alt='Deck with furniture'/>
            </div>
                
            </div>
        </section>
    )    
};

export default Decks