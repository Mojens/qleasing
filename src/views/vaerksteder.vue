<script setup>
import FooterItem from "../components/FooterItem.vue";
import NavigationBar from "@/components/NavigationBar.vue";
</script>
<template>
  <NavigationBar />
  <div class="grid-outer-container">

    <div class="grid-row grid-gap3-below">
      <div class="grid-span12 grid-tablet-span12 grid-tablet-gap2-below">
        <div class="rte">
          <h1 class="pad-header--m">{{ "Find " + articleData.title }}</h1>
        </div>
      </div>
    </div>
    <div class="grid-row grid-gap3-below">
      <div class="grid-span12 grid-tablet-span12 grid-tablet-gap2-below">
        <div class="rte">


          <!-- 7 -->
          <!-- 56.2659298 -->
          <!-- 10.7213084 -->
          <!-- 0 -->
          <!-- 550 -->
          <!-- 6 -->
          <div style="height: 550px">
            <iframe height="100%"
                    loading="lazy"
                    src="https://storage.googleapis.com/maps-solutions-6zwn80gj0q/locator-plus/puud/locator-plus.html"
                    style="border:0;"
                    title="Google Maps"
                    lang="da"
                    width="100%">
            </iframe>
          </div>

        </div>

      </div>
    </div>
    <div class="grid-row grid-gap3-below">
      <div class="grid-span12 grid-tablet-span12 grid-tablet-gap2-below">
        <div class="rte ">
          <div v-if="articleData">

            <div v-html="articleData.body"></div>
            <br>
            <div v-html="articleData.optional_extra_body"></div>

          </div>

        </div>
      </div>
    </div>
    <div class="grid-row grid-gap3-below">
      <div class="grid-span12 grid-tablet-span12 grid-tablet-gap2-below">
        <div class="rte">


        </div>
      </div>
    </div>
    <div class="grid-row grid-gap3-below">
      <div class="grid-span4 grid-tablet-span12 grid-tablet-gap2-below">
        <div class="rte center--all">


          <p><strong>Jylland</strong></p>
          <p><a target="_blank" href="https://www.quickpoint.dk/esbjerg/"
                title="Autoværksted i Esbjerg">Quickpoint Esbjerg</a><br><a
            target="_blank" href="https://www.quickpoint.dk/fredericia/"
            title="Autoværksted i Fredericia">Quickpoint Fredericia</a><br><a
            target="_blank" href="https://www.quickpoint.dk/frederikshavn/"
            title="Autoværksted i Frederikshavn">Quickpoint Frederikshavn</a><br><a
            target="_blank" href="https://www.quickpoint.dk/herning/"
            title="Autoværksted i Herning">Quickpoint Herning</a><br><a
            target="_blank" href="https://www.quickpoint.dk/hjoerring/"
            title="Autoværksted i Hjørring">Quickpoint Hjørring</a><br><a
            target="_blank" href="https://www.quickpoint.dk/hobro/"
            title="Hobro">Quickpoint
            Hobro</a><br><a target="_blank"
                            href="https://www.quickpoint.dk/holstebro/"
                            title="Autoværksted i Holstebro">Quickpoint Holstebro</a><br><a
            target="_blank" href="https://www.quickpoint.dk/horsens/"
            title="Autoværksted i Horsens">Quickpoint Horsens</a><br><a
            target="_blank" href="https://www.quickpoint.dk/kolding/"
            title="Autoværksted i Kolding">Quickpoint Kolding</a><br><a
            target="_blank" href="https://www.quickpoint.dk/noerresundby/"
            title="Autoværksted i Nørresundby">Quickpoint Nørresundby</a><br><a
            target="_blank" href="https://www.quickpoint.dk/randers/"
            title="Autoværksted i Randers">Quickpoint Randers</a><br><a
            target="_blank" href="https://www.quickpoint.dk/silkeborg/"
            title="Silkeborg">Quickpoint
            Silkeborg</a><br><a target="_blank"
                                href="https://www.quickpoint.dk/skanderborg/"
                                title="Skanderborg">Quickpoint Skanderborg</a><br><a
            target="_blank" href="https://www.quickpoint.dk/skive/"
            title="Autoværksted i Skive">Quickpoint
            Skive</a><br><a target="_blank" href="https://www.quickpoint.dk/tilst/"
                            title="Autoværksted i Tilst, Aarhus V">Quickpoint Tilst</a><br><a
            target="_blank" href="https://www.quickpoint.dk/viborg/"
            title="Autoværksted i Viborg">Quickpoint
            Viborg</a><br><a target="_blank"
                             href="https://www.quickpoint.dk/aarhus-c/"
                             title="Autoværksted i Aarhus C">Quickpoint Aarhus C</a><br><a
            target="_blank" href="https://www.quickpoint.dk/aalborg/"
            title="Autoværksted i Aalborg">Quickpoint Aalborg</a></p>

        </div>
      </div>
      <div class="grid-span4 grid-tablet-span12 grid-tablet-gap2-below">
        <div class="rte center--all">


          <p><strong>Sjælland</strong></p>
          <p><a target="_blank" href="https://www.quickpoint.dk/birkeroed/"
                title="Autoværksted i Birkerød">Quickpoint Birkerød</a><br><a
            target="_blank" href="https://www.quickpoint.dk/broendby/"
            title="Autoværksted i Brøndby">Quickpoint Brøndby</a><br><a
            target="_blank" href="https://www.quickpoint.dk/broenshoej/"
            title="Autoværksted i Brønshøj">Quickpoint Brønshøj</a><br><a
            target="_blank" href="https://www.quickpoint.dk/frederiksberg/"
            title="Autoværksted på Frederiksberg">Quickpoint Frederiksberg</a><br><a
            target="_blank" href="https://www.quickpoint.dk/frederikssund/"
            title="Autoværksted i Frederikssund">Quickpoint Frederikssund</a><br><a
            target="_blank" href="https://www.quickpoint.dk/glostrup/"
            title="Autoværksted i Glostrup">Quickpoint Glostrup</a><br><a
            target="_blank" href="https://www.quickpoint.dk/helsinge/"
            title="Autoværksted i Helsinge">Quickpoint Helsinge</a><br><a
            target="_blank" href="https://www.quickpoint.dk/helsingoer/"
            title="Autoværksted i Helsingør">Quickpoint Helsingør</a><br><a
            target="_blank" href="https://www.quickpoint.dk/hilleroed/"
            title="Autoværksted i Hillerød">Quickpoint Hillerød</a><br><a
            target="_blank" href="https://www.quickpoint.dk/kastrup/"
            title="Autoværksted i Kastrup">Quickpoint Kastrup</a><br><a
            target="_blank" href="https://www.quickpoint.dk/koege/"
            title="Autoværksted i Køge">Quickpoint
            Køge</a><br><a
                           href="https://www.quickpoint.dk/naestved/"
                           target="_blank" title="Autoværksted i Næstved">Quickpoint Næstved</a><br><a
             href="https://www.quickpoint.dk/roedovre/"
            target="_blank" title="Autoværksted i Rødovre">Quickpoint Rødovre</a></p>

        </div>
      </div>
      <div class="grid-span4 grid-tablet-span12 grid-tablet-gap2-below">
        <div class="rte center--all">


          <p><strong>Fyn</strong></p>
          <p><a  href="https://www.quickpoint.dk/odense/"
                target="_blank" title="Autoværksted i Odense">Quickpoint Odense</a></p>
        </div>
      </div>
    </div>
    <hr>
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
      const ARTICLE_URL = import.meta.env.VITE_APP_ARTICLE_URL + "8";
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


.grid-row {
  display: block;
}

.grid-row::after {
  clear: both;
  content: "";
  display: block;
}

.grid-outer-container {
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10em;
}

.grid-outer-container::after {
  clear: both;
  content: "";
  display: block;
}

.grid-span4 {
  float: left;
  display: block;
  margin-right: 2.7027027027%;
  width: 31.5315315315%;
}

.grid-span4:last-child {
  margin-right: 0;
}

.grid-span12 {
  float: left;
  display: block;
  margin-right: 2.7027027027%;
  width: 100%;
}

.grid-span12:last-child {
  margin-right: 0;
}

.grid-gap3-below {
  margin-bottom: 30px;
}

@media screen and (max-width: 768px) {
  .grid-tablet-span12 {
    float: left;
    display: block;
    margin-right: 2.7027027027%;
    width: 100%;
  }

  .grid-tablet-span12:last-child {
    margin-right: 0;
  }

  .grid-tablet-gap2-below {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 1170px) {
  .grid-outer-container {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }

  .grid-outer-container::after {
    clear: both;
    content: "";
    display: block;
  }
}

@media screen and (max-width: 992px) {
  .grid-outer-container {
    max-width: calc(100% - 50px);
    margin-left: auto;
    margin-right: auto;
  }

  .grid-outer-container::after {
    clear: both;
    content: "";
    display: block;
  }
}

</style>
  