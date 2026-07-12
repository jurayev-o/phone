// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   TelegramShareButton,
// } from "react-share";
// import { FacebookIcon, TwitterIcon, TelegramIcon } from "react-share";
// function Card({
//   addToCart,
//   title,
//   language,
//   description,
//   image,
//   product,
//   playAudio,
// }) {
//   const shareTitle = `${title} - ${description}`;
//   const shareMessage = `Mahsulot: ${shareTitle}\nNarxi: ${product.price}\n\n${description}`;
//   const shareImage = image;

//   return (
//     <div className="card">
//       <div className="absolute3">
//         <div>
//           <button
//             onClick={() => {
//               addToCart(product);
//               playAudio();
//             }}
//           >
//             {language === "Uzb" ? "Savatga qo'shish" : "Добавить в корзину"}
//           </button>
//         </div>
//         <div className="yuborish">
//           <FacebookShareButton
//             style={{ margin: "0px" }}
//             url={window.location.href}
//             quote={shareMessage}
//             hashtag="#Iphone"
//             media={shareImage}
//           >
//             <FacebookIcon size={35} round />
//           </FacebookShareButton>
//           <TwitterShareButton
//             style={{ margin: "0px" }}
//             url={window.location.href}
//             title={shareMessage}
//           >
//             <TwitterIcon size={35} round />
//           </TwitterShareButton>
//           <TelegramShareButton
//             style={{ margin: "0px" }}
//             url={window.location.href}
//             title={shareMessage}
//           >
//             <TelegramIcon size={35} round />
//           </TelegramShareButton>
//         </div>
//       </div>

//       <img src={image} alt={title} className="card-img" />
//       <div className="card-body">
//         {language === "Uzb" ? (
//           <h3 className="card-title">Nomi: {title}</h3>
//         ) : (
//           <h3 className="card-title">Имя: {title} </h3>
//         )}
//         <p className="card-description">{description}</p>
//         <p className="card-price">{`Narxi: ${product.price} so'm`}</p>
//       </div>
//     </div>
//   );
// }
// export default Card;

import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
} from "react-share";

function Card({
  addToCart,
  title,
  language,
  description,
  image,
  product,
  playAudio,
}) {

  const shareTitle = `${title} - ${description}`;
  const shareMessage = `Mahsulot: ${shareTitle}\nNarxi: ${product.price}\n\n${description}`;

  // public ichidagi rasmlar uchun
  const imgSrc = image?.startsWith("/")
    ? image
    : `/${image}`;

  return (
    <div className="card">

      <div className="absolute3">

        <div>
          <button
            onClick={() => {
              addToCart(product);
              playAudio();
            }}
          >
            {language === "Uzb"
              ? "Savatga qo'shish"
              : "Добавить в корзину"}
          </button>
        </div>


        <div className="yuborish">

          <FacebookShareButton
            url={window.location.href}
            quote={shareMessage}
            hashtag="#Iphone"
          >
            <FacebookIcon size={35} round />
          </FacebookShareButton>


          <TwitterShareButton
            url={window.location.href}
            title={shareMessage}
          >
            <TwitterIcon size={35} round />
          </TwitterShareButton>


          <TelegramShareButton
            url={window.location.href}
            title={shareMessage}
          >
            <TelegramIcon size={35} round />
          </TelegramShareButton>

        </div>

      </div>


      <img
        src={imgSrc}
        alt={title}
        className="card-img"
      />


      <div className="card-body">

        {language === "Uzb" ? (
          <h3 className="card-title">
            Nomi: {title}
          </h3>
        ) : (
          <h3 className="card-title">
            Имя: {title}
          </h3>
        )}


        <p className="card-description">
          {description}
        </p>


        <p className="card-price">
          Narxi: {product.price} so'm
        </p>


      </div>

    </div>
  );
}

export default Card;