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
            <h1 class="title___Tm0Tt">Forsikring</h1>
            <div class="markdown___35KUH description___16IX9"><p></p></div>
            <div class="body___cvucF">
              <div class="markdown___35KUH html-block___G4sWQ">
                <h3>Om Quickleasing forsikring</h3>
                <p></p>
                <p>
                  Der er en kaskoforsikring inkluderet i din abonnementsaftale.
                  Forsikringsaftalen er afdækket af IF Skadeforsikring.
                </p>
                <p>
                  Du kan læse
                  <a
                    href="https://www.if.dk/globalassets/dk/files/erhverv/vilkaar-a22.pdf"
                    ><strong><em>forsikringsvilkårne her</em></strong></a
                  >.
                </p>
                <p>
                  Du kan læse vilkår for afleveringforsikring
                  <RouterLink to="/afleveringforsikring"><strong>her</strong></RouterLink
                  ><strong>.</strong>
                </p>
                <p><strong>OBS:</strong></p>
                <p>
                  Ved henvendelser omkring skader med en skadedato før 1/1-2023,
                  bedes du kontakte Quickleasing på
                  <a href="tel:89885080">89 88 50 80</a>
                </p>
                <p></p>
                <h3>Kontakt ved skade eller forsikringsrelaterede spørgsmål</h3>
                <p>Quickleasing Support</p>
                <p>Tlf. <a href="tel:89885080">89 88 50 80</a></p>
                <p>
                  Ved forekomne skader på din abonnementsbil samt ved bortkomst,
                  beder vi dig udfylde følgende skadeanmeldelse
                </p>
                <p>
                  <a href="https://www.if.dk/erhverv/anmeld-skade"
                    ><strong>Anmeldelse af skade på bil</strong></a
                  >
                </p>
                <p>
                  Såfremt du ikke ønsker at benytte MitID kan du benytte
                  <a
                    href="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/v1673009551/PDF%27s/13861-1_Skadeanmeldelse_-_F%C3%A6rdselsuheld_3_ndinzl.pdf"
                    >denne PDF</a
                  >.
                </p>
                <p>
                  Den skal efterfølgende sendes til
                  <a href="mailto:motorskade@if.dk">motorskade@if.dk</a>
                </p>
                <p></p>
                <h3>Hvad er selvrisikoen ved en skade?</h3>
                <p>Selvrisikoen er på 5.000 kr. pr. skade.</p>
                <p></p>
                <h3><strong>Ekstra forsikringer</strong></h3>
                <p><strong>Nedsat selvrisiko</strong></p>
                <p>
                  Er du over 30 år og har 3 års skadefri kørsel, er der mulighed
                  for at tilkøbe en lavere selvrisiko på 2.500 kr. pr. skade for
                  64 kr. månedligt. Vi gør dig opmærksom på, at den lavere
                  selvrisiko kun kan tilkøbes før bilen er udleveret.
                </p>
                <p><strong>Afleveringsforsikring</strong></p>
                <p>
                  Du kan for 119 Kr. månedligt tilkøbe en afleveringsforsikring.
                </p>
                <p>Denne forsikring har en selvrisiko på 5.000 Kr.</p>
                <p>
                  Forsikringen dækker op til 5.000 Kr. pr. skade, dog maximalt
                  25.000 Kr. i samlet erstatning.
                </p>
                <p>
                  For at kunne tilkøbe afleveringsforsikring skal din aftale
                  have en løbetid på minimum 12 måneder, og forsikringen skal
                  tilkøbes inden udlevering.
                </p>
                <p>
                  Bemærk at ekstraydelsen ”Lav Selvrisiko” IKKE vil nedsætte
                  selvrisikoen på din afleveringsforsikring.
                </p>
                <p></p>
                <h3>
                  Vil forsikringen dække, hvis der er andre end den primære
                  bruger af bilen, der forårsager en skade?
                </h3>
                <p>
                  Hvis det viser sig, at den daglige bruger er en anden end
                  abonnenten (eller abonnentens ægtefælle /samlever), vil
                  forsikringen ikke dække og abonnenten vil derfor hæfte for den
                  fulde skade.
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
  components: {},
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

