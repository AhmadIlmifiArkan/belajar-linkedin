const benefits = [
  {
    title: "Optimasi Profil",
    desc: "Pelajari cara membuat profil LinkedIn yang profesional dan menarik perhatian HR.",
  },
  {
    title: "Personal Branding",
    desc: "Bangun citra diri yang kredibel untuk meningkatkan peluang karir.",
  },
  {
    title: "Strategi Networking",
    desc: "Kuasai teknik memperluas jaringan profesional secara efektif.",
  },
  {
    title: "Konten Menarik",
    desc: "Belajar membuat postingan yang meningkatkan engagement dan peluang kerja.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Mengapa Harus Ikut?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
        {benefits.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
