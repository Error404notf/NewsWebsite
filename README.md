📰 My Awesome Project

A responsive news web application that fetches and displays real-time news from different categories like politics, technology, health, and sports using an external API. Users can explore trending stories with a clean, modern UI inspired by real-world news platforms.

👉 Live Demo: (add your deployed link here — we can do this next if you want)

💻 How It's Made

Tech used: HTML, CSS, JavaScript

This project was built as a dynamic frontend application that interacts with a third-party news API to display real-time content.

I started by structuring the layout using semantic HTML, separating the main news section from the side news cards to mimic a real news platform layout. Then, I styled the application using CSS, focusing on:

Responsive design using Flexbox
Clean typography for readability
Interactive UI elements like hover effects and card animations
Subtle motion using transform: translateY(-4px) to improve user experience

The core functionality is powered by JavaScript. I created a reusable function:

getNews(category)

This function:

Fetches news dynamically based on the selected category
Extracts the main headline and supporting articles
Updates the DOM in real time without reloading the page
Handles missing data safely using optional chaining and condition checks

I also implemented event listeners on navigation links so that when a user clicks a category (e.g. Technology or Health), the app fetches and displays relevant news instantly.

To improve code quality and avoid repetition, I refactored multiple similar functions into one reusable function (getNews), making the code cleaner and easier to maintain — a practice commonly used in scalable applications.

⚡ Optimizations
Refactored repeated functions into a single reusable function (getNews) to follow DRY principles

Added defensive programming:

if(!data.news) return

to prevent the app from crashing when the API fails or rate limits are hit

Used optional chaining (?.) to safely handle missing data from the API
Reduced unnecessary API calls to avoid hitting rate limits (429 errors)
Improved UI performance with lightweight CSS animations instead of heavy libraries
📚 Lessons Learned

This project taught me a lot about real-world frontend development, especially working with APIs.

Some key takeaways:

API limits are real
I encountered 429 (Too Many Requests) and 402 (Payment Required) errors, which taught me how to:
Debug API responses
Handle failures gracefully
Avoid excessive requests

Defensive coding is essential
I learned that you should never assume data exists. Errors like:

Cannot read properties of undefined (reading '0')

helped me understand the importance of validating data before using it.

DOM manipulation becomes powerful with dynamic data
Instead of hardcoding content, I now understand how to render UI from live data — which is a key concept in frameworks like React (something I’m working toward in my MERN journey).

Small UI details matter
Using:

transform: translateY(-4px);

helped me understand how subtle motion improves user experience by making the interface feel interactive and alive.

🚀 What I’d Improve Next
Add loading states (spinners) while fetching data
Implement error messages in the UI instead of just console logs
Integrate video embedding (e.g., YouTube iframes) for richer content
Add search functionality for custom news queries
Migrate to React for better state management and scalability
🌱 Final Thoughts

This project pushed me to think like a real developer — not just writing code, but handling failures, improving user experience, and structuring logic efficiently.

It’s a step toward building more advanced full-stack applications, especially as I continue growing in the MERN stack.