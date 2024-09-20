# YouTube Clone

### Live Demo: [YouTube Clone](https://youtube-03.vercel.app/)

## Project Overview

This project focuses on optimizing the **data layer and UI layer integration** to enhance performance, rather than prioritizing a better UI design. The goal is to provide a smooth experience for users by ensuring efficient data fetching and rendering.

## Features

### 1. **YouTube API Integration**
   - Utilizes the official YouTube API to fetch video data and suggestions dynamically.

### 2. **Search Functionality with Debouncing**
   - Implements **debouncing** to optimize search suggestions as users type in the search box.
   - **Debouncing Logic**:
     - Typing speed determines the delay between API calls:
       - Slow typing: 200ms delay
       - Fast typing: 30ms delay
     - **API Call Condition**:
       - If the time between two keystrokes is **less than 200ms** → No API call.
       - If the time between two keystrokes is **more than 200ms** → Trigger API call.

### 3. **Live Chats using Long Polling**
   - Uses **long polling** to fetch new chat messages in real-time from the API.
   - **Automatic DOM Cleanup**: After a certain number of messages, older chats are removed from the DOM to prevent the webpage from crashing due to overload.

### 4. **Caching Strategy**
   - **Cache Time Complexity**:
     - Array search time complexity: O(n)
     - Object search time complexity: O(1)

## Additional Concepts

### **Live Data Fetching Techniques**
- **Web Sockets**: Allows a two-way communication between client and server. Examples: Trading apps, WhatsApp.
- **API Polling (Long Polling)**: Fetches new data at regular intervals. Examples: Gmail, Cricbuzz.

### **UI Layer Optimization**
   - Automatically **cleans up older chats** by removing them from the DOM to keep the page performance smooth.

---

### Instructions for Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/youtube-clone.git
