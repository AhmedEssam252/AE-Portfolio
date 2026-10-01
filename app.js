/**
 * FIELD MANUALS — LUXURY 3D EDITORIAL PORTFOLIO ENGINE
 * With Single Wasalna Master Book & Multi-Role Chapters
 */

const I18N = {
  ar: {
    roleBadge: "معرض أعمالي التقنية",
    filterAll: "جميع المنصات",
    filterWasalna: "⚡ منصة وصلنا (WASALNA)",
    filterFullstack: "أنظمة Full-Stack",
    btnCollection: "أرشيف الأعمال",
    btnCurator: "عن المهندس",
    shelfHint: "اضغط على كتاب منصة وصلنا لفتح الكتيّب التفاعلي واستعراض فصول وأدوار النظام",
    backBtn: "العودة للرف الرئيسي",
    prevPage: "السابق",
    nextPage: "التالي",
    hotspotHint: "• اضغط على أرقام الميزات المضيئة على لقطة الشاشة لمعاينة القرارات البرمجية",
    highlightsTitle: "أبرز الركائز الهندسية والبرمجية",
    stackTitle: "حزمة التقنيات المستخدمة",
    hideHotspots: "إخفاء النقاط",
    showHotspots: "إظهار النقاط",
    btnExpand: "ملء الشاشة",
    footerReady: "نظام جاهز للإنتاج والتوسع • 2026",
    modalArchiveTag: "أرشيف المنظومات الرقمية",
    modalArchiveTitle: "دليل المنصات والمشاريع الهندسية",
    modalArchiveDesc: "اختر أي منصة لفتح الكتيّب ثلاثي الأبعاد ومطالعة تفاصيل المعمارية وشاشات التشغيل.",
    aboutTag: "مطور Full-Stack وأخصائي حلول رقمية",
    aboutTitle: "أحمد عصام — خبرة 5+ سنوات في بناء المنصات الرقمية",
    curatorRole: "Full-Stack Web Developer & Solutions Specialist • خبرة 5+ سنوات",
    contactMail: "تواصل عبر البريد",
    contactGit: "مستودع GitHub",
    featureBadge: "ميزة تشغيلية",
    architectureLabel: "المعمارية والتقنية:"
  },
  en: {
    roleBadge: "Technical Portfolio",
    filterAll: "All Platforms",
    filterWasalna: "⚡ Wasalna Platform",
    filterFullstack: "Full-Stack Systems",
    btnCollection: "The Collection",
    btnCurator: "Curator / About",
    shelfHint: "Click the Wasalna manual to open the interactive flip-book and explore system roles",
    backBtn: "Return to Shelf",
    prevPage: "Prev Page",
    nextPage: "Next Page",
    hotspotHint: "• Click glowing feature pins on the screenshot to explore UX & architectural details",
    highlightsTitle: "Key Architectural Highlights",
    stackTitle: "Engineering & Design System",
    hideHotspots: "Hide Pins",
    showHotspots: "Show Pins",
    btnExpand: "Fullscreen",
    footerReady: "Production Ready System • 2026",
    modalArchiveTag: "CATALOG ARCHIVE",
    modalArchiveTitle: "The Complete Works Collection",
    modalArchiveDesc: "Select any volume to launch the 3D flip-book review and explore architectural breakdowns.",
    aboutTag: "CURATOR & CREATOR",
    aboutTitle: "Engineering Meets Aesthetics",
    curatorRole: "Full-Stack Web Developer & Solutions Specialist • 5+ Years Exp",
    contactMail: "Get in Touch via Email",
    contactGit: "GitHub Profile",
    featureBadge: "FEATURE SPOTLIGHT",
    architectureLabel: "Architecture:"
  }
};

// MASTER PROJECTS DATASET
const PROJECTS = [
  // 0. MOON ACADEMY (EdTech Gamified Learning Platform)
  {
    id: "moon-academy",
    isMasterBook: true,
    category: "fullstack",
    code: "FIELD MANUAL • VOL. 00",
    year: "2026",
    rating: "✦ ✦ ✦ ✦ ✦",
    logo: "imgs/Moon Academy/moon-logo.svg",
    translations: {
      ar: {
        title: "أكاديمية مون",
        subtitle: "منصة تعلم البرمجة وعلوم الحاسب بأسلوب تفاعلي وممتع",
        lead: "منصة تعليمية متكاملة تعتمد على الألعاب لتعليم البرمجة وعلوم الحاسب للأطفال والمراهقين. تضم مسارات في تطوير الويب، الذكاء الاصطناعي، الأمن السيبراني وتطوير الألعاب، مع نظام نقاط ومستويات وذكاء اصطناعي مساعد.",
        coverMeta: "منصة التعليم التفاعلي • 2026"
      },
      en: {
        title: "Moon Academy",
        subtitle: "Gamified CS & Coding Learning Platform for Kids & Teens",
        lead: "A full-stack gamified educational platform teaching Computer Science and coding to children and teenagers through interactive quests, AI-assisted learning, and multi-track progression in Web Dev, AI, Cybersecurity, and Game Development.",
        coverMeta: "EdTech Learning Platform • 2026"
      }
    },
    chapters: [
      // Chapter 1: Website Overview
      {
        id: "overview",
        icon: "🌙",
        translations: {
          ar: {
            tabLabel: "01. نظرة عامة",
            roleTitle: "نظرة عامة على المنصة",
            roleSubtitle: "الصفحة الرئيسية، التسجيل، ولوحة التحكم التفاعلية",
            lead: "واجهة استخدام متكاملة تستهدف الأطفال والمراهقين بتصميم داكن جذاب وألوان حيوية. تشمل نظام تسجيل ذكي يحدد الفئة العمرية والاهتمامات ولوحة تحكم مخصصة بنظام نقاط وشعلات الحماس اليومية.",
            specs: [
              { label: "نوع المنصة", val: "EdTech Web App" },
              { label: "الفئة المستهدفة", val: "أطفال 4–18 سنة" },
              { label: "المعمارية", val: "Next.js • Node.js • PostgreSQL" },
              { label: "الدور", val: "Full-Stack Developer & UI/UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "نظام تسجيل ذكي متعدد الأعمار",
                desc: "تسجيل يحدد تلقائياً الفئة العمرية (4-7، 8-11، 12-14، 15-17، 18+) ويعرض محتوى مناسباً لكل مرحلة مع اختيار الاهتمامات."
              },
              {
                num: "02",
                title: "لوحة تحكم تفاعلية بنظام التحفيز",
                desc: "شريط تقدم يومي وشعلات الحماس وبونص XP تشجع الطالب على الاستمرار والتعلم اليومي المنتظم."
              },
              {
                num: "03",
                title: "مساعد القمر الذكي (AI Tutor)",
                desc: "روبوت دردشة مدمج يساعد الطلاب في أثناء حل التحديات ويرشدهم إلى الأدوات والعوالم المناسبة."
              }
            ],
            tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AI Integration", "WebSockets"]
          },
          en: {
            tabLabel: "01. Overview",
            roleTitle: "Platform Overview",
            roleSubtitle: "Landing Page, Registration & Interactive Dashboard",
            lead: "A visually immersive interface targeting kids and teens with a dark gamified aesthetic. Features smart age-based registration, interest selection, and a personalized dashboard with XP streaks, daily challenges, and an AI moon assistant.",
            specs: [
              { label: "Platform Type", val: "EdTech Web App" },
              { label: "Target Audience", val: "Children 4–18 Years" },
              { label: "Architecture", val: "Next.js • Node.js • PostgreSQL" },
              { label: "Role", val: "Full-Stack Developer & UI/UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "Multi-Age Smart Registration System",
                desc: "Auto-detects age band (4-7, 8-11, 12-14, 15-17, 18+) and displays age-appropriate content with interest selection for Web Dev, AI, Game Dev, and Cybersecurity tracks."
              },
              {
                num: "02",
                title: "Gamified Dashboard with Motivation Engine",
                desc: "Daily streak flames, XP bonuses, and progress bars drive consistent daily learning habits and engagement across all age groups."
              },
              {
                num: "03",
                title: "AI Moon Assistant (Embedded Tutor)",
                desc: "An integrated chatbot guides students through challenges, recommends learning worlds, and provides real-time coding hints."
              }
            ],
            tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AI Integration", "WebSockets"]
          }
        },
        steps: [
          {
            image: "imgs/Moon Academy/website overview/Screenshot 2026-10-01 174239.png",
            translations: {
              ar: {
                tab: "01. الصفحة الرئيسية",
                title: "الصفحة التسويقية الرئيسية",
                plate: "PLATE 01 — LANDING PAGE",
                hotspots: [
                  { x: 50, y: 32, title: "تصميم الهيرو المميز", desc: "صفحة هبوط احترافية تعرض قيمة المنصة وتقسيم المراحل العمرية بأسلوب بصري جذاب.", tech: "Next.js • CSS Animations" },
                  { x: 50, y: 68, title: "الفئات العمرية ومسارات التعلم", desc: "عرض تفاعلي للفئات الخمس (Little Explorer، Junior Coder، Emerging Developer، Young Innovator، Pro Developer).", tech: "React Components" }
                ]
              },
              en: {
                tab: "01. Landing Page",
                title: "Marketing Landing Page",
                plate: "PLATE 01 — LANDING PAGE",
                hotspots: [
                  { x: 50, y: 32, title: "Premium Hero Design", desc: "Professional landing page showcasing platform value proposition and age-band segmentation with captivating visuals.", tech: "Next.js • CSS Animations" },
                  { x: 50, y: 68, title: "Age Bands & Learning Paths", desc: "Interactive display of 5 age categories (Little Explorer, Junior Coder, Emerging Developer, Young Innovator, Pro Developer).", tech: "React Components" }
                ]
              }
            }
          },
          {
            image: "imgs/Moon Academy/website overview/Screenshot 2026-10-01 174229.png",
            translations: {
              ar: {
                tab: "02. صفحة التسجيل",
                title: "نموذج إنشاء الملف الشخصي",
                plate: "PLATE 02 — REGISTRATION FLOW",
                hotspots: [
                  { x: 50, y: 45, title: "نموذج التسجيل الذكي", desc: "تسجيل يجمع الاسم والبريد وتاريخ الميلاد لتحديد الفئة العمرية تلقائياً.", tech: "Next.js • Form Validation" },
                  { x: 50, y: 78, title: "اختيار الاهتمامات", desc: "الطالب يختار مساراته المفضلة (Web Dev، Game Dev، AI، Cybersecurity) لتخصيص تجربة التعلم.", tech: "PostgreSQL • User Preferences" }
                ]
              },
              en: {
                tab: "02. Registration",
                title: "Smart Profile Creation Form",
                plate: "PLATE 02 — REGISTRATION FLOW",
                hotspots: [
                  { x: 50, y: 45, title: "Smart Registration Form", desc: "Collects name, email, and birthdate to auto-determine age band and curriculum level.", tech: "Next.js • Form Validation" },
                  { x: 50, y: 78, title: "Interest Selection", desc: "Students select preferred tracks (Web Dev, Game Dev, AI, Cybersecurity) to personalize their learning experience.", tech: "PostgreSQL • User Preferences" }
                ]
              }
            }
          },

          {
            image: "imgs/Moon Academy/website overview/Screenshot 2026-10-01 175407.png",
            translations: {
              ar: {
                tab: "03. لوحة التحكم",
                title: "لوحة تحكم الطالب التفاعلية",
                plate: "PLATE 03 — STUDENT DASHBOARD",
                hotspots: [
                  { x: 28, y: 50, title: "مساعد القمر الذكي", desc: "روبوت دردشة يساعد الطلاب في التنقل بين العوالم وحل التحديات في الوقت الفعلي.", tech: "AI Integration • WebSockets" },
                  { x: 72, y: 20, title: "شريط التقدم والنقاط", desc: "شعلة حماس يومية ونقاط XP تتراكم لتشجيع الاستمرارية والتعلم المنتظم.", tech: "Gamification Engine" }
                ]
              },
              en: {
                tab: "03. Dashboard",
                title: "Interactive Student Dashboard",
                plate: "PLATE 03 — STUDENT DASHBOARD",
                hotspots: [
                  { x: 28, y: 50, title: "AI Moon Assistant", desc: "Chatbot guides students through learning worlds and helps solve challenges in real-time.", tech: "AI Integration • WebSockets" },
                  { x: 72, y: 20, title: "XP Progress & Streak System", desc: "Daily flame streaks and accumulating XP points drive consistent learning habits and engagement.", tech: "Gamification Engine" }
                ]
              }
            }
          },
          {
            image: "imgs/Moon Academy/website overview/Screenshot 2026-10-01 175446.png",
            translations: {
              ar: {
                tab: "04. شاشة المهمة",
                title: "واجهة التحديات والمهام",
                plate: "PLATE 04 — CHALLENGE INTERFACE",
                hotspots: [
                  { x: 50, y: 50, title: "نظام التحديات التفاعلية", desc: "مهام برمجية مصممة بأسلوب لعبة مغامرة تشجع على التفكير النقدي وحل المشكلات.", tech: "Interactive Challenges Engine" }
                ]
              },
              en: {
                tab: "04. Challenge",
                title: "Challenge & Quest Interface",
                plate: "PLATE 04 — CHALLENGE INTERFACE",
                hotspots: [
                  { x: 50, y: 50, title: "Interactive Challenge System", desc: "Coding tasks designed as adventure quests encouraging critical thinking and problem-solving.", tech: "Interactive Challenges Engine" }
                ]
              }
            }
          },
          {
            image: "imgs/Moon Academy/website overview/Screenshot 2026-10-01 175456.png",
            translations: {
              ar: {
                tab: "05. العوالم النشطة",
                title: "خريطة العوالم والمسارات",
                plate: "PLATE 05 — LEARNING WORLDS MAP",
                hotspots: [
                  { x: 30, y: 50, title: "قائمة العوالم النشطة", desc: "Web Development، AI Intelligence، Game Development، Block Coding — كل عالم يحتوي على مستويات ومهام متدرجة.", tech: "Course Architecture" }
                ]
              },
              en: {
                tab: "05. Worlds Map",
                title: "Learning Worlds & Tracks Map",
                plate: "PLATE 05 — LEARNING WORLDS MAP",
                hotspots: [
                  { x: 30, y: 50, title: "Active Learning Worlds", desc: "Web Development, AI Intelligence, Game Development, Block Coding — each world contains progressive levels and missions.", tech: "Course Architecture" }
                ]
              }
            }
          },
          {
            image: "imgs/Moon Academy/website overview/Screenshot 2026-10-01 175649.png",
            translations: {
              ar: {
                tab: "06. واجهة الدرس",
                title: "واجهة التعلم التفاعلي",
                plate: "PLATE 06 — LESSON INTERFACE",
                hotspots: [
                  { x: 50, y: 50, title: "واجهة الدروس التفاعلية", desc: "بيئة تعلم غامرة تدمج الشرح المرئي والتطبيق العملي والتقييم الفوري في واجهة موحدة.", tech: "Interactive Learning Engine" }
                ]
              },
              en: {
                tab: "06. Lesson",
                title: "Interactive Learning Interface",
                plate: "PLATE 06 — LESSON INTERFACE",
                hotspots: [
                  { x: 50, y: 50, title: "Immersive Lesson Interface", desc: "Learning environment combining visual explanation, hands-on practice, and instant evaluation in a unified interface.", tech: "Interactive Learning Engine" }
                ]
              }
            }
          }
        ]
      },
      // Chapter 2: Web Track
      {
        id: "web-track",
        icon: "🌐",
        translations: {
          ar: {
            tabLabel: "02. مسار الويب",
            roleTitle: "مسار تطوير الويب",
            roleSubtitle: "دروس HTML، CSS، JavaScript وتطوير المواقع بأسلوب مغامرة",
            lead: "مسار متكامل لتعليم تطوير الويب من الصفر بأسلوب الألعاب والمغامرات. يبدأ من أساسيات HTML وCSS وصولاً إلى JavaScript المتقدمة مع مشاريع تطبيقية حقيقية.",
            specs: [
              { label: "المحتوى", val: "HTML • CSS • JavaScript" },
              { label: "الفئة العمرية", val: "8–18 سنة" },
              { label: "النظام", val: "Quest-Based Learning" },
              { label: "الدور", val: "Full-Stack Developer" }
            ],
            highlights: [
              { num: "01", title: "تعلم تدريجي بنظام المغامرات", desc: "كل درس عبارة عن مهمة في عالم مغامرة تبني مهارات الطالب خطوة بخطوة من أساسيات HTML إلى JavaScript المتقدمة." },
              { num: "02", title: "بيئة برمجة مدمجة (Live Code Editor)", desc: "محرر كود مدمج في المنصة يتيح للطالب كتابة الكود ورؤية النتيجة فوراً دون الحاجة لأدوات خارجية." }
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "React Basics", "Next.js", "Responsive Design"]
          },
          en: {
            tabLabel: "02. Web Track",
            roleTitle: "Web Development Track",
            roleSubtitle: "HTML, CSS, JavaScript & Web Projects through Adventure",
            lead: "A comprehensive web development curriculum delivered through gamified quests. Progresses from HTML/CSS fundamentals to advanced JavaScript with real-world project applications.",
            specs: [
              { label: "Content", val: "HTML • CSS • JavaScript" },
              { label: "Age Range", val: "8–18 Years" },
              { label: "System", val: "Quest-Based Learning" },
              { label: "Role", val: "Full-Stack Developer" }
            ],
            highlights: [
              { num: "01", title: "Progressive Quest-Based Learning", desc: "Each lesson is an adventure mission building student skills step by step from HTML basics to advanced JavaScript." },
              { num: "02", title: "Embedded Live Code Editor", desc: "Integrated code editor lets students write code and see results instantly without external tools." }
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "React Basics", "Next.js", "Responsive Design"]
          }
        },
        steps: [
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 175824.png",
            translations: {
              ar: { tab: "01. الويب 1", title: "شاشة مسار الويب – المستوى الأول", plate: "PLATE 01 — WEB TRACK", hotspots: [{ x: 50, y: 50, title: "واجهة مسار الويب", desc: "بداية رحلة تعلم الويب بأسلوب مغامرة تفاعلية.", tech: "Quest Learning Engine" }] },
              en: { tab: "01. Web 1", title: "Web Track – Level One Interface", plate: "PLATE 01 — WEB TRACK", hotspots: [{ x: 50, y: 50, title: "Web Track Interface", desc: "Start of the web learning journey through an interactive adventure.", tech: "Quest Learning Engine" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 175839.png",
            translations: {
              ar: { tab: "02. الويب 2", title: "دروس HTML وCSS التفاعلية", plate: "PLATE 02 — WEB LESSONS", hotspots: [{ x: 50, y: 50, title: "دروس HTML/CSS", desc: "تعليم قواعد HTML وCSS بالأمثلة الحية والتطبيق المباشر.", tech: "HTML5 • CSS3" }] },
              en: { tab: "02. Web 2", title: "Interactive HTML & CSS Lessons", plate: "PLATE 02 — WEB LESSONS", hotspots: [{ x: 50, y: 50, title: "HTML/CSS Lessons", desc: "Teaching HTML and CSS fundamentals with live examples and direct application.", tech: "HTML5 • CSS3" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 175921.png",
            translations: {
              ar: { tab: "03. الويب 3", title: "بيئة الكود التفاعلية", plate: "PLATE 03 — CODE EDITOR", hotspots: [{ x: 50, y: 50, title: "محرر الكود المدمج", desc: "بيئة برمجة مدمجة تتيح كتابة HTML وCSS والرؤية الفورية للنتيجة.", tech: "Live Code Editor" }] },
              en: { tab: "03. Web 3", title: "Interactive Code Environment", plate: "PLATE 03 — CODE EDITOR", hotspots: [{ x: 50, y: 50, title: "Embedded Code Editor", desc: "Integrated coding environment with instant HTML/CSS preview.", tech: "Live Code Editor" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 175931.png",
            translations: {
              ar: { tab: "04. الويب 4", title: "تحديات الويب التطبيقية", plate: "PLATE 04 — WEB CHALLENGES", hotspots: [{ x: 50, y: 50, title: "تحديات الويب", desc: "مهام تطبيقية لبناء مواقع حقيقية وتطبيق المفاهيم المكتسبة.", tech: "Project-Based Learning" }] },
              en: { tab: "04. Web 4", title: "Applied Web Challenges", plate: "PLATE 04 — WEB CHALLENGES", hotspots: [{ x: 50, y: 50, title: "Web Challenges", desc: "Hands-on tasks to build real websites and apply learned concepts.", tech: "Project-Based Learning" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 175946.png",
            translations: {
              ar: { tab: "05. الويب 5", title: "JavaScript والتفاعلية", plate: "PLATE 05 — JAVASCRIPT", hotspots: [{ x: 50, y: 50, title: "دروس JavaScript", desc: "مقدمة إلى JavaScript وإضافة التفاعلية للمواقع بأسلوب ألعاب مغامرة.", tech: "JavaScript • DOM" }] },
              en: { tab: "05. Web 5", title: "JavaScript & Interactivity", plate: "PLATE 05 — JAVASCRIPT", hotspots: [{ x: 50, y: 50, title: "JavaScript Lessons", desc: "Introduction to JavaScript and adding interactivity to websites through adventure gaming.", tech: "JavaScript • DOM" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 180004.png",
            translations: {
              ar: { tab: "06. الويب 6", title: "مشاريع الويب التطبيقية", plate: "PLATE 06 — WEB PROJECTS", hotspots: [{ x: 50, y: 50, title: "مشاريع تطبيقية", desc: "مشاريع ويب حقيقية ينجزها الطالب ليبني محفظة أعماله من اليوم الأول.", tech: "Full Projects" }] },
              en: { tab: "06. Web 6", title: "Applied Web Projects", plate: "PLATE 06 — WEB PROJECTS", hotspots: [{ x: 50, y: 50, title: "Real Projects", desc: "Real web projects students complete to build their portfolio from day one.", tech: "Full Projects" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 180027.png",
            translations: {
              ar: { tab: "07. الويب 7", title: "تصميم المواقع المتجاوبة", plate: "PLATE 07 — RESPONSIVE", hotspots: [{ x: 50, y: 50, title: "التصميم المتجاوب", desc: "تعليم مبادئ Responsive Design وجعل المواقع تعمل على جميع الأجهزة.", tech: "Responsive Design • CSS Grid" }] },
              en: { tab: "07. Web 7", title: "Responsive Web Design", plate: "PLATE 07 — RESPONSIVE", hotspots: [{ x: 50, y: 50, title: "Responsive Design", desc: "Teaching Responsive Design principles to make websites work across all devices.", tech: "Responsive Design • CSS Grid" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 180038.png",
            translations: {
              ar: { tab: "08. الويب 8", title: "متابعة التقدم والإنجازات", plate: "PLATE 08 — PROGRESS", hotspots: [{ x: 50, y: 50, title: "نظام تتبع التقدم", desc: "شاشات تتبع التقدم وشارات الإنجاز تعزز الدافعية والاستمرار في التعلم.", tech: "Progress Tracking" }] },
              en: { tab: "08. Web 8", title: "Progress Tracking & Achievements", plate: "PLATE 08 — PROGRESS", hotspots: [{ x: 50, y: 50, title: "Progress Tracking System", desc: "Progress screens and achievement badges reinforce motivation and learning continuity.", tech: "Progress Tracking" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 180058.png",
            translations: {
              ar: { tab: "09. الويب 9", title: "مستويات متقدمة في الويب", plate: "PLATE 09 — ADVANCED WEB", hotspots: [{ x: 50, y: 50, title: "المستويات المتقدمة", desc: "مستويات متقدمة تغطي React وNext.js وبناء تطبيقات ويب احترافية.", tech: "React • Next.js" }] },
              en: { tab: "09. Web 9", title: "Advanced Web Levels", plate: "PLATE 09 — ADVANCED WEB", hotspots: [{ x: 50, y: 50, title: "Advanced Levels", desc: "Advanced levels covering React, Next.js, and building professional web applications.", tech: "React • Next.js" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 180107.png",
            translations: {
              ar: { tab: "10. الويب 10", title: "تحديات وأسئلة اختبارية", plate: "PLATE 10 — QUIZ", hotspots: [{ x: 50, y: 50, title: "اختبارات تفاعلية", desc: "أسئلة اختبارية وتحديات فورية تقيس فهم الطالب وتعزز المعلومات.", tech: "Assessment Engine" }] },
              en: { tab: "10. Web 10", title: "Interactive Quizzes & Tests", plate: "PLATE 10 — QUIZ", hotspots: [{ x: 50, y: 50, title: "Interactive Assessments", desc: "Real-time quizzes and challenges measuring student understanding and reinforcing knowledge.", tech: "Assessment Engine" }] }
            }
          },
          {
            image: "imgs/Moon Academy/Tracks/web track/Screenshot 2026-10-01 180120.png",
            translations: {
              ar: { tab: "11. الويب 11", title: "شهادة إتمام مسار الويب", plate: "PLATE 11 — CERTIFICATE", hotspots: [{ x: 50, y: 50, title: "شهادة الإتمام", desc: "شهادة رقمية معتمدة تُمنح عند إتمام مسار تطوير الويب بنجاح.", tech: "Digital Certification" }] },
              en: { tab: "11. Web 11", title: "Web Track Completion Certificate", plate: "PLATE 11 — CERTIFICATE", hotspots: [{ x: 50, y: 50, title: "Completion Certificate", desc: "Digital certificate awarded upon successful completion of the web development track.", tech: "Digital Certification" }] }
            }
          }
        ]
      },
      // Chapter 3: AI Track
      {
        id: "ai-track",
        icon: "🤖",
        translations: {
          ar: {
            tabLabel: "03. مسار الذكاء الاصطناعي",
            roleTitle: "مسار الذكاء الاصطناعي",
            roleSubtitle: "تعلم مفاهيم AI والتعلم الآلي بأسلوب تفاعلي وبصري",
            lead: "مسار تعليمي متخصص في الذكاء الاصطناعي والتعلم الآلي مصمم للمراهقين. يغطي المفاهيم الأساسية وتطبيقات AI الحديثة من خلال مشاريع وتحديات عملية.",
            specs: [
              { label: "المحتوى", val: "AI • Machine Learning • Data" },
              { label: "الفئة العمرية", val: "12–18 سنة" },
              { label: "النظام", val: "Project-Based AI Learning" },
              { label: "الدور", val: "Full-Stack Developer" }
            ],
            highlights: [
              { num: "01", title: "مفاهيم AI بأسلوب بصري مبسط", desc: "شرح خوارزميات التعلم الآلي والشبكات العصبية بأسلوب مرئي تفاعلي يناسب المبتدئين." },
              { num: "02", title: "مشاريع AI تطبيقية", desc: "بناء نماذج ذكاء اصطناعي بسيطة كالتعرف على الصور والتوصيات الشخصية من خلال أدوات مبسطة." }
            ],
            tech: ["Python Basics", "AI Concepts", "Machine Learning", "Data Visualization", "Neural Networks Intro"]
          },
          en: {
            tabLabel: "03. AI Track",
            roleTitle: "Artificial Intelligence Track",
            roleSubtitle: "Learning AI & Machine Learning Concepts Interactively",
            lead: "A specialized AI and Machine Learning curriculum for teenagers. Covers fundamental AI concepts and modern applications through hands-on projects and practical challenges.",
            specs: [
              { label: "Content", val: "AI • Machine Learning • Data" },
              { label: "Age Range", val: "12–18 Years" },
              { label: "System", val: "Project-Based AI Learning" },
              { label: "Role", val: "Full-Stack Developer" }
            ],
            highlights: [
              { num: "01", title: "Visual AI Concept Explanations", desc: "Machine learning algorithms and neural networks explained through interactive visuals suitable for beginners." },
              { num: "02", title: "Applied AI Projects", desc: "Build simple AI models like image recognition and personal recommendations through simplified tools." }
            ],
            tech: ["Python Basics", "AI Concepts", "Machine Learning", "Data Visualization", "Neural Networks Intro"]
          }
        },
        steps: [
          { image: "imgs/Moon Academy/Tracks/ai track/Screenshot 2026-10-01 180346.png", translations: { ar: { tab: "01. AI 1", title: "مقدمة مسار الذكاء الاصطناعي", plate: "PLATE 01 — AI INTRO", hotspots: [{ x: 50, y: 50, title: "مقدمة AI", desc: "أول خطوة في عالم الذكاء الاصطناعي بأسلوب تفاعلي مبسط.", tech: "AI Learning Engine" }] }, en: { tab: "01. AI 1", title: "AI Track Introduction", plate: "PLATE 01 — AI INTRO", hotspots: [{ x: 50, y: 50, title: "AI Introduction", desc: "First steps into the AI world through a simplified interactive approach.", tech: "AI Learning Engine" }] } } },
          { image: "imgs/Moon Academy/Tracks/ai track/Screenshot 2026-10-01 180404.png", translations: { ar: { tab: "02. AI 2", title: "مفاهيم التعلم الآلي", plate: "PLATE 02 — ML CONCEPTS", hotspots: [{ x: 50, y: 50, title: "التعلم الآلي", desc: "شرح مفاهيم Machine Learning بالأمثلة البصرية والتفاعلية.", tech: "Machine Learning Basics" }] }, en: { tab: "02. AI 2", title: "Machine Learning Concepts", plate: "PLATE 02 — ML CONCEPTS", hotspots: [{ x: 50, y: 50, title: "Machine Learning", desc: "Explaining ML concepts with visual and interactive examples.", tech: "Machine Learning Basics" }] } } },
          { image: "imgs/Moon Academy/Tracks/ai track/Screenshot 2026-10-01 180417.png", translations: { ar: { tab: "03. AI 3", title: "بيانات وتصور المعلومات", plate: "PLATE 03 — DATA VIZ", hotspots: [{ x: 50, y: 50, title: "تصور البيانات", desc: "تعلم كيفية جمع البيانات وتحليلها وعرضها بشكل مرئي.", tech: "Data Visualization" }] }, en: { tab: "03. AI 3", title: "Data & Information Visualization", plate: "PLATE 03 — DATA VIZ", hotspots: [{ x: 50, y: 50, title: "Data Visualization", desc: "Learning data collection, analysis, and visual presentation.", tech: "Data Visualization" }] } } },
          { image: "imgs/Moon Academy/Tracks/ai track/Screenshot 2026-10-01 180442.png", translations: { ar: { tab: "04. AI 4", title: "الشبكات العصبية التفاعلية", plate: "PLATE 04 — NEURAL NETS", hotspots: [{ x: 50, y: 50, title: "الشبكات العصبية", desc: "استكشاف كيفية عمل الشبكات العصبية بأسلوب تفاعلي مرئي مبسط.", tech: "Neural Networks" }] }, en: { tab: "04. AI 4", title: "Interactive Neural Networks", plate: "PLATE 04 — NEURAL NETS", hotspots: [{ x: 50, y: 50, title: "Neural Networks", desc: "Exploring how neural networks work through simplified visual interaction.", tech: "Neural Networks" }] } } },
          { image: "imgs/Moon Academy/Tracks/ai track/Screenshot 2026-10-01 180459.png", translations: { ar: { tab: "05. AI 5", title: "مشاريع AI التطبيقية", plate: "PLATE 05 — AI PROJECTS", hotspots: [{ x: 50, y: 50, title: "مشاريع AI", desc: "بناء نماذج ذكاء اصطناعي تطبيقية كالتعرف على الصور والتوصيات.", tech: "Applied AI Projects" }] }, en: { tab: "05. AI 5", title: "Applied AI Projects", plate: "PLATE 05 — AI PROJECTS", hotspots: [{ x: 50, y: 50, title: "AI Projects", desc: "Building applied AI models like image recognition and recommendation systems.", tech: "Applied AI Projects" }] } } },
          { image: "imgs/Moon Academy/Tracks/ai track/Screenshot 2026-10-01 180506.png", translations: { ar: { tab: "06. AI 6", title: "تحديات الذكاء الاصطناعي", plate: "PLATE 06 — AI CHALLENGES", hotspots: [{ x: 50, y: 50, title: "تحديات AI", desc: "مسابقات وتحديات ذكاء اصطناعي تقيس مهارات الطالب وتطورها.", tech: "AI Challenges" }] }, en: { tab: "06. AI 6", title: "AI Challenges & Competitions", plate: "PLATE 06 — AI CHALLENGES", hotspots: [{ x: 50, y: 50, title: "AI Challenges", desc: "AI competitions and challenges measuring and developing student skills.", tech: "AI Challenges" }] } } },
          { image: "imgs/Moon Academy/Tracks/ai track/Screenshot 2026-10-01 180525.png", translations: { ar: { tab: "07. AI 7", title: "AI في الحياة الواقعية", plate: "PLATE 07 — AI REAL WORLD", hotspots: [{ x: 50, y: 50, title: "AI والحياة", desc: "كيف يُستخدم الذكاء الاصطناعي في التطبيقات الحقيقية اليومية.", tech: "Real World AI" }] }, en: { tab: "07. AI 7", title: "AI in Real Life", plate: "PLATE 07 — AI REAL WORLD", hotspots: [{ x: 50, y: 50, title: "AI in Daily Life", desc: "How artificial intelligence is used in real-world daily applications.", tech: "Real World AI" }] } } },
          { image: "imgs/Moon Academy/Tracks/ai track/Screenshot 2026-10-01 180540.png", translations: { ar: { tab: "08. AI 8", title: "إتمام مسار الذكاء الاصطناعي", plate: "PLATE 08 — AI COMPLETE", hotspots: [{ x: 50, y: 50, title: "إتمام المسار", desc: "شهادة ومكافآت إتمام مسار الذكاء الاصطناعي.", tech: "AI Certification" }] }, en: { tab: "08. AI 8", title: "AI Track Completion", plate: "PLATE 08 — AI COMPLETE", hotspots: [{ x: 50, y: 50, title: "Track Completion", desc: "Certificate and rewards for completing the Artificial Intelligence track.", tech: "AI Certification" }] } } }
        ]
      },
      // Chapter 4: Cybersecurity Track
      {
        id: "cybersecurity-track",
        icon: "🔐",
        translations: {
          ar: {
            tabLabel: "04. مسار الأمن السيبراني",
            roleTitle: "مسار الأمن السيبراني",
            roleSubtitle: "تعلم أمن المعلومات والحماية الرقمية بأسلوب مثير",
            lead: "مسار تعليمي في الأمن السيبراني وحماية المعلومات للمراهقين. يغطي مفاهيم الأمان الرقمي والتشفير وأسس الحماية من خلال سيناريوهات واقعية تفاعلية.",
            specs: [
              { label: "المحتوى", val: "Cybersecurity • Encryption • Ethics" },
              { label: "الفئة العمرية", val: "12–18 سنة" },
              { label: "النظام", val: "Scenario-Based Learning" },
              { label: "الدور", val: "Full-Stack Developer" }
            ],
            highlights: [
              { num: "01", title: "سيناريوهات أمنية واقعية", desc: "تعلم الأمن السيبراني من خلال سيناريوهات حقيقية تمثيلية كاكتشاف الثغرات والتصدي للهجمات." },
              { num: "02", title: "أسس التشفير وحماية البيانات", desc: "فهم أساسيات التشفير والمصادقة وحماية البيانات الشخصية بأسلوب مبسط وتفاعلي." }
            ],
            tech: ["Cybersecurity Basics", "Encryption", "Network Security", "Ethical Hacking Intro", "Digital Safety"]
          },
          en: {
            tabLabel: "04. Cybersecurity",
            roleTitle: "Cybersecurity Track",
            roleSubtitle: "Learning Digital Security & Protection in an Exciting Way",
            lead: "A cybersecurity and information protection curriculum for teenagers. Covers digital security concepts, encryption, and protection fundamentals through interactive real-world scenarios.",
            specs: [
              { label: "Content", val: "Cybersecurity • Encryption • Ethics" },
              { label: "Age Range", val: "12–18 Years" },
              { label: "System", val: "Scenario-Based Learning" },
              { label: "Role", val: "Full-Stack Developer" }
            ],
            highlights: [
              { num: "01", title: "Real-World Security Scenarios", desc: "Learn cybersecurity through realistic role-play scenarios like vulnerability discovery and attack defense." },
              { num: "02", title: "Encryption & Data Protection Foundations", desc: "Understanding encryption basics, authentication, and personal data protection in a simplified interactive way." }
            ],
            tech: ["Cybersecurity Basics", "Encryption", "Network Security", "Ethical Hacking Intro", "Digital Safety"]
          }
        },
        steps: [
          { image: "imgs/Moon Academy/Tracks/cybersecurity track/Screenshot 2026-10-01 180215.png", translations: { ar: { tab: "01. سيبر 1", title: "مقدمة الأمن السيبراني", plate: "PLATE 01 — CYBER INTRO", hotspots: [{ x: 50, y: 50, title: "مقدمة الأمن السيبراني", desc: "أساسيات الأمن الرقمي وأهميته في عالمنا المتصل.", tech: "Cybersecurity Fundamentals" }] }, en: { tab: "01. Cyber 1", title: "Cybersecurity Introduction", plate: "PLATE 01 — CYBER INTRO", hotspots: [{ x: 50, y: 50, title: "Cybersecurity Intro", desc: "Digital security basics and their importance in our connected world.", tech: "Cybersecurity Fundamentals" }] } } },
          { image: "imgs/Moon Academy/Tracks/cybersecurity track/Screenshot 2026-10-01 180225.png", translations: { ar: { tab: "02. سيبر 2", title: "أسس التشفير وحماية البيانات", plate: "PLATE 02 — ENCRYPTION", hotspots: [{ x: 50, y: 50, title: "التشفير", desc: "كيف يعمل التشفير لحماية البيانات الشخصية والاتصالات.", tech: "Encryption Basics" }] }, en: { tab: "02. Cyber 2", title: "Encryption & Data Protection", plate: "PLATE 02 — ENCRYPTION", hotspots: [{ x: 50, y: 50, title: "Encryption", desc: "How encryption works to protect personal data and communications.", tech: "Encryption Basics" }] } } },
          { image: "imgs/Moon Academy/Tracks/cybersecurity track/Screenshot 2026-10-01 180235.png", translations: { ar: { tab: "03. سيبر 3", title: "أمن الشبكات", plate: "PLATE 03 — NETWORK SECURITY", hotspots: [{ x: 50, y: 50, title: "أمن الشبكات", desc: "فهم كيفية حماية الشبكات والأجهزة من الاختراق والهجمات.", tech: "Network Security" }] }, en: { tab: "03. Cyber 3", title: "Network Security", plate: "PLATE 03 — NETWORK SECURITY", hotspots: [{ x: 50, y: 50, title: "Network Security", desc: "Understanding how to protect networks and devices from breaches and attacks.", tech: "Network Security" }] } } },
          { image: "imgs/Moon Academy/Tracks/cybersecurity track/Screenshot 2026-10-01 180250.png", translations: { ar: { tab: "04. سيبر 4", title: "اكتشاف الثغرات الأمنية", plate: "PLATE 04 — VULNERABILITIES", hotspots: [{ x: 50, y: 50, title: "الثغرات الأمنية", desc: "تعلم كيفية اكتشاف وتحليل الثغرات بأسلوب أخلاقي مسؤول.", tech: "Ethical Security Analysis" }] }, en: { tab: "04. Cyber 4", title: "Security Vulnerability Discovery", plate: "PLATE 04 — VULNERABILITIES", hotspots: [{ x: 50, y: 50, title: "Security Vulnerabilities", desc: "Learning to discover and analyze security gaps in a responsible ethical manner.", tech: "Ethical Security Analysis" }] } } },
          { image: "imgs/Moon Academy/Tracks/cybersecurity track/Screenshot 2026-10-01 180308.png", translations: { ar: { tab: "05. سيبر 5", title: "سيناريوهات الدفاع السيبراني", plate: "PLATE 05 — DEFENSE SCENARIOS", hotspots: [{ x: 50, y: 50, title: "الدفاع السيبراني", desc: "سيناريوهات تفاعلية لمحاكاة الهجمات والدفاع عن الأنظمة.", tech: "Defensive Security" }] }, en: { tab: "05. Cyber 5", title: "Cyber Defense Scenarios", plate: "PLATE 05 — DEFENSE SCENARIOS", hotspots: [{ x: 50, y: 50, title: "Cyber Defense", desc: "Interactive scenarios simulating attacks and defending systems.", tech: "Defensive Security" }] } } },
          { image: "imgs/Moon Academy/Tracks/cybersecurity track/Screenshot 2026-10-01 180315.png", translations: { ar: { tab: "06. سيبر 6", title: "إتمام مسار الأمن السيبراني", plate: "PLATE 06 — CYBER COMPLETE", hotspots: [{ x: 50, y: 50, title: "إتمام المسار", desc: "شهادة ومكافآت إتمام مسار الأمن السيبراني.", tech: "Cybersecurity Certification" }] }, en: { tab: "06. Cyber 6", title: "Cybersecurity Track Completion", plate: "PLATE 06 — CYBER COMPLETE", hotspots: [{ x: 50, y: 50, title: "Track Completion", desc: "Certificate and rewards for completing the Cybersecurity track.", tech: "Cybersecurity Certification" }] } } }
        ]
      },
      // Chapter 5: Projects Gallery
      {
        id: "projects",
        icon: "🚀",
        translations: {
          ar: {
            tabLabel: "05. المشاريع",
            roleTitle: "معرض القوالب الجاهزة للمشاريع",
            roleSubtitle: "قوالب مشاريع تفاعلية جاهزة للتخصيص في تطوير الألعاب والبرمجة",
            lead: "معرض متكامل للقوالب الجاهزة للمشاريع يتيح للطالب اختيار مشروع من علوم مختلفة وتخصيصه وبنائه الخاص. يتضمن محرر كود بلوك تفاعلي للبرمجة بالمكعبات، ومحرر ألعاب متكامل لبناء ألعاب حقيقية قابلة للتشغيل.",
            specs: [
              { label: "نوع القسم", val: "Project Templates Gallery" },
              { label: "الأنواع المتاحة", val: "ألعاب • برمجة بالمكعبات • AI" },
              { label: "المنهج", val: "Project-Based Learning" },
              { label: "الدور", val: "Full-Stack Developer" }
            ],
            highlights: [
              {
                num: "01",
                title: "معرض قوالب المشاريع الجاهزة",
                desc: "مكتبة من القوالب الجاهزة في الألعاب والبرمجة بالمكعبات وAI، الطالب يختار ويخصص ويبني مشروعه الفريد."
              },
              {
                num: "02",
                title: "محرر البرمجة بالمكعبات (Block Coding)",
                desc: "بيئة برمجة مرئية بالسحب والإفلات تتيح للطلاب تصميم روبوتات ذكية وبرمجة حركتها خطوة بخطوة."
              },
              {
                num: "03",
                title: "محرر الألعاب التفاعلي",
                desc: "محرر ألعاب متكامل لبناء ألعاب سباق ومغامرة حقيقية مع تعديل فيزيائيات الحركة والطاقة في الوقت الفعلي."
              }
            ],
            tech: ["Block Coding Engine", "Game Physics Editor", "Drag & Drop IDE", "Real-Time Simulation", "Project Templates"]
          },
          en: {
            tabLabel: "05. Projects",
            roleTitle: "Project Templates Gallery",
            roleSubtitle: "Ready-Made Interactive Project Templates for Game Dev & Coding",
            lead: "A complete project templates gallery where students select from real-world projects across different sciences and customize them as their own. Features an interactive block-coding editor for robot programming and a game physics editor for building real playable games.",
            specs: [
              { label: "Section Type", val: "Project Templates Gallery" },
              { label: "Available Types", val: "Games • Block Coding • AI" },
              { label: "Curriculum", val: "Project-Based Learning" },
              { label: "Role", val: "Full-Stack Developer" }
            ],
            highlights: [
              {
                num: "01",
                title: "Ready-Made Project Templates Gallery",
                desc: "A library of templates in Games, Block Coding, and AI — students pick, customize, and build their unique project."
              },
              {
                num: "02",
                title: "Block Coding Editor (Visual Programming)",
                desc: "A drag-and-drop visual coding environment for designing intelligent robots and programming their movements step by step."
              },
              {
                num: "03",
                title: "Interactive Game Physics Editor",
                desc: "A full game editor for building real racing and adventure games with real-time adjustment of physics, speed, and energy."
              }
            ],
            tech: ["Block Coding Engine", "Game Physics Editor", "Drag & Drop IDE", "Real-Time Simulation", "Project Templates"]
          }
        },
        steps: [
          {
            image: "imgs/Moon Academy/Projects/Screenshot 2026-10-01 181952.png",
            translations: {
              ar: {
                tab: "01. معرض المشاريع",
                title: "معرض القوالب الجاهزة للمشاريع",
                plate: "PLATE 01 — PROJECT TEMPLATES GALLERY",
                hotspots: [
                  { x: 28, y: 55, title: "قالب روبوت البحث عن الكنز", desc: "مشروع سحب وإفلات للمكعبات — الطالب يبرمج روبوتاً ملوناً لجمع كل النجوم الثلاثة في الساحة بخوارزمية خاصة به.", tech: "Block Coding Engine • Drag & Drop" },
                  { x: 75, y: 55, title: "قالب سباق المركبة السحرية", desc: "مشروع لعبة سباق فضائية ثنائية الأبعاد — الطالب يعدّل فيزيائيات المركبة والسرعة والطاقة ويبني لعبته الخاصة.", tech: "Game Physics Editor • 2D Engine" }
                ]
              },
              en: {
                tab: "01. Templates Gallery",
                title: "Ready-Made Project Templates Gallery",
                plate: "PLATE 01 — PROJECT TEMPLATES GALLERY",
                hotspots: [
                  { x: 28, y: 55, title: "Treasure-Hunt Robot Template", desc: "A block-coding drag-and-drop project — the student programs a colored robot to collect all 3 stars on the grid with their own algorithm.", tech: "Block Coding Engine • Drag & Drop" },
                  { x: 75, y: 55, title: "Magic Space Car Race Template", desc: "A 2D space racing game project — the student adjusts vehicle physics, speed, and energy to build their own playable game.", tech: "Game Physics Editor • 2D Engine" }
                ]
              }
            }
          },
          {
            image: "imgs/Moon Academy/Projects/Screenshot 2026-10-01 182008.png",
            translations: {
              ar: {
                tab: "02. محرر البلوك كود",
                title: "محرر البرمجة بالمكعبات — روبوت البحث عن الكنز",
                plate: "PLATE 02 — BLOCK CODING EDITOR",
                hotspots: [
                  { x: 22, y: 50, title: "ساحة الروبوت التفاعلية", desc: "شبكة ثنائية الأبعاد يتحرك عليها الروبوت وفق البرنامج الذي يكتبه الطالب — النجوم الثلاث هي هدف جمعها بالترتيب.", tech: "2D Grid Simulation" },
                  { x: 58, y: 50, title: "لوحة سحب وإفلات المكعبات البرمجية", desc: "برنامج الروبوت يُبنى بسحب المكعبات (تحرك ←، →، ↑، ↓ • قل • كرر • إذا على الحافة • إذا على نجمة • عزف دالة) إلى منطقة التجميع.", tech: "Block Coding Engine" },
                  { x: 88, y: 50, title: "لوحة المكعبات البرمجية", desc: "قائمة غنية بمكعبات الحركة والشرط والدوال والحلقات ملونة بألوان مميزة لكل نوع تسهل فهم منطق البرمجة.", tech: "Visual Programming Blocks" }
                ]
              },
              en: {
                tab: "02. Block Coding Editor",
                title: "Block Coding Editor — Treasure-Hunt Robot",
                plate: "PLATE 02 — BLOCK CODING EDITOR",
                hotspots: [
                  { x: 22, y: 50, title: "Interactive Robot Arena", desc: "A 2D grid where the robot moves according to the student's program — 3 stars must be collected in the right order.", tech: "2D Grid Simulation" },
                  { x: 58, y: 50, title: "Drag & Drop Block Assembly Area", desc: "The robot's program is built by dragging blocks (Move ←→↑↓ • Say • Repeat • If Edge • If Star • Call Function) into the assembly zone.", tech: "Block Coding Engine" },
                  { x: 88, y: 50, title: "Programming Blocks Palette", desc: "A rich palette of movement, condition, function, and loop blocks color-coded by type, making programming logic intuitive.", tech: "Visual Programming Blocks" }
                ]
              }
            }
          },
          {
            image: "imgs/Moon Academy/Projects/Screenshot 2026-10-01 182017.png",
            translations: {
              ar: {
                tab: "03. محرر الألعاب",
                title: "محرر الألعاب — سباق المركبة السحرية",
                plate: "PLATE 03 — GAME PHYSICS EDITOR",
                hotspots: [
                  { x: 25, y: 50, title: "بيئة اللعبة الحية", desc: "محاكاة فورية للعبة السباق الفضائية — المركبة تتحرك وتتجنب العقبات لجمع النجوم بمنطق فيزيائي حقيقي.", tech: "Real-Time Game Simulation" },
                  { x: 78, y: 35, title: "لوحة تعديل فيزيائيات المركبة", desc: "شرائح تفاعلية للسيطرة على السرعة القصوى للمحرك ودرع الطاقة HP في الوقت الفعلي مع رؤية فورية للتأثير.", tech: "Game Physics Sliders" }
                ]
              },
              en: {
                tab: "03. Game Editor",
                title: "Game Physics Editor — Space Car Race",
                plate: "PLATE 03 — GAME PHYSICS EDITOR",
                hotspots: [
                  { x: 25, y: 50, title: "Live Game Environment", desc: "Real-time simulation of the space racing game — the vehicle moves and dodges obstacles to collect stars with genuine physics.", tech: "Real-Time Game Simulation" },
                  { x: 78, y: 35, title: "Vehicle Physics Control Panel", desc: "Interactive sliders control maximum engine speed and HP energy shield in real-time with immediate visual feedback.", tech: "Game Physics Sliders" }
                ]
              }
            }
          }
        ]
      }
    ]
  },

  // 1. WASALNA (SINGLE MASTER BOOK WITH CHAPTERS)
  {
    id: "wasalna",
    isMasterBook: true,
    category: "wasalna",
    code: "FIELD MANUAL • VOL. 01",
    year: "2026",
    rating: "✦ ✦ ✦ ✦ ✦",
    logo: "imgs/wesalna/logo/Group 4.svg",
    translations: {
      ar: {
        title: "منصة وصلنا",
        subtitle: "منظومة التجارة السريعة وتنسيق الأساطيل اللحظية",
        lead: "منصة تجارة إلكترونية فورية (Q-Commerce) تربط المستهلكين بالمتاجر المحلية المحيطة في نطاق سكناهم. تم بناء النظام بمعمارية موحدة متعددة الأدوار (Multi-Tenant) تدمج تجربة تسوق العميل، ونقاط بيع الكاشير، وتتبع الأسطول الميداني على الخريطة، والفوترة الإلكترونية المعتمدة.",
        coverMeta: "دليل المنظومة الشامل • 2026"
      },
      en: {
        title: "Wasalna Platform",
        subtitle: "Hyperlocal Q-Commerce, Dispatch & Fleet Logistics Ecosystem",
        lead: "A mission-critical hyperlocal quick-commerce platform connecting consumers to neighborhood merchants in minutes. Engineered with an event-driven multi-tenant architecture uniting consumer shopping, branch POS dispatch, live Leaflet courier GPS tracking, and tax-compliant e-invoicing.",
        coverMeta: "Master Platform Dossier • 2026"
      }
    },
    // CHAPTERS / ROLES INSIDE WASALNA
    chapters: [
      {
        id: "customer",
        icon: "🛒",
        translations: {
          ar: {
            tabLabel: "01. رحلة العميل",
            roleTitle: "رحلة العميل (Customer Journey)",
            roleSubtitle: "استكشاف المتاجر القريبة، الشراء الفوري، وتتبع الطلب لحظياً",
            lead: "واجهة متجاوبة خفيفة مصممة خصيصاً للمستهلك لشراء احتياجات المنزل من أقرب المتاجر في دقائق معدودة. تعتمد على التحديد الجغرافي اللحظي، وحساب مسافات التوصيل بالـ KM، وباقات سرعة التوصيل مع الفوترة الإلكترونية.",
            specs: [
              { label: "نوع الواجهة", val: "Consumer Web App & PWA" },
              { label: "نطاق التغطية", val: "المعادي، القاهرة" },
              { label: "المعمارية", val: "Next.js 15 • Tailwind CSS" },
              { label: "الدور المصمم", val: "Full-Stack & UI/UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "تحديد النطاق الجغرافي اللحظي (Spatial Distance Matrix)",
                desc: "ربط العميل تلقائياً بأقرب فروع المتاجر والصيدليات المفتوحة ضمن نطاق شارع 9 بالمعادي مع احتساب فوري لدقائق التوصيل ورسوم المسافة."
              },
              {
                num: "02",
                title: "محاكي تتبع مسار الطلب المباشر (Finite State Machine)",
                desc: "شريط تفاعلي يعرض تحركات الطلب بين المتجر والمندوب وموقع العميل عبر قنوات WebSocket لحظية تضمن الشفافية الكاملة."
              },
              {
                num: "03",
                title: "الفوترة الإلكترونية الضريبية المعتمدة (E-Invoice & QR)",
                desc: "إصدار فواتير بيع مبسطة فور إتمام الاستلام مزودة برمز QR مشفر متوافق مع معايير الضرائب والتوثيق الرقمي."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Leaflet GIS", "WebSockets", "Node.js", "PostgreSQL", "QR Crypto"]
          },
          en: {
            tabLabel: "01. Customer Journey",
            roleTitle: "Customer Journey",
            roleSubtitle: "Hyperlocal Store Discovery, Instant Ordering & Real-Time Tracking",
            lead: "A high-performance consumer shopping interface delivering groceries and household essentials in minutes from nearby stores. Features real-time GPS geolocation, dynamic Haversine delivery distance calculations, speed tiers, and compliant e-invoicing.",
            specs: [
              { label: "Interface Type", val: "Consumer Web App & PWA" },
              { label: "Coverage Zone", val: "Maadi, Cairo" },
              { label: "Architecture", val: "Next.js 15 • Tailwind CSS" },
              { label: "Designer Role", val: "Full-Stack Architect & UI/UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "Hyperlocal Store Discovery & Distance Matrix",
                desc: "Matches consumers to active open merchants in their exact neighborhood with instant kilometer distance and delivery fee calculations."
              },
              {
                num: "02",
                title: "End-to-End Real-Time Order State Machine",
                desc: "Live order tracking telemetry powered by bi-directional WebSockets, keeping the consumer informed through every stage of preparation and transit."
              },
              {
                num: "03",
                title: "Tax-Compliant Electronic Invoicing & QR",
                desc: "Generates tamper-proof simplified e-invoices with encrypted QR codes immediately upon delivery settlement."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Leaflet GIS", "WebSockets", "Node.js", "PostgreSQL", "QR Crypto"]
          }
        },
        steps: [
          {
            image: "imgs/wesalna/Customer/Screenshot 2026-10-01 145308.png",
            translations: {
              ar: {
                tab: "01. المتجر",
                title: "استكشاف المتاجر وتحديد النطاق الجغرافي",
                plate: "PLATE 01 — STORE DISCOVERY & GEOLOCATION",
                hotspots: [
                  { x: 74, y: 6, title: "محدد الموقع الجغرافي اللحظي", desc: "يرتبط بنظام حساب مسافات التوصيل بالـ KM ورسم حدود التغطية لجميع المتاجر المفتوحة بالمعادي.", tech: "HTML5 Geolocation • Spatial SQL Queries" },
                  { x: 58, y: 41, title: "محرك البحث الفوري في المنتجات", desc: "بحث هجين في آلاف السلع عبر الصيدليات والمخابز والسوبرماركت في أقل من 15ms مع Debounced Auto-complete.", tech: "Full-Text Search • Client-side Cache" },
                  { x: 24, y: 72, title: "بطاقات المتاجر التفاعلية", desc: "عرض رسوم التوصيل، المسافة بالكيلومتر، والوقت التقديري للوصول مع شارة الحالة الحية (مفتوح الآن).", tech: "Dynamic Haversine Distance Engine" }
                ]
              },
              en: {
                tab: "01. Discovery",
                title: "Hyperlocal Store Discovery & Geolocation",
                plate: "PLATE 01 — STORE DISCOVERY & GEOLOCATION",
                hotspots: [
                  { x: 74, y: 6, title: "Real-time Geolocation Switcher", desc: "Dynamic address selector hooked to kilometer distance computation and coverage zone mapping.", tech: "HTML5 Geolocation • Spatial SQL Queries" },
                  { x: 58, y: 41, title: "Instant Multi-Store Search Bar", desc: "Hybrid search querying thousands of SKUs across groceries and pharmacies in under 15ms with debounced auto-complete.", tech: "Full-Text Search • Client-side Cache" },
                  { x: 24, y: 72, title: "Active Merchant Badges", desc: "Displays delivery fees, real distance in kilometers, and estimated transit duration with live store status.", tech: "Dynamic Haversine Distance Engine" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Customer/Screenshot 2026-10-01 145332.png",
            translations: {
              ar: {
                tab: "02. المنتجات",
                title: "كتالوج المتجر المباشر مع جرد المخزون الفوري",
                plate: "PLATE 02 — LIVE CATALOG & INVENTORY LOCK",
                hotspots: [
                  { x: 18, y: 25, title: "الشريط العائم الذكي للسلة", desc: "مؤشر عائم متزامن يعرض عدد العناصر والمجموع الإجمالي وزر مباشر لمتابعة الطلب دون تعطيل تصفح الأقسام.", tech: "React Context • LocalStorage Persistence" },
                  { x: 21, y: 72, title: "زر الإضافة الفورية مع تدقيق المخزون", desc: "ربط فوري بين نقرة الزبون وجرد المخزون الفعلي لمنع طلب أي منتج نفذت كميته بالمحل.", tech: "Atomic Inventory Reservation" }
                ]
              },
              en: {
                tab: "02. Store Catalog",
                title: "Live Product Catalog & Real-Time Stock Validation",
                plate: "PLATE 02 — LIVE CATALOG & INVENTORY LOCK",
                hotspots: [
                  { x: 18, y: 25, title: "Optimistic Floating Cart Bar", desc: "Synchronized floating indicator displaying item count, subtotal, and checkout trigger without disrupting navigation.", tech: "React Context • LocalStorage Persistence" },
                  { x: 21, y: 72, title: "Instant Add Button with Stock Lock", desc: "Direct validation between click action and store inventory counter to prevent overselling.", tech: "Atomic Inventory Reservation" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Customer/Screenshot 2026-10-01 145348.png",
            translations: {
              ar: {
                tab: "03. السلة",
                title: "مراجعة بنود الطلب وتفقيط الرسوم والخدمة",
                plate: "PLATE 03 — CART REVIEW & COST BREAKDOWN",
                hotspots: [
                  { x: 56, y: 37, title: "وحدة التحكم في الكميات", desc: "أزرار ضبط ديناميكية مع معالجة سريعة لـ Debounce لمنع تكرار نداءات الـ API أثناء التعديل السريع.", tech: "Optimistic State Mutation" },
                  { x: 28, y: 78, title: "زر متابعة الطلب والتوصيل الذكي", desc: "انتقال سلس لخطوة التحقق من العنوان وسرعة التوصيل مع حفظ حالة السلة تلقائياً.", tech: "CSS View Transitions API" }
                ]
              },
              en: {
                tab: "03. Cart Review",
                title: "Cart Review, Quantity Steppers & Fee Breakdown",
                plate: "PLATE 03 — CART REVIEW & COST BREAKDOWN",
                hotspots: [
                  { x: 56, y: 37, title: "Debounced Stepper Controls", desc: "Smooth numeric adjustments with optimistic updates preventing race conditions during rapid taps.", tech: "Optimistic State Mutation" },
                  { x: 28, y: 78, title: "Smart Order Progression Action", desc: "Seamless transition to delivery address confirmation while persisting cart state.", tech: "CSS View Transitions API" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Customer/Screenshot 2026-10-01 145406.png",
            translations: {
              ar: {
                tab: "04. الدفع",
                title: "اختيار باقات سرعة التوصيل وبوابات الدفع المصرية",
                plate: "PLATE 04 — SPEED TIERS & LOCAL PAYMENTS",
                hotspots: [
                  { x: 62, y: 45, title: "باقات سرعة التوصيل", desc: "توصيل فوري ذو أولوية (20-35 دقيقة) مقابل اقتصادي منتظم، مع عد تنازلي لصلاحية السعر والمسافة.", tech: "Dynamic Tier Dispatch Algorithm" },
                  { x: 62, y: 72, title: "بوابات الدفع المصرية (InstaPay, Vodafone Cash, COD)", desc: "دعم قنوات الدفع المفضلة محلياً في مصر: إنستاباي، محافظ المحمول (فودافون كاش)، والدفع نقداً عند الاستلام.", tech: "Multi-Gateway Payment Controller" }
                ]
              },
              en: {
                tab: "04. Checkout & Pay",
                title: "Delivery Speed Tiers & Egyptian Payment Gateways",
                plate: "PLATE 04 — SPEED TIERS & LOCAL PAYMENTS",
                hotspots: [
                  { x: 62, y: 45, title: "Speed Tiers (Priority vs Economy)", desc: "Priority express transit (20-35 mins) vs regular economy, with dynamic distance countdown timers.", tech: "Dynamic Tier Dispatch Algorithm" },
                  { x: 62, y: 72, title: "Local Egyptian Gateways (InstaPay, Wallets, COD)", desc: "Native support for InstaPay, mobile cash wallets (Vodafone Cash), and Cash on Delivery.", tech: "Multi-Gateway Payment Controller" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Customer/Screenshot 2026-10-01 145421.png",
            translations: {
              ar: {
                tab: "05. التتبع الحي",
                title: "محاكي الحالات المباشرة وتتبع الطلب لحظياً",
                plate: "PLATE 05 — REALTIME ORDER STATE MACHINE",
                hotspots: [
                  { x: 50, y: 22, title: "شريط محاكي الحالات الحي (Live Simulator)", desc: "أزرار تفاعلية تتيح اختبار تجربة العميل عبر 4 حالات: قبول الطلب -> بدء التجهيز -> خروج للتوصيل -> تسليم وفاتورة.", tech: "Finite State Machine (FSM) • WebSockets" },
                  { x: 68, y: 31, title: "مؤشر الخطوات اللحظي المتزامن", desc: "أيقونات حالة تفاعلية تضيء وتغير اللون آلياً عند تحرك الطلب بين المتجر والمندوب وموقع العميل.", tech: "CSS Animations • Reactive State" }
                ]
              },
              en: {
                tab: "05. Live Tracking",
                title: "Real-Time Order State Machine Simulator",
                plate: "PLATE 05 — REALTIME ORDER STATE MACHINE",
                hotspots: [
                  { x: 50, y: 22, title: "Live State Machine Simulator", desc: "Interactive testing bar allowing reviewers to trigger order transitions from acceptance to delivery.", tech: "Finite State Machine (FSM) • WebSockets" },
                  { x: 68, y: 31, title: "Synchronized Status Conduit", desc: "Visual milestone timeline reflecting store preparation, dispatch, and final courier approach.", tech: "CSS Animations • Reactive State" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Customer/Screenshot 2026-10-01 145500.png",
            translations: {
              ar: {
                tab: "06. التسليم",
                title: "تأكيد استلام الطلب وتوثيق سداد القيمة بنجاح",
                plate: "PLATE 06 — HANDOVER COMPLETE & INVOICE TRIGGER",
                hotspots: [
                  { x: 35, y: 68, title: "زر الفاتورة الضريبية الرسمية", desc: "يفتح نافذة منبثقة تفاعلية بالفاتورة الإلكترونية المعتمدة المطابقة لقوانين التجارة الإلكترونية.", tech: "E-Invoice Trigger Modal" },
                  { x: 68, y: 31, title: "حالة إتمام التسليم اللحظية", desc: "توثيق انتهاء مسار الرحلة وسداد القيمة وتفعيل تقييم العميل للمتجر ومندوب التوصيل.", tech: "Real-time Order Handover Event" }
                ]
              },
              en: {
                tab: "06. Handover",
                title: "Order Handover Complete & Invoice Generation",
                plate: "PLATE 06 — HANDOVER COMPLETE & INVOICE TRIGGER",
                hotspots: [
                  { x: 35, y: 68, title: "Official Tax Invoice Trigger", desc: "Direct modal invocation generating certified electronic invoice conforming to regional tax guidelines.", tech: "E-Invoice Trigger Modal" },
                  { x: 68, y: 31, title: "Real-time Handover Confirmation", desc: "Verifies completed delivery state, payment settlement, and unlocks customer merchant review prompt.", tech: "Real-time Order Handover Event" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Customer/Screenshot 2026-10-01 145511.png",
            translations: {
              ar: {
                tab: "07. الفاتورة",
                title: "فاتورة مبيعات إلكترونية مبسطة مع كود QR مشفر",
                plate: "PLATE 07 — ELECTRONIC TAX INVOICE & QR",
                hotspots: [
                  { x: 22, y: 18, title: "كود التحقق الرقمي المباشر (QR Code)", desc: "رمز استجابة سريع مشفر يحتوي على بيانات المتجر، رقم الفاتورة المرجعي، ومطابقة ضريبة القيمة المضافة.", tech: "Base64 TLV QR Generator" },
                  { x: 50, y: 58, title: "جدول بنود المنتجات والأسعار المفصلة", desc: "حساب دقيق لقيمة المنتجات، ورسوم التوصيل، ورسوم المنصة مع توثيق طريقة الدفع المعتمدة.", tech: "Automated Ledger Calculation" }
                ]
              },
              en: {
                tab: "07. Tax Invoice",
                title: "Simplified Electronic Tax Invoice with QR Code",
                plate: "PLATE 07 — ELECTRONIC TAX INVOICE & QR",
                hotspots: [
                  { x: 22, y: 18, title: "Digital Verification QR Code", desc: "Encrypted QR containing seller tax credentials, timestamp, total amount, and VAT breakdown.", tech: "Base64 TLV QR Generator" },
                  { x: 50, y: 58, title: "Itemized Ledger & Platform Fees", desc: "Comprehensive accounting line items including base goods value, logistics fee, and payment method.", tech: "Automated Ledger Calculation" }
                ]
              }
            }
          }
        ]
      },
      {
        id: "cashier",
        icon: "🖥️",
        translations: {
          ar: {
            tabLabel: "02. رحلة الكاشير والفرع",
            roleTitle: "رحلة الكاشير ونقاط البيع (Cashier & Cloud POS Operations)",
            roleSubtitle: "إدارة الطلبات الحية، محطة الكاشير POS، إسناد المناديب وتتبع الأسطول",
            lead: "لوحة تحكم تشغيلية متكاملة داخل الفرع صُممت لموظفي الكاشير ومديري المخازن لمعالجة الأوامر الواردة فوراً، مع محطة نقطة بيع سحابية POS لمبيعات الفرع المباشرة، وحجز المخزون آلياً، واختيار المندوب الأنسب، وتتبع مسار الشحنات على الخريطة التفاعلية بالمعادي.",
            specs: [
              { label: "نوع اللوحة", val: "Branch Fulfillment & Cloud POS" },
              { label: "تتبع الأسطول", val: "Real-Time Courier GPS & Telemetry" },
              { label: "المعمارية", val: "Next.js • Leaflet • WebSockets • POS" },
              { label: "الدور المصمم", val: "System Architect & UI/UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "لوحة إدارة الطلبات اللحظية (Live Dispatch Pipeline)",
                desc: "استقبال لحظي للطلبات مع تنبيهات سمعية وفلترة بصرية للأوامر: قيد الانتظار، مقبول، جاري التجهيز، خرج للتوصيل، وتم التسليم."
              },
              {
                num: "02",
                title: "محطة نقطة البيع السحابية (Cloud POS Terminal)",
                desc: "محطة مبيعات داخل الفرع تدعم قارئ الباركود، حساب الضرائب والخصومات آلياً، وخيارات دفع نقدية وبنكية مع طباعة إيصالات."
              },
              {
                num: "03",
                title: "خريطة تفاعلية لتتبع أسطول التوصيل (GIS Vector Map)",
                desc: "خريطة Leaflet لمنطقة المعادي تكشف مواقع المتاجر وموقع كل مندوب وحالة حركته اللحظية مع مسارات الشحنات."
              },
              {
                num: "04",
                title: "تسجيل الدخول السريع بكود PIN واحتساب العمولات",
                desc: "مصادقة فورية للمناديب برمز سري مكون من 4 أرقام مع احتساب آلي لعمولة المنصة وتكلفة البضاعة المباعة (COGS)."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Leaflet Maps", "GIS Geocoding", "WebSockets", "Cloud POS", "PostgreSQL", "COGS Ledger"]
          },
          en: {
            tabLabel: "02. Cashier & POS",
            roleTitle: "Cashier & Cloud POS Operations",
            roleSubtitle: "Live Order Dispatch, Cloud POS Terminal, Courier Assignment & GIS Fleet Tracking",
            lead: "A high-throughput operations portal for branch cashiers and store dispatchers. Ingests incoming orders in real-time, features an integrated cloud POS terminal for in-store checkout, locks inventory automatically, assigns active couriers, and monitors fleet progress over a live vector map of Cairo.",
            specs: [
              { label: "Portal Type", val: "Branch Fulfillment & Cloud POS" },
              { label: "Telemetry", val: "Real-Time Courier GPS & Telemetry" },
              { label: "Architecture", val: "Next.js • Leaflet • WebSockets • POS" },
              { label: "Designer Role", val: "System Architect & UI/UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "Real-time Order Ingestion & Fulfillment Kanban",
                desc: "Live order ingestion with acoustic chimes and state filters: Pending, Accepted, Packing, Out for Delivery, and Delivered."
              },
              {
                num: "02",
                title: "Native Cloud POS Terminal & Barcode Engine",
                desc: "In-store checkout terminal featuring instant barcode scanning, automated tax computation, multi-tender payments and thermal receipts."
              },
              {
                num: "03",
                title: "Interactive Vector GIS Fleet Tracking Map",
                desc: "Leaflet GIS map visualizing active drivers, store origin hubs, and customer delivery destinations in real-time."
              },
              {
                num: "04",
                title: "Fast 4-Digit Driver PIN Authentication & COGS",
                desc: "Frictionless authentication for mobile couriers paired with automated cost-of-goods-sold and platform fee deductions."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Leaflet Maps", "GIS Geocoding", "WebSockets", "Cloud POS", "PostgreSQL", "COGS Ledger"]
          }
        },
        steps: [
          {
            image: "imgs/wesalna/Cashier/Screenshot 2026-10-01 145914.png",
            translations: {
              ar: {
                tab: "01. الطلبات",
                title: "لوحة إدارة طلبات الفرع اللحظية وحجز المخزون",
                plate: "PLATE 01 — LIVE DISPATCH & ORDER FULFILLMENT",
                hotspots: [
                  { x: 68, y: 25, title: "تبويبات مراحل الطلبات الفورية", desc: "عدادات فورية تصنف الطلبات: قيد الانتظار (1)، مقبول، جاري التجهيز، خرج للتوصيل (3)، وتم التسليم (9).", tech: "Reactive Kanban Dispatch Filter" },
                  { x: 55, y: 84, title: "زر قبول الطلب وحجز المخزون الفوري", desc: "تأكيد الطلب بنقرة واحدة يحجز الكميات من قاعدة بيانات الفرع ويصدر إشعاراً فورياً للمندوب الأقرب.", tech: "ACID Database Transaction" },
                  { x: 45, y: 56, title: "تنبيه إسناد مندوب التوصيل", desc: "إشارة تحذير ذكية توجه الكاشير لاختيار مندوب من الأسطول المتوفر أو إسناده عند اكتمال التجهيز.", tech: "Smart Courier Dispatch Prompt" }
                ]
              },
              en: {
                tab: "01. Live Orders",
                title: "Branch Live Orders Cockpit & Inventory Reservation",
                plate: "PLATE 01 — LIVE DISPATCH & ORDER FULFILLMENT",
                hotspots: [
                  { x: 68, y: 25, title: "Reactive Pipeline Tabs", desc: "Real-time counters sorting orders: Pending (1), Accepted, Packing, Out for Delivery (3), and Delivered (9).", tech: "Reactive Kanban Dispatch Filter" },
                  { x: 55, y: 84, title: "One-Click Accept & Inventory Lock", desc: "Instantly reserves warehouse stock and pings available fleet drivers in the vicinity.", tech: "ACID Database Transaction" },
                  { x: 45, y: 56, title: "Courier Assignment Reminder", desc: "Smart prompt reminding cashier to pair the order with a scooter or motorcycle driver.", tech: "Smart Courier Dispatch Prompt" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Cashier/Screenshot 2026-10-01 150007.png",
            translations: {
              ar: {
                tab: "02. الإسناد",
                title: "نافذة إسناد مندوب وبدء مسار الرحلة",
                plate: "PLATE 02 — SMART DRIVER ASSIGNMENT MODAL",
                hotspots: [
                  { x: 48, y: 47, title: "قائمة المناديب المتصلين والجاهزين", desc: "عرض الكابتن المتواجد (كابتن حسام حسن - سكوتر / كابتن محمود البطل - موتوسيكل) مع رقم الهاتف وحالة الاتصال.", tech: "Real-time Presence System" },
                  { x: 44, y: 70, title: "زر إسناد المندوب وبدء مسار الرحلة", desc: "يرسل إشعار Push Notification لهاتف السائق ويحدث شاشة العميل بحالة 'خرج للتوصيل'.", tech: "Web Push & WebSocket Broadcast" }
                ]
              },
              en: {
                tab: "02. Assign Courier",
                title: "Driver Assignment Modal & Route Initialization",
                plate: "PLATE 02 — SMART DRIVER ASSIGNMENT MODAL",
                hotspots: [
                  { x: 48, y: 47, title: "Active Courier Presence Roster", desc: "Displays online drivers (scooter vs motorcycle), phone contact, and availability status.", tech: "Real-time Presence System" },
                  { x: 44, y: 70, title: "Assign & Broadcast Route Action", desc: "Sends instant push notification to driver device and flips customer status to 'Out for Delivery'.", tech: "Web Push & WebSocket Broadcast" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Cashier/Screenshot 2026-10-01 150021.png",
            translations: {
              ar: {
                tab: "03. التجهيز",
                title: "متابعة الطلبات قيد التجهيز والتغليف والاستدعاء",
                plate: "PLATE 03 — ORDER PACKING & COURIER DISPATCH",
                hotspots: [
                  { x: 70, y: 26, title: "قائمة الطلبات قيد التجهيز (Packing)", desc: "عرض المنتجات المطلوبة وتأكيد استخراجها من الرفوف قبل وصول المندوب.", tech: "Kitchen Display / Fulfillment Workflow" },
                  { x: 52, y: 82, title: "حالة انتظار وصول المندوب", desc: "تتبع وصول مندوب التوصيل لاستلام الشحنة المختومة من نقطة الاستلام بالفرع.", tech: "Handover Readiness Verification" }
                ]
              },
              en: {
                tab: "03. Preparation",
                title: "Order Packing Queue & Courier Staging Area",
                plate: "PLATE 03 — ORDER PACKING & COURIER DISPATCH",
                hotspots: [
                  { x: 70, y: 26, title: "Order Packing Checklist", desc: "Detailed product and SKU verification before courier arrival at branch dispatch counter.", tech: "Kitchen Display / Fulfillment Workflow" },
                  { x: 52, y: 82, title: "Driver Staging Status", desc: "Monitors driver arrival ETA at the branch pickup zone for sealed bag handover.", tech: "Handover Readiness Verification" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/POS Cashier/Screenshot 2026-10-01 151851.png",
            translations: {
              ar: {
                tab: "04. الكاشير POS",
                title: "محطة نقطة البيع السحابية للمبيعات المباشرة بالفرع",
                plate: "PLATE 04 — CLOUD POINT OF SALE TERMINAL",
                hotspots: [
                  { x: 68, y: 35, title: "كتالوج المنتجات السريعة وقارئ الباركود", desc: "واجهة لمسية متطورة مع مسح فوري للباركود والبحث اللحظي عن السلع والأسعار.", tech: "Barcode Scanner & Fast Catalog" },
                  { x: 25, y: 45, title: "سلة المشتريات والحساب التلقائي", desc: "حساب فوري للإجمالي مع الضريبة والخصومات وعرض تفاصيل السلع المضافة.", tech: "Real-time Price Calculation Engine" },
                  { x: 25, y: 88, title: "أزرار الدفع الفوري وطباعة الفاتورة", desc: "دعم الدفع النقدي، البطاقات البنكية، والمحافظ الإلكترونية مع طباعة الإيصال الحراري فوراً.", tech: "Multi-Tender POS Gateway & ESC/POS" }
                ]
              },
              en: {
                tab: "04. Cloud POS",
                title: "Cloud Point of Sale Terminal & In-Store Quick Checkout",
                plate: "PLATE 04 — CLOUD POINT OF SALE TERMINAL",
                hotspots: [
                  { x: 68, y: 35, title: "Fast Touch Catalog & Barcode Reader", desc: "Tactile touch interface with instant barcode lookup and lightning-fast item entry.", tech: "Barcode Scanner & Fast Catalog" },
                  { x: 25, y: 45, title: "Dynamic POS Cart & Tax Calculation", desc: "Live cart subtotal, discount codes, VAT computation, and change due calculator.", tech: "Real-time Price Calculation Engine" },
                  { x: 25, y: 88, title: "Multi-Tender Pay & Thermal Receipt", desc: "Cash, debit/credit cards, and digital wallets support with ESC/POS thermal printing.", tech: "Multi-Tender POS Gateway & ESC/POS" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Cashier/Screenshot 2026-10-01 150221.png",
            translations: {
              ar: {
                tab: "05. الخريطة",
                title: "إدارة وتتبع أسطول التوصيل التفاعلي على خريطة المعادي",
                plate: "PLATE 05 — INTERACTIVE GPS FLEET TRACKING MAP",
                hotspots: [
                  { x: 52, y: 74, title: "علامة الفرع وموقع المتجر الرئيسي", desc: "نقطة انطلاق الشحنات مع إحداثيات الفرع الجغرافي بدقة (فرع المعادي الرئيسي).", tech: "Leaflet Vector GeoJSON Layer" },
                  { x: 37, y: 50, title: "دليل رموز وحالات المناديب على الخريطة", desc: "ألوان دلالية توضح: أخضر (مندوب متاح)، أصفر (في الطريق لتوصيل طلب)، أزرق (طلب في الانتظار بالفرع)، أحمر (وجهة تسليم العميل).", tech: "Dynamic GIS Marker Styling" },
                  { x: 18, y: 75, title: "بطاقات طاقم التوصيل المتاح والرحلات الجارية", desc: "قائمة سريعة تكشف لكل مندوب وسيلة النقل وعدد الشحنات الحالية المسندة له في الجولة الواحدة.", tech: "Multi-order Route Optimization" }
                ]
              },
              en: {
                tab: "05. Fleet Map",
                title: "Interactive Real-Time Fleet Map Tracking (Leaflet GIS)",
                plate: "PLATE 05 — INTERACTIVE GPS FLEET TRACKING MAP",
                hotspots: [
                  { x: 52, y: 74, title: "Main Branch Geolocation Pin", desc: "Precise store dispatch hub coordinates anchoring real-time route vectors.", tech: "Leaflet Vector GeoJSON Layer" },
                  { x: 37, y: 50, title: "Semantic Color Legend", desc: "Visual color system: Green (Online Driver), Amber (Transit), Blue (Branch Queue), Red (Delivery Target).", tech: "Dynamic GIS Marker Styling" },
                  { x: 18, y: 75, title: "Active Fleet Load Cards", desc: "Instant breakdown showing vehicle type and simultaneous shipments assigned per courier.", tech: "Multi-order Route Optimization" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Cashier/Screenshot 2026-10-01 150236.png",
            translations: {
              ar: {
                tab: "06. المناديب",
                title: "سجل المناديب، أكواد الدخول الخاصة، وأرقام المركبات",
                plate: "PLATE 06 — REGISTERED FLEET ROSTER & PIN CODES",
                hotspots: [
                  { x: 69, y: 63, title: "كود الدخول الخاص السريع (Driver PIN Code)", desc: "نظام مصادقة آمن وسلس يتيح للمندوب تسجيل الدخول لتطبيق الهاتف عبر كود مكون من 4 أرقام دون كلمات مرور معقدة.", tech: "Secure 4-Digit Branch Token Auth" },
                  { x: 42, y: 63, title: "بيانات المركبة ورقم اللوحة الرسمية", desc: "توثيق رسمي لنوع المركبة ورقم اللوحة لضمان سلامة وأمان النقل وتسليم الطلبات.", tech: "Fleet Vehicle Registry Schema" }
                ]
              },
              en: {
                tab: "06. Couriers",
                title: "Registered Fleet Directory, Access PINs & License Plates",
                plate: "PLATE 06 — REGISTERED FLEET ROSTER & PIN CODES",
                hotspots: [
                  { x: 69, y: 63, title: "Fast 4-Digit Driver PIN Authentication", desc: "Streamlined authentication code allowing couriers to log into mobile terminals without passwords.", tech: "Secure 4-Digit Branch Token Auth" },
                  { x: 42, y: 63, title: "Official Vehicle License Plate Registry", desc: "Audit logs tracking vehicle types and legal license plate registrations for compliance.", tech: "Fleet Vehicle Registry Schema" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Cashier/Screenshot 2026-10-01 150257.png",
            translations: {
              ar: {
                tab: "07. التسليم",
                title: "توثيق تسليم الطلب، خصم المخزون، وعمولة المنصة",
                plate: "PLATE 07 — DELIVERED & AUTOMATED DEDUCTION",
                hotspots: [
                  { x: 63, y: 95, title: "زر تأكيد التسليم والخصم بنجاح", desc: "يؤكد استلام النقدية، ويخصم تكلفة البضاعة المباعة (COGS) ويوثق عمولة المنصة (2.25 ج.م).", tech: "COGS Accounting & Ledger Hook" },
                  { x: 47, y: 95, title: "زر التراجع الذكي (تراجع عن التسليم بالخطأ)", desc: "إجراء تصحيحي ذكي يتيح للكاشير إلغاء الخصم وإعادة الطلب لمسار التوصيل في حال الضغط الخاطئ.", tech: "Compensating Transaction Pattern" }
                ]
              },
              en: {
                tab: "07. Settlement",
                title: "Delivered Confirmation, COGS Deduction & Audit Trail",
                plate: "PLATE 07 — DELIVERED & AUTOMATED DEDUCTION",
                hotspots: [
                  { x: 63, y: 95, title: "Confirm Settlement & Deduct Stock", desc: "Confirms cash payment received, accounts for COGS, and records platform take-rate (2.25 EGP).", tech: "COGS Accounting & Ledger Hook" },
                  { x: 47, y: 95, title: "Smart Rollback Action (Revert Erroneous Click)", desc: "Compensating transactional hook allowing cashier to undo accidental clicks and restore routing.", tech: "Compensating Transaction Pattern" }
                ]
              }
            }
          }
        ]
      },
      {
        id: "driver",
        icon: "🛵",
        translations: {
          ar: {
            tabLabel: "03. رحلة المندوب والتوصيل",
            roleTitle: "رحلة المندوب والتوصيل (Courier & Delivery Driver App)",
            roleSubtitle: "استلام الطلبات، الملاحة الذكية، التحقق بكود OTP، وتحصيل المدفوعات",
            lead: "واجهة تطبيق هاتف مخصصة لمناديب التوصيل تتيح استلام الطلبات المسندة لحظياً، والتوجيه الذكي بأقصر المسارات لتوفير الوقت والوقود، والتحقق الأمني المشدد من تسليم الشحنة عبر كود سري OTP من العميل، مع سجل مالي دقيق لتحصيل المبالغ النقدية COD.",
            specs: [
              { label: "نوع التطبيق", val: "Driver Mobile Web App (PWA)" },
              { label: "الأمان والتسليم", val: "Two-Factor Handover via OTP" },
              { label: "المعمارية", val: "Next.js • Mobile Viewport • WebSockets" },
              { label: "الدور المصمم", val: "Fullstack Architecture & UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "التحقق الأمني من التسليم بكود سري (OTP Verification)",
                desc: "حماية تامة من التسليم الخاطئ عبر كود تحقق رقمي يزوده العميل للمندوب عند الاستلام لتأكيد إتمام العملية."
              },
              {
                num: "02",
                title: "إدارة مسار الرحلات النشطة وتحصيل المدفوعات (COD Ledger)",
                desc: "ترتيب ذكي لمحطات التوصيل لتقليص زمن الانتظار واحتساب رصيد العهدة النقدية المحصلة فورياً."
              },
              {
                num: "03",
                title: "الاتصال المباشر بنقرة واحدة (Direct Call & Telephony)",
                desc: "ربط سلس يتيح للمندوب التواصل الفوري مع العميل أو إدارة الفرع دون الحاجة لكتابة الأرقام يدوياً."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "OTP Auth Engine", "COD Ledger", "WebSockets", "PWA Architecture", "PostgreSQL"]
          },
          en: {
            tabLabel: "03. Delivery Driver",
            roleTitle: "Courier & Delivery Driver Mobile App",
            roleSubtitle: "Order Intake, Smart Navigation, OTP Handover Verification & Cash Ledger",
            lead: "A purpose-built mobile interface for delivery couriers. Ingests assigned orders instantly, calculates fuel-efficient routes, enforces cryptographic two-factor handovers using customer OTP codes, and reconciles cash-on-delivery payments seamlessly.",
            specs: [
              { label: "Application Type", val: "Driver Mobile Web App (PWA)" },
              { label: "Handover Security", val: "Two-Factor Handover via OTP" },
              { label: "Architecture", val: "Next.js • Mobile Viewport • WebSockets" },
              { label: "Designer Role", val: "Fullstack Architecture & UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "Two-Factor Handover Security (Customer OTP)",
                desc: "Guarantees zero-dispute delivery confirmation by requiring a 4-digit secret passcode handed by the customer at doorstep."
              },
              {
                num: "02",
                title: "Active Multi-stop Task Queue & Cash Ledger",
                desc: "Sequences delivery waypoints for maximum fuel efficiency and calculates live cash-on-delivery balances."
              },
              {
                num: "03",
                title: "One-Click Customer & Dispatch Telephony",
                desc: "Integrated tel: protocol action triggers direct dial to customer or store manager with zero friction."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "OTP Auth Engine", "COD Ledger", "WebSockets", "PWA Architecture", "PostgreSQL"]
          }
        },
        steps: [
          {
            image: "imgs/wesalna/Delivery Driver/Screenshot 2026-10-01 152023.png",
            translations: {
              ar: {
                tab: "01. تأكيد OTP",
                title: "استلام الطلب وتأكيد كود التحقق الأمني OTP عند باب العميل",
                plate: "PLATE 01 — DRIVER OTP HANDOVER VERIFICATION",
                hotspots: [
                  { x: 68, y: 35, title: "تفاصيل الطلب والوجهة السكنية", desc: "عرض عنوان العميل، المسافة بالكيلومتر، والوقت التقديري للوصول بناءً على حركة المرور.", tech: "Distance Matrix & Geocoding" },
                  { x: 48, y: 68, title: "حقل إدخال كود التسليم السري (OTP)", desc: "كود أمان مكون من 4 أرقام يزوده العميل للمندوب عند باب المنزل لمنع أي تسليم خاطئ أو احتيال.", tech: "Two-Factor Handover Security (OTP)" },
                  { x: 30, y: 68, title: "زر إتمام التسليم المباشر", desc: "بنقرة واحدة بعد التحقق من الـ OTP، يتم تأكيد التسليم فوريًا وتحديث نظام الكاشير والمنصة المركزية.", tech: "Cryptographic Handover Verification" }
                ]
              },
              en: {
                tab: "01. Order & OTP",
                title: "Order Intake & Secret Handover OTP Verification",
                plate: "PLATE 01 — DRIVER OTP HANDOVER VERIFICATION",
                hotspots: [
                  { x: 68, y: 35, title: "Order Details & Destination", desc: "Displays customer address, distance in kilometers, and traffic-aware ETA.", tech: "Distance Matrix & Geocoding" },
                  { x: 48, y: 68, title: "Secret 4-Digit Handover OTP", desc: "Secure 4-digit code provided by the client upon arrival, preventing false or mistaken delivery.", tech: "Two-Factor Handover Security (OTP)" },
                  { x: 30, y: 68, title: "Confirm Handover Action", desc: "Instantly confirms delivery upon OTP validation and broadcasts state update to dispatch.", tech: "Cryptographic Handover Verification" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Delivery Driver/Screenshot 2026-10-01 152055.png",
            translations: {
              ar: {
                tab: "02. مهام التوصيل",
                title: "إدارة المهام النشطة وتحصيل المدفوعات النقدية COD",
                plate: "PLATE 02 — ACTIVE TASKS & CASH-ON-DELIVERY LEDGER",
                hotspots: [
                  { x: 72, y: 40, title: "قائمة المهام النشطة للرحلة", desc: "ترتيب الطلبات حسب المسار الأقصر لتوفير الوقود وزمن الوصول لمناطق المعادي المتعددة.", tech: "TSP Route Optimization Heuristic" },
                  { x: 45, y: 55, title: "تفاصيل تحصيل المبالغ النقدية (COD Ledger)", desc: "سجل مالي يوضح المبلغ المطلوب تحصيله نقداً من العميل مع إجمالي رصيد عهدة المندوب.", tech: "Cash-on-Delivery Reconciliation" },
                  { x: 25, y: 55, title: "زر الاتصال الفوري بالعميل أو الفرع", desc: "اتصال مباشر بنقرة واحدة للتنسيق السريع مع العميل في حال تعذر الوصول للعنوان.", tech: "Instant Direct Dial Telephony" }
                ]
              },
              en: {
                tab: "02. Active Routes",
                title: "Active Multi-Stop Task Route & Cash-on-Delivery Ledger",
                plate: "PLATE 02 — ACTIVE TASKS & CASH-ON-DELIVERY LEDGER",
                hotspots: [
                  { x: 72, y: 40, title: "Active Route Task Queue", desc: "Orders sequenced for optimal driving path across Maadi districts, minimizing idle time.", tech: "TSP Route Optimization Heuristic" },
                  { x: 45, y: 55, title: "Cash-on-Delivery (COD) Reconciliation", desc: "Real-time ledger displaying cash collected per drop-off and overall driver custody balance.", tech: "Cash-on-Delivery Reconciliation" },
                  { x: 25, y: 55, title: "One-Click Customer Call Action", desc: "Instant telephonic link allowing direct communication with recipient for delivery coordination.", tech: "Instant Direct Dial Telephony" }
                ]
              }
            }
          }
        ]
      },
      {
        id: "merchant",
        icon: "🏪",
        translations: {
          ar: {
            tabLabel: "04. رحلة التاجر وإدارة المتجر",
            roleTitle: "رحلة التاجر وإدارة المتجر (Merchant Owner & Business Hub)",
            roleSubtitle: "إدارة الفروع والمخزون بـ WAC، الموردين، تقارير الأرباح COGS، والـ QR",
            lead: "مركز قيادة شامل لمالكي المتاجر والشركاء يغطي إدارة شبكة الفروع والمستودعات، تحويلات البضائع بين الفروع، دليل الموردين، حساب التكلفة المرجحة WAC، إدارة صلاحيات المنتجات والباركود الدولي، رسم نطاقات التوصيل Geofencing، متابعة المستحقات والأرباح، وتوليد كود QR للمتجر.",
            specs: [
              { label: "نوع البوابة", val: "Enterprise Merchant Hub" },
              { label: "نظام المخزون", val: "Database-backed WAC & Lots" },
              { label: "المعمارية", val: "Next.js 15 • PostgreSQL • Prisma" },
              { label: "الدور المصمم", val: "Lead Architect & UX Engineer" }
            ],
            highlights: [
              {
                num: "01",
                title: "إدارة المخزون المتقدم وحساب التكلفة المرجحة (WAC Engine)",
                desc: "احتساب آلي دقيق لمتوسط تكلفة الوحدة المرجحة مع كل توريد جديد لتحديد هوامش الربح الصافي بدقة."
              },
              {
                num: "02",
                title: "شبكة الفروع، التحويلات الداخلية، والمستودعات المركزية",
                desc: "إدارة فروع متعددة مع إحداثيات GPS ونظام تحويلات مخزنية آمن يمنع العجز ويوثق المسؤوليات."
              },
              {
                num: "03",
                title: "تقارير الأرباح وتكلفة المبيعات (COGS) وتصدير البيانات",
                desc: "لوحات بيانية تفصيلية للأرباح والخسائر مع تصدير مباشر لملفات Excel لتدقيق الحسابات والضرائب."
              },
              {
                num: "04",
                title: "رسم نطاقات التوصيل الجغرافية وتوليد كود الـ QR",
                desc: "تحديد مضلعات التغطية الجغرافية بدقة على الخريطة وتوليد رمز QR ديناميكي لفتح المتجر مباشرة."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "WAC Algorithm", "GIS Polygons", "Dynamic QR", "Excel Export", "Tailwind CSS"]
          },
          en: {
            tabLabel: "04. Merchant Hub",
            roleTitle: "Merchant Owner & Business Operations Hub",
            roleSubtitle: "Multi-branch Network, WAC Inventory, Procurement, COGS & Store QR",
            lead: "An enterprise management hub for retail owners and merchants. Features multi-branch & warehouse directory, inter-branch stock transfers, supplier directory, weighted-average cost (WAC) inventory, batch expiry tracking, delivery polygon geofencing, COGS accounting, and dynamic store QR generation.",
            specs: [
              { label: "Portal Type", val: "Enterprise Merchant Hub" },
              { label: "Inventory Engine", val: "Database-backed WAC & Lots" },
              { label: "Architecture", val: "Next.js 15 • PostgreSQL • Prisma" },
              { label: "Designer Role", val: "Lead Architect & UX Engineer" }
            ],
            highlights: [
              {
                num: "01",
                title: "Weighted Average Cost (WAC) Inventory Engine",
                desc: "Real-time unit cost recalibration on every inbound shipment, enabling ultra-precise net margin calculations."
              },
              {
                num: "02",
                title: "Multi-Branch Governance & Stock Transfers",
                desc: "Manage multiple retail outlets with GPS geocoding and immutable inter-branch transfer audit manifests."
              },
              {
                num: "03",
                title: "Financial COGS Ledger & Excel / CSV Streaming",
                desc: "Comprehensive profit & loss reporting, gross margin analytics, and instant tabular spreadsheet exports."
              },
              {
                num: "04",
                title: "Delivery Geofencing Polygons & Dynamic QR",
                desc: "Visual GIS polygons defining coverage boundaries and auto-generated high-resolution store QR codes."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "WAC Algorithm", "GIS Polygons", "Dynamic QR", "Excel Export", "Tailwind CSS"]
          }
        },
        steps: [
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151542.png",
            translations: {
              ar: {
                tab: "01. الفروع",
                title: "إدارة الفروع والمستودعات المركزية مع إحداثيات GPS",
                plate: "PLATE 01 — BRANCHES & WAREHOUSES DIRECTORY",
                hotspots: [
                  { x: 75, y: 35, title: "سجل الفروع وإحداثيات الموقع (GPS)", desc: "عرض تفصيلي لفرع المعادي الرئيسي والمستودعات مع خطوط الطول والعرض وبيانات الاتصال.", tech: "PostGIS Spatial Coordinates" },
                  { x: 35, y: 35, title: "إدارة ساعات العمل وحالة التشغيل", desc: "تفعيل أو تعطيل استقبال الطلبات، وتعيين أوقات فتح وإغلاق كل فرع.", tech: "Dynamic Store Availability Engine" }
                ]
              },
              en: {
                tab: "01. Branches",
                title: "Branches & Central Warehouses Directory with GPS Coordinates",
                plate: "PLATE 01 — BRANCHES & WAREHOUSES DIRECTORY",
                hotspots: [
                  { x: 75, y: 35, title: "Branch Registry & GPS Geolocation", desc: "Detailed breakdown of Maadi flagship store and distribution hubs with spatial lat/long.", tech: "PostGIS Spatial Coordinates" },
                  { x: 35, y: 35, title: "Store Hours & Operational State", desc: "Toggle live order acceptance, shift schedules, and operational availability per outlet.", tech: "Dynamic Store Availability Engine" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151550.png",
            translations: {
              ar: {
                tab: "02. التحويلات",
                title: "تحويلات المخزون بين الفروع والمستودعات",
                plate: "PLATE 02 — INTER-BRANCH STOCK TRANSFERS",
                hotspots: [
                  { x: 75, y: 40, title: "أمر تحويل بضاعة بين الفروع (Transfer Manifest)", desc: "نقل كميات المخزون من المستودع المركزي للفرع مع رقم تتبع وحالة الشحنة.", tech: "Two-Phase Stock Transfer Protocol" },
                  { x: 35, y: 40, title: "سجل تدقيق التحويلات والمسؤولين", desc: "توثيق اسم الموظف وتاريخ الإرسال والاستلام لمنع العجز أو الفقد في البضائع.", tech: "Immutable Audit Ledger" }
                ]
              },
              en: {
                tab: "02. Transfers",
                title: "Inter-Branch Stock Transfers & Inventory Relocation",
                plate: "PLATE 02 — INTER-BRANCH STOCK TRANSFERS",
                hotspots: [
                  { x: 75, y: 40, title: "Inter-Branch Transfer Manifest", desc: "Rebalance stock between central depot and branches with tracking codes and manifests.", tech: "Two-Phase Stock Transfer Protocol" },
                  { x: 35, y: 40, title: "Chain-of-Custody Audit Trail", desc: "Records dispatching supervisor, recipient sign-off, and movement timestamps.", tech: "Immutable Audit Ledger" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151603.png",
            translations: {
              ar: {
                tab: "03. الموردين",
                title: "دليل الموردين وسلاسل التوريد والشراء",
                plate: "PLATE 03 — SUPPLIERS & PROCUREMENT DIRECTORY",
                hotspots: [
                  { x: 70, y: 35, title: "دليل شركات التوريد المعتمدة", desc: "قائمة بأسماء الموردين، المنتجات المغطاة، شروط الدفع، وأرقام هواتف مسؤولي التوزيع.", tech: "Vendor Relationship Management (VRM)" },
                  { x: 30, y: 35, title: "سجل أوامر الشراء وإعادة الطلب", desc: "متابعة دورية لكميات الشراء وتواريخ الاستحقاق لتجديد مخزون السلع الأكثر طلباً.", tech: "Procurement Cycle Automation" }
                ]
              },
              en: {
                tab: "03. Suppliers",
                title: "Suppliers Directory & Inbound Procurement Logistics",
                plate: "PLATE 03 — SUPPLIERS & PROCUREMENT DIRECTORY",
                hotspots: [
                  { x: 70, y: 35, title: "Approved Vendor Directory", desc: "Master roster of product distributors, credit terms, and direct logistics contacts.", tech: "Vendor Relationship Management (VRM)" },
                  { x: 30, y: 35, title: "Purchase Orders & Restock Ledger", desc: "Tracks inbound PO fulfillment milestones to prevent stockouts of high-velocity items.", tech: "Procurement Cycle Automation" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151614.png",
            translations: {
              ar: {
                tab: "04. المخزون WAC",
                title: "إدارة المخزون وحساب التكلفة المرجحة WAC",
                plate: "PLATE 04 — DATABASE-BACKED INVENTORY & WAC",
                hotspots: [
                  { x: 72, y: 38, title: "نظام احتساب التكلفة المرجحة (WAC)", desc: "حساب دقيق لمتوسط تكلفة الوحدة مع كل دفعة توريد جديدة لحساب هامش الربح الصافي.", tech: "Weighted Average Cost (WAC) Algorithm" },
                  { x: 38, y: 38, title: "رصيد المخزون اللحظي وحجز الطلبات", desc: "مزامنة كميات الأرفف لحظياً مع خصم المبيعات وحجز الأوامر الجارية تلقائياً.", tech: "High-Concurrency Atomic Decrement" }
                ]
              },
              en: {
                tab: "04. Inventory WAC",
                title: "Database-Backed Inventory & Weighted Average Cost Engine",
                plate: "PLATE 04 — DATABASE-BACKED INVENTORY & WAC",
                hotspots: [
                  { x: 72, y: 38, title: "Weighted Average Cost (WAC) Matrix", desc: "Computes dynamic moving average unit cost across replenishment cycles for net margin accuracy.", tech: "Weighted Average Cost (WAC) Algorithm" },
                  { x: 38, y: 38, title: "Live Stock Count & Order Reservations", desc: "Real-time shelf inventory synchronized with atomic order reservation locks.", tech: "High-Concurrency Atomic Decrement" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151620.png",
            translations: {
              ar: {
                tab: "05. تسوية الكميات",
                title: "تسوية كميات المخزون وتسجيل الفروقات وأسبابها",
                plate: "PLATE 05 — STOCK ADJUSTMENT & RECONCILIATION",
                hotspots: [
                  { x: 55, y: 48, title: "نافذة تعديل الكميات اليدوية", desc: "إمكانية تصحيح أرصدة المخزون بناءً على الجرد الفعلي الدوري.", tech: "Reconciliation Transaction" },
                  { x: 45, y: 65, title: "تصنيف سبب التعديل (هالك / جرد / خطأ إدخال)", desc: "توثيق سبب التعديل لمنع التلاعب وإصدار تقارير دقيقة عن الهدر والتلفيات.", tech: "Stock Discrepancy Reason Codes" }
                ]
              },
              en: {
                tab: "05. Adjustments",
                title: "Stock Adjustment & Physical Reconciliation Reason Codes",
                plate: "PLATE 05 — STOCK ADJUSTMENT & RECONCILIATION",
                hotspots: [
                  { x: 55, y: 48, title: "Physical Count Reconciliation Dialog", desc: "Enables manual stock count adjustments following periodic warehouse physical audits.", tech: "Reconciliation Transaction" },
                  { x: 45, y: 65, title: "Discrepancy Reason Codes", desc: "Categorizes variance reasons (Shrinkage, Breakage, Inventory Cycle Count, Data Error).", tech: "Stock Discrepancy Reason Codes" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151628.png",
            translations: {
              ar: {
                tab: "06. حدود الأمان",
                title: "تنبيهات نقص المخزون وحدود الأمان الدنيا",
                plate: "PLATE 06 — SAFETY STOCK THRESHOLDS & ALERTS",
                hotspots: [
                  { x: 65, y: 45, title: "حد الأمان الأدنى (Safety Threshold)", desc: "إرسال إشعار فوري عند انخفاض الرصيد عن الحد الأدنى المسموح به لمنع نفاد السلع.", tech: "Automated Reorder Trigger" },
                  { x: 35, y: 45, title: "مؤشر حالة المخزون اللوني", desc: "تصنيف مرئي فوري: متوفر (أخضر)، منخفض (برتقالي)، غير متوفر (أحمر).", tech: "Visual Stock Depletion Indicators" }
                ]
              },
              en: {
                tab: "06. Safety Stock",
                title: "Safety Stock Thresholds & Stockout Warning Triggers",
                plate: "PLATE 06 — SAFETY STOCK THRESHOLDS & ALERTS",
                hotspots: [
                  { x: 65, y: 45, title: "Minimum Safety Buffer Threshold", desc: "Triggers automated low-stock warnings when inventory drops below predefined safety floor.", tech: "Automated Reorder Trigger" },
                  { x: 35, y: 45, title: "Color-Coded Health Indicators", desc: "Instant visual statuses: Adequate (Green), Critical (Amber), and Out-of-Stock (Red).", tech: "Visual Stock Depletion Indicators" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151635.png",
            translations: {
              ar: {
                tab: "07. الصلاحيات",
                title: "تتبع تواريخ الصلاحية وأرقام التشغيلات (Lots)",
                plate: "PLATE 07 — BATCH NUMBERS & EXPIRY TRACKING",
                hotspots: [
                  { x: 68, y: 45, title: "أرقام التشغيلات (Lot Numbers)", desc: "ربط كل كمية برقم التشغيلة لسهولة تتبع الجودة وسحب أي دفعة معيبة إن وُجدت.", tech: "Batch & Traceability Architecture" },
                  { x: 32, y: 45, title: "تنبيهات اقتراب انتهاء الصلاحية (FEFO)", desc: "أولوية البيع للمنتجات الأقرب انتهاءً لتقليل الهدر المالي وتحسين الجودة.", tech: "FEFO (First-Expired-First-Out) Engine" }
                ]
              },
              en: {
                tab: "07. Expiry & Batches",
                title: "Batch Numbers, Expiration Audits & FEFO Logistics",
                plate: "PLATE 07 — BATCH NUMBERS & EXPIRY TRACKING",
                hotspots: [
                  { x: 68, y: 45, title: "Lot & Batch Identification", desc: "Binds inventory batches to manufacturing lot numbers for traceability and recalls.", tech: "Batch & Traceability Architecture" },
                  { x: 32, y: 45, title: "FEFO (First-Expired-First-Out) Engine", desc: "Prioritizes dispatching older stock lots first to reduce waste and prevent product expiration.", tech: "FEFO (First-Expired-First-Out) Engine" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151647.png",
            translations: {
              ar: {
                tab: "08. الكتالوج",
                title: "كتالوج المنتجات، الأكواد البارزة، والأسعار",
                plate: "PLATE 08 — PRODUCT CATALOG & BARCODE MANAGEMENT",
                hotspots: [
                  { x: 75, y: 35, title: "بيانات المنتج والباركود الدولي (EAN-13)", desc: "إدخال كود الباركود للتعرف السريع عليه عبر أجهزة المسح الضوئي ونقاط البيع.", tech: "EAN-13 / UPC Barcode Indexing" },
                  { x: 35, y: 35, title: "تحديد السعر وهامش الربح والضريبة", desc: "تحديد سعر البيع للجمهور، سعر الجملة، ونسبة الضريبة المقررة مع حساب الربح تلقائياً.", tech: "Tax & Margin Pricing Engine" }
                ]
              },
              en: {
                tab: "08. Catalog",
                title: "Master Product Catalog, Pricing & Global Barcode Index",
                plate: "PLATE 08 — PRODUCT CATALOG & BARCODE MANAGEMENT",
                hotspots: [
                  { x: 75, y: 35, title: "EAN-13 & UPC Barcode Association", desc: "Indexes global barcode numbers for instant identification via POS handheld laser scanners.", tech: "EAN-13 / UPC Barcode Indexing" },
                  { x: 35, y: 35, title: "Retail Pricing & Tax Tier Engine", desc: "Configures consumer prices, wholesale discounts, and VAT tiers with automated margin calculation.", tech: "Tax & Margin Pricing Engine" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151713.png",
            translations: {
              ar: {
                tab: "09. نطاقات التوصيل",
                title: "نطاقات التوصيل الجغرافية وتحديد رسوم الشحن",
                plate: "PLATE 09 — GEOFENCING & DELIVERY ZONES",
                hotspots: [
                  { x: 65, y: 40, title: "تحديد مضلعات التغطية الجغرافية (Geofence)", desc: "رسم نطاق خدمة الفرع بدقة على الخريطة لمنع استقبال طلبات خارج مساحة التوصيل.", tech: "Haversine & Ray-Casting Polygon Check" },
                  { x: 35, y: 40, title: "تسعير رسوم التوصيل حسب المسافة", desc: "جدولة تسعيرة الشحن بناءً على بعد العميل عن الفرع وموقع نقطة التسليم.", tech: "Dynamic Distance-Tier Pricing" }
                ]
              },
              en: {
                tab: "09. Delivery Zones",
                title: "Geofencing Polygons & Distance-Tiered Delivery Fees",
                plate: "PLATE 09 — GEOFENCING & DELIVERY ZONES",
                hotspots: [
                  { x: 65, y: 40, title: "Geofence Service Polygon Bounds", desc: "Defines strict GIS service boundaries preventing unserviceable orders outside territory.", tech: "Haversine & Ray-Casting Polygon Check" },
                  { x: 35, y: 40, title: "Dynamic Distance-Tier Pricing", desc: "Configures tiered shipping tariffs based on straight-line and road-network transit distance.", tech: "Dynamic Distance-Tier Pricing" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151722.png",
            translations: {
              ar: {
                tab: "10. التسويات",
                title: "التسويات المالية وحسابات البنوك وسحب الأرباح",
                plate: "PLATE 10 — FINANCIAL SETTLEMENTS & PAYOUTS",
                hotspots: [
                  { x: 72, y: 38, title: "سجل مستحقات المتجر والأرباح المعلقة", desc: "بيان تفصيلي بالمبيعات المحققة، عمولة المنصة المقتطعة، وصافي المبلغ القابل للتحويل.", tech: "Automated Net Payout Calculation" },
                  { x: 35, y: 38, title: "بيانات الحساب البنكي وطلب السحب (IBAN)", desc: "ربط رقم الحساب المصرفي لتحويل الأرباح دورياً مع إشعار تحويل رسمي معتمد.", tech: "IBAN Bank Transfer Protocol" }
                ]
              },
              en: {
                tab: "10. Settlements",
                title: "Financial Settlements, Payout Ledgers & Bank Transfers",
                plate: "PLATE 10 — FINANCIAL SETTLEMENTS & PAYOUTS",
                hotspots: [
                  { x: 72, y: 38, title: "Settlement Ledger & Pending Balance", desc: "Detailed breakdown of gross revenue, platform take-rate deduction, and liquid payable funds.", tech: "Automated Net Payout Calculation" },
                  { x: 35, y: 38, title: "IBAN Account & Payout Triggers", desc: "Direct ACH / wire transfer configuration sending funds to registered corporate bank accounts.", tech: "IBAN Bank Transfer Protocol" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151730.png",
            translations: {
              ar: {
                tab: "11. الأرباح COGS",
                title: "تقارير الأرباح وتكلفة المبيعات COGS وتصدير Excel",
                plate: "PLATE 11 — PROFIT & LOSS AND COGS REPORTS",
                hotspots: [
                  { x: 75, y: 40, title: "تحليل تكلفة البضاعة المباعة (COGS Breakdown)", desc: "مقارنة دقيقة بين سعر الشراء وسعر البيع لحساب هامش الربح الإجمالي والصافي.", tech: "Cost of Goods Sold (COGS) Ledger" },
                  { x: 30, y: 40, title: "زر تصدير التقارير المالية (Export CSV/Excel)", desc: "تنزيل تقارير تفصيلية بصيغة Excel لمشاركتها مع المحاسبين والجهات الضريبية.", tech: "Streaming CSV / XLSX Export Engine" }
                ]
              },
              en: {
                tab: "11. Profit & COGS",
                title: "Profit & Loss, COGS Ledger & Excel / CSV Data Streaming",
                plate: "PLATE 11 — PROFIT & LOSS AND COGS REPORTS",
                hotspots: [
                  { x: 75, y: 40, title: "Cost of Goods Sold (COGS) Breakdown", desc: "Rigorous accounting comparison between supplier acquisition cost and realized sale price.", tech: "Cost of Goods Sold (COGS) Ledger" },
                  { x: 30, y: 40, title: "One-Click Tabular Export (CSV / Excel)", desc: "Generates formatted financial spreadsheets for corporate accountants and tax authorities.", tech: "Streaming CSV / XLSX Export Engine" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151757.png",
            translations: {
              ar: {
                tab: "12. مركز القيادة",
                title: "مركز قيادة المتجر والطلبات اللحظية ومؤشرات الأداء KPI",
                plate: "PLATE 12 — LIVE MERCHANT COMMAND CENTER",
                hotspots: [
                  { x: 78, y: 35, title: "مؤشرات الأداء اللحظية (Live KPI Counters)", desc: "حجم المبيعات اليومي، عدد الطلبات الجارية، متوسط سلة المشتريات، ونسبة رضا العملاء.", tech: "Real-time Telemetry Dashboard" },
                  { x: 35, y: 35, title: "موجز الأنشطة الحية وتنبيهات التشغيل", desc: "سجل لحظي يسرد كل عملية شراء فور حدوثها مع صوت تنبيهي وتحديث آلي بدون إعادة تحميل.", tech: "Reactive WebSocket Event Stream" }
                ]
              },
              en: {
                tab: "12. Live Cockpit",
                title: "Merchant Live Command Cockpit & Real-time Operations Stream",
                plate: "PLATE 12 — LIVE MERCHANT COMMAND CENTER",
                hotspots: [
                  { x: 78, y: 35, title: "Live Real-Time KPI Telemetry", desc: "Gross daily volume, active in-flight orders, average cart basket size, and fulfillment velocity.", tech: "Real-time Telemetry Dashboard" },
                  { x: 35, y: 35, title: "Live Event Stream & Acoustic Pings", desc: "Chronological event log tracking orders, driver pickups, and completions via WebSockets.", tech: "Reactive WebSocket Event Stream" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Merchant Owner/Screenshot 2026-10-01 151813.png",
            translations: {
              ar: {
                tab: "13. إعداد QR والدفع",
                title: "تفعيل الدفع الإلكتروني وتوليد الـ QR للمتجر",
                plate: "PLATE 13 — MERCHANT ONBOARDING & DYNAMIC QR",
                hotspots: [
                  { x: 70, y: 40, title: "رمز الاستجابة السريعة الديناميكي للمتجر (Store QR)", desc: "كود QR خاص بالمتجر يمكن للعملاء مسحه بالجوال لفتح المنيو والطلب مباشرة.", tech: "Dynamic SVG QR Generator" },
                  { x: 35, y: 40, title: "بوابات الدفع الإلكتروني والمحافظ (InstaPay & Cards)", desc: "تفعيل خيارات الدفع: إنستاباي، المحافظ الإلكترونية، بطاقات فيزا/ماستركارد، والدفع نقداً.", tech: "Multi-Gateway Payment Integration" }
                ]
              },
              en: {
                tab: "13. Store QR & Pay",
                title: "Merchant Onboarding, Payment Gateways & Dynamic Store QR",
                plate: "PLATE 13 — MERCHANT ONBOARDING & DYNAMIC QR",
                hotspots: [
                  { x: 70, y: 40, title: "High-Resolution Storefront QR Code", desc: "Embeds direct digital catalog URL allowing customers to order via smartphones instantly.", tech: "Dynamic SVG QR Generator" },
                  { x: 35, y: 40, title: "Payment Gateway Enablement", desc: "Toggle InstaPay, mobile e-wallets, credit cards, and cash-on-delivery payment modes.", tech: "Multi-Gateway Payment Integration" }
                ]
              }
            }
          }
        ]
      },
      {
        id: "admin",
        icon: "⚙️",
        translations: {
          ar: {
            tabLabel: "05. الإدارة المركزية والتحكم",
            roleTitle: "الإدارة المركزية والرقابة العليا (Super Admin Platform Governance)",
            roleSubtitle: "مؤشرات GMV، التسويات المركزية، اعتماد المتاجر، شجرة التصنيفات والنزاعات",
            lead: "لوحة التحكم العليا للمنصة المركزية لمراقبة الأداء التشغيلي والمالي الشامل: تتبع إجمالي المبيعات GMV، رصد العمولات الصافية، اعتماد المتاجر الجديدة وفحص الهوية KYC، إدارة الفروع ونطاقات المدن، التحكم في شجرة التصنيفات العامة، والرقابة على الطلبات وفض النزاعات.",
            specs: [
              { label: "نوع اللوحة", val: "Platform Super Admin Governance" },
              { label: "مراقبة المعاملات", val: "Real-time GMV & Fee Engine" },
              { label: "المعمارية", val: "Next.js 15 • PostgreSQL • Multi-tenant RBAC" },
              { label: "الدور المصمم", val: "Chief System Architect" }
            ],
            highlights: [
              {
                num: "01",
                title: "مؤشرات المنصة وحجم التداول الإجمالي (GMV Telemetry)",
                desc: "متابعة لحظية لحجم المعاملات المالية، عدد الطلبات المنفذة، وصافي عمولة المنصة المكتسبة."
              },
              {
                num: "02",
                title: "اعتماد التجار وفحص السجل التجاري (KYC Onboarding)",
                desc: "منظومة مراجعة وتوثيق للمتاجر والشركاء الجدد قبل منح صلاحية النشر واستقبال الطلبات."
              },
              {
                num: "03",
                title: "إدارة الفروع، التوسعات الجغرافية، وشجرة التصنيفات",
                desc: "توزيع الفروع على محافظات الجمهورية، مع التحكم المركزي بالتصنيفات العامة للسلع."
              },
              {
                num: "04",
                title: "مراقبة الطلبات المباشرة وفض النزاعات (Dispute Arbitration)",
                desc: "رؤية شاملة لدورة حياة كل طلب مع صلاحيات التدخل الإداري والإلغاء ورد المبالغ للعملاء."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "Multi-tenant RBAC", "PostgreSQL", "Audit Trail", "GMV Analytics", "Taxonomy Engine", "Dispute Resolution"]
          },
          en: {
            tabLabel: "05. Super Admin",
            roleTitle: "Super Admin Platform Governance",
            roleSubtitle: "Platform Telemetry, GMV Analytics, Merchant KYC, Taxonomy & Order Arbitration",
            lead: "The mission-control command center for platform administrators. Provides full operational and financial telemetry: gross merchandise value (GMV), platform take-rate revenue, merchant KYC onboarding, geographic branch mapping, central catalog taxonomy, and distributed order lifecycle supervision.",
            specs: [
              { label: "Portal Type", val: "Platform Super Admin Governance" },
              { label: "Telemetry", val: "Real-time GMV & Fee Engine" },
              { label: "Architecture", val: "Next.js 15 • PostgreSQL • Multi-tenant RBAC" },
              { label: "Designer Role", val: "Chief System Architect" }
            ],
            highlights: [
              {
                num: "01",
                title: "Platform Gross Merchandise Value (GMV) Telemetry",
                desc: "Live visibility into cross-platform sales volume, transaction velocity, and real-time fee realization."
              },
              {
                num: "02",
                title: "Merchant KYC Verification & Approval Pipeline",
                desc: "Rigorous vetting system for new merchant partners, tax registrations, and compliance checks."
              },
              {
                num: "03",
                title: "Branches Expansion & Central Category Taxonomy",
                desc: "Multi-branch deployment across governorates with centralized hierarchical product category governance."
              },
              {
                num: "04",
                title: "Live Order Lifecycle Supervision & Dispute Arbitration",
                desc: "System-wide order visibility with override actions to cancel, refund, or resolve consumer disputes."
              }
            ],
            tech: ["Next.js 15", "TypeScript", "Multi-tenant RBAC", "PostgreSQL", "Audit Trail", "GMV Analytics", "Taxonomy Engine", "Dispute Resolution"]
          }
        },
        steps: [
          {
            image: "imgs/wesalna/Super Admin/Screenshot 2026-10-01 152125.png",
            translations: {
              ar: {
                tab: "01. لوحة المؤشرات",
                title: "مؤشرات المنصة العامة، إجمالي المبيعات، ومراقبة النظام",
                plate: "PLATE 01 — PLATFORM TELEMETRY & GMV ANALYTICS",
                hotspots: [
                  { x: 75, y: 30, title: "مقياس إجمالي حجم المعاملات (Gross Merchandise Value)", desc: "رصد حجم المبيعات الإجمالي عبر كافة المتاجر والفروع في جمهورية مصر العربية.", tech: "Multi-tenant Aggregate Engine" },
                  { x: 42, y: 30, title: "معدل عمولة المنصة المباشرة (Platform Revenue)", desc: "حساب العائد الصافي للمنصة المستقطع آلياً من كل معاملة منفذة بنجاح.", tech: "Real-time Revenue Attribution" },
                  { x: 22, y: 30, title: "مؤشر صحة الخوادم وقواعد البيانات", desc: "مراقبة زمن استجابة الـ API ومعدل الضغط على PostgreSQL لمنع أي تباطؤ.", tech: "System Health & Uptime Telemetry" }
                ]
              },
              en: {
                tab: "01. Telemetry",
                title: "Platform Telemetry, GMV Analytics & System Uptime",
                plate: "PLATE 01 — PLATFORM TELEMETRY & GMV ANALYTICS",
                hotspots: [
                  { x: 75, y: 30, title: "Gross Merchandise Value (GMV)", desc: "Tracks aggregate commercial volume flowing across all network branches and merchants.", tech: "Multi-tenant Aggregate Engine" },
                  { x: 42, y: 30, title: "Net Platform Revenue & Take-Rate", desc: "Real-time platform commission earned per completed transaction.", tech: "Real-time Revenue Attribution" },
                  { x: 22, y: 30, title: "PostgreSQL & API Health Metrics", desc: "Monitors latency, database connection pools, and server query throughput.", tech: "System Health & Uptime Telemetry" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Super Admin/Screenshot 2026-10-01 152137.png",
            translations: {
              ar: {
                tab: "02. التسويات المركزية",
                title: "التسويات المالية المركزية وتوزيع العمولات",
                plate: "PLATE 02 — GLOBAL SETTLEMENTS & FINANCIAL LEDGER",
                hotspots: [
                  { x: 70, y: 38, title: "أوامر التحويل البنكي للمتاجر", desc: "اعتماد دفعات الأرباح الأسبوعية والشهرية لحسابات التجار المسجلة بضغطة زر.", tech: "Batch Payout Approval Workflow" },
                  { x: 35, y: 38, title: "سجل الضرائب والخصومات الرسمية", desc: "توثيق الضرائب والرسوم البنكية المقتطعة لتسهيل الفحص الضريبي والقانوني.", tech: "Regulatory Compliance Audit Log" }
                ]
              },
              en: {
                tab: "02. Global Settlements",
                title: "Global Settlements, Payout Authorizations & Platform Fee Splits",
                plate: "PLATE 02 — GLOBAL SETTLEMENTS & FINANCIAL LEDGER",
                hotspots: [
                  { x: 70, y: 38, title: "Batch Merchant Payout Approval", desc: "Authorizes bulk ACH / wire disbursements directly to verified merchant bank accounts.", tech: "Batch Payout Approval Workflow" },
                  { x: 35, y: 38, title: "Statutory Tax & Regulatory Audit Ledger", desc: "Documents withholding taxes and gateway fees for legal accounting compliance.", tech: "Regulatory Compliance Audit Log" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Super Admin/Screenshot 2026-10-01 152146.png",
            translations: {
              ar: {
                tab: "03. اعتماد التجار",
                title: "إدارة واعتماد المتاجر والتحقق من الهوية (KYC)",
                plate: "PLATE 03 — MERCHANTS OVERSIGHT & KYC VERIFICATION",
                hotspots: [
                  { x: 75, y: 35, title: "سجل المتاجر وحالة الاعتماد والنشاط", desc: "مراجعة السجل التجاري والبطاقة الضريبية وتفعيل حسابات المتاجر الجديدة.", tech: "Tenant Lifecycle & KYC Verification" },
                  { x: 30, y: 35, title: "التحكم في وصول التاجر وإيقاف المخالفين", desc: "إمكانية إيقاف مؤقت لأي متجر مخالف لشروط الخدمة أو المتأخر في تسليم الأوامر.", tech: "RBAC Security & Store Suspension" }
                ]
              },
              en: {
                tab: "03. Merchants KYC",
                title: "Merchants Governance, Multi-Tenant Directory & KYC Verification",
                plate: "PLATE 03 — MERCHANTS OVERSIGHT & KYC VERIFICATION",
                hotspots: [
                  { x: 75, y: 35, title: "Merchant KYC Verification Roster", desc: "Reviews official commercial registers, tax IDs, and activates verified business tenants.", tech: "Tenant Lifecycle & KYC Verification" },
                  { x: 30, y: 35, title: "Store Access Suspension Controls", desc: "Granular administrative kill-switch to temporarily deactivate delinquent or non-compliant stores.", tech: "RBAC Security & Store Suspension" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Super Admin/Screenshot 2026-10-01 152152.png",
            translations: {
              ar: {
                tab: "04. الفروع والتغطية",
                title: "دليل فروع الجمهورية ونطاقات الخدمة والتوسع",
                plate: "PLATE 04 — BRANCHES DIRECTORY & GEOFENCING",
                hotspots: [
                  { x: 72, y: 35, title: "خريطة فروع المتاجر ومناطق الخدمة", desc: "استعراض كافة الفروع الموزعة في القاهرة الكبرى وتحديد نطاق التوصيل المسموح به.", tech: "Multi-branch Spatial Clustering" },
                  { x: 32, y: 35, title: "إدارة المدن والمحافظات الجديدة", desc: "تفعيل التوسع الجغرافي لمناطق ومدن جديدة وربطها بمستودعات التوزيع الإقليمية.", tech: "Territory Expansion Management" }
                ]
              },
              en: {
                tab: "04. Branches & Geo",
                title: "Branches Directory, Geographic Clusters & City Coverage",
                plate: "PLATE 04 — BRANCHES DIRECTORY & GEOFENCING",
                hotspots: [
                  { x: 72, y: 35, title: "Nationwide Branch Spatial Map", desc: "Monitors active store clusters across Greater Cairo with radius fulfillment limits.", tech: "Multi-branch Spatial Clustering" },
                  { x: 32, y: 35, title: "Regional Territory Expansion", desc: "Provisions new municipalities and connects regional distribution hubs to the routing mesh.", tech: "Territory Expansion Management" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Super Admin/Screenshot 2026-10-01 152202.png",
            translations: {
              ar: {
                tab: "05. شجرة التصنيفات",
                title: "الشجرة المركزية للتصنيفات والسلع وعناوين الـ SEO",
                plate: "PLATE 05 — CENTRAL TAXONOMY & CATEGORIES",
                hotspots: [
                  { x: 70, y: 40, title: "التصنيفات الرئيسية (سوبرماركت، صيدلية، مطاعم)", desc: "هيكلة الأقسام العامة التي تظهر في الصفحة الرئيسية لتطبيق العميل مع أيقوناتها.", tech: "Hierarchical Taxonomy Tree" },
                  { x: 35, y: 40, title: "إدارة الروابط اللطيفة (Slugs & SEO)", desc: "تهيئة مسارات الروابط لتحسين ظهور المتاجر والمنتجات في محركات البحث العالمية.", tech: "SEO URL Slug Architecture" }
                ]
              },
              en: {
                tab: "05. Central Taxonomy",
                title: "Central Taxonomy, Hierarchical Categories & Global Slugs",
                plate: "PLATE 05 — CENTRAL TAXONOMY & CATEGORIES",
                hotspots: [
                  { x: 70, y: 40, title: "Primary Categories (Groceries, Pharmacy, etc.)", desc: "Governs platform-wide catalog categories displayed in customer mobile app discovery.", tech: "Hierarchical Taxonomy Tree" },
                  { x: 35, y: 40, title: "Canonical Slugs & SEO Engine", desc: "Configures search-engine optimized semantic URLs for stores and product families.", tech: "SEO URL Slug Architecture" }
                ]
              }
            }
          },
          {
            image: "imgs/wesalna/Super Admin/Screenshot 2026-10-01 152215.png",
            translations: {
              ar: {
                tab: "06. مراقبة الطلبات",
                title: "المراقبة اللحظية للطلبات والنزاعات وتدخل الإدارة",
                plate: "PLATE 06 — ORDERS SUPERVISION & DISPUTE RESOLUTION",
                hotspots: [
                  { x: 75, y: 40, title: "شريط تتبع مسار كل طلب في الوقت الفعلي", desc: "رؤية مركزية لحالة الأوامر: ملغي، مسلم، في الطريق، مع القدرة على التدخل المباشر.", tech: "Distributed Order Lifecycle State Machine" },
                  { x: 35, y: 40, title: "إدارة النزاعات ورد المدفوعات (Refund & Dispute)", desc: "صلاحية إلغاء الطلبات المتأخرة وإصدار استرداد فوري للأموال للعميل لحماية السمعة.", tech: "Dispute Arbitration & Ledger Refund" }
                ]
              },
              en: {
                tab: "06. Orders Supervision",
                title: "Live Order Supervision, Dispute Arbitration & Ledger Refunds",
                plate: "PLATE 06 — ORDERS SUPERVISION & DISPUTE RESOLUTION",
                hotspots: [
                  { x: 75, y: 40, title: "Real-time Order State Stream", desc: "Omniscient visibility into all active orders: Cancelled, Delivered, Out for Delivery.", tech: "Distributed Order Lifecycle State Machine" },
                  { x: 35, y: 40, title: "Dispute Arbitration & Instant Refund", desc: "Executive power to intervene in delayed deliveries and issue instant customer wallet refunds.", tech: "Dispute Arbitration & Ledger Refund" }
                ]
              }
            }
          }
        ]
      }
    ]
  },
  // 2. CAPITAL FLOW (FINTECH PLATFORM)
  {
    id: "capital-flow",
    isMasterBook: false,
    category: "fullstack",
    code: "FIELD MANUAL • VOL. 02",
    year: "2026",
    rating: "✦ ✦ ✦ ✦ ✦",
    coverImg: "assets/images/cover_capital_flow.jpg",
    translations: {
      ar: {
        title: "كابيتال فلو (Capital Flow)",
        subtitle: "قمرة قيادة التحليلات المالية عالية التدفق",
        lead: "منظومة تحليلات مالية ومحفظة مؤسسية مصممة للتعامل مع آلاف الحركات النقدية اللحظية عبر قنوات WebSocket مشفرة وواجهة داكنة مريحة للعين.",
        coverMeta: "دليل النظم المالية • 2026"
      },
      en: {
        title: "Capital Flow",
        subtitle: "High-Throughput Fintech Analytics Cockpit",
        lead: "A mission-critical financial analytics ecosystem engineered for institutional capital intelligence with sub-second WebSocket telemetry and dark glassmorphic ergonomics.",
        coverMeta: "Fintech Systems • 2026"
      }
    },
    chapters: [
      {
        id: "fintech-core",
        icon: "📈",
        translations: {
          ar: {
            tabLabel: "01. المؤشرات والسيولة",
            roleTitle: "قمرة قيادة المؤشرات المالية والسيولة",
            roleSubtitle: "بث فوري لأرباح المؤسسة، وحجم المعاملات، وإدارة البطاقات الذكية",
            lead: "واجهة متطورة تعتمد على الرسوم المتجهة السريعة لمتابعة حركة السيولة دون أي تأخير في الـ DOM.",
            specs: [
              { label: "نوع النظام", val: "Fintech Web App" },
              { label: "محرك البيانات", val: "High-Frequency TimescaleDB" },
              { label: "المعمارية", val: "Next.js • Go • TimescaleDB" },
              { label: "الدور", val: "Lead Architect & UI" }
            ],
            highlights: [
              { num: "01", title: "معالجة بيانات فورية دون 50ms", desc: "تدفق بيانات ثنائي الاتجاه عبر WebSocket وProtobuf يخفض استهلاك الشبكة بنسبة 64%." },
              { num: "02", title: "نظام تصميم داكن زجاجي متكيف (WCAG AAA)", desc: "أكثر من 40 رمزا تصميميا تضمن أعلى درجات وضوح الرؤية والتباين للرسوم المعقدة." }
            ],
            tech: ["TypeScript", "Next.js", "Tailwind CSS", "Go", "TimescaleDB", "Redis Streams", "WebSockets"]
          },
          en: {
            tabLabel: "01. Analytics",
            roleTitle: "Executive Analytics Cockpit",
            roleSubtitle: "Real-time liquidity, transaction volumes and card issuance",
            lead: "A high-frequency dashboard leveraging HTML5 Canvas-accelerated charting for instantaneous data refresh.",
            specs: [
              { label: "System Type", val: "Fintech Web App" },
              { label: "Data Engine", val: "High-Frequency TimescaleDB" },
              { label: "Architecture", val: "Next.js • Go • TimescaleDB" },
              { label: "Role", val: "Lead Architect & UI" }
            ],
            highlights: [
              { num: "01", title: "Sub-50ms Global Realtime Pipelines", desc: "Bi-directional WebSocket pipelines cutting bandwidth payloads by 64%." },
              { num: "02", title: "Adaptive Dark Glassmorphism Design System", desc: "40+ atomic tokens ensuring WCAG AAA accessibility across complex charts." }
            ],
            tech: ["TypeScript", "Next.js", "Tailwind CSS", "Go", "TimescaleDB", "Redis Streams", "WebSockets"]
          }
        },
        steps: [
          {
            image: "assets/images/project1_fintech.jpg",
            translations: {
              ar: {
                tab: "01. لوحة المؤشرات",
                title: "لوحة المؤشرات التنفيذية للسيولة والأرباح",
                plate: "PLATE 01 — FINANCIAL TELEMETRY",
                hotspots: [
                  { x: 21, y: 28, title: "مؤشر صافي الربح الفوري", desc: "بيانات تتدفق بتحديثات تصل إلى 100Hz عبر رسوم بيانية مسرعة بـ WebGL.", tech: "HTML5 Canvas • WebGL Shaders" },
                  { x: 68, y: 45, title: "مصفوفة أحجام المعاملات", desc: "تتبع بوابات الدفع والتسويات البنكية آلياً مع كشف الأنماط الشاذة.", tech: "TimescaleDB • Redis Streams" }
                ]
              },
              en: {
                tab: "01. Dashboard",
                title: "Executive Liquidity & Profit Telemetry",
                plate: "PLATE 01 — FINANCIAL TELEMETRY",
                hotspots: [
                  { x: 21, y: 28, title: "Real-Time Net Profit Streamer", desc: "Sub-second financial aggregates rendered using Canvas-accelerated vector charting.", tech: "HTML5 Canvas • WebGL Shaders" },
                  { x: 68, y: 45, title: "Bi-directional Volume Matrix", desc: "High-density histogram tracking inbound gateways with anomaly alerts.", tech: "TimescaleDB • Redis Streams" }
                ]
              }
            }
          }
        ]
      }
    ]
  }
];

// STATE MANAGEMENT
const state = {
  currentLang: "en",
  currentCategory: "all",
  activeProjectIndex: 0,
  isFlipBookOpen: false,
  activeChapterIndex: 0,
  activeStepIndex: 0,
  areHotspotsVisible: true,
  isAudioEnabled: true,
  audioCtx: null
};

// DOM ELEMENT REFERENCES
const elements = {
  htmlRoot: document.getElementById("html-root"),
  btnLangAr: document.getElementById("btn-lang-ar"),
  btnLangEn: document.getElementById("btn-lang-en"),
  audioToggle: document.getElementById("audio-toggle"),
  categoryFilter: document.getElementById("category-filter"),
  bookshelfView: document.getElementById("bookshelf-view"),
  flipbookView: document.getElementById("flipbook-view"),
  carouselTrack: document.getElementById("carousel-track"),
  carouselDots: document.getElementById("carousel-dots"),
  prevBookBtn: document.getElementById("prev-book"),
  nextBookBtn: document.getElementById("next-book"),
  watermarkTitle: document.getElementById("watermark-title"),
  
  // Flipbook stage
  closeFlipbookBtn: document.getElementById("close-flipbook-btn"),
  bookRolesTabs: document.getElementById("book-roles-tabs"),
  activeBookRig: document.getElementById("active-book-rig"),
  leftPageContent: document.getElementById("left-page-content"),
  pagePlateTag: document.getElementById("page-plate-tag"),
  pageNumDisp: document.getElementById("page-num-disp"),
  screenshotWrapper: document.getElementById("screenshot-wrapper"),
  activePageScreenshot: document.getElementById("active-page-screenshot"),
  hotspotsLayer: document.getElementById("hotspots-layer"),
  hotspotCallout: document.getElementById("hotspot-callout"),
  calloutBadge: document.getElementById("callout-badge"),
  calloutCloseBtn: document.getElementById("callout-close-btn"),
  calloutTitle: document.getElementById("callout-title"),
  calloutDesc: document.getElementById("callout-desc"),
  calloutTech: document.getElementById("callout-tech"),
  
  // Page pagination controls
  prevPageBtn: document.getElementById("prev-page-btn"),
  nextPageBtn: document.getElementById("next-page-btn"),
  spreadTabs: document.getElementById("spread-tabs"),
  btnToggleHotspots: document.getElementById("btn-toggle-hotspots"),
  hotspotsBtnLabel: document.getElementById("hotspots-btn-label"),
  btnFullscreenPreview: document.getElementById("btn-fullscreen-preview"),
  btnBookmark: document.getElementById("btn-bookmark"),
  
  // Editorial panel
  panelManualId: document.getElementById("panel-manual-id"),
  panelYear: document.getElementById("panel-year"),
  panelTitle: document.getElementById("panel-title"),
  panelSubtitle: document.getElementById("panel-subtitle"),
  panelDescription: document.getElementById("panel-description"),
  panelFeaturesList: document.getElementById("panel-features-list"),
  panelTechList: document.getElementById("panel-tech-list"),
  
  // Dialogs
  openCollectionBtn: document.getElementById("open-collection-btn"),
  closeCollectionBtn: document.getElementById("close-collection-btn"),
  collectionDialog: document.getElementById("collection-dialog"),
  collectionGrid: document.getElementById("collection-grid"),
  openAboutBtn: document.getElementById("open-about-btn"),
  closeAboutBtn: document.getElementById("close-about-btn"),
  aboutDialog: document.getElementById("about-dialog"),
  aboutBioContainer: document.getElementById("about-bio-container"),
  lightboxDialog: document.getElementById("lightbox-dialog"),
  closeLightboxBtn: document.getElementById("close-lightbox-btn"),
  lightboxImg: document.getElementById("lightbox-img"),
  lightboxCaption: document.getElementById("lightbox-caption")
};

// AUDIO SYNTHESIZER FOR PAPER SWOOSH
function playSound(type = "turn") {
  if (!state.isAudioEnabled) return;
  try {
    if (!state.audioCtx) {
      state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (state.audioCtx.state === "suspended") {
      state.audioCtx.resume();
    }
    const ctx = state.audioCtx;
    const now = ctx.currentTime;

    const bufferSize = ctx.sampleRate * 0.18;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(450, now + 0.16);
    filter.Q.setValueAtTime(2.5, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.17);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(now);
  } catch (e) {}
}

// UPDATE STRINGS ON LANGUAGE SWITCH
function updateLanguageUI() {
  const t = I18N[state.currentLang];
  const isAr = state.currentLang === "ar";

  elements.htmlRoot.lang = state.currentLang;
  elements.htmlRoot.dir = isAr ? "rtl" : "ltr";

  document.getElementById("t-role-badge").textContent = t.roleBadge;
  document.getElementById("t-filter-all").textContent = t.filterAll;
  document.getElementById("t-filter-wasalna").textContent = t.filterWasalna;
  document.getElementById("t-filter-fullstack").textContent = t.filterFullstack;
  document.getElementById("t-btn-collection").textContent = t.btnCollection;
  document.getElementById("t-btn-curator").textContent = t.btnCurator;
  document.getElementById("t-shelf-hint").textContent = t.shelfHint;
  document.getElementById("t-back-btn").textContent = t.backBtn;
  document.getElementById("t-prev-page").textContent = t.prevPage;
  document.getElementById("t-next-page").textContent = t.nextPage;
  document.getElementById("t-hotspot-hint").textContent = t.hotspotHint;
  document.getElementById("t-highlights-title").textContent = t.highlightsTitle;
  document.getElementById("t-stack-title").textContent = t.stackTitle;
  document.getElementById("t-btn-expand").textContent = t.btnExpand;
  document.getElementById("t-footer-ready").textContent = t.footerReady;

  document.getElementById("t-modal-archive-tag").textContent = t.modalArchiveTag;
  document.getElementById("t-modal-archive-title").textContent = t.modalArchiveTitle;
  document.getElementById("t-modal-archive-desc").textContent = t.modalArchiveDesc;
  document.getElementById("t-about-tag").textContent = t.aboutTag;
  document.getElementById("t-about-title").textContent = t.aboutTitle;
  const mailSpan = document.querySelector("#t-contact-mail span");
  if (mailSpan) mailSpan.textContent = t.contactMail;
  const gitSpan = document.querySelector("#t-contact-git span");
  if (gitSpan) gitSpan.textContent = t.contactGit;
  const linkedinSpan = document.querySelector("#t-contact-linkedin span");
  if (linkedinSpan) linkedinSpan.textContent = isAr ? "حساب LinkedIn" : "LinkedIn Profile";

  elements.hotspotsBtnLabel.textContent = state.areHotspotsVisible ? t.hideHotspots : t.showHotspots;

  // Bio Modal Content
  elements.aboutBioContainer.innerHTML = isAr ? `
    <h3>ملخص الخبرة المهنية</h3>
    <p>
      مطور Full-Stack بخبرة تتجاوز <strong>+5 سنوات</strong> في بناء وهندسة المنصات الرقمية المتقدمة متعددة اللغات للمنظمات الدولية والمؤسسات غير الربحية (NGOs). خبرة متقدمة تغطي دورة حياة المنتج كاملة من التصميم وتجربة المستخدم بـ <strong>Next.js و React و Laravel و WordPress</strong>، وحتى إدارة البنية التحتية السحابية، أمان السيرفرات وقواعد البيانات على <strong>Microsoft Azure و Hetzner</strong>، وتطبيق نظم إدارة الموارد المؤسسية <strong>Odoo ERP</strong>.
    </p>

    <h3>الخبرات العملية والمهام المهنية (Work Experience)</h3>
    
    <!-- Job 1: Anna Lindh Foundation -->
    <div class="bio-project-card">
      <div class="bio-job-header">
        <div>
          <div class="bio-job-title">Full-Stack Web Developer</div>
          <div class="bio-job-company">مؤسسة آنا ليند الأورومتوسطية (Anna Lindh Foundation - ALF) — الإسكندرية، مصر</div>
        </div>
        <span class="bio-period-badge">2024 – حتى الآن (عن بُعد - تعاقد)</span>
      </div>

      <div class="bio-section-title">تطوير المنصة والترحيل التقني (Website development & platform migration)</div>
      <ul class="bio-tasks-list">
        <li>بناء وتطوير منصة مؤسسة آنا ليند من الصفر كنظام متكامل متعدد اللغات (الإنجليزية، الفرنسية، العربية)، يخدم أكثر من <strong>4,500 عضو مجتمع مدني عبر 43 دولة</strong>.</li>
        <li>قيادة ترحيل المنصة بالكامل من <strong>Drupal إلى WordPress</strong>، وإعادة بناء التصميم بدقة من نماذج Figma إلى صفحات وقوالب WordPress متطورة.</li>
        <li>تطوير وبرمجة قوالب وبلوجنات WordPress مخصصة لإدارة المحتوى الديناميكي، النسخ الاحتياطي الآلي، ومعالجة الثغرات الأمنية.</li>
        <li>بناء وصيانة بلوجن <strong>JetCalendar</strong> المخصص للتعامل مع أنواع المنشورات المخصصة (CPTs) المبنية على الفعاليات مع طرق عرض تقويمية شهرية وسنوية متجاوبة.</li>
        <li>التعاون المستمر مع فريق المحتوى والتواصل لتقديم منتج تقني متكامل يتماشى مع الهوية البصرية الرسمية للمؤسسة.</li>
        <li>تصميم لوحة تحكم متقدمة قائمة على الصلاحيات والأدوار (Role-Based Dashboard) بثلاثة مستويات وصول تغطي: الشبكات، الأعضاء، الإصدارات، والأخبار مع تتبع مسار العمل وحالات النشر.</li>
        <li>تولي تهيئة محركات البحث (SEO)، تحسين الأداء وسرعة الاستجابة، وتطبيق التصميم المتجاوب بالكامل.</li>
      </ul>

      <div class="bio-section-title">تطوير المحتوى ووحدات WordPress (Content development & modules)</div>
      <ul class="bio-tasks-list">
        <li>إدارة تحديثات المحتوى المستمرة، بما في ذلك الدعوات المفتوحة للمنح والوظائف الشاغرة باستخدام Elementor و WPML و Fluent Forms.</li>
        <li>بناء أقسام المدونات وقصص نجاح MYA كأنواع منشورات مخصصة (Custom Post Types)، وإعداد مسارات ترجمة المحتوى متعدد اللغات عبر JetPlugins و Elementor و WPML.</li>
        <li>التنسيق مع فريق التواصل لمواءمة طريقة عرض المحتوى مع هوية العلامة وأهداف التفاعل مع الجمهور المستهدف.</li>
      </ul>

      <div class="bio-section-title">أمان السيرفرات وإدارة النطاقات (Security, domain & server management)</div>
      <ul class="bio-tasks-list">
        <li>إدارة وتثبيت شهادات الأمان SSL، وضبط إعدادات النطاقات والـ DNS، وتنفيذ خطط النسخ الاحتياطي الدوري على خوادم <strong>Hetzner</strong>.</li>
      </ul>
    </div>

    <!-- Job 2: Sanad Digital Solutions -->
    <div class="bio-project-card">
      <div class="bio-job-header">
        <div>
          <div class="bio-job-title">System & Digital Solution Specialist</div>
          <div class="bio-job-company">جمعية سند للرعاية البديلة (Sanad NGO) — القاهرة، مصر</div>
        </div>
        <span class="bio-period-badge">2025 – حتى الآن (دوام كامل - هجين)</span>
      </div>

      <div class="bio-section-title">تطبيق منظومة Odoo والتنسيق التقني (Odoo implementation & coordination)</div>
      <ul class="bio-tasks-list">
        <li>التنسيق مع شركة برمجيات خارجية لتخطيط واختبار وتطبيق نظام إدارة موارد المؤسسات <strong>Odoo ERP</strong> مخصص لاحتياجات جمعية سند.</li>
        <li>المشاركة الفعالة في التخطيط التقني والتنسيق بين الفرق المختلفة لمواءمة الأهداف الفنية والتشغيلية.</li>
        <li>الإشراف على اختبار ونشر حزم Odoo المتعددة: <strong>المحاسبة (Accounting)، إدارة المشاريع، الموارد البشرية (HR)، إدارة العملاء (CRM)، التعليم الإلكتروني، التسويق بالبريد، الفعاليات، التسويق الاجتماعي، الأتمتة، والاستبيانات</strong>.</li>
        <li>دعم تخصيص النظام لمطابقة الهيكل التشغيلي الداخلي للجمعية ومتطلبات التقارير الدورية.</li>
        <li><strong>تخفيض تتبع المهام اليدوية بنسبة تقارب 30%</strong> عبر تطبيق سجل تدقيق الأنشطة الشامل ومنح المديرين رؤية مركزية متكاملة لمتابعة الأداء.</li>
        <li>تطبيق تسجيل تفصيلي لمهام المستخدمين والإجراءات لتقليص وقت المتابعة وإعداد التقارير الدورية.</li>
      </ul>

      <div class="bio-section-title">تطوير الموقع وإدارة الخوادم (Website development & server management)</div>
      <ul class="bio-tasks-list">
        <li>الاستمرار في تطوير وصيانة منصة سند المبنية بـ <strong>Laravel / PHP</strong>، وإضافة صفحات ديناميكية وميزات تبرع تواكب الاحتياجات المتجددة.</li>
        <li>إجراء التحديثات والصيانة الدورية لضمان أقصى درجات الاستقرار والحماية الأمنية.</li>
        <li>إدارة عمليات السيرفرات والنطاقات عبر <strong>Hostinger و CyberPanel و GoDaddy</strong>، بما يشمل عمليات النشر والنسخ الاحتياطي وضبط الـ DNS.</li>
      </ul>
    </div>

    <!-- Job 3: Sanad Full-Stack Developer -->
    <div class="bio-project-card">
      <div class="bio-job-header">
        <div>
          <div class="bio-job-title">Full-Stack Web Developer</div>
          <div class="bio-job-company">جمعية سند للرعاية البديلة (Sanad NGO) — القاهرة، مصر</div>
        </div>
        <span class="bio-period-badge">2021 – 2025 (دوام جزئي وكامل - هجين)</span>
      </div>

      <div class="bio-section-title">تطوير المنصة الرقمية والنفاذية (Website development & WCAG)</div>
      <ul class="bio-tasks-list">
        <li>تطوير منصة جمعية سند من نماذج Figma إلى كود برمجي بـ <strong>Laravel / PHP</strong> كموقع ثنائي اللغة (عربي / إنجليزي) لجمعية رائدة تدعم الأيتام منذ 2008.</li>
        <li>تغطية كافة أقسام المنصة: خدمات التدريب، البرامج، الأخبار، قصص النجاح، البيانات الصحفية، التوظيف، ومسارات التبرع الإلكتروني.</li>
        <li>دمج واجهة خلفية بـ Laravel لإدارة المحتوى مع ميزات إدارية مخصصة للموظفين غير التقنيين.</li>
        <li>بناء لوحة تحكم إدارية خاصة وتصميم تجربة وواجهة المستخدم وفقاً لمعايير النفاذية الرقمية العالمية (<strong>WCAG</strong>).</li>
        <li>إدارة تهيئة محركات البحث (SEO)، تحسين الأداء وسرعة التحميل، وتوفير تجربة استخدام متجاوبة.</li>
      </ul>

      <div class="bio-section-title">إدارة منصات التعليم الإلكتروني والسحابة (E-learning & Azure administration)</div>
      <ul class="bio-tasks-list">
        <li>العمل كمسؤول نظام لمنصات التعلم الإلكتروني <strong>LearnKhana</strong> ومنصة <strong>Microsoft Community Training</strong> المستضافة على <strong>Microsoft Azure</strong>، وإدارة النشر والتحديثات.</li>
        <li>إدارة اشتراكات ميكروسوفت ومخصصات تمويل Azure السحابية لضبط وترشيد تكاليف التطبيقات.</li>
      </ul>

      <div class="bio-section-title">إدارة النظام والتنسيق مع موفري الخدمات (System administration & coordination)</div>
      <ul class="bio-tasks-list">
        <li>التنسيق المباشر مع <strong>Microsoft Azure و Microsoft 365 و Microsoft Community Training</strong> بشأن البنية التحتية، التراخيص، وإدارة التذاكر الفنية والتوثيق التقني.</li>
      </ul>
    </div>

    <!-- Job 4: WesalAI -->
    <div class="bio-project-card">
      <div class="bio-job-header">
        <div>
          <div class="bio-job-title">منصة WesalAI الذكية (WesalAI Platform)</div>
          <div class="bio-job-company">بطولة تطبيقات دبي (Create Apps Championship)</div>
        </div>
        <span class="bio-period-badge">AI Solutions</span>
      </div>
      <p>منظومة ذكاء اصطناعي مبتكرة تربط المانحين بالمؤسسات غير الربحية من خلال تحليل المقترحات والتقارير المالية والتقنية آلياً، مبنية بـ <strong>React و Laravel و Python</strong>.</p>
    </div>

    <h3>الحزمة التقنية المتخصصة (Core Technical Stack)</h3>
    <ul class="skills-bullet-list">
      <li><strong>الواجهات وتجربة المستخدم:</strong> Next.js، React، Tailwind CSS، JavaScript/ES6+، HTML5/CSS3، وتصميم UI/UX بـ Figma، معايير WCAG للنفاذية.</li>
      <li><strong>تطوير النظم والخوادم:</strong> Laravel (PHP)، قوالب وبلوجنات WordPress المخصصة، Python، REST APIs، و MySQL.</li>
      <li><strong>السحابة والبنية التحتية:</strong> Microsoft Azure، سيرفرات Hetzner و Hostinger و CyberPanel، إدارة DNS، أمان SSL، ونظم Odoo ERP.</li>
    </ul>

    <h3>الشهادات والتعليم</h3>
    <p class="bio-edu-text">
      • <strong>Udacity:</strong> Full-Stack Development & Front-End Web Development<br>
      • <strong>Edraak:</strong> Full-Stack Web Developer, WordPress Theme/Plugin Dev, UX/UI Design<br>
      • <strong>جامعة حلوان:</strong> ليسانس آداب (2021) • اللغات: العربية (الأم) والإنجليزية (طلاقة مهنية).
    </p>
  ` : `
    <h3>Professional Summary</h3>
    <p>
      Full-Stack Web Developer with <strong>5+ years of experience</strong> architecting multilingual web platforms and mission-critical systems for NGOs and international organizations. Proven track record managing full product lifecycles across <strong>WordPress custom themes/plugins, Laravel, Next.js, React, and Python</strong>, combined with enterprise ERP deployment (<strong>Odoo ERP</strong>) and cloud infrastructure administration on <strong>Microsoft Azure and Hetzner</strong>.
    </p>

    <h3>Professional Work Experience</h3>
    
    <!-- Job 1: Anna Lindh Foundation -->
    <div class="bio-project-card">
      <div class="bio-job-header">
        <div>
          <div class="bio-job-title">Full-Stack Web Developer</div>
          <div class="bio-job-company">Anna Lindh Foundation (ALF) — Alexandria, Egypt</div>
        </div>
        <span class="bio-period-badge">2024 – Present (Remote - Contract)</span>
      </div>

      <div class="bio-section-title">Website Development & Platform Migration</div>
      <ul class="bio-tasks-list">
        <li>Built the ALF website from scratch as a multilingual platform in English, French, and Arabic, serving <strong>4,500+ civil society members across 43 countries</strong>.</li>
        <li>Led migration of the ALF website from <strong>Drupal to WordPress</strong>, rebuilding the platform from Figma designs into high-performance WordPress pages.</li>
        <li>Developed and maintained WordPress themes and plugins to manage dynamic content, automated backups, and security issues.</li>
        <li>Built and maintains <strong>JetCalendar</strong>, a custom WordPress plugin for event-based custom post types with monthly and yearly calendar views.</li>
        <li>Collaborated with ALF's content and communications team to deliver a consistent brand-aligned product.</li>
        <li>Designed a role-based dashboard with three access tiers covering networks, members, publications, and news, with status tracking and workflow logic.</li>
        <li>Handled SEO, performance optimization, and responsive design throughout.</li>
      </ul>

      <div class="bio-section-title">Content Development & WordPress Modules</div>
      <ul class="bio-tasks-list">
        <li>Managed ongoing content updates, including open calls and vacancies, using Elementor, WPML, and Fluent Forms.</li>
        <li>Built blogs and MYA Success Stories as custom post types and set up multilingual content workflows across JetPlugins, Elementor, and WPML.</li>
        <li>Worked with the communications team to align content presentation with brand identity and audience engagement goals.</li>
      </ul>

      <div class="bio-section-title">Security, Domain & Server Management</div>
      <ul class="bio-tasks-list">
        <li>Managed SSL certificates, domain configurations, DNS settings, and automated backups on <strong>Hetzner</strong> cloud infrastructure.</li>
      </ul>
    </div>

    <!-- Job 2: Sanad Digital Solutions -->
    <div class="bio-project-card">
      <div class="bio-job-header">
        <div>
          <div class="bio-job-title">System & Digital Solution Specialist</div>
          <div class="bio-job-company">Sanad for Alternative Parental Care — Cairo, Egypt</div>
        </div>
        <span class="bio-period-badge">2025 – Present (Full-Time - Hybrid)</span>
      </div>

      <div class="bio-section-title">Odoo Implementation & Project Coordination</div>
      <ul class="bio-tasks-list">
        <li>Coordinated with an external development company to plan, test, and roll out a customized <strong>Odoo ERP</strong> management system for Sanad.</li>
        <li>Participated in project planning and cross-team coordination to align technical and operational goals.</li>
        <li>Supervised testing and deployment of modules including <strong>Accounting, Project Management, HR, CRM, eLearning, Email Marketing, Events, Social Marketing, Marketing Automation, and Surveys</strong>.</li>
        <li>Supported system customization to fit Sanad's operational structure and reporting needs.</li>
        <li><strong>Reduced manual task tracking by about 30%</strong> by implementing system-wide activity logging and giving managers a centralized performance view.</li>
        <li>Implemented detailed activity logging for tasks and user actions to reduce follow-up and reporting effort.</li>
      </ul>

      <div class="bio-section-title">Website Development & Server Management</div>
      <ul class="bio-tasks-list">
        <li>Continued developing and maintaining the Sanad website in <strong>Laravel / PHP</strong>, adding features and dynamic pages as organizational needs changed.</li>
        <li>Conducted regular updates and maintenance to support stability and security.</li>
        <li>Managed server and domain operations across <strong>Hostinger, CyberPanel, and GoDaddy</strong>, including deployments, backups, and DNS configurations.</li>
      </ul>
    </div>

    <!-- Job 3: Sanad Full-Stack Developer -->
    <div class="bio-project-card">
      <div class="bio-job-header">
        <div>
          <div class="bio-job-title">Full-Stack Web Developer</div>
          <div class="bio-job-company">Sanad for Alternative Parental Care — Cairo, Egypt</div>
        </div>
        <span class="bio-period-badge">2021 – 2025 (Part-Time & Full-Time - Hybrid)</span>
      </div>

      <div class="bio-section-title">Website Development & Accessibility</div>
      <ul class="bio-tasks-list">
        <li>Developed the Sanad NGO website from Figma to <strong>Laravel / PHP</strong> as a bilingual English/Arabic site for an Egyptian NGO supporting orphans since 2008.</li>
        <li>Covered training services, programs, news, success stories, press releases, vacancies, and donation workflows.</li>
        <li>Integrated a Laravel backend for content management and custom admin features for non-technical staff.</li>
        <li>Built a custom Laravel admin panel and designed the UX/UI to meet <strong>WCAG accessibility standards</strong>.</li>
        <li>Handled SEO, performance optimization, and responsive design.</li>
      </ul>

      <div class="bio-section-title">E-Learning & Cloud Administration</div>
      <ul class="bio-tasks-list">
        <li>Served as system administrator for <strong>LearnKhana</strong> and <strong>Microsoft Community Training</strong> hosted on <strong>Microsoft Azure</strong>, handling deployments, updates, and workflow integrations.</li>
        <li>Managed Microsoft subscriptions and Azure funding allocations to control application costs.</li>
      </ul>

      <div class="bio-section-title">System Administration & Provider Coordination</div>
      <ul class="bio-tasks-list">
        <li>Coordinated with <strong>Microsoft Azure, Microsoft 365, and Microsoft Community Training</strong> on infrastructure, licensing, and integration issues, including tickets, documentation, and vendor communication.</li>
      </ul>
    </div>

    <!-- Job 4: WesalAI -->
    <div class="bio-project-card">
      <div class="bio-job-header">
        <div>
          <div class="bio-job-title">WesalAI Platform</div>
          <div class="bio-job-company">Create Apps Championship — Dubai, UAE</div>
        </div>
        <span class="bio-period-badge">AI Solutions</span>
      </div>
      <p>AI-driven matchmaking platform connecting donors with non-profits by analyzing proposals and financial reports automatically, engineered with <strong>React, Laravel, and Python</strong>.</p>
    </div>

    <h3>Technical Arsenal</h3>
    <ul class="skills-bullet-list">
      <li><strong>Frontend & Product UI/UX:</strong> Next.js, React, Tailwind CSS, JavaScript/ES6+, HTML5/CSS3, Figma UI/UX prototyping, WCAG Accessibility.</li>
      <li><strong>Backend & Architecture:</strong> Laravel (PHP), WordPress Core & Custom Extensions, Python, RESTful API Design, MySQL.</li>
      <li><strong>Cloud Infrastructure & DevOps:</strong> Microsoft Azure, Hetzner, Hostinger, CyberPanel, DNS routing, automated backups, and Odoo ERP implementation.</li>
    </ul>

    <h3>Certifications & Education</h3>
    <p class="bio-edu-text">
      • <strong>Udacity:</strong> Full-Stack Web Development & Front-End Web Development<br>
      • <strong>Edraak:</strong> Full-Stack Web Developer, WordPress Customization, UX/UI Design<br>
      • <strong>Helwan University:</strong> Bachelor of Arts (2021) • Arabic (Native) & English (Professional).
    </p>
  `;

  elements.btnLangAr.classList.toggle("active", isAr);
  elements.btnLangEn.classList.toggle("active", !isAr);

  renderBookshelf();
  if (state.isFlipBookOpen) {
    const project = getFilteredProjects()[state.activeProjectIndex];
    if (project) {
      renderBookRolesTabs(project);
      loadChapter(state.activeChapterIndex, project);
    }
  }
}

// FILTER PROJECTS
function getFilteredProjects() {
  if (state.currentCategory === "all") return PROJECTS;
  return PROJECTS.filter(p => p.category === state.currentCategory);
}

// RENDER 3D BOOKSHELF CAROUSEL
function renderBookshelf() {
  const list = getFilteredProjects();
  if (state.activeProjectIndex >= list.length) {
    state.activeProjectIndex = 0;
  }
  
  elements.carouselTrack.innerHTML = "";
  elements.carouselDots.innerHTML = "";

  list.forEach((proj, idx) => {
    const card = document.createElement("div");
    card.className = "book-card-3d";
    card.dataset.index = idx;

    if (idx === state.activeProjectIndex) {
      card.classList.add("active");
    } else if (idx === (state.activeProjectIndex - 1 + list.length) % list.length) {
      card.classList.add("prev");
    } else if (idx === (state.activeProjectIndex + 1) % list.length) {
      card.classList.add("next");
    } else {
      card.classList.add("hidden-card");
    }

    const tData = proj.translations[state.currentLang];

    // Tap hint badge (shown on active card)
    const tapHintHTML = idx === state.activeProjectIndex ? `
      <div class="book-tap-hint">
        <span class="tap-hint-pulse"></span>
        ${state.currentLang === 'ar' ? 'اضغط للفتح' : 'Tap to Open'}
      </div>
    ` : '';

    // Card Content: Moon Academy special cover, Wasalna brand cover, or image cover
    if (proj.id === 'moon-academy') {
      card.innerHTML = `
        <div class="book-geometry">
          <div class="book-cover-front">
            <div class="modern-moon-cover">
              <div class="moon-cover-top">
                <span>${proj.code}</span>
                <span>${proj.year}</span>
              </div>
              <div class="moon-cover-center">
                <div class="moon-cover-logo-frame">
                  <img src="imgs/Moon Academy/moon-logo.svg" alt="Moon Academy Logo">
                </div>
                <h3 class="moon-cover-title">${tData.title}</h3>
                <p class="moon-cover-subtitle">${tData.subtitle}</p>
              </div>
              <div class="moon-cover-chapters">
                ${proj.chapters.map((ch, cIdx) => `
                  <div class="moon-cover-ch-row ${cIdx === 0 ? 'active' : ''}">
                    <span>${ch.icon} ${ch.translations[state.currentLang].tabLabel}</span>
                    <span>${ch.steps ? ch.steps.length + ' ' + (state.currentLang === 'ar' ? 'شاشات' : 'Screens') : (state.currentLang === 'ar' ? 'قريباً' : 'Soon')}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="book-spine-crease"></div>
          </div>
          <div class="book-page-edges"></div>
        </div>
        ${tapHintHTML}
      `;
    } else if (proj.isMasterBook) {
      card.innerHTML = `
        <div class="book-geometry">
          <div class="book-cover-front">
            <div class="modern-wasalna-cover">
              <div class="wasalna-cover-top">
                <span>${proj.code}</span>
                <span>${proj.year}</span>
              </div>
              <div class="wasalna-cover-center">
                <div class="wasalna-cover-logo-frame">
                  <img src="imgs/wesalna/logo/Group 4.svg" alt="Wasalna Logo">
                </div>
                <h3 class="wasalna-cover-title">${tData.title}</h3>
                <p class="wasalna-cover-subtitle">${tData.subtitle}</p>
              </div>
              <div class="wasalna-cover-chapters">
                ${proj.chapters.map((ch, cIdx) => `
                  <div class="wasalna-cover-ch-row ${cIdx === 0 ? 'active' : ''}">
                    <span>${ch.icon} ${ch.translations[state.currentLang].tabLabel}</span>
                    <span>${ch.steps ? ch.steps.length + ' ' + (state.currentLang === 'ar' ? 'شاشات' : 'Screens') : (state.currentLang === 'ar' ? 'قريباً' : 'Soon')}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="book-spine-crease"></div>
          </div>
          <div class="book-page-edges"></div>
        </div>
        ${tapHintHTML}
      `;
    } else {
      card.innerHTML = `
        <div class="book-geometry">
          <div class="book-cover-front">
            <img src="${proj.coverImg}" alt="${tData.title} Cover" class="book-cover-img" loading="eager">
            <div class="book-spine-crease"></div>
          </div>
          <div class="book-page-edges"></div>
        </div>
        ${tapHintHTML}
      `;
    }

    card.addEventListener("click", () => {
      if (idx === state.activeProjectIndex) {
        openFlipBook(proj);
      } else {
        state.activeProjectIndex = idx;
        playSound("turn");
        updateCarouselPositions();
      }
    });

    elements.carouselTrack.appendChild(card);

    const dot = document.createElement("button");
    dot.className = `carousel-dot ${idx === state.activeProjectIndex ? "active" : ""}`;
    dot.setAttribute("aria-label", `View ${tData.title}`);
    dot.addEventListener("click", () => {
      state.activeProjectIndex = idx;
      playSound("turn");
      updateCarouselPositions();
    });
    elements.carouselDots.appendChild(dot);
  });

  const activeProj = list[state.activeProjectIndex];
  if (activeProj) {
    elements.watermarkTitle.textContent = activeProj.translations[state.currentLang].title;
  }
}

// UPDATE CAROUSEL 3D POSITIONS
function updateCarouselPositions() {
  const list = getFilteredProjects();
  const cards = elements.carouselTrack.querySelectorAll(".book-card-3d");
  const dots = elements.carouselDots.querySelectorAll(".carousel-dot");

  cards.forEach((card, idx) => {
    card.classList.remove("active", "prev", "next", "hidden-card");

    if (idx === state.activeProjectIndex) {
      card.classList.add("active");
    } else if (idx === (state.activeProjectIndex - 1 + list.length) % list.length) {
      card.classList.add("prev");
    } else if (idx === (state.activeProjectIndex + 1) % list.length) {
      card.classList.add("next");
    } else {
      card.classList.add("hidden-card");
    }
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === state.activeProjectIndex);
  });

  const activeProj = list[state.activeProjectIndex];
  if (activeProj) {
    elements.watermarkTitle.textContent = activeProj.translations[state.currentLang].title;
  }
}

// OPEN FLIPBOOK DEEP DIVE

// RENDER CHAPTER / ROLES TABS WITH ACTIVE LANGUAGE
function renderBookRolesTabs(project) {
  if (!elements.bookRolesTabs) return;
  elements.bookRolesTabs.innerHTML = "";
  if (!project || !project.chapters) return;

  project.chapters.forEach((chapter, cIdx) => {
    const chData = chapter.translations[state.currentLang];
    const btn = document.createElement("button");
    btn.className = `inside-role-tab role-tab-btn ${cIdx === state.activeChapterIndex ? "active" : ""} ${chapter.isComingSoon ? "disabled-btn is-soon" : ""}`;
    btn.innerHTML = `<span>${chapter.icon}</span> <span>${chData.tabLabel}</span>`;
    
    btn.addEventListener("click", () => {
      if (chapter.isComingSoon) return;
      playSound("turn");
      elements.bookRolesTabs.querySelectorAll(".role-tab-btn, .inside-role-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadChapter(cIdx, project);
    });

    elements.bookRolesTabs.appendChild(btn);
  });
}

function openFlipBook(project) {
  state.isFlipBookOpen = true;
  state.activeChapterIndex = 0;
  state.activeStepIndex = 0;
  playSound("turn");

  elements.bookshelfView.classList.add("hidden");
  elements.flipbookView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  const pData = project.translations[state.currentLang];
  elements.watermarkTitle.textContent = pData.title;

  // Render Inside-Book Chapter Tabs (Roles)
  renderBookRolesTabs(project);

  loadChapter(0, project);
}

// LOAD A SPECIFIC CHAPTER (ROLE)
function loadChapter(chapterIndex, project) {
  state.activeChapterIndex = chapterIndex;
  state.activeStepIndex = 0;
  const chapter = project.chapters[chapterIndex];
  if (!chapter || chapter.isComingSoon) return;

  const chData = chapter.translations[state.currentLang];
  const pData = project.translations[state.currentLang];

  // Render Left Page: Brand / Spec sheet
  if (project.isMasterBook) {
    elements.leftPageContent.innerHTML = `
      <div class="left-cover-thumb-container">
        <div class="wasalna-cover-logo-frame" style="width:65px; height:65px; margin-bottom:0.75rem;">
          <img src="imgs/wesalna/logo/Group 4.svg" alt="Wasalna Logo" style="width:40px; height:30px;">
        </div>
      </div>
      <div class="left-spec-sheet">
        <div class="left-spec-row">
          <span>${state.currentLang === 'ar' ? 'الإصدار' : 'EDITION'}</span>
          <strong>${project.code}</strong>
        </div>
        <div class="left-spec-row">
          <span>${state.currentLang === 'ar' ? 'الفصل النشط' : 'ACTIVE CHAPTER'}</span>
          <strong>${chData.tabLabel}</strong>
        </div>
        ${chData.specs ? chData.specs.map(s => `
          <div class="left-spec-row">
            <span>${s.label}</span>
            <strong>${s.val}</strong>
          </div>
        `).join('') : ''}
      </div>
    `;
  } else {
    elements.leftPageContent.innerHTML = `
      <div class="left-cover-thumb-container">
        <img src="${project.coverImg}" alt="${pData.title}" class="left-cover-thumb-img">
      </div>
      <div class="left-spec-sheet">
        <div class="left-spec-row">
          <span>${state.currentLang === 'ar' ? 'الإصدار' : 'EDITION'}</span>
          <strong>${project.code}</strong>
        </div>
        ${chData.specs ? chData.specs.map(s => `
          <div class="left-spec-row">
            <span>${s.label}</span>
            <strong>${s.val}</strong>
          </div>
        `).join('') : ''}
      </div>
    `;
  }

  // Render Editorial Panel Info
  elements.panelManualId.textContent = project.code;
  elements.panelYear.textContent = project.year;
  elements.panelTitle.textContent = chData.roleTitle;
  elements.panelSubtitle.textContent = chData.roleSubtitle;
  elements.panelDescription.textContent = chData.lead;

  // Render Highlights
  elements.panelFeaturesList.innerHTML = "";
  chData.highlights.forEach(h => {
    const item = document.createElement("div");
    item.className = "feature-item";
    item.innerHTML = `
      <span class="feature-num">${h.num}</span>
      <div class="feature-content">
        <h4>${h.title}</h4>
        <p>${h.desc}</p>
      </div>
    `;
    elements.panelFeaturesList.appendChild(item);
  });

  // Render Tech Pills
  elements.panelTechList.innerHTML = "";
  chData.tech.forEach(t => {
    const tag = document.createElement("span");
    tag.className = "tech-tag";
    tag.textContent = t;
    elements.panelTechList.appendChild(tag);
  });

  loadStep(0, chapter);
}

// RENDER SLIDING 3-TAB WINDOW (Exact 3 Dynamic Sliding Tabs)
function renderSpreadTabs(stepIndex, chapter) {
  if (!elements.spreadTabs) return;
  elements.spreadTabs.innerHTML = "";
  
  const total = chapter.steps.length;
  if (total === 0) return;

  // Compute sliding window of exactly 3 tabs
  let startIdx = 0;
  if (total <= 3) {
    startIdx = 0;
  } else {
    // Keep active step in the center if possible
    if (stepIndex === 0) {
      startIdx = 0;
    } else if (stepIndex === total - 1) {
      startIdx = total - 3;
    } else {
      startIdx = stepIndex - 1;
    }
    // Clamp within valid range
    startIdx = Math.max(0, Math.min(startIdx, total - 3));
  }

  const endIdx = Math.min(startIdx + 3, total);

  for (let sIdx = startIdx; sIdx < endIdx; sIdx++) {
    const step = chapter.steps[sIdx];
    const sData = step.translations[state.currentLang];
    const tabBtn = document.createElement("button");
    const isActive = sIdx === stepIndex;
    tabBtn.className = `spread-tab ${isActive ? "active" : ""}`;
    tabBtn.textContent = sData.tab;
    tabBtn.dataset.step = sIdx;
    tabBtn.title = sData.title || sData.tab;
    tabBtn.addEventListener("click", () => {
      loadStep(sIdx, chapter);
    });
    elements.spreadTabs.appendChild(tabBtn);
  }

  // Update prev / next button states
  if (elements.prevPageBtn) {
    elements.prevPageBtn.style.opacity = stepIndex === 0 ? "0.4" : "1";
    elements.prevPageBtn.style.pointerEvents = stepIndex === 0 ? "none" : "auto";
  }
  if (elements.nextPageBtn) {
    elements.nextPageBtn.style.opacity = stepIndex === total - 1 ? "0.4" : "1";
    elements.nextPageBtn.style.pointerEvents = stepIndex === total - 1 ? "none" : "auto";
  }
}


// LOAD STEP SCREENSHOT & HOTSPOTS
function loadStep(stepIndex, chapter) {
  state.activeStepIndex = stepIndex;
  const step = chapter.steps[stepIndex];
  if (!step) return;

  playSound("turn");
  const sData = step.translations[state.currentLang];

  // Animate screenshot change
  elements.activePageScreenshot.style.opacity = "0";
  setTimeout(() => {
    elements.activePageScreenshot.src = step.image;
    elements.activePageScreenshot.alt = sData.title;
    elements.activePageScreenshot.style.opacity = "1";
    
    const frame = document.getElementById("screenshot-frame");
    if (frame) {
      frame.classList.toggle("contain-fit", Boolean(step.image && step.image.includes("145511")));
    }
  }, 120);

  // Update Plate & Page Num
  elements.pagePlateTag.textContent = sData.plate;
  elements.pageNumDisp.textContent = `Pg. ${stepIndex + 1} / ${chapter.steps.length}`;

  // Update sliding spread tabs (shows exactly 3 sliding tabs)
  renderSpreadTabs(stepIndex, chapter);

  elements.hotspotCallout.classList.add("hidden");
  renderHotspots(sData.hotspots);
}

// RENDER DELICATE HOTSPOTS
function renderHotspots(hotspots = []) {
  if (!elements.hotspotsLayer) return;
  elements.hotspotsLayer.innerHTML = "";

  if (!hotspots || hotspots.length === 0) return;

  hotspots.forEach((spot, idx) => {
    const pin = document.createElement("button");
    pin.className = "hotspot-pin";
    pin.style.left = `${spot.x}%`;
    pin.style.top = `${spot.y}%`;
    pin.textContent = idx + 1;
    pin.setAttribute("aria-label", spot.title);
    pin.title = spot.title; // Immediate tooltip on hover

    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      playSound("click");

      const isAlreadyActive = pin.classList.contains("active");

      // Clear previous active states
      elements.hotspotsLayer.querySelectorAll(".hotspot-pin").forEach(p => p.classList.remove("active"));

      // If clicked again when already active, close callout
      if (isAlreadyActive && !elements.hotspotCallout.classList.contains("hidden")) {
        elements.hotspotCallout.classList.add("hidden");
        return;
      }

      pin.classList.add("active");

      const t = I18N[state.currentLang];
      elements.calloutBadge.textContent = `${t.featureBadge} 0${idx + 1}`;
      elements.calloutTitle.textContent = spot.title;
      elements.calloutDesc.textContent = spot.desc;
      elements.calloutTech.textContent = `${t.architectureLabel} ${spot.tech}`;
      elements.hotspotCallout.classList.remove("hidden");
    });

    elements.hotspotsLayer.appendChild(pin);
  });
}

// CLOSE FLIPBOOK & RETURN TO SHELF
function closeFlipBook() {
  state.isFlipBookOpen = false;
  playSound("turn");
  elements.flipbookView.classList.add("hidden");
  elements.bookshelfView.classList.remove("hidden");

  const list = getFilteredProjects();
  const activeProj = list[state.activeProjectIndex];
  if (activeProj) {
    elements.watermarkTitle.textContent = activeProj.translations[state.currentLang].title;
  }
}

// RENDER THE COLLECTION ARCHIVE MODAL
function renderCollectionGrid() {
  elements.collectionGrid.innerHTML = "";

  PROJECTS.forEach(proj => {
    const tData = proj.translations[state.currentLang];
    const card = document.createElement("div");
    card.className = "collection-item-card";
    card.innerHTML = `
      <span class="manual-code">${proj.code}</span>
      <h3 class="collection-name">${tData.title}</h3>
      <p class="collection-desc">${tData.subtitle}</p>
    `;

    card.addEventListener("click", () => {
      elements.collectionDialog.close();
      const list = getFilteredProjects();
      const foundIdx = list.findIndex(p => p.id === proj.id);
      if (foundIdx !== -1) {
        state.activeProjectIndex = foundIdx;
      }
      openFlipBook(proj);
    });

    elements.collectionGrid.appendChild(card);
  });
}

// 3D PARALLAX TILT
function setupParallaxTilt() {
  document.addEventListener("mousemove", (e) => {
    if (!state.isFlipBookOpen) return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;

    const bookOpened = document.getElementById("book-opened-element");
    if (bookOpened) {
      const baseRotY = state.currentLang === "ar" ? 6 : -6;
      const rotY = baseRotY + deltaX * 3;
      const rotX = 3 - deltaY * 2;
      bookOpened.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    }
  });
}

// EVENT LISTENERS
function setupEventListeners() {
  // Language Switch
  elements.btnLangAr.addEventListener("click", () => {
    if (state.currentLang === "ar") return;
    state.currentLang = "ar";
    playSound("click");
    updateLanguageUI();
  });

  elements.btnLangEn.addEventListener("click", () => {
    if (state.currentLang === "en") return;
    state.currentLang = "en";
    playSound("click");
    updateLanguageUI();
  });

  // Shelf Carousel Prev / Next
  elements.prevBookBtn.addEventListener("click", () => {
    const list = getFilteredProjects();
    state.activeProjectIndex = (state.activeProjectIndex - 1 + list.length) % list.length;
    playSound("turn");
    updateCarouselPositions();
  });

  elements.nextBookBtn.addEventListener("click", () => {
    const list = getFilteredProjects();
    state.activeProjectIndex = (state.activeProjectIndex + 1) % list.length;
    playSound("turn");
    updateCarouselPositions();
  });

  // Return to shelf
  elements.closeFlipbookBtn.addEventListener("click", closeFlipBook);

  // Prev / Next Page within chapter
  elements.prevPageBtn.addEventListener("click", () => {
    const project = getFilteredProjects()[state.activeProjectIndex];
    const chapter = project.chapters[state.activeChapterIndex];
    if (state.activeStepIndex > 0) {
      loadStep(state.activeStepIndex - 1, chapter);
    }
  });

  elements.nextPageBtn.addEventListener("click", () => {
    const project = getFilteredProjects()[state.activeProjectIndex];
    const chapter = project.chapters[state.activeChapterIndex];
    if (state.activeStepIndex < chapter.steps.length - 1) {
      loadStep(state.activeStepIndex + 1, chapter);
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (elements.lightboxDialog.open) elements.lightboxDialog.close();
      else if (elements.collectionDialog.open) elements.collectionDialog.close();
      else if (elements.aboutDialog.open) elements.aboutDialog.close();
      else if (state.isFlipBookOpen) closeFlipBook();
    } else if (e.key === "ArrowLeft") {
      if (state.isFlipBookOpen) {
        if (state.currentLang === "ar") elements.nextPageBtn.click();
        else elements.prevPageBtn.click();
      } else {
        elements.prevBookBtn.click();
      }
    } else if (e.key === "ArrowRight") {
      if (state.isFlipBookOpen) {
        if (state.currentLang === "ar") elements.prevPageBtn.click();
        else elements.nextPageBtn.click();
      } else {
        elements.nextBookBtn.click();
      }
    }
  });

  // Callout close
  elements.calloutCloseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    elements.hotspotCallout.classList.add("hidden");
    elements.hotspotsLayer.querySelectorAll(".hotspot-pin").forEach(p => p.classList.remove("active"));
  });

  // Toggle Feature Pins
  elements.btnToggleHotspots.addEventListener("click", () => {
    state.areHotspotsVisible = !state.areHotspotsVisible;
    playSound("click");
    elements.hotspotsLayer.classList.toggle("hidden", !state.areHotspotsVisible);
    elements.hotspotCallout.classList.add("hidden");
    const t = I18N[state.currentLang];
    elements.hotspotsBtnLabel.textContent = state.areHotspotsVisible ? t.hideHotspots : t.showHotspots;
  });

  // Fullscreen Preview Lightbox
  elements.btnFullscreenPreview.addEventListener("click", () => {
    const project = getFilteredProjects()[state.activeProjectIndex];
    const chapter = project.chapters[state.activeChapterIndex];
    const step = chapter.steps[state.activeStepIndex];
    if (step) {
      elements.lightboxImg.src = step.image;
      elements.lightboxCaption.textContent = `${chapter.translations[state.currentLang].roleTitle} — ${step.translations[state.currentLang].title}`;
      elements.lightboxDialog.showModal();
    }
  });

  elements.closeLightboxBtn.addEventListener("click", () => {
    elements.lightboxDialog.close();
  });

  // Category filter
  elements.categoryFilter.addEventListener("click", (e) => {
    const pill = e.target.closest(".cat-pill");
    if (!pill) return;
    playSound("click");
    elements.categoryFilter.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    state.currentCategory = pill.dataset.filter;
    state.activeProjectIndex = 0;
    if (state.isFlipBookOpen) {
      closeFlipBook();
    }
    renderBookshelf();
  });

  // Modals
  elements.openCollectionBtn.addEventListener("click", () => {
    playSound("click");
    renderCollectionGrid();
    elements.collectionDialog.showModal();
  });

  elements.closeCollectionBtn.addEventListener("click", () => {
    elements.collectionDialog.close();
  });

  elements.openAboutBtn.addEventListener("click", () => {
    playSound("click");
    elements.aboutDialog.showModal();
  });

  elements.closeAboutBtn.addEventListener("click", () => {
    elements.aboutDialog.close();
  });

  [elements.collectionDialog, elements.aboutDialog, elements.lightboxDialog].forEach(dialog => {
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const inDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!inDialog) dialog.close();
    });
  });

  document.getElementById("brand-home").addEventListener("click", (e) => {
    e.preventDefault();
    if (state.isFlipBookOpen) closeFlipBook();
  });

  setupParallaxTilt();
}

// INITIALIZATION ENTRY POINT
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  updateLanguageUI();
});

  // Close callout when clicking anywhere outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".hotspot-pin") && !e.target.closest("#hotspot-callout")) {
      if (elements.hotspotCallout && !elements.hotspotCallout.classList.contains("hidden")) {
        elements.hotspotCallout.classList.add("hidden");
        if (elements.hotspotsLayer) {
          elements.hotspotsLayer.querySelectorAll(".hotspot-pin").forEach(p => p.classList.remove("active"));
        }
      }
    }
  });
