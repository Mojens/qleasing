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
            <h1 class="title___Tm0Tt">Opladning til el &amp; hybridbiler</h1>
            <h3 style="font-style: italic" class="center--left pad-header--m">
              "Vælg det Clever abonnement, der passer til dig"
            </h3>

            <div class="body___cvucF">
              <div class="card-container  pad-header--l">
                <div class="card">
                  <div class="card-header">
                    <h2>CLEVER UNLIMITED</h2>
                    <h4 style="color: var(--secondary)">OPLADNING UDE OG HJEMME</h4>
                  </div>
                  <div class="card-body">

                    <h4 class="pad-header--s">Med clever Unlimited får du:</h4>
                    <ul class="owl--xs">
                      <li >Adgang til Danmarks største ladenetværk</li>
                      <li>Opladning når det passer dig –på farten, på arbejdet, på indkøbsturen eller derhjemme</li>
                      <li>Installation og lån af Clevers intelligente ladeboks</li>
                      <li>Intelligent opladning tilpasset dig, der tager højde for både elpris, CO2-aftryk og elnettets belastning</li>
                      <li>Automatisk tilbagebetaling når du lader hjemme på en del af dine strømomkostninger som du betaler til din elleverandør. Satsen er beregnet på baggrund af gennemsnit af strømpris i tiden kl. 23-06***</li>
                      <li>Mulighed for rabat med clever Power</li>
                      <li>24/7 kundesupport</li>
                    </ul>
                    <h4 class="pad-header--s"> <strong>Månedlig abonnementspris fra 01.01.23.</strong> </h4>
                    <p>Prisen består af et grundabonnement + et variabelt og forbrugsbaseret energitillæg.</p>
                    <p>Tillægget beregnes som den del af den gns. md. strømpris, som overstiger 2,25 kr., x dit kWh-forbrug****</p>
                    <p>Grundabonnement til elbil: 749 kr. frem til 31.03.23. Herefter: 799 kr.*</p>
                    <p>Grundabonnement til plugin-hybridbil: 369 kr. frem til 31.03.23. Herefter 449 kr.*</p>
                    <h4 class="pad-header--s"><strong>Månedlig abonnementspris frem til 31.12.22.</strong></h4>
                    <p>Elbil: 749 kr. + midlertidigt energitillæg: 690 kr.*****</p>
                    <p>Plugin-hybridbil: 369 kr. + midlertidigt energitillæg: 390 kr.*****</p>
                    <h4 class="pad-header--s"><strong>Installation af Clevers ladeboks:</strong></h4>
                    <p>Elbil: 5.995 kr.**</p>
                    <p>Plug-in hybridbil: 7.500 kr.**</p>
                    <h4 class="pad-header--s"><strong>Mindstepris i bindingsperioden (2 mdr.)</strong></h4>
                  </div>
                  <div class="card-footer">

                    <p>Afhænger af startdato og beregnes som 2 x abonnementspris + 2 x energitillæg + installation </p>
                  </div>

                </div>
                <div class="card">
                  <div class="card-header">
                    <h2>CLEVER UNLIMITED NETWORK</h2>
                    <h4 style="color: var(--secondary)">OPLADNING PÅ FARTEN</h4>
                  </div>
                  <div class="card-body">

                    <h4 class="pad-header--s">Med Clever Unlimited Network får du:</h4>
                    <ul class="owl--xs">
                      <li >Adgang til Danmarks største ladenetværk</li>
                      <li> Mulighed for at lade på job, når du handler, på giga-og lynladestationerog ved masser af offentlige ladepunkter</li>
                      <li>Lynladestationer skabt til meningsfulde pauser, mens du lader
                      </li>
                      <li>Clevers app med overblik overladepunkter og ladeforbrug</li>
                      <li>24/7 kundesupport</li>
                    </ul>
                    <h4 class="pad-header--s"> <strong>Månedlig abonnementspris fra 01.01.23.</strong> </h4>
                    <p>Prisen består af et grundabonnement + et variabelt og forbrugsbaseret energitillæg.</p>
                    <p>Tillægget beregnes som den del af den gns. md. strømpris, som overstiger 2,25 kr., x dit kWh-forbrug****</p>
                    <p>Grundabonnement til elbil: 625 kr. frem til 31.03.23. Herefter: 799 kr.*</p>
                    <p>Grundabonnement til plugin-hybridbil: 245 kr. frem til 31.03.23. Herefter 449 kr.*</p>
                    <h4 class="pad-header--s"><strong>Månedlig abonnementspris frem til 31.12.22.</strong></h4>
                    <p>Elbil: 625 kr. + midlertidigt energitillæg: 690 kr.*****

                    </p>
                    <p>Plugin-hybridbil: 245 kr. + midlertidigt energitillæg:390 kr.*****</p>

                    <h4 class="pad-header--s"><strong>Mindstepris i bindingsperioden (2 mdr.)</strong></h4>
                  </div>
                  <div class="card-footer">

                    <p>Afhænger af startdato og beregnes som 2 x abonnementspris + 2 x energitillæg</p>
                  </div>

                </div>
              </div>

                <span class="new-html-block___1_7NG"
                ><p style="text-align: center">
                  Du har mulighed for at læse mere om Clevers
                  produkter&nbsp;<strong
                    ><a
                      href="https://clever.dk/produkter/"
                      rel="noopener noreferrer nofollow"
                      >her</a
                    ></strong
                  >
                </p>
                <p style="text-align: center">&nbsp;</p>
                <p style="text-align: center">
                  <strong>*Abonnement</strong>&nbsp;udbydes af Clever A/S. 14
                  dages fortrydelsesret. Forudsætter BS-betaling. Læs mere:
                  clever.dk/vilkaar.
                </p>
                <p style="text-align: center">
                  <strong>**Installation:</strong>&nbsp;privatadresse i DK;
                  ekstraomk. kan forekomme, fx. ved behov for grave-eller
                  stilladsarbejde mv.&nbsp;
                </p>
                <p style="text-align: center">
                  <strong>***Tilbagebetaling</strong>: hver md. tilbagebetaler
                  Clever et beløb til dig for den mængde strøm, du har brugt på
                  opladning via ladeboksenhjemme: Tilbagebetaling = dit
                  kWh-forbrug X gns. strømpris/kWh (dvs. spotpris, afgifter,
                  tariffer og moms) i DK kl. 23-06 den pgl. md. Du betaler for
                  hele din husstands strømforbrug til din ellevarandør, inkl.
                  forbruget på Clevers ladeboks. Dækningen af dine strømomk. til
                  opladning afhænger af din elaftaleog tidspunktet du lader. Se:
                  clever.dk/tilbagebetaling.&nbsp;
                </p>
                <p style="text-align: center">
                  <strong
                    >****Variabelt og forbrugsbaseret energitillæg fra
                    01.01.23:</strong
                  >&nbsp;pålægges hvis den gns. strømpris/kWh (dvs. spotpris,
                  afgifter, tariffer og moms) er over 2,25 kr./kWh i DK den pgl.
                  md. Tillæg = den del af den gns. md. strømpris/kWh, som
                  overstiger 2,25 kr./kWh x dit md. kWh-forbrug, se:
                  clever.dk/energitillaeg
                </p>
                <p style="text-align: center">
                  <strong
                    >*****Midlertidigt energitillæg frem til 31.12.22:</strong
                  >&nbsp;pga. høje strømpriser. Se mere: clever.dk/energitillaeg
                </p></span
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
};
</script>
<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}


.card {
  width: calc(49% - 20px);

  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: left;
  font-family: Arial, sans-serif;
}

.card-header {
  background-color: var(--primary);
  padding: 2.5rem;
  text-align: center;
  color: white;
  flex-shrink: 0;
}

.card-header h3,
.card-header h4 {
  margin: 0;
}

.card-body {
  padding: 20px;
  color: white;
  background: var(--primary-ultra-dark);
}

.card-footer {
  background-color: var(--primary);
  color: white;
  padding: 20px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media (max-width: 1150px) {
  .card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 750px) {
  .card {
    width: 100%;
    margin: 3rem 0;
  }
}
</style>