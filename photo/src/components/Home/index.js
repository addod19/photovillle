import './home.css';
import background from '../../assets/images/dd4.png';
import images from '../../constants/index';

import ImgaeSlider from '../imageSlider';

const ResponsiveImage = ( { src, width, height } ) => {
  return (
    <div
      style={ { 
        width,
      } }
      className="responsive-image">
      <div style={ {
          paddingBottom: ( height / width * 100 ) + '%'
        } } />
      <img
        src={ src }
        className="responsive-image__image" />
    </div>
  );
}
const Home = () => {
  console.log(images);
  return(
    <>
      <section className="hero" style={{ backgroundImage: `url()` }}>
        <section className="slideContainer">
          <ImgaeSlider images={images} className="image" />
        </section>
      </section>
    </>
  )
}
export default Home;