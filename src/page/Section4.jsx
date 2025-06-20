// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import NewCards from "./NewCards";

// function Section4({
//   language,
//   cards,
//   isModalOpen,
//   handleOpenModal,
//   handleCloseModal,
// }) {
//   return (
//     <div>
//       <section id="section4">
//         <div>
//           <NewCards language={language} cards={cards} />
//         </div>
//         <div>
//           <div className="promotion">
//             <h1>
//               {language === "Uzb"
//                 ? "Ipadlar uchun ham chegirma 30%"
//                 : "Скидка 30% и на iPad."}
//             </h1>
//             <p>
//               {language === "Uzb"
//                 ? "!Hoziroq ulgurib qoling!"
//                 : "!Догоните сейчас!"}
//             </p>
//             <button onClick={handleOpenModal}>
//               <i className="fa-regular fa-circle-left"></i>
//               {language === "Uzb" ? " Batafsil" : " Подробнее"}
//             </button>
//           </div>

//           <AnimatePresence>
//             {isModalOpen && (
//               <motion.div
//                 className="modal-overlay"
//                 onClick={handleCloseModal}
//                 initial={{ opacity: 0, y: -500 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -200 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <motion.div
//                   className="modal-content"
//                   onClick={(e) => e.stopPropagation()}
//                   initial={{ opacity: 0, y: -500 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -200 }}
//                   transition={{ duration: 0.5, ease: "easeOut" }}
//                 >
//                   <button className="close-btn" onClick={handleCloseModal}>
//                     ✖
//                   </button>
//                   <h2>
//                     {language === "Uzb"
//                       ? "Chegirma Tafsilotlari"
//                       : "Детали скидки"}
//                   </h2>
//                   <p>
//                     {language === "Uzb"
//                       ? "Ipad uchun 30% chegirma faqat shu hafta davomida amal qiladi!"
//                       : "Скидка 30% на iPad действует только на этой неделе!"}
//                   </p>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Section4;

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewCards from "./NewCards";

function Section4({
  language,
  cards,
  isModalOpen,
  handleOpenModal,
  handleCloseModal,
}) {
  useEffect(() => {
    const cardsEl = document.querySelector(".cards-wrapper");
    const promoEl = document.querySelector(".promotion");

    cardsEl?.classList.add("fade-in-bottom");
    promoEl?.classList.add("fade-in-scale");
  }, []);

  return (
    <div>
      <section id="section4">
        <div className="cards-wrapper">
          <NewCards language={language} cards={cards} />
        </div>
        <div>
          <div className="promotion">
            <h1>
              {language === "Uzb"
                ? "Ipadlar uchun ham chegirma 30%"
                : "Скидка 30% и на iPad."}
            </h1>
            <p>
              {language === "Uzb"
                ? "!Hoziroq ulgurib qoling!"
                : "!Догоните сейчас!"}
            </p>
            <button onClick={handleOpenModal}>
              <i className="fa-regular fa-circle-left"></i>
              {language === "Uzb" ? " Batafsil" : " Подробнее"}
            </button>
          </div>

          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className="modal-overlay"
                onClick={handleCloseModal}
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, y: -500 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -200 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <button className="close-btn" onClick={handleCloseModal}>
                    ✖
                  </button>
                  <h2>
                    {language === "Uzb"
                      ? "Chegirma Tafsilotlari"
                      : "Детали скидки"}
                  </h2>
                  <p>
                    {language === "Uzb"
                      ? "Ipad uchun 30% chegirma faqat shu hafta davomida amal qiladi!"
                      : "Скидка 30% на iPad действует только на этой неделе!"}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default Section4;
