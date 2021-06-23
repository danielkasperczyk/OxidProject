import { gql } from 'graphql-tag';

const GET_PRODUCTS = gql`
  query {
    products {
      id
      title
      price {
        price
        currency {
          sign
        }
      }
      imageGallery {
        images {
          image
        }
      }
    }
  }
`;

const GET_PRODUCT = gql`
  query product($productId: ID!) {
    product(productId: $productId) {
      id
      title
      price {
        price
        currency {
          sign
        }
      }
      imageGallery {
        images {
          image
        }
      }
      longDescription
    }
  }
`;

export { GET_PRODUCTS, GET_PRODUCT };
