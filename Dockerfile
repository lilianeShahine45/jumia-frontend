FROM nginx:alpine
COPY dist/jumia/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf