#### Start database
```
mongosh
```
<img width="1087" alt="Screenshot 2024-02-06 at 10 22 38 AM" src="https://github.com/ngonzalez/graphql-api/assets/26479/629c39cd-1e79-49a7-8b74-1cbabaf2205a">


#### Install dependencies
```
npm install
```

#### Start Application
```
npm start
```
<img width="924" alt="Screenshot 2024-02-06 at 10 22 45 AM" src="https://github.com/ngonzalez/graphql-api/assets/26479/9b323834-bb0f-4e33-abd9-67e27072cc2a">

#### Query: Get Account
```graphql
query Account {
    account(account: { _id: "65c5f1ce24bcab468acf0683" }) {
        name
        email
        accountType
        createdAt
        _id
    }
}
```

#### Query: List Accounts
```graphql
  query Account {
      accounts {
          name
          email
          accountType
          createdAt
          _id
      }
  }
```

#### Mutation: Create Account
```graphql
mutation CreateAccount {
    createAccount(
        account: {
            name: "Nicolas GONZALEZ"
            email: "nicolasgonzalez180@gmail.com"
            accountType: "Client"
        }
    ) {
        _id
        name
        email
        accountType
        createdAt
    }
}
```
#### Mutation: Update Account
```graphql
mutation UpdateAccount {
    updateAccount(
        account: {
            _id: "65c5f1ce24bcab468acf0683"
            name: "Nicolas GONZALEZ"
            email: "nicolasgonzalez180@gmail.com"
            accountType: "client"
        }
    ) {
        _id
        name
        email
        accountType
        createdAt
    }
}
```

#### Mutation: Delete Account
```graphql
mutation DeleteAccount {
    deleteAccount(account: { _id: "65c5ec825e6f2d03b7829079" }) {
        success
    }
}
```
