import * as React from "react";

type LogoVariant = "original" | "svg";

export type NacionalGasLogoProps = {
  /** Usa a imagem original oficial (padrão) ou o SVG anterior do projeto */
  variant?: LogoVariant;
  /** Largura desejada em px (default 200) */
  width?: number;
  /** Altura desejada em px (default 60) */
  height?: number;
  /** Classe CSS opcional */
  className?: string;
  /** Texto para acessibilidade (lido por leitores de tela) */
  ariaLabel?: string;
  /** Caminho customizado da imagem original, se necessário */
  src?: string;
};

/**
 * Componente de logo da Nacional Gás.
 * - variant="original": renderiza a imagem oficial (PNG) a partir de /assets/brand/nacionalgas-logo.png
 * - variant="svg": renderiza o SVG anterior para compatibilidade
 */
export const NacionalGasLogo: React.FC<NacionalGasLogoProps> = ({
  variant = "original",
  width = 200,
  height = 60,
  className,
  ariaLabel = "Nacional Gás",
  src = "/assets/brand/nacionalgas-logo.png",
}) => {
  if (variant === "svg") {
    // === SVG PREEXISTENTE DO PROJETO ===
    return (
      <svg
        role="img"
        aria-label={ariaLabel}
        width={width}
        height={height}
        viewBox="0 0 200 60"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Red background rectangle */}
        <rect width="140" height="60" fill="#DC2626"/>
        
        {/* Text "NACIONALGÁS" in white */}
        <text
          x="20"
          y="35"
          fontFamily="Arial, sans-serif"
          fontSize="18"
          fontWeight="bold"
          fill="white"
          textAnchor="start"
          dominantBaseline="middle"
        >
          NACIONALGÁS
        </text>
        
        {/* Blue square background */}
        <rect x="140" y="0" width="60" height="60" fill="#2563EB"/>
        
        {/* White octagon outline */}
        <polygon
          points="160,15 170,15 175,20 175,30 170,35 160,35 155,30 155,20"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        
        {/* Red inner shape (stylized gas cylinder) */}
        <path d="M162,18 L168,18 L171,21 L171,29 L168,32 L162,32 L159,29 L159,21 Z" fill="#DC2626" stroke="white" strokeWidth="1"/>
        
        {/* White "1" inside the red shape */}
        <rect x="163" y="22" width="4" height="8" fill="white"/>
        <rect x="161" y="20" width="8" height="2" fill="white"/>
        <rect x="161" y="32" width="8" height="2" fill="white"/>
      </svg>
    );
  }

  // === IMAGEM OFICIAL ORIGINAL (RECOMENDADO) ===
  return (
    <img
      src={src}
      alt={ariaLabel}
      width={width}
      height={height}
      className={`inline-block ${className || ''}`}
      loading="eager"
      decoding="async"
    />
  );
};

export default NacionalGasLogo;