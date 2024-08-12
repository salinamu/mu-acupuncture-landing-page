
class SecondaryButton extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        const pageLink = this.dataset.pageLink || 'index.html';
        const icon = this.dataset.icon || 'none';
        const direction = this.dataset.direction || 'right';
        const colorMode = this.dataset.colorMode || 'light';
        let iconHTML = '';
        if (icon==='true') {
            iconHTML = '<span><slot name = "icon"></slot></span><span id = "divider"></span>';
        }
        const commonHTML = `
                <link rel = "stylesheet" href = "css/styles.css">
                <link rel = "stylesheet" href = "css/SecondaryButton.css">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>`;

        if (direction==='right')
            {
                this.shadowRoot.innerHTML = `${commonHTML}
                <a href="${pageLink}"
                        ><button class="secondary ${colorMode}">${iconHTML}
                          <div><slot name = "text">Text</slot></div>
                          <span><slot name = "arrow"></slot>
                          </span>
                        </button></a>
                `;
            }
            else 
                {
                    this.shadowRoot.innerHTML += `
                    <a
                            href="${pageLink}"
                            ><button class="secondary ${colorMode}"><span><slot name = "icon"></slot></span><span id = "divider"></span>
                            <span><slot name = "icon"></slot></span>
                              <div><slot class = "text">Text</slot></div>
                              
                            </button></a
                          >
                    `;
                }
        
    }
    
  }
  customElements.define('secondary-button', SecondaryButton);
  
  