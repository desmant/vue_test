<template>
  <v-container
    class="pa-0"
  >
    <v-alert
      color="lime lighten-5"
    >
      {{ $t('page.table.intro') }}
    </v-alert>

    <template>
      <v-data-table
        :headers="columns"
        :items="getTickets"
        hide-default-footer
      >
        <template v-slot:top>
          <v-container>
            <v-row>
              <v-col cols="4">
                <v-select
                  :items="getDirections"
                  :item-text="(item) => item['value']"
                  label="Направление"
                  clearable
                  dense
                  v-model="filterByDirection"
                ></v-select>
              </v-col>
              <v-col cols="4">
                <v-select
                  :items="getDoctors"
                  :item-text="(item) => item['fullname']"
                  label="Врач"
                  clearable
                  dense
                  v-model="filterByDoctor"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.fullname }}</td>
            <td>{{ item.tel | mask('tel') }}</td>
            <td>{{ item.appeal }}</td>
            <td>{{ item.direction }}</td>
            <td>{{ item.doctor }}</td>
          </tr>
        </template>
      </v-data-table>
    </template>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      filterByDoctor: "",
      filterByDirection: ""
    }
  },
  watch: {
    filterByDoctor(val){
      this.$store.dispatch('filteredTickets', {
        value: val,
        type: 'doctor'
      })
    }
  },
  methods: mapActions(['filteredTickets']),
  computed: {
    ...mapGetters(['getDirections', 'getDoctors', 'getTickets']),
    columns() {
      return [
        {
          text: "ФИО",
          value: 'fullname'
        },
        {
          text: "Телефон",
          value: 'tel'
        },
        {
          text: "Обращение",
          value: 'appeal'
        },
        {
          text: "Направление",
          value: 'direction'
        },
        {
          text: "Врач",
          value: 'doctor'
        }
      ]
    }
  }
}
</script>
