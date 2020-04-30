const authUrl = "https://api.petfinder.com/v2/oauth2/token";
const serviceUrl = "https://api.petfinder.com/v2";

// Ask Marco or Masao about keeping these safe
const apiKey = "LwGIeP1a6wzNz4Lp3INHoN2Imwo0HLcIP1kbqGfaihYV8eXVDg";
const secret = "5cUDxU0lmFHC4bMYbp9vfbfVOV6NPreNOi9OnNcW";

// Okay to cache the token and base URL in memory. Some people like to put it
// in local storage but that can in theory be compromised if the is an XSS
// vulnerability.
let token = undefined;

// Call this with your api key and secret, and it will call the authUrl endpoint
// to get you a token, and it puts the token in memory.
export async function getToken() {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    mode: "cors",
    body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
  };
  fetch(authUrl, config)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      token = response.access_token;
    });
}

// Returns a promise, so add a then/catch chain when you call this
export async function simpleFetch(path, qs = {}) {
  const config = { method: "GET", headers: new Headers(), mode: "cors" };
  config.headers.append("Authorization", `Bearer ${token}`);
  console.log(qs);
  let query = Object.entries(qs || {})
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join("&");
  query = query ? `?${query}` : "";
  console.log(query);
  return fetch(`${serviceUrl}/${path}${query}`, config).then((response) => {
    if (response.ok) {
      return response.json();
    } else if (response.status === 401) {
      // You should get a new token here
    }
    throw new Error(`Server said ${response.status} ${response.statusText}`);
  });
}
