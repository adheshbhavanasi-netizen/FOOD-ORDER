import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ftkltybnsahgdvleffit.supabase.co";
const supabaseKey = "sb_publishable_jo0J2_6Z3JNw5OvSVo0xPQ_A-hhm4Pa";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);