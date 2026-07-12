export default function ResponseCard({ response }) {
  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold mb-5">

        🤖 AI Response

      </h2>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 min-h-[250px]">

        {response ? (

          <p className="leading-8 whitespace-pre-wrap">

            {response}

          </p>

        ) : (

          <p className="text-slate-400">

            Ask any DSA question and the answer will appear here.

          </p>

        )}

      </div>

    </section>
  );
}