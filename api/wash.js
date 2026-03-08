export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.VECTORENGINE_API_KEY;
  const apiBase = process.env.API_BASE_URL || 'https://api.vectorengine.ai';
  const apiModel = process.env.API_MODEL || 'gpt-5.4';

  if (!apiKey) {
    return res.status(500).json({ error: '未配置 API Key，请在 Vercel 后台设置环境变量 VECTORENGINE_API_KEY' });
  }

  const { messages, system, model, max_tokens } = req.body;

  try {
    let finalMessages = messages || [];
    if (system) {
      finalMessages = [{ role: 'system', content: system }, ...finalMessages];
    }

    const upstream = await fetch(`${apiBase}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model || apiModel,
        max_tokens: max_tokens || 2000,
        messages: finalMessages,
      }),
    });

    const data = await upstream.json();
    return res.status(upstream.ok ? 200 : upstream.status).json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).json({ error: err.message });
  }
}