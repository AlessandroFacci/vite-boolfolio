<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      title: "Project List",
    };
  },

  components: {
    ProjectCard,
  },
};
</script>

<template>
  <div class="container mt-5">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-3">
        <ProjectCard />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
