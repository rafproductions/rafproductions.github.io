import React from 'react'

const projects = [
  { title: 'Booth Tech Expo 2024', img: '/images/project1.jpg' },
  { title: 'Brand Launch - CafeX', img: '/images/project2.jpg' },
  { title: 'Roadshow Series', img: '/images/project3.jpg' },
]

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Proyek & Portofolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="rounded overflow-hidden shadow bg-white">
            <div className="h-48 bg-gray-200" style={{ backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
