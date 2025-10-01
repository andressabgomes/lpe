import React from 'react';
import { NacionalGasLogo } from './NacionalGasLogo';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-0">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <NacionalGasLogo variant="original" width={200} height={60} />
            </div>
            <p className="text-neutral-300 mb-4 max-w-md">
              Soluções em GLP para indústria e agronegócio. Mais eficiência, 
              segurança e competitividade para o seu negócio.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-red" />
                <span className="text-neutral-300">0800 702 1200</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-red" />
                <span className="text-neutral-300">contato@nacionalgas.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span className="text-neutral-300">Fortaleza, CE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-red" />
                <span className="text-neutral-300">Seg-Sex: 8h-18h</span>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• GLP Industrial</li>
              <li>• GLP Agronegócio</li>
              <li>• Consultoria Técnica</li>
              <li>• Manutenção Preventiva</li>
              <li>• Suporte 24/7</li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-neutral-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-neutral-400 text-sm">
                Copyright © 1951-2025. Nacional Gás - CNPJ: 06.980.064/0001-82 - Todos os direitos reservados
              </p>
              <p className="text-neutral-400 text-sm mt-1">
                Praça da Imprensa Chanceler Edson Queiroz, 60,135-690, Dionísio Torres, Fortaleza-CE
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <div className="flex space-x-6">
                <a href="#" className="text-neutral-400 hover:text-neutral-0 text-sm transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-neutral-400 hover:text-neutral-0 text-sm transition-colors">
                  Termos de Uso
                </a>
              </div>
              <div className="text-neutral-500 text-xs">
                Feito por <a href="https://github.com/andressabgomes" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:text-brand-red/80 transition-colors">@andressabgomes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
