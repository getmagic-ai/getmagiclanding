import Image from "next/image";

export default function LandingPage() {
    const colCount = 3;
  const classStr=`columns-${colCount} w-auto  justify-center gap-2 m-2 mx-14 p-2`
  
  return (
    <section className="flex flex-row items-center justify-center pt-5 mx-5">
      <div className="flex w-15 p-2 m-2 bg-amber-900">Hey</div>
      <div className="flex w-35 p-2 m-2 bg-cyan-900">Hey there</div>
      <div className="flex w-25 p-2 m-2 bg-blue-900">Hey how are you</div>
      <div className="flex w-15 p-2 m-2 bg-green-900">Hey</div>
    </section>
  );
}
