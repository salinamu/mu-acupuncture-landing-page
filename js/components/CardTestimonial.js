class CardTestimonial extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback() {
        const titleFragments = this.dataset.titleFragments || 1;
        let title = ``;
        for (let i=1; i<=titleFragments; i++) {
            title+=`<span class="label"><slot name = "title-fragment${i}">-title fragment${i}-</slot></span>`;
        }
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "css/styles.css">
        <link rel = "stylesheet" href = "css/CardTestimonial.css">
              <div class="card">
                <div class="card-content">
                  <div class="testimonial-label">`+ title + `</div>
                  <div class="p">
                    <slot name = "paragraph">paragraph</slot>
                  </div>
                  <div class="p">
                  <slot name = "name">name</slot>
                  </div>
                </div>
                </div>
                `;
    }

}
customElements.define('card-testimonial', CardTestimonial);