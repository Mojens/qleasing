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
            <h1 class="title___Tm0Tt center--left">Kilometer</h1>
            <div class="markdown___35KUH description___16IX9">
              <p></p>
            </div>
            <div class="body___cvucF">
              <div class="markdown___35KUH html-block___G4sWQ">
                <h3 class="pad-header--m">Hvor mange kilometer må jeg køre?</h3>
                <p>
                  Dit samlede kilometertal, som indgår i din aftale, er angivet
                  i din ordrebekræftelse under ’Abonnementsoplysninger’ eller
                  under beskrivelsen på den bestemte bil.
                </p>
                <p>
                  Kilometerbegrænsningen angives pr. år, men det er en
                  månedsberegning, der afgør, hvor meget den enkelte bil må have
                  kørt ved indlevering.
                </p>
                <p>
                  Det vil sige, at hvis dit abonnement, eksempelvis, inkluderer
                  12.000 km pr. år, vil dette svare til 1000 km pr. måned.
                </p>
                <p></p>
                <h3 class="pad-header--m">
                  Jeg skal køre mere end inkluderet i aftalen– hvad gør jeg?
                </h3>
                <p>
                  Hvis du ved, du kommer til at køre mere end aftalen tillader,
                  kan du tilkøbe en kilometerpakke.
                </p>
                <p>
                  Kører du mere end, hvad aftalen tillader uden tilkøb af
                  kilometerpakke, vil du blive opkrævet et beløb pr. overkørt
                  kilometer iht. prislisten.
                </p>
                <p>
                  Vi gør opmærksom på at en kilometerpakke kun kan tilkøbes på
                  en uopsagt aftale.
                </p>
                <p>
                  Du kan tilkøbe din kilometerpakke ved at kontakte vores
                  support på support@quickleasing.dk.
                </p>
                <p></p>
                <h4 class="pad-header--m"><strong>Priser for tilkøb af kilometer:</strong></h4>
              </div>
              <div class="table-wrapper___1r2Yw">
                <div class="content___fD8Ja">
                  <div class="tables-wrapper___3TOEv">
                    <div class="original-table-wrapper___le7qO">
                      <table class="basic-table___2sL1d" >
                        <thead>
                          <tr>
                            <th class="cell___1FDI8 ">Km. pr. md.</th>
                            <th class="cell___1FDI8 ">Pris pr. md.</th>
                            <th class="cell___1FDI8 ">Km. pr. år</th>
                            <th class="cell___1FDI8 ">Pris pr. år</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(row, index) in rows" :class="{ 'highlighted___1AED': index === highlightedRowIndex }" @mouseover="highlightRow(index)" @mouseleave="removeHighlight()">
                          <td class="cell___1FDI8">{{row.kmPrMd}}</td>
                          <td class="cell___1FDI8">{{row.prisPrMd}}</td>
                          <td class="cell___1FDI8">{{row.kmPrAar}}</td>
                          <td class="cell___1FDI8">{{row.prisPrAar}}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="markdown___35KUH html-block___G4sWQ">
                <h4 class="pad-header--m"><strong>Spar mange penge - lad os hjælpe dig</strong></h4>
                <p>
                  Hvis du allerede nu ved, at du kommer til at køre længere, end
                  de kilometer, der er inkluderet i din aftale, så kan du
                  kontakte
                  <a href="mailto:support@quickleasing.dk"
                    >support@quickleasing.dk</a
                  >
                  for tilkøb af ekstra kilometer.
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
      rows: [
        {
          "kmPrMd": "+250 Km.",
          "prisPrMd": "300 Kr.",
          "kmPrAar": "+3.000 Km.",
          "prisPrAar": "3.600 Kr."
        },
        {
          "kmPrMd": "+500 Km.",
          "prisPrMd": "590 Kr.",
          "kmPrAar": "+6.000 Km.",
          "prisPrAar": "7.080 Kr."
        },
        {
          "kmPrMd": "+1.000 Km.",
          "prisPrMd": "1.160 Kr.",
          "kmPrAar": "+12.000 Km.",
          "prisPrAar": "13.920 Kr."
        },
        {
          "kmPrMd": "+1.500 Km.",
          "prisPrMd": "1.710 Kr.",
          "kmPrAar": "+18.000 Km.",
          "prisPrAar": "20.520 Kr."
        },
        {
          "kmPrMd": "+2.000 Km.",
          "prisPrMd": "2.240 Kr.",
          "kmPrAar": "+24.000 Km.",
          "prisPrAar": "26.880 Kr."
        },
        {
          "kmPrMd": "+2.500 Km.",
          "prisPrMd": "2.750 Kr.",
          "kmPrAar": "+30.000 Km.",
          "prisPrAar": "33.000 Kr."
        },
        {
          "kmPrMd": "+3.000 Km.",
          "prisPrMd": "3.240 Kr.",
          "kmPrAar": "+36.000 Km.",
          "prisPrAar": "38.880 Kr."
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
