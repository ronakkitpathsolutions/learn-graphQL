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
  query GetUser($id: ID!) {
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

export const GET_PARTICULAR_POST = gql`
  query GetPost($id: ID!) {
      post(id: $id) {
        id
        title
        body
        comments {
          data {
            body
            email
            id
            name
          }
        }
      }
  }`;

export const GET_ALL_POSTS = gql`
  query getPostData($field: String, $page: Int, $pageSize: Int, $search: String) {
    posts(options:{
      sort: {field: $field},
      paginate: {page: $page, limit: $pageSize}
      search: { q: $search }
    }) {
      data {
        id
        title
        body
        comments {
          data {
            id
            body
            email
            name
          }
        }
      }
    }
  }`; 