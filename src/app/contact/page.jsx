import ContactForm from '../components/ContactForm';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <section className={styles.contact_section}>
          <h2>We would love to hear <span>from you</span></h2>
          <ContactForm />
        </section>
      </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.0958721970856!2d77.43419137520726!3d12.641714987644134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae5bcdf61e1607%3A0x738256b2e08f2bb4!2sJAIN%20GLOBAL%20CAMPUS!5e0!3m2!1sen!2sin!4v1698410241576!5m2!1sen!2sin" width={100} height={450} style={{ border: 0 }} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </>
  )
}

export default Contact
