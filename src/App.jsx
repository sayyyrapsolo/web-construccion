export default function ConstruccionLandingPage() {
  const services = [
    {
      title: "Obra nueva",
      desc: "Proyectos residenciales y comerciales ejecutados con planificación precisa, control de costes y entregas realistas.",
      icon: "🏗️",
    },
    {
      title: "Reformas integrales",
      desc: "Transformamos viviendas, locales y oficinas con diseño funcional, acabados sólidos y una ejecución limpia.",
      icon: "🧱",
    },
    {
      title: "Mantenimiento técnico",
      desc: "Soluciones preventivas y correctivas para comunidades, naves y edificios que no pueden permitirse sorpresas.",
      icon: "🛠️",
    },
    {
      title: "Dirección de proyecto",
      desc: "Coordinación de gremios, seguimiento de hitos y comunicación clara para que todo avance sin caos de obra.",
      icon: "📐",
    },
  ];

  const projects = [
    {
      title: "Residencial Horizonte",
      category: "Vivienda",
      result: "+32 viviendas entregadas",
      image: "/proyecto1.jpeg",
    },
    {
      title: "Centro Logístico Delta",
      category: "Industrial",
      result: "Plazo optimizado un 18%",
      image: "/proyecto2.jpeg",
    },
    {
      title: "Oficinas Áurea",
      category: "Corporativo",
      result: "Reforma integral llave en mano",
      image: "/proyecto3.jpeg",
    },
  ];

  const stats = [
    { value: "+15", label: "Años construyendo" },
    { value: "+240", label: "Proyectos completados" },
    { value: "98%", label: "Clientes satisfechos" },
    { value: "24h", label: "Respuesta inicial" },
  ];

  const steps = [
    {
      title: "Escuchamos",
      desc: "Entendemos la necesidad real del cliente, no solo el plano bonito.",
    },
    {
      title: "Planificamos",
      desc: "Definimos fases, tiempos, materiales y presupuesto sin humo.",
    },
    {
      title: "Ejecutamos",
      desc: "Coordinamos la obra con seguimiento continuo y control de calidad.",
    },
    {
      title: "Entregamos",
      desc: "Cerramos con revisión final, documentación y soporte posterior.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <a
        href="https://wa.me/34642540901?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20proyecto%20de%20construcci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 font-medium text-white shadow-2xl transition hover:scale-105 hover:bg-[#1ebe5d]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-6 w-6"
          fill="currentColor"
        >
          <path d="M19.11 17.36c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.44-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .15.19 2.02 3.08 4.9 4.32.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.02 3C9.94 3 5 7.94 5 14c0 2.46.8 4.73 2.17 6.57L6 29l8.62-1.13A10.93 10.93 0 0016.02 29C22.06 29 27 24.06 27 18.02 27 11.94 22.06 7 16.02 7z"/>
        </svg>
        WhatsApp
      </a>
      <section className="relative h-[85vh] w-full overflow-hidden">
  <img
    src="/portada.jpg"
    alt="JC Reformas portada"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* degradado que fusiona con el fondo de la web */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-zinc-950" />

  <div className="relative z-10 flex h-full flex-col">
    <header className="flex items-center justify-between px-6 py-6 lg:px-12">
      <div className="text-lg font-semibold tracking-wide text-amber-400">
      
      </div>
    </header>

    <div className="flex flex-1 items-center justify-center">
      <div className="text-center px-6">
     <h1
  style={{
    background: "linear-gradient(180deg,#f5e6a8,#d4af37,#b8962e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: "300px",
    fontWeight: "700"
  }}
>
  Reformas con acabados profesionales
</h1>
        <p className="mt-6 text-lg text-zinc-200 max-w-2xl mx-auto">
          Calidad, compromiso y resultados que se notan desde el primer día.
        </p>
      </div>
    </div>
  </div>
</section>

{/* botones debajo de la portada */}
<section className="bg-zinc-950 py-10">
  <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-6">

    <a
      href="#servicios"
      className="rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:scale-105"
    >
      Servicios
    </a>

    <a
      href="#proyectos"
      className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
    >
      Proyectos
    </a>

    <a
      href="#proceso"
      className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
    >
      Proceso
    </a>

    <a
      href="#contacto"
      className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
    >
      Contacto
    </a>

  </div>
</section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.3em] text-amber-400">Servicios</div>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Lo que hacemos y lo que hacemos bien</h2>
          <p className="mt-4 text-zinc-400">
            Nada de páginas que prometen de todo y luego parecen un folleto triste. Aquí el usuario entiende rápido qué ofreces, por qué confiar y qué paso dar después.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{service.desc}</p>
              <div className="mt-5 text-sm font-medium text-amber-400">Más información</div>
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.3em] text-amber-400">Proyectos</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Construcciones que venden confianza antes de la primera llamada</h2>
            </div>
            <a href="#contacto" className="text-sm font-medium text-zinc-300 transition hover:text-white">
              Hablar con un técnico →
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt="Proyecto construcción"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-200">
                    Caso {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-amber-400">{project.category}</div>
                  <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-zinc-400">
                    Proyecto ejecutado con foco en tiempos, seguridad, coordinación y acabados duraderos.
                  </p>
                  <div className="mt-5 rounded-2xl bg-white/5 p-4 text-sm text-zinc-200">{project.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-amber-400">Proceso</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Un flujo simple, claro y sin teatro corporativo</h2>
            <p className="mt-4 leading-8 text-zinc-400">
              La experiencia está pensada para que el usuario encuentre rápido la información clave: servicios, pruebas de confianza, proyectos y un formulario directo. Menos ruido, más conversión.
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 font-semibold text-zinc-950">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-zinc-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-400 to-yellow-300 p-8 text-zinc-950 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em]">Por qué funciona esta web</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Diseñada para transmitir orden, autoridad y contacto rápido</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-800">
              Visual potente, jerarquía clara, llamadas a la acción visibles y un tono serio pero actual. Lo bastante elegante para una promotora, lo bastante práctico para una empresa que quiere captar clientes sin marearlos.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[1.5rem] bg-black/10 p-5">
              <div className="text-sm">Ideal para</div>
              <div className="mt-1 font-semibold">Constructoras, reformas, estudios técnicos y promotoras</div>
            </div>
            <div className="rounded-[1.5rem] bg-black/10 p-5">
              <div className="text-sm">Siguiente paso lógico</div>
              <div className="mt-1 font-semibold">Conectarla a WhatsApp, formulario real y portfolio editable</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-zinc-900/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-amber-400">Contacto</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Cuéntanos tu proyecto</h2>
            <p className="mt-4 max-w-xl leading-8 text-zinc-400">
              Obra nueva, reforma, rehabilitación o mantenimiento. Escríbenos y te respondemos con una propuesta seria. Sin venderte castillos de hormigón en el aire.
            </p>
            <div className="mt-8 space-y-4 text-zinc-300">
              <div>📍 Madrid, España</div>
              <div>📞 +34 642 54 09 01</div>
              <div>✉️ contacto@constructapro.es</div>
            </div>
          </div>

          <form className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-400"
                placeholder="Nombre"
              />
              <input
                className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-400"
                placeholder="Teléfono"
              />
            </div>
            <input
              className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-400"
              placeholder="Correo electrónico"
            />
            <input
              className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-400"
              placeholder="Tipo de proyecto"
            />
            <textarea
              rows={5}
              className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-400"
              placeholder="Cuéntanos qué necesitas"
            />
            <button
              type="button"
              className="rounded-2xl bg-amber-400 px-6 py-3 font-medium text-zinc-950 transition hover:scale-[1.01]"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
