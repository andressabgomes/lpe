import React from 'react';
import { NacionalGasLogo } from './NacionalGasLogo';
import { Button } from './ui/button';
import { Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onCTAClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  return (
    <header className="bg-neutral-0 shadow-soft border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <NacionalGasLogo variant="original" width={200} height={60} />
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-3 bg-neutral-100 px-4 py-2 rounded-lg">
              <Phone className="w-4 h-4 text-brand-red" />
              <span className="text-neutral-700 font-medium">0800 702 1200</span>
            </div>
            <div className="flex items-center space-x-3 bg-neutral-100 px-4 py-2 rounded-lg">
              <Mail className="w-4 h-4 text-brand-blue" />
              <span className="text-neutral-700 font-medium">contato@nacionalgas.com.br</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button 
              onClick={onCTAClick}
              className="dashboard-button-primary font-bold px-6 py-3"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
