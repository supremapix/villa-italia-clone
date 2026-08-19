import React from "react";

const PousadaMap = () => {
  const endereco = "R. Luís Vicente da Silva, 183 - Armação, Penha - SC, 88385-000";
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`;

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Como chegar
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          {endereco}
        </p>

        <div className="w-full rounded-xl overflow-hidden shadow-lg border">
          <iframe
            title="Localização da Pousada"
            src={mapsUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex justify-center mt-4">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(endereco)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition"
          >
            Traçar rota até a pousada
          </a>
        </div>
      </div>
    </section>
  );
};

export default PousadaMap;