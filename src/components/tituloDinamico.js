class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        //base do compent
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo"); //Criando um atributo para que seja dinamico.
        
        //estilizando (sófunciona dentro desse component)
        const style = document.createElement("style");
        style.textContent = `
        h1 {
            color: red;
        }`;

        //enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }   
}
customElements.define('titulo-dinamico', TituloDinamico);