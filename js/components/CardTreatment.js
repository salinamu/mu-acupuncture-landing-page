
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
                      <button class="secondary">
                        <div>Learn more</div>
                        <span class="material-symbols-rounded arrow-right">
                          arrow_right_alt
                        </span>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              `;
  }
}

customElements.define("card-treatment", CardTreatment);
/*<template id="card-treatment-template">
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&family=Geologica:wght@100..900&display=swap"
                rel="stylesheet"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
              />
              <link rel="stylesheet" href="css/styles.css" />
              <link rel="stylesheet" href="css/index.css" />
              <div class="card">
                <a href="html/acupuncture.html">
                  <div class="card-content">
                    <div class="image-frame fade-in">
                      <img loading="lazy" src="images/close-up.jpg" />
                    </div>
                    <div class="text-area">
                      <div class="label">
                        <slot name="treatment-type">Acupuncture</slot>
                      </div>
                      <button class="secondary">
                        <div>Learn more</div>
                        <span class="material-symbols-rounded arrow-right">
                          arrow_right_alt
                        </span>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </template>*/
