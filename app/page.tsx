import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Links to pages</h1>
      <ul>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
}
