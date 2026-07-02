**📰 NewSphere – Real-Time News Explorer**

NewSphere is a modern news exploration web application addressing the growing need for fast, reliable, and personalized access to information. It aggregates real-time news content via the NewsAPI, letting users browse, filter, and search articles across multiple categories through a fluid, responsive interface.

This project was developed as an end-of-year academic project (PFA 3A) at EMSI. It included functional/non-functional requirements analysis and UML modeling (use case, class, and sequence diagrams) prior to development.

**🚀 Main Features**

**📖 News Browsing**
- Browse latest news articles by category (World, Business, Tech, Sports, etc.)
- Search articles by keyword
- Responsive article cards with images, source, and publish date

**🎨 User Experience**
- Clean, responsive UI built with Tailwind CSS
- Dynamic routing between categories and article details
- Icon-based navigation with react-icons

**🏗️ Architecture Overview**

NewSphere is built as a frontend-first application using Next.js's hybrid rendering capabilities:

| Layer | Technology | Role |
|---|---|---|
| Framework | Next.js 13 (App Router) | Routing, SSR/SSG, API integration |
| UI Library | React 18 | Component-based interface |
| Language | TypeScript | Type safety across the app |
| Styling | Tailwind CSS | Utility-first responsive design |
| Data Source | NewsAPI | Real-time news aggregation |
| Icons | react-icons | UI iconography |

**🔄 Key Flow: Article Fetching**
1. User navigates to a category or search query
2. Next.js fetches articles from NewsAPI
3. Data is rendered server-side (SSR) for fast initial load
4. Client-side navigation handles subsequent interactions

**▶️ Run the Project**
```
npm install
npm run dev
```

**🔮 Future Improvements**
- User authentication & saved articles
- Personalized news feed based on reading history
- Comment/reaction system per article
- Dark mode support

**🎤 Conclusion**

NewSphere demonstrates a clean, modern approach to building content-driven web applications with Next.js — combining server-side rendering for performance with a fully typed, maintainable component architecture.
