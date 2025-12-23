#!/bin/bash

# Sammunat LLC Landing Page - Deployment Script
# This script prepares and deploys the project to Vercel

echo "🚀 Sammunat LLC Landing Page Deployment"
echo "======================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Build the project locally to check for errors
echo "🔨 Building project locally..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

# Check if user is logged in to Vercel
echo "🔐 Checking Vercel authentication..."
vercel whoami

if [ $? -ne 0 ]; then
    echo "🔑 Please login to Vercel..."
    vercel login
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your Sammunat LLC landing page is now live!"
    echo ""
    echo "Next steps:"
    echo "1. Update your custom domain in Vercel dashboard"
    echo "2. Configure environment variables"
    echo "3. Update robots.txt and sitemap.xml with your domain"
    echo "4. Set up Google Analytics (optional)"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi