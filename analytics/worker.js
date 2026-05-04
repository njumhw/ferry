export default {
  async fetch(request, env) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    const url = new URL(request.url);

    if (url.pathname === '/wishes') {
      if (request.method === 'POST') {
        const body = await request.json().catch(() => null);
        if (!body || !body.url || !body.url.trim()) {
          return new Response(JSON.stringify({ error: 'url required' }), { status: 400, headers });
        }
        const wishes = JSON.parse(await env.COUNTER.get('wishes') || '[]');
        wishes.push({ url: body.url.trim(), note: (body.note || '').trim(), time: new Date().toISOString() });
        await env.COUNTER.put('wishes', JSON.stringify(wishes));
        return new Response(JSON.stringify({ ok: true, total: wishes.length }), { headers });
      }
      const wishes = JSON.parse(await env.COUNTER.get('wishes') || '[]');
      return new Response(JSON.stringify(wishes), { headers });
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
