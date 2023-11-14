<script>
import axios from "axios";
import { store } from "../../data/store";

import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: { ProjectCard },

  created() {
    console.log(
      store.api.baseUrl + "projects/type/" + this.$route.params.type_id
    );
    axios
      .get(store.api.baseUrl + "projects/type/" + this.$route.params.type_id)
      .then((response) => {
        this.projects = response.data;
      });
  },
};
</script>

<template>
  <div class="row row-cols-3 g-3 mt-3">
    <ProjectCard
      v-for="project in projects"
      :project="project"
      :is-detail="false"
    />
  </div>
</template>

<style lang="scss" scoped></style>
