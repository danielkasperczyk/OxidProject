<template>
  <v-card :max-width="250">
    <v-img :src="product.imageGallery.images[0].image" />
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text class="pb-0">{{ getProductPrice }}</v-card-text>
    <div class="d-flex justify-center pa-3">
      <v-btn class="primary" block @click="productDetails">BUY</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    getProductPrice(): string {
      return `${this.product.price.price} ${this.product.price.currency.sign}`;
    },
  },
  methods: {
    productDetails() {
      const { id } = this.product;
      this.$router.push({ name: 'productDetails', params: { id } });
    },
  },
});
</script>

<style></style>
