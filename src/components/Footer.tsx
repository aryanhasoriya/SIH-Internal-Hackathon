import { NAV_LINKS, EVENT_INFO } from "../constants/eventData";

export const Footer = () => {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10 text-left">
          
          {/* Col 1: Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 bg-white p-1 rounded-md">
                <img
                  src="/assets/college-logo.png"
                  alt="College Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="h-10 bg-white p-1 rounded-md">
                <img
                  src="/assets/sih-logo.png"
                  alt="SIH Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                {EVENT_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Central Selection Round for Smart India Hackathon (SIH) 2026.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-300 mb-3">
              QUICK NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Official Attribution */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold uppercase tracking-widest text-slate-300 mb-3">
              ORGANIZATION
            </h4>
            <p className="text-slate-300 font-semibold">
              {EVENT_INFO.organizer}
            </p>
            <p className="text-slate-400">
              SPOC: <span className="text-white font-bold">{EVENT_INFO.spocName}</span>
            </p>
            <p className="text-slate-500 text-[11px] pt-1">
              Event Date: {EVENT_INFO.dateFormatted}
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 College SIH Cell. All rights reserved.
          </div>
          <div className="text-slate-200 text-sm sm:text-base font-bold tracking-wide">
            Behind the Code : <span className="text-orange-400 font-black">Emergicon Technical Team</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
