<script setup>
import FooterItem from "../components/FooterItem.vue";
</script>

<template>
  <div>
    <div
      id="section-0-row-0"
      class="grid__row grid__theme section grid__theme--dark grid__theme--middle grid__theme--is-first grid__theme--top-padding ng-star-inserted">
      <div class="container">
        <div id="spot-0000" class="ng-star-inserted" genericspot=""></div>
        <div class="container is-full animate-load ng-star-inserted" ncgloadin="">
          <div class="container is-fullwidth">
            <div class="hero-spot"><!---->
              <picture class="hero-spot__media-container ng-star-inserted">
                <source media="(min-width: 1024px)"
                        srcSet="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1550&amp;heightratio=0.4285703125&amp;mode=crop 1x, https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=3100&amp;heightratio=0.4285703125&amp;mode=crop 2x">
                <source media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1024&amp;heightratio=0.4285703125&amp;mode=crop 1x, https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=2048&amp;heightratio=0.4285703125&amp;mode=crop 2x">
                <source media="(min-width: 414px) and (max-width: 767px)"
                        srcSet="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=767&amp;heightratio=1.2487309645&amp;mode=crop 1x, https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1534&amp;heightratio=1.2487309645&amp;mode=crop 2x">
                <source media="(max-width: 413px)"
                        srcSet="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=394&amp;heightratio=1.2487309645&amp;mode=crop 1x, https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=788&amp;heightratio=1.2487309645&amp;mode=crop 2x">
                <img
                  alt="Afhængertræk af bilen er en god ide "
                  class="ng-star-inserted"
                  src="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1550&amp;heightratio=0.4285703125&amp;mode=crop">
                <!----><!----></picture>
              <!----><!----><!---->
              <div class="hero-spot__content animate-load ng-star-inserted" ncgloadin="">
                <div class="spot-content">
                  <header class="spot-content__header ng-star-inserted"><!----><h1
                    class="spot-content__header--title ng-star-inserted"><span
                    style="font-weight: 700;">{{ articleData.title }}</span></h1>
                    <!----><!----><!----><!----><!----></header><!----></div>
                <!----></div><!----><!----></div>
          </div>
        </div><!----><!----><!----><!----></div>
      <!----></div><!---->

    <div v-if="articleData">
      <span
        class="new-html-block___3_7NG">

  <p v-html="articleData.body"></p>
       <RouterLink class="buttons___3URuA" to="/quickleasing"><button
         class="button-primary">Find din næste quickleasing bil</button></RouterLink>
      </span>


    </div>

  </div>
  <footer-item />
</template>
<script>
export default {
  data() {
    return {
      articleData: null
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const READER_API = import.meta.env.VITE_APP_READER_API;
      const ARTICLE_URL = import.meta.env.VITE_APP_ARTICLE_URL + "12";
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

</style>