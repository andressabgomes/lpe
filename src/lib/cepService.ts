// Serviço para integração com a API de CEP
const API_BASE_URL = 'http://localhost:3001/api';

export interface CEPData {
  success: boolean;
  cep: string;
  cidade: string;
  estado: string;
  estadoCompleto: string;
  bairro: string;
  error?: string;
}

export interface EstadoData {
  sigla: string;
  nome: string;
}

export interface CidadeData {
  success: boolean;
  estado: string;
  estadoCompleto: string;
  cidades: string[];
  error?: string;
}

export interface EnderecoValidation {
  success: boolean;
  cidade: string;
  estado: string;
  estadoCompleto: string;
  message?: string;
  error?: string;
}

class CEPService {
  /**
   * Valida um CEP e retorna os dados do endereço
   */
  async validarCEP(cep: string): Promise<CEPData> {
    try {
      const cepLimpo = cep.replace(/\D/g, '');
      const response = await fetch(`${API_BASE_URL}/cep/${cepLimpo}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        cep: '',
        cidade: '',
        estado: '',
        estadoCompleto: '',
        bairro: '',
        error: 'Erro na conexão com a API'
      };
    }
  }

  /**
   * Busca CEPs por cidade e estado
   */
  async buscarCEPsPorCidade(cidade: string, estado: string): Promise<any> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/cep?cidade=${encodeURIComponent(cidade)}&estado=${estado.toUpperCase()}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: 'Erro na conexão com a API'
      };
    }
  }

  /**
   * Lista todas as cidades de um estado
   */
  async listarCidadesPorEstado(estado: string): Promise<CidadeData> {
    try {
      const response = await fetch(`${API_BASE_URL}/cidades/${estado.toUpperCase()}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        estado: '',
        estadoCompleto: '',
        cidades: [],
        error: 'Erro na conexão com a API'
      };
    }
  }

  /**
   * Lista todos os estados brasileiros
   */
  async listarEstados(): Promise<EstadoData[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/estados`);
      const data = await response.json();
      return data.success ? data.estados : [];
    } catch (error) {
      return [];
    }
  }

  /**
   * Valida se uma cidade e estado são válidos
   */
  async validarEndereco(cidade: string, estado: string): Promise<EnderecoValidation> {
    try {
      const response = await fetch(`${API_BASE_URL}/validar-endereco`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cidade, estado })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        cidade: '',
        estado: '',
        estadoCompleto: '',
        error: 'Erro na conexão com a API'
      };
    }
  }

  /**
   * Formata CEP para exibição
   */
  formatarCEP(cep: string): string {
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      return cepLimpo.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    return cepLimpo;
  }

  /**
   * Valida formato do CEP
   */
  validarFormatoCEP(cep: string): boolean {
    const cepLimpo = cep.replace(/\D/g, '');
    return /^\d{8}$/.test(cepLimpo);
  }
}

export const cepService = new CEPService();
