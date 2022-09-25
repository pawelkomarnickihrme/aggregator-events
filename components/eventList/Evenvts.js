import { ApolloClient, gql, useQuery, InMemoryCache } from '@apollo/client';
import { useEffect, useState } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
});

export const GET_EVENETS = gql`
  query GerEvents {
    events {
      title
      localization
      content {
        document
      }
      startDate
      drinks
      photo {
        url
      }
      id
      side
    }
  }
`;

const useEventList = () => {
  return useQuery(GET_EVENETS);
};

export default useEventList;
