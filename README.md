# sumny.tech

Site pessoal e profissional de **Arthur Sumny Saggin** — estático, multipágina e escrito em HTML, CSS e JavaScript puro (sem dependências externas, build step ou CDN).

## Estrutura de arquivos

- `index.html` — Página principal (apresentação, sobre, trabalho selecionado, outros produtos, stack, agora e contato).
- `projetos.html` — Estudos de caso técnicos (Plataforma multicanal whitelabel + agentes de IA, Pallagi Med e Pront.ai).
- `404.html` — Página de erro 404.
- `styles.css` — Folha de estilos compartilhada (tema papel, tipografia editorial de sistema e grid responsivo).
- `script.js` — Navegação por âncora com compensação de topo, sincronização do índice fixo e menu mobile acessível.
- `assets/curriculo-arthur-sumny.pdf` — Currículo para download.

## Como abrir localmente

Basta abrir `index.html` diretamente no navegador (duplo clique) ou servir a pasta com qualquer servidor HTTP estático:

```bash
python3 -m http.server 8080
```

## Como publicar em Nginx / Dokploy

### 1. Nginx direto

Copie os arquivos do repositório para `/usr/share/nginx/html` (ou o diretório raiz do virtual host) e use a configuração:

```nginx
server {
    listen 80;
    server_name sumny.tech www.sumny.tech;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }

    location ~* \.(css|js|pdf)$ {
        expires 7d;
        add_header Cache-Control "public, no-transform";
    }
}
```

### 2. Dokploy (Container Nginx)

No Dokploy, crie uma aplicação do tipo **Dockerfile** ou **Static / Nginx** apontando para este repositório. Exemplo de `Dockerfile` mínimo caso utilize deploy via container:

```dockerfile
FROM nginx:alpine
COPY index.html projetos.html 404.html styles.css script.js /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
```

Configure o domínio `sumny.tech` com HTTPS (Traefik / Let's Encrypt) no painel do Dokploy apontando para a porta `80` do container.
