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
            <h1 class="title___Tm0Tt">Skade og Vejhjælp</h1>
            <div class="markdown___35KUH description___16IX9">

            </div>
            <div class="body___cvucF">
              <div class="markdown___35KUH html-block___G4sWQ">
                <h2 class="pad-header--m"><strong>Hvad gør jeg hvis jeg får en skade?</strong></h2>
                <p>
                  Hvis din bil får en skade under din abonnementsperiode, skal
                  du køre den på et autoriseret værksted for at få den udbedret.
                  Såfremt skaden er forsikringsdækket, skal den anmeldes til
                  forsikringen (uden NemId)
                  <a href="https://www.topdanmark.dk/anmeld-skade/">her.</a>
                </p>
                <p>
                  For spørgsmål omkring forsikringen kontakt<br /><strong
                    >TopDanmark på</strong
                  >
                  <strong>tlf.: 7011 3311</strong>
                </p>
                <p>
                  Ved et uheld anbefaler vi dig at tage billeder af uheldet og
                  få kontaktoplysninger samt registreringsnummer på en evt.
                  modpart.
                </p>
                <p>
                  Selvrisikoen er 5.000 kr. pr. skade med mindre, du har tilkøbt
                  en lavere selvrisiko.
                </p>
                <p>
                  Læs mere om vores vejhjælp <a href="/faq/vejhjaelp">her </a>
                </p>
                <p></p>
                <h2 class="pad-header--m">
                  <strong
                    >Hvad gør jeg hvis jeg får et stenslag i ruden?</strong
                  >
                </h2>
                <p>
                  Hvis din bil får et stenslag under din abonnementsperiode,
                  bedes du få det udbedret med det samme hos&nbsp;Ryds Bilglas
                  <strong>Tlf.: 2968 1392</strong>
                </p>
                <p>
                  Hvis stenslaget kan udbedres med en limning og dermed
                  lovliggøre ruden dækkes det af Bilabonnement A/S og er således
                  gratis for dig.
                </p>
                <p>
                  Hvis det ikke kan repareres vil rudeskift være på egen
                  regning, ring gerne til os, så kan vi hjælpe med en god pris
                  på rudeskift.<br/>

                </p>
                <a href="tel:89885080"> <p>Bilabonnement Support Tlf.: 8988 5080.</p></a>
                <h2 class="pad-header--m">
                  <strong
                    >Hvad gør jeg hvis bilen har tekniske problemer?</strong
                  >
                </h2>
                <p>
                  Hvis din bil mod forventning skulle få tekniske problemer,
                  skal du kontakte vores </p>

                  <a href="tel:89885080">kundeservice på tlf.: 8988 5080</a>
                <p>  mandag til fredag 09:00 – 16:30. </p>

                <p></p>
                <p>
                  Får du tekniske problemer med bilen uden for vores åbningstid,
                  kan du kontakte mærkets mobilitetsservice, som har åbent 24
                  timer i døgnet:
                </p>
                <p><strong><a href="tel:70101092">Citroën tlf.: 7010 1092</a></strong></p>
                <p><strong><a href="tel:80608800">Fiat tlf.: 8060 8800</a></strong></p>
                <p><strong><a href="tel:80608800">Jeep tlf.: 8060 8800</a></strong></p>
                <p><strong><a href="tel:33327000">Mitsubishi tlf.: 3332 7000</a></strong></p>
                <p><strong><a href="tel:80303003">Opel tlf.: 8030 3003</a></strong></p>
                <p><strong><a href="tel:86213483">Peugeot tlf.: 8621 3483</a></strong></p>
                <p><strong><a href="tel:80889353">Renault tlf.: 8088 9353</a></strong></p>
                <p><strong><a href="tel:79424247">Volvo tlf.: 7942 4247</a></strong></p>
                <p></p>
                <p>
                  Vær opmærksom på at udefra kommende fejl/påvirkninger ikke er
                  dækket – det kunne eksempelvis være en punktering, hvor vi i
                  stedet anbefaler at du bruger lappesættet i bilens bagagerum.
                </p>
                <p></p>
                <h2 class="pad-header--m">
                  <strong
                    >Hvad gør jeg hvis jeg skal bruge vejhjælp i
                    udlandet?</strong
                  >
                </h2>
                <p>
                  Inden du kører til udlandet anbefaler vi dig at downloade
                  SOS-appen, da der her er alle nødvendige informationer såfremt
                  du kommer ud for et uheld eller får problemer med bilen.
                </p>
                <p>
                  Hvis du bruger appen kan SOS også finde ud af din nøjagtige
                  lokation.
                </p>
                <a href="tel:+4570105052">
                  <p>
                    <strong>Du kan også kontakte SOS - 24 timer i døgnet på tlf.: +45 7010 5052.</strong>
                  </p>
                </a>
                <p></p>
                <p></p>
              </div>
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
