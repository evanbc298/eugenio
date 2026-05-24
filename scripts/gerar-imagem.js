const https = require('https');
const fs = require('fs');
const path = require('path');

const apiKey = process.env.OPENAI_API_KEY;
const prompt = process.argv[2];
const outputPath = process.argv[3];

if (!prompt || !outputPath) {
  console.error('Uso: node gerar-imagem.js "prompt em inglês" "caminho/saida.png"');
  process.exit(1);
}

const body = JSON.stringify({
  model: 'gpt-image-1',
  prompt,
  n: 1,
  size: '1024x1536',
  quality: 'high'
});

const options = {
  hostname: 'api.openai.com',
  path: '/v1/images/generations',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'Content-Length': Buffer.byteLength(body)
  }
};

console.log('Gerando imagem...');

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.error) { console.error('Erro:', json.error.message); process.exit(1); }
      const b64 = json.data[0].b64_json;
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(outputPath, Buffer.from(b64, 'base64'));
      console.log(`Salvo em: ${outputPath}`);
    } catch (e) { console.error('Erro ao processar resposta:', e.message); }
  });
});

req.on('error', e => console.error('Erro de rede:', e.message));
req.write(body);
req.end();
