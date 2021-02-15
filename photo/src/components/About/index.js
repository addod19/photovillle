import './about.css';

const About = () => {
  return(
    <section className="aboutContainer">
      <div className="pad">
        <h3>What photoville offer: </h3>
        <ul>
          <li>Wedding/Engagement Shoots</li>
          <li>Birthday Shoots</li>
          <li>Modelling Shoots</li>
          <li>Baby Shoots</li>
        </ul>
      </div>
      <div  className="pad">
        <h2>Video Shoots are also available in the following forms:</h2>
        <ul>
          <li>Drone video shoots</li>
          <li>Party video shoots</li>
          <li>ENgagements/Wedding video shoots</li>
          <li>Advert video shoots/ Commercials</li>
          <li>Football video shoots</li>
        </ul>
      </div>
    </section>
  )
}
export default About;