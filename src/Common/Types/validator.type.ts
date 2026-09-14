import {z} from 'zod'
import type { signUpValidator } from '../../Validators/index.js'

export type signupBodyType = z.infer<typeof signUpValidator.body>