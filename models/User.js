const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function(v) {
          return /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
      },
      required: [true, 'User email required']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

UserSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.reduce(
    (total, thought) => total + thought.reactions.length + 1,
    0
  );
});

// create the Pizza model using the PizzaSchema
const User = model("User", UserSchema);

// export the Pizza model
module.exports = User;
