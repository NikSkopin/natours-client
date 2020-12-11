import Api from '@/services/api';

export default {
  getUser(userId) {
    return Api().get(`users/${userId}`);
  },
};
