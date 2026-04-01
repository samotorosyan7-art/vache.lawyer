'use client';
import Nav from '@/components/Nav';
import Protocol from '@/components/Protocol';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="subpage">
      <Nav />
      <div className="protocol-subpage">
        <Protocol />
      </div>
      <Footer />
      <style jsx>{`
        .protocol-subpage {
          padding-top: 100px;
        }
      `}</style>
    </main>
  );
}
