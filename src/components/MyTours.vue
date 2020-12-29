<template>
  <ul class="p-grid p-m-2 p-jc-center card-container">
    <li v-for="booking in bookings" :key="booking._id">
      <Tour :tour="booking" />
    </li>
  </ul>
</template>

<script>
import TourService from '@/services/TourService';
import Tour from '@/components/Tour.vue';

export default {
  data() {
    return {
      error: null,
      user: null,
      userID: '',
      bookings: [],
    };
  },
  async mounted() {
    try {
      // const { _id } = this.$store.state.user;
      // this.userID = _id;
      this.user = this.$store.state.user;
      const res = await TourService.getMyTours(this.user);
      this.bookings = res.data.data;
      console.log(this.bookings.data.data);
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    Tour,
  },
};
</script>

<style>
</style>
