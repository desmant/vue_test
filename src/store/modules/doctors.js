export default {
  actions: {},
  mutations: {
    
  },
  state: {
    doctors: [
      {
        "id": 1,
        "fullname": "Григорий Антонович Захарьин",
        "direction": "therapist"
      },
      {
        "id": 2,
        "fullname": "Сергей Петрович Боткин",
        "direction": "therapist"
      },
      {
        "id": 3,
        "fullname": "Николай Васильевич Склифосовский",
        "direction": "surgeon"
      },
      {
        "id": 4,
        "fullname": "Николай Иванович Пирогов",
        "direction": "surgeon"
      }
    ],
    directions: [
      {
        "name": "therapist",
        "value": "Теропевт"
      },
      {
        "name": "surgeon",
        "value": "Хирург"
      }
    ]
  },
  getters: {
    getDoctors(state) {
      return state.doctors
    },
    getDirections(state) {
      return state.directions
    }
  }
}