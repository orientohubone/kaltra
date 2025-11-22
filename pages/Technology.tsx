import React from 'react';
import Section from '../components/ui/Section';
import { Database, Satellite, Code2, Microscope } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <div className="pt-10">
      <Section className="bg-kaltra-graphite">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Arquitetura <span className="text-kaltra-glacial">Deeptech</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          A Kaltra combina quatro camadas de dados para construir uma representação digital fiel da realidade do campo. 
          Do satélite ao microbioma, nada passa despercebido.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-16">
          {/* Tech Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-slate-800 pt-12">
            <div className="md:col-span-4">
              <div className="w-12 h-12 bg-slate-900 border border-kaltra-glacial/30 rounded-lg flex items-center justify-center mb-4">
                <Satellite className="text-kaltra-glacial" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Layer 1: Sensoriamento Remoto</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-slate-400 mb-4">
                Utilizamos constelações de satélites (Sentinel, Landsat, Planet) combinados com dados de drones para criar mapas de vigor vegetativo (NDVI, EVI) atualizados diariamente. Nossos algoritmos filtram nuvens e sombras automaticamente.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-sm text-slate-300 font-mono">
                <li className="border-l border-kaltra-glacial pl-3">Resolução espacial de 50cm a 10m</li>
                <li className="border-l border-kaltra-glacial pl-3">Revisita diária</li>
              </ul>
            </div>
          </div>

          {/* Tech Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-slate-800 pt-12">
            <div className="md:col-span-4">
              <div className="w-12 h-12 bg-slate-900 border border-kaltra-glacial/30 rounded-lg flex items-center justify-center mb-4">
                <Microscope className="text-kaltra-glacial" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Layer 2: Física de Solo</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-slate-400 mb-4">
                Injetamos dados de análise de solo e condutividade elétrica para criar um modelo 3D do perfil pedológico. O sistema simula a retenção de água e a disponibilidade de nutrientes nas zonas radiculares em tempo real.
              </p>
            </div>
          </div>

          {/* Tech Block 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-slate-800 pt-12">
            <div className="md:col-span-4">
              <div className="w-12 h-12 bg-slate-900 border border-kaltra-glacial/30 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-kaltra-glacial" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Layer 3: Big Data Climático</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-slate-400 mb-4">
                Processamos 30 anos de histórico climático da região cruzados com modelos globais (ECMWF, GFS) para gerar microclimas locais específicos da fazenda, reduzindo a incerteza da previsão do tempo.
              </p>
            </div>
          </div>

           {/* Tech Block 4 */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-slate-800 pt-12">
            <div className="md:col-span-4">
              <div className="w-12 h-12 bg-slate-900 border border-kaltra-glacial/30 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-kaltra-glacial" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Layer 4: Kaltra AI Core</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-slate-400 mb-4">
                O cérebro da operação. Redes neurais profundas (Deep Learning) analisam as correlações entre as camadas anteriores para prever produtividade, risco de pragas e janela ótima de colheita.
              </p>
               <div className="bg-slate-900 p-4 rounded border border-slate-800 mt-4">
                  <code className="text-xs text-green-400 block">
                    {`> init_model(type="phenology_v4")`} <br/>
                    {`> loading_layers: [soil, satellite, weather]`} <br/>
                    {`> running_simulation... 99.8% accuracy`}
                  </code>
               </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Technology;