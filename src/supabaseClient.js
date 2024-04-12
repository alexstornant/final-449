import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://blhosnwfpikesyujczgv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsaG9zbndmcGlrZXN5dWpjemd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NjQ2NjgsImV4cCI6MjAyODQ0MDY2OH0.xsJ49-vGFqneXMAoPeDULyehrg252iMO6aAawisBQuY"
export const supabase = createClient(supabaseUrl, supabaseKey)