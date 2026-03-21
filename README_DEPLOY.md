# Deploy Guide

## Backend no Render (Recomendado - Free)

1. **Fork este repositório** no GitHub
2. **Vá para render.com** e crie conta
3. **New Web Service → Connect GitHub**
4. **Selecione seu repositório forkado**
5. **Configure:**
   - Name: `dynamic-dock-backend`
   - Branch: `main`
   - Runtime: `Python 3`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

6. **Após deploy**, copie a URL: `https://dynamic-dock-backend.onrender.com`

## Configurar Netlify

1. **Vá para Netlify → Site settings → Environment variables**
2. **Adicione variável:**
   - Key: `REACT_APP_API_URL`
   - Value: `https://dynamic-dock-backend.onrender.com`

3. **Trigger new deploy** no Netlify

## Alternativa: Railway.app

1. **Vá para railway.app**
2. **New Project → Deploy from GitHub repo**
3. **Configure automatic deployment**
4. **URL será**: `https://dynamic-dock-backend.up.railway.app`

## Teste Local (Temporário)

Se quiser testar rápido:

```bash
# Terminal 1 - Backend
cd backend
python main.py

# Terminal 2 - Frontend
cd frontend
npm start
```

E configure no Netlify:
- `REACT_APP_API_URL` = `http://SEU_IP:8000`
