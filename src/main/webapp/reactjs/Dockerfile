# Use Node.js image to build the frontend
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .. .

# Build the application
RUN npm run build

FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]