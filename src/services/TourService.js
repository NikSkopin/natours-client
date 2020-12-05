import Api from '@/services/api';

export default {
  index() {
    return Api().get('tours');
  },
  getTour(tourId) {
    return Api().get(`tours/${tourId}`);
  },
};
