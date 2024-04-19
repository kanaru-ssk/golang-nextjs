import Link from "next/link";

export function Header() {
  return (
    <header className="sticky flex h-16 items-center justify-between px-5 shadow-md">
      <Link href="/" className="text-xl font-bold text-cyan-700">
        TODO APP
      </Link>
    </header>
  );
}
