import '../css/services-gallery.css'
import img1 from '../assets/images/Kitchen-Remodels/Kitchen Remodel.png'

const KitchenRemodels= () => {
    return(
        <section className='services-body'>
            <h2>Kitchen Remodels</h2>
            
            <p className='service-description'>Update your kitchen with a custom hood and new cabinets!</p>
            
            <div className='service-images-container'>

            <div className='service-image'>
                <img src={img1} alt='Kitchen'/>
            </div>
           
                
            </div>
        </section>
    )    
};

export default KitchenRemodels