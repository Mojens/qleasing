<template>
  <div>
    <p>{{ apiKey }}</p>
  </div>
</template>

<script>
export default {
  data() {
    const api = import.meta.env.VUE_APP_READER_API
    console.log(api)
    return {
      apiKey: import.meta.env.VUE_APP_READER_API
    };
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .privatlivspolitik {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
