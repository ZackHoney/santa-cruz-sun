import '../css/services-gallery.css'
import img1 from '../assets/images/Bathroom-Remodels/bathroom-remodel.jpg'
import img2 from '../assets/images/Bathroom-Remodels/Bathroom-Remodel(2).jpeg'
import img3 from '../assets/images/Bathroom-Remodels/bathroom-remodel(3).jpg'
import img4 from '../assets/images/Bathroom-Remodels/bathroom-remodel(4).jpg'
import img5 from '../assets/images/Bathroom-Remodels/bathroom-remodel(5).jpg'
import img6 from '../assets/images/Bathroom-Remodels/bathroom-remodel(6).jpg'
import img7 from '../assets/images/Bathroom-Remodels/Bathroom-Remodel(7).jpeg'
import img8 from '../assets/images/Bathroom-Remodels/Old-Shower.jpg'



const bathroomRemodel = () => {
  return (
    <section className='services-body'>
            <h2>Bathroom Remodels</h2>
            
            <p className='service-description'>Transform your old bathroom into a spa!</p>
            
            <div className='service-images-container'>

            <div className='service-image'>
                <img src={img1} alt='Tile Shower'/>
            </div>

            <div className='service-image'>
                <img src={img2} alt='Tile Shower'/>
            </div>

            <div className='service-image'>
                <img src={img3} alt='Tile Shower'/>
            </div>

            <div className='service-image'>
                <img src={img4} alt='Tile Shower'/>
            </div>

            <div className='service-image'>
                <img src={img5} alt='Tile Shower'/>
            </div>

            <div className='service-image'>
                <img src={img6} alt='Tile Shower'/>
            </div>

            <div className='service-image'>
                <img src={img7} alt='Tile Shower'/>
            </div>

            <div className='service-image'>
                <img src={img8} alt='Tile Shower'/>
            </div>    
            </div>
        </section>
  )
}

export default bathroomRemodel