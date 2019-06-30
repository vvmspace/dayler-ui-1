FROM nginx:stable

COPY ./bundle/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
