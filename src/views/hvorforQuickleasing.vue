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
          <div class="content___12COd"><h1 class="title___Tm0Tt">Hvorfor vælge Quickleasing
          </h1>
            <div class="markdown___35KUH description___16IX9"><p></p></div>
            <div class="body___cvucF">
              <div class="markdown___35KUH html-block___G4sWQ"><h4>Et abonnement hvor alt er inklusiv</h4>
                <p></p>
                <p>Hos Quickleasing kan du holde bil uden at bekymre dig om betaling af forsikring, grøn ejerafgift, vedligeholdelsesudgifter med mere. Hos os betaler du én samlet månedlig ydelse, der dækker det hele og lader dig køre afsted med tryghed.</p>
                <p>Quickleasings mission er at gøre det let for vores brugere at holde bil. Hvis du oplever udfordringer med bilen under din abonnementsperiode, står vi klar til at hjælpe. Vi arbejder sammen med nøje udvalgte partnere, som er med til at sikre dig en god og nem service, hvad enten det omhandler forsikring eller vedligehold af bilen.</p>
                <p></p>
                <h4>Quickleasing frem for privatleasing eller ejerbil</h4>
                <p></p>
                <p>Vi har lavet en oversigt til dig, så du kan sammenligne fordelene ved Quickleasing, kontra privatleasing eller egen bil.</p>
                <p></p>
                <h4>Når du starter et quickleasing, køber du også tryghed</h4>
                <p></p>
                <p>Kan det betale sig at abonnere på en bil? Det er et spørgsmål, vi ofte hører. Det afhænger naturligvis af dine behov – men hvis du på forhånd har styr på økonomi og kørselsbehov i abonnementsperioden, kan der være en tryghed forbundet med at abonnere på en bil. Du kender nemlig den månedlige ydelse i perioden, og dermed undgår du uforudsete udgifter. Så ja, det kan betale sig og der kan tilmed være økonomiske fordele ved at abonnere på en bil hvis du kører under 20.000 kilometer om året, og gerne vil udskifte eller skille dig af med bilen indenfor 3 – 36 måneder. Værditabet på en ny, købt bil, er nemlig ofte større end udgifterne til et abonnement. Og hvis du ikke har brug for bilen længere, skal du hverken bøvle med at få den solgt eller lide under det økonomisk tab, der kan være, ved at sælge bilen. Du skal bare aflevere den tilbage. Quickleasing giver derfor både tryghed og frihed.</p>
                <p>En anden fordel er det simple overblik. Et quickleasing passer perfekt ind i en hverdag og en husholdning, hvor man har rigeligt at se til, og hvor udgifterne gerne må køre så gnidningsfrit og automatisk som muligt. Et quickleasing er ligeså simpelt som dine streaming-tjenester. Når det er oprettet, skal du ikke bekymre dig om noget.</p>
                <p></p>
                <h4>Quickleasing står for garanti og service på bilen</h4>
                <p>Der kan være mange bekymringer forbundet med et bilkøb. For eksempel kan et servicebesøg blive dyrere, end du lige havde regnet med. En af de mange fordele ved at abonnere på en bil er, at du slipper for de mange bekymringer - Quickleasing står nemlig for garanti og service på bilen.</p>
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
      showModal: true

    }
  },
  mounted() {
    // Add the class "is-open___1eAPm" to the modal when the component is mounted

    setTimeout(() => {
      this.isModalOpen = true;
    }, 20);
  },

};


</script>
