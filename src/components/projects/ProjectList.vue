<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

import { store } from "../../data/store";

export default {
  data() {
    return {
      title: "Project List",
      projects: [],
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fetchProjects(uri = store.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container mt-5">
    <h1>{{ title }}</h1>
    <div class="row row-cols-3 g-3 mt-3">
      <ProjectCard :projects="projects" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
