import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Protocol from '@/components/Protocol';

export default function ProtocolPage() {
  return (
    <main className="subpage">
      <Nav />
      <div style={{ paddingTop: '120px' }}>
        <Protocol />
      </div>
      <Footer />
    </main>
  );
}
