import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-10">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fale com um Especialista
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              A Kaltra opera principalmente em modelo Enterprise. Agende uma reunião técnica para entendermos como modelar o Digital Twin da sua operação.
            </p>
            
            <div className="space-y-6">
                <div className="bg-kaltra-panel p-6 border-l-2 border-kaltra-glacial">
                    <h3 className="text-white font-bold mb-1">Vendas Enterprise</h3>
                    <p className="text-slate-400 text-sm">Para grupos agrícolas acima de 5.000ha e cooperativas.</p>
                    <p className="text-kaltra-glacial mt-2">sales@kaltra.ai</p>
                </div>
                <div className="bg-kaltra-panel p-6 border-l-2 border-slate-600">
                    <h3 className="text-white font-bold mb-1">Suporte Técnico</h3>
                    <p className="text-slate-400 text-sm">Para clientes ativos e parceiros de integração.</p>
                    <p className="text-white mt-2">support@kaltra.ai</p>
                </div>
            </div>
          </div>

          <div className="bg-kaltra-panel p-8 rounded-lg border border-kaltra-border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
                        <input type="text" className="w-full bg-kaltra-graphite border border-slate-700 rounded p-3 text-white focus:border-kaltra-glacial focus:ring-1 focus:ring-kaltra-glacial outline-none transition-colors" placeholder="Seu nome" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Empresa</label>
                        <input type="text" className="w-full bg-kaltra-graphite border border-slate-700 rounded p-3 text-white focus:border-kaltra-glacial focus:ring-1 focus:ring-kaltra-glacial outline-none transition-colors" placeholder="Nome da Fazenda/Grupo" />
                    </div>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Corporativo</label>
                    <input type="email" className="w-full bg-kaltra-graphite border border-slate-700 rounded p-3 text-white focus:border-kaltra-glacial focus:ring-1 focus:ring-kaltra-glacial outline-none transition-colors" placeholder="voce@empresa.com" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Área Total (ha)</label>
                    <select className="w-full bg-kaltra-graphite border border-slate-700 rounded p-3 text-white focus:border-kaltra-glacial focus:ring-1 focus:ring-kaltra-glacial outline-none transition-colors">
                        <option>Selecione...</option>
                        <option>1.000 - 5.000 ha</option>
                        <option>5.000 - 20.000 ha</option>
                        <option>+20.000 ha</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Mensagem</label>
                    <textarea rows={4} className="w-full bg-kaltra-graphite border border-slate-700 rounded p-3 text-white focus:border-kaltra-glacial focus:ring-1 focus:ring-kaltra-glacial outline-none transition-colors" placeholder="Conte-nos sobre seus desafios atuais..."></textarea>
                </div>

                <Button className="w-full" variant="primary">Solicitar Contato</Button>
                <p className="text-xs text-slate-500 text-center mt-4">Seus dados estão protegidos. Entraremos em contato em até 24h.</p>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;