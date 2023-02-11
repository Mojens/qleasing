<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="main-menu___2JQzT">
    <div class="content___1_CIc"><a class="main-menu-logo___1PC85" href="/" title="Quickleasing"><img
          alt="Quickleasing" class="main-menu-logo-image___1Ov1X"
          src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,q_80,w_128/v1/Logos/logo_brands_0922_ltj2wu.svg"></a>
      <div class="navigation___2n5eH">
        <button class="burger-button___y0r_B burger-button___1pNrj"><span class="line___q3Uf4"></span><span
            class="line___q3Uf4"></span><span class="line___q3Uf4"></span></button>
        <div class="menu-items___1o-34 is-closed___Nbjfz">
          <div class="navigation-item___21XPw menu-item___2UedM"><a class="link___1tInP"
              href="https://bilabonnement.dk/" target="_blank" title="Bilabonnement">Bilabonnement</a>
          </div>
          <RouterLink class="navigation-item___21XPw menu-item___2UedM" to="/quickleasing" 
          :to="{ name: 'quickleasing', query: { brand: '' } },{ name: 'quickleasing', query: { model: '' } }">
          <a class="link___1tInP"
              target="_self" title="Quickleasing">Quickleasing</a>
          </RouterLink>
          <RouterLink class="navigation-item___21XPw menu-item___2UedM" to="/maerker"><a class="link___1tInP"
              target="_self" title="mærker">Mærker</a>
          </RouterLink>
          <RouterLink class="navigation-item___21XPw menu-item___2UedM" to="/faq"><a class="link___1tInP" target="_self"
              title="FAQ">FAQ</a></RouterLink>
          <RouterLink class="navigation-item___21XPw menu-item___2UedM" to="/forsikring-priser"><a class="link___1tInP"
              target="_self" title="Forsikring">Forsikring</a>
          </RouterLink>
          <RouterLink class="navigation-item___21XPw menu-item___2UedM" to="/vaerksteder"><a class="link___1tInP"
              target="_self" title="Værksteder">Værksteder</a>
          </RouterLink>
          <RouterLink class="navigation-item___21XPw menu-item___2UedM" to="/kontakt"><a class="link___1tInP"
              target="_self" title="Kontakt">Kontakt</a>
          </RouterLink>

          <div class="navigation-item___21XPw menu-item___2UedM">
            <div class="multi-link-button___Av7sq">
              <div class="Collapsible"><span class="Collapsible__trigger is-closed"><button
                    class="mobile-button___nwox_">
                    <div class="title___wAdVl">Øvrig Information</div>
                  </button></span>
                <div class="Collapsible__contentOuter"
                  style="height:0;-webkit-transition:height 300ms linear;-ms-transition:height 300ms linear;transition:height 300ms linear;overflow:hidden">
                  <div class="Collapsible__contentInner">
                    <div class="sub-links___J39c2 sub-links___3E1Vu">
                      <RouterLink class="sub-link___TQy79" target="_self" title="Prøvekøersel" to="/proevekoersel">
                        Prøvekøersel
                      </RouterLink>
                      <a class="sub-link___TQy79" href="/om-bilabonnement" target="_self" title="Om os">Om os</a><a
                        class="sub-link___TQy79" href="https://mit.bilabonnement.dk" target="_blank"
                        title="Mit Bilabonnement">Mit Bilabonnement</a>
                    </div>
                  </div>
                </div>
              </div>
              <button class="desktop-button___GoCH5">
                <div class="title___wAdVl">Øvrig Info</div>
                <div class="sub-links___J39c2 sub-links___3E1Vu">
                  <RouterLink to="/om-os"
                              class="sub-link___TQy79" target="_self" title="Om os">Om os
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79" to="/nem-leasing" target="_self"
                              title="Nem Leasing">Nem Leasing
                  </RouterLink>
                  <RouterLink to="/proevekoersel" class="sub-link___TQy79" target="_self"
                              title="Prøvekøersel" >Prøvekøersel
                  </RouterLink>
                  <RouterLink to="/traek"
                              class="sub-link___TQy79" target="_self" title="Træk">Træk
                  </RouterLink>
                  <RouterLink to="/nyttig-viden"
                              class="sub-link___TQy79" target="_self" title="Nyttig Viden">Nyttig Viden
                  </RouterLink>
                  <RouterLink to="/laanebil"
                              class="sub-link___TQy79" target="_self" title="Lånebil">Lånebil
                  </RouterLink>
                  <RouterLink to="/syn"
                              class="sub-link___TQy79" target="_self" title="Syn">Syn
                  </RouterLink>

                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="overlay___6CkAr"></div>
      </div>
    </div>
  </div>
  <RouterView />
</template>



<style scoped>
.sub-links___J39c2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 15rem;
  padding: 1rem;
  background-color: #fff;
}

@media screen and (min-width: 64rem) {
  .sub-links___J39c2 {
    background-color: #fff;
    -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
}

.sub-links___J39c2 .sub-link___TQy79 {
  padding: 0.5rem;
  color: #101011;
  text-decoration: none;
  text-align: left;
}

.multi-link-button___Av7sq {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.multi-link-button___Av7sq .desktop-button___GoCH5,
.multi-link-button___Av7sq .mobile-button___nwox_ {
  padding: 0.5rem;
  color: #101011;
}

.multi-link-button___Av7sq .desktop-button___GoCH5 {
  display: none;
}

@media screen and (min-width: 64rem) {
  .multi-link-button___Av7sq .mobile-button___nwox_ {
    display: none;
  }

  .multi-link-button___Av7sq .desktop-button___GoCH5 {
    display: block;
  }

  .multi-link-button___Av7sq .desktop-button___GoCH5:hover .sub-links___3E1Vu {
    opacity: 1;
    pointer-events: all;
  }

  .multi-link-button___Av7sq .sub-links___3E1Vu {
    position: absolute;
    top: 2rem;
    right: 0rem;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
  }
}

.multi-link-button___Av7sq .title___wAdVl {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
}

.multi-link-button___Av7sq .title___wAdVl::after {
  content: '';
  width: 0;
  height: 0;
  margin-left: 0.5rem;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #101011;
}

.navigation-item___21XPw {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.navigation-item___21XPw .link___1tInP {
  padding: 0.5rem;
  color: #101011;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
}

.burger-button___y0r_B {
  position: relative;
  width: 25px;
  height: 20px;
  z-index: 999 !important;
  display: block;
  background: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
  overflow: hidden;
}

.burger-button___y0r_B .line___q3Uf4 {
  background-color: #101011;
  display: block;
  margin-top: 7px;
  height: 1px;
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  transition: -webkit-transform 0.2s ease-in-out;
  -o-transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}

.burger-button___y0r_B .line___q3Uf4:first-child {
  margin-top: 0;
}

.navigation___2n5eH {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.navigation___2n5eH .menu-items___1o-34 {
  position: absolute;
  top: 4rem;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 2rem;
  z-index: -1;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  border-top: 1px solid #f2f2f2;
}

.navigation___2n5eH .menu-items___1o-34.is-closed___Nbjfz {
  top: -20rem;
}

@media screen and (min-width: 64rem) {
  .navigation___2n5eH .menu-items___1o-34 {
    position: relative;
    top: 0;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0;
    z-index: 0;
    border-top: none;
  }

  .navigation___2n5eH .menu-items___1o-34.is-closed___Nbjfz {
    top: 0rem;
  }

  .navigation___2n5eH .menu-items___1o-34 .menu-item___2UedM:not(:first-child) {
    margin-left: 1rem;
  }
}

.navigation___2n5eH .burger-button___1pNrj {
  display: block;
}

@media screen and (min-width: 64rem) {
  .navigation___2n5eH .burger-button___1pNrj {
    display: none;
  }
}

.navigation___2n5eH .overlay___6CkAr {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  -webkit-transition: background-color 0.5s ease-in-out;
  -o-transition: background-color 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;
  pointer-events: none;
}

@media screen and (min-width: 74rem) {
  .navigation___2n5eH .overlay___6CkAr {
    display: none;
  }
}

.main-menu-logo___1PC85 {
  height: 100%;
}

.main-menu-logo___1PC85 .main-menu-logo-image___1Ov1X {
  height: 100%;
}

.main-menu___2JQzT {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;

}

.main-menu___2JQzT .content___1_CIc {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem 1.1rem;
  height: 4rem;
}

@media screen and (min-width: 64rem) {
  .main-menu___2JQzT .content___1_CIc {
    padding: 1.8rem;
    height: 6rem;
  }
}


* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

button {
  padding: 0;
  background-color: unset;
  font: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}

a:visited {
  color: inherit;
}
</style>
