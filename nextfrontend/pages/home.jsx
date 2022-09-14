import Image from "next/image";
import Layout from "../layouts/layout";

export default function LandingPage() {

  return (
    <Layout>

    <section className="flex sm:flex-row flex-wrap flex-shrink-0 items-center justify-center pt-5 mx-5">
      <div className="flex w-15 p-2 m-2 bg-amber-900">Hey</div>
      <img src="/assets/creatorHeaderImg.png" className="height-10 width-10" />
      <div className="flex w-35 p-2 m-2 bg-cyan-900">Hey there</div>
      <div className="flex w-25 p-2 m-2 bg-blue-900">Hey how are you</div>
      <div className="flex w-15 p-2 m-2 bg-green-900">Hey</div>
    </section>
    </Layout>
  );
}
