<template>
  <v-container class="fill-height d-flex flex-column">
    <div class="d-flex align-center justify-space-between">
      <v-btn text @click="clear">CLEAR</v-btn>
      <v-autocomplete
        :v-model="search"
        :items="getProductTitle"
        :search-input.sync="search"
        hide-no-data
        hide-selected
        item-value="Product"
        label="Find your product"
        return-object
      ></v-autocomplete>
    </div>
    <div>
      <div
        class="d-flex flex-wrap justify-center"
        v-if="!isLoading && products.length === 1"
      >
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
      <div class="d-flex flex-wrap justify-center" v-if="isLoading && search">
        <v-progress-circular color="primary" indeterminate />
      </div>
      <div
        class="d-flex justify-center align-center"
        v-if="products.length === 0 && !isLoading && search"
      >
        <p>This product dosen't exist</p>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { GET_PRODUCTS } from '@/utils/queries';

export default Vue.extend({
  name: 'Home',
  data: () => ({
    model: undefined,
    search: undefined,
    products: [],
  }),
  apollo: {
    products: {
      query: GET_PRODUCTS,
      variables() {
        return {
          productName: this.search,
        };
      },
      update: (data) => data.products,
      debounce: 750,
      skip() {
        return !this.search;
      },
    },
  },

  methods: {
    clear() {
      this.model = undefined;
      this.search = undefined;
      this.products = [];
    },
  },

  computed: {
    getProductTitle() {
      return this.products
        ? this.products.map((product: any) => product.title)
        : [];
    },
    isLoading() {
      return this.$apollo.queries.products.loading;
    },
  },
  watch: {
    search: {
      handler() {
        this.$apollo.queries.products.refetch();
      },
      immediate: true,
    },
  },

  components: {
    ProductCard: () => import('@/components/ProductCard.vue'),
  },
});
</script>
