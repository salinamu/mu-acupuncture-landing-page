
class CustomFooter extends HTMLElement {
  constructor(){
      super();
      this.attachShadow({mode:'open'});
  }
  connectedCallback(){
    let year = new Date().getFullYear();
      this.shadowRoot.innerHTML = `
      <footer>
      <link rel = "stylesheet" href = "css/styles.css">
      <link rel = "stylesheet" href = "css/CustomFooter.css">
      <div class="footer-inner">
      <ul>
        <a href = "index.html">
        <img class="logo" src="images/mu-acupuncture-primary-logo.svg" />
        </a>

        <a class="hover" href="html/new-patients.html"
          ><li>New Patients</li></a
        >
        <a class="hover" href="html/about.html"><li>About</li></a>
        <a class="hover" href="html/treatments.html"><li>Treatments</li></a>
        <a class="hover" href="html/contact.html"><li>Contact</li></a>
      </ul>
      <div class="caption">
        <span>&copy </span><span>` + year + `</span
        ><span> Mu Acupuncture & Wellness Clinic. All rights reserved.</span>
      </div>
    </div></footer>`;
  }
  
}
customElements.define('custom-footer', CustomFooter);

