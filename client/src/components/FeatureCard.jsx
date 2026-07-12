export default function FeatureCard({

  title,

  subtitle

}) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 transition">

      <h2 className="text-xl font-semibold">

        {title}

      </h2>

      <p className="mt-3 text-slate-400">

        {subtitle}

      </p>

    </div>

  )

}