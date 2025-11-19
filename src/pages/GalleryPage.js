
// pages/GalleryPage.js
import React, { useState } from 'react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Site Supervision',
      category: 'supervision',
      description: 'Professional site supervision ensuring quality construction standards'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
      title: 'Foundation Works',
      category: 'foundation',
      description: 'Precise foundation layout and construction'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      title: 'House Construction',
      category: 'construction',
      description: 'Complete residential building construction'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      title: 'Masonry Works',
      category: 'masonry',
      description: 'Expert masonry and brickwork'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      title: 'Roof Installation',
      category: 'roofing',
      description: 'Professional roof installation services'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80',
      title: 'Finishing Works - Tiling',
      category: 'finishing',
      description: 'Quality finishing and tiling works'
    }
  ];

  const categories = ['all', 'supervision', 'foundation', 'construction', 'masonry', 'roofing', 'finishing'];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <h1>Project Gallery</h1>
          <p>Visual showcase of construction projects and works</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          {/* Category Filters */}
          <div className="gallery-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>{image.title}</h4>
                    <span className="category-tag">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedImage(null)}>
              <i className="fas fa-times"></i>
            </span>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <span className="category-tag">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;