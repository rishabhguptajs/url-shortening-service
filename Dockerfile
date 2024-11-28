# Start Generation Here
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY nodemon.json ./
COPY src ./src
COPY tsconfig.json ./

# Expose the port the app runs on
EXPOSE 8080:8080

# Command to run the application
CMD ["npm", "start"]