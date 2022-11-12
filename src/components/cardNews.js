class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode:"open" })
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous")

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const picture = document.createElement("img");
        picture.src = this.getAttribute("photo") || "./assets/img/default-image.jpg";
        picture.alt = "Foto da notícia"

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        cardRight.appendChild(picture);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 60%;
            -webkit-box-shadow: 11px 10px 40px 4px rgba(0, 0, 0, 0.68);
            -moz-box-shadow: 11px 10px 40px 4px rgba(0, 0, 0, 0.68);
            box-shadow: 11px 10px 20px 4px rgba(250, 249, 249, 0.452);
            display: flex;
            justify-content: space-between;
            margin: 1rem auto;
            padding: 1rem;
            background-color: rgba(240, 248, 255, 0.699);
        }        
        
        .card-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }       
        
        .card-left>span {
            font-weight: bold;
        }
        
        .card-left > a {
            margin-top: 15px;
            font-size: 25px;
            font-weight: bold;
            text-decoration: none;
            color: black;
        }
        
        .card-left > p {
            color: rgb(107, 107, 107);
        }
        
        .card-right > img {
            width: 300px;
        }
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);
