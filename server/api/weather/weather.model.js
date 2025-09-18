import fs from 'fs';
import path from 'path';

const REQUESTS_FILE = path.resolve('server/db/requests.json');

if (!fs.existsSync(REQUESTS_FILE)) fs.writeFileSync(REQUESTS_FILE, JSON.stringify([]));


export async function logRequest(location, ip) {
  const requests = JSON.parse(fs.readFileSync(REQUESTS_FILE));
  const reqId = requests.length + 1;
  requests.push({ id: reqId, location, ip, status: "pending", timestamp: new Date(), response: null });
  fs.writeFileSync(REQUESTS_FILE, JSON.stringify(requests, null, 2));
  return reqId;
}

export async function updateRequest(reqId, status, response) {
  const requests = JSON.parse(fs.readFileSync(REQUESTS_FILE));
  const reqIndex = requests.findIndex(r => r.id === reqId);
  if (reqIndex !== -1) {
    requests[reqIndex].status = status;
    requests[reqIndex].response = response;
    fs.writeFileSync(REQUESTS_FILE, JSON.stringify(requests, null, 2));
  }
}

export async function getRecentRequests() {
  const requests = JSON.parse(fs.readFileSync(REQUESTS_FILE));
  return requests.slice(-10).reverse();
}