export default function AskButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.01] hover:shadow-xl disabled:opacity-50"
    >
      {loading ? "Thinking..." : "🚀 Ask Question"}
    </button>
  );
}