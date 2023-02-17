<script>
import StepOne from "@/components/MultiStepFormLease/StepOne.vue";
import StepTwo from "@/components/MultiStepFormLease/StepTwo.vue";
import StepThree from "@/components/MultiStepFormLease/StepThree.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { StepThree, StepTwo, StepOne }
});


</script>
<template>
  <FormKit type="form" :actions="true" form-class="multiform" >

    <FormKit type="multi-step" tab-style="tab" steps-class="multiform__steps" :wrapper-class="{
      'multiform__wrapper': true,
    }">

      <FormKit type="step" label="1. Valg af Forsikring" help="222">


        <StepOne />

      </FormKit>

      <FormKit type="step" name="step2" label="2. Valg af leasing" >

        <StepTwo />

      </FormKit>

      <FormKit type="step" name="step3" label="3. Kontaktinformation" >

        <StepThree />

      </FormKit>

    </FormKit>

  </FormKit>

</template>

<style>

.form__wrapper{
  padding: var(--space-l) var(--space-xxl) var(--space-xl) var(--space-xxl);
}
.multiform{
  border: none!important;
  box-shadow: none!important;
  border-radius: 0!important;


}
.multiform__wrapper{
  border: none!important;
  box-shadow: none!important;
  border-radius: 0!important;
  max-width: 100%!important;
}


.multiform__steps{
  height: 500px;
  border: none!important;
  box-shadow: none!important;
  border-radius: 0!important;
  width: 100%!important;

}


.add__price-forsikring,.add__price-selv, .add__price-vej, .add__price-hjul {
  font-size: 1rem!important;
  font-weight: 600!important;
  font-family: Rubik, sans-serif;
  padding: 0.9rem 0!important;
  display: flex;
  justify-content: space-between;
  width: 100%!important;
  position: relative!important;
}

.add__price-forsikring .formkit-tooltip,
.add__price-selv .formkit-tooltip,
.add__price-vej .formkit-tooltip,
.add__price-hjul .formkit-tooltip {
  margin-right: auto;
}
.add__price-forsikring:after,
.add__price-vej:after,
.add__price-hjul:after,
.add__price-selv:after {
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
  font-size: 1rem!important;
  font-weight: 600!important;
  font-family: Rubik, sans-serif;
  padding: 0.9rem 0!important;
  display: flex;
  justify-content: space-between;
  width: 100%!important;
  position: relative!important;

}
</style>