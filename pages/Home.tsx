import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Cpu, Globe, Layers, BarChart3, Activity, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 grid-bg z-0 opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kaltra-graphite via-transparent to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kaltra-glacial/30 bg-kaltra-glacial/5 text-kaltra-glacial text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kaltra-glacial opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-kaltra-glacial"></span>
                </span>
                SYSTEM STATUS: ONLINE
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                Digital Twin.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-kaltra-glacial to-white">
                  Precisão Absoluta.
                </span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                A plataforma deeptech que cria réplicas digitais vivas de ecossistemas agrícolas. 
                Simule o futuro da sua safra com modelos físico-químicos e IA preditiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" icon onClick={() => onNavigate(Page.SOLUTIONS)}>Explorar Plataforma</Button>
                <Button variant="outline" onClick={() => onNavigate(Page.TECHNOLOGY)}>Conhecer o Engine</Button>
              </div>
            </div>
            
            {/* Visual Abstract Representation of Digital Twin */}
            <div className="relative h-[500px] w-full hidden lg:block animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-kaltra-glacial/20 to-transparent rounded-full blur-3xl opacity-20"></div>
              <div className="relative border border-slate-700 bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl shadow-2xl border-l-4 border-l-kaltra-glacial">
                 {/* Mock UI */}
                 <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                    <span className="text-xs font-mono text-kaltra-glacial">KALTRA.ENGINE.V3</span>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                 </div>
                 <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                        <p className="text-xs text-slate-400 mb-1">UMIDADE DO SOLO</p>
                        <p className="text-xl font-mono text-white">24.8%</p>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                        <p className="text-xs text-slate-400 mb-1">PREVISÃO SAFRA</p>
                        <p className="text-xl font-mono text-kaltra-glacial">↑ 12%</p>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                        <p className="text-xs text-slate-400 mb-1">RISCO BIOLÓGICO</p>
                        <p className="text-xl font-mono text-green-400">BAIXO</p>
                    </div>
                 </div>
                 <div className="h-48 w-full bg-slate-800/30 rounded border border-slate-700 relative overflow-hidden flex items-end">
                    {/* Mock Chart */}
                    <div className="w-full flex items-end justify-between px-2 pb-2 gap-1">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
                            <div key={i} style={{height: `${h}%`}} className="w-full bg-kaltra-glacial/50 hover:bg-kaltra-glacial transition-all rounded-sm"></div>
                        ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Trust Bar */}
      <div className="border-y border-kaltra-border bg-kaltra-panel/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { label: "Hectares Monitorados", value: "+2.5M" },
                    { label: "Pontos de Dados/Dia", value: "150MM" },
                    { label: "Precisão Preditiva", value: "98.4%" },
                    { label: "Safras Simuladas", value: "+12k" },
                ].map((stat, i) => (
                    <div key={i}>
                        <p className="text-3xl font-bold text-white font-mono">{stat.value}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Kaltra Engine Section */}
      <Section className="bg-kaltra-graphite">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Motor Tecnológico</h2>
          <p className="text-slate-400 text-lg">
            O Kaltra Engine processa terabytes de dados satelitais, sensores IoT e modelos climáticos para gerar insights acionáveis em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="w-8 h-8 text-kaltra-glacial" />,
              title: "Geointeligência",
              desc: "Mapeamento espectral de alta resolução para identificação de anomalias nutricionais e hídricas."
            },
            {
              icon: <Cpu className="w-8 h-8 text-kaltra-glacial" />,
              title: "Simulação Fenológica",
              desc: "Algoritmos que replicam o ciclo de vida da planta digitalmente para prever estágios de maturação."
            },
            {
              icon: <Layers className="w-8 h-8 text-kaltra-glacial" />,
              title: "Digital Twin de Solo",
              desc: "Modelagem tridimensional das camadas do solo, integrando dados físicos, químicos e biológicos."
            }
          ].map((card, idx) => (
            <div key={idx} className="group p-8 bg-kaltra-panel border border-kaltra-border rounded-lg hover:border-kaltra-glacial/50 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6 p-3 bg-kaltra-graphite border border-slate-800 w-fit rounded-lg group-hover:text-kaltra-glacial transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solutions Teaser */}
      <Section className="bg-gradient-to-b from-kaltra-panel to-kaltra-graphite">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ecossistema de Soluções</h2>
                <p className="text-slate-400">Tecnologia modular para cada etapa da cadeia produtiva.</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" onClick={() => onNavigate(Page.SOLUTIONS)}>Ver todas as soluções</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 h-80">
                 <img src="https://picsum.photos/800/600?grayscale&blur=2" alt="Agro" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Kaltra Twin <ArrowUpRight size={20} className="text-kaltra-glacial"/></h3>
                    <p className="text-slate-300 max-w-md">O gêmeo digital completo da sua propriedade. Simule cenários e antecipe resultados com meses de antecedência.</p>
                 </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 h-80">
                 <img src="https://picsum.photos/800/601?grayscale&blur=2" alt="Soil" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Kaltra Predict <ArrowUpRight size={20} className="text-kaltra-glacial"/></h3>
                    <p className="text-slate-300 max-w-md">Inteligência Artificial para estimativa de produtividade e recomendação precisa de insumos.</p>
                 </div>
            </div>
        </div>
      </Section>

      {/* DeepTech DNA */}
      <Section>
        <div className="rounded-2xl bg-kaltra-panel border border-kaltra-border p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Activity size={200} className="text-white" />
            </div>
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">DNA Científico. <br/>Execução Industrial.</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    Não somos apenas um software de gestão. A Kaltra nasceu dentro de laboratórios de bioengenharia e ciência de dados.
                    Transformamos papers acadêmicos em algoritmos proprietários que reduzem o risco climático e operacional.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-kaltra-glacial rounded-full"></div>
                        Modelagem 3D de Solo
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-kaltra-glacial rounded-full"></div>
                        Processamento em Edge Computing
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-kaltra-glacial rounded-full"></div>
                        Imagens Hiperespectrais
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-kaltra-glacial rounded-full"></div>
                        IA Generativa para Relatórios
                    </li>
                </ul>
                <Button variant="primary" onClick={() => onNavigate(Page.ABOUT)}>Conheça nossa História</Button>
            </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="text-center py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para o futuro da agricultura?</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Solicite uma demonstração do Kaltra Engine e veja como o Digital Twin pode aumentar sua rentabilidade em até 15%.
        </p>
        <Button variant="primary" className="px-10 py-4 text-lg" onClick={() => onNavigate(Page.CONTACT)}>
          Agendar Demonstração Técnica
        </Button>
      </Section>
    </>
  );
};

export default Home;