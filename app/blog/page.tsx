import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import BlogEventos from '../components/BlogEventos';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-green-900">
      <Navbar />
      <main className="flex-1 pt-20 bg-green-900">
        <BlogEventos />
      </main>
      <Rodape />
    </div>
  );
}
