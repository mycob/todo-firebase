import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36">
      <h1>ToDo App with NextJS 14 & Firebase🤗</h1>
      <Link href='/todo-app'>
        <button
          className="text-blue-600 bg-white rounded-md px-2 py1 mt-6"
        >Get Started</button>
      </Link>
    </main>
  );
}
