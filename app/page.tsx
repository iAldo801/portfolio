import Home from "./components/home/Home";
import Footer from "./components/misc/Footer";
import Nav from "./components/misc/Nav";

export default function Main() {
  return (
    <main className="bg-dot-white/[0.2] min-h-svh">
      <Nav />
      <Home />
      <div className="py-8">
        <Footer />
      </div>
    </main>
  );
}