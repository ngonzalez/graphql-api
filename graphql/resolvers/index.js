const Account = require('../../models/account')

module.exports = {

  accounts: async () => {
    try {
       const accountsFetched = await Account.find()
        return accountsFetched.map(account => {
            return {
                ...account._doc,
                _id: account.id,
                name: account.name,
                email: account.email,
                accountType: account.accountType,
                interests: account.interests,
                createdAt: new Date(account._doc.createdAt).toISOString() }
        })
    }
    catch (error) {
        throw error
    }
  },

  createAccount: async args => {
    try {
      const { name, accountType, email, interests } = args.account
      const account = new Account({
          name,
          email,
          accountType,
          interests,
      })
      const newAccount = await account.save()
      return { ...newAccount._doc, _id: newAccount.id }
    }
    catch (error) {
        throw error
    }
  }
}