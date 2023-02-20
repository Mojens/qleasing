<script setup>
import FooterItem from "@/components/FooterItem.vue";
import NavigationBar from "@/components/NavigationBar.vue";

</script>
<template >
  <NavigationBar />
  <div class="ct-section-inner-wrap-background">
    <div class="multi__section grid--auto-2">
    <ContactForm />
    <div class="debug">
      <div class="contacts___2bySS inverted___2kcPN" data-v-81fdc7f5="">
        <div class="questions-block___xFoBu" data-v-81fdc7f5="">
          <h2 class="pad-header--s" data-v-81fdc7f5="">
            Fik du ikke svaret på det du søgte efter?
          </h2>
          <div
            class="markdown___35KUH questions___1ebNf center--all"
            data-v-81fdc7f5=""
          >
            <p class="center--all text--l">Måske findes svaret på vores</p>
            <RouterLink style="color: black" to="/faq"
            ><button class="button-primary">FAQ side</button></RouterLink
            >
            <p data-v-81fdc7f5="">Hvis ikke, så kontakt os endelig.</p>
            <p data-v-81fdc7f5="">Mandag til Torsdag - 09.00-16.00</p>
            <p data-v-81fdc7f5="">Fredag - 09.00-15.30</p>
            <p data-v-81fdc7f5="">Weekend - Lukket</p>
            <p data-v-81fdc7f5="">Vi sidder klar til at hjælpe dig.</p>
          </div>
        </div>
        <div class="contacts-block___1uL7D" data-v-81fdc7f5="">
          <a
            class="contact-link___LYngd"
            href="mailto:support@quickleasing.dk"
            target="_self"
            title="support@quickleasing.dk"
            data-v-81fdc7f5=""
          ><svg
            class="icon___2lyj4"
            fill="none"
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
            data-v-81fdc7f5=""
          >
            <path
              d="M3.23047 7.11719L24.0005 25.9992L44.7705 7.11719"
              stroke-miterlimit="10"
              stroke-width="2"
              data-v-81fdc7f5=""
            ></path>
            <path
              d="M42 6H6C3.79086 6 2 7.79086 2 10V38C2 40.2091 3.79086 42 6 42H42C44.2091 42 46 40.2091 46 38V10C46 7.79086 44.2091 6 42 6Z"
              stroke-linecap="square"
              stroke-miterlimit="10"
              stroke-width="2"
              data-v-81fdc7f5=""
            ></path>
          </svg>
            <div class="title___1Cs5_" data-v-81fdc7f5="">
              support@quickleasing.dk
            </div></a
          ><a
          class="contact-link___LYngd"
          href="tel:8988 5080"
          target="_blank"
          title="89 88 50 80"
          data-v-81fdc7f5=""
        ><svg
          class="icon___2lyj4"
          fill="none"
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
          data-v-81fdc7f5=""
        >
          <path
            d="M24 40C25.6569 40 27 38.6569 27 37C27 35.3431 25.6569 34 24 34C22.3431 34 21 35.3431 21 37C21 38.6569 22.3431 40 24 40Z"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="2"
            data-v-81fdc7f5=""
          ></path>
          <path
            d="M36 46H12C10.9391 46 9.92172 45.5786 9.17157 44.8284C8.42143 44.0783 8 43.0609 8 42V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2H36C37.0609 2 38.0783 2.42143 38.8284 3.17157C39.5786 3.92172 40 4.93913 40 6V42C40 43.0609 39.5786 44.0783 38.8284 44.8284C38.0783 45.5786 37.0609 46 36 46Z"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="2"
            data-v-81fdc7f5=""
          ></path>
        </svg>
          <div class="title___1Cs5_" data-v-81fdc7f5="">89 88 50 80</div></a
        >
        </div>
      </div>
    </div>
    </div>
  </div>
<footer-item />
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
}
</script>
<style scoped>
.ct-section-inner-wrap-background{
  background-color: #f2f2f2;
  padding: var(--section-space-l) 0;
}

.contacts___2bySS[data-v-81fdc7f5] {
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
  padding: 2rem 2rem;
  background-color: var(--contacts-background-color);
  color: var(--contacts-text-color);
}

@media screen and (min-width: 64rem) {
  .contacts___2bySS[data-v-81fdc7f5] {
    width: 100%;
    padding: 2.5rem 2rem;
  }
}

.multi__section {
  padding: 0 var(--space-xl);
}

.debug {
  background-color: var(--action);

  padding: 30px;

}

.debug pre {
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
  white-space: pre-wrap;
}

</style>
