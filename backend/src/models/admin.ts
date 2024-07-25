import Joi from 'joi';
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });
const { SECRET_KEY } = process.env;

const adminSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

adminSchema.methods.createToken = function () {
  const payload = {
    id: this._id,
  };
  return jwt.sign(payload, SECRET_KEY!, { expiresIn: '7d' });
};

adminSchema.methods.setPassword = function (password: string) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

adminSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compareSync(password, this.password);
};

const joiAdminSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'org', 'uk'] },
    })
    .min(1)
    .required(),
  password: Joi.string(),
});

const Admin = model('admin', adminSchema);

export { joiAdminSchema, Admin };
