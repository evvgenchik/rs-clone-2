import { Schema, model } from "mongoose";

const Post = new Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  // likes: [
  //   {
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users',
  //       required: true
  //     },
  //     createdDate: {
  //       type: Date,
  //       default: Date.now
  //     }
  //   }
  // ],
  // comments: [
  //   {
  //     body: {
  //       type: String,
  //       required: true
  //     },
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users',
  //       required: true
  //     },
  //     createdDate: {
  //       type: Date,
  //       default: Date.now
  //     }
  //   }
  // ],
  createdDate: {
    type: Date,
    default: Date.now
  }
})

export default model('Post', Post);
