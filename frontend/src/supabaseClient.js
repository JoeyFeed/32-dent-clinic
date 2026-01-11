
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxjietfglebtpvhcuhej.supabase.co'
const supabaseKey = 'sb_publishable_ErPZZ_pk2407zmiMXWa4mA_-KnsPNNX' // Public/Anon key

export const supabase = createClient(supabaseUrl, supabaseKey)
