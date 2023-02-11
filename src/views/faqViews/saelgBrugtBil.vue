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
            <h1 class="title___Tm0Tt">Sælg din brugte bil</h1>
            <div class="markdown___35KUH description___16IX9">
              <p><code></code></p>
            </div>
            <div class="body___cvucF">
              <div class="content___30ncG">
                <div class="article-wrapper___2COOl image-center___2oKvH">
                  <img
                    src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/v1590758807/bilabonnement-fleet/kfkokxn7zzcvsosw1yeu.jpg"
                    alt=""
                  />

                  <h3 class="pad-header--m">
                    Vil du skifte din brugte bil ud med en quickleasingbil?
                  </h3>
                  <div class="markdown___35KUH">
                    <p>
                      Når du leaser en bil via Quickleasing, har du mulighed for at få
                      vurderet din brugte bil online. Via vores søsterselskab,
                      Copenhagen Carmarket, tilbyder vi at købe din brugte bil.
                      Det vil ofte være muligt at aflevere din gamle bil samme
                      dag, som du henter din abonnementsbil.
                    </p>
                    <h4 class="pad-header--s">
                      <strong
                        >Klik
                        <a href="https://www.copenhagencarmarket.dk/">her</a> og
                        lad Copenhagen Carmarket vurdere din bil.</strong
                      >
                    </h4>
                  </div>
                </div>
              </div>
              <div class="content___30ncG pad-header--m">
                <div class="article-wrapper___2COOl image-center___2oKvH">
                  <img
                    src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/v1590760555/bilabonnement-fleet/t9tid1eici4fjq2tnsnj.jpg"
                    alt=""
                  />
                  <h1></h1>
                  <h2 class="pad-header--m">Kontakt Copenhagen Carmarket</h2>
                  <div class="markdown___35KUH">
                    <h4 class="pad-header--xs">Åbningstid:</h4>
                    <p><strong>Mandag – Fredag: 9 – 16:30</strong></p>
                    <p>Lørdag – Søndag: Efter aftale</p>
                    <p>
                      Har du spørgsmål - eller vil du gerne have, at vi
                      kontakter dig?
                    </p>
                    <p><strong>Kontakt:</strong></p>
                    <p>53 82 83 44</p>
                    <p><a href="mailto:cst@interdan.dk">cst@​interdan.dk</a></p>
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
