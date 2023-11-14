<script>
import ProjectTypeList from "../components/projects/ProjectTypeList.vue";

export default {
  data() {
    return {
      title: "Projects by type",
    };
  },

  components: { ProjectTypeList },
};
</script>

<template>
  <div class="container">
    <h1 class="mt-5">{{ title }}</h1>
    <ProjectTypeList />
  </div>
</template>

<style lang="scss" scoped></style>
