import { getSession } from "@auth/sveltekit";

export const load = async (event) => {
  return {
    session: await getSession(event),
  };
};
