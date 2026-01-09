import { useState, useMemo } from 'react'
import PhotoCard from '../components/PhotoCard'
import SearchBar from '../components/SearchBar'
import { photos } from '../lib/photos'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPhotos = useMemo(() => {
    if (!searchQuery.trim()) {
      return photos
    }
    return photos.filter((photo) =>
      photo.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="border-b border-gray-200 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
            Galeria de Fotos
          </h1>
          <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <SearchBar onSearch={setSearchQuery} />
          </div>

          {filteredPhotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                Nenhuma foto encontrada para "{searchQuery}"
              </p>
              <p className="text-gray-500 mt-2">
                Tente pesquisar por outras palavras-chave
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          © 2026 Galeria de Fotos. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
