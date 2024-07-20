import { TypedSupabaseClient } from "../utils/supabase";

export function getTodoById(
  client: TypedSupabaseClient, 
  todoId: number
) {
  return client
    ?.from('todo')
    .select(`
      id,
      text
    `)
    .eq('id', todoId)
    .throwOnError()
    .single();
}