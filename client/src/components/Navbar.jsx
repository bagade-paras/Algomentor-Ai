import { useState } from "react";
import About from "./AboutTemp";

export default function Navbar() {

  const [showAbout, setShowAbout] = useState(false);

  const [dark, setDark] = useState(true);

  function toggleTheme() {

    setDark(!dark);

    document.body.classList.toggle("light-mode");

  }

  return (

    <>

      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8">

        <h1 className="text-3xl font-bold">

          Dashboard

        </h1>

        <div className="flex gap-3">

          <button
            onClick={toggleTheme}
            className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-violet-600 transition"
          >
            {dark ? "🌙 Dark" : "☀ Light"}
          </button>

          <button
            onClick={() => setShowAbout(true)}
            className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-violet-600 transition"
          >
            About
          </button>

        </div>

      </header>

      <About
        open={showAbout}
        onClose={() => setShowAbout(false)}
      />

    </>

  );

}