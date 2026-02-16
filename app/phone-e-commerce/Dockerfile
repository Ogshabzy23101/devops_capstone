#stage 1 -build stage
FROM node:alpine as build-stage
WORKDIR /app
#copy package.json and package-lock.json to the working directory
COPY package*.json ./
#install dependencies
RUN npm install
#copy the rest of the application code to the working directory
COPY . .
#build the application for production
RUN npm run build

#stage 2 -production stage
FROM nginx:alpine
#remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*
#copy the built application from the build stage to the nginx html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html
#expose port 80 to the outside world
EXPOSE 80
#start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"] 