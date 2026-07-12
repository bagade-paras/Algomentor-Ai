export default function About({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="w-[520px] rounded-2xl bg-slate-900 border border-slate-700 p-8">

        <h2 className="text-3xl font-bold text-white">
          AlgoMentor AI
        </h2>

        <p className="mt-3 text-slate-400">
          AI-powered Data Structures & Algorithms Learning Platform.
        </p>

        <div className="mt-8 space-y-4">

          <div>
            <h3 className="font-semibold text-violet-400">
              Frontend
            </h3>
            <p className="text-slate-300">
              React • Parcel • Tailwind CSS
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-violet-400">
              Backend
            </h3>
            <p className="text-slate-300">
              Node.js • Express.js
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-violet-400">
              AI Model
            </h3>
            <p className="text-slate-300">
              Google Gemini API
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-violet-400">
              Upcoming Features
            </h3>

            <ul className="text-slate-300 list-disc ml-5">
              <li>RAG Support</li>
              <li>PDF Knowledge Base</li>
              <li>Interview Mode</li>
              <li>Chat History</li>
            </ul>

          </div>

        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-violet-600 py-3 font-semibold hover:bg-violet-700 transition"
        >
          Close
        </button>

      </div>

    </div>
  );
}