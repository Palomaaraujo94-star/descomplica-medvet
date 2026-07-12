export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-5xl font-bold mb-4">
          🐾 Descomplica MedVet
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Sua plataforma completa de estudos em Medicina Veterinária.
        </p>

        <div className="flex gap-4 justify-center">

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold">
            Entrar
          </button>

          <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl font-semibold">
            Criar Conta
          </button>

        </div>

      </div>
    </main>
  );
}