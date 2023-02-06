<template>
    <div>
      <div v-if="articleData">
        <h1>{{ articleData.title }}</h1>
        <div v-html="articleData.body"></div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        articleData: null
      };
    },
    async created() {
      await this.fetchData();
    },
    methods: {
      async fetchData(){
        const READER_API = import.meta.env.VITE_APP_READER_API
        const ARTICLE_URL = import.meta.env.VITE_APP_ARTICLE_URL + "4"
        const response = await fetch(ARTICLE_URL,{
          headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${READER_API}`
          }
        });
        const data = await response.json();
        this.articleData = data.data;
      }
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
  