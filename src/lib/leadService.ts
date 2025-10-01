// Serviço para captura e envio de leads
export interface LeadData {
  nome: string;
  email: string;
  telefone: string;
  cnpj: string;
  cidade: string;
  estado: string;
  razaoSocial?: string;
  cargo?: string;
  segmento?: string;
  porte?: string;
  businessType: string;
  product: string;
  timestamp: string;
  source: string;
}

// Configurações para envio de email (configure com seus dados)
const EMAIL_CONFIG = {
  // Para EmailJS (gratuito e recomendado)
  emailjsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_d417gnn',
  emailjsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_4vb5y4c',
  emailjsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Ks9L5IhgpTINqOOCY',
  
  // Para SendGrid
  sendGridApiKey: import.meta.env.VITE_SENDGRID_API_KEY,
  fromEmail: 'noreply@nacionalgas.com.br',
  toEmail: 'andressabgomes10@gmail.com',
  
  // Para Mailgun
  mailgunApiKey: import.meta.env.VITE_MAILGUN_API_KEY,
  mailgunDomain: import.meta.env.VITE_MAILGUN_DOMAIN,
  
  // Para webhook/CRM (removido n8n)
  webhookUrl: import.meta.env.VITE_WEBHOOK_URL,
};

// Função para enviar lead via EmailJS (gratuito e fácil)
export const sendLeadViaEmailJS = async (leadData: LeadData): Promise<boolean> => {
  if (!EMAIL_CONFIG.emailjsServiceId || !EMAIL_CONFIG.emailjsTemplateId || !EMAIL_CONFIG.emailjsPublicKey) {
    console.warn('⚠️ EmailJS não configurado');
    return false;
  }

  try {
    // Carregar EmailJS dinamicamente
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      to_email: EMAIL_CONFIG.toEmail,
      from_name: 'Nacional Gás - Landing Page',
      lead_name: leadData.nome,
      lead_email: leadData.email,
      lead_phone: leadData.telefone,
      lead_cnpj: leadData.cnpj,
      lead_city: leadData.cidade,
      lead_state: leadData.estado,
      lead_company: leadData.razaoSocial || '',
      lead_role: leadData.cargo || '',
      lead_segment: leadData.segmento || '',
      lead_size: leadData.porte || '',
      business_type: leadData.businessType,
      product: leadData.product,
      timestamp: new Date(leadData.timestamp).toLocaleString('pt-BR'),
      message: generateTextEmail(leadData)
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.emailjsServiceId,
      EMAIL_CONFIG.emailjsTemplateId,
      templateParams,
      EMAIL_CONFIG.emailjsPublicKey
    );

    if (response.status === 200) {
      console.log('✅ Lead enviado via EmailJS');
      return true;
    } else {
      console.error('❌ Erro ao enviar via EmailJS:', response);
      return false;
    }
  } catch (error) {
    console.error('❌ Erro na requisição EmailJS:', error);
    return false;
  }
};

// Função para enviar lead via SendGrid
export const sendLeadViaSendGrid = async (leadData: LeadData): Promise<boolean> => {
  if (!EMAIL_CONFIG.sendGridApiKey) {
    console.warn('⚠️ SendGrid API Key não configurada');
    return false;
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMAIL_CONFIG.sendGridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: EMAIL_CONFIG.toEmail }],
          subject: `Novo Lead - ${leadData.nome} - ${leadData.businessType}`,
        }],
        from: { email: EMAIL_CONFIG.fromEmail },
        content: [{
          type: 'text/html',
          value: generateEmailTemplate(leadData),
        }],
      }),
    });

    if (response.ok) {
      console.log('✅ Lead enviado via SendGrid');
      return true;
    } else {
      console.error('❌ Erro ao enviar via SendGrid:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('❌ Erro na requisição SendGrid:', error);
    return false;
  }
};

// Função para enviar lead via Mailgun
export const sendLeadViaMailgun = async (leadData: LeadData): Promise<boolean> => {
  if (!EMAIL_CONFIG.mailgunApiKey || !EMAIL_CONFIG.mailgunDomain) {
    console.warn('⚠️ Mailgun API Key ou Domain não configurados');
    return false;
  }

  try {
    const formData = new FormData();
    formData.append('from', EMAIL_CONFIG.fromEmail);
    formData.append('to', EMAIL_CONFIG.toEmail);
    formData.append('subject', `Novo Lead - ${leadData.nome} - ${leadData.businessType}`);
    formData.append('html', generateEmailTemplate(leadData));

    const response = await fetch(`https://api.mailgun.net/v3/${EMAIL_CONFIG.mailgunDomain}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${EMAIL_CONFIG.mailgunApiKey}`)}`,
      },
      body: formData,
    });

    if (response.ok) {
      console.log('✅ Lead enviado via Mailgun');
      return true;
    } else {
      console.error('❌ Erro ao enviar via Mailgun:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('❌ Erro na requisição Mailgun:', error);
    return false;
  }
};

// Função para enviar lead via webhook (n8n)
export const sendLeadViaWebhook = async (leadData: LeadData): Promise<boolean> => {
  if (!EMAIL_CONFIG.webhookUrl) {
    console.warn('⚠️ Webhook URL não configurada');
    return false;
  }

  try {
    // Preparar dados no formato ideal para n8n
    const webhookPayload = {
      // Dados principais
      lead: {
        nome: leadData.nome,
        email: leadData.email,
        telefone: leadData.telefone,
        cnpj: leadData.cnpj,
        cidade: leadData.cidade,
        estado: leadData.estado,
        razaoSocial: leadData.razaoSocial || '',
        cargo: leadData.cargo || '',
        segmento: leadData.segmento || '',
        porte: leadData.porte || '',
      },
      
      // Informações de segmentação
      business: {
        tipo: leadData.businessType,
        produto: leadData.product,
      },
      
      // Metadados
      metadata: {
        timestamp: leadData.timestamp,
        dataFormatada: new Date(leadData.timestamp).toLocaleString('pt-BR'),
        source: leadData.source,
        url: window.location.href,
        userAgent: navigator.userAgent,
      },
      
      // Dados para email (formatação para n8n)
      emailData: {
        subject: `🎯 Novo Lead - ${leadData.nome} - ${leadData.businessType}`,
        to: EMAIL_CONFIG.toEmail,
        from: EMAIL_CONFIG.fromEmail,
        html: generateEmailTemplate(leadData),
        text: generateTextEmail(leadData),
      },
      
      // Dados estruturados para CRM
      crmData: {
        contact: {
          firstName: leadData.nome.split(' ')[0],
          lastName: leadData.nome.split(' ').slice(1).join(' '),
          email: leadData.email,
          phone: leadData.telefone,
          company: leadData.razaoSocial || '',
          city: leadData.cidade,
          state: leadData.estado,
          country: 'Brasil',
        },
        deal: {
          name: `Lead Nacional Gás - ${leadData.nome}`,
          amount: 0,
          stage: 'novo_lead',
          source: 'landing_page',
          product: leadData.product,
          businessType: leadData.businessType,
        },
        customFields: {
          cnpj: leadData.cnpj,
          cargo: leadData.cargo || '',
          segmento: leadData.segmento || '',
          porte: leadData.porte || '',
        }
      }
    };

    console.log('📡 Enviando dados para n8n webhook:', webhookPayload);

    const response = await fetch(EMAIL_CONFIG.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Source': 'nacional-gas-landing',
        'X-Webhook-Version': '1.0',
      },
      body: JSON.stringify(webhookPayload),
    });

    if (response.ok) {
      const responseData = await response.json().catch(() => ({}));
      console.log('✅ Lead enviado via Webhook (n8n):', responseData);
      return true;
    } else {
      const errorText = await response.text();
      console.error('❌ Erro ao enviar via Webhook:', response.status, errorText);
      return false;
    }
  } catch (error) {
    console.error('❌ Erro na requisição Webhook:', error);
    return false;
  }
};

// Template de texto simples para email
const generateTextEmail = (leadData: LeadData): string => {
  return `
🎯 NOVO LEAD CAPTURADO - Nacional Gás

📅 Data/Hora: ${new Date(leadData.timestamp).toLocaleString('pt-BR')}

👤 DADOS DO CLIENTE:
Nome: ${leadData.nome}
Email: ${leadData.email}
Telefone: ${leadData.telefone}
CNPJ: ${leadData.cnpj}
Cidade: ${leadData.cidade}
Estado: ${leadData.estado}

🏢 INFORMAÇÕES DO NEGÓCIO:
Tipo de Negócio: ${leadData.businessType}
Produto Selecionado: ${leadData.product}

${leadData.razaoSocial || leadData.cargo || leadData.segmento || leadData.porte ? `
📊 INFORMAÇÕES ADICIONAIS:
${leadData.razaoSocial ? `Razão Social: ${leadData.razaoSocial}` : ''}
${leadData.cargo ? `Cargo: ${leadData.cargo}` : ''}
${leadData.segmento ? `Segmento: ${leadData.segmento}` : ''}
${leadData.porte ? `Porte: ${leadData.porte}` : ''}
` : ''}

⚡ AÇÃO NECESSÁRIA: Entre em contato com este lead o mais rápido possível!

---
Fonte: ${leadData.source}
URL: ${window.location.href}
  `.trim();
};

// Template HTML para email
const generateEmailTemplate = (leadData: LeadData): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">🎯 Novo Lead Capturado - Nacional Gás</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">📋 Informações do Lead</h3>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Nome:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${leadData.nome}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${leadData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Telefone:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${leadData.telefone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>CNPJ:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${leadData.cnpj}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Cidade/Estado:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${leadData.cidade}/${leadData.estado}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Tipo de Negócio:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${leadData.businessType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Produto:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${leadData.product}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Data/Hora:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${new Date(leadData.timestamp).toLocaleString('pt-BR')}</td>
          </tr>
        </table>
      </div>

      ${leadData.razaoSocial || leadData.cargo || leadData.segmento || leadData.porte ? `
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0369a1; margin-top: 0;">📊 Informações Adicionais</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${leadData.razaoSocial ? `
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #bae6fd;"><strong>Razão Social:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #bae6fd;">${leadData.razaoSocial}</td>
              </tr>
            ` : ''}
            ${leadData.cargo ? `
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #bae6fd;"><strong>Cargo:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #bae6fd;">${leadData.cargo}</td>
              </tr>
            ` : ''}
            ${leadData.segmento ? `
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #bae6fd;"><strong>Segmento:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #bae6fd;">${leadData.segmento}</td>
              </tr>
            ` : ''}
            ${leadData.porte ? `
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #bae6fd;"><strong>Porte:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #bae6fd;">${leadData.porte}</td>
              </tr>
            ` : ''}
          </table>
        </div>
      ` : ''}

      <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #92400e;">
          <strong>⚡ Ação Necessária:</strong> Entre em contato com este lead o mais rápido possível para maximizar a conversão!
        </p>
      </div>
    </div>
  `;
};

// Função principal para processar lead (envio direto de email)
export const processLead = async (leadData: LeadData): Promise<boolean> => {
  console.group("🚀 PROCESSANDO LEAD");
  
  // Métodos de envio de email direto
  const methods = [
    { name: 'EmailJS', fn: sendLeadViaEmailJS },
    { name: 'SendGrid', fn: sendLeadViaSendGrid },
    { name: 'Mailgun', fn: sendLeadViaMailgun },
  ];

  for (const method of methods) {
    try {
      const success = await method.fn(leadData);
      if (success) {
        console.log(`✅ Lead enviado com sucesso via ${method.name}`);
        console.groupEnd();
        return true;
      }
    } catch (error) {
      console.error(`❌ Erro ao enviar via ${method.name}:`, error);
    }
  }

  console.warn('⚠️ Nenhum método de envio funcionou, dados salvos localmente');
  console.groupEnd();
  return false;
};
