import { z } from 'zod';
import { GenderEnum } from '../../Common/index.js';

export const signUpValidator = {
  body: z.strictObject({
    firstName:z.string().min(3).max(20),
    lastName:z.string().min(3).max(20),
    email:z.email(),
    password:z.string(),
    gender:z.enum(GenderEnum),
    phoneNumber:z.string().min(11).max(11)
  }),
};