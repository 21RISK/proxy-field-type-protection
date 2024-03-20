import {superValidate }from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters'
import { userSchema } from './schema.js';
import { fail } from '@sveltejs/kit';

export const load = async () => {
    const form = await superValidate({name: 'some name'}, zod(userSchema));
  
    return { form };
  };

export const actions = {
  default: async ({request}) => {

    const form = await superValidate(request, zod(userSchema), { strict: true });
    if (!form.valid) {
        return fail(400, { form });
    }
    throw new Error('test-error');
  }
}