// +page.server.js
import { addEmail } from '$lib/firebase';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @satisfies {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const email = data.get('email');
      
      await addEmail(email);
      
      return {
        success: true,
        message: 'Thank you for joining the waitlist!'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Something went wrong. Please try again.'
      };
    }
  }
};