
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Carusel from "./Carsusel";

function Section3({ language, images }) {
  const [secModal, setSecModal] = useState(false);
  const OpensecModal = () => setSecModal(true);
  const ClosecModal = () => setSecModal(false);

  return (
    <div>
      <section id="section3">
        <div className="header">
          <h1>{language === "Uzb" ? "Chegirmalar" : "Скидки"}</h1>
          <div className="hr" />
        </div>
        <div className="flex">
          <div className="aksiya">
            <div className="modal-bac">
              <h1>
                {language === "Uzb"
                  ? "Shu telifonlar uchun 50% chegirma"
                  : "Скидка 50% на эти телефоны."}
              </h1>
              <p>
                {language === "Uzb"
                  ? "!Hoziroq ulgirib qoling!"
                  : "!Торопитесь акция!"}
              </p>
              <button onClick={OpensecModal}>
                {language === "Uzb" ? "Batafsil" : "взгляни"}
                <i className="fa-regular fa-circle-right" />
              </button>
            </div>

            <AnimatePresence>
              {secModal && (
                <motion.div
                  key="overlay"
                  className="modal-overlay"
                  onClick={ClosecModal}
                  initial={{ opacity: 0, y: -500 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -200 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    key="content"
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, y: -500 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -200 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <button className="close-btn" onClick={ClosecModal}>
                      ✖
                    </button>
                    <h2>
                      {language === "Uzb"
                        ? "Chegirma Tafsilotlari"
                        : "Детали скидки"}
                    </h2>
                    <p>
                      {language === "Uzb"
                        ? "Telifonlar uchun 50% chegirma faqat shu hafta davomida amal qiladi!"
                        : "Скидка 30% на Телефоны действует только на этой неделе!"}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Carusel images={images} />
        </div>
      </section>
    </div>
  );
}

export default Section3;
