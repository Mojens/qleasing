<template>
    <div>
      <div v-if="procedureData">
        <h1>{{ procedureData.title }}</h1>
        <div v-html="procedureData.body"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { ARTICLE_URL } from '../..settings.js';
  export default {
    data() {
      return {
        procedureData: null
      };
    },
    async created() {
      await this.fetchData();
    },
    methods: {
      async fetchData() {
        const response = await fetch(ARTICLE_URL + 3);
        const data = await response.json();
        this.procedureData = data.data;
      }
    }
  };
  </script>
  
  
  
  
  <style>
  @media (min-width: 1024px) {
    .about2 {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  