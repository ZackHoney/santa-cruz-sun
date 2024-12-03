import '../css/services-gallery.css'
import img1 from '../assets/images/Tile/Tile-Floor.jpg'
import img2 from '../assets/images/Tile/Tile-Floor(2).jpg'
import img3 from '../assets/images/Tile/Tile-Backsplash.jpg'
import img4 from '../assets/images/Tile/Tile-Backsplash(2).jpg'
import img5 from '../assets/images/Tile/Tile-Shower.jpg'
import img6 from '../assets/images/Tile/Tile-Shower(2).jpg'
import img7 from '../assets/images/Tile/Tile-Shower(3).jpeg'
import img8 from '../assets/images/Tile/Tile-Shower(4).jpg'
import img9 from '../assets/images/Tile/Tile-Shower(5).jpg'
import img10 from '../assets/images/Tile/Tile-Shower(6).jpg'
import img11 from '../assets/images/Tile/Tile-Shower(7).jpeg'
import img12 from '../assets/images/Tile/Tile-Shower(8).jpeg'
import img13 from '../assets/images/Tile/Tile-Shower(9).jpeg'
import img14 from '../assets/images/Tile/Tile-Shower(10).jpeg'

const Tile= () => {
    return(
        <section className='services-body'>
            <h2>Tile</h2>
            
            <p className='service-description'>Let us transform your floor into a beautiful tiled space!</p>
            
            <div className='service-images-container'>

            <div className='service-image'>
                <img src={img1} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img2} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img3} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img4} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img5} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img6} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img7} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img8} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img9} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img10} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img11} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img12} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img13} alt=''/>
            </div>

            <div className='service-image'>
                <img src={img14} alt=''/>
            </div>
                
            </div>
        </section>
    )    
};

export default Tile