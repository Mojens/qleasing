<template >
  <div class="main-menu___2JQzT" >
    <div class="content___1_CIc"><RouterLink class="main-menu-logo___1PC85" to="/" title="Quickleasing"><img
      alt="Quickleasing" class="main-menu-logo-image___1Ov1X"
      src="../assets/images/Quickleasing-logo.png"></RouterLink>
      <div class="navigation___2n5eH">
      <button class="burger-button___y0r_B burger-button___1pNrj is-closed___Nbjfz" @click="toggleMenu" ><span class="line___q3Uf4"></span><span
          class="line___q3Uf4"></span><span class="line___q3Uf4"></span></button>
        <div class="menu-items___1o-34 " :class="{ 'is-open___2f-lN': isMenuOpen, 'is-closed___Nbjfz is-closed': !isMenuOpen }">
          <div class="navigation-item___21XPw menu-item___2UedM">
            <a class="main-menu-logo___1PC85" href="https://bilabonnement.dk" title="Bilabonnement"><img
              alt="Quickleasing" class="main-menu-logo-image___1Ov1X" style="object-fit: scale-down; width: 30%; align-content: end; display: flex; justify-content: end; margin-left: auto"
              src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,q_80,w_448/v1/Logos/BILABONNEMENT_rgb_mmahqw.png"></a>
          </div>
          <RouterLink class="navigation-item___21XPw menu-item___2UedM" to="/quickleasing"
                      :to="{ name: 'quickleasing', query: { brand: '' } },{ name: 'quickleasing', query: { model: '' } },{ name: 'quickleasing', query: { pris1: '' } },{ name: 'quickleasing', query: { pris2: '' } }">
            <a class="link___1tInP"
               target="_self" title="Quickleasing">Privatleasing</a>
          </RouterLink>

          <div class="navigation-item___21XPw menu-item___2UedM" >
            <div class="multi-link-button___Av7sq">
              <div class="Collapsible" ><span class="Collapsible__trigger" ><button
                class="mobile-button___nwox_" @click="toggleBrandsCollapsible" >
                    <div class="title___wAdVl" >Mærker</div>
                  </button></span>
                <div class="Collapsible__contentOuter"
                     :class="{ 'is-opened___2MlFy': isBrandsCollapsibleOpen, 'is-closed': !isBrandsCollapsibleOpen }" >
                  <div class="Collapsible__contentInner">
                    <div class="sub-links___J39c2 sub-links___3E1Vu">
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'opel' } }"
                      >
                        Opel
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'volvo' } }"
                      >
                        Volvo
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'audi' } }"
                      >
                        Audi
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'bmw' } }"
                      >
                        BMW
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'citroen' } }"
                      >
                        Citroen
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'fiat' } }"
                      >
                        Fiat
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'ford' } }"
                      >
                        Ford
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'hyundai' } }"
                      >
                        Hyundai
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'skoda' } }"
                      >
                        Skoda
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'ds' } }"
                      >
                        DS
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'peugeot' } }"
                      >
                        Peugeot
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'honda' } }"
                      >
                        Honda
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'renault' } }"
                      >
                        Renault
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'mitsubishi' } }"
                      >
                        Mitsubishi
                      </RouterLink>
                      <RouterLink class="sub-link___TQy79"
                                  :to="{ name: 'specificBrand', params: { brand: 'jeep' } }"
                      >
                        Jeep
                      </RouterLink>

                    </div>
                  </div>
                </div>
              </div>
              <button class="desktop-button___GoCH5">
                <div class="title___wAdVl">Mærker</div>
                <div class="sub-links___J39c2 sub-links___3E1Vu">
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'opel' } }"
                  >
                    Opel
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'volvo' } }"
                  >
                    Volvo
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'audi' } }"
                  >
                    Audi
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'bmw' } }"
                  >
                    BMW
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'citroen' } }"
                  >
                    Citroen
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'fiat' } }"
                  >
                    Fiat
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'ford' } }"
                  >
                    Ford
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'hyundai' } }"
                  >
                    Hyundai
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'skoda' } }"
                  >
                    Skoda
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'ds' } }"
                  >
                    DS
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'peugeot' } }"
                  >
                    Peugeot
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'honda' } }"
                  >
                    Honda
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'renault' } }"
                  >
                    Renault
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'mitsubishi' } }"
                  >
                    Mitsubishi
                  </RouterLink>
                  <RouterLink class="sub-link___TQy79"
                              :to="{ name: 'specificBrand', params: { brand: 'jeep' } }"
                  >
                    Jeep
                  </RouterLink>




                </div>
              </button>
            </div>
          </div>


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

          <div class="navigation-item___21XPw menu-item___2UedM" >
            <div class="multi-link-button___Av7sq">
              <div class="Collapsible" ><span class="Collapsible__trigger" ><button
                class="mobile-button___nwox_" @click="toggleCollapsible" >
                    <div class="title___wAdVl" >Øvrig Information</div>
                  </button></span>
                <div class="Collapsible__contentOuter"
                     :class="{ 'is-opened___2MlFy': isCollapsibleOpen, 'is-closed': !isCollapsibleOpen }" >
                  <div class="Collapsible__contentInner">
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
        <div class="overlay___6CkAr" @click="toggleMenu" :class="{ 'is-visible___1uw99': isMenuOpen, '': !isMenuOpen }"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavigationBar",
  data() {
    return {
      contentHeight: 0,
      isMenuOpen: false,
      isCollapsibleOpen: false,
      isBrandsCollapsibleOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleCollapsible() {
      this.isCollapsibleOpen = !this.isCollapsibleOpen;
      if (this.isCollapsibleOpen) {
        this.contentHeight = this.$refs.contentInner.offsetHeight;
      }
    },
    toggleBrandsCollapsible() {
      this.isBrandsCollapsibleOpen = !this.isBrandsCollapsibleOpen;
      if (this.isBrandsCollapsibleOpen) {
        this.contentHeight = this.$refs.contentInner.offsetHeight;
      }
    },

  },

};
</script>

<style scoped>

.is-closed{
  /* Dont show it, without using display none */

  transition: all 0.3s ease-in-out;
  height: 0;
  overflow: hidden;



}
.is-opened___2MlFy{

  transition: all 0.3s ease-in-out;
}
.navigation___2n5eH .overlay___6CkAr.is-visible___1uw99 {
  pointer-events: all;
  background-color: rgba(0, 0, 0, 0.5);
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
@media screen and (min-width: 64rem) {
  .is-closed {
    overflow: inherit;
  }
  .is-closed___Nbjfz{
    display: block;
  }


}
</style>