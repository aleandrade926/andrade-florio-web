import { createClient } from '@supabase/supabase-js'

// Usando as chaves diretamente para garantir o funcionamento imediato do funil
const supabaseUrl = 'https://mhyqbbycayewxmmgrnvz.supabase.co'
const supabaseAnonKey = 'sb_publishable_uM5ATdh1uHrRURdvR-r7Kg_m8XMlq2N'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
