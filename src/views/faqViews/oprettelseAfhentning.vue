
<template>
  <div>
    <div id="portal">
      <div class="modal___25xvj" style="height: 99vh" :class="{'is-open___1eAPm': isModalOpen}"  >
        <div class="close-button-wrapper___1dYxl">
          <RouterLink to="/faq" title="Faq">
          <button class="button___2oWcS dark___2wNZC button___3129j rounded-corners___2DuU9">

            <svg class="icon___3oVL5" fill="none" height="24" stroke="white" viewBox="0 0 25 24"
                 width="25" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 5L5.5 19" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
              <path d="M19.5 19L5.5 5" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
            </svg>
          </button></RouterLink>
        </div>
        <div class="content___FOiFD faq-page___2Nz-F">
          <div class="content___12COd"><h1 class="title___Tm0Tt">Oprettelse &amp; afhentning</h1>
            <div class="markdown___35KUH description___16IX9"><p></p></div>
            <div class="body___cvucF">
              <div class="markdown___35KUH html-block___G4sWQ"><h4>Hvordan opretter jeg et Quickleasing?</h4>
                <p></p>
                <p>Du kan oprette et Quickleasing ved at lægge en bestilling under den enkelte bilmodel.</p>
                <p>Du kan se hele vores sortiment af biler <a href="/se-alle-biler">her</a>.</p>
                <p></p>
                <h4>Hvilke krav skal man opfylde for at få et Quickleasing?</h4>
                <p></p>
                <ul>
                  <li>Du skal være <strong>fyldt 23 år</strong></li>
                  <li>Du skal have <strong>gyldig opholdstilladelse</strong> i abonnementsperioden</li>
                  <li>For at få et Quickleasing skal du <strong>kreditgodkendes</strong>. Når du har lagt en bestilling
                    på dit Quickleasing, vil du indenfor 2 timer inden for normal åbningstid modtage en mail, hvor du
                    bliver bedt om at indsende dine 3 seneste lønsedler og din seneste årsopgørelse. Du vil dernæst få
                    et svar omkring din kreditvurdering. Vi gør opmærksom på, at vi ikke kan oplyse hvorfor et eventuelt
                    afslag gives. Kreditvurderingen tager typisk 24 timer, på normale arbejdsdage
                  </li>
                </ul>
                <p></p>
                <h4>Hvor lang leveringstid er der på bilerne?</h4>
                <p></p>
                <p>Vi har en leveringstid fra 24 timer med forbehold for eventuelle forsinkelser.</p>
                <p></p>
                <h4>Hvornår betaler jeg første gang?</h4>
                <p>Første betaling vil bliver reserveret ved indgåelse af aftalen, og beløbet vil derefter blive trukket
                  efter udlevering af bilen.</p>
                <p></p>
                <h4>Hvad skal jeg medbringe ved afhentning?</h4>
                <p>Du skal medbringe dit kørekort.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      isModalOpen: false,
      showModal: true

    }
  },
  mounted() {
    // Add the class "is-open___1eAPm" to the modal when the component is mounted

    setTimeout(() => {
      this.isModalOpen = true;
    }, 20);
  },



}
</script>
<style>
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

.html-block___G4sWQ {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.button___2oWcS {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem 1.3rem;
  background-color: var(--button-color);
  color: var(--second-button-color);
  font-weight: 600;
  border-radius: 0.3rem;
  border: 2px solid var(--button-color);
  cursor: pointer;
  -webkit-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  outline: none;
}

.button___2oWcS:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.button___2oWcS.dark___2wNZC {
  --button-color: #101011;
  --second-button-color: #fff;
}

.button___2oWcS.rounded-corners___2DuU9 {
  border-radius: 2rem;
}

.button___2oWcS svg {
  fill: #fff;
  stroke: #fff;
  -webkit-transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
  -o-transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
  transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
}
.modal___25xvj .content___FOiFD {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: var(--secondary-light);
}
.modal___25xvj {
  position: fixed;
  top: 100vh;
  left: 0;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  background-color: #fff;
  -webkit-transition: top 0.5s ease-in-out;
  -o-transition: top 0.5s ease-in-out;
  transition: top 0.5s ease-in-out;
}

.modal___25xvj.is-open___1eAPm, .modal___25xvj.is-open___1eAPm .close-button-wrapper___1dYxl {
  top: 0;
}



.modal___25xvj .close-button-wrapper___1dYxl {
  position: fixed;
  top: 100vh;
  right: 0;
  z-index: 101;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: auto;
  padding: 1rem;
  -webkit-transition: top 0.5s ease-in-out;
  -o-transition: top 0.5s ease-in-out;
  transition: top 0.5s ease-in-out;
}

@media screen and (min-width: 46.75rem) {
  .modal___25xvj .close-button-wrapper___1dYxl {
    padding-left: 2rem;
  }
}

.modal___25xvj .close-button-wrapper___1dYxl .button___3129j {
  padding: 0;
  width: 2.2rem;
  height: 2.2rem;
}

.modal___25xvj .close-button-wrapper___1dYxl .button___3129j .icon___3oVL5 {
  width: 50%;
}

.faq-page___2Nz-F {
  width: 100%;
  padding: 1rem 2rem 4rem;
}

@media screen and (min-width: 46.75rem) {
  .faq-page___2Nz-F  {
    padding: 3rem 2rem 4rem;
  }
}

.faq-page___2Nz-F .content___12COd {
  width: 100%;
  max-width: 70rem;
  padding: 5rem 10rem;
  margin: 0 auto;
  background: var(--base);
}
@media screen and (max-width: 759px){
  .faq-page___2Nz-F .content___12COd {
    width: 100%;
    max-width: 60rem;
    padding: 1rem 2rem;
    margin: 0 auto;
    background: var(--base);
  }
}

.faq-page___2Nz-F .content___12COd .title___Tm0Tt {
  font-size: 2rem;
  margin: 0;
}

@media screen and (min-width: 23rem) {
  .faq-page___2Nz-F .content___12COd .title___Tm0Tt {
    padding: 3rem 0 0 0;
  }
}

@media screen and (min-width: 46.75rem) {
  .faq-page___2Nz-F .content___12COd .title___Tm0Tt {
    font-size: 2.5rem;
    padding: 0;
  }
}

.faq-page___2Nz-F .content___12COd .description___16IX9 {
  margin-top: 1.3rem;
}

.faq-page___2Nz-F .content___12COd .body___cvucF > * {
  margin: unset;
}


button {
  padding: 0;
  background-color: unset;
  font: inherit;

  border: none;
}



</style>