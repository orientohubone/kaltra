import React from 'react';
import Section from '../components/ui/Section';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Como o Digital Twin reduz o risco climático na soja",
      excerpt: "Analisamos dados de 3 safras para entender como a simulação fenológica antecipou o estresse hídrico em 15 dias.",
      date: "12 Out, 2023",
      category: "Tecnologia",
      imageUrl: "https://picsum.photos/600/400?grayscale&blur=1"
    },
    {
      id: 2,
      title: "A nova era da Geoestatística: além do NDVI",
      excerpt: "Por que os índices de vegetação tradicionais não são suficientes para a agricultura 4.0 e o que vem a seguir.",
      date: "28 Set, 2023",
      category: "Geociência",
      imageUrl: "https://picsum.photos/600/401?grayscale&blur=1"
    },
    {
      id: 3,
      title: "Case de Sucesso: Aumento de 8sc/ha no MT",
      excerpt: "Como o Grupo Agrícola X utilizou o Kaltra Predict para ajustar a nutrição em tempo real.",
      date: "15 Set, 2023",
      category: "Cases",
      imageUrl: "https://picsum.photos/600/402?grayscale&blur=1"
    }
  ];

  return (
    <div className="pt-10">
      <Section>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">Insights Kaltra</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-kaltra-graphite/90 px-3 py-1 text-xs text-kaltra-glacial font-mono border border-kaltra-glacial/20">
                  {post.category}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-slate-500 text-xs mb-2">{post.date}</div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-kaltra-glacial transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-4 text-kaltra-glacial text-sm font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                Ler artigo &rarr;
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;