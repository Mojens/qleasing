<script setup>
import autoAnimate from "@formkit/auto-animate";
import { ref, onMounted } from "vue";

// function to use autoAnimate the library, when submit(function already exists called createForm) is clicked if there are errors
const example = ref()
onMounted(() => {
  example.value.querySelectorAll(".formkit-outer").forEach(autoAnimate)
})



</script>
<template>
  <div class="example formkit-example" ref="example" >
    <h2 class="form-label">Quickleasing Kontakt Form</h2>
    <FormKit
      type="form"
      @submit="createForm"
      form-class="vue-form"
      submit-label="Send Henvendelse"
      #default="{ value, state: { valid } }"
      :incomplete-message="'Ikke alle felter er udfyldt korrekt'"

    >
      <FormKit
        type="text"
        name="name"
        id="name"
        validation="required|alpha_spaces|length:2,50"
        :validation-messages="{
          alpha_spaces: 'Venligst skriv et gyldigt navn',
          length: 'Længden af navnet skal være mellem 2 og 50 tegn',
          required: 'Navn er påkrævet',
        }"
        validation-visibility="dirty"
        :label="value.name ? 'Navn*' : ''"
        input-class="custom__placeholder"
        prefix-icon="avatarMan"
        placeholder="*Navn: Hanne Petersen"
        :floating-label="true"
        wrapper-class="width--full"
      />
      <FormKit
        type="email"
        name="email"
        id="email"
        :label="value.email ? 'Email*' : ''"
        input-class="custom__placeholder"
        prefix-icon="email"
        placeholder="*Email: hannep@outlook.com"
        validation="required|email"
        :validation-messages="{
          required: 'Email er påkrævet',
          email: 'Venligst skriv en gyldig email',
        }"
        validation-visibility="dirty"
        wrapper-class="width--full"
      />

      <FormKit
        type="tel"
        name="phone"
        id="phone"
        placeholder="Tlf: 28448900"
        validation="matches:/^(\s*\d\s*){8}$/"
        :validation-messages="{
          matches:
            'Telefon nummeret skal være i formatet xxxxxxxx, uden mellemrum',
        }"
        validation-visibility="dirty"
        maxlength="8"
        minlength="8"
        :label="value.phone ? 'Telefon' : ''"
        input-class="custom__placeholder"
        prefix-icon="telephone"
        wrapper-class="width--full"
      />
      <FormKit
        type="group"
        name="inquiry_reason_condition"
        id="inquiry_reason_condition"
        #default="{ value, id, errors, validations }"
      >
        <FormKit
          type="select"
          name="inquiry_reason_member"
          :options="[
            {
              value: 'onsker_kontakt',
              label: 'Ønsker du kontakt med..',

              attrs: { disabled: true },
            },
            { value: 'vaerksted', label: 'Værksted' },
            { value: 'leasingkonsulenter', label: 'Leasingkonsulenter' },
            {
              value: 'udleveringen_af_biler',
              label: 'Ind/udleveringen af biler',
            },
            {
              value: 'bogholderi',
              label: 'Bogholderi, PBS, km-afregninger m.m.',
            },
          ]"
          validation="required|not:onsker_kontakt"
          :validation-messages="{
            not: 'Du skal vælge en henvendelse årsag',
          }"
          validation-visibility="dirty"
          help="Hvad handler din henvendelse om?"
          select-icon="arrowDown"
          prefix-icon="open"
          wrapper-class="width--full"
          key="inquiry_reason_member"
        />

        <FormKit
          type="text"
          :label="value.regNumber ? 'Nummerplade' : ''"
          name="regNumber"
          id="regNumber"
          v-if="value.inquiry_reason_member === 'vaerksted'"
          :hidden="value !== 'vaerksted'"
          maxlength="7"
          minlength="7"
          placeholder="DS36328"
          help="Reg.nr. Hvilken bil ønskes du kontakt om?"
          validation="required|matches:/^[A-Za-z]{2}\d{5}$/"
          :validation-messages="{
            matches: 'Nummerplade er ikke i korrekt format',
            required: 'Nummerplade er påkrævet',
          }"
          input-class="custom__input--uppercase"
          validation-visibility="live"
          key="regNumber"
        />
        <FormKit
          type="radio"
          label="Ønske?"
          name="inquiry_reason_framework"
          :options="[
            { label: 'Lease en bil hos os', value: 'lease_bil' },
            {
              label: 'Forlænge din nuværende leasingaftale',
              value: 'forlaenge_leasingaftale',
            },
          ]"
          aria-required="true"
          validation-visibility="dirty"
          :validation-messages="{
            required: 'Du skal vælge et ønske',
          }"
          v-if="value.inquiry_reason_member === 'leasingkonsulenter'"
          key="inquiry_reason_framework"
        />
        <FormKit
          type="text"
          :label="value.age ? 'Alder' : ''"
          name="age"
          id="age"
          v-if="
            value.inquiry_reason_member === 'leasingkonsulenter' &&
            value.inquiry_reason_framework === 'lease_bil'
          "
          placeholder="34"
          maxlength="2"
          required="inquiry_reason.member === 'leasingkonsulenter'"
          validation="required|number|max:99|min:18"
          :validation-messages="{
            number: 'Alder skal være et tal',
            max: 'Alder skal være under 100',
            min: 'Alder skal være over 18',
            required: 'Alder er påkrævet',
          }"
          validation-visibility="live"
          help="Hvor gammel er du?"
          input-class="custom__placeholder"
          prefix-icon="age"
        />
        <FormKit
          type="text"
          :label="value.regNumberTwo ? 'Nummerplade' : ''"
          name="regNumberTwo"
          id="regNumberTwo"
          v-if="
            value.inquiry_reason_member === 'leasingkonsulenter' &&
            value.inquiry_reason_framework === 'forlaenge_leasingaftale'
          "
          maxlength="7"
          minlength="7"
          placeholder="DS77323"
          validation="required|matches:/^[A-Za-z]{2}\d{5}$/"
          :validation-messages="{
            matches: 'Nummerplade er ikke i korrekt format',
            required: 'Nummerplade er påkrævet',
          }"
          help="Reg.nr. Hvilken bil ønskes du kontakt om?"
          input-class="custom__input--uppercase"
          validation-visibility="live"
          key="regNumberTwo"
        />
        <div v-if="submitted && valid">
          <p class="success-message">
            Tak fordi du har sendt din henvendelse! Vi vil besvare din
            forespørgsel så hurtigt som muligt.
          </p>
        </div>
      </FormKit>
      <span class="center--right counter"
        >{{ note.text.length }} / {{ note.maxlength }}</span
      >
      <FormKit
        type="textarea"
        label="Bemærkning"
        name="note"
        id="note"
        :maxlength="note.maxlength"
        placeholder="Hej, jeg har et spørgsmål angående..."
        input-class="custom__placeholder"
        :floating-label="false"
        wrapper-class="width--full"

      />
    </FormKit>

  </div>

</template>

<script>
import { FormKitMessages } from "@formkit/vue";


export default {

  name: "ContactForm",

  components: { FormKitMessages },
  data: function () {
    return {

      name: "",
      email: {
        value: "",
      },
      inquiry_reason: {
        member: "onsker_kontakt",
        framework: "",
      },
      regNumber: "",
      regNumberTwo: "",
      age: "",
      phone: "",
      note: {
        text: "",
        maxlength: 255,
      },
      submitted: false,
    };
  },

  methods: {
    createForm: async function (fields) {


      const READER_API = import.meta.env.VITE_APP_READER_API;
      const POST_URL = import.meta.env.VITE_APP_CONTACT_FORM_URL;

      this.name = fields.name;
      this.email.value = fields.email;
      this.inquiry_reason.member =
        fields.inquiry_reason_condition.inquiry_reason_member;
      this.regNumber = fields.inquiry_reason_condition.regNumber;
      this.inquiry_reason.framework =
        fields.inquiry_reason_condition.inquiry_reason_framework;
      this.age = fields.inquiry_reason_condition.age;
      this.regNumberTwo = fields.inquiry_reason_condition.regNumberTwo;
      this.phone = fields.phone;
      this.note.text = fields.note;



      const formData = {
        email: this.email.value,
        inquiry_reason: this.inquiry_reason.member,
        name: this.name,
        phone: this.phone,
        reg_number: this.regNumber,
        desire: this.inquiry_reason.framework,
        age: this.age,
        reg_number_two: this.regNumberTwo,
        note: this.note.text,
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

};
</script>
<style scoped>
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