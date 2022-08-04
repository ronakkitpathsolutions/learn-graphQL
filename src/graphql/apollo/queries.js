import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetUsers($search: String) {
    users(options: {search: {q: $search}}) {
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
          phone
        }
      }
  }`;

export const GET_PARTICULAR_USER = gql`
  query GetUsers($id: ID!) {
    user(id: $id) {
      id
      email
      name
      phone
      website
      username
      company {
        name
      }
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
    }
  }`;