import React from 'react'

export default function Contact() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
      <p className="mb-4 text-gray-600">Tertarik bekerja sama? Kirim pesan singkat atau minta penawaran.</p>
      <form className="grid md:grid-cols-2 gap-4">
        <input className="p-3 border rounded" placeholder="Nama" />
        <input className="p-3 border rounded" placeholder="Email" />
        <input className="p-3 border rounded md:col-span-2" placeholder="Perusahaan / proyek" />
        <textarea className="p-3 border rounded md:col-span-2" rows={5} placeholder="Pesan" />
        <button type="button" className="py-3 px-6 bg-blue-600 text-white rounded md:col-span-2">Kirim</button>
      </form>
    </div>
  )
}
