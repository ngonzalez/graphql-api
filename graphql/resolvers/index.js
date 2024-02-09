const Account = require('../../models/account')

module.exports = {
  account: async args => {
    try {
      return await Account.findById(args.account['_id']);
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
      const { name, email, accountType, interests } = args.account
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

  updateAccount: async args => {
    try {
      const { _id, name, email, accountType, interests } = args.account
      let account = await Account.findById(_id);
      await Account.updateOne(
        { _id: _id },
        {
          name: name,
          email: email,
          accountType: accountType,
          interests: interests,
        }, function(err, res) {
          return {
            success: true
          };
        }
      )
    }
    catch (error) {
      throw error
    }
  },

  deleteAccount: async args => {
    try {
      await Account.deleteOne(
        { _id: args.account['_id'] }
      )
      return {
        success: true
      };
    }
    catch (error) {
      throw error
    }
  },

}
