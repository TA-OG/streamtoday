export function SocialProof() {
  const clients = [
    "Nottingham Business",
    "East Midlands Tech",
    "Local Influencers",
    "Sports Personalities",
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto section-padding">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          Trusted by creators and businesses across the East Midlands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client}
              className="text-lg lg:text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
