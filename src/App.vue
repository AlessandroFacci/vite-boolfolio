<script>
import Navbar from "./components/ui/Navbar.vue";

export default {
  data() {
    return {};
  },

  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
