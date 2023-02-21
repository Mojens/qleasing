<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";

const dropdown = ref(); // we need a DOM node
const show = ref(false);

onMounted(() => {
  autoAnimate(dropdown.value); // thats it!
});

const allUdstyr = [
  { name: "Automatgear Tiptronic", value: "autgeartiptronic", count: 0 },
  { name: "Ratgearskifte", value: "ratgearskifte", count: 0 },
  { name: "Alufælge 15 tommer", value: "15Alufaelge", count: 0 },
  { name: "Alufælge 16 tommer", value: "16alufaelge", count: 0 },
  { name: "Alufælge 17 tommer", value: "17alufaelge", count: 0 },
  { name: "Alufælge 18 tommer", value: "18alufaelge", count: 0 },
  { name: "Alufælge 19 tommer", value: "19alufaelge", count: 0 },
  { name: "Alufælge 20 tommer", value: "20alufaelge", count: 0 },
  { name: "Alufælge 21 tommer", value: "21alufaelge", count: 0 },
  { name: "Alufælge 22 tommer", value: "22alufaelge", count: 0 },
  { name: "Vinterhjul", value: "vinterhjul", count: 0 },
  { name: "Varme i rat", value: "varmeirat", count: 0 },
  { name: "Aircondition", value: "airc", count: 0 },
  { name: "Fuldautomatisk klimaanlæg", value: "fuldautklima", count: 0 },
  { name: "2-zone klimaanlæg", value: "2zoneklima", count: 0 },
  { name: "3-zone klimaanlæg", value: "3zoneklima", count: 0 },
  { name: "4-zone klimaanlæg", value: "4zoneklima", count: 0 },
  { name: "Køl i handskerum", value: "koelihandskerum", count: 0 },
  { name: "Elektrisk kabinevarmer", value: "elektriskkabinevarmer", count: 0 },
  { name: "Motorkabinevarmer", value: "motorkabinevarmer", count: 0 },
  { name: "Alarm", value: "alarm", count: 0 },
  { name: "Centrallås", value: "claas", count: 0 },
  { name: "Fjernbetjent centrallås", value: "fjernbclaas", count: 0 },
  { name: "Nøglefri betjening", value: "noeglefribetjening", count: 0 },
  { name: "Fartpilot", value: "fartpilot", count: 0 },
  { name: "Kørecomputer", value: "koerecomputer", count: 0 },
  { name: "Infocenter", value: "infocenter", count: 0 },
  { name: "Startspærre", value: "startspaerre", count: 0 },
  { name: "Varme i forrude", value: "varmeiforrude", count: 0 },
  {
    name: "Automatisk nedblændeligt bakspejl",
    value: "autonedblbakspejl",
    count: 0,
  },
  { name: "Udvendig temperaturmåler", value: "udvtempmaaler", count: 0 },
  { name: "Regnsensor", value: "regnsensor", count: 0 },
  { name: "Sædevarme", value: "saedevarme", count: 0 },
  { name: "Højdejusterbare forsæder", value: "hoejdejustforsaeder", count: 0 },
  {
    name: "Højdejusterbart førersæde",
    value: "hoejdejustfoerersaede",
    count: 0,
  },
  {
    name: "Elektrisk indstillelige forsæder",
    value: "elindstforsaeder",
    count: 0,
  },
  {
    name: "Elektrisk indstilleligt førersæde",
    value: "elindstfoerersaede",
    count: 0,
  },
  {
    name: "Elektrisk indstilleligt førersæde med memory",
    value: "elindstfoerersaedemmemory",
    count: 0,
  },
  { name: "Soltag", value: "soltag", count: 0 },
  { name: "Elektrisk soltag", value: "elsoltag", count: 0 },
  { name: "Glastag", value: "glastag", count: 0 },
  { name: "4x el-ruder", value: "4xelruder", count: 0 },
  { name: "El-spejle", value: "elspejle", count: 0 },
  { name: "El-ruder", value: "elruder", count: 0 },
  { name: "El-klapbare sidespejle", value: "elklapbaresidespejle", count: 0 },
  {
    name: "El-klapbare sidespejle med varme",
    value: "elklapbaresidespejlemvarme",
    count: 0,
  },
  { name: "El-spejle med varme", value: "elspejlemvarme", count: 0 },
  {
    name: "Automatisk parkeringssystem",
    value: "automatiskparkeringssystem",
    count: 0,
  },
  { name: "360 graders kamera", value: "360kamera", count: 0 },
  { name: "Bakkamera", value: "bakkamera", count: 0 },
  { name: "Parkeringssensor for", value: "parkeringssensorfor", count: 0 },
  { name: "Adaptiv fartpilot", value: "adaptivfartpilot", count: 0 },
  { name: "Parkeringssensor bag", value: "parkeringssensorbag", count: 0 },
  { name: "Automatisk start/stop", value: "automatiskstartstop", count: 0 },
  { name: "El-betjent bagklap", value: "elbetjentbagklap", count: 0 },
  { name: "Dæktryksmåler", value: "daektryksmaaler", count: 0 },
  { name: "Adaptiv undervogn", value: "adaptivundervogn", count: 0 },
  {
    name: "Elektrisk parkeringsbremse",
    value: "elektriskparkeringsbremse",
    count: 0,
  },
  { name: "Træthedsregistrering", value: "traethedsregistrering", count: 0 },
  { name: "Skiltegenkendelse", value: "skiltegenkendelse", count: 0 },
  { name: "CD-afspiller", value: "cd", count: 0 },
  { name: "CD-radio", value: "cdradio", count: 0 },
  { name: "Radio med CD-boks", value: "radiomedcdboks", count: 0 },
  { name: "DAB-radio", value: "dabradio", count: 0 },
  { name: "DAB+ radio", value: "dabplusradio", count: 0 },
  { name: "Navigation", value: "navigation", count: 0 },
  { name: "Multifunktionsrat", value: "multifunktionsrat", count: 0 },
  { name: "Håndfrit til mobil", value: "haandfrittilmobil", count: 0 },
  { name: "Bluetooth", value: "bluetooth", count: 0 },
  {
    name: "Musikstreaming via Bluetooth",
    value: "musikstreamingviabluetooth",
    count: 0,
  },
  { name: "Nightvision", value: "nightvision", count: 0 },
  { name: "Digitalt cockpit", value: "digitaltcockpit", count: 0 },
  { name: "Head-up display", value: "headupdisplay", count: 0 },
  { name: "Android Auto", value: "androidauto", count: 0 },
  { name: "Apple CarPlay", value: "applecarplay", count: 0 },
  { name: "Internet", value: "Internet", count: 0 },
  {
    name: "Trådløs mobilopladning",
    value: "traadloesmobilopladning",
    count: 0,
  },
  { name: "SD-kortlæser", value: "sdkortlæser", count: 0 },
  { name: "USB-tilslutning", value: "usbtilslutning", count: 0 },
  { name: "AUX-tilslutning", value: "auxtilslutning", count: 0 },
  { name: "Armlæn", value: "armlaen", count: 0 },
  { name: "Isofix", value: "isofix", count: 0 },
  { name: "Bagagerumsdækken", value: "bagagerumsdaekken", count: 0 },
  { name: "Kopholder", value: "kopholder", count: 0 },
  { name: "Stofindtræk", value: "stofindtraek", count: 0 },
  { name: "Dellæder", value: "dellaeder", count: 0 },
  { name: "Læderindtræk", value: "laederindtraek", count: 0 },
  { name: "Kunstlæder", value: "kunstlaeder", count: 0 },
  { name: "Splitbagsæde", value: "splitbagsaede", count: 0 },
  { name: "Læderrat", value: "laederrat", count: 0 },
  { name: "Sportsæder", value: "sportssaeder", count: 0 },
  { name: "El-komfortsæder", value: "elkomfortsaeder", count: 0 },
  { name: "Integrerede børnesæder", value: "integrerede boernesaeder", count: 0 },
  { name: "3 individuelle sæder i bag", value: "3 individuelle saeder i bag", count: 0 },
  { name: "Lygtevasker", value: "lygtevasker", count: 0 },
  { name: "Tågelygter", value: "taagelygter", count: 0 },
  { name: "Bi-xenon", value: "bixenon", count: 0 },
  { name: "Xenonlygter", value: "xenonlys", count: 0 },
  { name: "Automatisk lys", value: "automatisklys", count: 0 },
  { name: "Fjernlysassistent", value: "fjernlysassistent", count: 0 },
  { name: "Kurvelys", value: "kurvelys", count: 0 },
  { name: "LED kørelys", value: "ledkoerelys", count: 0 },
  { name: "Fuld LED-forlygter", value: "fuldledforlygter", count: 0 },
  { name: "Airbag", value: "airbag", count: 0 },
  { name: "Dobbelt airbag", value: "dbairbags", count: 0 },
  { name: "4 airbags", value: "4airbags", count: 0 },
  { name: "6 airbags", value: "6airbags", count: 0 },
  { name: "7 airbags", value: "7airbags", count: 0 },
  { name: "8 airbags", value: "8airbags", count: 0 },
  { name: "9 airbags", value: "9airbags", count: 0 },
  { name: "10 airbags", value: "10airbags", count: 0 },
  { name: "ABS", value: "abs", count: 0 },
  { name: "Antispin", value: "antispin", count: 0 },
  { name: "ESP", value: "esp", count: 0 },
  { name: "Servo", value: "servo", count: 0 },
  { name: "Vognbaneassistent", value: "vognbaneassistent", count: 0 },
  { name: "Blindvinkelsassistent", value: "blindvinkelsassistent", count: 0 },
  { name: "Automatisk nødbremsesystem", value: "automatisknoedbremsesystem", count: 0 },
  { name: "Sænket", value: "saenket", count: 0 },
  { name: "Tagræling", value: "tagraeling", count: 0 },
  { name: "Tonede ruder", value: "tonederuder", count: 0 },
  { name: "Mørktonede ruder i bag", value: "moerktonederuderibag", count: 0 },
  { name: "Afhentning", value: "afhentning", count: 0 },
  { name: "1 ejer", value: "1ejer", count: 0 },
  { name: "Ikke ryger", value: "ikkeryger", count: 0 },
  { name: "Nysynet", value: "nysynet", count: 0 },
  { name: "Lev. nysynet", value: "levnysynet", count: 0 },
  { name: "Service ok", value: "serviceok", count: 0 },
  { name: "Brugtbilsattest", value: "brugtbilsattest", count: 0 },
  { name: "Træk", value: "traek", count: 0 },
  { name: "Svingbart træk (manuel)", value: "svingbarttraekmanuel", count: 0 },
  { name: "Aftageligt træk", value: "aftagtraek", count: 0 },
  { name: "Svingbart træk (elektrisk)", value: "svingbarttraekelektrisk", count: 0 },
  { name: "Dieselpartikelfilter", value: "dieselpartikelfilter", count: 0 },
  { name: "Tidligere undervognsbehandlet", value: "tidligereundervognsbehandlet", count: 0 }
];
const lobetider = [
  {
    label: "6 mdr.",
    value: 6,
  },
  {
    label: "12 mdr.",
    value: 12,
  },
  {
    label: "24 mdr.",
    value: 24,
  },
  {
    label: "36 mdr.",
    value: 36,
  },
  {
    label: "48 mdr.",
    value: 48,
  },
];
const extra_kilometer_aar = [
  {
    label: "0 km",
    value: 0,
  },
  {
    label: "5.000 km",
    value: 5000,
  },
  {
    label: "10.000 km",
    value: 10000,
  },
  {
    label: "15.000 km",
    value: 15000,
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
    label: "Finansieret",
    value: "finansieret",
  },
];
const age_driver = [
  {
    label: "23-24 År",
    value: "23-24",
  },
  {
    label: "25-29 År",
    value: "25-29",
  },
  {
    label: "30-39 År",
    value: "30-39",
  },
  {
    label: "40+ År",
    value: "40_plus",
  },
];
</script>

<template>
  <div class="ct-section-inner-wrap specific__car-section">
    <!-- START DISPLAYING CAR -->

    <div id="portal">
      <div class="modal___25xvj" style="height: 100vh" :class="{ 'is-open___1eAPm': isModalOpen }">
        <div class="close-button-wrapper___1dYxl">
          <RouterLink to="/quickleasing" title="Quickleasing">
            <button class="button___2oWcS dark___2wNZC button___3129j rounded-corners___2DuU9">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                stroke="white" class="icon___3oVL5">
                <path d="M19.5 5L5.5 19" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                <path d="M19.5 19L5.5 5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
              </svg>
            </button>
          </RouterLink>
        </div>
        <div class="content___FOiFD" style="background: white">
          <div class="product___MbOUd">
            <div class="product-overview___h1U1n overview___1ZyZV">
              <RouterLink class="logoWrapper___3_qg1" to="/quickleasing"><svg xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="40" viewBox="0 0 38 40">
                  <defs>
                    <path id="a"
                      d="M19.487 13.64v8.283a1.85 1.85 0 01-1.851 1.851 1.85 1.85 0 01-1.851-1.851V13.64c0-.975.78-1.851 1.851-1.851 1.072.097 1.851.876 1.851 1.85z">
                    </path>
                  </defs>
                  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g fill-rule="nonzero">
                      <g>
                        <use fill="#EC4969" xlink:href="#a"></use>
                        <use fill="#1892C3" xlink:href="#a"></use>
                      </g>
                      <path fill="#000"
                        d="M31.861 21.923c0-3.898-1.559-7.405-4.092-9.939-2.63-2.533-6.139-4.19-10.036-4.19-3.897 0-7.405 1.56-9.938 4.093-2.534 2.533-4.092 6.04-4.092 9.938 0 3.898 1.558 7.405 4.092 9.939 2.533 2.533 6.04 4.092 9.938 4.092 3.897 0 7.405-1.559 9.938-4.092 2.631-2.339 4.19-5.944 4.19-9.841zM37.123 6.43c.682.682.682 1.851 0 2.533-.682.682-1.852.682-2.534 0l-.682-.682-2.533 2.436c2.533 3.02 3.995 6.918 3.995 11.205 0 9.743-7.892 17.733-17.733 17.733C7.892 39.656 0 31.764 0 21.923 0 12.763 7.015 5.26 15.882 4.287V1.851c0-.974.78-1.851 1.851-1.851.974 0 1.851.78 1.851 1.851v2.534c3.508.39 6.723 1.753 9.354 3.897l2.533-2.436-.682-.682c-.682-.682-.682-1.851 0-2.533.682-.682 1.852-.682 2.534 0l1.948 1.948 1.852 1.852z">
                      </path>
                    </g>
                  </g>
                </svg></RouterLink><img class="image___1KbwI"
                src="https://res.cloudinary.com/digital-interdan/image/upload/c_fit,e_trim:0,q_80,w_1280/v1/cars/Fiat_500_Cult_876.png"
                alt="Fiat 500C Connect 70HK" title="Fiat 500C Connect 70HK" />
              <div class="gallery-container___1udhh"></div>
              <div class="info___-uU-L">
                <div class="info-block___IMqr3">
                  <div class="price___lyAnI">
                    <span class="prefix___8I2P1">Månedlig leasingsydelse inkl.moms </span><span class="value___1Ew-v">{{
                      displayCar.base_maanedspris
                    }}</span>kr./md.
                  </div>
                  <div class="additional-price___2tuCL">
                    inkl. forsikring og grøn ejerafgift
                  </div>

                  <span class="prefix___8I2P1">Samlet udbetaling inkl.moms </span><span class="value___1Ew-v">{{
                    displayCar.base_udbetaling
                  }}</span>kr.
                </div>
                <div class="additional-price___2tuCL">
                  Udbetaling kr. {{ displayCar.base_udbetaling }} - månedlig
                  leasingydelse kr. {{ displayCar.base_maanedspris }} -
                  udleveringsrapport kr. 495, total omkostning i 36 mdr. Total:
                  {{ displayCar.base_maanedspris * 36 + 495 }}
                </div>
              </div>
              <div class="disclaimers___2MvJV">
                <p class="disclaimer___3U-mX">
                  Har du brug for hjælp – ring til kundeservice på
                  tlf.:&nbsp;<span class="contact-data___2hfm3">89 88 50 80</span>
                </p>
              </div>
            </div>
            <div class="steps___2tBXW steps___paC4-">
              <div class="prices_overview info___JN_si">
                <div class="content___2Jovb">
                  <h3 class="title___O42Tx">
                    {{ displayCar.brand }} {{ displayCar.model }}
                  </h3>
                  <div class="technical-details___2buqo technical-details___1rZ29">
                    <div class="details-group___19Kyu">
                      <div class="detail___22pEp detail___3AT8g capitalize___o-pqq">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g transform="translate(4.000000, 4.000000)" stroke="#444444" stroke-width="2" fill="none">
                            <circle id="Oval" cx="16.5" cy="16.5" r="16.5"></circle>
                            <line x1="10" y1="8.5" x2="10" y2="24.5"></line>
                            <line x1="17" y1="8.5" x2="17" y2="24.5"></line>
                            <line x1="24" y1="8.5" x2="24" y2="16.5"></line>
                            <line x1="10.5" y1="17" x2="23.5" y2="17"></line>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          {{ displayCar.gear_type }}
                        </div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g transform="translate(6.000000, 6.000000)" stroke="#444444" stroke-width="2" fill="none">
                            <path
                              d="M7.00032,8.4 C12.9003,2.5 28.0003,0 28.0003,0 C28.0003,0 26.0003,14.6 19.6003,21 C12.7003,27.9 4.70032,23.3 4.70032,23.3 C4.70032,23.3 0.00032,15.4 7.00032,8.4 Z">
                            </path>
                            <line x1="15" y1="13" x2="0" y2="28"></line>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          <div class="emissions___3B8H6">
                            <span>CO<sub>2</sub></span>&nbsp;{{ displayCar.co2 }} g/km
                            <div class="energy-class___BHiLA energy-class___3KEQh">
                              <span :class="[
                                'energimaerke',
                                {
                                  green_energy:
                                    displayCar.energimaerke === 'A+',
                                  yellow_energy:
                                    displayCar.energimaerke === 'A',
                                  orange_energy:
                                    displayCar.energimaerke === 'B',
                                },
                              ]">
                                {{ displayCar.energimaerke }}
                                <sup v-if="displayCar.energimaerke === 'A+'">+</sup> </span><span
                                class="arrow-right___1p9wE" :class="[
                                  'energimaerke',
                                  {
                                    green_energy__arrow:
                                      displayCar.energimaerke === 'A+',
                                    yellow_energy__arrow:
                                      displayCar.energimaerke === 'A',
                                    orange_energy__arrow:
                                      displayCar.energimaerke === 'B',
                                  },
                                ]"></span>
                              <div class="shadow___2ZdD4">
                                <span></span><span class="arrow-right___1p9wE"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="details-group___19Kyu">
                      <div class="detail___22pEp detail___3AT8g capitalize___o-pqq">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g fill="none" transform="translate(6.000000, 3.000000)">
                            <path
                              d="M22,34 L0,34 L0,3.43077895 C0,1.53841053 1.53894737,0.000357894737 3.43042105,0.000357894737 L18.5686842,0.0695789474 C20.4601579,0.0695789474 22,1.60763158 22,3.5 L22,34 Z"
                              stroke="#444444" stroke-width="2"></path>
                            <polygon stroke="#444444" stroke-width="2" points="4 18 18 18 18 5 4 5"></polygon>
                            <path
                              d="M25,3 L29,9 L29,29 C29,30.1045695 28.1045695,31 27,31 C25.8954305,31 25,30.1045695 25,29 L25,22 C25,20.8954305 24.1045695,20 23,20 L22,20 L22,20"
                              stroke="#444444" stroke-width="2"></path>
                            <path
                              d="M29.5,11 L25.5938579,3.62583158 L25.7211053,8.722 C25.7211053,9.98 26.742,11 28,11 L29.5,11 Z"
                              fill="#444444"></path>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          {{ displayCar.braendstof }}
                        </div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g transform="translate(1.000000, 6.000000)" fill="none">
                            <line x1="6" y1="28" x2="15" y2="0" stroke="#444444" stroke-width="2"></line>
                            <line x1="27" y1="0" x2="36" y2="28" stroke="#444444" stroke-width="2"></line>
                            <line x1="21" y1="3" x2="21" y2="6" stroke="#444444" stroke-width="2"></line>
                            <line x1="21" y1="11" x2="21" y2="15" stroke="#444444" stroke-width="2"></line>
                            <line x1="21" y1="20" x2="21" y2="25" stroke="#444444" stroke-width="2"></line>
                            <path
                              d="M4,10.1992 C5.8125,10.1992 7.75,8.9169 7.75,6.70209 C7.75,4.66209 4,0.87354 4,0.87354 C4,0.87354 0.25,4.66209 0.25,6.70209 C0.25,8.9169 2.1875,10.1992 4,10.1992 Z"
                              fill="#444444"></path>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          {{ displayCar.kilometerprliter }} km/l
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section___2oSoR highlighted-features___29Aku">
                    <div class="title___3xuUr">Fremhævede funktioner</div>
                    <div class="value___xZmjI">
                      <div>
                        {{ getFeatures(displayCar) }}
                      </div>
                    </div>
                  </div>
                  <div ref="dropdown" class="dropdown">
                    <strong class="dropdown-label" @click="show = !show">
                      Se Fuld Udstyrsliste
                    </strong>
                    <p class="dropdown-content" v-if="show">
                      {{ getAllFeatures(displayCar) }}
                    </p>
                  </div>
                </div>
                <div class="buttons-wrapper___3WoLU">
                  <button class="button___2oWcS default___31nVJ proceed-button___2ZgPy rounded-corners___2DuU9"
                    data-qa="proceed-button">
                    Fortsæt
                  </button>
                  <div class="back-link-wrapper___o4YqX">
                    <a class="back-link___1LJpm" href="#/">Tilbage</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal___25xvj" style="height: 100vh" :class="{ 'is-open___1eAPm': isModalOpen }">
        <div class="close-button-wrapper___1dYxl">
          <RouterLink to="/quickleasing">
            <button class="button___2oWcS dark___2wNZC button___3129j rounded-corners___2DuU9">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                stroke="white" class="icon___3oVL5">
                <path d="M19.5 5L5.5 19" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                <path d="M19.5 19L5.5 5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
              </svg>
            </button>
          </RouterLink>
        </div>
        <div class="content___FOiFD" style="background: white">
          <div class="product___MbOUd">
            <div class="product-overview___h1U1n overview___1ZyZV">
              <RouterLink class="logoWrapper___3_qg1" to="/"><svg xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="40" viewBox="0 0 38 40">
                  <defs>
                    <path id="a"
                      d="M19.487 13.64v8.283a1.85 1.85 0 01-1.851 1.851 1.85 1.85 0 01-1.851-1.851V13.64c0-.975.78-1.851 1.851-1.851 1.072.097 1.851.876 1.851 1.85z">
                    </path>
                  </defs>
                  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g fill-rule="nonzero">
                      <g>
                        <use fill="#EC4969" xlink:href="#a"></use>
                        <use fill="#1892C3" xlink:href="#a"></use>
                      </g>
                      <path fill="#000"
                        d="M31.861 21.923c0-3.898-1.559-7.405-4.092-9.939-2.63-2.533-6.139-4.19-10.036-4.19-3.897 0-7.405 1.56-9.938 4.093-2.534 2.533-4.092 6.04-4.092 9.938 0 3.898 1.558 7.405 4.092 9.939 2.533 2.533 6.04 4.092 9.938 4.092 3.897 0 7.405-1.559 9.938-4.092 2.631-2.339 4.19-5.944 4.19-9.841zM37.123 6.43c.682.682.682 1.851 0 2.533-.682.682-1.852.682-2.534 0l-.682-.682-2.533 2.436c2.533 3.02 3.995 6.918 3.995 11.205 0 9.743-7.892 17.733-17.733 17.733C7.892 39.656 0 31.764 0 21.923 0 12.763 7.015 5.26 15.882 4.287V1.851c0-.974.78-1.851 1.851-1.851.974 0 1.851.78 1.851 1.851v2.534c3.508.39 6.723 1.753 9.354 3.897l2.533-2.436-.682-.682c-.682-.682-.682-1.851 0-2.533.682-.682 1.852-.682 2.534 0l1.948 1.948 1.852 1.852z">
                      </path>
                    </g>
                  </g>
                </svg></RouterLink><img class="image___1KbwI"
                src="https://res.cloudinary.com/digital-interdan/image/upload/c_fit,e_trim:0,q_80,w_1280/v1/cars/Fiat_500_Cult_876.png"
                alt="Fiat 500C Connect 70HK" title="Fiat 500C Connect 70HK" />

              <div class="gallery-container___1udhh"></div>
              <!-- CONTENT 1 IMAGE SIDE -->
              <div class="info___-uU-L" v-if="showContent1">
                <div class="info-block___IMqr3">
                  <div class="price___lyAnI">
                    <span class="prefix___8I2P1">Månedlig leasingsydelse inkl.moms </span><span class="value___1Ew-v">{{
                      displayCar.base_maanedspris
                    }}</span>kr./md.
                    <br />

                    <span class="prefix___8I2P1">Samlet udbetaling inkl.moms </span><span class="value___1Ew-v">{{
                      displayCar.base_udbetaling
                    }}</span>kr.
                  </div>
                  <div class="additional-price___2tuCL">
                    inkl. forsikring og grøn ejerafgift
                  </div>
                  <div class="additional-price___2tuCL">
                    Udbetaling kr. {{ displayCar.base_udbetaling }} - månedlig
                    leasingydelse kr. {{ displayCar.base_maanedspris }} -
                    udleveringsrapport kr. 495, total omkostning i 36 mdr.
                    Total:
                    {{ displayCar.base_maanedspris * 36 + 495 }}
                  </div>
                </div>
              </div>

              <!-- CONTENT 2 IMAGE SIDE -->
              <div class="info___-uU-L" v-else>
                <div class="info-block___IMqr3">
                  <div class="price___lyAnI">
                    <span class="prefix___8I2P1">Månedlig leasingsydelse inkl.moms </span><span class="value___1Ew-v">{{
                      displayCar.base_maanedspris
                    }}</span>kr./md.
                    <br />

                    <span class="prefix___8I2P1">Samlet udbetaling inkl.moms </span><span class="value___1Ew-v">{{
                      displayCar.base_udbetaling
                    }}</span>kr.
                  </div>
                  <div class="additional-price___2tuCL">
                    inkl. forsikring og grøn ejerafgift
                  </div>
                  <div class="additional-price___2tuCL">
                    Udbetaling kr. {{ displayCar.base_udbetaling }} - månedlig
                    leasingydelse kr. {{ displayCar.base_maanedspris }} -
                    udleveringsrapport kr. 495, total omkostning i 36 mdr.
                    Total:
                    {{ displayCar.base_maanedspris * 36 + 495 }}
                  </div>
                </div>
                <div class="info-group___1QcKa">
                  <div class="info-block___IMqr3 small___1ryj1 item___m6Uhu">
                    24 mdr.
                  </div>
                  <div class="info-block___IMqr3 small___1ryj1 item___m6Uhu">
                    2.500 km./md.
                  </div>
                </div>
              </div>
              <div class="disclaimers___2MvJV">
                <p class="disclaimer___3U-mX">
                  Har du brug for hjælp – ring til kundeservice på
                  tlf.:&nbsp;<span class="contact-data___2hfm3">89 88 50 80</span>
                </p>
              </div>
            </div>
            <div class="steps___2tBXW steps___paC4-">
              <div class="prices_overview info___JN_si">
                <div class="content___2Jovb" v-if="showContent1">
                  <h3 class="title___O42Tx">
                    {{ displayCar.brand }} {{ displayCar.model }}
                  </h3>
                  <div class="technical-details___2buqo technical-details___1rZ29">
                    <div class="details-group___19Kyu">
                      <div class="detail___22pEp detail___3AT8g capitalize___o-pqq">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g transform="translate(4.000000, 4.000000)" stroke="#444444" stroke-width="2" fill="none">
                            <circle id="Oval" cx="16.5" cy="16.5" r="16.5"></circle>
                            <line x1="10" y1="8.5" x2="10" y2="24.5"></line>
                            <line x1="17" y1="8.5" x2="17" y2="24.5"></line>
                            <line x1="24" y1="8.5" x2="24" y2="16.5"></line>
                            <line x1="10.5" y1="17" x2="23.5" y2="17"></line>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          {{ displayCar.gear_type }}
                        </div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g transform="translate(6.000000, 6.000000)" stroke="#444444" stroke-width="2" fill="none">
                            <path
                              d="M7.00032,8.4 C12.9003,2.5 28.0003,0 28.0003,0 C28.0003,0 26.0003,14.6 19.6003,21 C12.7003,27.9 4.70032,23.3 4.70032,23.3 C4.70032,23.3 0.00032,15.4 7.00032,8.4 Z">
                            </path>
                            <line x1="15" y1="13" x2="0" y2="28"></line>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          <div class="emissions___3B8H6">
                            <span>CO<sub>2</sub></span>&nbsp;{{ displayCar.co2 }} g/km
                            <div class="energy-class___BHiLA energy-class___3KEQh">
                              <span :class="[
                                'energimaerke',
                                {
                                  green_energy:
                                    displayCar.energimaerke === 'A+',
                                  yellow_energy:
                                    displayCar.energimaerke === 'A',
                                  orange_energy:
                                    displayCar.energimaerke === 'B',
                                },
                              ]">
                                {{ displayCar.energimaerke }}
                                <sup v-if="displayCar.energimaerke === 'A+'">+</sup> </span><span
                                class="arrow-right___1p9wE" :class="[
                                  'energimaerke',
                                  {
                                    green_energy__arrow:
                                      displayCar.energimaerke === 'A+',
                                    yellow_energy__arrow:
                                      displayCar.energimaerke === 'A',
                                    orange_energy__arrow:
                                      displayCar.energimaerke === 'B',
                                  },
                                ]"></span>
                              <div class="shadow___2ZdD4">
                                <span></span><span class="arrow-right___1p9wE"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="details-group___19Kyu">
                      <div class="detail___22pEp detail___3AT8g capitalize___o-pqq">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g fill="none" transform="translate(6.000000, 3.000000)">
                            <path
                              d="M22,34 L0,34 L0,3.43077895 C0,1.53841053 1.53894737,0.000357894737 3.43042105,0.000357894737 L18.5686842,0.0695789474 C20.4601579,0.0695789474 22,1.60763158 22,3.5 L22,34 Z"
                              stroke="#444444" stroke-width="2"></path>
                            <polygon stroke="#444444" stroke-width="2" points="4 18 18 18 18 5 4 5"></polygon>
                            <path
                              d="M25,3 L29,9 L29,29 C29,30.1045695 28.1045695,31 27,31 C25.8954305,31 25,30.1045695 25,29 L25,22 C25,20.8954305 24.1045695,20 23,20 L22,20 L22,20"
                              stroke="#444444" stroke-width="2"></path>
                            <path
                              d="M29.5,11 L25.5938579,3.62583158 L25.7211053,8.722 C25.7211053,9.98 26.742,11 28,11 L29.5,11 Z"
                              fill="#444444"></path>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          {{ displayCar.braendstof }}
                        </div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g transform="translate(1.000000, 6.000000)" fill="none">
                            <line x1="6" y1="28" x2="15" y2="0" stroke="#444444" stroke-width="2"></line>
                            <line x1="27" y1="0" x2="36" y2="28" stroke="#444444" stroke-width="2"></line>
                            <line x1="21" y1="3" x2="21" y2="6" stroke="#444444" stroke-width="2"></line>
                            <line x1="21" y1="11" x2="21" y2="15" stroke="#444444" stroke-width="2"></line>
                            <line x1="21" y1="20" x2="21" y2="25" stroke="#444444" stroke-width="2"></line>
                            <path
                              d="M4,10.1992 C5.8125,10.1992 7.75,8.9169 7.75,6.70209 C7.75,4.66209 4,0.87354 4,0.87354 C4,0.87354 0.25,4.66209 0.25,6.70209 C0.25,8.9169 2.1875,10.1992 4,10.1992 Z"
                              fill="#444444"></path>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          {{ displayCar.kilometerprliter }} km/l
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section___2oSoR highlighted-features___29Aku">
                    <div class="title___3xuUr">Fremhævede funktioner</div>
                    <div class="value___xZmjI">
                      <div>
                        {{ getFeatures(displayCar) }}
                      </div>
                    </div>
                  </div>
                  <div class="description___O0o47"></div>

                  <div ref="dropdown" class="dropdown">
                    <strong class="dropdown-label" @click="show = !show">
                      Se Fuld Udstyrsliste
                    </strong>

                    <ul class="dropdown-content list--none" v-if="show" v-auto-animate>
                      <li class="list--none" v-for="udstyr in carData.Udstyr">
                        {{
                          allUdstyr.find(item => item.value === udstyr)
                          ? allUdstyr.find(item => item.value === udstyr).name
                          : udstyr
                        }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form__wrapper" v-else>
                  <!-- content 2 -->

                  <!-- START MULTI FORM  -->

                  <FormKit type="form" :actions="false" form-class="multiform" :incomplete-message="false">
                    <FormKit type="multi-step" tab-style="progress" steps-class="multiform__steps"
                      tab-label-class="custom__tab-span" :wrapper-class="{
                        multiform__wrapper: true,
                      }" slot-scope="{ handlers, node }" :allowIncomplete="true">
                      <!-- START STEP 1 -->
                      <FormKit type="step" label="1. Tilvalg" help="222">


                        <div class="step__content-single">
                          <FormKit type="dropdown" label="Ønsket Løbetid*" name="oensketLobetid" :options="lobetider"
                            :floating-label="false" :inner-class="{
                              searchFilter__select: true,
                            }" placeholder="Længde i måneder"
                            help="Længden på din leasingaftale i måneder - Prisen er billigere jo længere du binder dig."
                            validation="required" :validation-messages="{
                              required: 'Løbetid er påkrævet',
                            }" validation-visibility="dirty" value="36" @input="updateLoebeTider">
                            <template #option="{ option }">
                              <div class="formkit-option">
                                <span>{{ option.label }}</span>
                              </div>
                            </template>
                          </FormKit>

                          <FormKit type="dropdown" label="Alder*" name="alder" :options="age_driver"
                            :floating-label="false" :inner-class="{
                              searchFilter__select: true,
                            }" placeholder="Alder på fører" help="Alder på fører" validation="required"
                            :validation-messages="{
                              required: 'Alder på fører er påkrævet',
                            }" validation-visibility="live" @input="chosenAgeDriver">
                            <template #option="{ option }">
                              <div class="formkit-option">
                                <span>{{ option.label }}</span>
                              </div>
                            </template>

                          </FormKit>
                          <div>
                            <h3 class="pad-header--xs">Tilvalg</h3>
                          </div>
                          <FormKit type="checkbox" label="Afleveringsforsikring" name="afleveringsforsikring"
                            label-class="add__price-forsikring add__price" wrapper-class="form__wrapper-input"
                            help="Afleveringsforsikring Du kan for 119 Kr. månedligt tilkøbe en afleveringsforsikring. Denne forsikring har en selvrisiko på 5.000 Kr. Forsikringen dækker op til 10.000 Kr. pr. skade, dog maximalt 30.000 Kr. i samlet erstatning. For at kunne tilkøbe afleveringsforsikring skal din aftale have en løbetid på minimum 12 måneder, og forsikringen skal tilkøbes inden udlevering. Bemærk at ekstraydelsen ”Lav Selvrisiko” IKKE vil nedsætte selvrisikoen på din afleveringsforsikring"
                            @change="toogleAfleveringsforsikring" v-if="chosenLeasePeriod >= 12">
                            <template #label="{ id, label, help, classes }">
                              <label :class="classes.label" :for="id">{{ label }}
                                <span v-if="help" :class="classes.tooltip">

                                  ?<span :class="classes.tooltipInner">{{ help }}</span>
                                </span>
                              </label>
                            </template>

                            <!-- comment this out if you also want the help to be shown -->
                            <template #help>
                              <p class="form__extra-help">Tilvalg af afleveringsforsikring er betinget af en aftale på
                                minimum 12 måneder </p>
                            </template>

                          </FormKit>
                          <FormKit type="checkbox" label="Lav selvrisiko" name="lavSelvrisiko"
                            help="Ved køb af lav selvrisiko, er du dækket for skader på bilen ved aflevering."
                            label-class="add__price-selv add__price" wrapper-class="form__wrapper-input"
                            @change="toogleLavSelvRisiko"
                            v-if="chosenAge[0] >= 30">
                            <template #label="{ id, label, help, classes }">
                              <label :class="classes.label" :for="id">{{ label }}

                                <span v-if="help" :class="classes.tooltip">
                                  ?<span :class="classes.tooltipInner">{{ help }}</span>
                                </span>
                              </label>
                            </template>

                            <template #help>
                              <p class="form__extra-help">Tilvalg af lav selvrisiko er betinget af at du minimum er fyldt
                                30 år.</p>
                            </template>

                          </FormKit>
                          <FormKit type="checkbox" label="Viking Vejhjælp " name="vikingVejhjaelp"
                            help="Ved køb af Viking Vejhjælp, er du dækket for skader på bilen ved aflevering."
                            wrapper-class="form__wrapper-input" label-class="add__price-vej add__price"
                            @change="toogleVikingVejhjaelp">
                            <template #label="{ id, label, help, classes }">
                              <label :class="classes.label" :for="id">{{ label }}

                                <span v-if="help" :class="classes.tooltip">
                                  ?<span :class="classes.tooltipInner">{{ help }}</span>
                                </span>
                              </label>
                            </template>

                            <template #help>
                              <p class="form__extra-help">I samarbejde med Viking tilbyder vi vejhjælp til kun 49 kr.</p>
                            </template>

                          </FormKit>
                          <FormKit type="checkbox" label="Komplet sæt vinterhjul" label-class="add__price-hjul add__price"
                            wrapper-class="form__wrapper-input" name="kompletSaetVinterhjul"
                            help="Ved køb af Komplet sæt vinterhjul, er du dækket for skader på bilen ved aflevering."
                            @change="toogleKompletSaetVinterhjul">
                            <template #label="{ id, label, help, classes }">
                              <label :class="classes.label" :for="id">{{ label }}

                                <span v-if="help" :class="classes.tooltip">
                                  ?<span :class="classes.tooltipInner">{{ help }}</span>
                                </span>
                              </label>
                            </template>

                            <template #help>
                              <p class="form__extra-help">I samarbejde med Viking tilbyder vi vejhjælp til kun 49 kr.</p>
                            </template>


                          </FormKit>

                        </div>
                        <template #stepNext="{ handlers, node }">
                          <div class="buttons-wrapper___3WoLU">
                            <button id="proceed-button"
                              class="button___2oWcS default___31nVJ proceed-button___2ZgPy rounded-corners___2DuU9"
                              @click="handlers.incrementStep(1, node.context)()" type="button" data-next="true">
                              Fortsæt
                            </button>

                            <div class="back-link-wrapper___o4YqX">
                              <a href="">Tilbage til oversigt</a>
                            </div>
                          </div>

                        </template>
                      </FormKit>
                      <!-- END STEP 1 -->
                      <!-- START STEP 2 -->

                      <FormKit type="step" name="step2" label="2. Valg af leasing">
                        <div class="step__content">
                          <div class="step__content-single_header">
                            <h3 class=" ">Prisoverslag</h3>
                          </div>
                          <div class="prices_overview">
                            <div class="grid--auto-4 pad-header--s gap--xs">



                              <FormKit type="dropdown" label="Ekstra kilometer pr. år*" name="oensketKilometer"
                                :options="extra_kilometer_aar" help="Ekstra km udover km 15.000 årligt - "
                                placeholder="Ekstra kilometer pr. år" validation="required" :validation-messages="{
                                  required: 'Ekstra kilometer er påkrævet',
                                }" validation-visibility="live" value="0" @input="oensketKilometerChange">
                                <template #option="{ option }">
                                  <div class="formkit-option">
                                    <span>{{ option.label }}</span>
                                  </div>
                                </template>



                              </FormKit>

                              <FormKit type="dropdown" label="Premium helårsdæk*" name="ombytningTilPremiumHelårsdæk"
                                :options="premiumDaek" :floating-label="false" :inner-class="{
                                  searchFilter__select: true,
                                }" placeholder="Primium helårsdæk" help="Ombytning til Primium helårsdæk"
                                validation="required" :validation-messages="{
                                  required: 'Ombytning til Primium helårsdæk er påkrævet',
                                }" validation-visibility="live" @input="premHelaarsDaek"
                                v-if="!kompletSaetVinterhjul">
                                <template #option="{ option }">
                                  <div class="formkit-option">
                                    <span>{{ option.label }}</span>
                                  </div>
                                </template>
                              </FormKit>



                            </div>

                            <div class="prices--interactiveBlock">
                              <div class="prices__info prices__info--primary bold">
                                <div class="prices__title">{{ displayCar.brand }} {{ displayCar.model }} {{
                                  displayCar.heste_kraefter }} HK {{ displayCar.braendstof }}</div>
                                <div class="prices__separator"></div>
                                <div>{{ displayCar.base_maanedspris }} kr./md.</div>
                              </div>
                              <div class="prices__info prices__info--secondary">
                                <div class="prices__title">Forsikring (Ansvar- og Kasko)</div>
                                <div class="prices__separator"></div>
                                <div>Inkluderet</div>
                              </div>
                              <div class="prices__info prices__info--secondary">
                                <div class="prices__title">Grøn ejerafgift</div>
                                <div class="prices__separator"></div>
                                <div>Inkluderet</div>
                              </div>
                              <div class="prices__info prices__info--secondary">
                                <div class="prices__title">Service- og garantiaftale</div>
                                <div class="prices__separator"></div>
                                <div>Inkluderet</div>
                              </div>
                              <div class="prices__info prices__info--secondary">
                                <div class="prices__title">Depositum</div>
                                <div class="prices__separator"></div>
                                <div>0 kr.</div>
                              </div>
                              <div class="prices__info prices__info--secondary">
                                <div class="prices__title">Udbetaling</div>
                                <div class="prices__separator"></div>
                                <div>{{ displayCar.base_udbetaling }} kr.</div>
                              </div>
                              <div class="prices__info prices__info--secondary">
                                <div class="prices__title">Tilbageleveringsgebyr</div>
                                <div class="prices__separator"></div>
                                <div>0 kr.</div>
                              </div>
                              <div class="prices__extra">
                                <div class="prices__info">
                                  <div class="prices__title">2.000 km.</div>
                                  <div class="prices__separator"></div>
                                  <div>Inkluderet</div>
                                </div>
                                <div class="prices__info">
                                  <div class="prices__title">Vi vælger farven for dig</div>
                                  <div class="prices__separator"></div>
                                  <div>Inkluderet</div>
                                </div>
                                <div class="prices__info" v-if="chosenExtraKm[1] !== 0">
                                  <div class="prices__title prices__title--tooltip">
                                    Extra&nbsp;<b>{{ chosenExtraKm[0] }}</b>&nbsp;kilometer
                                  </div>
                                  <div class="prices__separator"></div>
                                  <div>{{ chosenExtraKm[1] }} kr./md.</div>
                                </div>
                                <div class="prices__info" v-if="afleveringsforsikring == true">
                                  <div class="prices__title prices__title--tooltip">
                                    Afleveringsforsikring
                                    <div>
                                      <div class="prices__tooltip">?</div>
                                    </div>
                                  </div>
                                  <div class="prices__separator"></div>
                                  <div>119 kr./md.</div>
                                </div>
                                <div class="prices__info" v-if="lavSelvrisiko == true">
                                  <div class="prices__title prices__title--tooltip">
                                    Lav selvrisiko
                                    <div>
                                      <div class="prices__tooltip">?</div>
                                    </div>
                                  </div>
                                  <div class="prices__separator"></div>
                                  <div>64 kr./md.</div>
                                </div>
                                <div class="prices__info" v-if="vikingVejhjaelp == true">
                                  <div class="prices__title prices__title--tooltip">
                                    Viking – Vejhjælp
                                    <div>
                                      <div class="prices__tooltip">?</div>
                                    </div>
                                  </div>
                                  <div class="prices__separator"></div>
                                  <div>49 kr./md.</div>
                                </div>
                                <div class="prices__info" v-if="kompletSaetVinterhjul == true">
                                  <div class="prices__title prices__title--tooltip">
                                    Komplet sæt vinterhjul
                                    <div>
                                      <div class="prices__tooltip">?</div>
                                    </div>
                                  </div>
                                  <div class="prices__separator"></div>
                                  <div>119 kr./md.</div>
                                </div>

                                <!-- Valg af dæk -->

                                <div class="prices__info" v-if="chosenPremHelaarsDaek[0] === 'kontant'">
                                  <div class="prices__title prices__title--tooltip">
                                    Premium Helårsdæk
                                  </div>
                                  <div class="prices__separator"></div>
                                  <div>{{ chosenPremHelaarsDaek[1] }} kr.</div>
                                </div>

                                <div class="prices__info" v-if="chosenPremHelaarsDaek[0] === 'finansieret'">
                                  <div class="prices__title prices__title--tooltip">
                                    Premium Helårsdæk
                                  </div>
                                  <div class="prices__separator"></div>
                                  <div style="display: flex; flex-direction: column;">
                                    <div>{{ chosenPremHelaarsDaek[1] }} kr.</div>
                                    <div>{{ chosenPremHelaarsDaek[2] }} kr./md</div>
                                  </div>
                                </div>

                                <!-- Valg af dæk -->

                              </div>
                              <div class="prices__info prices__info--highlighted bold">
                                <div class="prices__title">Totalpris</div>
                                <div class="prices__separator"></div>
                                <div>{{ displayCar.base_maanedspris }} kr./md.</div>
                              </div>
                              <p class="prices__text">
                                Første betaling betales 7 dage før bilen udleveres
                              </p>
                            </div>
                          </div>

                        </div>
                        <template #stepNext="{ handlers, node }">
                          <div class="buttons-wrapper___3WoLU">
                            <button id="proceed-button-two"
                              class="button___2oWcS default___31nVJ proceed-button___2ZgPy rounded-corners___2DuU9"
                              @click="handlers.incrementStep(1, node.context)()" data-next="true" type="button">
                              Fortsæt
                            </button>

                            <div class="back-link-wrapper___o4YqX">
                              <a class="back-link___1LJpm" style="cursor: pointer"
                                @click="handlers.incrementStep(-1, node.context)()" data-next="true">Tilbage til
                                tilvalg</a>
                            </div>
                          </div>

                        </template>

                        <template #stepPrevious="{ handlers, node }">
                        </template>


                      </FormKit>

                      <!-- END STEP 2 -->
                      <!-- START STEP 3 -->

                      <FormKit type="step" name="step3" label="3. Kontaktinformation">
                        <div class="step__content">
                          <div class="step__content-single_header">
                            <h3 class=" ">Kundeinformation</h3>
                          </div>
                          <div class="prices_overview">
                            <div class="grid--auto-4 pad-header--s gap--xs">
                              <FormKit type="text" name="Fornavn" id="first_name"
                                validation="required|alpha_spaces|length:2,30" :validation-messages="{
                                  alpha_spaces: 'Venligst skriv et gyldigt navn',
                                  length: 'Længden af navnet skal være mellem 2 og 30 tegn',
                                  required: 'Navn er påkrævet',
                                }" validation-visibility="dirty" label="Fornavn*" input-class="custom__placeholder"
                                placeholder="Hanne" :floating-label="false" />
                              <FormKit type="text" name="Efternavn" id="last_name" label="Efternavn*"
                                validation="required|alpha_spaces|length:2,50" :validation-messages="{
                                  alpha_spaces: 'Venligst skriv et gyldigt navn',
                                  length: 'Længden af navnet skal være mellem 2 og 50 tegn',
                                  required: 'Navn er påkrævet',
                                }" validation-visibility="dirty" input-class="custom__placeholder"
                                placeholder="Holm Olsen" :floating-label="false" />
                              <FormKit type="text" name="Adresse" id="address" label="Adresse*"
                                validation="required|length:2,50" :validation-messages="{
                                  length: 'Længden af adressen skal være mellem 2 og 50 tegn',
                                  required: 'Adresse er påkrævet',
                                }" validation-visibility="dirty" input-class="custom__placeholder"
                                placeholder="Karl Th Torpvej 3, 3. tv" :floating-label="false" />

                              <FormKit type="mask" label="Postnummer" name="postnummer" mask="####" unmask-value="true"
                                :floating-label="false" input-class="custom__placeholder"
                                validation="required|number|length:4,4" :validation-messages="{
                                  alpha: 'Venligst skriv et gyldigt postnummer',
                                  length: 'Længden af postnummeret skal være 4 tal',
                                  required: 'Postnummer er påkrævet',
                                }" validation-visibility="dirty" />
                              <FormKit type="text" id="city" label="By*" name="By" validation="required|length:2,50"
                                :validation-messages="{
                                  length: 'Længden af byen skal være mellem 2 og 50 tegn',
                                  required: 'By er påkrævet',
                                }" validation-visibility="dirty" input-class="custom__placeholder" placeholder="Valby"
                                :floating-label="false" />

                              <FormKit type="email" name="Email" id="email" label="Email*"
                                input-class="custom__placeholder" placeholder="hannep@outlook.com"
                                validation="required|email" :validation-messages="{
                                  required: 'Email er påkrævet',
                                  email: 'Venligst skriv en gyldig email',
                                }" validation-visibility="dirty" :floating-label="false" />
                              <FormKit type="mask" mask="## ## ## ##" name="phone" id="phone" mode="replace"
                                validation="required|length:8,8" :validation-messages="{
                                  required: 'Telefon er påkrævet',
                                  length: 'Længden af telefonnummeret skal være 8 tal',
                                }" validation-visibility="dirty" allow-incomplete="false" show-mask="true"
                                unmask-value="true" label="Telefon*" input-class="custom__placeholder"
                                :floating-label="false" />

                              <FormKit type="mask" mask="######-####" name="CPR" id="cpr" mode="replace"
                                validation="required|length:10,10" :validation-messages="{
                                  required: 'CPR er påkrævet',
                                  length: 'Længden af CPR nummeret skal være 10 tal',
                                }" validation-visibility="dirty" allow-incomplete="false" show-mask="true"
                                unmask-value="true" label="CPR nummer*" label-class="label-for-cpr"
                                :floating-label="false"
                                help="Vi skal bruge dit CPR-nummer for at identificere dig som indehaveren af den konto, som pengene skal trækkes fra. Vi passer godt på din data og overholder selvfølgelig persondataloven">
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
                                    <span class="formkit-tooltip-inner">For at vi kan oprette aftalen med dig, skal vi
                                      bruge dit konto- og
                                      registreringsnummer, som løbende bliver faktureret for din
                                      leasingaftale hos Quickleasing. Vi opbevarer naturligvis dine data
                                      sikkert og i overensstemmelse med persondataloven. Vi trækker
                                      selvfølgelig ikke penge fra din konto, før du har underskrevet den
                                      endelige kontrakt.
                                    </span></span></label>
                              </div>

                              <div></div>

                              <FormKit type="mask" mask="####" name="Registreringsnummer" id="registreringsnummer"
                                mode="replace" validation="required" :validation-messages="{
                                  required: 'Registreringsnummer er påkrævet',
                                }" validation-visibility="dirty" allow-incomplete="false" show-mask="true"
                                unmask-value="true" label="Registreringsnummer*" input-class="custom__placeholder"
                                :floating-label="false" />

                              <FormKit type="mask" mask="(000)#######" name="Kontonummer" id="kontonummer" mode="replace"
                                validation="required" :validation-messages="{
                                  required: 'Kontonummer er påkrævet',
                                }" validation-visibility="dirty" allow-incomplete="false" show-mask="true"
                                help="De første 3 nuller er medtaget automatisk" unmask-value="true" label="Kontonummer*"
                                input-class="custom__placeholder" :floating-label="false" />
                              <div style="margin-bottom: 9rem">
                                <FormKit type="checkbox" label="Persondatapolitik" validation="accepted"
                                  help="Ved at hakke ovenstående Persondatapolitik boksen af, bekræfter jeg, at jeg er indforstået med
                                              behandlingen af mine persondata i henhold til følgende <a href='/persondatapolitik'>persondatapolitikken</a>." :validation-messages="{
                                                accepted: 'Du skal acceptere persondatapolitikken for at fortsætte',
                                              }">
                                  <template #help="{ help }">
                                    <p style="font-size: 12px" class="form__extra-help" v-html="help"></p>
                                  </template>
                                </FormKit>



                              </div>
                              <p style="font-size: 12px">Ved at klikke "forsæt", vil du herefter blive kontaktet hurtigst
                                mulig med henblik på leasingaftale med Quickleasing A/S</p>
                            </div>

                          </div>

                        </div>
                        <template #stepNext="{ handlers, node }">
                          <div class="buttons-wrapper___3WoLU">
                            <button id="proceed-button-two"
                              class="button___2oWcS default___31nVJ proceed-button___2ZgPy rounded-corners___2DuU9">
                              Bestil nu
                            </button>

                            <div class="back-link-wrapper___o4YqX">
                              <a class="back-link___1LJpm" style="cursor: pointer"
                                @click="handlers.incrementStep(-1, node.context)()" data-next="true">Tilbage til valg af
                                leasing</a>
                            </div>
                          </div>

                        </template>
                        <template #stepPrevious="{ handlers, node }">


                        </template>
                      </FormKit>

                      <!-- END STEP 2  -->
                    </FormKit>
                    <template #stepNext>
                      <FormKit type="submit" />
                    </template>

                  </FormKit>


                  <!-- END MULTI FORM  -->
                </div>
                <div class="buttons-wrapper___3WoLU" v-if="showContent1">
                  <button id="proceed-button" @click="showContent1 = false"
                    class="button___2oWcS default___31nVJ proceed-button___2ZgPy rounded-corners___2DuU9">
                    Fortsæt
                  </button>

                  <div class="back-link-wrapper___o4YqX">
                    <RouterLink class="back-link___1LJpm" to="/quickleasing">Tilbage</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- END DISPLAYING CAR -->
  </div>
</template>

<script>
export default {
  name: "SpecificCar",
  data() {
    return {
      currentURL: import.meta.env.VITE_APP_CARS_URL,
      chosenAge: [],
      chosenLeasePeriod: 0,
      original_base_maanedspris: 0, // Declare and set original_base_maanedspris to the initial value
      original_base_udbetaling: 0, // Declare and set original_base_udbetaling to the initial value
      chosenPremHelaarsDaek: [],
      helarsdaek: [
        {
          size: '14"',
          kontantBetaling: 2999,
          finansieretUdbetaling: 1200,
          finansieretBetaling: 150
        },
        {
          size: '15"',
          kontantBetaling: 3799,
          finansieretUdbetaling: 1500,
          finansieretBetaling: 192
        },
        {
          size: '16"',
          kontantBetaling: 3999,
          finansieretUdbetaling: 1600,
          finansieretBetaling: 200
        },
        {
          size: '17"',
          kontantBetaling: 4299,
          finansieretUdbetaling: 1700,
          finansieretBetaling: 217
        },
        {
          size: '18"',
          kontantBetaling: 4599,
          finansieretUdbetaling: 1800,
          finansieretBetaling: 233
        },
        {
          size: '19"',
          kontantBetaling: 5799,
          finansieretUdbetaling: 2300,
          finansieretBetaling: 292
        }
      ],


      pictureURL: import.meta.env.VITE_APP_PICTURE_URL,
      fileURL: import.meta.env.VITE_APP_FILE_ID_URL,
      readerAPI: import.meta.env.VITE_APP_READER_API,
      imageUrl: null,
      carData: {},
      carImages: {},
      featureItems: [
        { value: "airc", name: "Air Condition", count: 0 },
        { value: "fartpilot", name: "Fartpilot", count: 0 },
        { value: "bluetooth", name: "Bluetooth", count: 0 },
        { value: "sædevarme", name: "Sædevarme", count: 0 },
        { value: "varmeirat", name: "Rat-varme", count: 0 },
        {
          value: "parkeringssensorfor",
          name: "Parkeringssensor (foran)",
          count: 0,
        },
        {
          value: "parkeringssensorbag",
          name: "Parkeringssensor (bag)",
          count: 0,
        },
        { value: "navigation", name: "Navigation", count: 0 },
        { value: "autgeartiptronic", name: "Automatgear", count: 0 },
        { value: "Anhaengertraek", name: "Anhængertræk", count: 0 },
        { value: "4xelruder", name: "4 elruder", count: 0 },
        { value: "5personers", name: "5 personers", count: 0 },
        { value: "bakkamera", name: "Bakkamera", count: 0 },
        { value: "applecarplay", name: "Apple CarPlay", count: 0 },
        { value: "androidauto", name: "Android Auto", count: 0 },
      ],
      udstyr: [],
      chosenExtraKm: [],
      displayAllFeatures: false,
      showContent1: true,
      isModalOpen: false,
      showModal: true,
      lavSelvrisiko: false,
      afleveringsforsikring: false,
      vikingVejhjaelp: false,
      kompletSaetVinterhjul: false,
      maanedligeYdelse: 0,
      udbetaling: 0,
      carId: this.$route.params.id,
    };
  },
  created() {
    this.lastSelectedOptionValue = 0;
    this.fetchCarData();
  },
  mounted() {
    this.carData.original_base_maanedspris = this.carData.base_maanedspris;
    this.carData.original_base_udbetaling = this.carData.base_udbetaling;
    // Add the class "is-open___1eAPm" to the modal when the component is mounted
    console.log("TEST")
    setTimeout(() => {
      this.isModalOpen = true;
    }, 20);
  },
  methods: {
    async fetchCarData() {
      const id = this.$route.params.id;
      const apiUrl = `${this.currentURL}${id}`;
      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      this.carData = data.data;
      this.maanedeligeYdelse = this.carData.base_maanedspris;
      this.udbetaling = this.carData.base_udbetaling;
      this.original_base_udbetaling = this.carData.base_udbetaling;
      this.original_base_maanedspris = this.carData.base_maanedspris;
    },
    updateLoebeTider(value) {
      this.chosenLeasePeriod = value
      console.log(this.chosenLeasePeriod)
    },
    chosenAgeDriver(value) {
      if (value !== undefined) {
        if (value === '40_plus') {
          const newValue = value.split("_")
          this.chosenAge[0] = parseInt(newValue[0])
          this.chosenAge[1] = 110
        } else {
          const newValue = value.split("-")
          this.chosenAge[0] = parseInt(newValue[0])
          this.chosenAge[1] = parseInt(newValue[1])
        }
      }
    },
    async imageURL(car) {
      let imageURLTOADD = `?filter[cars_id][_eq]=${car.id}`;
      const response = await fetch(this.fileURL + imageURLTOADD, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      if (data.data.length === 0) {
        // Hvis der ikke er et billede, så sæt et placeholder billede
        return (this.carImages[car.id] =
          "https://qgyn2z3q.directus.app/assets/7bb1ea40-d2c8-45c9-ba61-ce460f2a0830?fit=cover&width=300&height=200&quality=80");
      } else {
        this.carImages[car.id] =
          this.pictureURL + data.data[0].directus_files_id;
        return this.pictureURL + data.data[0].directus_files_id;
      }
    },
    getFeatures(car) {
      if (!car.Udstyr) {
        return "Ingen udstyr";
      }

      const featureNames = car.Udstyr.map((feature) => {
        const matchingFeature = this.featureItems.find(
          (item) => item.value === feature
        );
        return matchingFeature ? matchingFeature.name : null;
      }).filter(Boolean);

      const featuresToShow = featureNames.slice(0, 3);

      if (featuresToShow.length > 0) {
        return "Kommer bl.a. med " + featuresToShow.join(", ");
      } else {
        return "Ingen udstyr";
      }
    },
    getAllFeatures(car) {
      if (!car.Udstyr) {
        return "Ingen udstyr";
      }

      const featureNames = car.Udstyr.map((feature) => {
        return feature;
      });

      if (featureNames.length > 0) {
        // return it as a list style

        return featureNames.join(", ");
      } else {
        return "Ingen udstyr";
      }
    },
    toogleAfleveringsforsikring() {
      if (this.afleveringsforsikring) {
        this.afleveringsforsikring = false;
        this.carData.base_maanedspris = this.carData.base_maanedspris - 119;
        this.original_base_maanedspris = this.carData.base_maanedspris;
      } else {
        this.afleveringsforsikring = true;
        this.carData.base_maanedspris = this.carData.base_maanedspris + 119;
        this.original_base_maanedspris = this.carData.base_maanedspris;
      }
    },
    toogleLavSelvRisiko() {
      if (this.lavSelvrisiko) {
        this.lavSelvrisiko = false;
        this.carData.base_maanedspris = this.carData.base_maanedspris - 64;
        this.original_base_maanedspris = this.carData.base_maanedspris;
      } else {
        this.lavSelvrisiko = true;
        this.carData.base_maanedspris = this.carData.base_maanedspris + 64;
        this.original_base_maanedspris = this.carData.base_maanedspris;
      }
    },
    toogleVikingVejhjaelp() {
      if (this.vikingVejhjaelp) {
        this.vikingVejhjaelp = false;
        this.carData.base_maanedspris = this.carData.base_maanedspris - 49;
        this.original_base_maanedspris = this.carData.base_maanedspris;
      } else {
        this.vikingVejhjaelp = true;
        this.carData.base_maanedspris = this.carData.base_maanedspris + 49;
        this.original_base_maanedspris = this.carData.base_maanedspris;
      }
    },
    toogleKompletSaetVinterhjul() {
      if (this.kompletSaetVinterhjul) {
        this.kompletSaetVinterhjul = false;
        this.carData.base_maanedspris = this.carData.base_maanedspris - 119;
        this.original_base_maanedspris = this.carData.base_maanedspris;
      } else {
        this.kompletSaetVinterhjul = true;
        this.carData.base_maanedspris = this.carData.base_maanedspris + 119;
        this.original_base_maanedspris = this.carData.base_maanedspris;
      }
    },
    oensketKilometerChange(value) {
      this.chosenExtraKm[0] = value

      // Map the selected value to the corresponding amount to be added to the base_maanedspris
      const amountToAdd = {
        0: 0,
        5000: 200,
        10000: 500,
        15000: 750
      }[this.chosenExtraKm[0]];

      this.chosenExtraKm[1] = amountToAdd;

      // Subtract the amount corresponding to the last selected option from the base_maanedspris
      const lastSelectedOptionAmount = {
        0: 0,
        5000: 200,
        10000: 500,
        15000: 750
      }[this.lastSelectedOptionValue];

      this.carData.base_maanedspris = this.carData.base_maanedspris - lastSelectedOptionAmount + amountToAdd;

      // Update the lastSelectedOptionValue variable to the current selected option value
      this.lastSelectedOptionValue = this.chosenExtraKm[0];
      this.original_base_maanedspris = this.carData.base_maanedspris;
    },
    premHelaarsDaek(value) {
      const chosenValue = value;
      this.chosenPremHelaarsDaek[0] = value
      if (chosenValue === undefined) {
        this.carData.base_udbetaling = this.original_base_udbetaling;
        this.carData.base_maanedspris = this.original_base_maanedspris;
      }
      else if (chosenValue === 'nej') {
        this.carData.base_udbetaling = this.original_base_udbetaling;
        this.carData.base_maanedspris = this.original_base_maanedspris;
      } else if (chosenValue === 'kontant') {
        this.carData.base_udbetaling = this.original_base_udbetaling;
        this.carData.base_maanedspris = this.original_base_maanedspris;
        if (this.carData.daek_stoerrelse === '14"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 2999;
          this.chosenPremHelaarsDaek[1] = '2999';
        } else if (this.carData.daek_stoerrelse === '15"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 3799;
          this.chosenPremHelaarsDaek[1] = '3799';
        } else if (this.carData.daek_stoerrelse === '16"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 3999;
          this.chosenPremHelaarsDaek[1] = '3999';
        } else if (this.carData.daek_stoerrelse === '17"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 4299;
          this.chosenPremHelaarsDaek[1] = '4299';
        } else if (this.carData.daek_stoerrelse === '18"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 4599;
          this.chosenPremHelaarsDaek[1] = '4599';
        } else if (this.carData.daek_stoerrelse === '19"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 5799;
          this.chosenPremHelaarsDaek[1] = '5799';
        }
      }
      else if (chosenValue === "finansieret") {
        this.carData.base_udbetaling = this.original_base_udbetaling;
        this.carData.base_maanedspris = this.original_base_maanedspris;
        if (this.carData.daek_stoerrelse === '14"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 1200;
          this.carData.base_maanedspris = this.carData.base_maanedspris + 150;
          this.chosenPremHelaarsDaek[1] = '1200';
          this.chosenPremHelaarsDaek[2] = '150';
        } else if (this.carData.daek_stoerrelse === '15"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 1500;
          this.carData.base_maanedspris = this.carData.base_maanedspris + 192;
          this.chosenPremHelaarsDaek[1] = '1500';
          this.chosenPremHelaarsDaek[2] = '192';
        } else if (this.carData.daek_stoerrelse === '16"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 1600;
          this.carData.base_maanedspris = this.carData.base_maanedspris + 200;
          this.chosenPremHelaarsDaek[1] = '1600';
          this.chosenPremHelaarsDaek[2] = '200';
        } else if (this.carData.daek_stoerrelse === '17"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 1700;
          this.carData.base_maanedspris = this.carData.base_maanedspris + 217;
          this.chosenPremHelaarsDaek[1] = '1700';
          this.chosenPremHelaarsDaek[2] = '217';
        } else if (this.carData.daek_stoerrelse === '18"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 1800;
          this.carData.base_maanedspris = this.carData.base_maanedspris + 233;
          this.chosenPremHelaarsDaek[1] = '1800';
          this.chosenPremHelaarsDaek[2] = '233';
        } else if (this.carData.daek_stoerrelse === '19"') {
          this.carData.base_udbetaling = this.carData.base_udbetaling + 2300;
          this.carData.base_maanedspris = this.carData.base_maanedspris + 292;
          this.chosenPremHelaarsDaek[1] = '2300';
          this.chosenPremHelaarsDaek[2] = '292';
        }
      }
    }
  },
  computed: {
    displayCar() {
      if (Object.keys(this.carData).length > 0) {
        return this.carData;
      } else {
        return null;
      }
    },
  },
};
</script>

<style >
.green_energy {
  background: #6ccb6c;
  color: white;
  font-weight: 900;
}

.yellow_energy {
  background: yellow;
  color: #505050;
  font-weight: 900;
}

.orange_energy {
  background: orange;
  color: white;
  font-weight: 900;
}

.green_energy__arrow {
  color: #6ccb6c;
}

.yellow_energy__arrow {
  color: yellow;
}

.orange_energy__arrow {
  color: orange;
}

.info-block___IMqr3 {
  padding: 0 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
}

@media screen and (min-width: 64rem) {
  .info-block___IMqr3 {
    padding: 1.4rem 0;
    font-size: 1rem;
    background-color: #fff;
  }
}

.info-block___IMqr3.small___1ryj1 {
  font-size: 0.85rem;
}

@media screen and (min-width: 64rem) {
  .info-block___IMqr3.small___1ryj1 {
    padding: 1rem 0;
    font-size: 0.9rem;
  }
}

.product-overview___h1U1n .info___-uU-L .info-group___1QcKa {
  display: none;
  margin-top: 1.4rem;
}

@media screen and (min-width: 64rem) {
  .product-overview___h1U1n .info___-uU-L .info-group___1QcKa {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

.product-overview___h1U1n .info___-uU-L .info-group___1QcKa .item___m6Uhu {
  width: calc(50% - 1.4rem / 2);
}

.product-overview___h1U1n .info___-uU-L .info-group___1QcKa .item___m6Uhu:first-child {
  margin-right: 1.4rem;
}

.dropdown {
  border: 2px solid gray;
  border-radius: 0.5em;
  background-color: #fff;
  margin-bottom: 2em;
}

.dropdown strong {
  display: block;
  padding: 1em;
  cursor: pointer;
}

.dropdown-content {
  padding: 1em;
}

.button___2oWcS {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem 1.3rem;
  background-color: var(--button-color);
  color: var(--second-button-color);
  font-weight: 600;
  border-radius: 0.3rem;
  border: 2px solid var(--button-color);
  cursor: pointer;
  -webkit-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  outline: none;
}

.button___2oWcS:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.button___2oWcS.default___31nVJ {
  --button-color: #1892c3;
  --second-button-color: #fff;
}

.button___2oWcS.dark___2wNZC {
  --button-color: #101011;
  --second-button-color: #fff;
}

.button___2oWcS.rounded-corners___2DuU9 {
  border-radius: 2rem;
}

.button___2oWcS svg {
  fill: #fff;
  stroke: #fff;
  -webkit-transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
  -o-transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
  transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
}

.modal___25xvj {
  position: fixed;
  top: 100vh;
  left: 0;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  background-color: #fff;
  -webkit-transition: top 0.5s ease-in-out;
  -o-transition: top 0.5s ease-in-out;
  transition: top 0.5s ease-in-out;
}

.modal___25xvj.is-open___1eAPm,
.modal___25xvj.is-open___1eAPm .close-button-wrapper___1dYxl {
  top: 0;
}

.modal___25xvj .content___FOiFD {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;

}

.modal___25xvj .close-button-wrapper___1dYxl {
  position: fixed;
  top: 100vh;
  right: 0;
  z-index: 101;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: auto;
  padding: 1rem;
  -webkit-transition: top 0.5s ease-in-out;
  -o-transition: top 0.5s ease-in-out;
  transition: top 0.5s ease-in-out;
}

@media screen and (min-width: 46.75rem) {
  .modal___25xvj .close-button-wrapper___1dYxl {
    padding-left: 2rem;
  }
}

.modal___25xvj .close-button-wrapper___1dYxl .button___3129j {
  padding: 0;
  width: 2.2rem;
  height: 2.2rem;
}

.modal___25xvj .close-button-wrapper___1dYxl .button___3129j .icon___3oVL5 {
  width: 50%;
}

.info-block___IMqr3 {
  padding: 0 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
}

@media screen and (min-width: 64rem) {
  .info-block___IMqr3 {
    padding: 1.4rem 0;
    font-size: 1rem;
    background-color: #fff;
  }
}

.product-overview___h1U1n {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding: 1rem 1rem 1rem;
  background-color: #f2f2f2;
  overflow-y: auto;
}

@media screen and (min-width: 64rem) {
  .product-overview___h1U1n {
    padding: 4rem 2rem 1rem;
  }
}

@media screen and (min-width: 80rem) {
  .product-overview___h1U1n {
    padding-top: 6rem;
  }
}

@media screen and (min-width: 100rem) {
  .product-overview___h1U1n {
    padding-top: 12rem;
  }
}

.product-overview___h1U1n .logoWrapper___3_qg1 {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2.2rem;
  height: 2.2rem;
}

.product-overview___h1U1n .logoWrapper___3_qg1 svg {
  width: 100%;
  height: 100%;
}

.product-overview___h1U1n .image___1KbwI {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-height: 5rem;
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}

@media screen and (min-width: 64rem) {
  .product-overview___h1U1n .image___1KbwI {
    max-height: 16rem;
  }
}

@media screen and (min-width: 100rem) {
  .product-overview___h1U1n .image___1KbwI {
    max-height: 24rem;
  }
}

.product-overview___h1U1n .gallery-container___1udhh {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 1rem;
  gap: 3rem;
}

.product-overview___h1U1n .info___-uU-L {
  width: 100%;
  max-width: 34rem;
  margin: 1rem 0;
}

@media screen and (min-width: 64rem) {
  .product-overview___h1U1n .info___-uU-L {
    margin-top: 3rem;
  }
}

.product-overview___h1U1n .info___-uU-L .price___lyAnI .prefix___8I2P1 {
  font-weight: normal;
}

.product-overview___h1U1n .info___-uU-L .price___lyAnI .value___1Ew-v {
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0 0.5rem;
}

@media screen and (min-width: 64rem) {
  .product-overview___h1U1n .info___-uU-L .price___lyAnI .value___1Ew-v {
    font-size: 1.4rem;
  }
}

.product-overview___h1U1n .info___-uU-L .additional-price___2tuCL {
  margin-top: 0.5rem;
  font-size: 0.5rem;
  font-weight: normal;
  color: #878788;
}

.product-overview___h1U1n .disclaimers___2MvJV {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: auto;
}

.product-overview___h1U1n .disclaimers___2MvJV .disclaimer___3U-mX {
  font-size: 0.625rem;
  color: #58585e;
  text-align: center;
}

@media screen and (min-width: 25rem) {
  .product-overview___h1U1n .disclaimers___2MvJV .disclaimer___3U-mX {
    font-size: 0.75rem;
  }
}

.product-overview___h1U1n .disclaimers___2MvJV .disclaimer___3U-mX .contact-data___2hfm3 {
  color: #101011;
}

.back-link___1LJpm {
  color: #1892c3;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (min-width: 64rem) {
  .back-link___1LJpm {
    font-size: 1rem;
  }
}

.back-link___1LJpm:visited {
  color: #1892c3;
}

.prices_overview {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0 0.5rem;
}

@media screen and (min-width: 46.75rem) {
  .prices_overview {
    overflow-y: hidden;
  }
}

@media screen and (min-width: 64rem) {
  .prices_overview {
    height: 100%;
  }
}

.prices_overview .content___2Jovb {
  width: 100%;
  max-width: 34rem;
  margin: 0 auto;
  padding: 1rem 0.5rem 3rem;
}

@media screen and (min-width: 64rem) {
  .prices_overview .content___2Jovb {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 1rem 1rem 3rem;
  }
}

.prices_overview .content___2Jovb .title___O42Tx {
  margin: 0;
  font-size: 1.4rem;
}

.prices_overview .buttons-wrapper___3WoLU {
  width: 98.2%;
  margin-top: auto;
  padding: 0.75rem 0;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

@media screen and (min-width: 46.75rem) {
  .prices_overview .buttons-wrapper___3WoLU {
    bottom: 0;
    left: 0;
    z-index: 100;
  }
}

@media screen and (min-width: 64rem) {
  .prices_overview .buttons-wrapper___3WoLU {
    padding: 0.75rem 0 1.4rem;
  }
}

.prices_overview .buttons-wrapper___3WoLU .proceed-button___2ZgPy {
  max-width: 20rem;
  height: auto;
  margin: auto;
}

.prices_overview .buttons-wrapper___3WoLU .back-link-wrapper___o4YqX {
  margin: 0.95rem auto 0;
  font-size: 0.9rem;
  text-align: center;
}

.detail___22pEp {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.detail___22pEp.capitalize___o-pqq .title___3rl0o {
  text-transform: capitalize;
}

.detail___22pEp .icon___2OPTw {
  width: 1.6rem;
  height: 1.6rem;
}

.detail___22pEp .title___3rl0o {
  margin-left: 0.75rem;
}

.energy-class___BHiLA {
  --box-height: 1.1rem;
  --half-box-height: calc(var(--box-height) / 2);
  --energy-class-font-size: 0.7rem;
  --energy-class-width: 3.5rem;
  position: relative;
  font-size: var(--energy-class-font-size);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
  height: var(--box-height);
  width: var(--energy-class-width);
}

.energy-class___BHiLA span:nth-of-type(1) {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.energy-class___BHiLA span {
  font-size: var(--energy-class-font-size);
  display: inline-block;
  padding-left: 0.5rem;
  width: 3rem;
  text-align: left !important;
  z-index: 2;
}

.energy-class___BHiLA sup {
  -ms-flex-item-align: baseline;
  align-self: baseline;
}

.energy-class___BHiLA .arrow-right___1p9wE {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: var(--half-box-height) solid transparent;
  border-bottom: var(--half-box-height) solid transparent;
  border-left: var(--half-box-height) solid;
}

.energy-class___BHiLA .shadow___2ZdD4 {
  position: absolute;
  top: 1px;
  left: 1px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 1;
  width: inherit;
}

.energy-class___BHiLA .shadow___2ZdD4 span:nth-of-type(1) {
  background-color: #101011;
  opacity: 0.1;
}

.energy-class___BHiLA .shadow___2ZdD4 .arrow-right___1p9wE {
  border-left-color: rgba(16, 16, 17, 0.1);
}

.technical-details___2buqo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media screen and (min-width: 25rem) {
  .technical-details___2buqo {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

.technical-details___2buqo .details-group___19Kyu:first-child {
  min-width: 60%;
}

.technical-details___2buqo .details-group___19Kyu:last-child {
  min-width: 35%;
}

.technical-details___2buqo .details-group___19Kyu .detail___3AT8g {
  margin: 0.75rem 0;
}

.technical-details___2buqo .details-group___19Kyu .detail___3AT8g .emissions___3B8H6 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.technical-details___2buqo .details-group___19Kyu .detail___3AT8g .emissions___3B8H6 .energy-class___3KEQh {
  margin-left: 0.6rem;
}

.section___2oSoR .title___3xuUr {
  font-size: 1.125rem;
  font-weight: bold;
}

.section___2oSoR .value___xZmjI {
  margin-top: 0.5rem;
  line-height: 1.4;
}

@media screen and (min-width: 64rem) {
  .info___JN_si {
    padding-top: 4rem;
  }
}

.info___JN_si .description___O0o47 {
  margin-top: 2.4rem;
  line-height: 1.4;
}

.info___JN_si .technical-details___1rZ29 {
  margin-top: 1.4rem;
}

@media screen and (min-width: 64rem) {
  .info___JN_si .technical-details___1rZ29 {
    margin-top: 2.4rem;
  }
}

.info___JN_si .highlighted-features___29Aku {
  margin-top: 2.4rem;
}

.steps___2tBXW {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

@media screen and (min-width: 46.75rem) {
  .steps___2tBXW {
    overflow: hidden;
  }
}

.product___MbOUd {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}

@media screen and (min-width: 46.75rem) {
  .product___MbOUd {
    overflow: hidden;
  }
}

@media screen and (min-width: 64rem) {
  .product___MbOUd {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

@media screen and (min-width: 64rem) {
  .product___MbOUd .overview___1ZyZV {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
}

@media screen and (min-width: 64rem) {
  .product___MbOUd .steps___paC4- {
    width: 50%;
    max-width: 52rem;
  }
}

/*! CSS Used from: Embedded */
@media all and (min-width: 320px) and (max-width: 667px) {
  ::-webkit-scrollbar {
    display: none;
  }
}

.title___2Hogu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem 1.25rem 1.125rem 1.5rem;
  font-weight: bold;
}

.title___2Hogu .arrow-down___2zPZi {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #101011;
  -webkit-transition: -webkit-transform 0.1s ease-in-out;
  transition: -webkit-transform 0.1s ease-in-out;
  -o-transition: transform 0.1s ease-in-out;
  transition: transform 0.1s ease-in-out;
  transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
}

.title___2Hogu .arrow-down___2zPZi.opened___3s8Qf {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.collapse___17zDh {
  border: 1px solid #d9d9d9;
  border-radius: 3px;
}

.collapse___17zDh .container___2Tabm {
  padding: 0 1.25rem 1.125rem 1.5rem;
}

.list-item___2WyM9 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.list-item___2WyM9 .point___1_tSf {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: #58585e;
  margin-right: 0.75rem;
}

.info___JN_si .equipment___2Bnw6 {
  margin-top: 2.4rem;
}

.info___JN_si .equipment___2Bnw6 .equip___1Xzhv {
  margin-bottom: 0.2rem;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/*! CSS Used from: Embedded */
@media all and (min-width: 320px) and (max-width: 667px) {
  ::-webkit-scrollbar {
    display: none;
  }
}

.back-link___1LJpm {
  user-select: none;
}

.buttons-wrapper___3WoLU .back-link-wrapper___o4YqX {
  margin: 0.95rem auto 0;
  font-size: 0.9rem;
  text-align: center;
}

.buttons-wrapper___3WoLU .proceed-button___2ZgPy {
  max-width: 20rem;
  height: auto;
  margin: auto;
}

@media screen and (min-width: 64rem) {
  .buttons-wrapper___3WoLU {
    padding: 0.75rem 0 1.4rem;
  }
}

@media screen and (min-width: 46.75rem) {
  .buttons-wrapper___3WoLU {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
}

.buttons-wrapper___3WoLU {
  width: 98.2%;
  position: absolute;
  margin-top: auto;
  padding: 2.1rem 0;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.button___2oWcS {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem 1.3rem;
  background-color: var(--button-color);
  color: var(--second-button-color);
  font-weight: 600;
  border-radius: 0.3rem;
  border: 2px solid var(--button-color);
  cursor: pointer;
  -webkit-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  outline: none;
}

.form__wrapper {
  padding: var(--space-xs) 0 var(--space-xl) 0;
}

.step__content {
  width: 100%;
}

.multiform {
  border: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
}

.multiform__wrapper {
  border: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  max-width: 100% !important;
}

.multiform__steps {
  border: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  width: 100% !important;
  padding: 2em 0 !important;
}

.step__content-single {
  width: 100%;
  padding: 0 var(--space-xl);
}

.step__content-single_header {
  width: 100%;
  padding: var(--space-s) var(--space-xl);
}

.add__price-forsikring,
.add__price-selv,
.add__price-vej,
.add__price-hjul {
  font-size: 1rem !important;
  font-weight: 600 !important;
  font-family: Rubik, sans-serif;
  padding: 0.9rem 0 !important;
  display: flex;
  justify-content: space-between;
  width: 100% !important;
  position: relative !important;
}

.add__price-forsikring .formkit-tooltip,
.add__price-selv .formkit-tooltip,
.add__price-vej .formkit-tooltip,
.add__price-hjul .formkit-tooltip,
.label-for-cpr {
  margin-right: auto;
}

.add__price-forsikring:after,
.add__price-vej:after,
.add__price-hjul:after,
.add__price-selv:after,
.label-for-cpr:after {
  font-size: 1rem;
  font-weight: 500;
}

.add__price-forsikring:after {
  content: "+119 kr./.md " !important;
}

.add__price-vej:after {
  content: "+49 kr./.md " !important;
}

.add__price-hjul:after {
  content: "+119 kr./.md" !important;
}

.add__price-selv:after {
  content: "+64 kr./.md " !important;
}

.add__price {
  font-size: 1rem !important;
  font-weight: 600 !important;
  font-family: Rubik, sans-serif;
  padding: 0.9rem 0 !important;
  display: flex;
  justify-content: space-between;
  width: 100% !important;
  position: relative !important;
}

/* Step 2 list of prisoverslag about the choosen carr */
.prices_overview {
  height: 70dvh;
  overflow-y: auto;
  padding: 0 var(--space-xl);
}

.prices--interactiveBlock {
  margin-top: 2.4rem;
  margin-bottom: 9rem;
}

.prices__info {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 0.875rem;
}

.prices__info--primary {
  font-weight: bold;
}

.bold {
  font-weight: bold;
}

.prices__title {
  display: flex;
  min-height: 1.25rem;
}

.prices__separator {
  flex: 1;
  height: 1px;
  background-color: transparent;
  align-self: flex-end;
  margin: 0 0.375rem 0.375rem;
}

.prices__info--secondary {
  padding-left: 1rem;
}

.prices__extra {
  margin-top: 1.6rem;
  margin-bottom: 1.8rem;
}

.prices__title--tooltip {
  display: flex;
  align-items: center;
  min-height: 1.25rem;
}

.prices__tooltip {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 0.75rem;
  color: #1892c3;
  font-size: 0.85rem;
  font-weight: normal;
  border: 1px solid #1892c3;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
}

.prices__info--highlighted {
  color: #1892c3;
  font-size: 1.2rem;
}

.prices__text {
  text-align: center;
}

.tooltip___2lnLH {
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

.tooltip___2lnLH:hover {
  color: #fff;
  background-color: #1892c3;
}

.interaction-block-section___3w27p {
  margin-top: 2.4rem;
}

.price-info-line___3KX0d {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 0.875rem;
}

.price-info-line___3KX0d.additional___3qr4e {
  padding-left: 1rem;
}

.price-info-line___3KX0d.bold___2YVaf {
  font-weight: bold;
}

.price-info-line___3KX0d.highlighted___2nN9d {
  color: #1892c3;
}

.price-info-line___3KX0d .separator___3qRTT {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 1px;
  background-color: transparent;
  -ms-flex-item-align: end;
  align-self: flex-end;
  margin: 0 0.375rem 0.375rem;
}

.price-info-line___3KX0d .title___1kHB1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 1.25rem;
}

.price-info-line___3KX0d .tooltip___3kHUM {
  margin-left: 0.75rem;
}

@media screen and (min-width: 64rem) {
  .price-info-line___3KX0d {
    font-size: 1rem;
  }

  .price-info-line___3KX0d.highlighted___2nN9d {
    font-size: 1.2rem;
  }

  .price-info-line___3KX0d .separator___3qRTT {
    background-color: rgba(16, 16, 17, 0.1);
  }
}

.prices___3R4r3>*:not(:first-child) {
  margin-top: 0.35rem;
}

.prices___3R4r3>*:last-child {
  margin-top: 2.2rem;
}

.prices___3R4r3 .extra-prices___3LhKS {
  margin-top: 1.6rem;
  margin-bottom: 1.8rem;
}

.prices___3R4r3 .text___1edAB {
  text-align: center;
}

.prices___18yIE {
  margin-top: 3rem;
}

@media screen and (min-width: 64rem) {
  .prices___18yIE {
    margin-top: 6rem;
  }
}

/*! CSS Used from: Embedded */
@media all and (min-width: 320px) and (max-width: 667px) {
  ::-webkit-scrollbar {
    display: none;
  }
}

[data-checked] {
  background-color: #f8f6f6;
  color: black;
}

.form__wrapper-input {
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

.form__extra-help {
  font-size: 0.9rem;
  color: #373737;
  margin: 0.5rem 0;
}

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
