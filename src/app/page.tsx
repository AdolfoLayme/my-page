
export default function Home() {
  return (

    <section className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="bg-white shadow-md rounded-md w-64 h-70 text-center text-black p-4">
          <h1>My About</h1>
        </div>

        <div className="bg-white shadow-md rounded-md w-64 h-70 text-center text-black p-4">
            <h1>My Works</h1>
        </div>

        <div className="bg-white shadow-md rounded-md w-64 h-70 text-center text-black p-4">
          <h1>My Blog</h1>
        </div>
      </div>
    </section>
  );
}
