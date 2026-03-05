export default function Picture({ src, alt }) {
  return (
      <div className="min-w-80 w-40/100 max-w-full h-full max-h-full rounded-lg overflow-hidden shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
    </div>
  )
}