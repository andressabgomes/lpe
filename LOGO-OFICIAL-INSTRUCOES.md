# 📸 Como Adicionar a Logo Oficial da Nacional Gás

## 🎯 **Passos para Implementar:**

### **1. Adicionar a Imagem Oficial**
Coloque a imagem oficial da Nacional Gás na pasta `public/`:

```
public/
├── logo-nacionalgas.png    ← Adicione aqui a imagem oficial
├── favicon.svg
└── placeholder.svg
```

### **2. Formatos Suportados**
- ✅ **PNG** (recomendado para logos com transparência)
- ✅ **JPG** (para logos sem transparência)
- ✅ **SVG** (melhor qualidade e escalabilidade)

### **3. Nome do Arquivo**
Use um dos seguintes nomes:
- `logo-nacionalgas.png`
- `logo-nacionalgas.jpg`
- `logo-nacionalgas.svg`

### **4. Componente Atualizado**
O componente `NacionalGasLogo.tsx` já foi atualizado para usar a imagem:

```tsx
export const NacionalGasLogo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 200, 
  height = 60 
}) => {
  return (
    <img 
      src="/logo-nacionalgas.png" 
      alt="Nacional Gás" 
      width={width} 
      height={height}
      className={className}
    />
  );
};
```

### **5. Como Usar**
```tsx
// Logo padrão
<NacionalGasLogo />

// Logo customizada
<NacionalGasLogo 
  width={300} 
  height={90} 
  className="my-custom-class" 
/>
```

## 🔧 **Se Você Quiser Usar Next.js Image (Opcional)**

Se estiver usando Next.js, pode usar o componente otimizado:

```tsx
import Image from 'next/image';

export const NacionalGasLogo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 200, 
  height = 60 
}) => {
  return (
    <Image 
      src="/logo-nacionalgas.png" 
      alt="Nacional Gás" 
      width={width} 
      height={height}
      className={className}
      priority // Para logos no header
    />
  );
};
```

## 📁 **Estrutura Final**
```
public/
├── logo-nacionalgas.png    ← Sua imagem oficial aqui
├── favicon.svg
└── placeholder.svg

src/components/
└── NacionalGasLogo.tsx     ← Já atualizado
```

## ✅ **Próximos Passos**

1. **Adicione** a imagem oficial em `public/logo-nacionalgas.png`
2. **Teste** a aplicação em http://localhost:8082
3. **Ajuste** o tamanho se necessário via props `width` e `height`

A aplicação está pronta para usar a logo oficial da Nacional Gás! 🎉
