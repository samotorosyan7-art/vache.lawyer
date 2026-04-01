'use client';
import { useTranslations } from 'next-intl';

export default function Protocol() {
  const t = useTranslations('Protocol');

  return (
    <section id="protocol" className="protocol-section">
      <div className="section-header reveal">
        <div>
          <p className="section-label">{t('label')}</p>
          <h2 className="section-title">{t('title')}</h2>
        </div>
      </div>
      
      <div className="protocol-intro reveal">
        <p className="protocol-sub">{t('sub')}</p>
      </div>

      <div className="protocol-grid">
        <div className="protocol-phase reveal">
          <div className="phase-num">01</div>
          <h3 className="phase-title">{t('phase1.title')}</h3>
          <p className="phase-desc">{t('phase1.desc')}</p>
        </div>
        
        <div className="protocol-phase reveal reveal-delay-1">
          <div className="phase-num">02</div>
          <h3 className="phase-title">{t('phase2.title')}</h3>
          <p className="phase-desc">{t('phase2.desc')}</p>
        </div>
        
        <div className="protocol-phase reveal reveal-delay-2">
          <div className="phase-num">03</div>
          <h3 className="phase-title">{t('phase3.title')}</h3>
          <p className="phase-desc">{t('phase3.desc')}</p>
        </div>
      </div>

      <style jsx>{`
        .protocol-section {
          padding: 120px 72px;
          border-top: 1px solid var(--border);
        }
        .protocol-intro {
          margin-bottom: 80px;
          max-width: 600px;
        }
        .protocol-sub {
          font-family: var(--font-cormorant), serif;
          font-size: 1.8rem;
          font-style: italic;
          line-height: 1.4;
          color: var(--bone);
          opacity: 0.8;
        }
        .protocol-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        .protocol-phase {
          position: relative;
          padding-top: 40px;
          border-top: 1px solid var(--border);
        }
        .phase-num {
          font-family: var(--font-cormorant), serif;
          font-size: 3rem;
          font-weight: 300;
          color: var(--copper);
          opacity: 0.3;
          margin-bottom: 20px;
        }
        .phase-title {
          font-family: var(--font-playfair), serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--bone);
        }
        .phase-desc {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(245,240,232,0.6);
        }
        @media (max-width: 1024px) {
          .protocol-grid { grid-template-columns: 1fr; gap: 60px; }
          .protocol-section { padding: 80px 40px; }
        }
      `}</style>
    </section>
  );
}
