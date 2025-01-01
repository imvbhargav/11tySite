export default {
  mainProjects: [
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