import { useState } from 'react'
import { Upload, X, Edit, Trash2, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      name: 'Royal Castle',
      category: 'Small (3-6 years)',
      image: '/api/placeholder/300/200',
      description: 'Perfect for small children parties'
    },
    {
      id: 2,
      name: 'Adventure Fortress',
      category: 'Medium (3-10 years)',
      image: '/api/placeholder/300/200',
      description: 'Great for medium-sized groups'
    }
  ])

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isUploading, setIsUploading] = useState(false)

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'small', name: 'Small (3-6 years)' },
    { id: 'medium', name: 'Medium (3-10 years)' },
    { id: 'large', name: 'Large (6+ kids)' }
  ]

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    setIsUploading(true)
    
    // Simular upload - em produção, você faria upload real para servidor
    setTimeout(() => {
      files.forEach((file, index) => {
        const newPhoto = {
          id: Date.now() + index,
          name: file.name.split('.')[0],
          category: 'Medium (3-10 years)',
          image: URL.createObjectURL(file),
          description: 'Nova foto adicionada'
        }
        setPhotos(prev => [...prev, newPhoto])
      })
      setIsUploading(false)
    }, 1000)
  }

  const deletePhoto = (id) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id))
  }

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category.toLowerCase().includes(selectedCategory))

  return (
    <section id="photo-gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Galeria de Produtos
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Gerencie facilmente as fotos dos seus infláveis
          </p>
          
          {/* Upload Button */}
          <div className="mb-8">
            <label htmlFor="photo-upload" className="cursor-pointer">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700"
                disabled={isUploading}
              >
                <Upload className="mr-2 h-5 w-5" />
                {isUploading ? 'Enviando...' : 'Adicionar Fotos'}
              </Button>
            </label>
            <input
              id="photo-upload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative group">
                <img 
                  src={photo.image} 
                  alt={photo.name}
                  className="w-full h-48 object-cover"
                />
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                  <Button size="sm" variant="secondary">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="destructive"
                    onClick={() => deletePhoto(photo.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{photo.name}</CardTitle>
                <CardDescription className="text-sm text-purple-600">
                  {photo.category}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-gray-600">{photo.description}</p>
              </CardContent>
            </Card>
          ))}
          
          {/* Add New Card */}
          <Card className="border-dashed border-2 border-gray-300 hover:border-purple-400 transition-colors cursor-pointer">
            <label htmlFor="photo-upload-card" className="cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center h-64 text-gray-500 hover:text-purple-600 transition-colors">
                <Plus className="h-12 w-12 mb-4" />
                <p className="text-lg font-medium">Adicionar Nova Foto</p>
                <p className="text-sm">Clique para selecionar arquivos</p>
              </CardContent>
            </label>
            <input
              id="photo-upload-card"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </Card>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Como usar a Galeria de Fotos
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">1. Adicionar Fotos</h4>
              <p>Clique em "Adicionar Fotos" ou no card pontilhado para selecionar múltiplas imagens dos seus infláveis.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">2. Organizar por Categoria</h4>
              <p>Use os filtros para visualizar produtos por faixa etária e organize seu catálogo facilmente.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">3. Gerenciar Conteúdo</h4>
              <p>Passe o mouse sobre as fotos para editar informações ou remover imagens desatualizadas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhotoGallery

