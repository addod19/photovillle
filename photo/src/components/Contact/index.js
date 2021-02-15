import './contact.css';

const Contact = () => {
  return(
    <section className="contact">
      <h1>Contact</h1>
      <h4>There are many ways you can contact us: Kindly explore what best suits you!!</h4>
      <div className="contact-wrap">
        <div className="social-media">
          <ul>
            <li>
              <a href="" >Instagram</a>
            </li>
            <li>
              <a href="" >Facebook</a>
            </li>
            <li>
              <a href="" >Twitter</a>
            </li>
            <li>
              <a href="" >Whatsapp</a>
            </li>
          </ul>
        </div>
        <div className="others">
          <ul>
            <li>Mobile: +233246173826</li>
            <li>Email: addodaniel@gmail.com</li>
            <li>Phone: +233207312909</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Contact;