import Link from "next/link";
export default function Navigation(props) {
  return (
    <div className="flex justify-center bg-orange-200 flex-row gap-10 p-2 m-2">
      <Link href="/home">
        <span className="text-cyan-800">Home! Try our new offering! </span>
      </Link>
      <h1> More </h1>
    </div>
  );
}
