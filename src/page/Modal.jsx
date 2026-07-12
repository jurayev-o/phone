import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Modal({ language, setModal, card, removeFromCart }) {
  const [counts, setCounts] = useState(
    card.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const [visibleCards, setVisibleCards] = useState(card.map((item) => item.id));
  const [collapsed, setCollapsed] = useState(false);

  function playaudio() {
    const audio = new Audio("public/music/delete.mp3");
    audio.play();
  }

  useEffect(() => {
    setVisibleCards((prev) =>
      prev.filter((id) => card.some((item) => item.id === id))
    );
  }, [card]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCollapsed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRemove = (id) => {
    setVisibleCards((prev) => prev.filter((cardId) => cardId !== id));

    setTimeout(() => removeFromCart(id), 300);
  };

  const totalPrice = card.reduce(
    (sum, item) => sum + item.price * counts[item.id],
    0
  );

  const pilus = (id) => setCounts((c) => ({ ...c, [id]: c[id] + 1 }));
  const minus = (id) =>
    setCounts((c) => ({ ...c, [id]: c[id] > 1 ? c[id] - 1 : 1 }));

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="modal-div2">
        <div className="close" onClick={() => setModal(false)}>
          ✖️
        </div>
        <div className="modal-div">
          <h1>{language === "Uzb" ? "Savat" : "Корзина"}</h1>
          {card.length === 0 ? (
            <p>{language === "Uzb" ? "Savat bo'sh" : "Корзина пуста"}</p>
          ) : (
            <AnimatePresence>
              {card
                .filter((item) => visibleCards.includes(item.id))
                .map((item) => (
                  <motion.div
                    key={item.id}
                    className="card-box1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={item.image} alt={item.title} />
                    <h1>
                      {language === "Uzb" ? "Ismi" : "Имя"}: {item.title}
                    </h1>
                    <h1>
                      {language === "Uzb" ? "Narx" : "Цена"}: {item.price}{" "}
                      {language === "Uzb" ? "so'm" : "рублей"}
                    </h1>
                    <button
                      onClick={() => {
                        playaudio();
                        handleRemove(item.id);
                      }}
                    >
                      {language === "Uzb" ? "O'chirish" : "Удалить"}
                    </button>
                    <div className="count">
                      <button onClick={() => minus(item.id)}>-</button>
                      <h1>{counts[item.id]}</h1>
                      <button onClick={() => pilus(item.id)}>+</button>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          )}
        </div>
        <div className="total-price">
          <h3>
            {language === "Uzb" ? "Jami narx" : "Общая стоимость"}: {totalPrice}
            {language === "Uzb" ? "so'm" : "рублей"}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
