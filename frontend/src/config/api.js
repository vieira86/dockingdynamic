const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  uploadPDB: `${API_BASE_URL}/api/upload-pdb`,
  fetchPDB: (pdbId) => `${API_BASE_URL}/api/fetch-pdb/${pdbId}`,
  dock: `${API_BASE_URL}/api/dock`,
  download: (path) => `${API_BASE_URL}/api${path}`
};

export default API_BASE_URL;
