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
      
      const result = await addEmail(email);
      
      if (!result.success) {
        return {
          success: false,
          error: 'Failed to add email to waitlist'
        };
      }

      return {
        success: true,
        id: result.id
      };
    } catch (error) {
      console.error("Server error:", error);
      return {
        success: false,
        error: 'Something went wrong. Please try again.'
      };
    }
  }
};