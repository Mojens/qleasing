<script setup>
import FooterItem from "@/components/FooterItem.vue";

</script>
<template>
  <div class="ct-section-inner-wrap">

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

