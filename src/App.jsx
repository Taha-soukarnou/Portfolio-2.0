function App() {

  const handleClick = () => {
    console.log("Button clicked");
  }
  return (
    <div className="min-h-screen bg-bg text-neutral-100 flex items-center justify-center">
      <div className="bg-card border border-line rounded-lg p-6 max-w-sm">
        <h1 className="text-2xl font-bold text-accent mb-2">Hello, world</h1>
        <p className="text-neutral-400 mb-4">
          If you see a black page with a dark card and teal title, the theme works.
        </p>
        <button className="bg-accent text-black font-semibold px-4 py-2 rounded-lg hover:opacity-90" onClick={handleClick}>
          Test button
        </button>
      </div>
    </div>
  )
}

export default App