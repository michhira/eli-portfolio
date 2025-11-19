// pages/BlogPage.js
import React, { useState } from 'react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Ubwubatsi bwa Moderne muri Rwanda',
      excerpt: 'Uko imikoreshereze ya technologie mu bwubatsi iri gukura mu Rwanda. Twaganira ku buryo bwo gukoresha ibikoresho bya moderne nka BIM, drones, na software ya construction management.',
      content: 'Mu myaka ishize, ubwubatsi muri Rwanda bwahinduye isura cyane. Imikoreshereze ya technologie nshya iri guhindura uburyo twubaka...',
      date: 'December 15, 2023',
      category: 'Technology',
      readTime: '5 min read',
      author: 'Kwizera Eli',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['Technology', 'Innovation', 'Rwanda']
    },
    {
      id: 2,
      title: 'Ubwubatsi bw\'Inzu zishingiye ku Gihugu',
      excerpt: 'Uburyo dushobora kubaka inzu zikoresheje ibikoresho byo mu Rwanda. Tuganira ku bijyanye n\'ubwubatsi bw\'inzu zishingiye ku gihugu no ku ngaruka ku bukungu.',
      content: 'Ubwubatsi bw\'inzu zishingiye ku gihugu ni ingenzi mu iterambere ry\'igihugu. Mu Rwanda, hari gahunda yo kubaka inzu zikoresheje ibikoresho byo mu Rwanda...',
      date: 'November 28, 2023',
      category: 'Sustainability',
      readTime: '4 min read',
      author: 'Kwizera Eli',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80',
      tags: ['Sustainability', 'Local Materials', 'Economy']
    },
    {
      id: 3,
      title: 'Umutekano ku Biro by\'Ubwubatsi',
      excerpt: 'Uburyo bwo kwirinda impanuka ku biro by\'ubwubatsi. Inama ku mutekano ku kazi no kubungabunga ubuzima bw\'abakozi.',
      content: 'Umutekano ku kazi ni ingenzi cyane mu bwubatsi. Impanuka zishobora gutwara ubuzima cyangwa gutera ubumuga...',
      date: 'November 10, 2023',
      category: 'Safety',
      readTime: '6 min read',
      author: 'Kwizera Eli',
      image: 'https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
      tags: ['Safety', 'Construction', 'Health']
    },
    {
      id: 4,
      title: 'Imashini n\'Ibikoresho bya Moderne mu Bwubatsi',
      excerpt: 'Uko imashini nshya zihinduye ubwubatsi. Tuganira ku mikoreshereze ya drones, 3D printing, na robotics mu bwubatsi.',
      content: 'Imashini nshya zihinduye uburyo twubaka. Drones zikoreshwa mu gupima ubuso, 3D printing ikoreshwa mu kubaka inganda...',
      date: 'October 22, 2023',
      category: 'Technology',
      readTime: '7 min read',
      author: 'Kwizera Eli',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      tags: ['Technology', 'Equipment', 'Innovation']
    },
    {
      id: 5,
      title: 'Gahunda y\'Ubwubatsi mu Rwanda 2024',
      excerpt: 'Ibindi Rwanda rwiteguye gukora mu bwubatsi mu mwaka wa 2024. Gahunda n\'ibikorwa by\'ibanze.',
      content: 'Mu mwaka wa 2024, Rwanda rufite gahunda nyinshi mu bwubatsi. Harimo kubaka ibikorwa remezo, inzu, n\'ibindi...',
      date: 'October 5, 2023',
      category: 'Policy',
      readTime: '5 min read',
      author: 'Kwizera Eli',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      tags: ['Policy', 'Rwanda', 'Development']
    },
    {
      id: 6,
      title: 'Ubwubatsi bw\'Inzu z\'Abatishoboye',
      excerpt: 'Uburyo bwo kubaka inzu z\'abatishoboye. Tuganira ku gahunda za leta n\'uburyo bwo kubona inzu ku giciro gito.',
      content: 'Inzu ni ingenzi ku bantu bose. Abatishoboye bagomba kubona inzu ku giciro gito. Hari gahunda nyinshi zifasha...',
      date: 'September 18, 2023',
      category: 'Social',
      readTime: '4 min read',
      author: 'Kwizera Eli',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
      tags: ['Social', 'Housing', 'Affordable']
    }
  ];

  const categories = ['all', 'Technology', 'Safety', 'Sustainability', 'Policy', 'Social'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <h1>Blog & Insights</h1>
          <p>Amakuru n'ubumenyi ku bwubatsi</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          {/* Search and Filter */}
          <div className="blog-controls">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Shakisha inkuru..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'Zose' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="blog-posts-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>

                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div className="blog-meta">
                    <span className="blog-date">
                      <i className="fas fa-calendar"></i> {post.date}
                    </span>
                    <span className="blog-read-time">
                      <i className="fas fa-clock"></i> {post.readTime}
                    </span>
                    <span className="blog-author">
                      <i className="fas fa-user"></i> {post.author}
                    </span>
                  </div>

                  <div className="blog-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>

                  <a href="#" className="blog-read-more">
                    Soma byinshi <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <i className="fas fa-search"></i>
              <h3>Nta nkuru zabonetse</h3>
              <p>Gerageza gushaka ijambo ritandukanye cyangwa uhitamo icyiciro gisa.</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="blog-newsletter">
            <h2>Jya ubona amakuru mashya</h2>
            <p>Andika email yawe kugira ngo ubone amakuru mashya ku bwubatsi.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email yawe..." />
              <button className="btn">
                <i className="fas fa-envelope"></i> Iyandikishe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
