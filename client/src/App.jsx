import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {

  return (

    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <main className="flex-1">

        <Navbar />

        <div className="p-10">

          <Hero />

        </div>

      </main>

    </div>

  )

}