import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o Dr. Virtual, um assistente especialista e empático do suplemento natural "VigorMax Pro".
Seu objetivo é tirar dúvidas de potenciais clientes sobre o produto de forma discreta, profissional e persuasiva, mas ética.

Sobre o VigorMax Pro:
- É um suplemento 100% natural para vitalidade masculina e desempenho.
- Ingredientes principais: Maca Peruana, Tribulus Terrestris, Zinco e Ginseng.
- Benefícios: Aumento de energia, melhora na circulação, mais disposição e vigor.
- Uso: 2 cápsulas por dia, preferencialmente antes das refeições.
- Garantia: 30 dias de satisfação ou dinheiro de volta.
- Contraindicações: Pessoas com problemas cardíacos graves devem consultar médico antes.

Diretrizes de Resposta:
1. Seja curto, direto e educado.
2. Transmita segurança e confiança.
3. NÃO faça diagnósticos médicos complexos. Se o usuário relatar sintomas graves, sugira procurar um médico real.
4. Sempre termine encorajando a compra ou o teste do produto devido à garantia.
5. Responda sempre em Português do Brasil.
`;

export const sendMessageToAI = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "O sistema de chat está momentaneamente indisponível (Chave API não configurada).";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Convert history format if needed, but for simple stateless interaction or single turn we can use generateContent.
    // Here we will use a chat session logic for context awareness.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
      history: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: h.parts
      }))
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text || "Desculpe, não consegui processar sua resposta no momento.";

  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return "Estou tendo dificuldades para conectar ao servidor. Por favor, tente novamente em alguns instantes.";
  }
};