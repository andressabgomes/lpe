import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { Loader2, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { cepService, CEPData, EstadoData } from '../lib/cepService';

export const CEPValidator: React.FC = () => {
  const [cep, setCep] = useState('');
  const [dadosCEP, setDadosCEP] = useState<CEPData | null>(null);
  const [loading, setLoading] = useState(false);
  const [estados, setEstados] = useState<EstadoData[]>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidades, setCidades] = useState<string[]>([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [loadingCidades, setLoadingCidades] = useState(false);

  // Carregar estados ao montar o componente
  useEffect(() => {
    carregarEstados();
  }, []);

  // Carregar cidades quando estado for selecionado
  useEffect(() => {
    if (estadoSelecionado) {
      carregarCidades(estadoSelecionado);
    }
  }, [estadoSelecionado]);

  const carregarEstados = async () => {
    try {
      const estadosData = await cepService.listarEstados();
      setEstados(estadosData);
    } catch (error) {
      console.error('Erro ao carregar estados:', error);
    }
  };

  const carregarCidades = async (estado: string) => {
    setLoadingCidades(true);
    try {
      const cidadesData = await cepService.listarCidadesPorEstado(estado);
      if (cidadesData.success) {
        setCidades(cidadesData.cidades);
      }
    } catch (error) {
      console.error('Erro ao carregar cidades:', error);
    } finally {
      setLoadingCidades(false);
    }
  };

  const buscarCEP = async () => {
    if (!cep) return;

    setLoading(true);
    try {
      const dados = await cepService.validarCEP(cep);
      setDadosCEP(dados);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    } finally {
      setLoading(false);
    }
  };

  const validarEndereco = async () => {
    if (!cidadeSelecionada || !estadoSelecionado) return;

    setLoading(true);
    try {
      const validacao = await cepService.validarEndereco(cidadeSelecionada, estadoSelecionado);
      
      if (validacao.success) {
        setDadosCEP({
          success: true,
          cep: '',
          cidade: validacao.cidade,
          estado: validacao.estado,
          estadoCompleto: validacao.estadoCompleto,
          bairro: '',
          message: validacao.message
        });
      } else {
        setDadosCEP({
          success: false,
          cep: '',
          cidade: '',
          estado: '',
          estadoCompleto: '',
          bairro: '',
          error: validacao.error
        });
      }
    } catch (error) {
      console.error('Erro ao validar endereço:', error);
    } finally {
      setLoading(false);
    }
  };

  const limparFormulario = () => {
    setCep('');
    setDadosCEP(null);
    setEstadoSelecionado('');
    setCidadeSelecionada('');
    setCidades([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-2">
          Validador de CEP e Endereço
        </h1>
        <p className="text-muted-foreground">
          Valide CEPs e endereços brasileiros em tempo real
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Validação por CEP */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Buscar por CEP
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">CEP</label>
              <Input
                type="text"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                maxLength={9}
              />
            </div>
            <Button 
              onClick={buscarCEP} 
              disabled={loading || !cepService.validarFormatoCEP(cep)}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Buscando...
                </>
              ) : (
                'Buscar CEP'
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Validação por Cidade e Estado */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Validar por Cidade e Estado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Estado</label>
              <Select value={estadoSelecionado} onValueChange={setEstadoSelecionado}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o estado" />
                </SelectTrigger>
                <SelectContent>
                  {estados.map((estado) => (
                    <SelectItem key={estado.sigla} value={estado.sigla}>
                      {estado.nome} ({estado.sigla})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Cidade</label>
              <Select 
                value={cidadeSelecionada} 
                onValueChange={setCidadeSelecionada}
                disabled={!estadoSelecionado || loadingCidades}
              >
                <SelectTrigger>
                  <SelectValue placeholder={
                    loadingCidades ? "Carregando cidades..." : 
                    !estadoSelecionado ? "Selecione um estado primeiro" : 
                    "Selecione a cidade"
                  } />
                </SelectTrigger>
                <SelectContent>
                  {cidades.map((cidade) => (
                    <SelectItem key={cidade} value={cidade}>
                      {cidade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={validarEndereco} 
              disabled={loading || !cidadeSelecionada || !estadoSelecionado}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Validando...
                </>
              ) : (
                'Validar Endereço'
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Resultado */}
      {dadosCEP && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {dadosCEP.success ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              Resultado da Validação
            </CardTitle>
          </CardHeader>
          <CardContent>
            {dadosCEP.success ? (
              <div className="space-y-3">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    {dadosCEP.message || 'Endereço válido!'}
                  </AlertDescription>
                </Alert>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dadosCEP.cep && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">CEP</label>
                      <p className="text-lg font-semibold">{dadosCEP.cep}</p>
                    </div>
                  )}
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Cidade</label>
                    <p className="text-lg font-semibold">{dadosCEP.cidade}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Estado</label>
                    <p className="text-lg font-semibold">{dadosCEP.estado} - {dadosCEP.estadoCompleto}</p>
                  </div>
                  
                  {dadosCEP.bairro && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Bairro</label>
                      <p className="text-lg font-semibold">{dadosCEP.bairro}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertDescription>
                  {dadosCEP.error || 'Erro na validação'}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}

      {/* Botão para limpar */}
      {(dadosCEP || cep || estadoSelecionado || cidadeSelecionada) && (
        <div className="text-center">
          <Button variant="outline" onClick={limparFormulario}>
            Limpar Formulário
          </Button>
        </div>
      )}
    </div>
  );
};
