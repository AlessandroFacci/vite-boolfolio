<script>
export default {
  data() {
    return {};
  },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <div class="col" v-for="project in projects">
    <div class="card">
      <div class="card-header">
        <h5>{{ project.title }}</h5>
      </div>
      <div class="card-body">
        <ul>
          <li><strong>Id:</strong> {{ project.id }}</li>
          <li><strong>Type Id:</strong> {{ project.type_id }}</li>
          <li><strong>Slug:</strong> {{ project.slug }}</li>
          <li><strong>Repo:</strong> {{ project.repo }}</li>
          <li><strong>Created at:</strong> {{ project.created_at }}</li>
          <li><strong>Updated at:</strong> {{ project.updated_at }}</li>
          <li><strong>Description:</strong> {{ project.description }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 300px;
}
ul {
  list-style-type: none;
  li {
    padding: 0;
  }
}
</style>
