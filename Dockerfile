# Base image
FROM node:20 as base

# Update and upgrade system packages
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y libnss3 libxss1 libasound2 libatk1.0-0 libatk-bridge2.0-0 libgtk-3-0 && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Install Playwright browsers
RUN yarn playwright install --with-deps

# Run Playwright tests
CMD ["yarn", "playwright", "test"]
