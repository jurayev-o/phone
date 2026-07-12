import { motion } from "framer-motion";

const Footer = ({ language }) => {
  const openInstagram = () => {
    window.open("https://www.instagram.com/t1l.lo1233", "_blank");
  };

  const openTelegram = () => {
    window.open("https://t.me/Oyatilloh", "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/yourusername", "_blank");
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <h2 className="footer-title">
          {language === "Uzb" ? "Tarmoqlarim" : "Мои сети"}
        </h2>
        <div className="social-icons">
          <button className="icon instagram" onClick={openInstagram}>
            <i className="fab fa-instagram"></i>
            <span>_t1l.lo_</span>
          </button>
          <button className="icon telegram" onClick={openTelegram}>
            <i className="fab fa-telegram-plane"></i>
            <span>Oyatilloh</span>
          </button>
          <button className="icon github" onClick={openGithub}>
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </button>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235855.24729073538!2d69.2497312880906!3d41.299495451446274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bff63da23e22dd%3A0xe300d643548ab0b6!2z0JrQsNC70LXQs9Cw0YLRgdC60LAg0KPQt9Cw0L3RgdC60LDRjyDQntCx0LvQsNGB0YLRjCwg0KPQt9Cw0LXQutC40YHRgtCw0L0!5e1!3m2!1sen!2sus!4v1634675821574!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Uzbekistan Location"
          ></iframe>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
