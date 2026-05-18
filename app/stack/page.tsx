import { openSourceTools, toolCategories } from "@/data/open-source-stack";

const statusConfig = {
  "already-running": { label: "Running", color: "bg-green-500", bg: "bg-green-500/10 border-green-500/20" },
  "deploy-now": { label: "Deploy Now", color: "bg-yellow-500", bg: "bg-yellow-500/10 border-yellow-500/20" },
  evaluate: { label: "Evaluate", color: "bg-blue-500", bg: "bg-blue-500/10 border-blue-500/20" },
  "not-needed": { label: "Not Needed", color: "bg-white/20", bg: "bg-white/5 border-white/10" },
} as const;

const categoryColors: Record<string, string> = {
  "Website Design": "bg-purple-500/20 text-purple-300",
  "SEO & Analytics": "bg-blue-500/20 text-blue-300",
  "Lead Capture": "bg-orange-500/20 text-orange-300",
  "Knowledge Base": "bg-cyan-500/20 text-cyan-300",
  "AI / Knowledge": "bg-pink-500/20 text-pink-300",
  "AI Systems": "bg-violet-500/20 text-violet-300",
  "Newsletter": "bg-emerald-500/20 text-emerald-300",
  "Reporting": "bg-teal-500/20 text-teal-300",
  "Admin & DB": "bg-amber-500/20 text-amber-300",
  "CRM": "bg-rose-500/20 text-rose-300",
  "Database": "bg-indigo-500/20 text-indigo-300",
};

export default function ToolsPage() {
  const running = openSourceTools.filter(t => t.emvyStatus === "already-running");
  const deployNow = openSourceTools.filter(t => t.emvyStatus === "deploy-now");
  const evaluate = openSourceTools.filter(t => t.emvyStatus === "evaluate");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">EMVY Stack</h1>
            <p className="text-white/50 text-sm mt-1">Open source & self-hostable tools</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm">{openSourceTools.length} tools tracked</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white/40 text-sm">Live</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Priority: Deploy Now */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
            <h2 className="text-xl font-semibold">Deploy Now</h2>
            <span className="text-white/40 text-sm">Ready to self-host today</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deployNow.map((tool) => {
              const cfg = statusConfig[tool.emvyStatus];
              return (
                <div
                  key={tool.id}
                  className="bg-white/5 border border-yellow-500/20 rounded-xl p-5 hover:border-yellow-500/40 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[tool.category] || "bg-white/10 text-white/60"}`}>
                      {tool.category}
                    </span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color === "bg-yellow-500" ? "text-yellow-400" : "text-white/60"}`}>
                      {cfg.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
                  <p className="text-white/50 text-sm mb-3">{tool.description.slice(0, 120)}...</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {tool.github && (
                        <a
                          href={`https://github.com/${tool.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-white text-xs flex items-center gap-1 transition"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                          {tool.stars}
                        </a>
                      )}
                    </div>
                    <span className="text-white/30 text-xs">Self-hosted</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Already Running */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <h2 className="text-xl font-semibold">Already Running</h2>
            <span className="text-white/40 text-sm">Self-hosted and operational</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {running.map((tool) => {
              const cfg = statusConfig[tool.emvyStatus];
              return (
                <div
                  key={tool.id}
                  className="bg-white/5 border border-green-500/20 rounded-xl p-5 hover:border-green-500/40 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[tool.category] || "bg-white/10 text-white/60"}`}>
                      {tool.category}
                    </span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cfg.bg} text-green-400`}>
                      {cfg.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
                  <p className="text-white/50 text-sm mb-3">{tool.description.slice(0, 100)}...</p>
                  {tool.notes && (
                    <p className="text-yellow-400/80 text-xs italic">→ {tool.notes}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Evaluate */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <h2 className="text-xl font-semibold">Evaluate</h2>
            <span className="text-white/40 text-sm">Worth exploring for future EMVY ops</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {evaluate.map((tool) => {
              const cfg = statusConfig[tool.emvyStatus];
              return (
                <div
                  key={tool.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[tool.category] || "bg-white/10 text-white/60"}`}>
                      {tool.category}
                    </span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cfg.bg} text-blue-400`}>
                      {cfg.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
                  <p className="text-white/50 text-sm mb-3">{tool.description.slice(0, 100)}...</p>
                  <div className="flex items-center gap-2">
                    {tool.github && (
                      <a
                        href={`https://github.com/${tool.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white text-xs flex items-center gap-1 transition"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        {tool.stars}
                      </a>
                    )}
                    <span className="text-white/30 text-xs">Self-hosted</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Category Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-6">All Tools by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {toolCategories.map((cat) => {
              const count = openSourceTools.filter(t => t.category === cat).length;
              return (
                <div
                  key={cat}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between"
                >
                  <span className="text-white/70 text-sm">{cat}</span>
                  <span className="text-white/40 text-sm">{count}</span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}