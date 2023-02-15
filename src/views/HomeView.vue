<script setup>
import SearchFilter from "@/components/SearchFilter.vue";
import newestAddedCars from "@/components/newestAddedCars.vue";
import FooterItem from "@/components/FooterItem.vue";
</script>

<template>
  <div>
    <div
      id="section-0-row-0"
      class="grid__row grid__theme section grid__theme--dark grid__theme--middle grid__theme--is-first grid__theme--top-padding ng-star-inserted"
    >
      <div class="container">
        <div id="spot-0000" class="ng-star-inserted"></div>
        <div class="container is-full animate-load ng-star-inserted">
          <div class="container is-fullwidth__searchFilter">
            <div class="hero-spot">
              <!---->
              <picture
                class="hero-spot__media-container--searchFilter ng-star-inserted"
              >
                <img
                  style="
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: center center;
                    opacity: 0.6;
                  "
                  alt="Afhængertræk af bilen er en god ide "
                  class="ng-star-inserted"
                  src="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1550&amp;heightratio=0.4285703125&amp;mode=crop"
                />
                <!----><!----></picture
              >

              <!----><!----><!---->
              <div class="hero-spot__content ng-star-inserted">
                <div class="spot-content">
                  <header class="spot-content__header ng-star-inserted">
                    <!---->
                    <h2 class="spot-content__header--title ng-star-inserted">
                      <span style="opacity: 0"
                        >Quickleasing - Find brugt leasingsbil</span
                      >
                    </h2>
                    <h1>Nemt, Enkelt og</h1>
                    <span class="dynamic__word">{{ changingWord }}</span>
                    <SearchFilter />
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container___1BnaH">
      <span class="wrapper___3jnGF"
        ><span class="mobile-layout___20MjK"
          ><div
            class="banner___2W4p- small___tJeWB white-blue___2fY5Q"
            style="
              background-image: url('https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,e_colorize:,h_480,q_80/v1/Bilabonnement%20Limited%20Edition/508-header.616315_tsewwz.jpg');
            "
          >
            <div class="content-banner___vS5KQ">
              <h1 class="title___1K3fO"></h1>
              <div class="markdown___35KUH description___2z7AW"></div>
            </div>
          </div>
          <div class="spots-list___2DWRP">
            <h2 class="title___2LvNh">Se selv hvor nemt det kan gøres</h2>
            <h3 class="headline___3bXDI">
              5 nemme skridt til en quickleasing bil
            </h3>
            <div class="spots___1YBZo">
              <div class="spot___3TRNI">
                <div class="image___2eXCZ full-circle-image___1T9yg">
                  <img
                    src="@/assets/images/vaelg_bil.png"
                    style="object-fit: scale-down"
                  />
                </div>
                <div class="text___2hHEU">
                  <h4 class="title___1h-xf">Vælg Bil</h4>
                  <div class="markdown___35KUH description___W9AmU">
                    <p>Stort udvalg af brugte biler</p>
                  </div>
                </div>
              </div>
              <div class="spot___3TRNI">
                <div class="image___2eXCZ full-circle-image___1T9yg">
                  <img
                    src="@/assets/images/Tilpas_abonnement.png"
                    style="object-fit: scale-down"
                  />
                </div>
                <div class="text___2hHEU">
                  <h4 class="title___1h-xf">Tilpas abonnementet</h4>
                  <div class="markdown___35KUH description___W9AmU">
                    <p>
                      Du vælger selv hvor længe du vil have bilen, og hvor mange
                      kilometer du vil køre.
                    </p>
                  </div>
                </div>
              </div>
              <div class="spot___3TRNI">
                <div class="image___2eXCZ full-circle-image___1T9yg">
                  <img
                    src="@/assets/images/hvor_og_hvornar.png"
                    style="object-fit: scale-down"
                  />
                </div>
                <div class="text___2hHEU">
                  <h4 class="title___1h-xf">Vælg hvor og hvornår</h4>
                  <div class="markdown___35KUH description___W9AmU">
                    <p>
                      Du vælger selv hvor og hvornår du vil hente bilen, og hvor
                      du vil aflevere den igen.
                    </p>
                  </div>
                </div>
              </div>
              <div class="spot___3TRNI">
                <div class="image___2eXCZ full-circle-image___1T9yg">
                  <img
                    src="@/assets/images/lnsedler_og_kontrakt.png"
                    style="object-fit: scale-down"
                  />
                </div>
                <div class="text___2hHEU">
                  <h4 class="title___1h-xf">
                    Indsend lønsedler og underskriv kontrakt
                  </h4>
                  <div class="markdown___35KUH description___W9AmU">
                    <p>
                      Vi sender dig en leasingkontrakt, som du skal underskrive
                      og sende tilbage sammen med lønsedler.
                    </p>
                  </div>
                </div>
              </div>
              <div class="spot___3TRNI">
                <div class="image___2eXCZ full-circle-image___1T9yg">
                  <img
                    src="@/assets/images/hent_din_nye_bil.png"
                    style="object-fit: scale-down"
                  />
                </div>
                <div class="text___2hHEU">
                  <h4 class="title___1h-xf">Hend din nye bil</h4>
                  <div class="markdown___35KUH description___W9AmU">
                    <p>
                      Hent din nye bil på det tidspunkt og sted, du har valgt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span class="new-html-block___1_7NG"
            ><h2 class="center--all pad-header--s">
              At få en leasingbil via QUICK LEASING er lige så let som dit
              streamingabonnement
            </h2>
            <p style="text-align: center">
              Hos QUICK LEASING har vi gjort det nemt – og billigt – at få
              dækket sit transportbehov. Når du leaser via QUICK LEASING finder
              du en bil i en pris kategori der passer til din økonomi og alle
              vores aftaler er inklusiv forsikring og service, så du skal ikke
              først ud og forhandle med et forsikringsselskab eller spekulere
              over, om bilen kan komme til service, det er indeholdt i den
              samlede leasingydelse.
            </p>
          </span>
          <div class="content___QPcta"></div>
          <span class="new-html-block___1_7NG"></span
          ><span class="spacer___2n7gY small___RGjLY"></span>
          <div class="content___QPcta">
            <div class="divider-wrapper___1QLQs large___1alyA main___3_Hz1">
              <div class="divider___3Bain"></div>
            </div></div
        ></span>

        <span class="desktop-layout___3I2bp"
          ><div class="header-carousel___slJT0">
            <div class="carousel___2FWTA carousel___pF_rz">
              <div class="slide-wrapper___3j6eE" style="overflow-x: hidden">
                <div
                  class="react-swipeable-view-container"
                  style="
                    flex-direction: row;
                    transition: all 0s ease 0s;
                    direction: ltr;
                    display: flex;
                    will-change: transform;
                    transform: translate(0%, 0px);
                  "
                >
                  <div
                    aria-hidden="false"
                    data-swipeable="true"
                    style="
                      width: 100%;
                      -webkit-flex-shrink: 0;
                      flex-shrink: 0;
                      overflow: auto;
                    "
                  >
                    <div class="carousel-item___3uQ8S">
                      <div class="content___VzQF7">
                        <div class="texts___1vhn4 light___2X9Hf">
                          <h3 class="headline___sN_Xe"></h3>
                          <h2 class="title___3LtIp">
                            <h1 class="h--1 text___A19Im">
                              Quickleasing af brugte biler
                            </h1>
                          </h2>
                          <div class="markdown___35KUH text___A19Im"></div>
                        </div>
                        <div
                          class="image___15CNk use-image-as-background___1efWp"
                        >
                          <img
                            alt=""
                            src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fill,q_80,w_1280/v1/Bilabonnement%20Limited%20Edition/508-header.616315_tsewwz.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span class="spacer___2n7gY medium___1nzw6"></span
          ><span class="new-html-block___1_7NG"
            ><h2 class="pad-header--s center--all">
              At få en leasingbil via QUICK LEASING er lige så let som dit
              streamingabonnement
            </h2>
            <p style="text-align: center">
              Hos QUICK LEASING har vi gjort det nemt – og billigt – at få
              dækket sit transportbehov. Når du leaser via QUICK LEASING finder
              du en bil i en pris kategori der passer til din økonomi og alle
              vores aftaler er inklusiv forsikring og service, så du skal ikke
              først ud og forhandle med et forsikringsselskab eller spekulere
              over, om bilen kan komme til service, det er indeholdt i den
              samlede leasingydelse.
            </p> </span
          ><span class="spacer___2n7gY medium___1nzw6"></span>
          <div class="content___QPcta">
            <div class="divider-wrapper___1QLQs main___3_Hz1">
              <div class="divider___3Bain"></div>
            </div>
          </div>
          <span class="new-html-block___1_7NG"></span
          ><span class="spacer___2n7gY medium___1nzw6"></span>

          <div class="logos-grid___1mA7F">
            <h4 class="headline___3wtOx">
              5 simple trin til at starte et bilabonnement
            </h4>
            <div class="react-multi-carousel-list logos___1QY1_">
              <ul
                class="react-multi-carousel-track"
                style="
                  transition: none;
                  overflow: unset;
                  transform: translate3d(0px, 0, 0);
                "
              >
                <li
                  data-index="0"
                  aria-hidden="false"
                  class="react-multi-carousel-item react-multi-carousel-item--active"
                  style="flex: 1 1 auto; position: relative; width: 218px"
                >
                  <a
                    class="logo-link___3nPM5 link___394Eg"
                    target="_self"
                    title="Vælg din bil"
                    href="/home"
                    ><img
                      class="image___29-hw"
                      src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,q_80,w_224/v1/5%20simple%20steps/Vlg_din_bil_800x450_2_tdawsy.png"
                  /></a>
                </li>
                <li
                  data-index="1"
                  aria-hidden="false"
                  class="react-multi-carousel-item react-multi-carousel-item--active"
                  style="flex: 1 1 auto; position: relative; width: 218px"
                >
                  <a
                    class="logo-link___3nPM5 link___394Eg"
                    target="_self"
                    title="Tilpas abonnement"
                    href="/home"
                    ><img
                      class="image___29-hw"
                      src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,q_80,w_224/v1/5%20simple%20steps/Tilpas_abonnement_800x450_2_xiqajf.png"
                  /></a>
                </li>
                <li
                  data-index="2"
                  aria-hidden="false"
                  class="react-multi-carousel-item react-multi-carousel-item--active"
                  style="flex: 1 1 auto; position: relative; width: 218px"
                >
                  <a
                    class="logo-link___3nPM5 link___394Eg"
                    target="_self"
                    title="Vælg hvor og hvornår"
                    href="/home"
                    ><img
                      class="image___29-hw"
                      src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,q_80,w_224/v1/5%20simple%20steps/hvor_og_hvornr_800x450_2_ndg71r.png"
                  /></a>
                </li>
                <li
                  data-index="3"
                  aria-hidden="false"
                  class="react-multi-carousel-item react-multi-carousel-item--active"
                  style="flex: 1 1 auto; position: relative; width: 218px"
                >
                  <a
                    class="logo-link___3nPM5 link___394Eg"
                    target="_self"
                    title="Underskriv kontrakten"
                    href="/home"
                    ><img
                      class="image___29-hw"
                      src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,q_80,w_224/v1/5%20simple%20steps/lnsedler_og_kontrakt_800x450_3_aok9hg.png"
                  /></a>
                </li>
                <li
                  data-index="4"
                  aria-hidden="false"
                  class="react-multi-carousel-item react-multi-carousel-item--active"
                  style="flex: 1 1 auto; position: relative; width: 218px"
                >
                  <a
                    class="logo-link___3nPM5 link___394Eg"
                    target="_self"
                    title="Hent din nye bil"
                    href="/home"
                    ><img
                      class="image___29-hw"
                      src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,q_80,w_224/v1/5%20simple%20steps/Hent_din_nye_bil_800x450_1_wpvi7y.png"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <span class="spacer___2n7gY small___RGjLY"></span
          ><span class="spacer___2n7gY small___RGjLY"></span>
          <div class="content___QPcta">
            <div class="divider-wrapper___1QLQs large___1alyA main___3_Hz1">
              <div class="divider___3Bain"></div>
            </div></div></span
      ></span>
      <div class="home__cards-container">
        <div class="home__cards grid--auto-3 gap--l">
          <div class="home__card">
            <div class="home__card-header">
              <div class="home__card-image-container">
                <img
                  src="https://www.bmcleasing.dk/wp-content/themes/yootheme/cache/Group-136-1-a7d4b116.webp"
                  alt=""
                  class="home__card-image"
                />
              </div>
              <div class="home__card-header-container">
                <h3 class="card__header">Kort opsigelsesfrist</h3>
              </div>
            </div>
            <div class="home__card-body">
              <p class="home__card-text">
                Som noget helt ekstraordinært, så er du ikke som normalt ved
                PRIVATleasing, bundet af en opsigelsesfrist på 11 måneder,
                allerede efter 3 måneders leasing kan du opsige
                leasingkontrakten. Hvis du ønsker at opsige din leasingaftale
                tidligere end efter 11 måneder, med én måneds varsel, koster det
                kun et gebyr på én måneds leasingydelse og det gebyr slipper du
                for, såfremt du ønsker at lease en anden bil samtidig. Hvis du
                ønsker at opsige din leasingaftale, skal du blot sende en mail
                til opsigelse@quickleasing.dk med angivelse af hvornår du ønsker
                at opsige fra samt din bils nummerplade.
              </p>
            </div>
          </div>
          <div class="home__card">
            <div class="home__card-header">
              <div class="home__card-image-container">
                <img
                  src="src/assets/images/if_forsikring_quickleasing.png"
                  alt=""
                  class="home__card-image"
                />
              </div>
              <div class="home__card-header-container">
                <h3 class="card__header">Forsikring</h3>
              </div>
            </div>
            <div class="home__card-body">
              <p class="home__card-text">
                Da det ofte kan være besværligt at forhandle sig til en
                attraktiv forsikringspris, har vi også gjort dette simpelt – vi
                har indgået et samarbejde med IF FORSIKRING, som sikrer dig en
                attraktiv forsikringspræmie baseret på prisen på din leasingbil
                og din alder. Du kan se vores forsikringspræmier
                <RouterLink to="/forsikring-priser">her</RouterLink>.
              </p>
            </div>
          </div>
          <div class="home__card">
            <div class="home__card-header">
              <div class="home__card-image-container">
                <img
                  src="https://www.applusbilsyn.dk/images/logo.png"
                  alt=""
                  class="home__card-image"
                />
              </div>
              <div class="home__card-header-container">
                <h3 class="card__header">Tryghed ved aflevering</h3>
              </div>
            </div>

            <div class="home__card-body">
              <p class="home__card-text">
                Som en ekstra sikkerhed for dig, har vi indgået et samarbejde
                med A-Plus, som gennemgår bilen ved indlevering – herved er du
                sikret, at din leasingbil bliver kontrolleret og gennemgået af
                en uvildig tredjemand, så der ikke er tvivl om hvilken stand
                biler er i ved aflevering. Du kan læse om vores samarbejde med
                A-Plus <a href="https://www.applusbilsyn.dk/">her</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="home__text-section">
        <div class="home__text-header pad-header--m">
          <h2>RETURNERING AF DIN LEASINGBIL.</h2>
        </div>
        <div class="home__text-content">
          <p>
            Vi har gjort det simpelt at aflevere sin leasingbil. Indenfor vores
            åbningstid kan du aftale tid til returnering og gennemgang af din
            leasingbil via vores hjemmeside. Herefter gennemgår vi bilen på det
            aftalte tidspunkt og du får en afleveringsrapport med dig hjem
            bagefter.
          </p>
          <br />

          <p>
            Ønsker du at aflevere bilen ved vores samarbejdspartner A-Plus kan
            du også booke en tid til dette via vores hjemmeside. Herefter kører
            du til A-Plus på det aftalte tidspunkt og får lavet din gennemgang –
            her vil du også få en afleveringsrapport med dig hjem.
          </p>

          <br />
          <p>
            QUICK LEASING gør PRIVATleasing nemt og sikkert – du får fuldt
            overblik over omkostningerne ved at PRIVATlease og dermed sikkerhed
            for de faktiske udgifter. Med en PRIVATleasing hos QUICK LEASING
            skal du kun betale leasingydelse – som altid vil indeholde
            forsikring – grøn ejerafgift og brændstof
          </p>

          <br />
          <p>
            Når du leaser ved QUICK LEASING skal du ikke spekulere på værditab,
            uventede reparationer eller service. Din bil bliver serviceret ved
            alle service hos et af vores QUICK POINT værksteder
          </p>

          <br />
          <p>
            QUICK LEASING sætter en ære i at behandle vores kunder godt og fra
            vores domicil i Rødovre har vi gennem vores mieforskellige selskaber
            udleveret mange tusind biler til tilfredse kunder -QUIUCK LEASING er
            sidste skud på stammen i vores ønske om at servicere og afdække
            vores kunders transportbehov til fornuftige priser.
          </p>
        </div>
      </div>
    </div>
  </div>
  <FooterItem />
</template>
<script>
export default {
  name: "Forside",
  data() {
    return {
      words: ["billigt", "pålidligt", "hurtigt", "Smart"], // list of words to rotate through
      changingWordIndex: 0,
    };
  },
  async created() {
    await this.fetchData();
  },

  computed: {
    changingWord() {
      return this.words[this.changingWordIndex];
    },
  },
  mounted() {
    setInterval(() => {
      this.changingWordIndex = (this.changingWordIndex + 1) % this.words.length;
    }, 2000);
  },
};
</script>

<style>
.home__text-section{
  background: #f2f2f2;
  padding: var(--space-l) var(--section-space-l);
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}


.home__text-header{

}

.home__text-content{

}


.home__cards-container {
  background: #f2f2f2;
  padding: var(--space-l) var(--section-space-l);
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
.home__cards {
}

.home__card {
  margin-bottom: 2rem;
  margin-top: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  background: var(--white);
}

.home__card:hover {
  transform: translateY(-5px);
}

.home__card-header-container {
  background: var(--white);
  padding: 1.5rem 2rem;
}

.home__card-header {
  margin: 0;
  font-size: var(--h4);
  font-weight: bold;
}

.home__card-image-container {
  position: relative;
}

.home__card-image {
  width: 100%;
  display: block;
  object-fit: scale-down;
  height: 15rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: #f2f2f2;
}

.home__card-body {
  padding: 1rem 2rem;
}

.home__card-text {
  margin: 0;
  font-size: calc(var(--text-m) - 0.1rem);
  font-weight: 300;
  line-height: 1.6;
}

@media only screen and (max-width: 768px) {
  .home__card {
    width: 100%;
  }
  .home__cards-container {
    padding: var(--space-s) var(--section-space-xs);
  }
  .home__text-section {
    padding: var(--space-s) var(--section-space-xs);
  }
}

.spots-list___horizontal {
  display: flex;
  flex-direction: row;
}
.dynamic__word {
  color: var(--secondary);
  font-size: var(--h1);
  font-weight: 700;

  text-transform: capitalize;
}
@media screen and (min-width: 1024px) {
  .container.is-fullwidth__searchFilter {
    padding: 0 30.5rem;
  }
}
.hero-spot__media-container--searchFilter {
  position: relative;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: #000;
  overflow: hidden;
  height: 100%;
}

.searchFilter__container {
  width: 100%;
  padding: 20px;
}

.searchFilter__header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.searchFilter__select {
  background-color: #fff;
}

.formkit-option {
  display: flex;
  color: black;
}
.formkit-option img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

/* Borrownig */

@media all {
  ul {
    box-sizing: border-box;
  }
}
@media all {
  .searchandfilter ul {
    display: block;
    margin-top: 0;
    margin-bottom: 0;
  }
  .searchandfilter ul li {
    list-style: none;
    display: block;
    padding: 10px 0;
    margin: 0;
  }
  .searchandfilter label {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .searchandfilter h4 {
    margin: 0;
    padding: 5px 0 10px;
    font-size: 16px;
  }
  .searchandfilter select.sf-input-select {
    min-width: 170px;
  }
}
@media all {
  .uk-padding-extra {
    padding: 80px 0px !important;
  }
}
@media all {
  .uk-background-cover {
    background-size: cover !important;
  }
  .frontpage-search .uk-tile-primary {
    background-color: rgb(4 0 0 / 0%);
  }
  form#search-filter-form-183 ul {
    padding-left: 0px;
  }
  form#search-filter-form-183 select,
  form#search-filter-form-183 label {
    display: block;
    width: 100%;
  }
  form#search-filter-form-183 select {
    height: 40px;
    border: none;
    padding: 0px 10px;
    font-family: "Ubuntu";
    font-size: 18px;
  }
  form#search-filter-form-183 input[type="submit"] {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: #298e21;
    color: #fff;
    font-size: 18px;
    font-family: "Ubuntu";
    box-sizing: border-box;
    height: 40px;
    transition: ease all 0.3s;
  }
  form#search-filter-form-183 input[type="submit"]:hover,
  form#search-filter-form-183 input[type="submit"]:focus {
    cursor: pointer;
    background-color: #222;
  }
}
@media all and (min-width: 960px) {
  form#search-filter-form-183 ul li {
    width: 25%;
    display: inline-block;
    padding: 0px 10px;
    box-sizing: border-box;
  }
}
@media all {
  .searchandfilter ul {
    padding-left: 0px;
  }
  .searchandfilter li input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: 1px solid #555;
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  .searchandfilter li label {
    padding-left: 5px;
    vertical-align: middle;
  }
  .searchandfilter h4 {
    padding: 0px;
    font-weight: 600;
  }
  .searchandfilter select.sf-input-select {
    height: 30px;
    padding: 0px 10px;

    width: 200px;
    margin-top: 5px;
  }
  .searchandfilter li.sf-field-post-meta-pris_pr_md label {
    padding-left: 0px;
  }
  .searchandfilter li input:checked:after {
    content: "\f00d";

    display: flex;
    align-items: center;
    justify-content: center;
  }
}

:focus {
  outline: 0;
}
:focus:not([tabindex^="-"]) {
  outline: 2px dotted #2d2e33;
  outline-offset: 1px;
}
:focus-visible {
  outline: 2px dotted #2d2e33;
}
::selection {
  background: #39f;
  color: #fff;
  text-shadow: none;
}
.uk-heading-medium {
  font-size: 2.8875rem;
  line-height: 1.1;
  color: #2d2e33;
  font-family: Ubuntu;
}
@media (min-width: 960px) {
  .uk-heading-medium {
    font-size: 3.5rem;
  }
}
@media (min-width: 1200px) {
  .uk-heading-medium {
    font-size: 4rem;
  }
}
.uk-section {
  display: flow-root;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 40px;
}
@media (min-width: 960px) {
  .uk-section {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}
.uk-section > :last-child {
  margin-bottom: 0;
}
.uk-section-default {
  background: #fff;
}
.uk-container {
  display: flow-root;
  box-sizing: content-box;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 640px) {
  .uk-container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 960px) {
  .uk-container {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.uk-container > :last-child {
  margin-bottom: 0;
}
.uk-container .uk-container {
  padding-left: 0;
  padding-right: 0;
}
.uk-tile {
  display: flow-root;
  position: relative;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 40px;
  padding-bottom: 40px;
}
@media (min-width: 640px) {
  .uk-tile {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 960px) {
  .uk-tile {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.uk-tile > :last-child {
  margin-bottom: 0;
}
.uk-tile-primary {
  background-color: rgba(255, 11, 11, 0.27);
}
:where(.uk-tile-primary:not(.uk-preserve-color)) > * {
  color: rgba(255, 255, 255, 0.7);
}
.uk-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.uk-grid > * {
  margin: 0;
}
.uk-grid > * > :last-child {
  margin-bottom: 0;
}
.uk-grid {
  margin-left: -20px;
}
.uk-grid > * {
  padding-left: 20px;
}
* + .uk-grid-margin {
  margin-top: 20px;
}
@media (min-width: 1200px) {
  .uk-grid {
    margin-left: -40px;
  }
  .uk-grid > * {
    padding-left: 40px;
  }
  * + .uk-grid-margin {
    margin-top: 40px;
  }
}
.uk-grid-item-match {
  display: flex;
  flex-wrap: wrap;
}
.uk-grid-item-match > :not([class*="uk-width"]) {
  box-sizing: border-box;
  width: 100%;
  flex: auto;
}
[class*="uk-child-width"] > * {
  box-sizing: border-box;
  width: 100%;
}
[class*="uk-width"] {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
}
.uk-text-center {
  text-align: center !important;
}
.uk-background-cover {
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.uk-background-cover {
  background-size: cover;
}
.uk-background-center-center {
  background-position: 50% 50%;
}
.uk-background-norepeat {
  background-repeat: no-repeat;
}
.uk-panel {
  display: flow-root;
  position: relative;
  box-sizing: border-box;
}
.uk-panel > :last-child {
  margin-bottom: 0;
}
.uk-flex {
  display: flex;
}
.uk-flex::after,
.uk-flex::before {
  display: none;
}
.uk-flex-middle {
  align-items: center;
}
.uk-flex-bottom {
  align-items: flex-end;
}
.uk-padding-remove-vertical {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.uk-position-cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.uk-position-relative {
  position: relative !important;
}
.uk-light,
.uk-tile-primary:not(.uk-preserve-color) {
  color: rgba(255, 255, 255, 0.7);
}
.uk-light .uk-heading-medium,
.uk-light h1,
.uk-tile-primary:not(.uk-preserve-color) .uk-h2,
.uk-tile-primary:not(.uk-preserve-color) h4 {
  color: #fff;
}
.uk-light:focus,
.uk-tile-primary:not(.uk-preserve-color):focus {
  outline-color: #fff;
}
.uk-light .uk-heading-medium {
  color: #fff;
}
@media print {
  *,
  ::after,
  ::before {
    background: 0 0 !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
}
.tm-grid-expand > * {
  flex-grow: 1;
}
</style>
