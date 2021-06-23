<template>
  <ApolloQuery :query="query" :variables="{ productId }">
    <template v-slot="{ result: { loading, error, data } }">
      <div v-if="loading" class="loading apollo">Loading...</div>

      <div v-else-if="error" class="error apollo">An error occurred</div>

      <div v-else-if="data" class="result apollo">{{ data.title }}</div>

      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script lang="ts">
import Vue from 'vue';
import { GET_PRODUCT, GET_PRODUCTS } from '@/utils/queries';

export default Vue.extend({
  name: 'ProductDetails',
  data() {
    return {
      query: GET_PRODUCT,
    };
  },
  computed: {
    productId() {
      return this.$route.params.id;
    },
  },
});
</script>

<style></style>
