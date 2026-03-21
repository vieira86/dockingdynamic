# Dynamic Dock Backend

Backend API para molecular docking usando AutoDock Vina.

## Deploy no Render

1. Crie novo repositório no GitHub
2. Copie apenas a pasta `backend/` para este repositório
3. No Render.com: New Web Service → Connect GitHub
4. Configure:
   - **Name**: `dynamic-dock-backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

## Estrutura
```
backend/
├── app/
│   ├── main.py
│   └── ...
├── requirements.txt
├── Dockerfile
└── .gitignore
```

## API Endpoints

- `POST /api/upload-pdb` - Upload de arquivo PDB
- `GET /api/fetch-pdb/{pdb_id}` - Buscar PDB do banco
- `POST /api/dock` - Executar docking molecular

## Variáveis de Ambiente

- `PORT` - Porta do servidor (configurada automaticamente pelo Render)
