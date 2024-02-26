import {superValidate }from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters'
import { userSchema } from './schema.js';

export const load = async () => {
    const form = await superValidate({age: 34}, zod(userSchema));
  
    return { form };
  };