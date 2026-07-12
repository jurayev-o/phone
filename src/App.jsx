import React, { useState, useRef, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./page/Card";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./page/Modal";
import Footer from "./page/Footer";
import NewModal from "./page/NewModal";
import Section4 from "./page/Section4";
import Section3 from "./page/Section3";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [language, setLanguage] = useState("Uzb");
  const [modal, setModal] = useState(false);
  const [newModal, setNewModal] = useState(false);
  const [card, setCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(false);

  const images = [
    { src: "public/iphone14.png", caption: "Iphone14" },
    { src: "public/iphone12promax.png", caption: "Iphone12-pro-max" },
    { src: "public/iphone12.png", caption: "Iphone11" },
  ];
  const cards = [
    { title: "Ipad-Pro", image: "public/ipadpro.png" },
    { title: "Ipad-mini", image: "public/ipadmini.webp" },
    { title: "Ipad-Air", image: "public/ipadair.png" },
  ];
  const cardData = {
    Uzb: [
      {
        id: 1,
        title: "Iphone11",
        description: "Ekran piksellar soni: 1792 x 828 piksellar",
        image: "public/iphone11.png",
        price: 6000,
      },
      {
        id: 2,
        title: "Iphone12",
        description:
          "iPhone 12 6.1 dyuymli Super Retina XDR OLED ekran bilan jihozlangan",
        image: "public/iphone12.png",
        price: 7000,
      },
      {
        id: 3,
        title: "Iphone13",
        description:
          "iPhone 13 6.1 dyuymli Super Retina XDR OLED ekran bilan jihozlangan.",
        image: "public/iphone13.png",
        price: 7300,
      },
      {
        id: 4,
        title: "Iphone14",
        description:
          "iPhone 14 6.1 dyuymli Super Retina XDR OLED ekran bilan jihozlangan.",
        image: "public/iphone14.png",
        price: 10000,
      },
      {
        id: 5,
        title: "Iphone11-pro-max",
        description:
          "iPhone 11 Pro Max 6.5 dyuymli OLED ekran bilan jihozlangan.",
        image: "public/iphone11promax.png",
        price: 71000,
      },
      {
        id: 6,
        title: "Iphone12-pro-max",
        description:
          "iPhone 12 Pro Max 6.7 dyuymli XDR OLED ekran bilan jihozlangan.",
        image: "public/iphone12promax.png",
        price: 800,
      },
      {
        id: 7,
        title: "Iphone13-pro-max",
        description:
          "iPhone 13 Pro Max 6.7 dyuymli XDR OLED ekran bilan jihozlangan.",
        image: "public/iphon13promax.png",
        price: 9000,
      },
      {
        id: 8,
        title: "Iphone14-pro-max",
        description:
          "iPhone 14 Pro Max 6.7 dyuymli XDR OLED ekran bilan jihozlangan.",
        image: "public/iphone14promax.png",
        price: 10000,
      },
      {
        id: 9,
        title: "Iphone16",
        description:
          "Ekran qoplamasi va yadro himoya qilish uchun shisha yoki plastik qoplama ishlatiladi.",
        image: "public/iphone16.png",
        price: 18476,
      },
      {
        id: 10,
        title: "Iphone-se",
        description: "Ekran resolyutsiyasi: 1334 x 750 piksellar (326 ppi)",
        image: "public/iphonece.png",
        price: 900,
      },
      {
        id: 12,
        title: "Iphone8-plus",
        description: "kran resolyutsiyasi: 1920 x 1080 piksellar (401 ppi)",
        image: "public/iphone8plus.png",
        price: 1400,
      },
      {
        id: 13,
        title: "Iphone16-pro-max",
        description:
          "Ekran olchami: 6.9 dyuym (iPhone tarixidagi eng katta ekran)",
        image: "public/iphone16promax.png",
        price: 2000,
      },
    ],
    Rus: [
      {
        id: 1,
        title: "Iphone11",
        description: "Разрешение экрана: 1792 X 828 пикселей.",
        image: "public/iphone11.png",
        price: 6000,
      },
      {
        id: 2,
        title: "Iphone12",
        description:
          "iPhone 12 оснащен 6,1-дюймовым OLED-экраном Super Retina XDR.",
        image: "public/iphone12.png",
        price: 7000,
      },
      {
        id: 3,
        title: "Iphone13",
        description:
          "iPhone 13 оснащен 6,1-дюймовым OLED-экраном Super Retina XDR.",
        image: "public/iphone13.png",
        price: 7300,
      },
      {
        id: 4,
        title: "Iphone14",
        description:
          "iPhone 14 оснащен 6,1-дюймовым OLED-экраном Super Retina XDR.",
        image: "public/iphone14.png",
        price: 10000,
      },
      {
        id: 5,
        title: "Iphone11-pro-max",
        description: "iPhone 11 Pro Max оснащен 6,5-дюймовым OLED-экраном.",
        image: "public/iphone11promax.png",
        price: 71000,
      },
      {
        id: 6,
        title: "Iphone12-pro-max",
        description: "iPhone 12 Pro Max оснащен 6,7-дюймовым OLED-экраном XDR.",
        image: "public/iphone12promax.png",
        price: 800,
      },
      {
        id: 7,
        title: "Iphone13-pro-max",
        description: "iPhone 13 Pro Max оснащен 6,7-дюймовым OLED-экраном XDR.",
        image: "public/iphon13promax.png",
        price: 900,
      },
      {
        id: 8,
        title: "Iphone14-pro-max",
        description: "iPhone 14 Pro Max оснащен 6,7-дюймовым OLED-экраном XDR.",
        image: "public/iphone14promax.png",
        price: 1000,
      },
      {
        id: 9,
        title: "Iphone16",
        description:
          "Стеклянная или пластиковая крышка используется для покрытия экрана и защиты ядра.",
        image: "public/iphone16.png",
        price: 18476,
      },
      {
        id: 10,
        title: "Iphone-se",
        description: "Разрешение экрана: 1334 x 750 пикселей (326 ppi)",
        image: "public/iphonece.png",
        price: 900,
      },
      {
        id: 12,
        title: "Iphone8-plus",
        description: "разрешение касания: 1920 x 1080 пикселей (401 ppi)",
        image: "public/iphone8plus.png",
        price: 1400,
      },
      {
        id: 13,
        title: "Iphone16-pro-max",
        description:
          "Размер экрана: 6,9 дюйма (самый большой экран в истории iPhone)",
        image: "public/iphone16promax.png",
        price: 2000,
      },
    ],
  };

  const addToCart = (product) => {
    setCard((prevCard) => [...prevCard, product]);
  };
  const btn = (event) => {
    setLanguage(event.target.value);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const removeFromCart = (id) => {
    setCard((prevCard) => prevCard.filter((item) => item.id !== id));
  };
  const addCard3ToCart = () => {
    const data = cardData[language];
    const card3 = data.find((card) => card.id === 13);
    if (card3) {
      setCard((prevCard) => [...prevCard, card3]);
    }
  };

  const playAudio = () => {
    const audio = new Audio(
      "public/music/bubble-pop-4-323580-[AudioTrimmer.com].mp3"
    );
    audio.play();
  };

  const secondSectionRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    setMessage(true);
    setTimeout(() => setMessage(false), 5000);
  };

  const totalPrice = card.reduce((total, item) => total + item.price, 0);

  const filteredData = cardData[language].filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const openModal = () => {
    setNewModal(true);
  };

  return (
    <div className="App">
      <div className="bg">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="div1">
            <a>Apple․</a>
            <select onChange={btn}>
              <option value="Uzb">uzb</option>
              <option value="Rus">rus</option>
            </select>
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="message-box top-message"
                >
                  <span className="message-text">
                    {language === "Uzb"
                      ? "Siz harid qilindingiz!"
                      : "Вы куплены!"}
                    <br />
                    <span>
                      {language === "Uzb"
                        ? "Maxsulot savatda"
                        : "Товар находится в корзине"}
                    </span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="input">
              <img src="public/images.png" alt="" />
              {language === "Uzb" ? (
                <input
                  type="text"
                  placeholder="Qidirish"
                  value={searchTerm}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              ) : (
                <input
                  type="text"
                  placeholder="поиск"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              )}
            </div>
          </div>
          <div className="div2">
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => {
                setModal(true);
              }}
            ></i>
            <div className="lenght">{card.length}</div>
            <img onClick={openModal} src="public/man.jpg" alt="" />
          </div>
        </motion.nav>

        <motion.section
          id="section1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <AnimatePresence>
            {modal && (
              <Modal
                key="cart-modal"
                addToCart={addToCart}
                setModal={setModal}
                language={language}
                card={card}
                removeFromCart={removeFromCart}
                totalPrice={totalPrice}
              />
            )}
          </AnimatePresence>

          <img src="public/ff90f430108482ac43f3a2bf43e5f5e8_l.jpg" alt="" />

          <motion.div
            className="absolute1"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1>Iphone 16 pro Max</h1>
            {language === "Uzb" ? (
              <p>
                Ekran: 6.9 dyuymli OLED displey, <br />
                2868x1320 piksel oʻlchamda <br />
                va 120 Gts yangilanish chastotasi bilan
              </p>
            ) : (
              <p>
                Экран: 6,9-дюймовый OLED-дисплей, <br />
                2868x1320 пикселейи с <br />
                частотой обновления 120 Гц
              </p>
            )}
            <button
              onClick={() => {
                playAudio();
                handleClick();
                addCard3ToCart();
              }}
            >
              {language === "Uzb"
                ? "Hozir Harid Qiling"
                : "делать покупки сейчас"}
            </button>
          </motion.div>

          <motion.div
            className="absolute2"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {language === "Uzb" ? (
              <>
                <h3>Narxi:24 000 000 so'm</h3>
                <p>
                  256 GB modeli: taxminan 20 639 000 so'mdan <br /> 24 000
                  000 so'mgacha.
                </p>
                <h4>
                  Rp 19 000 000{" "}
                  <i className="fa-regular fa-circle-right"></i>
                </h4>
              </>
            ) : (
              <>
                <h3>Цена: 24 000 000 сум </h3>
                <p>
                  Модель на 256 ГБ: примерно от 20 639 000 <br /> сум до 24
                  000 000 сум.
                </p>
                <h4>
                  Rp 19 000 000{" "}
                  <i className="fa-regular fa-circle-right"></i>
                </h4>
              </>
            )}
          </motion.div>
        </motion.section>
        <motion.section
          ref={secondSectionRef}
          id="section2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="header">
            {language === "Uzb" ? (
              <h1>Bizning Mahsulotlar</h1>
            ) : (
              <h1>Наши продукты</h1>
            )}
          </div>
          <div className="card-box">
            {filteredData.length === 0 ? (
              <p>
                {language === "Uzb"
                  ? "Hech narsa topilmadi"
                  : "Ничего не найдено"}
              </p>
            ) : (
              filteredData.map((product, index) => {
                const isLeft = Math.floor(index / 2) % 2 === 0;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: isLeft ? -150 : 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Card
                      addToCart={addToCart}
                      setCard={setCard}
                      product={product}
                      language={language}
                      title={product.title}
                      description={product.description}
                      image={product.image}
                      playAudio={playAudio}
                    />
                  </motion.div>
                );
              })
            )}
          </div>
        </motion.section>

        <Section3
          language={language}
          images={images}
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
        <Section4
          cards={cards}
          isModalOpen={isModalOpen}
          language={language}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        <Footer language={language} />
        {newModal && (
          <NewModal setNewModal={setNewModal} language={language} />
        )}
      </div>
    </div>
  );
}

export default App;``