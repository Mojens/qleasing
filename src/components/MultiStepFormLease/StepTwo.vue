<template>
  <FormKit type="number" label="Ønsket løbetid" name="oensketLobetid" />
  <FormKit
    type="radio"
    label="Service- og vedligeholdelse"
    name="serviceOgVedligeholdelse"
    :options="['Inkl.', 'Ikke inkl.']"
  />
  <FormKit type="number" label="Depositum" name="depositum" />
  <FormKit
    type="radio"
    label="Serviceaftale"
    name="serviceaftale"
    :options="['Inkl.', 'Ikke inkl.']"
  />
  <FormKit type="text" label="Afleveringsrapport" name="afleveringsrapport" />
  <FormKit type="select" label="Ombytning til Premium helårsdæk"
  name="ombytningTilPremiumHelaarsdaek" :options="['17', '18']" />
  <FormKit
    type="text"
    label="Ekstra km udover km 15.000 årligt"
    name="ekstraKm"
  />
  <FormKit
    type="radio"
    label="Alder"
    name="alder"
    :options="['18-24', '25-29', '30-34']"
  />
</template>
