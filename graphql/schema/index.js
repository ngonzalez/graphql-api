const { buildSchema } = require('graphql')

module.exports = buildSchema(`

  type Account {
    _id: ID!
    name: String!
    email: String!
    interests: String!
    accountType: String!
    createdAt: String!
  }

  input AccountInput {
    name: String!
    email: String!
    interests: String!
    accountType: String!
  }
  
  type Query {
    accounts:[Account!]
  }

  type Mutation {
    createAccount(account:AccountInput): Account
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)
