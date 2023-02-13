<script setup>
import FooterItem from "@/components/FooterItem.vue";

</script>
<template >
  <div class="ct-section-inner-wrap-background">
    <ContactForm />
  </div>
<footer-item />
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
}
</script>
<style scoped>
.ct-section-inner-wrap-background{
  background-color: #f2f2f2;
  padding: var(--section-space-l) 0;


}

</style>
