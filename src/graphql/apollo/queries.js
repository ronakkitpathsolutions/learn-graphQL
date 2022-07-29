import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetUsers {
    users {
        data {
          id
          name
          username
          website
          email
          address {
            city
            street
            zipcode
            suite
            geo {
              lat
              lng
            }
          }
          company {
            name
            bs
            catchPhrase
          }
        }
      }
  }
`;