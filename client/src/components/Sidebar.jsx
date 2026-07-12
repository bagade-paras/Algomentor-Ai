export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-violet-500">
          AlgoMentor 
        </h1>

        <p className="text-slate-400 text-sm">
          AI
        </p>
      </div>

      {/* Dashboard Button */}
      <div className="p-4">
        <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 py-3 font-semibold text-white transition hover:opacity-90">
          Dashboard
        </button>
      </div>

      {/* Contact Section */}
      <div className="mt-auto border-t border-slate-800 p-6">

        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
          Connect
        </h3>

        <a
          href="https://github.com/bagade-paras"
          target="_blank"
          rel="noreferrer"
          className="block py-2 text-slate-300 hover:text-violet-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/paras-bagade/"
          target="_blank"
          rel="noreferrer"
          className="block py-2 text-slate-300 hover:text-violet-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="bagadeparas309@gmail.com"
          className="block py-2 text-slate-300 hover:text-violet-400 transition"
        >
          Email
        </a>

        {/* Divider */}
        <div className="mt-6 border-t border-slate-800 pt-4">

          <p className="text-xs text-slate-500">
            Version 1.0.0
          </p>

          <p className="mt-2 text-xs text-slate-600">
            © 2026 AlgoMentor AI.
          </p>

        </div>

      </div>

    </aside>
  );
}