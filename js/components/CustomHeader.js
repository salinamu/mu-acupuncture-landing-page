class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const indexPathPrefix = this.dataset.indexPathPrefix || "./";
    const pagesPathPrefix = this.dataset.pagesPathPrefix || "html/";
    const cssPathPrefix = this.dataset.cssPathPrefix || "css/";
    const imagesPathPrefix = this.dataset.imagesPathPrefix || "images/";

    this.shadowRoot.innerHTML = `
 <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <link rel="stylesheet" href="${cssPathPrefix}CustomHeader.css" />

<header>
      <div class="secondary-nav">
        <div class="secondary-nav-inner fade-in">
          <div class="element-block">
            <a
              href="https://maps.app.goo.gl/SJuPAQXwfW3CB9Ys6"
              class="menu-item hover"
              id="menu-item-location"
            >
              <span class="material-symbols-rounded"> location_on </span>
              <div class="text-area">300 Beardsley Ln, Austin, TX 78746</div>
            </a>
            <a
              class="menu-item hover"
              id="menu-item-phone"
              href="tel:+5123630676"
            >
              <span class="material-symbols-rounded"> call </span>
              <div class="text-area">512-363-0676</div>
            </a>
          </div>
          <div class="menu-item" id="menu-item-rating">
            <div>
              <span class="material-symbols-rounded"> star </span>
              <span class="material-symbols-rounded"> star </span>
              <span class="material-symbols-rounded"> star </span>
              <span class="material-symbols-rounded"> star </span>
              <span class="material-symbols-rounded"> star </span>
            </div>
            <div class="text-area">
              on
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJc0Fdt5dKW4YRirflyye5Wfk"
                class="hover-color"
                >Google</a
              >
              and
              <a
                href="https://www.yelp.com/biz/jian-hua-mu-lac-austin?uid=e5oygZxEX1GO3F3vasCCcw&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
                class="hover-color"
                >Yelp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="primary-nav">
          <div class="navbar">
            <div class="navbar-inner fade-in">
              <div id="menu-button-spacer"></div>
              <a
                class="menu-item hover"
                href="${pagesPathPrefix}new-patients.html"
                id="menu-item-new-patients"
              >
                <div class="menu-label">New Patients</div>
              </a>
              <a
                class="menu-item hover"
                href="${pagesPathPrefix}contact.html"
                id="menu-item-contact"
              >
                <div class="menu-label">Contact</div>
              </a>
              <a href="${indexPathPrefix}index.html">
                <img
                  class="logo"
                  src="${imagesPathPrefix}mu-acupuncture-primary-logo.svg"
              /></a>
              <div class="collapsible" id="menu-item-treatments">
                <a class="menu-item hover">
                <div class = "element-block">
                  <div class="menu-label">
                    Treatments</div><span class="material-symbols-rounded">
                      keyboard_arrow_down
                    </span>
                </div>
                  
                </a>
                <div class="collapsible-content">
                  <ul>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}treatments.html">View all</a>
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}acupuncture.html">Acupuncture</a>
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}cupping.html">Cupping</a>
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}chinese-herbs.html">Chinese Herbs</a>
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}electroacupuncture.html"
                        >Electroacupuncture</a
                      >
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}moxibustion.html">Moxibustion</a>
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}auriculotherapy.html">Auriculotherapy</a>
                    </li>

                  </ul>
                </div>
              </div>
              <a class="menu-item hover" href="${pagesPathPrefix}about.html" id="menu-item-about">
                <div class="menu-label">About</div>
              </a>
              <div id="menu-button">
                <span id="open-menu-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            </div>
          </div>

          <div class="nav-drawer">
            <ul class="nav-drawer-inner">
              <li class="spacer"></li>

              <li class="menu-item" id="nav-drawer-new-patients">
                <a class="hover" href="${pagesPathPrefix}new-patients.html">New patients</a>
              </li>
              <li class="menu-item" id="nav-drawer-about">
                <a class="hover" href="${pagesPathPrefix}about.html">About</a>
              </li>
              <li
                class="menu-item collapsible on-click"
                id="nav-drawer-treatments"
              >
                <a class="hover"
                  ><div class="menu-label">
                    Treatments<span class="material-symbols-rounded arrow-down">
                      keyboard_arrow_down
                    </span>
                  </div></a
                >
                <div class="collapsible-content">
                  <ul>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}treatments.html">View all</a>
                    </li>                    
                    <li>
                      <a class="hover" href="${pagesPathPrefix}acupuncture.html">Acupuncture</a>
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}cupping.html">Cupping</a>
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}chinese-herbs.html"
                        >Chinese Herbs</a
                      >
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}electroacupuncture.html"
                        >Electroacupuncture</a
                      >
                    </li>
                    <li>
                      <a class="hover" ref="${pagesPathPrefix}moxibustion.html">Moxibustion</a>
                    </li>
                    <li>
                      <a class="hover" href="${pagesPathPrefix}auriculotherapy.html">Auriculotherapy</a>
                    </li>
                    <li class="spacer"></li>

                  </ul>
                </div>
              </li>
              <li class="menu-item" id="nav-drawer-contact">
                <a class="hover" href="${pagesPathPrefix}contact.html">Contact</a>
              </li>
              <li class="spacer"></li>
              <li class="spacer"></li>
              <li class="spacer"></li>
              <li class="spacer"></li>


            </ul>
          </div>
        </div>
      </div>
    </header>

`;

    const primaryNav = this.shadowRoot.querySelector(".primary-nav");
    const primaryNavbar = this.shadowRoot.querySelector(".primary-nav .navbar");
    const navLogo = this.shadowRoot.querySelector(".navbar .logo");
    const navDrawer = this.shadowRoot.querySelector(".nav-drawer");
    const menuButton = this.shadowRoot.querySelector("#menu-button");
    const body = document.body;
    const primaryNavbarCollapsibles =
      primaryNavbar.querySelectorAll(".collapsible");
    const navDrawerCollapsibles = navDrawer.querySelectorAll(".collapsible");
    const onClickCollapsibles = this.shadowRoot.querySelectorAll(
      ".collapsible.on-click"
    );

    handlePrimaryNavbarCollapsibles();
    handleToggleNavDrawer();
    handleOnClickCollapsibles();
    menuButton.addEventListener("click", function () {
      navDrawer.classList.toggle("open");
      closeNavDrawerCollapsibles();
      handleToggleNavDrawer();
    });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", (event) => {
      if (window.innerWidth > 1045 && navDrawer.classList.contains("open")) {
        navDrawer.classList.remove("open");
        handleToggleNavDrawer();
      }
    });

    function handleToggleNavDrawer() {
      handleScroll();
      if (navDrawer.classList.contains("open")) {
        window.removeEventListener("scroll", handleScroll);
        menuButton.classList.add("close");
        setNavbarScrolled(true);
        body.classList.add("noscroll");
        primaryNavbar.classList.remove("drop-shadow");
      } else {
        window.addEventListener("scroll", handleScroll);
        menuButton.classList.remove("close");
        body.classList.remove("noscroll");
      }
    }

    function handleScroll() {
      if (window.scrollY >= 10) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    }

    function handlePrimaryNavbarCollapsibles() {
      primaryNavbarCollapsibles.forEach((collapsible) => {
        const content = collapsible.querySelector(".collapsible-content");
        const menuLabel = collapsible.querySelector(".menu-label");
        const menuItem = collapsible.querySelector(".menu-item");

        collapsible.addEventListener("mouseenter", () => {
          menuLabel.classList.add("stay-hovered");
          menuItem
            .querySelector(".material-symbols-rounded")
            .classList.add("stay-hovered");

          content.classList.add("open");
        });

        collapsible.addEventListener("mouseleave", () => {
          content.classList.remove("open");
          menuLabel.classList.remove("stay-hovered");
          menuItem
            .querySelector(".material-symbols-rounded")
            .classList.remove("stay-hovered");
        });
      });
    }

    function closeNavDrawerCollapsibles() {
      navDrawerCollapsibles.forEach((collapsible) => {
        const content = collapsible.querySelector(".collapsible-content");
        const menuLabel = collapsible.querySelector(".menu-label");
        content.classList.remove("open");
        collapsible.querySelector(".arrow-down").classList.remove("rotate180");
        menuLabel.classList.remove("stay-hovered");
      });
    }
    function handleOnClickCollapsibles() {
      onClickCollapsibles.forEach((collapsible) => {
        const content = collapsible.querySelector(".collapsible-content");
        const menuLabel = collapsible.querySelector(".menu-label");
        collapsible.addEventListener("click", () => {
          content.classList.toggle("open");
          collapsible
            .querySelector(".arrow-down")
            .classList.toggle("rotate180");
          menuLabel.classList.toggle("stay-hovered");
        });
      });
    }

    function setNavbarScrolled(scrolled) {
      if (scrolled) {
        primaryNav.classList.add("scrolled");
        primaryNavbar.classList.add("color-change");
        primaryNavbar.classList.add("drop-shadow");
        navLogo.classList.add("scrolled");
        menuButton.classList.add("color-change");
      } else {
        primaryNav.classList.remove("scrolled");
        primaryNavbar.classList.remove("color-change");
        primaryNavbar.classList.remove("drop-shadow");
        navLogo.classList.remove("scrolled");
        menuButton.classList.remove("color-change");
      }
    }
  }
}

customElements.define("custom-header", CustomHeader);
