import {superValidate }from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters'
import { userSchema } from './schema.js';

export const load = async () => {
    const form = await superValidate({name: 'some name', options: [{color: 'option-1-color', value: 'option-1'}]}, zod(userSchema));
  
    return { form };
  };