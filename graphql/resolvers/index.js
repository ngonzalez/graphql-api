const Account = require('../../models/account')

module.exports = {
  account: async args => {
    try {
      const { accountId } = args.account
      return await Account.findById(accountId);
    }
    catch (error) {
      throw error
    }
  },

  accounts: async () => {
    try {
       const accountsFetched = await Account.find()
                                            .sort({ createdAt: -1 })
                                            .limit(100)
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
  },

  deleteAccount: async args => {
    try {
      const { accountId } = args.account
      const success = (
        await Account.deleteOne(
          { _id: accountId }
        )
      ).deletedCount;
      return success;
    }
    catch (error) {
      throw error
    }
  },

  updateAccount: async args => {
    try {
      const { accountId, name, accountType, email, interests } = args.account
      const success = (
        await Account.updateOne(
          { _id: accountId },
          {
            name: name,
            email: email
          }
        )
      ).modifiedCount; // returns an object similarly to the wasDeleted
      return success; // returns 0 if an ID can't be found
    }
    catch (error) {
      throw error
    }
  },
  
}
