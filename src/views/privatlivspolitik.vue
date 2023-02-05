<template>
  <div>
    <p>{{ apiKey }}</p>
  </div>
</template>

<script>
export default {
  data() {
    console.log(import.meta.env.VITE_READER_API)
    return {
      apiKey: import.meta.env.READER_API
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
