import Header from "./header";


export default function Curriculum() {
  return (
    <div className="min-h-screen bg-[#4a4443] text-white overflow-x-hidden">
      <Header />

      <main className="px-6 py-10 flex flex-col items-start">
        {/* Título en itálica */}
        <h1 className="text-[3.5rem] italic mb-8">Curriculum</h1>

        {/* Ejemplo de tarjeta / sección del currículum */}
        <div className="w-full max-w-md bg-[#7e7170] rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Experiencia</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Desarrollador Frontend en Empresa X (2023–hoy)</li>
            <li>Práctica Profesional en Organización Y (2022–2023)</li>
            {/* …añade tus ítems… */}
          </ul>
        </div>

        {/* Otra tarjeta de ejemplo */}
        <div className="w-full max-w-md bg-[#7e7170] rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Educación</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Ingeniería en Sistemas – Universidad Z (2019–2024)</li>
            {/* … */}
          </ul>
        </div>
      </main>
    </div>
  )
}
