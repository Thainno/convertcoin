export const formatCurrencyInput = (value: string): string => {
    // Remove tudo exceto números e ponto decimal
    let formattedValue = value.replace(/[^\d.]/g, '');
    
    // Remove pontos extras, mantendo apenas o primeiro
    const parts = formattedValue.split('.');
    if (parts.length > 2) {
      formattedValue = parts[0] + '.' + parts.slice(1).join('');
    }
    
    // Limita a 2 casas decimais
    if (parts.length === 2) {
      formattedValue = parts[0] + '.' + parts[1].slice(0, 2);
    }
    
    return formattedValue;
  };
  
  export const displayCurrency = (value: string): string => {
    const num = parseFloat(value || '0');
    return num.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };