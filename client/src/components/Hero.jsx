import FeatureCard from "./FeatureCard";
import QuestionBox from "./QuestionBox";

export default function Hero() {
  return (
    <section>

      {/* Heading */}

      <h1 className="text-5xl font-bold">
        AlgoMentor AI
      </h1>

      <p className="mt-3 text-slate-400 text-lg">
        Your AI-powered Data Structures & Algorithms Mentor
      </p>

      {/* Feature Cards */}

      <div className="grid grid-cols-3 gap-6 mt-10">

        <FeatureCard
          title="Learn DSA"
          subtitle="Understand concepts easily."
        />

        <FeatureCard
          title="Instant AI"
          subtitle="Powered by Gemini AI."
        />

        <FeatureCard
          title="Interview Ready"
          subtitle="Placement preparation."
        />

      </div>

      {/* Question Box */}

      <QuestionBox />

    </section>
  );
}