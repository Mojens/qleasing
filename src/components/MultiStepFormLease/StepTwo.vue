<script setup>
const lobetider = [
  {
    label: "6 mdr.",
    value: "6",
  },
  {
    label: "12 mdr.",
    value: "12",
  },
  {
    label: "24 mdr.",
    value: "24",
  },
  {
    label: "36 mdr.",
    value: "36",
  },
  {
    label: "48 mdr.",
    value: "48",
  },
];
const extra_kilometer_aar = [
  {
    label: "0 km",
    value: "0",
  },
  {
    label: "5.000 km",
    value: "5000",
  },
  {
    label: "10.000 km",
    value: "10000",
  },
  {
    label: "15.000 km",
    value: "15000",
  },
];

const premiumDaek = [
  {
    label: "Nej tak",
    value: "nej",
  },
  {
    label: "Kontant",
    value: "kontant",
  },
  {
    label: "Finansiert",
    value: "finansiert",
  },
];

const age_driver = [
  {
    label: "23-24 År",
    value: "18-24",
  },
  {
    label: "25-29 År",
    value: "25-34",
  },
  {
    label: "30-39 År",
    value: "35-44",
  },
  {
    label: "40+ År",
    value: "40_plus",
  },
];
</script>

<template>
  <FormKit
    type="dropdown"
    label="Ønsket Løbetid*"
    name="oensketLobetid"
    :options="lobetider"
    :floating-label="false"
    :inner-class="{
      searchFilter__select: true,
    }"
    placeholder="Længde i måneder"
    help="Længden på din leasingaftale i måneder - Prisen er billigere jo længere du binder dig."
    validation="required"
    :validation-messages="{
      required: 'Løbetid er påkrævet',
    }"
    validation-visibility="dirty"
    value="36"
  >
    <template #option="{ option }">
      <div class="formkit-option">
        <span>{{ option.label }}</span>
      </div>
    </template>
  </FormKit>

  <FormKit
    type="dropdown"
    label="Ekstra kilometer pr. år*"
    name="oensketKilometer"
    :options="extra_kilometer_aar"
    help="Ekstra km udover km 15.000 årligt - "
    placeholder="Ekstra kilometer pr. år"
    validation="required"
    :validation-messages="{
      required: 'Ekstra kilometer er påkrævet',
    }"
    validation-visibility="dirty"
    value="0"

  >

    <template #option="{ option }">
      <div class="formkit-option">
        <span>{{ option.label }}</span>
      </div>
    </template>



  </FormKit>

  <FormKit
    type="dropdown"
    label="Premium helårsdæk*"
    name="ombytningTilPremiumHelårsdæk"
    :options="premiumDaek"
    :floating-label="false"
    :inner-class="{
      searchFilter__select: true,
    }"
    placeholder="Primium helårsdæk"
    help="Ombytning til Primium helårsdæk"
    validation="required"
    :validation-messages="{
      required: 'Ombytning til Primium helårsdæk er påkrævet',
    }"
    validation-visibility="dirty"

  >
    <template #option="{ option }">
      <div class="formkit-option">
        <span >{{ option.label }}</span>
      </div>
    </template>
  </FormKit>

  <FormKit
    type="dropdown"
    label="Alder*"
    name="alder"
    :options="age_driver"
    :floating-label="false"
    :inner-class="{
      searchFilter__select: true,
    }"
    placeholder="Alder på fører"
    help="Alder på fører"
    validation="required"
    :validation-messages="{
      required: 'Alder på fører er påkrævet',
    }"
    validation-visibility="dirty"

  >
    <template #option="{ option }">
      <div class="formkit-option">
        <span>{{ option.label }}</span>
      </div>
    </template>

  </FormKit>
</template>
<style>

</style>