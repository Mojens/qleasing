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

      <FormKit type="step" label="1. Valg af Forsikring" >

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


.multiform{
  border: none!important;
  box-shadow: none!important;
  border-radius: 0!important;


}
.multiform__wrapper{
  border: none!important;
  box-shadow: none!important;
  border-radius: 0!important;
}


.multiform__steps{
  height: 500px;
  border: none!important;
  box-shadow: none!important;
  border-radius: 0!important;
}

.add__price-forsikring:after {
  font-size: 1.2rem;
  font-weight: 500;
  content: "+119 kr./.md " !important;
  padding: 0 2.5rem!important;


}
.add__price-selv:after {
  font-size: 1.2rem;
  font-weight: 500;
  content: "+64 kr./.md " !important;
  padding: 0 2.5rem!important;


}
.add__price-vej:after {
  font-size: 1.2rem;
  font-weight: 500;
  content: "+49 kr./.md " !important;
  padding: 0 2.5rem!important;


}
.add__price-hjul{


}
.add__price-hjul:after {
  font-size: 1.2rem;
  font-weight: 500;
  content: "+119 kr./.md " !important;

  padding: 0 2.5rem!important;


}
.add__price {
  font-size: 1rem!important;
  font-weight: 500;
  font-family: Rubik, sans-serif;
  padding: 0.7rem 0!important;
  display: flex;
  justify-content: space-between;
  width: 100%!important;

}
</style>