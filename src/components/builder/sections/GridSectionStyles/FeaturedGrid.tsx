interface GridItem {
  id: number
  title: string
  imageUrl: string
}

const gridItems: GridItem[] = [
  { id: 1, title: "Featured Item", imageUrl: "/placeholder.svg?height=600&width=800" },
  { id: 2, title: "Item 2", imageUrl: "/placeholder.svg?height=400&width=600" },
  { id: 3, title: "Item 3", imageUrl: "/placeholder.svg?height=400&width=600" },
  { id: 4, title: "Item 4", imageUrl: "/placeholder.svg?height=400&width=600" },
  { id: 5, title: "Item 5", imageUrl: "/placeholder.svg?height=400&width=600" },
  { id: 6, title: "Item 6", imageUrl: "/placeholder.svg?height=400&width=600" },
]

export default function FeaturedGrid({isEditing,styles,content,onContentChange,onStyleChange,gridCount}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`relative overflow-hidden rounded-lg shadow-lg ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              width={index === 0 ? 800 : 600}
              height={index === 0 ? 600 : 400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <h3 className="text-white text-xl font-bold p-4">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

