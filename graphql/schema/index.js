const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type Account {
    _id: ID!
    name: String!
    email: String!
    accountType: String!
    createdAt: String!
  }

  type APIResponse {
    success: Boolean
  }

  type Query {
    account(account:AccountIdInput):Account
    accounts:[Account!]
  }

  input AccountIdInput {
    _id: ID!
  }

  input CreateAccountInput {
    name: String!
    email: String!
    accountType: String!
  }

  input UpdateAccountInput {
    _id: ID!
    name: String!
    email: String!
    accountType: String!
  }

  type Mutation {
    createAccount(account:CreateAccountInput):Account
    updateAccount(account:UpdateAccountInput):Account
    deleteAccount(account:AccountIdInput):APIResponse
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)
