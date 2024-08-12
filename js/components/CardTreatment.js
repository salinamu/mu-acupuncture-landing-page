
class CardTreatment extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const imageSrc = this.dataset.imageSrc || 'https://placehold.co/400';
    const pageLink = this.dataset.pageLink || 'https://www.google.com/';
    this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "css/styles.css">

    <link rel = "stylesheet" href = "css/CardTreatment.css">
    <link rel = "stylesheet" href = "css/SecondaryButton.css">

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
            <div class="card">
                <a href="${pageLink}">
                  <div class="card-content">
                    <div class="image-frame">
                      <img loading="lazy" src="${imageSrc}" />
                    </div>
                    <div class="text-area">
                      <div class="label">
                        <slot name="treatment-type">Treatment-type</slot>
                      </div>
                      <secondary-button
                data-icon = 'none'
                  data-page-link="${pageLink}"
                  data-color-mode="light"
                >
                 <span slot="text">Learn more</span
                  ><span
                    slot="arrow"
                    class="material-symbols-rounded arrow-right"
                  >
                    arrow_right_alt
                  </span></secondary-button
                >
                    </div>
                  </div>
                </a>
              </div>
              `;
  }
}

customElements.define("card-treatment", CardTreatment);
