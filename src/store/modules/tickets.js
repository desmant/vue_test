export default {
  actions: {
    filteredTickets(content, obj){

      console.log(content);
      console.log(obj);

      const store = content.state.tickets

      console.log(store);

      content.commit('filterTickets', store.filter((item)=>{
        return !obj.value;
      }))
    }
  },
  mutations: {
    filterTickets(state, tickets){
      state.tickets = tickets
    }
  },
  state: {
    tickets: [
      {
        id: 1,
        fullname: "Иванов Иван Иванович",
        tel: "79990000000",
        appeal: "Здравствуйте! Подскажите пожалуйста ...",
        direction: "therapist",
        doctor: "Григорий Антонович Захарьин"
      },
      {
        id: 2,
        fullname: "Петров Пётр Петрович",
        tel: "79991111111",
        appeal: "Добрый день! Могу ли я обратиться к вам ...",
        direction: "surgeon",
        doctor: "Николай Васильевич Склифосовский"
      },
      {
        id: 3,
        fullname: "Серёгин Сергей Сергеевич",
        tel: "79993333333",
        appeal: "Здравствуйте! Меня беспокоит ...",
        direction: "therapist",
        doctor: "Сергей Петрович Боткин"
      },
      {
        id: 4,
        fullname: "Борисов Борис Борисович",
        tel: "79995555555",
        appeal: "Добрый день! Могу ли я обратиться к вам ...",
        direction: "surgeon",
        doctor: "Николай Иванович Пирогов"
      }
    ]
  },
  getters: {
    getTickets(state) {
      return state.tickets
    }
  }
}