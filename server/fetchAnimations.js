const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');

const client = new ApolloClient({
  uri: 'https://api.lottiefiles.com/graphql',
  cache: new InMemoryCache(),
});

const GET_FEATURED_ANIMATIONS = gql`
  query {
    featuredPublicAnimations {
      id
      name
      lottie_url
    }
  }
`;

client
  .query({ query: GET_FEATURED_ANIMATIONS })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
