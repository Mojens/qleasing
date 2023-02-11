<script setup>
import FooterItem from "../components/FooterItem.vue";
</script>
<template>
  <div >
    <div class="container___1BnaH" >
      <div class="faqs-page___3CLq_" >
        <h1 class="title___3kukC">FAQ</h1>
        <div class="categories___Pfcra">
          <div class="faq-category___3R5dn faq-category___110dc">
            <div class="name___aDLKM">Quickleasing</div>
            <div class="questions___gsR_N">
             <RouterLink to="/abonnement-vilkaar"
              class="question___3PILY"
              href="/faq/abonnementsvilkar"
              title="Abonnementsvilkår"
            >Abonnementsvilkår</RouterLink
            ><RouterLink
              :class="{'is-open___1eAPm': isModalOpen}"
              class="question___3PILY"
              to="/faq/oprettelse-afhentning"
              title="Oprettelse &amp; afhentning"
            >Oprettelse &amp; afhentning</RouterLink
            ><RouterLink to="/faq/hvorfor-quickleasing"
              class="question___3PILY"
              href="/faq/hvorfor-quickleasing"
              title="Hvorfor vælge quickleasing"
            >Hvorfor vælge quickleasing</RouterLink
            ><RouterLink
              class="question___3PILY"
              to="/faq/opsigelse-og-tilbagelevering"
              title="Opsigelse og tilbagelevering"
            >Opsigelse og tilbagelevering</RouterLink
            ><RouterLink
              class="question___3PILY"
              to="/faq/liste-over-priser"
              title="Liste over priser"
            >Liste over priser</RouterLink
            >
            </div>
          </div>
          <div class="faq-category___3R5dn faq-category___110dc">
            <div class="name___aDLKM">Udstyr og services</div>
            <div class="questions___gsR_N">
              <RouterLink
                class="question___3PILY"
                to="/faq/forsikring"
                title="Forsikring"
              >Forsikring</RouterLink
              ><RouterLink
              class="question___3PILY"
              to="/faq/vinterdaek"
              title="Vinterhjul"
            >Vinterhjul</RouterLink
            ><RouterLink class="question___3PILY" to="/faq/service" title="Service"
            >Service</RouterLink
            ><RouterLink
              class="question___3PILY"
              to="/faq/kilometer"
              title="Kilometer"
            >Kilometer</RouterLink
            ><RouterLink
              class="question___3PILY"
              to="/faq/opladning-til-el-hybridbiler"
              title="Opladning til el &amp; hybridbiler"
            >Opladning til el &amp; hybridbiler</RouterLink
            ><RouterLink
              class="question___3PILY"
              to="/faq/1a5d619d-8624-4b26-a5d7-2eea9b477b03"
              title="Skade og Vejhjælp"
            >Skade og Vejhjælp</RouterLink
            ><RouterLink
              class="question___3PILY"
              to="/faq/vejhjaelp"
              title="Tilkøbt vejhjælp"
            >Tilkøbt vejhjælp</RouterLink
            >
            </div>
          </div>
          <div class="faq-category___3R5dn faq-category___110dc">
            <div class="name___aDLKM">Øvrigt</div>
            <div class="questions___gsR_N">
              <RouterLink
                class="question___3PILY"
                to="/faq/ovrige-sporgsmal"
                title="Øvrige spørgsmål"
              >Øvrige spørgsmål</RouterLink
              ><RouterLink
              class="question___3PILY"
              to="/faq/saelg-din-brugte-bil"
              title="Sælg din brugte bil"
            >Sælg din brugte bil</RouterLink
            ><RouterLink
              class="question___3PILY"
              to="/faq/parkering"
              title="Parkering"
            >Parkering</RouterLink
            >
            </div>
          </div>
        </div>
        <div class="contacts___2bySS inverted___2kcPN">
          <div class="questions-block___xFoBu">
            <h4 class="title___1Cs5_">Fik du svar på det du søgte efter?</h4>
            <div class="markdown___35KUH questions___1ebNf">
              <p>Hvis ikke, så kontakt os endelig.</p>
              <p>Mandag til Torsdag - 09.00-16.00</p>
              <p>Fredag - 09.00-15.30</p>
              <p>Weekend - Lukket</p>
              <p>Vi sidder klar til at hjælpe dig.</p>
            </div>
          </div>
          <div class="contacts-block___1uL7D">
            <a
              class="contact-link___LYngd"
              href="mailto:support@quickleasing.dk"
              target="_self"
              title="support@quickleasing.dk"
            >
              <svg
                class="icon___2lyj4"
                fill="none"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.23047 7.11719L24.0005 25.9992L44.7705 7.11719"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  d="M42 6H6C3.79086 6 2 7.79086 2 10V38C2 40.2091 3.79086 42 6 42H42C44.2091 42 46 40.2091 46 38V10C46 7.79086 44.2091 6 42 6Z"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
              </svg>
              <div class="title___1Cs5_">support@quickleasing.dk</div>
            </a
            ><a
            class="contact-link___LYngd"
            href="tel:8988 5080"
            target="_blank"
            title="89 88 50 80"
          >
            <svg
              class="icon___2lyj4"
              fill="none"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 40C25.6569 40 27 38.6569 27 37C27 35.3431 25.6569 34 24 34C22.3431 34 21 35.3431 21 37C21 38.6569 22.3431 40 24 40Z"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="2"
              ></path>
              <path
                d="M36 46H12C10.9391 46 9.92172 45.5786 9.17157 44.8284C8.42143 44.0783 8 43.0609 8 42V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2H36C37.0609 2 38.0783 2.42143 38.8284 3.17157C39.5786 3.92172 40 4.93913 40 6V42C40 43.0609 39.5786 44.0783 38.8284 44.8284C38.0783 45.5786 37.0609 46 36 46Z"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="2"
              ></path>
            </svg>
            <div class="title___1Cs5_">89 88 50 80</div>
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-item />
</template>
<script>
export default {
  data() {
    return {
      isModalOpen: false,
      articleData: null
    };
  },

  mounted() {
    // Add the class "is-open___1eAPm" to the modal when the component is mounted
    this.isModalOpen = true;
  }
  ,
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const READER_API = import.meta.env.VITE_APP_READER_API;
      const ARTICLE_URL = import.meta.env.VITE_APP_ARTICLE_URL + "4";
      const response = await fetch(ARTICLE_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${READER_API}`
        }
      });
      const data = await response.json();
      this.articleData = data.data;
    }
  }
};
</script>

<style scoped>
/*! CSS Used from: https://bilabonnement.dk/_next/static/css/commons.329bbe64.chunk.css */
.container___1BnaH {
  position: relative;
  padding-top: 4rem;
}

@media screen and (min-width: 64rem) {
  .container___1BnaH {
    padding-top: 6rem;
  }
}

/*! CSS Used from: https://bilabonnement.dk/_next/static/css/styles.6758ba03.chunk.css */
.contacts___2bySS {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: auto;
  padding: 3rem 2rem;
  background-color: var(--contacts-background-color);
  color: var(--contacts-text-color);
}

.contacts___2bySS.inverted___2kcPN {
  --contacts-text-color: #fff;
  --contacts-links-color: #fff;
  --contacts-icon-color: #fff;
  --contacts-background-color: #1892c3;
}

@media screen and (min-width: 64rem) {
  .contacts___2bySS {
    width: 70%;
    padding: 4.5rem 2rem;
  }
}

.contacts___2bySS .questions-block___xFoBu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.contacts___2bySS .questions-block___xFoBu > .title___1Cs5_ {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

@media screen and (min-width: 64rem) {
  .contacts___2bySS .questions-block___xFoBu > .title___1Cs5_ {
    font-size: 1.8rem;
  }
}

.contacts___2bySS .questions-block___xFoBu .questions___1ebNf p {
  text-align: center;
}

.contacts___2bySS .contacts-block___1uL7D {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 2rem;
}

@media screen and (min-width: 64rem) {
  .contacts___2bySS .contacts-block___1uL7D {
    margin-top: 2.5rem;
  }
}

.contacts___2bySS .contacts-block___1uL7D .contact-link___LYngd {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 2rem;
  margin-right: 1rem;
  font-size: 1rem;
  color: var(--contacts-links-color);
  text-decoration: underline;
}

.contacts___2bySS .contacts-block___1uL7D .contact-link___LYngd > .icon___2lyj4 {
  height: 100%;
  width: auto;
  padding-right: 0.75rem;
  stroke: var(--contacts-icon-color);
}

.contacts___2bySS .contacts-block___1uL7D .contact-link___LYngd:first-of-type {
  margin-bottom: 1.5rem;
}

.faq-category___3R5dn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 1rem 0;
}

.faq-category___3R5dn .name___aDLKM {
  color: #1892c3;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1rem;
}

.faq-category___3R5dn .questions___gsR_N {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 0.75rem;
}

.faq-category___3R5dn .questions___gsR_N .question___3PILY {
  margin-top: 1.1rem;
  text-decoration: underline;
  font-size: 0.9rem;
}

.faqs-page___3CLq_ {
  padding: 2rem;
}

@media screen and (min-width: 46.75rem) {
  .faqs-page___3CLq_ {
    padding: 2rem 5rem;
  }
}

.faqs-page___3CLq_ .title___3kukC {
  padding: 1rem 0 3rem;
  margin: 0;
  font-size: 2rem;
  color: #101011;
}

@media screen and (min-width: 64rem) {
  .faqs-page___3CLq_ .title___3kukC {
    padding: 4rem 2rem;
    font-size: 2.7rem;
    text-align: center;
  }
}

.faqs-page___3CLq_ .categories___Pfcra {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
}

@media screen and (min-width: 46.75rem) {
  .faqs-page___3CLq_ .categories___Pfcra {
    margin: -3rem auto 0;
    max-width: 65rem;
  }
}

.faqs-page___3CLq_ .categories___Pfcra .faq-category___110dc {
  --faq-question-width-xxs: 85%;
  margin-top: 3rem;
}

@media screen and (min-width: 23rem) {
  .faqs-page___3CLq_ .categories___Pfcra .faq-category___110dc {
    width: var(--faq-question-width-xxs);
    margin: 3rem auto 0;
  }
}

@media screen and (min-width: 46.75rem) {
  .faqs-page___3CLq_ .categories___Pfcra .faq-category___110dc {
    width: calc(50% - 4rem);
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

@media screen and (min-width: 64rem) {
  .faqs-page___3CLq_ .categories___Pfcra .faq-category___110dc {
    width: calc(33% - 4rem);
  }
}

.faqs-page___3CLq_ .categories___Pfcra .faq-category___110dc {
  --faq-question-width-xxs: 100%;
}

.faqs-page___3CLq_ > .categories___Pfcra {
  padding: 3rem 2rem;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  margin: 0;
  min-height: 0.8rem;
}

p:not(:first-of-type) {
  margin-top: 0.8rem;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}

a:visited {
  color: inherit;
}
</style>