<template>
  <div>
    <div id="portal">
      <div
        :class="{ 'is-open___1eAPm': isModalOpen }"
        class="modal___25xvj"
        style="height: 99vh"
      >
        <div class="close-button-wrapper___1dYxl">
          <RouterLink title="Faq" to="/faq">
            <button
              class="button___2oWcS dark___2wNZC button___3129j rounded-corners___2DuU9"
            >
              <svg
                class="icon___3oVL5"
                fill="none"
                height="24"
                stroke="white"
                viewBox="0 0 25 24"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 5L5.5 19"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  d="M19.5 19L5.5 5"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </RouterLink>
        </div>
        <div class="content___FOiFD faq-page___2Nz-F">
          <div class="content___12COd">
            <h1 class="title___Tm0Tt center--all">Vinterdæk</h1>
            <div class="markdown___35KUH description___16IX9">
              <p><code></code></p>
            </div>
            <div class="body___cvucF">
              <span class="wrapper___3jnGF"
                ><span class="mobile-layout___20MjK"
                  ><div class="header-carousel___slJT0">
                    <div class="carousel___2FWTA carousel___pF_rz">
                      <div
                        class="slide-wrapper___3j6eE"
                        style="overflow-x: hidden"
                      >
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
                            style="width: 100%; flex-shrink: 0; overflow: auto"
                          >
                            <div class="carousel-item___3uQ8S">
                              <div class="content___VzQF7">
                                <div class="texts___1vhn4 light___2X9Hf">
                                  <h3 class="headline___sN_Xe"></h3>
                                  <h1 class="title___3LtIp">
                                    <span class="text___A19Im"
                                      >Kør sikkert igennem vinteren med</span
                                    ><span class="name___33seR"
                                      ><div class="text___A19Im">
                                        vinterhjul
                                      </div></span
                                    >
                                  </h1>
                                </div>
                                <div
                                  class="image___15CNk use-image-as-background___1efWp"
                                >
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fill,q_80,w_1280/v1/Vinterd%C3%A6k%20/02.jpgweb_czo6pf.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="image-and-text___1RLvE no-image___39F0p">
                    <div class="">
                      <h2 class="title___2epKF pad-header--m">
                        Vinterhjul til Quickleasings aftaler
                      </h2>
                      <div class="markdown___35KUH text___37D2R">
                        <p>
                          **Bestilling af hjulene foretages via vores support
                          på&nbsp;**<a href="mailto:support@quickleasing.dk"
                            ><strong>support@quickleasing.dk</strong></a
                          >
                        </p>
                        <p>
                          <strong
                            >Vinterhjulspakke til Quickleasing (leje af
                            vinterhjul)</strong
                          >
                        </p>
                        <p>
                          Vinterhjulene vil blive monteret ca. 14 dage efter, vi
                          har modtaget din bestilling.
                        </p>
                        <p>
                          4 stk. komplette vinterhjul med dæk af høj kvalitet, 2
                          x hjulskift hos Quickleasing i Rødovre, afbalancering
                          samt dækopbevaring.
                        </p>
                        <p>
                          Dækskifte kan foretages hos Euromaster Århus, Odense
                          eller Næstved mod et engangsbeløb på 299 kr.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="table-wrapper___1r2Yw">
                    <div class="content___fD8Ja">
                      <div class="tables-wrapper___3TOEv">
                        <div class="original-table-wrapper___le7qO">
                          <table class="basic-table___2sL1d">
                            <thead>
                              <tr>
                                <th class="cell___1FDI8 header___3dKz6">
                                  Start dato
                                </th>
                                <th class="cell___1FDI8 header___3dKz6">
                                  Slut dato
                                </th>
                                <th class="cell___1FDI8 header___3dKz6">
                                  Pris pr. måned
                                </th>
                                <th class="cell___1FDI8 header___3dKz6">
                                  Tillæg for SUV/MPV*
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(row, index) in rows"
                                :key="row.start"
                                :class="{
                                  highlighted___1AED:
                                    index === highlightedRowIndex,
                                }"
                                @mouseleave="removeHighlight()"
                                @mouseover="highlightRow(index)"
                              >
                                <td class="cell___1FDI8">{{ row.start }}</td>
                                <td class="cell___1FDI8">{{ row.end }}</td>
                                <td class="cell___1FDI8">{{ row.price }}</td>
                                <td class="cell___1FDI8">{{ row.addition }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="image-and-text___1RLvE no-image___39F0p">
                    <div class="center--left pad-header--m">
                      <h2 class="title___2epKF pad-header--m center--all">
                        Vinterhjul til Mini-lease aftaler
                      </h2>
                      <div class="header___t2R6I">
                        Vinterhjul til Quickleasing aftaler i samarbejde med
                        Rubberduck.
                      </div>
                      <div class="markdown___35KUH text___37D2R">
                        <p>
                          <strong
                            >Bestilling af hjulene foretages via vores support
                            på&nbsp;<a href="mailto:support@quickleasing.dk"
                              >support@quickleasing.dk</a
                            ></strong
                          >&nbsp;eller i forbindelse med ordre afgivelse.
                        </p>
                        <p>
                          Du vil efter ordregodkendelse blive kontaktet senest
                          72 timer efter af Rubberduck. Begge sæsonskift foregår
                          på din hjemmeadresse, så det er nemt og bekvemt for
                          dig.
                        </p>
                        <p>Prisen inkluderer følgende:</p>
                        <p>
                          -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Leje
                          af 4 x vinterdæk
                        </p>
                        <p>
                          -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 x
                          sæsonskift
                        </p>
                        <p>
                          -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          Opbevaring af bilens sommerdæk i perioden
                        </p>
                        <p>
                          Prisen for leje af vinterhjul for Quickleasing kunder
                          fremgår ved bestilling af bilen.
                        </p>
                        <p>
                          <strong>NB!</strong> Lejeprisen for vinterdæk betales
                          direkte til Rubberduck.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div class=" ">
                      <h2 class="title___2epKF center--all pad-header--m">Hvordan &amp; hvornår?</h2>
                      <div class="markdown___35KUH text___37D2R">
                        <p>
                          <strong>Hvordan foregår hjulskiftet?</strong><br />Når
                          du har afgivet bestillingen via mail, bliver du
                          kontaktet af Quickleasing support, så I kan aftale,
                          hvor og hvornår du ønsker hjulskiftet foretaget.
                          Hjulskiftet tager ca. 20 minutter.
                        </p>
                        <p>
                          Når du som Unlimited kunde til foråret skal have
                          skiftet retur til sommerhjulene, skal du blot kontakte
                          det værksted, der monterede vinterdækkene.
                        </p>
                        <p>
                          <strong
                            >Hvornår ophører vinterhjulaftalen for
                            Unlimited?</strong
                          ><br />Tilvælger du Unlimited vinterhjulspakken, er
                          aftalen fast i bindingsperioden - også selvom du
                          stopper dit Quickleasing før tid.
                        </p>
                        <p>
                          Vær også opmærksom på, at såfremt du ikke får skiftet
                          tilbage til sommerhjul inden udløb af hjulaftalens
                          udløb, vil du blive opkrævet prisen på den valgte
                          pakke for pr. påbegyndt måned.
                        </p>
                        <p>
                          Husk også at efter abonnementsperioden skal bilen
                          leveres tilbage med sommerhjul – uanset årstiden.
                          Se&nbsp;<RouterLink to="/faq/liste-over-priser"
                            >prislisten</RouterLink
                          >for gebyr forbundet med aflevering af bil med
                          vinterhjul.**
                        </p>
                        <p>
                          <strong>Pligttekst:</strong><br />Vi tager forbehold
                          for udsolgte vinterhjulspakker. Der kan være enkelte
                          dækmodeller, som ikke indgår i pakkerne. Alle priser
                          er inkl. moms.
                        </p>
                        <p>
                          Til Limited-aftaler er det en forudsætning at bilen
                          udleveres senest den 31/12-2022.
                        </p>
                        <p>
                          *Bemærk, for SUV og MPV tillægges +299 kr. inkl. moms
                          til det månedlige beløb. Dette gør sig bl.a. gældende
                          for modeller som DS 7, Grand C4, C5 Aircross og
                          Peugeot 3008/5008
                        </p>
                        <p>
                          **Bemærk, gebyret gør sig kun gældende for Unlimited
                          aftaler.
                        </p>
                        <br>
                        <br>
                      </div>
                    </div>
                  </div></span
                ><span class="desktop-layout___3I2bp"
                  ><div class="header-carousel___slJT0">
                    <div class=" ">
                      <div
                        class="slide-wrapper___3j6eE"
                        style="overflow-x: hidden"
                      >
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
                            style="width: 100%; flex-shrink: 0; overflow: auto"
                          >
                            <div class="carousel-item___3uQ8S">
                              <div class="content___VzQF7">
                                <div class="texts___1vhn4 light___2X9Hf">
                                  <h3 class="headline___sN_Xe"></h3>
                                  <h1 class="title___3LtIp">
                                    <span class="text___A19Im"
                                      >Kør sikkert igennem vinteren med</span
                                    ><span class="name___33seR"
                                      ><div class="text___A19Im">
                                        vinterhjul
                                      </div></span
                                    >
                                  </h1>
                                  <div
                                    class="markdown___35KUH text___A19Im"
                                  ></div>
                                </div>
                                <div
                                  class="image___15CNk use-image-as-background___1efWp"
                                >
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fill,q_80,w_1280/v1/Vinterd%C3%A6k%20/02.jpgweb_czo6pf.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" ">
                    <div class="pad-header--m">
                      <h2 class="title___2epKF pad-header--m">
                        Vinterhjul til Quickleasings aftaler
                      </h2>
                      <div class="markdown___35KUH text___37D2R">
                        <p>
                          **Bestilling af hjulene foretages via vores support
                          på&nbsp;**<a href="mailto:support@quickleasing.dk"
                            ><strong>support@quickleasing.dk</strong></a
                          >
                        </p>
                        <p>
                          <strong
                            >Vinterhjulspakke til Quickleasing (leje af
                            vinterhjul)</strong
                          >
                        </p>
                        <p>
                          Vinterhjulene vil blive monteret ca. 14 dage efter, vi
                          har modtaget din bestilling.
                        </p>
                        <p>
                          4 stk. komplette vinterhjul med dæk af høj kvalitet, 2
                          x hjulskift hos Quickleasing i Rødovre, afbalancering
                          samt dækopbevaring.
                        </p>
                        <p>
                          Dækskifte kan foretages hos Euromaster Århus, Odense
                          eller Næstved mod et engangsbeløb på 299 kr.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="table-wrapper___1r2Yw pad-header--m">
                    <div class="content___fD8Ja">
                      <div class="tables-wrapper___3TOEv">
                        <div class="original-table-wrapper___le7qO">
                          <table class="basic-table___2sL1d">
                            <thead>
                              <tr>
                                <th class="cell___1FDI8 header___3dKz6">
                                  Start dato
                                </th>
                                <th class="cell___1FDI8 header___3dKz6">
                                  Slut dato
                                </th>
                                <th class="cell___1FDI8 header___3dKz6">
                                  Pris pr. måned
                                </th>
                                <th class="cell___1FDI8 header___3dKz6">
                                  Tillæg for SUV/MPV*
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(row, index) in rows"
                                :key="row.start"
                                :class="{
                                  highlighted___1AED:
                                    index === highlightedRowIndex,
                                }"
                                @mouseleave="removeHighlight()"
                                @mouseover="highlightRow(index)"
                              >
                                <td class="cell___1FDI8">{{ row.start }}</td>
                                <td class="cell___1FDI8">{{ row.end }}</td>
                                <td class="cell___1FDI8">{{ row.price }}</td>
                                <td class="cell___1FDI8">{{ row.addition }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pad-header--m ">
                    <div class="">
                      <h2 class="title___2epKF pad-header--m">
                        Vinterhjul til Mini-lease aftaler
                      </h2>
                      <div class="header___t2R6I">
                        Vinterhjul til Quickleasing aftaler i samarbejde med
                        Rubberduck.
                      </div>
                      <div class="markdown___35KUH text___37D2R">
                        <p>
                          <strong
                            >Bestilling af hjulene foretages via vores support
                            på&nbsp;<a href="mailto:support@quickleasing.dk"
                              >support@quickleasing.dk</a
                            ></strong
                          >&nbsp;eller i forbindelse med ordre afgivelse.
                        </p>
                        <p>
                          Du vil efter ordregodkendelse blive kontaktet senest
                          72 timer efter af Rubberduck. Begge sæsonskift foregår
                          på din hjemmeadresse, så det er nemt og bekvemt for
                          dig.
                        </p>
                        <p>Prisen inkluderer følgende:</p>
                        <p>
                          -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Leje
                          af 4 x vinterdæk
                        </p>
                        <p>
                          -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 x
                          sæsonskift
                        </p>
                        <p>
                          -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          Opbevaring af bilens sommerdæk i perioden
                        </p>
                        <p>
                          Prisen for leje af vinterhjul for Quickleasing kunder
                          fremgår ved bestilling af bilen.
                        </p>
                        <p>
                          <strong>NB!</strong> Lejeprisen for vinterdæk betales
                          direkte til Rubberduck.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="pad-header--m ">
                    <div class="texts___1Qq4X">
                      <h2 class="title___2epKF pad-header--m">Hvordan &amp; hvornår?</h2>
                      <div class="markdown___35KUH text___37D2R">
                        <p>
                          <strong>Hvordan foregår hjulskiftet?</strong><br />Når
                          du har afgivet bestillingen via mail, bliver du
                          kontaktet af Quickleasing support, så I kan aftale,
                          hvor og hvornår du ønsker hjulskiftet foretaget.
                          Hjulskiftet tager ca. 20 minutter.
                        </p>
                        <p>
                          Når du som kunde med Quickleasing til foråret skal
                          have skiftet retur til sommerhjulene, skal du blot
                          kontakte det værksted, der monterede vinterdækkene.
                        </p>
                        <p>
                          <strong
                            >Hvornår ophører vinterhjulaftalen for
                            Quickleasing?</strong
                          ><br />Tilvælger du Quickleasing vinterhjulspakken, er
                          aftalen fast i bindingsperioden - også selvom du
                          stopper dit Quickleasing før tid.
                        </p>
                        <p>
                          Vær også opmærksom på, at såfremt du ikke får skiftet
                          tilbage til sommerhjul inden udløb af hjulaftalens
                          udløb, vil du blive opkrævet prisen på den valgte
                          pakke for pr. påbegyndt måned.
                        </p>
                        <p>
                          Husk også at efter abonnementsperioden skal bilen
                          leveres tilbage med sommerhjul – uanset årstiden.
                          Se&nbsp;<RouterLink
                            to="/faq/liste-over-priser"

                            >prislisten</RouterLink
                          > for gebyr forbundet med aflevering af bil med
                          vinterhjul.**
                        </p>
                        <p>
                          <strong>Pligttekst:</strong><br />Vi tager forbehold
                          for udsolgte vinterhjulspakker. Der kan være enkelte
                          dækmodeller, som ikke indgår i pakkerne. Alle priser
                          er inkl. moms.
                        </p>
                        <p>
                          Til Mini-leasing-aftaler er det en forudsætning at
                          bilen udleveres senest den 31/12-2022.
                        </p>
                        <p>
                          *Bemærk, for SUV og MPV tillægges +299 kr. inkl. moms
                          til det månedlige beløb. Dette gør sig bl.a. gældende
                          for modeller som DS 7, Grand C4, C5 Aircross og
                          Peugeot 3008/5008
                        </p>
                        <p>
                          **Bemærk, gebyret gør sig kun gældende for
                          Mini-leasing-aftaler.
                        </p>
                      </div>
                    </div>
                  </div></span
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        {
          start: "Fra 1/10-2022",
          end: "31/3-2023",
          price: "499 Kr.",
          addition: "+496 Kr.",
        },
        {
          start: "Fra 1/11-2022",
          end: "31/3-2023",
          price: "549 Kr.",
          addition: "+496 Kr.",
        },
        {
          start: "Fra 1/12-2022",
          end: "31/3-2023",
          price: "599 Kr.",
          addition: "+496 Kr.",
        },
        {
          start: "Fra 1/1-2023",
          end: "31/3-2023",
          price: "649 Kr.",
          addition: "+496 Kr.",
        },
        {
          start: "Fra 1/2-2023",
          end: "31/3-2023",
          price: "699 Kr.",
          addition: "+496 Kr.",
        },
      ],
      highlightedRowIndex: null,
      isModalOpen: false,
      showModal: true,
    };
  },
  mounted() {
    // Add the class "is-open___1eAPm" to the modal when the component is mounted

    setTimeout(() => {
      this.isModalOpen = true;
    }, 20);
  },
  methods: {
    highlightRow(index) {
      this.highlightedRowIndex = index;
    },
    removeHighlight() {
      this.highlightedRowIndex = null;
    },
  },
};
</script>
<style scoped>
.highlighted___1AED {
  background-color: rgba(24, 146, 195, 0.08);
}

.markdown___35KUH a {
  color: #1892c3;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (min-width: 64rem) {
  .markdown___35KUH a {
    font-size: 1rem;
  }
}

.markdown___35KUH a:visited {
  color: #1892c3;
}

.carousel___2FWTA {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 1rem 0;
}

.header-carousel___slJT0 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 1rem 0 2.5rem;
  background-color: #f2f2f2;
}

@media screen and (min-width: 64rem) {
  .header-carousel___slJT0 {
    min-height: 36rem;
  }
}

.header-carousel___slJT0 .carousel___pF_rz {
  width: 100%;
  margin: auto;
}

@media screen and (min-width: 46.75rem) {
  .header-carousel___slJT0 .carousel___pF_rz {
    width: 70%;
  }
}

@media screen and (min-width: 80rem) {
  .header-carousel___slJT0 .carousel___pF_rz {
    width: 85%;
  }
}

@media screen and (min-width: 100rem) {
  .header-carousel___slJT0 .carousel___pF_rz {
    width: 70%;
  }
}

.image-and-text___1RLvE {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 2rem 0;
}

@media screen and (min-width: 64rem) {
  .image-and-text___1RLvE {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 80%;
    padding: 0;
  }
}

@media screen and (min-width: 100rem) {
  .image-and-text___1RLvE {
    width: 65%;
  }
}

.image-and-text___1RLvE.no-image___39F0p .texts___1Qq4X {
  margin: 0 auto;
  text-align: center;
}

.image-and-text___1RLvE .texts___1Qq4X {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: 40rem;
  margin: auto;
  padding: 1rem 2rem 2rem;
}

@media screen and (min-width: 64rem) {
  .image-and-text___1RLvE .texts___1Qq4X {
    padding: 2rem 3rem 3rem;
    margin: 0;
    margin-left: auto;
  }
}

.image-and-text___1RLvE .texts___1Qq4X .title___2epKF {
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

@media screen and (min-width: 64rem) {
  .image-and-text___1RLvE .texts___1Qq4X .title___2epKF {
    margin-bottom: 3rem;
    font-size: 2.2rem;
  }
}

.image-and-text___1RLvE .texts___1Qq4X .header___t2R6I {
  margin: 0.8rem 0 1.2rem;
  font-weight: bold;
}

@media screen and (min-width: 64rem) {
  .image-and-text___1RLvE .texts___1Qq4X .header___t2R6I {
    margin: 1rem 0 1.5rem;
    font-size: 1.2rem;
  }
}

.image-and-text___1RLvE .texts___1Qq4X .text___37D2R {
  max-width: 100%;
}

.image-and-text___1RLvE .texts___1Qq4X .text___37D2R p {
  line-height: 1.3rem;
  margin: 1rem 0;
}
</style>
