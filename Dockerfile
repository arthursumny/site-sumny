FROM nginx:1.27-alpine

# Site estático: copia o conteúdo e a configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html projetos.html 404.html styles.css script.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
