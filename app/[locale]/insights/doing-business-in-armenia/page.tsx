'use client';
import { useTranslations } from 'next-intl';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';

export default function BusinessGuide() {
  const t = useTranslations('Guides.doing-business-in-armenia');

  return (
    <main className="subpage">
      <Nav />
      <div className="guide-container">
        <header className="guide-header reveal">
          <Link href="/insights" className="back-link">← Insights</Link>
          <h1 className="guide-title">{t('title')}</h1>
          <p className="guide-intro">{t('intro')}</p>
        </header>

        <section className="guide-content">
          {(t.raw('sections') as Array<{title: string, content: string}>).map((section, i) => (
            <div key={i} className="guide-section reveal">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-text">{section.content}</p>
            </div>
          ))}
        </section>

        <div className="guide-cta reveal">
          <h3>Ready to enter the Armenian market?</h3>
          <p>Request a custom entry strategy briefing.</p>
          <Link href="/contact" className="cta-btn shadow-btn">Get Started</Link>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .guide-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 180px 40px 100px;
        }
        .back-link {
          display: block;
          margin-bottom: 24px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--copper);
          text-decoration: none;
        }
        .guide-title {
          font-family: var(--font-playfair), serif;
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 32px;
          color: var(--bone);
        }
        .guide-intro {
          font-size: 1.4rem;
          font-family: var(--font-cormorant), serif;
          font-style: italic;
          color: rgba(245,240,232,0.8);
          margin-bottom: 80px;
          line-height: 1.5;
        }
        .guide-section {
          margin-bottom: 64px;
          padding-bottom: 64px;
          border-bottom: 1px solid var(--border);
        }
        .section-title {
          font-family: var(--font-playfair), serif;
          font-size: 1.8rem;
          margin-bottom: 24px;
          color: var(--bone);
        }
        .section-text {
          font-size: 17px;
          line-height: 1.8;
          color: rgba(245,240,232,0.6);
        }
        .guide-cta {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          padding: 60px;
          text-align: center;
          margin-top: 40px;
        }
        .guide-cta h3 {
          font-family: var(--font-playfair), serif;
          font-size: 2rem;
          margin-bottom: 12px;
        }
        .guide-cta p {
          color: rgba(245,240,232,0.6);
          margin-bottom: 32px;
        }
        .cta-btn {
          display: inline-block;
          background: var(--copper);
          color: var(--charcoal);
          padding: 16px 40px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .guide-title { font-size: 2.5rem; }
          .guide-container { padding-top: 140px; }
        }
      `}</style>
    </main>
  );
}
