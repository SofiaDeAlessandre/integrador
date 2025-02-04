import products from "./db/products";
import "./sass/main.scss";


const containerProducts = document.getElementById("container-products");

let html = "";
containerProducts.innerHTML = html;

const start = () => {

    const fragment = new DocumentFragment();

  products.forEach((prod) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const article = document.createElement("article");
    article.classList.add("card__article");
    card.appendChild(article);
    const cardImageContainer = document.createElement("div");
    cardImageContainer.classList.add("card__image-container");
    const image = document.createElement("img");
    image.classList.add("card__image");
    image.src = prod.img;
    image.alt = prod.name;
    cardImageContainer.appendChild(image);
    article.appendChild(cardImageContainer);
    const cardContent = document.createElement("div");
    const h2Title = document.createElement("h2");
    h2Title.classList.add("card__heading");
    h2Title.textContent = prod.name;
    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card__description");
    const p = document.createElement("p");
    p.textContent = prod.description;
    const price = document.createElement("p");
    price.textContent = `Precio: $${prod.price}`;
    price.classList.add("card__price");
    const btn = document.createElement("button");
    btn.textContent = "Comprar";
    btn.classList.add("card__button")



    cardContent.appendChild(h2Title);
    cardDescription.appendChild(p);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(price);
    cardContent.appendChild(btn);
    article.appendChild(cardContent);
    fragment.appendChild(card);
  })

  containerProducts.appendChild(fragment)
};

window.addEventListener("DOMContentLoaded", start);

