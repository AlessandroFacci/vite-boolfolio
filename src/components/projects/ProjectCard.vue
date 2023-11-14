<script>
export default {
  data() {
    return {};
  },

  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
  <div class="col">
    <div class="card">
      <div class="card-header">
        <h5>{{ project.title }}</h5>
      </div>
      <div class="card-body">
        <ul>
          <li><strong>Id:</strong> {{ project.id }}</li>
          <li>
            <strong>Type Id:</strong>
            <router-link
              :to="{
                name: 'project-type',
                params: {
                  type_id: project.type_id,
                },
              }"
              >{{ project.type_id }}</router-link
            >
          </li>
          <li><strong>Slug:</strong> {{ project.slug }}</li>
          <li><strong>Repo:</strong> {{ project.repo }}</li>
          <li><strong>Created at:</strong> {{ project.created_at }}</li>
          <li><strong>Updated at:</strong> {{ project.updated_at }}</li>
          <li><strong>Description:</strong> {{ project.description }}</li>
        </ul>
      </div>
      <div class="card-footer" v-if="!isDetail">
        <router-link
          class="btn btn-primary"
          :to="{ name: 'project-detail', params: { id: project.id } }"
          >Show</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 400px;
}
ul {
  list-style-type: none;
  li {
    padding: 0;
  }
}
</style>
