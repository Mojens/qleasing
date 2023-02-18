<script>
import StepOne from "@/components/MultiStepFormLease/StepOne.vue";
import StepTwo from "@/components/MultiStepFormLease/StepTwo.vue";
import StepThree from "@/components/MultiStepFormLease/StepThree.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { StepThree, StepTwo, StepOne },
});
</script>
<template>
  <FormKit type="form" :actions="true" form-class="multiform">
    <FormKit
      type="multi-step"
      tab-style="tab"
      steps-class="multiform__steps"
      :wrapper-class="{
        multiform__wrapper: true,
      }"
    >
      <FormKit type="step" label="1. Valg af Forsikring" help="222">
        <div class="step__content-single">
        <StepOne />
        </div>
      </FormKit>

      <FormKit type="step" name="step2" label="2. Valg af leasing" >
        <div class="step__content">
        <div class="step__content-single_header">
          <h3 class=" ">Prisoverslag</h3>
        </div>
        <div class="prices_overview">
        <div class=" grid--auto-4 pad-header--s gap--xs">
          <StepTwo />
        </div>

        <div class="prices--interactiveBlock">
          <div class="prices__info prices__info--primary bold">
            <div class="prices__title">Citroën C3 Rivera 83 HK ML</div>
            <div class="prices__separator"></div>
            <div>2.799 kr./md.</div>
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
            <div>0 kr.</div>
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
            <div class="prices__info">
              <div class="prices__title prices__title--tooltip">
                Viking – Vejhjælp
                <div><div class="prices__tooltip">?</div></div>
              </div>
              <div class="prices__separator"></div>
              <div>49 kr./md.</div>
            </div>
          </div>
          <div class="prices__info prices__info--highlighted bold">
            <div class="prices__title">Totalpris</div>
            <div class="prices__separator"></div>
            <div>2.848 kr./md.</div>
          </div>
          <p class="prices__text">
            Første betaling betales 7 dage før bilen udleveres
          </p>
        </div>
        </div>
        </div>
      </FormKit>

      <FormKit type="step" name="step3" label="3. Kontaktinformation">
        <div class="step__content">
          <div class="step__content-single_header">
            <h3 class=" ">Kundeinformation</h3>
          </div>
          <div class="prices_overview">
            <div class="grid--auto-4 pad-header--s gap--xs">
        <StepThree />
        </div>
        </div>
        </div>
      </FormKit>
    </FormKit>
  </FormKit>
</template>

<style>
.form__wrapper {
  padding: var(--space-l) 0 var(--space-xl) 0;
}
.step__content{
  width: 100%;
}
.custom-formkit__label{
  font-size: calc(var(--text-m) - 1.6px);
  font-family: Rubik, sans-serif;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.3px;

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
  padding: 2em 0!important;
}
.step__content-single{
  width: 100%;
  padding: 0 var(--space-xl);
}
.step__content-single_header{
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
.label-for-cpr{
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
.prices___3R4r3 > *:not(:first-child) {
  margin-top: 0.35rem;
}
.prices___3R4r3 > *:last-child {
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
</style>
