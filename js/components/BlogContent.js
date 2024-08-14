
class BlogContent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
      const pageTitle = this.dataset.pageTitle || 'acupuncture';
      const numberOfBullets = this.dataset.numberOfBullets || 1;
      let listItemsHTML = ``;
      let is = 'is';
      let does = 'does';
      if (pageTitle.charAt(pageTitle.length-1)==='s') {
        is = 'are';
        does = 'do'
      }
      for (let i = 0; i<numberOfBullets; i++) {
        listItemsHTML+=`<li class = "p"><slot name = "list-item${i+1}">List item${i+1}</slot></li>`;
      }
      let capitalizedPageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
      let hyphenatedPageTitle = '';
      for (let i = 0; i<pageTitle.length; i++) {
        let currentChar = pageTitle.charAt(i);
        if (currentChar===' ') {
          hyphenatedPageTitle+='-';
        }
        else {
          hyphenatedPageTitle+=currentChar;
        }
      }
      this.shadowRoot.innerHTML = `
      <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <link rel="stylesheet" href="../css/styles.css" />

    <link rel="stylesheet" href="../css/BlogContent.css" />
    <script src="../js/components/PrimaryButton.js" async></script>
    <script src="../js/components/SecondaryButton.js" async></script>
    <script src="../js/components/CustomFooter.js" async></script>
    <script src="../js/components/CustomHeader.js" async></script>

      <style>
        #hero-section .banner {
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url(../images/${hyphenatedPageTitle}.jpg);
        }
      </style>
    
    <custom-header
      data-index-path-prefix="../"
      data-css-path-prefix="../css/"
      data-pages-path-prefix="./"
      data-images-path-prefix="../images/"
    ></custom-header>
    <div class="container" id="hero-section">
      <div class="banner">
        <div class="content">
          <div class="element-block">
            <div class="subheading alt">${capitalizedPageTitle}</div>
            <secondary-button
              data-page-link="./treatments.html"
              data-color-mode="dark"
              data-css-path-prefix="../css/"
              data-direction="left"
            >
              <span slot="text">Treatments</span
              ><span slot="arrow" class="material-symbols-rounded arrow-left">
                arrow_left_alt
              </span></secondary-button
            >
          </div>
        </div>
      </div>
    </div>
    <div id="main-content">
      <div class="section-divider" id="treatments-section">
        <div class="section">
          <div class="grid">
            <div id="table-of-contents">
              <div class="card-content">
                <div class="label">At a glance</div>
                <ol>
                  <li class="p"><a class = "bookmark" href = "#what" class = "underline">What ${is} ${pageTitle}?</a></li>
                  <li class="p"><a class = "bookmark" href = "#how" class = "underline">How ${does} ${pageTitle} work?</a></li>
                  <li class="p"><a class = "bookmark" href = "#treat" class = "underline">What ${does} ${pageTitle} treat?</a></li>
                </ol>
              </div>
            </div>
            <div class="text-area">
              <div class="title-paragraph-block">
              <a class = "anchor" id = "what"></a>
                <div class="title">What ${is} ${pageTitle}?</div>
                <div class="p">
                  <slot name = "what">What</slot>
                </div>
              </div>
              <div class="subtitle-paragraph-block">
              <a class = "anchor" id = "how"></a>
                <div class="subtitle">How ${does} ${pageTitle} work?</div>
                <div class="p">
                <slot name = "how1">How1</slot>
                </div>
                <div class="p">
                <slot name = "how2">How2</slot>
                </div>
              </div>
              <div class="subtitle-paragraph-block">
              <a class = "anchor" id = "treat"></a>
                <div class="subtitle">What ${does} ${pageTitle} treat?</div>
                <div class="p">
                <slot name = "treat">Treat</slot>
                </div>
                <ul>
                  ${listItemsHTML}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner" id="cta">
        <div class="element-block">
          <div class="text-area">
            <span class="subheading accent">Start your </span
            ><span class="subheading alt accent">wellness journey </span>
            <span class="subheading accent">today</span>
          </div>
          <primary-button
            data-css-path-prefix="../css/"
            data-page-link="./contact.html"
            ><span slot="text">Book a visit</span></primary-button
          >
        </div>
      </div>
    </div>
    <custom-footer
      data-index-path-prefix="../"
      data-pages-path-prefix="./"
      data-css-path-prefix="../css/"
      data-images-path-prefix="../images/"
    ></custom-footer>

      `;
      
  const bookmarks = this.shadowRoot.querySelectorAll('.bookmark');
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', (event) => {
      const targetId = bookmark.getAttribute('href').slice(1);
      const targetElement = this.shadowRoot.querySelector('#' + targetId);
      targetElement.scrollIntoView({behavior: "smooth"});
    });

  });
    }
    
  }
  customElements.define('blog-content', BlogContent);
  
  