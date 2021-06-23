class HttpService {
  
  async get(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      
      const json = await res.json();
      
      return json;
    } catch (err) {
      console.log(err.message);
    }
  }

  async post(url, data) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const json = await res.json();

      return json;
    } catch(err) {
      console.log(err.message);
    }
  }
}
