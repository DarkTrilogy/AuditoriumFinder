import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lxnzwzykdikqduyoxzmw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bnp3enlrZGlrcWR1eW94em13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0Nzc1MDEsImV4cCI6MjAyMzA1MzUwMX0.gXzYy0U45vET1drisYt5ugKcpq42u1p9ooLg-0ikG6o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
