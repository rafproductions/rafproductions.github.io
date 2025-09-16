import React from 'react'

const items = [
  { title: 'Desain Booth', desc: 'Konsep kreatif dan visual untuk meningkatkan brand presence.' },
  { title: 'Konstruksi', desc: 'Pengerjaan booth dari bahan ringan sampai finishing premium.' },
  { title: 'Logistik & Instalasi', desc: 'Pengiriman, instalasi, dan teardown di lokasi event.' },
]

export default function Services() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Layanan Kami</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold text-xl">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
