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
            <h1 class="title___Tm0Tt">Liste over priser</h1>
            <div class="markdown___35KUH description___16IX9"><p></p></div>
            <div class="sub-title___1ierc h--3 text--bold">Prisliste</div>
            <div class="body___cvucF">
              <div class="markdown___35KUH html-block___G4sWQ"><p><code></code></p>
                <p>Hos Quickleasing behandler vi vores kunder godt, da vi tror på en lang relation med dig. Vi opkræver
                  ikke mærkelige gebyrer og tvungne medlemskaber. Dit abonnement kører helt uden gebyrer, sålænge du
                  overholder dine betalingsfrister.</p>
                <p>Vi har samlet en liste over de opkrævninger, der kan forekomme i forbindelse med dit Quickleasing
                  udover abonnementsydelsen.</p>
                <p><code></code></p>
                <p><code></code></p></div>
              <div class="table-wrapper___1r2Yw">
                <div class="content___fD8Ja">
                  <div class="tables-wrapper___3TOEv">
                    <div class="original-table-wrapper___le7qO">
                      <table class="basic-table___2sL1d">
                        <thead>
                        <tr>
                          <th class="cell___1FDI8 header___3dKz6">Fakturatekst</th>
                          <th class="cell___1FDI8 header___3dKz6">Størrelse på opkrævning</th>
                          <th class="cell___1FDI8 header___3dKz6">Hvorfor kan opkrævningen forekomme?</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(row, index) in rows" :class="{ 'highlighted___1AED': index === highlightedRowIndex }" @mouseover="highlightRow(index)" @mouseleave="removeHighlight()">
                          <td class="cell___1FDI8">{{row.fact}}</td>
                          <td class="cell___1FDI8">{{row.size}}</td>
                          <td class="cell___1FDI8">{{row.reason}}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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
        { fact: 'Førstegangsydelse', size: 'Kommer an på valgt abonnement', reason: 'Førstegangydelsen er det forholdsmæssige beløb for det antal dage, der er tilbage på måneden efter afhentningsdatoen. Beløbet er beregnet på baggrund af det valgte abonnement.' },
        { fact: 'Transporttillæg', size: '500 kr.', reason: 'Hvis din bil skal transporteres til det ønskede afhentningssted vil din førstegangsydelse være tillagt transporttillæg.' },
        { fact: 'Overkørte kilometer.', size: 'Fra 1,50 kr. pr. km.', reason: 'Såfremt du kører mere end aftalt vil du blive opkrævet for overkørte kilometer.' },
        { fact: 'Administrationsafgift', size: '187,50 kr.', reason: 'Har du fået en parkeringsafgift eller fartbøde, og ikke betalt det girokort der ligger på forruden eller som bliver sendt hjem til dig, modtager vi afgiften fra udstederen og betaler den på dine vegne. Hertil pålægges der et administrationsgebyr.' },
        { fact: 'Mangel på service', size: '2.500 kr.', reason: 'Hvis din bil ikke bliver serviceret rettidigt efter bilens servicebog.' },
        { fact: 'Mangel på rengøring', size: 'Min. 1.000 kr', reason: 'Hvis din bil ikke er tilstrækkelig rengjort inden indlevering vil du pålægges afgiften for en rengøring af bilen. For at undgå dette kan du følge afleveringsguiden.'},
        { fact: 'Rygning eller dyr i bilen', size: 'Op til 5.000 kr.', reason: 'Hvis der findes spor eller lugtgener pålægges afgiften.' },
        { fact: 'Rykkegebyr', size: '100 kr.', reason: 'Hvis forfaldsdatoen ikke overholdes pålægges et rykkergebyr.' },
        { fact: 'Genoptagelsesgebyr', size: '1.062,50 kr.', reason: 'Hvis din aftale er ophævet pga. manglende betaling opkræves et genoptagelsesgebyr for at genoptage aftalen efter, du har betalt dit udestående.' },
        { fact: 'Manglende dækskifte', size: '999 kr.', reason: 'Såfremt du ikke har skiftet retur til sommerdæk når bilen leveres retur. Bemærk at dækskiftet er indeholdt i din vinterdækspakke og derfor gratis for dig.' },
        { fact: 'Stenslag ved tilbagelevering', size: '650 kr.', reason: 'Hvis din bil leveres tilbage med et stenslag i ruden pålægges et gebyr på 650 kr. for det første stenslag og 300 kr. pr. efterfølgende stenslag. Vi anbefaler derfor, du får stenslaget lavet før aflevering. Bemærk at stenslag kan repareres gratis på din inkluderede forsikring.' },
        { fact: 'Selvrisiko pr. skade', size: 'Op til 5.000 kr.', reason: 'Hvis forsikringskade er anmeldt.' },
        { fact: 'Manglende nøgle', size: '3.000 kr.', reason: 'Såfremt en nøgle bortkommer vil en ny koste 3.000 kr.' }
        ],
      highlightedRowIndex: null,
      isModalOpen: false,
      showModal: true
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

  }
};
</script>

<style >
.basic-table___2sL1d {
  width: 100%;
  font-size: 0.9rem;
  background-color: #fff;
  border-spacing: 0;
}

.cell___1FDI8 {
  padding: 1rem;
  font-size: 0.9rem;
  text-align: left;
  border: 0 solid #e5e6e8;
  border-bottom-width: 1px;
  min-width: 14rem;
  vertical-align: top;
}

.cell___1FDI8.header___3dKz6 {
  min-width: auto;
  white-space: nowrap;
}
.highlighted___1AED{
  background-color: rgba(24, 146, 195, 0.08);
}
.table-wrapper___1r2Yw {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
}

.table-wrapper___1r2Yw .content___fD8Ja {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
}

.table-wrapper___1r2Yw .content___fD8Ja .tables-wrapper___3TOEv {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.table-wrapper___1r2Yw .content___fD8Ja .tables-wrapper___3TOEv .original-table-wrapper___le7qO {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow-x: auto;
}

@media screen and (min-width: 64rem) {
  .table-wrapper___1r2Yw .content___fD8Ja .tables-wrapper___3TOEv .original-table-wrapper___le7qO {
    min-width: 40rem;
  }
}

.faq-page___2Nz-F .content___12COd .body___cvucF > * {
  margin: unset;
}

</style>
