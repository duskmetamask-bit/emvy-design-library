import { sites } from "@/data/sites";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">EMVY Design Library</h1>
            <p className="text-white/50 text-sm mt-1">Quality website breakdowns — sector focused</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/stack" className="text-white/40 hover:text-white text-sm transition">Stack</a>
            <span className="text-white/40 text-sm">{sites.length} sites analyzed</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white/40 text-sm">Live</span>
          </div>
        </div>
      </header>

      {/* Sector Filter Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 flex-wrap">
          <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">All Sectors</button>
          <button className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm hover:bg-white/20 transition">AI / LLM</button>
          <button className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm hover:bg-white/20 transition">Fintech</button>
          <button className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm hover:bg-white/20 transition">Dev Tools</button>
          <button className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm hover:bg-white/20 transition">Automation</button>
          <button className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm hover:bg-white/20 transition">SaaS</button>
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site) => (
            <article
              key={site.id}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/60">
                    {site.sector}
                  </span>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <h2 className="text-xl font-semibold mb-1 group-hover:text-purple-400 transition">{site.name}</h2>
                <p className="text-white/40 text-sm">{site.url.replace("https://", "")}</p>
              </div>

              {/* Design Vibe Tags */}
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {site.designVibe.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Color Palette Preview */}
              <div className="px-6 pb-4">
                <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Color Palette</p>
                <div className="flex gap-2">
                  <div className="flex-1 h-8 rounded-lg" style={{ backgroundColor: site.colorPalette.primary }} title="Primary" />
                  <div className="flex-1 h-8 rounded-lg" style={{ backgroundColor: site.colorPalette.secondary }} title="Secondary" />
                  <div className="flex-1 h-8 rounded-lg" style={{ backgroundColor: site.colorPalette.accent }} title="Accent" />
                  <div className="flex-1 h-8 rounded-lg" style={{ backgroundColor: site.colorPalette.background }} title="Background" />
                </div>
              </div>

              {/* What Works */}
              <div className="px-6 pb-4">
                <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">What Works</p>
                <ul className="space-y-1.5">
                  {site.whatWorks.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standout Components */}
              <div className="px-6 pb-4">
                <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Standout</p>
                <div className="flex flex-wrap gap-1.5">
                  {site.standoutComponents.slice(0, 3).map((comp) => (
                    <span key={comp} className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hero Style */}
              <div className="px-6 pb-4">
                <p className="text-xs text-white/30 mb-1.5 uppercase tracking-wider">Hero Style</p>
                <p className="text-sm text-white/60">{site.heroStyle}</p>
              </div>

              {/* CTA Style */}
              <div className="px-6 pb-4">
                <p className="text-xs text-white/30 mb-1.5 uppercase tracking-wider">CTA Style</p>
                <p className="text-sm text-white/60">{site.ctaStyle}</p>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-4">
                <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {site.techStack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/60 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Page Structure */}
              <div className="px-6 pb-6 border-t border-white/10 pt-4">
                <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Page Structure</p>
                <div className="flex flex-col gap-1">
                  {site.pageStructure.slice(0, 5).map((section, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="text-white/20">{i + 1}.</span>
                      <span>{section}</span>
                    </div>
                  ))}
                  {site.pageStructure.length > 5 && (
                    <span className="text-xs text-white/30 ml-5">+ {site.pageStructure.length - 5} more</span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/30">Reviewed {site.reviewedAt}</span>
                <button className="text-xs text-purple-400 hover:text-purple-300 transition">
                  View Prototype →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state for future entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 opacity-30">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 border border-dashed border-white/20 rounded-2xl h-64 flex items-center justify-center">
              <span className="text-white/40 text-sm">More coming soon...</span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <p className="text-white/30 text-sm">EMVY Design Library — Research → Identity → Build → Deploy</p>
          <p className="text-white/20 text-xs">Target: 10 quality sites per sector</p>
        </div>
      </footer>
    </div>
  );
}