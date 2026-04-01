'use client';
import IntakeForm from '@/components/IntakeForm';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="subpage">
      <Nav />
      <div style={{ paddingTop: '120px' }}>
        <IntakeForm />
        
        <section className="contact-map-section reveal">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.886326848074!2d44.50426547659556!3d40.19159987147743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd190df77279%3A0xc669f987222f7902!2s41%20Marshal%20Baghramyan%20Ave%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2spf!4v1711972000000!5m2!1sen!2spf"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
      
      <style jsx>{`
        .contact-map-section {
          padding: 0 72px 120px;
        }
        .map-container {
          border: 1px solid var(--border);
          overflow: hidden;
          background: var(--charcoal);
          filter: grayscale(1) invert(0.9) contrast(1.2); /* Dark Map Trick */
        }
        @media (max-width: 768px) {
          .contact-map-section { padding: 0 24px 80px; }
        }
      `}</style>
    </main>
  );
}
