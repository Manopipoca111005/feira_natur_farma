import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import Hero from '../components/Hero';
import SobreNos from '../components/SobreNos';

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen bg-green-900">
      <Navbar />
      <main className="flex-1 pt-20">
        <SobreNos />
      </main>
      <Rodape />
    </div>
  );
}
