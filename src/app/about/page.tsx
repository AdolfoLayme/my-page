"use client";

export default function About() {
    return (
        <div className="overflow-y-scroll snap-y snap-mandatory h-screen w-full bg-black text-white scroll-smooth">
            {/* "Hoja" 1: Introducción personal */}
            <section className="snap-start min-h-screen w-full flex items-center justify-center p-4">
                <div className="w-full max-w-[90vw] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 max-w-none">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-4 leading-tight">
                                Hola, soy Adolfo<br />
                                estudiante de Ingeniería de Sistemas y un apasionado por la tecnología en todas sus formas.
                            </h1>
                        </div>

                        <div className="space-y-6 text-gray-300 max-w-2xl">
                            <p className="text-xl md:text-1xl leading-relaxed">
                                Me gusta explorar, aprender y comprender cómo funcionan las cosas, desde la teoría hasta la práctica.
                            </p>
                            <p className="text-xl md:text-1xl leading-relaxed">
                                Este sitio es mi espacio personal para compartir mi camino de aprendizaje,
                                documentar mis avances y mostrar las ideas y proyectos que voy desarrollando.
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <a href=""
                                className="p-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href=""
                                className="p-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z" />
                                </svg>
                            </a>
                            <a href=""
                                className="p-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href=""
                                className="p-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                                         <div className="flex justify-center lg:justify-center lg:-ml-2">
                         <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl">
                             <img
                                 alt="Adolfo Layme"
                                 loading="lazy"
                                 decoding="async"
                                 className="w-full h-full object-cover"
                                 src="/foto-perfil.jpg"
                             />
                         </div>
                     </div>
                </div>
            </section>

            {/* "Hoja" 2: Habilidades técnicas */}
            <section className="snap-start min-h-screen w-full flex items-center justify-center p-4">
                <div className="w-full max-w-[90vw] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 max-w-none">
                        <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">
                        Aquí comparto las herramientas y tecnologías que forman parte de mi crecimiento como profesional.
                        </p>

                        <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold leading-tight">
                            Camino de <br />
                            aprendizaje
                        </h2>

                        <div className="space-y-6 text-gray-300 max-w-3xl">
                            <p className="text-xl md:text-1xl leading-relaxed">
                                Estoy en constante formación, fortaleciendo mis bases y adquiriendo nuevas habilidades.
                                Conozco diferentes lenguajes y herramientas, aunque mi objetivo actual es seguir profundizando y aplicando lo aprendido en proyectos reales.

                                Aquí podrás encontrar prácticas, apuntes, pruebas y experimentos que reflejan mi evolución como profesional.
                            </p>
                        </div>

                        <ul className="space-y-4 text-lg">
                            <li className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>JavaScript/TypeScript</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>Angular </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>Node.js Development</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>Herramientas de Control de Versiones</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                             <img
                                 alt="Desarrollo Web Moderno"
                                 loading="lazy"
                                 decoding="async"
                                 className="w-full h-full object-cover"
                                 src="/img.jpg"
                             />
                         </div>
                    </div>
                </div>
            </section>

            {/* "Hoja" 3: Invitación a proyectos */}
            <section className="snap-start min-h-screen w-full flex items-center justify-center p-4">
                <div className="w-full max-w-[90vw] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 max-w-none">
                        <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">
                            Para cualquiera curioso sobre mis trabajos
                        </p>

                        <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold leading-tight">
                            ¿Quieres ver mis<br />
                            trabajos?
                        </h2>

                        <div className="space-y-6 text-gray-300 max-w-2xl">
                            <p className="text-xl md:text-1xl leading-relaxed">
                                Echa un vistazo a mis <strong className="text-white">últimos proyectos</strong> y hablemos sobre cómo puedo
                                <strong className="text-white"> ayudarte</strong>!
                            </p>
                        </div>

                        <div className="pt-4">
                            <a
                                href="/works"
                                className="inline-flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors group"
                            >
                                Ver mi portafolio de proyectos
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                                         <div className="flex justify-center lg:justify-end">
                         <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                             <img
                                 alt="Mis Proyectos"
                                 loading="lazy"
                                 decoding="async"
                                 className="w-full h-full object-cover"
                                 src="/img2.jpg"
                             />
                         </div>
                     </div>
                </div>
            </section>
        </div>
    );
}