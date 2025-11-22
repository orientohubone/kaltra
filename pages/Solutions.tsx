import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 'twin',
      name: 'Kaltra Twin',
      tagline: 'O Gêmeo Digital da sua Fazenda',
      description: 'Plataforma central que unifica todos os dados da operação em uma interface visual 3D interativa.',
      features: ['Visão holística da propriedade', 'Histórico de safras', 'Alertas em tempo real'],
      color: 'border-cyan-500'
    },
    {
      id: 'soil',
      name: 'Kaltra Soil',
      tagline: 'Inteligência Pedológica Avançada',
      description: 'Mapeamento de variabilidade de solo para aplicação de insumos à taxa variável (VRT) com precisão cirúrgica.',
      features: ['Mapas de aplicação VRT', 'Economia de fertilizantes', 'Análise de compactação'],
      color: 'border-amber-600'
    },
    {
      id: 'geo',
      name: 'Kaltra Geo',
      tagline: 'Olhos no Céu 24/7',
      description: 'Monitoramento contínuo via satélite para detecção precoce de falhas de plantio, ervas daninhas e estresse hídrico.',
      features: ['Índices de vegetação (NDVI)', 'Detecção de anomalias', 'Relatórios de biomassa'],
      color: 'border-emerald-500'
    },
    {
      id: 'predict',
      name: 'Kaltra Predict',
      tagline: 'O Futuro, Hoje.',
      description: 'Algoritmos preditivos que estimam a produtividade final da safra meses antes da colheita.',
      features: ['Estimativa de sacas/ha', 'Curva de maturação', 'Logística de colheita'],
      color: 'border-purple-500'
    }
  ];

  return (
    <div className="pt-10">
      <Section className="bg-kaltra-graphite text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Soluções <span className="text-kaltra-glacial">Modulares</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Contrate apenas o que precisa. Nossa arquitetura permite que você comece pelo monitoramento básico e evolua para o Digital Twin completo.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-12">
          {solutions.map((sol, idx) => (
            <div key={sol.id} className={`bg-kaltra-panel border-l-4 ${sol.color} p-8 md:p-12 rounded-r-xl shadow-xl relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
                <div className="flex-1">
                  <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">Módulo 0{idx + 1}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{sol.name}</h2>
                  <p className="text-kaltra-glacial font-medium mb-4">{sol.tagline}</p>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed max-w-2xl">{sol.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {sol.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                        <CheckCircle2 size={16} className="text-kaltra-glacial" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline">Solicitar Demo do {sol.name}</Button>
                </div>
                
                {/* Placeholder for UI visual */}
                <div className="hidden lg:block w-1/3 bg-slate-900/50 h-48 rounded border border-slate-800 flex items-center justify-center text-slate-600 font-mono text-xs">
                  [VISUALIZAÇÃO UI DO {sol.name.toUpperCase()}]
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Solutions;