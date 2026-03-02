import React, { useEffect, useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for ?ref=nfc
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('ref') === 'nfc') {
      setShowModal(true);
    }
  }, []);

  const handleDownloadVCard = () => {
    // Trigger download of the placeholder vCard
    const link = document.createElement('a');
    link.href = '/dennis_ferraresi.vcf';
    link.download = 'dennis_ferraresi.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <div className="bg-background-light dark:bg-[#3a1c1c] text-slate-900 dark:text-slate-100 font-display transition-colors duration-200 min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Liquid Background Blobs (Vibrant Red Theme) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-500/20 dark:bg-red-500/40 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] bg-red-600/20 dark:bg-red-600/50 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-red-700/20 dark:bg-red-700/60 rounded-full blur-[120px] animate-[pulse_12s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Pill Navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-white/80 dark:bg-black/40 backdrop-blur-[30px] shadow-lg border border-white/20 dark:border-white/50 rounded-full px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between w-full max-w-3xl transition-all duration-300 relative">

          {/* Logo / Name */}
          <div className="flex items-center gap-2 shrink-0 z-10">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white hidden sm:block whitespace-nowrap">Agente di commercio</h1>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:hidden whitespace-nowrap">AC</h1>
          </div>

          {/* Navigation Links */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-6 z-10">
            <a className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary dark:text-white dark:hover:text-white transition-colors drop-shadow-sm whitespace-nowrap" href="#chi-sono">Chi Sono</a>
            <a className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary dark:text-white dark:hover:text-white transition-colors drop-shadow-sm whitespace-nowrap" href="#cataloghi">Cataloghi</a>
          </nav>

          {/* CTA Button */}
          <div className="shrink-0 z-10">
            <a className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white transition-all bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#contatti">
              Contattami
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-10 w-full">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 md:pt-36 md:pb-20 space-y-12 md:space-y-16">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in">
            {/* Profile Image */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white dark:ring-white/80 shadow-2xl shadow-black/50">
                <img alt="Dennis Ferraresi Profile" className="w-full h-full object-cover" src="/portrait.webp" />
              </div>
              <div className="absolute bottom-1 right-1 md:bottom-3 md:right-3 bg-primary text-white p-1.5 rounded-full border-2 border-white dark:border-background-dark flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[18px] md:text-[24px]">verified</span>
              </div>
            </div>
            {/* Hero Text */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-bold mb-4 uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Disponibile
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                Ferraresi Dennis <br />
                <span className="text-primary">New Catering - Marr</span>
              </h2>


            </div>
          </section>

          {/* Divider removed for floating glass aesthetic */}

          {/* About Me (Chi Sono) */}
          <section className="scroll-mt-24" id="chi-sono">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">info</span>
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Chi Sono</h2>
            </div>
            <div className="glass-panel p-6 md:p-8">
              <p className="glass-text leading-relaxed font-medium mb-6 text-base md:text-lg">
                Agente di Commercio New Catering & Marr. Specializzato in forniture food per Bar e locali della ristorazione veloce. Pasticceria, snack, finger food e panificati: ti offro i prodotti giusti e l'affidabilità di un grande gruppo per elevare la tua proposta food in ogni momento della giornata.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 dark:bg-black/20 shadow-inner backdrop-blur-md">
                  <div className="bg-white/80 dark:bg-white/10 p-2 rounded-xl shadow-sm text-primary">
                    <span className="material-symbols-outlined">bakery_dining</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Colazioni e Forno</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Un assortimento imbattibile di pasticceria, croissanterie e panificati per far partire a mille il tuo locale fin dalle prime ore del mattino.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 dark:bg-black/20 shadow-inner backdrop-blur-md">
                  <div className="bg-white/80 dark:bg-white/10 p-2 rounded-xl shadow-sm text-primary">
                    <span className="material-symbols-outlined">tapas</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Aperitivo e Fast Food</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Finger food, snack, salumi e formaggi di altissima qualità. Tutto quello che ti serve per riempire il bancone e spingere al massimo le consumazioni serali.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cataloghi Prodotti */}
          <section className="scroll-mt-24" id="cataloghi">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">menu_book</span>
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Cataloghi Prodotti</h2>
              </div>
            </div>

            {/* Scrollable Container */}
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar items-stretch">
              {/* Catalog Card 1 */}
              <div className="group glass-panel transition-all duration-300 min-w-[280px] w-[280px] sm:min-w-[350px] sm:w-[350px] shrink-0 snap-center flex flex-col h-auto">
                <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-700 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 z-10"></div>
                  <img alt="Catalogo Prodotti Pasticceria e Snack Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Catalogo Prodotti Pasticceria e Snack Cover" src="/cat-1.webp" />
                  <div className="absolute top-3 right-3 bg-red-900/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-white z-20 shadow-sm">
                    2026
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Catalogo Generale New Catering</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-2">Pasticceria fragrante e snack salati sempre freschi per colazioni e spuntini perfetti.</p>
                  <div className="mt-auto">
                    <a href="/catalogo-new-catering.pdf" download className="w-full flex items-center justify-center gap-2 px-4 py-2.5 glass-button text-slate-900 dark:text-white text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all mt-auto">
                      <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                      Scarica PDF
                    </a>
                  </div>
                </div>
              </div>

              <div className="group glass-panel transition-all duration-300 min-w-[280px] w-[280px] sm:min-w-[350px] sm:w-[350px] shrink-0 snap-center flex flex-col h-auto">
                <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-700 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 z-10"></div>
                  <img alt="Pub and Birrerie catalog cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Pub and Birrerie catalog cover" src="/cat-2.webp" />
                  <div className="absolute top-3 right-3 bg-red-900/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-white z-20 shadow-sm">
                    2026
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Pub & Birrerie</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-2">Hamburger, fritti e appetizer sfiziosi per esaltare i tuoi aperitivi e cene informali.</p>
                  <div className="mt-auto">
                    <a href="/pub-birrerie.pdf" download className="w-full flex items-center justify-center gap-2 px-4 py-2.5 glass-button text-slate-900 dark:text-white text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                      Scarica PDF
                    </a>
                  </div>
                </div>
              </div>

              <div className="group glass-panel transition-all duration-300 min-w-[280px] w-[280px] sm:min-w-[350px] sm:w-[350px] shrink-0 snap-center flex flex-col h-auto">
                <div className="aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center p-6 shrink-0">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 z-10"></div>
                  <img alt="Gelati catalog cover" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" data-alt="Gelati catalog cover" src="/cat-3-froneri.webp" />
                  <div className="absolute top-3 right-3 bg-red-900/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-white z-20 shadow-sm">
                    2026
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Gelati</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-2">Il gusto inconfondibile dei gelati <strong>Motta</strong> per il tuo locale.</p>
                  <div className="mt-auto">
                    <a href="/Motta.pdf" download className="w-full flex items-center justify-center gap-2 px-4 py-2.5 glass-button text-slate-900 dark:text-white text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                      Scarica PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contatti */}
          <section className="scroll-mt-24" id="contatti">
            <div className="glass-panel relative">
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 p-6 sm:p-8 md:p-12">
                <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Parliamo del tuo Business</h2>
                  <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg">
                    Contattami e fissiamo un appuntamento!
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto md:max-w-none">
                  {/* Phone */}
                  <a className="flex flex-col items-center justify-center p-6 bg-slate-900/10 dark:bg-black/20 hover:bg-slate-900/10 dark:hover:bg-white/10 border border-slate-900/10 dark:border-white/10 rounded-xl transition-all group" href="tel:+393791718242">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                      <span className="material-symbols-outlined text-white">call</span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white font-bold mb-1">Telefono</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm text-center">+39 379 171 8242</p>
                  </a>
                  {/* Email */}
                  <a className="flex flex-col items-center justify-center p-6 bg-slate-900/10 dark:bg-black/20 hover:bg-slate-900/10 dark:hover:bg-white/10 border border-slate-900/10 dark:border-white/10 rounded-xl transition-all group" href="mailto:ferraresi.dennis@icloud.com">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                      <span className="material-symbols-outlined text-white">mail</span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white font-bold mb-1">Email</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm text-center">ferraresi.dennis@icloud.com</p>
                  </a>
                  {/* vCard e QR Code */}
                  <div className="flex flex-col items-center justify-center p-6 bg-slate-900/10 dark:bg-black/20 border border-slate-900/10 dark:border-white/10 rounded-xl transition-all h-full">
                    <div className="w-24 h-24 bg-white p-2 rounded-xl mb-4 shadow-sm shrink-0 hover:scale-105 transition-transform">
                      <img src={'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://ferraresi-dennis.vercel.app/dennis_ferraresi.vcf&margin=0'} alt="QR Code vCard" className="w-full h-full object-contain" />
                    </div>
                    <button onClick={handleDownloadVCard} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-bold shadow-md hover:shadow-lg active:translate-y-[1px]">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      Aggiungi contatto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 relative z-10 w-full mb-4">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel py-6 px-4 flex justify-center w-full">
            <p className="text-slate-700 dark:text-slate-300 text-sm text-center font-medium">
              © 2026 Dennis Ferraresi - New Catering & Marr
            </p>
          </div>
        </div>
      </footer>

      {/* Download vCard Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-100/30 dark:bg-black/30 backdrop-blur-xl p-4">
          <div className="relative w-[95%] sm:w-full max-w-lg glass-panel shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-900/10 dark:border-white/10 px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-primary/20 text-red-600 dark:text-red-400 overflow-hidden">
                  <img src="/portrait.webp" alt="Dennis Ferraresi" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Dennis Ferraresi</h2>
              </div>
              <button
                className="group flex size-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-black/20 text-slate-700 transition-colors hover:bg-slate-200 dark:hover:bg-white/10 dark:text-slate-300"
                onClick={() => setShowModal(false)}
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            {/* Body */}
            <div className="flex flex-col items-center px-4 sm:px-8 py-6 sm:py-10 text-center">
              {/* Icon Visual */}
              <div className="mb-4 sm:mb-6 flex size-20 sm:size-24 items-center justify-center rounded-full bg-primary/20 text-red-600 dark:text-red-400 ring-8 ring-primary/10 overflow-hidden">
                <img src="/portrait.webp" alt="Dennis Ferraresi Profile" className="w-full h-full object-cover" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Scarica il vCard</h3>
              <p className="mb-8 max-w-xs text-base text-slate-700 dark:text-slate-300">
                Salva il contatto di Dennis Ferraresi direttamente nella tua rubrica per un accesso rapido.
              </p>
              {/* Actions */}
              <div className="flex w-full flex-col gap-3">
                <button
                  className="flex w-full cursor-pointer items-center justify-center gap-2 py-3.5 px-6 text-base font-bold dark:text-white text-red-600 transition-transform hover:scale-[1.02] active:scale-[0.98] glass-button bg-primary/80 dark:bg-primary/60"
                  onClick={handleDownloadVCard}
                >
                  <span className="material-symbols-outlined">person_add</span>
                  <span>Aggiungi Contatto</span>
                </button>
                <button
                  className="flex w-full cursor-pointer items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors glass-button bg-slate-900/10 dark:bg-white/5 border border-slate-900/10 dark:border-white/10"
                  onClick={() => setShowModal(false)}
                >
                  <span>Vai al Sito</span>
                </button>
              </div>
            </div>
            {/* Contact Info Preview preview added straight to footer*/}
            <div className="bg-slate-900/10 dark:bg-black/20 border-t border-slate-900/10 dark:border-white/10 px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-md">
              <div className="flex flex-col gap-2 text-sm text-slate-800 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>+39 379 171 8242</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>ferraresi.dennis@icloud.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
