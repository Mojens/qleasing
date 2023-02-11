<template>
  <div>
    <div id="portal">
      <div
        :class="{ 'is-open___1eAPm': isModalOpen }"
        class="modal___25xvj"
        style="height: 99vh"
      >
        <div class="close-button-wrapper___1dYxl">
          <RouterLink title="Faq" to="/faq">
            <button
              class="button___2oWcS dark___2wNZC button___3129j rounded-corners___2DuU9"
            >
              <svg
                class="icon___3oVL5"
                fill="none"
                height="24"
                stroke="white"
                viewBox="0 0 25 24"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 5L5.5 19"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  d="M19.5 19L5.5 5"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </RouterLink>
        </div>
        <div class="content___FOiFD faq-page___2Nz-F">
          <div class="content___12COd">
            <h1 class="title___Tm0Tt center--left">Service</h1>
            <div class="markdown___35KUH description___16IX9">
              <p ></p>
            </div>
            <div class="body___cvucF">
              <div class="markdown___35KUH html-block___G4sWQ">
                <h3>
                  Er service inkluderet i aftalen, og er der noget ansvar
                  forbundet med servicefristerne?
                </h3>
                <p ></p>
                <p >
                  Serviceeftersyn er inkluderet i din abonnementsaftale, og det
                  er dit ansvar som abonnent at overholde serviceeftersyn. Hvis
                  serviceeftersyn ikke bliver overholdt, vil du blive opkrævet
                  et gebyr ved din slutopgørelse, iht. til
                  <a href="/faq/liste-over-priser">prislisten</a>.
                </p>
                <p >
                  Vi gør dig opmærksom på at påfyldning af sprinklervæske,
                  udskiftning af viskerblade, skift af pærer/lys,
                  hjulafbalancering, sporing, vask eller rengøring ikke er
                  omfattet af dit inkluderede serviceeftersyn.
                </p>
                <p ></p>
                <h3>Hvornår skal min bil til service?</h3>
                <p >
                  Din bil skal til service iht. bilens servicebog, når
                  servicelampen lyser, eller hvis bilen bliver omfattet af en
                  fabriksindkaldelse.
                </p>
                <p ></p>
                <h3>Hvor skal bilen til service?</h3>
                <p >
                  Har du en Peugeot, Citroën<a
                  href="https://www.bilabonnement.dk/faq/service#Citro%C3%ABnDS3Service"
                >, </a
                >eller Opel, kan du frit vælge mellem værkstederne på de
                  nedenstående lister til at få serviceret din bil. Har du en
                  abonnementsbil med et andet mærke, skal du blot kontakte
                  Bilabonnement Support på
                  <a href="tel:89885080">89 88 50 80</a>, Så vil vi henvise dig
                  til et værksted.
                </p>
                <p ></p>
                <p ></p>
              </div>
              <div class="table-wrapper___1r2Yw">
                <div class="content___fD8Ja">
                  <h3 class="title___3-170">Citroën serviceværksteder</h3>
                  <div class="tables-wrapper___3TOEv">
                    <div class="original-table-wrapper___le7qO">
                      <table cellspacing="0" class="basic-table___2sL1d">
                        <thead>
                        <tr>
                          <th class="cell___1FDI8 header___3dKz6">
                            Forhandlernavn
                          </th>
                          <th class="cell___1FDI8 header___3dKz6">Adresse</th>
                          <th class="cell___1FDI8 header___3dKz6">
                            Postnummer
                          </th>
                          <th class="cell___1FDI8 header___3dKz6">
                            Telefonnummer
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                          v-for="(citroen, index) in citroens"
                          :class="{
                              highlighted___1AED: index === highlightedRowIndex,
                            }"
                          @mouseleave="removeHighlight()"
                          @mouseover="highlightRow(index)"
                        >
                          <td class="cell___1FDI8">
                            {{ citroen.forhandlernavn }}
                          </td>
                          <td class="cell___1FDI8">{{ citroen.adresse }}</td>
                          <td class="cell___1FDI8">
                            {{ citroen.postnummer }}
                          </td>
                          <td class="cell___1FDI8">
                            {{ citroen.telefonnummer }}
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-wrapper___1r2Yw">
                <div class="content___fD8Ja">
                  <h3 class="title___3-170 pad-header--l">Peugeot serviceværksteder</h3>
                  <div class="tables-wrapper___3TOEv">
                    <div class="original-table-wrapper___le7qO">
                      <table cellspacing="0" class="basic-table___2sL1d">
                        <thead>
                        <tr>
                          <th class="cell___1FDI8 header___3dKz6">
                            Forhandlernavn
                          </th>
                          <th class="cell___1FDI8 header___3dKz6">Adresse</th>
                          <th class="cell___1FDI8 header___3dKz6">
                            Postnummer
                          </th>
                          <th class="cell___1FDI8 header___3dKz6">
                            Telefonnummer
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                          v-for="(peugeot, index) in peugeots"
                          :class="{
                              highlighted___1AED: index === highlightedRowIndex,
                            }"
                          @mouseleave="removeHighlight()"
                          @mouseover="highlightRow(index)"
                        >
                          <td class="cell___1FDI8">
                            {{ peugeot.forhandlernavn }}
                          </td>
                          <td class="cell___1FDI8">{{ peugeot.adresse }}</td>
                          <td class="cell___1FDI8">
                            {{ peugeot.postnummer }}
                          </td>
                          <td class="cell___1FDI8">
                            {{ peugeot.telefonnummer }}
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-wrapper___1r2Yw">
                <div class="content___fD8Ja">
                  <h3 class="title___3-170 pad-header--l">Opel serviceværksteder</h3>
                  <div class="tables-wrapper___3TOEv">
                    <div class="original-table-wrapper___le7qO">
                      <table cellspacing="0" class="basic-table___2sL1d">
                        <thead>
                        <tr>
                          <th class="cell___1FDI8 header___3dKz6">
                            Forhandlernavn
                          </th>
                          <th class="cell___1FDI8 header___3dKz6">Adresse</th>
                          <th class="cell___1FDI8 header___3dKz6">
                            Postnummer
                          </th>
                          <th class="cell___1FDI8 header___3dKz6">
                            Telefonnummer
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                          v-for="(opel, index) in opels"
                          :class="{
                              highlighted___1AED: index === highlightedRowIndex,
                            }"
                          @mouseleave="removeHighlight()"
                          @mouseover="highlightRow(index)"
                        >
                          <td class="cell___1FDI8">
                            {{ opel.forhandlernavn }}
                          </td>
                          <td class="cell___1FDI8">{{ opel.adresse }}</td>
                          <td class="cell___1FDI8">{{ opel.postnummer }}</td>
                          <td class="cell___1FDI8">
                            {{ opel.telefonnummer }}
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citroens: [
        {
          forhandlernavn: "P. Christensen A/S",
          adresse: "Rovsingsgade 40",
          postnummer: "2100",
          telefonnummer: "35317080"
        },
        {
          forhandlernavn: "Daugaard Biler A/S",
          adresse: "Ejby Industrivej 3",
          postnummer: "2600",
          telefonnummer: "43434383"
        },
        {
          forhandlernavn: "Henrik Larsen Automobiler A/S",
          adresse: "Roskildevej 249",
          postnummer: "2620",
          telefonnummer: "43646400"
        },
        {
          forhandlernavn: "Auto House Hvidovre",
          adresse: "Gl Køge Landevej 471",
          postnummer: "2650",
          telefonnummer: "36776200"
        },
        {
          forhandlernavn: "Mogens Elmer",
          adresse: "Kirstinehøj 66",
          postnummer: "2770",
          telefonnummer: "32519090"
        },
        {
          forhandlernavn: "Virum Auto A/S",
          adresse: "Virumvej 96",
          postnummer: "2830",
          telefonnummer: "45858866"
        },
        {
          forhandlernavn: "Autonova",
          adresse: "Løvdalsvej 3",
          postnummer: "3000",
          telefonnummer: "49252222"
        },
        {
          forhandlernavn: "Henrik Jacobsen Automobiler",
          adresse: "Toftebakken 4-8",
          postnummer: "3460",
          telefonnummer: "45811573"
        },
        {
          forhandlernavn: "P.M. Olsen",
          adresse: "Ndr. Ringgade",
          postnummer: "4200",
          telefonnummer: "58556210"
        },
        {
          forhandlernavn: "Stig Rasmussen Automobiler",
          adresse: "Industrivej 11",
          postnummer: "4230",
          telefonnummer: "58194535"
        },
        {
          forhandlernavn: "Kalundborg-Jyderup Autocenter",
          adresse: "Hareskovvej 20",
          postnummer: "4400",
          telefonnummer: "59515259"
        },
        {
          forhandlernavn: "Auto-House Køge",
          adresse: "Høgevej 4-6",
          postnummer: "4600",
          telefonnummer: "56633244"
        },
        {
          forhandlernavn: "Arne Busk Automobiler A/S",
          adresse: "Marinebuen 6",
          postnummer: "4700",
          telefonnummer: "55738510"
        },
        {
          forhandlernavn: "Karvil Biler",
          adresse: "Bondovej",
          postnummer: "5250",
          telefonnummer: "63174141"
        },
        {
          forhandlernavn: "AutoForum Middelfart",
          adresse: "Mandal Allé 13",
          postnummer: "5500",
          telefonnummer: "64414230"
        },
        {
          forhandlernavn: "Karvil Biler",
          adresse: "Englandsvej 2",
          postnummer: "5700",
          telefonnummer: "63210041"
        },
        {
          forhandlernavn: "Aunsbjerg Kolding",
          adresse: "Platinvej 3",
          postnummer: "6000",
          telefonnummer: "75504066"
        },
        {
          forhandlernavn: "Autocentralen Haderslev",
          adresse: "Hirsevej 1",
          postnummer: "6100",
          telefonnummer: "74523650"
        },
        {
          forhandlernavn: "Erling Høi-Nielsen",
          adresse: "Brunde Vest 5",
          postnummer: "6230",
          telefonnummer: "74432000"
        },
        {
          forhandlernavn: "Erling Høi-Nielsen",
          adresse: "Elholm 21",
          postnummer: "6500",
          telefonnummer: "74432000"
        },
        {
          forhandlernavn: "Brdr. Simonesen Automobiler",
          adresse: "Overgade 1",
          postnummer: "6500",
          telefonnummer: "74871218"
        },
        {
          forhandlernavn: "Jepsen Biler",
          adresse: "Fuglesangsalle 12",
          postnummer: "6600",
          telefonnummer: "75363531"
        },
        {
          forhandlernavn: "Jepsen Biler",
          adresse: "Skodborgvej 5",
          postnummer: "6630",
          telefonnummer: "74847248"
        },
        {
          forhandlernavn: "Hydro Autocenter",
          adresse: "Herningvej 82",
          postnummer: "6950",
          telefonnummer: "97320301"
        },
        {
          forhandlernavn: "Hedegaard Automobiler A/S",
          adresse: "Herning Dueoddevej 2",
          postnummer: "7400",
          telefonnummer: "70270311"
        },
        {
          forhandlernavn: "Bojsen Biler",
          adresse: "Banetoften 50",
          postnummer: "7500",
          telefonnummer: "97405250"
        },
        {
          forhandlernavn: "Citroën Thisted",
          adresse: "Tigervej 2",
          postnummer: "7700",
          telefonnummer: "96185206"
        },
        {
          forhandlernavn: "Jørgen Laursen Skive",
          adresse: "Katkjærvej 7",
          postnummer: "7800",
          telefonnummer: "97514966"
        },
        {
          forhandlernavn: "Uggerhøj",
          adresse: "Slet Parkvej 2",
          postnummer: "8270",
          telefonnummer: "87375555"
        },
        {
          forhandlernavn: "Grenaa Bil-Center A/S",
          adresse: "Fasanvej 40",
          postnummer: "8500",
          telefonnummer: "86320500"
        },
        {
          forhandlernavn: "Poul Munk A/S",
          adresse: "Nørrevænget 15-23",
          postnummer: "8600",
          telefonnummer: "86822700"
        },
        {
          forhandlernavn: "Børge Hansen Automobiler A/S",
          adresse: "Thomas Helsteds Vej 1",
          postnummer: "8660",
          telefonnummer: "87941500"
        },
        {
          forhandlernavn: "Aunsbjerg Horsens",
          adresse: "Høegh Guldbergsgade 48",
          postnummer: "8700",
          telefonnummer: "75623511"
        },
        {
          forhandlernavn: "Brædstrup Motor Co.",
          adresse: "Indre Ringvej 11",
          postnummer: "8740",
          telefonnummer: "75751988"
        },
        {
          forhandlernavn: "Bojsen Biler",
          adresse: "Gammel Skivevej 77",
          postnummer: "8800",
          telefonnummer: "86620012"
        },
        {
          forhandlernavn: "HK Automobiler A/S",
          adresse: "Kristrupvej 170",
          postnummer: "8900",
          telefonnummer: "86428211"
        },
        {
          forhandlernavn: "Automobilhuset Randers",
          adresse: "Clausholmvej 3",
          postnummer: "8960",
          telefonnummer: "86422800"
        },
        {
          forhandlernavn: "Kjærsgaard Auto A/S",
          adresse: "Håndværkervej 22",
          postnummer: "9000",
          telefonnummer: "98137100"
        },
        {
          forhandlernavn: "Autohuset Hobro",
          adresse: "Jeppe Aakjærs Vej 4",
          postnummer: "9500",
          telefonnummer: "98523131"
        },
        {
          forhandlernavn: "Uggerhøj Brønderslev",
          adresse: "Østergade 64",
          postnummer: "9700",
          telefonnummer: "98821200"
        }
      ],
      opels: [
        {
          forhandlernavn: "Henrik Wessel Østerbro",
          adresse: "Strandboulevarden 122",
          postnummer: "2100 København Ø",
          telefonnummer: "44449999"
        },
        {
          forhandlernavn: "Henrik Wessel Amager",
          adresse: "Englandsvej 397",
          postnummer: "2770 Tårnby",
          telefonnummer: "44449999"
        },
        {
          forhandlernavn: "Henrik Wessel Lyngby",
          adresse: "Firskovvej 23-23",
          postnummer: "2800 Lyngby",
          telefonnummer: "44449999"
        },
        {
          forhandlernavn: "Autohuset Vestergaard Hillerød",
          adresse: "Rønnekrogen 1",
          postnummer: "3400 Hillerød",
          telefonnummer: "48241924"
        },
        {
          forhandlernavn: "Vejlebo og Larsen Roskilde",
          adresse: "Maglegårdsvej 5B",
          postnummer: "4000 Roskilde",
          telefonnummer: "88886767"
        },
        {
          forhandlernavn: "Vejlebo og Larsen Holbæk",
          adresse: "Mellemvang 1",
          postnummer: "4300 Holbæk",
          telefonnummer: "88886700"
        },
        {
          forhandlernavn: "Henrik Hansen Næstved",
          adresse: "Transport buen 2",
          postnummer: "4700 Næstved",
          telefonnummer: "55774041"
        },
        {
          forhandlernavn: "V. Holm Jensen Odense",
          adresse: "Nyborgvej 240",
          postnummer: "5220 Odense",
          telefonnummer: "66121314"
        },
        {
          forhandlernavn: "Faaborg Bil-Center",
          adresse: "Telemarken 2",
          postnummer: "5600 Faaborg",
          telefonnummer: "62619060"
        },
        {
          forhandlernavn: "Aunsbjerg Kolding",
          adresse: "Platinvej 1-3",
          postnummer: "6000 Kolding",
          telefonnummer: "75504066"
        },
        {
          forhandlernavn: "Burgaard Sørensen",
          adresse: "Sædding Ringvej 1-5",
          postnummer: "6710 Esbjerg",
          telefonnummer: "75159911"
        },
        {
          forhandlernavn: "Burgaard Sørensen",
          adresse: "Tømrervej 8",
          postnummer: "6800 Varde",
          telefonnummer: "75151515"
        },
        {
          forhandlernavn: "Uggerhøj Herning",
          adresse: "Wedellsborgvej 1",
          postnummer: "7400 Herning",
          telefonnummer: "97267222"
        },
        {
          forhandlernavn: "Jørgen Laursen Skive",
          adresse: "Katkjærvej 7",
          postnummer: "7800 Skive",
          telefonnummer: "97514966"
        },
        {
          forhandlernavn: "Anders Petersen Automobiler",
          adresse: "Ravnesøvej 10",
          postnummer: "8240 Risskov",
          telefonnummer: "87415800"
        },
        {
          forhandlernavn: "Uggerhøj Højbjerg",
          adresse: "Slet Parkvej 2",
          postnummer: "8270 Højbjerg",
          telefonnummer: "87375555"
        },
        {
          forhandlernavn: "Poul Munk Silkeborg",
          adresse: "Nørrevænget 9-23",
          postnummer: "8600 Silkeborg",
          telefonnummer: "86822700"
        },
        {
          forhandlernavn: "Aunsbjerg Horsens",
          adresse: "Høegh Guldbergs gade 48",
          postnummer: "8700 Horsens",
          telefonnummer: "75623511"
        },
        {
          forhandlernavn: "Jørgen Laursen Viborg",
          adresse: "Gammel Skivevej 74",
          postnummer: "8800 Viborg",
          telefonnummer: "86625611"
        },
        {
          forhandlernavn: "Maibom A/S Aalborg",
          adresse: "Padevænget 3",
          postnummer: "9000 Aalborg",
          telefonnummer: "96316400"
        },
        {
          forhandlernavn: "Jørgen Laursen Aars",
          adresse: "Industrivej 2",
          postnummer: "9600 Aars",
          telefonnummer: "98625966"
        }
      ],
      peugeots: [
        {
          forhandlernavn: "Henrik Wessel",
          adresse: "Strandboulevarden 122",
          postnummer: "2100",
          telefonnummer: "44449999"
        },
        {
          forhandlernavn: "Bo Kjeldsmark Automobiler A/S",
          adresse: "Islevdalvej 75",
          postnummer: "2610",
          telefonnummer: "44910400"
        },
        {
          forhandlernavn: "Andersen & Martini",
          adresse: "Tempovej 17-21",
          postnummer: "2750",
          telefonnummer: "36931900"
        },
        {
          forhandlernavn: "Henrik Wessel Amager",
          adresse: "Englandsvej 397",
          postnummer: "2770",
          telefonnummer: "44449999"
        },
        {
          forhandlernavn: "Henrik Wessel",
          adresse: "Firskovvej 19-21",
          postnummer: "2800",
          telefonnummer: "44449999"
        },
        {
          forhandlernavn: "Automobilforretningen Nordsj.",
          adresse: "Tofte Industri 17",
          postnummer: "3200",
          telefonnummer: "47377777"
        },
        {
          forhandlernavn: "Autohuset Vestergaard",
          adresse: "Birkerød Kongevej 56",
          postnummer: "3460",
          telefonnummer: "45811819"
        },
        {
          forhandlernavn: "Vejlebo & Winther",
          adresse: "Mellemvang 1",
          postnummer: "4300",
          telefonnummer: "88886700"
        },
        {
          forhandlernavn: "Bilhuset Køge A/S",
          adresse: "Tangmosevej 95",
          postnummer: "4600",
          telefonnummer: "56640000"
        },
        {
          forhandlernavn: "Henrik Hansen Automobiler",
          adresse: "Transportbuen 2",
          postnummer: "4700",
          telefonnummer: "55774041"
        },
        {
          forhandlernavn: "SCHULZ Biler",
          adresse: "Herningvej 11",
          postnummer: "4800",
          telefonnummer: "54861016"
        },
        {
          forhandlernavn: "Clausen & Larsen I/S",
          adresse: "Industrivej 12",
          postnummer: "4990",
          telefonnummer: "54704114"
        },
        {
          forhandlernavn: "C. A. Larsen Automobiler A/S",
          adresse: "Hans Egedesvej 2A",
          postnummer: "5210",
          telefonnummer: "62214774"
        },
        {
          forhandlernavn: "Ronald Carlsen",
          adresse: "Rolundvej 9",
          postnummer: "5260",
          telefonnummer: "65957778"
        },
        {
          forhandlernavn: "AutoForum Middelfart",
          adresse: "Mandal Allé 13",
          postnummer: "5500",
          telefonnummer: "64414230"
        },
        {
          forhandlernavn: "C. A. Larsen Automobiler A/S",
          adresse: "Faaborgvej 9",
          postnummer: "5683",
          telefonnummer: "64731270"
        },
        {
          forhandlernavn: "C. A. Larsen Automobiler A/S",
          adresse: "Odensevej 108",
          postnummer: "5700",
          telefonnummer: "62214774"
        },
        {
          forhandlernavn: "P. Christensen",
          adresse: "Trianglen 11",
          postnummer: "6000",
          telefonnummer: "65561400"
        },
        {
          forhandlernavn: "Aunsbjerg Kolding",
          adresse: "Platinvej 3",
          postnummer: "6000",
          telefonnummer: "75504066"
        },
        {
          forhandlernavn: "Kjær Biler A/S",
          adresse: "Gl. Christiansfeldvej 57",
          postnummer: "6100",
          telefonnummer: "73520300"
        },
        {
          forhandlernavn: "Erling Høi-Nielsen",
          adresse: "Brunde Vest 5",
          postnummer: "6230",
          telefonnummer: "74432000"
        },
        {
          forhandlernavn: "Erling Høi-Nielsen",
          adresse: "Elholm 21",
          postnummer: "6400",
          telefonnummer: "74432000"
        },
        {
          forhandlernavn: "Henrik Christensen",
          adresse: "Vesterballevej 7A",
          postnummer: "7000",
          telefonnummer: "75924001"
        },
        {
          forhandlernavn: "Henrik Christensen",
          adresse: "Valdemar Poulsensvej 2",
          postnummer: "7100",
          telefonnummer: "75823766"
        },
        {
          forhandlernavn: "C. A. Larsen Automobiler A/S",
          adresse: "Lollandsvej 6",
          postnummer: "7400",
          telefonnummer: "97221666"
        },
        {
          forhandlernavn: "C. A. Larsen Automobiler A/S",
          adresse: "Lemvigvej 94",
          postnummer: "7620",
          telefonnummer: "50605081"
        },
        {
          forhandlernavn: "Højland Biler A/S",
          adresse: "Vilhelmsborgvej 17-19",
          postnummer: "7700",
          telefonnummer: "97926677"
        },
        {
          forhandlernavn: "Auto-huset A/S",
          adresse: "Viborgvej 46",
          postnummer: "7800",
          telefonnummer: "97583322"
        },
        {
          forhandlernavn: "P. Christensen",
          adresse: "Ravnsøvej 12",
          postnummer: "8240",
          telefonnummer: "86174888"
        },
        {
          forhandlernavn: "C. A. Larsen Automobiler A/S",
          adresse: "Hasselager Allé",
          postnummer: "8260",
          telefonnummer: "87333777"
        },
        {
          forhandlernavn: "Anders Petersen Automobiler",
          adresse: "Trekanten 42",
          postnummer: "8500",
          telefonnummer: "87594400"
        },
        {
          forhandlernavn: "Poul Munk A/S",
          adresse: "Nørrevænget 15-23",
          postnummer: "8600",
          telefonnummer: "86822700"
        },
        {
          forhandlernavn: "Børge Hansen Automobiler A/S",
          adresse: "Thomas Helsteds Vej 1",
          postnummer: "8660",
          telefonnummer: "87941500"
        },
        {
          forhandlernavn: "Aunsbjerg Horsens",
          adresse: "Høegh Guldbergsgade 48",
          postnummer: "8700",
          telefonnummer: "75623511"
        },
        {
          forhandlernavn: "Uggerhøj",
          adresse: "Slet Parkvej 2",
          postnummer: "8700",
          telefonnummer: "87375555"
        },
        {
          forhandlernavn: "Mogens Christensen Viborg A/S",
          adresse: "Marsk Stigsvej 3",
          postnummer: "8800",
          telefonnummer: "86624288"
        },
        {
          forhandlernavn: "Tage Thomsen",
          adresse: "Grenåvej 33",
          postnummer: "8960",
          telefonnummer: "86481066"
        },
        {
          forhandlernavn: "Tage Thomsen",
          adresse: "Østervangsvej 1",
          postnummer: "8961",
          telefonnummer: "86481066"
        },
        {
          forhandlernavn: "Maibom",
          adresse: "Padevænget 3",
          postnummer: "9000",
          telefonnummer: "96316400"
        },
        {
          forhandlernavn: "Bilhuset Hjørring A/S",
          adresse: "Frederikshavnsvej 41",
          postnummer: "9800",
          telefonnummer: "98926800"
        },
        {
          forhandlernavn: "Martin Jespersen & Søn",
          adresse: "Hjørringvej 158",
          postnummer: "9900",
          telefonnummer: "98424444"
        }
      ],
      highlightedRowIndex: null,
      isModalOpen: false,
      showModal: true
    };
  },
  mounted() {
    // Add the class "is-open___1eAPm" to the modal when the component is mounted

    setTimeout(() => {
      this.isModalOpen = true;
    }, 20);
  },
  methods: {
    highlightRow(index) {
      this.highlightedRowIndex = index;
    },
    removeHighlight() {
      this.highlightedRowIndex = null;
    }
  }
};
</script>
<style scoped>
.highlighted___1AED {
  background-color: rgba(24, 146, 195, 0.08);
}

.markdown___35KUH a {
  color: #1892c3;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (min-width: 64rem) {
  .markdown___35KUH a {
    font-size: 1rem;
  }
}

.markdown___35KUH a:visited {
  color: #1892c3;
}

.html-block___G4sWQ {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.basic-table___2sL1d {
  width: 100%;
  font-size: 0.9rem;
  background-color: #fff;
}

.cell___1FDI8 {
  padding: 1rem;
  font-size: 0.9rem;
  text-align: left;
  border: 0 solid #e5e6e8;
  border-bottom-width: 1px;
  min-width: 14rem;
  vertical-align: top;
}

.cell___1FDI8.header___3dKz6 {
  min-width: auto;
  white-space: nowrap;
}

.table-wrapper___1r2Yw {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
}

.table-wrapper___1r2Yw .content___fD8Ja {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
}

.table-wrapper___1r2Yw .content___fD8Ja .title___3-170 {
  font-size: 1.4rem;
  margin: 0;
  margin-bottom: 1.2rem;
}

.table-wrapper___1r2Yw .content___fD8Ja .tables-wrapper___3TOEv {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.table-wrapper___1r2Yw
.content___fD8Ja
.tables-wrapper___3TOEv
.original-table-wrapper___le7qO {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow-x: auto;
}

@media screen and (min-width: 64rem) {
  .table-wrapper___1r2Yw
  .content___fD8Ja
  .tables-wrapper___3TOEv
  .original-table-wrapper___le7qO {
    min-width: 40rem;
  }
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

.faq-page___2Nz-F {
  width: 100%;
  padding: 1rem 2rem 4rem;
}

@media screen and (min-width: 46.75rem) {
  .faq-page___2Nz-F {
    padding: 3rem 2rem 4rem;
  }
}

.faq-page___2Nz-F .content___12COd {
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
}

.faq-page___2Nz-F .content___12COd .title___Tm0Tt {
  font-size: 2rem;
  margin: 0;
}

@media screen and (min-width: 23rem) {
  .faq-page___2Nz-F .content___12COd .title___Tm0Tt {
    padding: 3rem 0 0 0;
  }
}

@media screen and (min-width: 46.75rem) {
  .faq-page___2Nz-F .content___12COd .title___Tm0Tt {
    font-size: 2.5rem;
    padding: 0;
  }
}

.faq-page___2Nz-F .content___12COd .description___16IX9 {
  margin-top: 1.3rem;
}

.faq-page___2Nz-F .content___12COd .body___cvucF > * {
  margin: unset;
}
</style>
