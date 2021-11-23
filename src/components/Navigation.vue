<template>
  <v-container
    class="pa-0 d-flex"
  >
    <v-btn
      v-for="(route, i) in routes"
      :key="i"
      :to="route.path"
      class='mr-2'
      color='primary'
    >
      <span>{{ $t(route.title) }}</span>
    </v-btn>

    <v-menu>
      <template v-slot:activator="{on}">
        <v-btn
          v-on="on"
          color="primary"
          outlined
          class='ml-auto'
        >
          <v-icon size=16>mdi-web</v-icon>
          <span>{{ $i18n.locale }}</span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(lang, i) in langs"
          :key="i"
          :value="lang"
          @click="changeLang(lang)"
        >
          <v-list-item-title>{{ lang }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
      langs: ['ru', 'en']
    }
  },
  created() {
    this.$router.options.routes.forEach(route => {
      this.routes.push({
        name: route.name,
        title: route.meta.title,
        path: route.path
      })
    })
  },
  methods: {
    changeLang(lang){
      this.$i18n.locale = lang
    }
  }
}
</script>