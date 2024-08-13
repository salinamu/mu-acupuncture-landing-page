
class FAQItem extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
      this.shadowRoot.innerHTML = `
      <link rel = "stylesheet" href = "../css/styles.css">
      <link rel = "stylesheet" href = "../css/FAQItem.css">
      <link rel = "stylesheet" href = "../css/new-patients.css">
      
          <div class="collapsible">
            <div id="question">
              <div id="question-content">
                <div class="label"><slot name = "question">Question</slot></div>
                <div id="expand-button">
                  <span id="expand-icon"
                    ><div class="line"></div>
                    <div class="line"></div
                  ></span>
                </div>
                
              </div>
              <div class = "hover-effect-rectangle"></div>

            </div>

            <div class="collapsible-content">
            <div id="answer">
              <div class="p"><slot name = "answer">
                Answer</slot>
              </div>
            </div>
          </div>
        </div>
      `;
      const collapsible = this.shadowRoot.querySelector(".collapsible");

      collapsible.addEventListener('click', (event)=> {
        collapsible.classList.toggle('open');

      });
  
    }
    
  }
  customElements.define('faq-item', FAQItem);
  
  