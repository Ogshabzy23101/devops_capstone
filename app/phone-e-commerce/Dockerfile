FROM nginx:alphine

#remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

#copy app file into nginx web root
COPY . /usr/share/nginx/html/

#expose port inside container
EXPOSE 80

#start nginx serverCMD ["nginx", "-g", "daemon off;"]
CMD ["nginx", "-g", "daemon off;"]