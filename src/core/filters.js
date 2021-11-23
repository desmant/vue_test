import Vue from 'vue';

Vue.filter('mask', (value, type) => {

  // console.log(value);
  // console.log(type);

  const mask = value.match(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/)
  return `+${mask[1]} (${mask[2]}) ${mask[3]}-${mask[4]}-${mask[5]}`
});