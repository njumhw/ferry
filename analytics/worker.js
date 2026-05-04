export default {
  async fetch(request, env) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Content-Type': 'application/json',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    const count = parseInt(await env.COUNTER.get('likes') || '0');

    if (request.method === 'POST') {
      const newCount = count + 1;
      await env.COUNTER.put('likes', String(newCount));
      return new Response(JSON.stringify({ count: newCount }), { headers });
    }

    return new Response(JSON.stringify({ count }), { headers });
  }
};
