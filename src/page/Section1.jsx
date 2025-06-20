import React from 'react'

function Section1({ language }) {
    return (
        <section id="section1">
            <img src="public/ff90f430108482ac43f3a2bf43e5f5e8_l.jpg" alt="" />
            <div className="absolute1">
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
                <button onClick={() => {
                    handleClick()
                    addCard3ToCart()
                }
                }>
                    {language === "Uzb"
                        ? "Hozir Hardid Qiling"
                        : "делать покупки сейчас"}
                </button>
            </div>
            {language === "Uzb" ? (
                <div className="absolute2">
                    <h3>Narxi:24 000 000 so'm</h3>
                    <p>
                        256 GB modeli: taxminan 20 639 000 so'mdan <br /> 24 000 000
                        so'mgacha.
                    </p>
                    <h4>
                        Rp 19 000 000 <i className="fa-regular fa-circle-right"></i>
                    </h4>
                </div>
            ) : (
                <div className="absolute2">
                    <h3>Цена: 24 000 000 сум </h3>
                    <p>
                        Модель на 256 ГБ: примерно от 20 639 000 <br /> сум до 24 000
                        000 сум.
                    </p>
                    <h4>
                        Rp 19 000 000 <i className="fa-regular fa-circle-right"></i>
                    </h4>
                </div>
            )}
        </section>
    )
}

export default Section1
