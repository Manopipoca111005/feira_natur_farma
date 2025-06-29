import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import Hero from '../components/Hero';
import Equipa from '../components/Equipa';

export default function EquipaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-green-900">
      <Navbar />
      <main className="flex-1 pt-20">
        <Equipa />
      </main>
      <Rodape />
    </div>
  );
}
