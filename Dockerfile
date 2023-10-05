# Use an official NGINX image as the base image
FROM nginx:alpine

# Remove the default NGINX welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy your website files from the current directory into the NGINX document root
COPY . /usr/share/nginx/html

# Expose port 80 (the default port for HTTP)
EXPOSE 80

# Command to start NGINX
CMD ["nginx", "-g", "daemon off;"]
