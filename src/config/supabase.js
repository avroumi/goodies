import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PRIVATE_KEY,
);

console.log("supabase initialized");
