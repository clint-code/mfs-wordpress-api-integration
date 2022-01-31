#FROM harb.diab.mfs.co.ke/insureme/nginx:1.17.1-alpine

#MAINTAINER jkibet@mfs.co.ke

#COPY nginx.conf /etc/nginx

##EXPOSE 80

#ADD ./dist/mfswebsite-client /usr/share/nginx/html/

#ADD ./dist/insureme-client /usr/share/nginx/html/

#ADD ./dist/mfswebsite-client /usr/share/nginx/html/


FROM harb.diab.mfs.co.ke/insureme/nginx:1.17.1-alpine

MAINTAINER jkibet@mfs.co.ke

COPY nginx.conf /etc/nginx

EXPOSE 80

ADD ./dist/insureme-client /usr/share/nginx/html/
