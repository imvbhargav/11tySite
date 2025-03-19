export default {
  mainProjects: [
    {
      name: "CoolerThings",
      image: "/assets/images/ecom.png",
      title: "Modern E-commerce store created using NextJS 15",
      links: {
        live: "https://cooler-things.vercel.app/",
        github: "https://github.com/imvbhargav/cool-things",
      },
      stack: ["NextJS", "React", "Zustand", "Prisma", "PostgreSQL", "Cloudinary"],
      content: "This project is a modern e-commerce project, this includes an authentication system with role-based access for users and sellers. It features a cart system, order tracking, and interactive modals. Server-side rendering ensures fast load times and SEO benefits. Sellers have a dedicated dashboard to manage products, with dynamic image uploads to Cloudinary. Users can leave reviews and ratings on products. Optimistic API calls provide instant UI updates, while infinite loading enhances browsing. Filtering by category and sorting by price make product discovery easier."
    },
    {
      name: "SnipLnk",
      image: "/assets/images/sniplnk.png",
      title: "URL Shortener Created using NextJS 15",
      links: {
        live: "https://sniplnk.vercel.app/",
        github: "https://github.com/imvbhargav/url-shortener"
      },
      stack: ["NextJS", "React", "Prisma", "PostgreSQL"],
      content: "This is a simple URL shortener built with Next.js, emphasizing design and animation. A key feature is the hover-triggered box-highlighting effect with fading trails, created using React and JavaScript. When a user enters a long URL, the site generates a shortened link with a six-letter random string under its domain. Clicking the short link redirects to the original URL, and each visit is tracked."
    },
    {
      name: "YooTwo",
      image: "/assets/images/img2.png",
      title: "Peer-2-Peer WebRTC video call and watch party site",
      links: {
        live: "https://yootwo.vercel.app/",
        github: "https://github.com/imvbhargav/yootwo"
      },
      stack: ["React", "Typescript", "WebRTC", "Javascript", "Socket.io"],
      content: "This is a watch party like application but only limited to access for 2 people per room. Socket.io is used for the signalling server, users can create room and invite one friend with whon can synchronously stream any YouTube video or stream local video file. The users can play/pause, rewind and forward synchronously. The file and audio/video stream is sent through WebRTC which allows for very secure and fast peer to peer connection through which users can watch any video in sync with video call."
    },
    {
      name: "Dhi Darpan",
      image: "/assets/images/img1.png",
      title: "Blogging site with User Management and CRUD Operations",
      links: {
        live: "https://dhidarpan.pythonanywhere.com/",
        github: "https://github.com/imvbhargav/dhidarpan"
      },
      stack: ["Python", "Django", "HTMX", "Javascript", "HTML", "CSS", "PostgreSQL"],
      content: "This is a complete Blogging application where users with Editor and Author authorization can Create, Update and Delete blog posts. The blog has a complete user registration process like Register, Login, Logout, Google SSO, Password Change, and subcribing to Newsletter. The registered users with Viewer rights can Comment and Like the posts, while non-registered users can only read the posts. HTMX is used for AJAX updated in commenting and liking functionalities."

    }
  ],
  otherProjects: [
    {
      title: "Random Quote Generator",
      image: "/assets/images/rqg.png",
      stack: ["React", "Javascript"],
      links: {
        live: "https://rqg-by-imvbhargav.vercel.app/",
        github: "https://github.com/imvbhargav/Random-Quote-Generator",
      },
      content: "Random quote  generator created using React, part of freeCodeCamp's Frontend development libraries certification.",
    },
    {
      title: "Pomodoro Timer",
      image: "/assets/images/pt.png",
      stack: ["React", "Javascript"],
      links: {
        live: "https://pomodoro-timer-by-imvbhargav.vercel.app/",
        github: "https://github.com/imvbhargav/pomodoroTimer",
      },
      content: "A pomodoto timer app created using react, part of freeCodeCamp's Frontend development libraries certification.",
    },
    {
      title: "Markdown Previewer",
      image: "/assets/images/mp.png",
      stack: ["React", "Javascript"],
      links: {
        live: "https://mp-by-imvbhargav.vercel.app/",
        github: "https://github.com/imvbhargav/markdownPreviewer",
      },
      content: "A markdown previewer app created using react, part of freeCodeCamp's Frontend development libraries certification.",
    },
    {
      title: "Drum Machine",
      image: "/assets/images/dm.png",
      stack: ["React", "Javascript"],
      links: {
        live: "https://dm-by-imvbhargav.vercel.app/",
        github: "https://github.com/imvbhargav/drumMachine",
      },
      content: "A drum machine app created using React, part of freeCodeCamp's Frontend development libraries certification.",
    },
    {
      title: "Calculator",
      image: "/assets/images/calcu.png",
      stack: ["HTML", "CSS", "Javascript"],
      links: {
        live: "https://imvbhargav.github.io/Calculator",
        github: "https://github.com/imvbhargav/Calculator",
      },
      content: "A calculator app created using HTML, CSS, and JS, part of freeCodeCamp's Frontend development libraries certification.",
    },
    {
      title: "Tic Tac Toe",
      image: "/assets/images/ttt.png",
      stack: ["HTML", "CSS", "Javascript"],
      links: {
        live: "https://imvbhargav.github.io/Tic-Tac-Toe/",
        github: "https://github.com/imvbhargav/Tic-Tac-Toe",
      },
      content: " Tic Tac Toe app created using HTML, CSS, and JS. This app has cumputer play option, Simple minimax algorithm is used for computer play.",
    },
  ]
}