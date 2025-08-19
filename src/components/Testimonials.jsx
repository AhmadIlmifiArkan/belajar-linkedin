const testimonials = [
  {
    text: "“Semenjak Saya mengikuti Pelatihan ini, Saya sangat mudah mendapatkan Pekerjaan!”",
    name: "Andrean Sugianto",
  },
  {
    text: "“Sangat inspiratif dan membantu.”",
    name: "Novita Khorisma",
  },
  {
    text: "“Sangat membantu dalam mengembangkan diri dan menambah relasi!”",
    name: "Agus Septian",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Testimoni Alumni</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-xl shadow">
            <p className="text-gray-600 italic">{t.text}</p>
            <h4 className="mt-4 font-semibold">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
