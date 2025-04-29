# Cryptocurrency Dashboard

A modern cryptocurrency dashboard application built with Next.js and Firebase Realtime Database, featuring real-time cryptocurrency price tracking and responsive design.

## Features

- Real-time cryptocurrency price tracking
- Hot List and New List sections for different cryptocurrency pairs
- Price change indicators with color coding
- Responsive design for all screen sizes
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Loading and error states

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Firebase project with Realtime Database enabled

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd next-dashboard-ui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Firebase configuration:
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDtLEWiOnwcFZ6R2FpDGKaRVpk
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=nextjs-practical.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://nextjs-practical-default-rtdb.asia-southeast1.firebasedatabase.app/
NEXT_PUBLIC_FIREBASE_PROJECT_ID=nextjs-practical
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=nextjs-practical.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=418402782734
NEXT_PUBLIC_FIREBASE_APP_ID=1:418402782734:web:41bc116e32b90acdd1365f
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-RQW7GG3ME4
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Firebase Database Structure

The application expects the following structure in your Firebase Realtime Database:

```json
{
  "HotList": {
    "1": {
      "id": "1",
      "name": "BTC/INR",
      "price": "4504624.20",
      "change": "-0.47"
    }
  },
  "NewList": {
    "1": {
      "id": "1",
      "name": "SHIB/INR",
      "price": "0.89",
      "change": "8.92"
    }
  }
}
```

Each cryptocurrency pair contains:
- `id`: Unique identifier
- `name`: Cryptocurrency pair name (e.g., BTC/INR)
- `price`: Current price in INR
- `change`: Price change percentage

## Technologies Used

- Next.js 14
- TypeScript
- Firebase Realtime Database
- Tailwind CSS
- Heroicons
- Headless UI

## License

MIT 
