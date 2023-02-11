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
            <h1 class="title___Tm0Tt">Øvrige spørgsmål</h1>
            <div class="markdown___35KUH description___16IX9">

            </div>
            <div class="body___cvucF">
              <div class="markdown___35KUH html-block___G4sWQ">
                <h3 class="pad-header--m">
                  Er der udbetaling eller depositum forbundet med
                  abonnementsaftalen?
                </h3>

                <p>
                  Der er hverken udbetaling eller depositum på dit
                  quickleasing.<br />Undtaget er visse kampagnemodeller, samt
                  hvis det er nødvendigt med depositum på aftalen.
                </p>

                <h3 class="pad-header--m">Kan jeg bestille en bil med anhængertræk?</h3>

                <p>
                  Hos Quickleasing har vi få biler med anhængertræk. Det vil
                  fremgå i bilbeskrivelsen af bilen, om der er anhængertræk på
                  bilen. Alternativt, kan du montere anhængertrækket på selv.
                </p>
                <p>
                  Vi gør dig opmærksom på, at bilen i disse tilfælde enten skal
                  leveres tilbage med anhængertrækket på, eller du skal
                  afmontere anhængertrækket, så alt er reetableret ved
                  indlevering af bilen. Er der spor af anhængertrækket, vil
                  dette blive behandlet på lige fod med andre skader, der kan
                  være forekommet i din abonnementsperiode.<br />Bemærk:
                  montering og afmontering af anhængertræk skal foregå hos et
                  autoriseret værksted.<br />For montere dit anhængertræk på
                  bilen bedes du kontakte et autoriseret værksted. Forhandleren
                  skal kontakte Quickleasing A/S på support@quickleasing.dk
                  for at få fat på registreringsattesten, så det er muligt at
                  registrere trækket på registreringsattesten.
                </p>

                <h3 class="pad-header--m">
                  Kan jeg tage min abonnementsbil med på ferie, og hvad skal jeg
                  være opmærksom på, hvis jeg gør?
                </h3>

                <p>
                  Som abonnent har du muligheden for at tage din bil med til
                  udlandet, såfremt der ikke er tale om et permanent
                  udlandsophold. Bilen må ikke komme med uden for EUs grænser.
                </p>

                <p><em>Registreringsattest</em></p>
                <p>
                  Hvis du tager din bil med til udlandet, skal du have bilens
                  registreringsattest med. Du kan bestille din
                  registreringsattest her: support@quickleasing.dk
                </p>
                <p>
                  Registreringsattesten sendes pr. brev, og vi anbefaler derfor
                  at bestille den i god tid inden din ferie.
                </p>

                <p><em>Akut hjælp i udlandet</em></p>
                <p>
                  Har du brug for akut hjælp, mens du er i udlandet kontakt SOS
                  Internationals Vagtcentral på: +45 70 10 50 52
                </p>
                <p>
                  Du kan også vælge at downloade appen ’Det røde kort’, så SOS
                  International kan spore din position i tilfælde af uheldet
                  skulle være ude.
                </p>

                <h3 class="pad-header--m">
                  Kan jeg købe min abonnementsbil efter endt abonnementsperiode?
                </h3>
                <p>
                  Hvis du ønsker at købe din bil efter endt abonnementsperiode,
                  bedes du kontakte
                  <a href="mailto:support@quickleasing.dk"
                    >support@quickleasing.dk</a
                  >
                  for at få et tilbud på bilen.
                </p>
                <p>
                  Har du bestilt et quickleasing i 150 dage (Quickleasing
                  Limited) er der ikke mulighed for at købe bilen efter endt
                  abonnementsperiode.
                </p>

                <br>
                <br>
                <h2 class="">Erhvervskunder</h2>
                <h3 class="pad-header--m">Hvad er prisen for erhvervskunder?</h3>
                <p>
                  Prisen er den samme som på alm. Quickleasing, men tillagt
                  10%. Årsagen til den højere pris er, at vores kreditrisiko er
                  højere på erhvervskunder.
                </p>

                <h3 class="pad-header--m">Skal der betales depositum som erhvervskunder?</h3>
                <p>
                  Ja, der skal typisk betales fra 2 – 6 md. depositum. Bemærk at
                  dit firma minimum skal være 3 år gammel, før vi kan tage dig
                  ind som kunde.
                </p>

                <h3 class="pad-header--m">Hvordan bestiller jeg en bil som erhvervskunde?</h3>
                <p>
                  Du skriver en mail til
                  <a href="mailto:support@quickleasing.dk"
                    >support@quickleasing.dk</a
                  >, her angiver du hvilken bil du er interesseret i og CVR
                  nummer på det firma der ønsker at leje bilen.
                </p>
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
