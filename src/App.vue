<template>
  <v-app>
    <!-- <v-app-bar app></v-app-bar> -->
    <v-main>
      <v-container>
        <v-row>
          <v-col
            lg="10"
            class="mx-auto mt-5"
          >
            <Navigation />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            lg="10"
            class="mx-auto mt-5"
          >
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation"

export default {
  components: {
    Navigation
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = this.$t(to.meta.title);
      }
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;900&display=swap');
</style>