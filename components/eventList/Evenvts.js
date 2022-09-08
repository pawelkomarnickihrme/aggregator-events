import { ApolloClient, gql, useQuery,InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  });

  const GET_EVENETS = gql`
    query GerEvents{
        events {
            title
            content {
              document
            }
            startDate
            localization
          }
    }
`

const Events = () =>{
    const { loading, error, data } = useQuery(GET_EVENETS);
    console.log(data,error)
    return(<div></div>)
}

export default Events