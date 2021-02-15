import './feature.css';
import ceo from '../../assets/images/dd.png'

const Feature = () => {
  return(
    <section className="feat">
      <header className="head">
        <h1>Features</h1>
        <ul>
          <li>BTS</li>
          <li>HighLights</li>
          <li>Self</li>
          <li>Before && After</li>
          <li>Events</li>
          <li>BTS2</li>
          <li>Portraits</li>
        </ul>
      </header>
      <div className="feat1-self">
        <div className="img-self-wrap">
          <img src={ceo} alt="" className="self-img" />
        </div>
        <div className="description-of-self">
          <p>
            Hi, my name is ALfred Kofi Larbi. I am an all-round photographer. I do the 
            following: Weddings, Portraits, Lifestyle, Commercial Photographer,
            Creating Visuals,etc.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Feature;