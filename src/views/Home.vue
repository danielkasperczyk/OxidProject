<template>
  <v-container>
    <!-- {{ getProducts }} -->
    <ApolloQuery :query="productQuery">
      <template slot-scope="{ result: { loading, error, data } }">
        <span v-if="error">Error!</span>
        <span v-else-if="loading">Loading...</span>

        <div v-if="data" class="d-flex flex-wrap justify-center ">
          <ProductCard
            :key="product.title"
            v-for="product in data.products"
            :product="product"
            class="ma-2"
          />
        </div>
      </template>
    </ApolloQuery>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { gql } from 'graphql-tag';
import { GET_PRODUCTS } from '@/utils/queries';

// const GET_PRODUCTS = gql`
//   query {
//     products {
//       title
//     }
//   }
// `;

export default Vue.extend({
  name: 'Home',

  data() {
    return {
      productQuery: GET_PRODUCTS,
    };
  },

  components: {
    ProductCard: () => import('@/components/ProductCard.vue'),
  },
});
</script>
