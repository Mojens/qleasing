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
                        srcset="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1550&amp;heightratio=0.4285703125&amp;mode=crop 1x, https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=3100&amp;heightratio=0.4285703125&amp;mode=crop 2x">
                <source media="(min-width: 768px) and (max-width: 1023px)"
                        srcset="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1024&amp;heightratio=0.4285703125&amp;mode=crop 1x, https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=2048&amp;heightratio=0.4285703125&amp;mode=crop 2x">
                <source media="(min-width: 414px) and (max-width: 767px)"
                        srcset="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=767&amp;heightratio=1.2487309645&amp;mode=crop 1x, https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1534&amp;heightratio=1.2487309645&amp;mode=crop 2x">
                <source media="(max-width: 413px)"
                        srcset="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=394&amp;heightratio=1.2487309645&amp;mode=crop 1x, https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=788&amp;heightratio=1.2487309645&amp;mode=crop 2x">
                <img
                  alt="Hyundai prøvetur kvinde kører i bil "
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
      const ARTICLE_URL = import.meta.env.VITE_APP_ARTICLE_URL + "6";
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
<style>
/* BUTTON */
.button-primary {
  background-color: var(--secondary);
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  margin: var(--space-m) 0;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}
.button-primary:hover {
  background-color: black;
  color: var(--secondary);
  transform: scale(1.02);
}


@media only screen and (max-width: 600px) {
  .button-primary {

    padding: 10px 20px;
  }
}


.new-html-block___3_7NG {
  display: block;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem 2rem 1.5rem;
}


::placeholder {
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.5rem;
}

picture {
  z-index: 1;
  position: relative;
  display: block;
  line-height: 0;
}

.spot-content__header {
  white-space: pre-line;
}

.spot-content__header--title {
  letter-spacing: .05rem;
}

.hero-spot {
  position: relative;
  display: grid;
  grid-template-rows:1fr auto;
  grid-template-columns:1fr 8rem 1fr;
  color: #fff;
  width: 100%;
  margin: 0 auto;
}

@media screen and (min-width: 1024px) {
  .hero-spot {
    grid-template-rows:1fr 16rem;
  }
}

.hero-spot__media-container {
  position: relative;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: #000;
  overflow: hidden;
}

.hero-spot__media-container:before {
  content: "";
  width: 100%;
  display: block;
}

@media screen and (max-width: 767px) {
  .hero-spot__media-container:before {
    padding-bottom: 105%;
  }
}

@media screen and (min-width: 768px) {
  .hero-spot__media-container:before {
    padding-bottom: 42.8387096774%;
  }
}

.hero-spot__media-container > img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
}

.hero-spot__media-container img {
  opacity: .8;
  margin: 5rem 0;
}
@media screen and (max-width: 750px) {
  .hero-spot__media-container img {
    margin: 0;
  }

}
@media screen and (max-width: 1024px) {
  .hero-spot__media-container img {
    margin: 4rem 0;
  }

}

.hero-spot__content {
  z-index: 2;
  max-width: 82rem;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 4;
  align-self: center;
  background-color: transparent;
  padding: 2rem;
  justify-self: center;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .hero-spot__content {
    grid-row-start: 1;
    grid-row-end: 3;
  }
}

.hero-spot .spot-content__header--title {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: .05rem;
  text-transform: none;
  word-break: normal;
}

@media screen and (min-width: 1024px) {
  .hero-spot .spot-content__header--title {
    font-size: 4rem;
  }
}

@media screen and (min-width: 1250px) {
  .hero-spot .spot-content__header--title {
    font-size: 5rem;
  }
}

.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

@media screen and (min-width: 1152px) {
  .container:not(.is-max-desktop) {
    max-width: 1088px;
  }
}

@media screen and (min-width: 1250px) {
  .container:not(.is-max-desktop):not(.is-max-widescreen) {
    max-width: 1600px;
  }
}


.container {
  display: block;
}

.container.is-fullwidth {
  width: auto;
  max-width: 1600px !important;
  padding: 0;
}

@media screen and (min-width: 1024px) {
  .container.is-fullwidth {
    padding: 0 2.5rem;
  }
}

.container.is-full {
  width: 100vw;
  max-width: 100% !important;
  position: relative;
  margin-left: auto;
  margin-right: auto;


}

.animate-load {
  position: relative;
  z-index: 50;
  transition: opacity, transform;
  transition-duration: .6s, .6s;
  transition-timing-function: cubic-bezier(.165, .84, .44, 1);
  transform: translateZ(0);
  opacity: 1;
}

.section {
  padding: 5rem 1.5rem;
}



.section {
  display: block;
}

@media screen and (max-width: 1023px) {
  .section {
    padding: 2.5rem 1.5rem;
  }
}

.grid__theme:before {
  content: none;
  position: absolute;
  inset: 0;
  height: 9rem;
  background-color: #fff;
  z-index: -1;
}

@media screen and (max-width: 1023px) {
  .grid__theme:before {
    height: 7.5rem;
  }
}

.grid__theme--dark {
  background-color: #002c5e;
  color: #fff;
}

.grid__theme--middle:before {
  content: "";
  top: 0;
}

.grid__theme--middle:after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10rem;
  background-color: #fff;
}

@media screen and (max-width: 1023px) {
  .grid__theme--middle:after {
    height: 6.5rem;
  }
}

.grid__theme--top-padding {
  padding-top: 0;
}

.grid__theme--top-padding:not(.grid__theme--top-padding.grid__theme--bottom-half):before {

}

@media screen and (max-width: 1023px) {
  .grid__theme--top-padding:not(.grid__theme--top-padding.grid__theme--bottom-half):before {
    height: 2.5rem;
  }
}

.grid__row {
  position: relative;
  z-index: 2;
}


@media (min-width: 1024px) {
  .privatlivspolitik {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
  