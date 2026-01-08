import { Photo } from '../lib/photos'

interface PhotoCardProps {
  photo: Photo
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <div className="group overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={photo.url}
          alt={photo.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-center text-base font-medium text-gray-900 line-clamp-2">
          {photo.title}
        </h3>
      </div>
    </div>
  )
}
