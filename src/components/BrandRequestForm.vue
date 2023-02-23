<script setup>
import autoAnimate from "@formkit/auto-animate";
import { ref, onMounted } from "vue";
import { carModels } from "@/components/data/cars.js";

// function to use autoAnimate the library, when submit(function already exists called createForm) is clicked if there are errors
const example = ref();
onMounted(() => {
  example.value.querySelectorAll(".formkit-outer").forEach(autoAnimate);
});

const carBrands = [
  {
    label: "Audi",
    value: "audi",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/audi-logo.png",
  },
  {
    label: "BMW",
    value: "bmw",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/bmw-logo.png",
  },
  {
    label: "Citroen",
    value: "citroen",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/citroen-logo.png",
  },
  {
    label: "DS",
    value: "ds",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/ds.png",
  },
  {
    label: "Fiat",
    value: "fiat",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/fiat-logo.png",
  },
  {
    label: "Ford",
    value: "ford",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/ford-logo.png",
  },
  {
    label: "Honda",
    value: "honda",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/honda-logo.png",
  },
  {
    label: "Hyundai",
    value: "hyundai",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/hyundai-logo.png",
  },
  {
    label: "Jeep",
    value: "jeep",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/jeep-logo.png",
  },

  {
    label: "Kia",
    value: "kia",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/kia-logo.png",
  },

  {
    label: "Mazda",
    value: "mazda",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mazda-logo.png",
  },
  {
    label: "Jeep",
    value: "jeep",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/jeep-logo.png",
  },
  {
    label: "Mercedes",
    value: "mercedes-benz",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mercedes-logo.png",
  },

  {
    label: "Mitsubishi",
    value: "mitsubishi",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mitsubishi-logo.png",
  },
  {
    label: "Nissan",
    value: "nissan",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/nissan-logo.png",
  },
  {
    label: "Opel",
    value: "opel",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/opel-logo.png",
  },
  {
    label: "Peugeot",
    value: "peugeot",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/peugeot-logo.png",
  },

  {
    label: "Renault",
    value: "renault",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/renault-logo.png",
  },
  {
    label: "Seat",
    value: "seat",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/seat.png",
  },
  {
    label: "Suzuki",
    value: "suzuki",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/suzuki-logo.png",
  },
  {
    label: "Skoda",
    value: "skoda",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/skoda-logo.png",
  },
  {
    label: "Toyota",
    value: "toyota",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/toyota-logo.png",
  },
  {
    label: "Volkswagen",
    value: "volkswagen",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/volkswagen-logo.png",
  },
  {
    label: "Volvo",
    value: "volvo",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/volvo-logo.png",
  },
];
</script>
<template>
  <div ref="example" class="example formkit-example">
    <h2 class="form-label">Efterlys en bil</h2>
    <FormKit
      #default="{ value }"
      :incomplete-message="'Ikke alle felter er udfyldt korrekt'"
      form-class="vue-form"
      submit-label="Send Henvendelse"
      type="form"
      @submit="createForm"
    >
      <FormKit
        id="name"
        :floating-label="true"
        :label="value.name ? 'Navn*' : ''"
        :validation-messages="{
          alpha_spaces: 'Venligst skriv et gyldigt navn',
          length: 'Længden af navnet skal være mellem 2 og 50 tegn',
          required: 'Navn er påkrævet',
        }"
        input-class="custom__placeholder"
        name="name"
        placeholder="*Navn: Hanne Petersen"
        prefix-icon="avatarMan"
        type="text"
        validation="required|alpha_spaces|length:2,50"
        validation-visibility="dirty"
        wrapper-class="width--full"
      />
      <FormKit
        id="email"
        :label="value.email ? 'Email*' : ''"
        :validation-messages="{
          required: 'Email er påkrævet',
          email: 'Venligst skriv en gyldig email',
        }"
        input-class="custom__placeholder"
        name="email"
        placeholder="*Email: hannep@outlook.com"
        prefix-icon="email"
        type="email"
        validation="required|email"
        validation-visibility="dirty"
        wrapper-class="width--full"
      />

      <FormKit
        type="tel"
        id="phone"
        :label="value.phone ? 'Telefon' : ''"
        input-class="custom__placeholder"
        name="phone"
        placeholder="Tlf: 28448900"
        prefix-icon="telephone"
        autocomplete="tel-national"
        maxlength="8"
        minlength="8"
        validation="number|length:8,8"
        wrapper-class="width--full"
        :validation-messages="{
          number: 'Venligst skriv et telefonnummer med kun tal',
          length: 'Dit telefonnummer skal være på 8 cifre',
        }"
        validation-visibility="dirty"
      />
      <div class="grid--auto-3-3">
        <FormKit
          v-model="formData.selectedBrands"
          :filter="
            (option, search) =>
              option.label.toLowerCase().startsWith(search.toLowerCase())
          "
          :option-label="(option) => option.label"
          :options="carBrands"
          label="Vælg en eller flere mærker"
          name="brands"
          type="taglist"
        >
          <template #option="{ option }">
            <div class="formkit-option">
              <img
                v-if="option.value !== '*'"
                :src="option.logo"
                alt="optionImage"
                class="no_styling"
              />
              <span>{{ option.label }}</span>
            </div>
          </template>

          <template #tag="{ handlers, option }">
            <div class="formkit-tag">
              <img
                :src="option.logo"
                alt="Brand-logo"
                class="formkit-tag-image"
              />
              <span class="formkit-tag-label">
                {{ option.label }}
              </span>
              <button
                aria-controls="input_1"
                class="formkit-remove-selection"
                tabindex="-1"
                type="button"
                @click.prevent="handlers.removeSelection(option)()"
              >
                <span class="formkit-close-icon formkit-icon"
                  ><svg viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z"
                      fill="currentColor"
                    ></path></svg
                ></span>
              </button>
            </div>
          </template>
        </FormKit>

        <!-- FormKit for models based on carBrand choice -->
        <FormKit
          :option-label="(option) => option.label"
          :options="filteredCarModels"
          label="Vælg en eller flere modeller"
          name="models"
          type="taglist"
        >
          <template #option="{ option }">
            <div class="formkit-option">
              <span style="text-transform: capitalize"
                >{{ option.brand }} {{ option.label }}</span
              >
            </div>
          </template>

          <template #tag="{ handlers, option }">
            <div class="formkit-tag">
              <span class="formkit-tag-label">
                {{ option.label }}
              </span>
              <button
                aria-controls="input_1"
                class="formkit-remove-selection"
                tabindex="-1"
                type="button"
                @click.prevent="handlers.removeSelection(option)()"
              >
                <span class="formkit-close-icon formkit-icon"
                  ><svg viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2.51-.2.71,0,.2.2,.2.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z"
                      fill="currentColor"
                    ></path></svg
                ></span>
              </button>
            </div>
          </template>
        </FormKit>

        <!-- FormKit for Brændstof type, with El and Plug-in-Hybrid -->
        <FormKit
          :option-label="(option) => option.label"
          :options="[
            { label: 'El', value: 'el' },
            { label: 'Plug-in-Hybrid', value: 'plug_in_hybrid' },
            { label: 'Anhængetræk', value: 'traek' },
            { label: 'Ryger Bil', value: 'ryger_bil' },
            { label: 'Automatgear', value: 'automatgear' },
          ]"
          label="Andre efterlysninger"
          name="extra"
          type="checkbox"
        />
      </div>
      <FormKit
        id="note"
        :floating-label="false"
        input-class="custom__placeholder"
        label="Bemærkning"
        name="note"
        placeholder="Hej, jeg er på udkig efter en bil med disse specifikationer..."
        type="textarea"
        wrapper-class="width--full"
      />
    </FormKit>

  </div>

</template>

<script>
import { FormKitMessages } from "@formkit/vue";

import { carModels as modelsOfCar } from "./data/cars.js";

export default {
  name: "BrandRequestForm",

  components: { FormKitMessages },
  data: function () {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        note: "",
        carModels: modelsOfCar,
        extra: [],
        brands: [],
        models: [],

        selectedBrands: [],


      },

      submitted: false,
    };
  },

  methods: {
    createForm: async function (fields) {
      const READER_API = import.meta.env.VITE_APP_READER_API;
      const POST_URL = import.meta.env.VITE_APP_BRAND_REQUEST_POST_URL;

      this.formData.name = fields.name;
      this.formData.email = fields.email;
      this.formData.phone = fields.phone;

      this.formData.brands = fields.brands;
      this.formData.models = fields.models;

      this.formData.extra = fields.extra;
      this.formData.note = fields.note;


      const formData = {
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        note: this.formData.note,
        brands: this.formData.brands,
        models: this.formData.models,
        extra: this.formData.extra,
      };

      const response = await fetch(POST_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${READER_API}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      this.submitted = true;
      console.log(data);
    },
  },
  computed: {
    filteredCarModels() {
      console.log(this.selectedBrands);
      if (this.formData.selectedBrands.length === 0) {
        return this.formData.carModels;
      } else {
        return this.formData.carModels.filter((model) => {
          return this.formData.selectedBrands.includes(model.brand);
        });
      }
    },
  },
};
</script>
<style>
.formkit-tag-image {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.example {
  border: none;
  display: block;
  background: var(--action);
  width: 100%;
  box-sizing: border-box;
}

.example:deep(.formkit-outer) {
  margin-bottom: 1em;
}

.example:deep(button) {
  margin-bottom: 0;
}

.example:deep(.formkit-outer[data-type="submit"]) {
  margin-bottom: 0;
}

.example:deep(input) {
  width: 100%;
  box-sizing: border-box;
}

.example:deep(.formkit-messages + .formkit-actions) {
  margin-top: 1em;
}

.example:deep(.formkit-messages) {
  margin-bottom: 1em;
}
</style>
