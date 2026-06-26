export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;

    // Serve index.html for directory requests
    if (path.endsWith('/')) {
      url.pathname = path + 'index.html';
    }

    return env.ASSETS.fetch(url.toString());
  }
};
