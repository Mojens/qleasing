<template>

  <div>
    <h3 class="pad-header--xs">Tilvalg</h3>
  </div>
  <FormKit
    type="checkbox"
    label="Afleveringsforsikring"
    name="afleveringsforsikring"
    label-class="add__price-forsikring add__price"
    wrapper-class="form__wrapper-input"
    help="Afleveringsforsikring Du kan for 119 Kr. månedligt tilkøbe en afleveringsforsikring. Denne forsikring har en selvrisiko på 5.000 Kr. Forsikringen dækker op til 10.000 Kr. pr. skade, dog maximalt 30.000 Kr. i samlet erstatning. For at kunne tilkøbe afleveringsforsikring skal din aftale have en løbetid på minimum 12 måneder, og forsikringen skal tilkøbes inden udlevering. Bemærk at ekstraydelsen ”Lav Selvrisiko” IKKE vil nedsætte selvrisikoen på din afleveringsforsikring"
  >
    <template #label="{ id, label, help, classes }">
      <label :class="classes.label" :for="id"
        >{{ label }}
        <span v-if="help" :class="classes.tooltip">

          ?<span :class="classes.tooltipInner">{{ help }}</span>
        </span>
      </label>
    </template>

    <!-- comment this out if you also want the help to be shown -->
    <template #help>
      <p class="form__extra-help">Tilvalg af afleveringsforsikring er betinget af en aftale på minimum 12 måneder </p>
    </template>

  </FormKit>
  <FormKit
    type="checkbox"
    label="Lav selvrisiko"
    name="lavSelvrisiko"
    help="Ved køb af lav selvrisiko, er du dækket for skader på bilen ved aflevering."
    label-class="add__price-selv add__price"
    wrapper-class="form__wrapper-input"
  >
    <template #label="{ id, label, help, classes }">
      <label :class="classes.label" :for="id"
        >{{ label }}

        <span v-if="help" :class="classes.tooltip">
          ?<span :class="classes.tooltipInner">{{ help }}</span>
        </span>
      </label>
    </template>

    <template #help>
      <p class="form__extra-help">Tilvalg af lav selvrisiko er betinget af at du minimum er fyldt 30 år.</p>
    </template>

  </FormKit>
  <FormKit
    type="checkbox"
    label="Viking Vejhjælp "
    name="vikingVejhjaelp"
    help="Ved køb af Viking Vejhjælp, er du dækket for skader på bilen ved aflevering."
    wrapper-class="form__wrapper-input"
    label-class="add__price-vej add__price"
  >
    <template #label="{ id, label, help, classes }">
      <label :class="classes.label" :for="id"
        >{{ label }}

        <span v-if="help" :class="classes.tooltip">
          ?<span :class="classes.tooltipInner">{{ help }}</span>
        </span>
      </label>
    </template>

    <template #help>
      <p class="form__extra-help">I samarbejde med Viking tilbyder vi vejhjælp til kun 49 kr.</p>
    </template>

  </FormKit>
  <FormKit
    type="checkbox"
    label="Komplet sæt vinterhjul"
    label-class="add__price-hjul add__price"
    wrapper-class="form__wrapper-input"
    name="kompletSaetVinterhjul"
    help="Ved køb af Komplet sæt vinterhjul, er du dækket for skader på bilen ved aflevering."
  >
    <template #label="{ id, label, help, classes }">
      <label :class="classes.label" :for="id"
        >{{ label }}

        <span v-if="help" :class="classes.tooltip">
          ?<span :class="classes.tooltipInner">{{ help }}</span>
        </span>
      </label>
    </template>

    <template #help>
      <p class="form__extra-help">I samarbejde med Viking tilbyder vi vejhjælp til kun 49 kr.</p>
    </template>


  </FormKit>

</template>

<script>
export default {
  name: "SpecificCar",

  data() {
    return {
      pictureURL: import.meta.env.VITE_APP_PICTURE_URL,
      fileURL: import.meta.env.VITE_APP_FILE_ID_URL,
      currentURL: import.meta.env.VITE_APP_CARS_URL,
      carData: {},
      carImages: {},
      lavSelvrisiko: false,
      afleveringsforsikring: false,
      vikingVejhjaelp: false,
      kompletSaetVinterhjul: false,
      carId: this.$route.params.id,
      readerAPI: import.meta.env.VITE_APP_READER_API,
    };
  },
  created() {

  
  },
  methods: {
  },
  computed: {
  },
};
</script>
<style>
[data-checked]  {
  background-color: #f8f6f6;
  color: black;
}
.form__wrapper-input{
  padding: 0 10px;
}

.formkit-tooltip-inner {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 10px;
  background: white;
  padding: 7px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  min-width: 200px;
}
.formkit-tooltip {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
  color: #1892c3;
  font-size: 0.85rem;
  font-weight: normal;
  border: 1px solid #1892c3;
  border-radius: 50%;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.formkit-tooltip:hover .formkit-tooltip-inner {
  display: block;
  padding: 8px 10px;
  color: #fff;
  text-align: left;
  text-decoration: none;
  background-color: #373737;
  border-radius: 6px;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  min-height: 34px;
}

.formkit-tooltip:hover {
  background-color: #1892c3;
  color: #fff;
}
.form__extra-help{
  font-size: 0.9rem;
  color: #373737;
 margin: 0.5rem 0;
}


</style>
