// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-clickshack",
          title: "clickshack",
          description: "adventures captured on camera- coming soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/clickshack/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-about-me",
          title: "about me",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "post-cyber-9-12-strategy-challenge-in-austin-texas",
        
          title: "Cyber 9/12 Strategy Challenge in Austin, Texas",
        
        description: "National Champions!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cyber/";
          
        },
      },{id: "post-femmes-hacks-2025",
        
          title: "FEMMES+ Hacks 2025",
        
        description: "7th Annual FEMMES+ Hacks, and an end to my time as co-director",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/femmeshacks/";
          
        },
      },{id: "post-packing-with-purpose-engineers-bunnies-and-meals",
        
          title: "Packing With Purpose- Engineers, Bunnies, and Meals",
        
        description: "Pancake Packing Bunnies at Medtronic",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pancakebunnies/";
          
        },
      },{id: "post-gtcys-spring-festival-2023",
        
          title: "GTCYS Spring Festival 2023",
        
        description: "A farewell",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/gtcys/";
          
        },
      },{id: "books-the-48-laws-of-power",
          title: 'The 48 Laws of Power',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/48laws/";
            },},{id: "books-all-the-lovers-in-the-night",
          title: 'All the Lovers in the Night',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/alltheloversinthenight/";
            },},{id: "books-every-good-boy-does-fine",
          title: 'Every Good Boy Does Fine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/everygoodboy/";
            },},{id: "books-forging-wargamers",
          title: 'Forging Wargamers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/forgingwargamers/";
            },},{id: "books-gödel-escher-bach",
          title: 'Gödel, Escher, Bach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/godelesecherbach/";
            },},{id: "books-the-laws-of-human-nature",
          title: 'The Laws of Human Nature',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/laws_human_nature/";
            },},{id: "books-man-39-s-search-for-meaning",
          title: 'Man&amp;#39;s Search for Meaning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/manssearchformeaning/";
            },},{id: "books-pride-and-prejudice",
          title: 'Pride and Prejudice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/prideandprejudice/";
            },},{id: "books-principles",
          title: 'Principles',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/principles/";
            },},{id: "books-the-admirals",
          title: 'The Admirals',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/theadmirals/";
            },},{id: "books-the-sun-also-rises",
          title: 'The Sun Also Rises',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/thesunalsorises/";
            },},{id: "books-when-breath-becomes-air",
          title: 'When Breath Becomes Air',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/whenbreathbecomesair/";
            },},{id: "books-zero-to-one",
          title: 'Zero to One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/zerotoone/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%7A%68%61%6F%65%6D%69%6C%79@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/emilygzh", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/emilygzhao", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
