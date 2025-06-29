import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import Hero from '../components/Hero';
import Produtos from '../components/Produtos';

export default function ProdutosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-green-900">
      <Navbar />
      <main className="flex-1 pt-20">
        <Produtos />
      </main>
      <Rodape />
    </div>
  );
}
