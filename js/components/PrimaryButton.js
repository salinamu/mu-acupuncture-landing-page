
class PrimaryButton extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        const pageLink = this.dataset.pageLink || 'index.html';
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "css/styles.css">
        <link rel = "stylesheet" href = "css/PrimaryButton.css">
        <button
                class="primary"
                onclick="setTimeout(function() {document.location.href='${pageLink}'}, 350)"
              >
                <div><slot name = "text">Text</div>
              </button>
        `;
    }
    
  }
  customElements.define('primary-button', PrimaryButton);
  
  