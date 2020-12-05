<template>
  <ul class="p-grid p-m-2 p-jc-center card-container">
    <li v-for="tour in toursList" :key="tour._id"><Tour :tour="tour" /></li>
  </ul>
</template>

<script>
import TourService from '@/services/TourService';
import Tour from '@/components/Tour.vue';

export default {
  data() {
    return {
      toursList: [],
      error: null,
    };
  },
  created() {
    this.getAllTours();
  },
  components: {
    Tour,
  },
  methods: {
    async getAllTours() {
      this.error = null;
      try {
        this.toursList = (await TourService.index()).data.data;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style>
</style>
