import { TodoCard } from "./_components/todo-card";

export default function TodosPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>TODOS:</h1>
      <TodoCard id={id} />
    </main>
  );
}
