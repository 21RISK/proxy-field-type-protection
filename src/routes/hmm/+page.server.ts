import {superValidate }from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters'
import { userSchema } from './schema.js';
import type { Actions } from './$types.js';
import { fail } from '@sveltejs/kit';

export const load = async () => {
    const form = await superValidate({enabled: true}, zod(userSchema));
  
    return { form };
  };


  export const actions: Actions = {
      testStrict: async ({request}) => {
  
        const form = await superValidate(request, zod(userSchema), {
            strict: true,
        });

        if (!form.valid) {
          console.log('Not valid!')
          return fail(400, { form });
        }
        console.log('Valid!')
      }
  };