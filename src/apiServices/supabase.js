import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://geuzjkdzkblmryfdmtpi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdldXpqa2R6a2JsbXJ5ZmRtdHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1NTY1ODcsImV4cCI6MjAwNjEzMjU4N30.OS_2s3t9DyR_bJQa-Xd8dEAKx96Ar98zx-zvUF8i9_Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
