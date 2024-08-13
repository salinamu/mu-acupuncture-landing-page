
class CustomFooter extends HTMLElement {
  constructor(){
      super();
      this.attachShadow({mode:'open'});
  }
  connectedCallback(){
    const indexPathPrefix = this.dataset.indexPathPrefix || './';
    const pagesPathPrefix = this.dataset.pagesPathPrefix || 'html/';
    const cssPathPrefix = this.dataset.cssPathPrefix || 'css/';
    const imagesPathPrefix = this.dataset.imagesPathPrefix || 'images/';


    let year = new Date().getFullYear();
      this.shadowRoot.innerHTML = `
      <footer>
      <link rel = "stylesheet" href = "${cssPathPrefix}styles.css">
      <link rel = "stylesheet" href = "${cssPathPrefix}CustomFooter.css">
      <div class="footer-inner">
      <ul>
        <a href = "${indexPathPrefix}index.html">
        <img class="logo" src="${imagesPathPrefix}mu-acupuncture-primary-logo.svg" />
        </a>

        <a class="hover" href="${pagesPathPrefix}new-patients.html"
          ><li>New Patients</li></a
        >
        <a class="hover" href="${pagesPathPrefix}about.html"><li>About</li></a>
        <a class="hover" href="${pagesPathPrefix}treatments.html"><li>Treatments</li></a>
        <a class="hover" href="${pagesPathPrefix}contact.html"><li>Contact</li></a>
      </ul>
      <div class="caption">
        <span>&copy </span><span>` + year + `</span
        ><span> Mu Acupuncture & Wellness Clinic. All rights reserved.</span>
      </div>
    </div></footer>`;
  }
  
}
customElements.define('custom-footer', CustomFooter);

