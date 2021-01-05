<template>
  <div>
    <Loader v-show="!loaded" />
    <div class="filter-input-container p-d-flex">
      <InputText
        type="text"
        v-model="tourFilter"
        placeholder="Filter tours"
        class="filter-input p-inputtext-lg p-mr-2"
      />
      <button class="btn btn--green btn--small" @click="getAllTours">
        Reset
      </button>
    </div>
    <!-- <Button label="Reset" class="btn btn--green btn--small btn--inline" /> -->
    <ul class="p-grid p-m-2 p-jc-center card-container">
      <li v-for="tour in toursList" :key="tour._id"><Tour :tour="tour" /></li>
    </ul>
  </div>
</template>

<script>
import TourService from '@/services/TourService';
import Tour from '@/components/Tour.vue';
import Loader from '@/components/Loader.vue';
import InputText from 'primevue/inputtext';

export default {
  data() {
    return {
      toursList: [],
      error: null,
      loaded: false,
      tourFilter: '',
    };
  },
  created() {
    this.getAllTours();
  },
  watch: {
    tourFilter() {
      // prettier-ignore
      this.toursList = this.toursList
        .filter((el) => el.name.toLowerCase().includes(this.tourFilter));
    },
  },
  components: {
    Tour,
    Loader,
    InputText,
  },
  methods: {
    async getAllTours() {
      this.loaded = false;
      this.error = null;
      this.tourFilter = null;
      try {
        this.toursList = (await TourService.index()).data.data;
        this.loaded = true;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style>
</style>
