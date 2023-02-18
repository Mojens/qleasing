<template>
  <FormKit
    type="text"
    name="Fornavn"
    id="first_name"
    validation="required|alpha_spaces|length:2,30"
    :validation-messages="{
      alpha_spaces: 'Venligst skriv et gyldigt navn',
      length: 'Længden af navnet skal være mellem 2 og 30 tegn',
      required: 'Navn er påkrævet',
    }"
    validation-visibility="dirty"
    label="Fornavn*"
    input-class="custom__placeholder"
    placeholder="Hanne"
    :floating-label="false"
  />
  <FormKit
    type="text"
    name="Efternavn"
    id="last_name"
    label="Efternavn*"
    validation="required|alpha_spaces|length:2,50"
    :validation-messages="{
      alpha_spaces: 'Venligst skriv et gyldigt navn',
      length: 'Længden af navnet skal være mellem 2 og 50 tegn',
      required: 'Navn er påkrævet',
    }"
    validation-visibility="dirty"
    input-class="custom__placeholder"
    placeholder="Holm Olsen"
    :floating-label="false"
  />
  <FormKit
    type="text"
    name="Adresse"
    id="address"
    label="Adresse*"
    validation="required|length:2,50"
    :validation-messages="{
      length: 'Længden af adressen skal være mellem 2 og 50 tegn',
      required: 'Adresse er påkrævet',
    }"
    validation-visibility="dirty"
    input-class="custom__placeholder"
    placeholder="Karl Th Torpvej 3, 3. tv"
    :floating-label="false"
  />

  <FormKit
    type="mask"
    label="Postnummer"
    name="postnummer"
    mask="####"
    unmask-value="true"
    :floating-label="false"
    input-class="custom__placeholder"
    validation="required|number|length:4,4"
    :validation-messages="{
      alpha: 'Venligst skriv et gyldigt postnummer',
      length: 'Længden af postnummeret skal være 4 tal',
      required: 'Postnummer er påkrævet',
    }"
    validation-visibility="dirty"
  />
  <FormKit
    type="text"
    id="city"
    label="By*"
    name="By"
    validation="required|length:2,50"
    :validation-messages="{
      length: 'Længden af byen skal være mellem 2 og 50 tegn',
      required: 'By er påkrævet',
    }"
    validation-visibility="dirty"
    input-class="custom__placeholder"
    placeholder="Valby"
    :floating-label="false"
  />

  <FormKit
    type="email"
    name="Email"
    id="email"
    label="Email*"
    input-class="custom__placeholder"
    placeholder="hannep@outlook.com"
    validation="required|email"
    :validation-messages="{
      required: 'Email er påkrævet',
      email: 'Venligst skriv en gyldig email',
    }"
    validation-visibility="dirty"
    :floating-label="false"
  />
  <FormKit
    type="mask"
    mask="## ## ## ##"
    name="phone"
    id="phone"
    mode="replace"
    validation="required|length:8,8"
    :validation-messages="{
      required: 'Telefon er påkrævet',
      length: 'Længden af telefonnummeret skal være 8 tal',
    }"
    validation-visibility="dirty"
    allow-incomplete="false"
    show-mask="true"
    unmask-value="true"
    label="Telefon*"
    input-class="custom__placeholder"
    :floating-label="false"
  />

  <FormKit
    type="mask"
    mask="######-####"
    name="CPR"
    id="cpr"
    mode="replace"
    validation="required|length:10,10"
    :validation-messages="{
      required: 'CPR er påkrævet',
      length: 'Længden af CPR nummeret skal være 10 tal',
    }"
    validation-visibility="dirty"
    allow-incomplete="false"
    show-mask="true"
    unmask-value="true"
    label="CPR nummer*"
    label-class="label-for-cpr"
    :floating-label="false"
    help="Vi skal bruge dit CPR-nummer for at identificere dig som indehaveren af den konto, som pengene skal trækkes fra. Vi passer godt på din data og overholder selvfølgelig persondataloven"
  >
    <template #label="{ id, label, help, classes }">
      <label :class="classes.label" :for="id">
        {{ label }}
        <span v-if="help" :class="classes.tooltip">
          ?
          <span :class="classes.tooltipInner">{{ help }}</span>
        </span>
      </label>
    </template>

    <template #help>
      <p class="form__extra-help"></p>
    </template>
  </FormKit>

  <div class="label-for-cpr">
    <h4>Betalingsoplysninger</h4>
    <label class="label-for-cpr">
      <span class="formkit-tooltip">
        ?
        <span class="formkit-tooltip-inner"
          >For at vi kan oprette aftalen med dig, skal vi bruge dit konto- og
          registreringsnummer, som løbende bliver faktureret for din
          leasingaftale hos Quickleasing. Vi opbevarer naturligvis dine data
          sikkert og i overensstemmelse med persondataloven. Vi trækker
          selvfølgelig ikke penge fra din konto, før du har underskrevet den
          endelige kontrakt.
        </span></span
      ></label
    >
  </div>

  <div></div>

  <FormKit
    type="mask"
    mask="####"
    name="Registreringsnummer"
    id="registreringsnummer"
    mode="replace"
    validation="required"
    :validation-messages="{
      required: 'Registreringsnummer er påkrævet',
    }"
    validation-visibility="dirty"
    allow-incomplete="false"
    show-mask="true"
    unmask-value="true"
    label="Registreringsnummer*"
    input-class="custom__placeholder"
    :floating-label="false"
  />

  <FormKit
    type="mask"
    mask="(000)#######"
    name="Kontonummer"
    id="kontonummer"
    mode="replace"
    validation="required"
    :validation-messages="{
      required: 'Kontonummer er påkrævet',
    }"
    validation-visibility="dirty"
    allow-incomplete="false"
    show-mask="true"
    help="De første 3 nuller er medtaget automatisk"
    unmask-value="true"
    label="Kontonummer*"
    input-class="custom__placeholder"
    :floating-label="false"
  />
  <div style="margin-bottom: 9rem">
    <FormKit
      type="checkbox"
      label="Persondatapolitik"
      validation="accepted"
      help="Ved at hakke ovenstående Persondatapolitik boksen af, bekræfter jeg, at jeg er indforstået med
    behandlingen af mine persondata i henhold til følgende <a href='/persondatapolitik'>persondatapolitikken</a>."
      :validation-messages="{
    accepted: 'Du skal acceptere persondatapolitikken for at fortsætte',
  }"
    >
      <template #help="{ help }">
        <p style="font-size: 12px" class="form__extra-help" v-html="help"></p>
      </template>
    </FormKit>



  </div>
  <p style="font-size: 12px">Ved at klikke "forsæt", vil du herefter blive kontaktet hurtigst mulig med henblik på leasingaftale med Quickleasing A/S</p>
</template>
<style>
.label-for-cpr {
  display: flex;
  margin: 0;
  padding-top: 1.2px;
}
.custom__inner {
  font-family: var(--fk-font-family-label);
  font-size: var(--fk-font-size-label);
  font-weight: var(--fk-font-weight-label);
  line-height: var(--fk-line-height-label);

  margin: var(--fk-margin-label);
  padding: var(--fk-padding-label);
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
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  color: #1892c3;

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
.form__extra-help {
  font-size: 0.9rem;
  color: #373737;
  margin: 0.5rem 0;
}
</style>
