import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const HttpLink = createHttpLink({
  uri: 'oxidshop.com/graphql',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: HttpLink,
  cache,
});

Vue.use(VueApollo);

export default new VueApollo({
  defaultClient: client,
});
