import React from 'react';
import Section from '../components/ui/Section';

const About: React.FC = () => {
  return (
    <div className="pt-10">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">
            Ciência em Primeiro Lugar.
          </h1>
          
          <div className="prose prose-invert prose-lg text-slate-400">
            <p className="lead text-xl text-white mb-8">
              A Kaltra nasceu em 2023 com uma tese simples: a agricultura de precisão atual ainda é baseada em reatividade. Nosso objetivo é torná-la preditiva.
            </p>
            <p className="mb-6">
              Fundada por um time interdisciplinar de engenheiros agrônomos, cientistas de dados e físicos, a Kaltra não busca apenas mostrar mapas coloridos. Buscamos entender a causa raiz de cada variabilidade no campo.
            </p>
            <p className="mb-6">
              Nossa tecnologia de Digital Twin é resultado de 4 anos de P&D, validada em mais de 2 milhões de hectares monitorados no Cerrado e no Matopiba.
            </p>
            
            <h3 className="text-2xl font-bold text-white mt-12 mb-6">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                <div className="border-l-2 border-kaltra-glacial pl-6">
                    <h4 className="text-white font-bold mb-2">Rigor Científico</h4>
                    <p className="text-sm">Não vendemos "caixas pretas". Nossos modelos são explicáveis e baseados em ciência agronômica sólida.</p>
                </div>
                <div className="border-l-2 border-kaltra-glacial pl-6">
                    <h4 className="text-white font-bold mb-2">Transparência de Dados</h4>
                    <p className="text-sm">Os dados pertencem ao produtor. Garantimos segurança, privacidade e portabilidade total.</p>
                </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-kaltra-panel">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Liderança</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                    <div className="w-32 h-32 mx-auto bg-slate-800 rounded-full mb-4 overflow-hidden">
                        <img src={`https://picsum.photos/200/200?random=${i}&grayscale`} alt="Team" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                    </div>
                    <h3 className="text-white font-bold">Nome Sobrenome</h3>
                    <p className="text-kaltra-glacial text-sm">Co-Founder & {i === 1 ? 'CEO' : i === 2 ? 'CTO' : 'CSO'}</p>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default About;