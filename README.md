### What Is This

This is the implementation of the MathPracs web app, whose infrastructure is defined in the https://github.com/ahsanjkhan/MathPracsWebAppCDK repository.

The purpose of this web app is to let parents and students enrolled in tutoring with MathPracs log in and see upcoming sessions, session history, and balances.

You can learn more about MathPracs at https://mathpracs.com

### How Does It Work

The `frontend/` folder is a React app built with Vite and the Cloudscape Design System.

The CodePipeline defined in MathPracsWebAppCDK builds the frontend and deploys it to an AWS S3 Bucket served by AWS CloudFront.

To run the frontend locally:
```bash
cd frontend
npm install
npm run dev
```

### What Are The Components

React, Cloudscape Design System, Vite, AWS S3, AWS CloudFront.
