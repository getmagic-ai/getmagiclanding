import Image from "next/image";

export default function LandingPage() {
  return (
    <section className="flex-1 flex-row justify-center gap-2 m-2 p-2">
      <div className="flex p-2 m-2 bg-amber-900">Hey</div>
      <div className="flex p-2 m-2 bg-cyan-900">Hey there</div>
      <div className="flex p-2 m-2 bg-blue-900">Hey how are you</div>
      <div className="flex p-2 m-2 bg-green-900">Hey</div>
    </section>
  );
}
