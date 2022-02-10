FROM harb.diab.mfs.co.ke/insureme/nginx:1.17.1-alpine

MAINTAINER jkibet@mfs.co.ke

COPY nginx.conf /etc/nginx

EXPOSE 80

ADD ./dist/mfs-website-frontend /usr/share/nginx/html/
