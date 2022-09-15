import Link from 'next/link'
import Footer from "../components/footer";
import LoginComponent from "../components/logincomponent";
import Navigation from "../components/navigation";

export default function LandingPage(props) {
  return (
    <>
      <Navigation />
       <Link href="/home"> Home </Link>
      <LoginComponent />
      <Footer />
    </>
  );
}
