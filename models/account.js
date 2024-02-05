const mongoose = require('mongoose')

const Schema = mongoose.Schema

const accountSchema = new Schema({

    name: {
      type: String,
      required: true,
      validate: {
        validator: async function(name) {
          const account = await this.constructor.findOne({ name });
          if (account) {
            if (this.id === account.id) {
              return true;
            }
            return false;
          }
          return true;
        },
        message: props => 'The specified name is already in use.'
      },
      required: [true, 'name required']
    },

    accountType: {
      type: String,
      required: true,
      enum: {
        values: ['Client', 'Customer'],
        message: '{VALUE} is not supported'
      }
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: async function(email) {
          const account = await this.constructor.findOne({ email });
          if (account) {
            if (this.id === account.id) {
              return true;
            }
            return false;
          }
          return true;
        },
        message: props => 'The specified email address is already in use.'
      },
      required: [true, 'email required']
    },

    interests: {
      type: String,
      required: false
    },

}, { timestamps: true })

module.exports = mongoose.model('Account', accountSchema)
