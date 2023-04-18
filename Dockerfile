# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml into the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code into the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Start the application in development mode
CMD ["pnpm", "dev"]
