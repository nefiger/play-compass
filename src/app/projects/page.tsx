export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold">Selected Projects</h1>
      <ul className="mt-6 space-y-6">
        <li>
          <h2 className="text-xl font-medium">The Cape Town Game</h2>
          <p className="text-gray-700">
            A location-based puzzle adventure set in the Company’s Garden, combining scavenger hunts, clues, and urban magic.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-medium">Kaioma</h2>
          <p className="text-gray-700">
            An interactive art installation exploring emergence and presence, submitted to Playtopia 2025.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-medium">Summry</h2>
          <p className="text-gray-700">
            A WhatsApp voice note transcription tool that blends AI with clean interface design and local use cases.
          </p>
        </li>
      </ul>
    </div>
  )
}