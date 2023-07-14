# Ink&Pixels - Video Streaming and Blogging Website

[Visit](http://inkandpixel.ap-south-1.elasticbeanstalk.com)

## Description

Ink&Pixels is a video streaming and blogging website where users can select a video from the home screen and stream it to the video player and can add a blog to the posted content. Users can like, comment, and share the video blog and can also see how many likes the video has received. Users can reply to comments, and the user interface differentiates between replied and new comments.

## Features

- Users can sign in and register using Google.
- Users can select their role during registration as either a creator or student.
- Users can like, comment on the videos and share videos publicly (No auth required)
- Users can reply to existing comments with infinite nesting allowed.
- Allowed creators to upload videos which are strored in an AWS S3 Bucket.
- Videos are streamed in chunks and fetched from the S3 Bucket.
- Application is deployed using AWS EC2 Instance.
- Clean and responsive user interface.
- Used MVC architecture in the backend design.

## Technology Stack

- MongoDB
- Express.js
- EJS Template Engine (For Frontend)
- Node.js

## Setup

1. Clone the repository from GitHub.
2. Run `npm install` to install all the dependencies.
3. Create a keys.js file in config directory and define the following keys
   - `mongoURI`: Connection URL to MongoDB Database
   - `googleClientID`: Google OAuth Credentials Client ID
   - `googleClientSecret`: Google OAuth Credentials Client Secret
   - `awsAccessKeyID`: AWS IAM User (with Access to S3 bucket) Access Key ID
   - `awsSecretAccessKey`: AWS IAM User with Access to S3 bucket Access Key Secret
4. Run `npm run dev` to start the server.
5. Vist `http://localhost:3000/` on your browser

## Features Coming Soon

- Adding Email and Password Based Authentication
- Shifting Frontend to React.js
- Shifting the Content Delivery from S3 to CloudFront to ensure cached response
- Add Edit and Delete Post Routes

## Authors

- [Neeraj](https://github.com/neeraj-1605)
