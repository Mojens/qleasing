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
            <h1 class="title___Tm0Tt">Parkering</h1>

            <div class="body___cvucF">
              <div class="markdown___35KUH html-block___G4sWQ">
                <h4 class="pad-header--m"><strong>Hvordan får jeg p-tilladelse til bilen?</strong></h4>
                <p>
                  I større byer har du ofte brug for en beboerlicens, for at
                  kunne parkere din bil. Her hos Quickleasing udarbejder vi et
                  dokument til dig, som du kan bruge, når du bestiller
                  beboerlicensen hos den lokale parkeringsservice. På den måde
                  er du lige så godt stillet, som var det din private bil. Du
                  skal blot skrive en mail med bilens registreringsnummer til
                  <a href="mailto:support@quickleasing.dk"
                    >support@quickleasing.dk</a
                  >
                  - så sender vi formularen til dig kort efter.
                </p>

                <h4 class="pad-header--m"><strong>Kan jeg bruge parkeringsapps?</strong></h4>
                <p>
                  Ja, du kan sagtens bruge alle de anerkendte parkeringsapps
                  såsom EasyPark, ParkMan, ParkOne, OK Parkering etc.
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
