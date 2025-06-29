import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rodape from "./components/Rodape";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Navbar />
      <main className="flex-1 pt-20 bg-green-900">
        <Hero />
      </main>
      <Rodape />
    </div>
  );
}
