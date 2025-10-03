import { createBrowserClient } from "@supabase/ssr";

export const supabaseUrl = process.env.DB_DOMAIN!;
export const supabaseAnonKey = process.env.API_KEY!;

export const createClient = () => {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
};