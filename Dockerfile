
# Stage 1: Build React App
FROM node:20-alpine AS build

WORKDIR /benson_constance_final_site

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy all project files
COPY . .

# Build the production version of the app
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Create working directory for assignment requirement
WORKDIR /benson_constance_final_site

# Copy build output from first stage
COPY --from=build /benson_constance_final_site/build /usr/share/nginx/html

# Expose port 5575
EXPOSE 5575

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
