import re

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Project definition for Masters Global
masters_proj = '''  ,
  // ── 05. MASTERS GLOBAL (AUDIT, TAX & ADVISORY) ─────────────
  {
    id: "masters-global",
    isMasterBook: true,
    category: "masters",
    code: "FIELD MANUAL • VOL. 05",
    year: "2024–2026",
    rating: "✦ ✦ ✦ ✦ ✦",
    logo: "imgs/Masters Globel/logo_white.png",
    logoDark: "imgs/Masters Globel/logo_dark.png",
    liveUrl: "https://www.masters-g.com/",
    translations: {
      ar: {
        title: "ماسترز جلوبال للمحاسبة والاستشارات",
        subtitle: "البوابة المؤسسية لشركة المراجعة والضرائب والاستشارات المالية المصرية",
        lead: "بوابة رقمية مؤسسية تم تصميمها وتطويرها لشركة ماسترز جلوبال (Masters Global) الرائدة في خدمات التدقيق المحاسبي والاستشارات الضريبية والمالية في مصر والشرق الأوسط. تجمع المنصة بين الهوية الراقية وسهولة تصفح الخدمات والقطاعات الاقتصادية العشر وفريق الشركاء التنفيذيين.",
        coverMeta: "شركة استشارات ومراجعة مالية • 2024–2026"
      },
      en: {
        title: "Masters Global",
        subtitle: "Corporate Portal for Premier Egyptian Audit, Tax & Financial Advisory Firm",
        lead: "An institutional enterprise portal architected and engineered for Masters Global, an elite Egyptian audit and advisory firm. Designed with corporate precision, the platform showcases comprehensive assurance and tax compliance, across 10 vital industrial sectors, and executive partner profiles.",
        coverMeta: "Audit, Tax & Advisory Enterprise • 2024–2026"
      }
    },
    chapters: [
      // Chapter 1: Corporate Identity & Financial Assurance
      {
        id: "masters-assurance",
        icon: "⚖️",
        translations: {
          ar: {
            tabLabel: "01. الهوية والخدمات المحاسبية",
            roleTitle: "الهوية المؤسسية وخدمات المراجعة والضرائب",
            roleSubtitle: "الواجهة الرئيسية، رسالة التميز الممتدة لـ 20 عاماً، والشفافية المهنية",
            lead: "الواجهة الرقمية لشركة ماسترز جلوبال؛ تبرز الخبرة العميقة لشركاء المهنة وتقديم حلول التدقيق المالي المستقل والتخطيط الضريبي المتوافق مع اللوائح المصرية والدولية.",
            specs: [
              { label: "نوع المنصة", val: "Corporate Audit & Advisory Portal" },
              { label: "المجال المهني", val: "Audit, Tax, Accounting & Advisory" },
              { label: "الرابط المباشر", val: '<a href="https://www.masters-g.com/" target="_blank" rel="noopener noreferrer" style="color:var(--accent-gold); text-decoration:underline;">masters-g.com ↗</a>' },
              { label: "الدور التقني", val: "Senior Full-Stack Web Developer & UI/UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "واجهة مؤسسية فائقة الدقة (Corporate UI/UX)",
                desc: "تصميم احترافي يعكس الرصانة والمصداقية المطلوبة لشركات التدقيق المالي العالمية مع تجربة تصفح تفاعلية وسلسة."
              },
              {
                num: "02",
                title: "عرض متكامل للخدمات الضريبية (Tax Compliance)",
                desc: "تبويب استراتيجي للضرائب والتخطيط المالي وتخفيف المخاطر وفق أحدث القوانين الضريبية المصرية."
              },
              {
                num: "03",
                title: "شفافية التعاقد والأتعاب (Value for Money)",
                desc: "قسم مخصص يوضح أسس خطاب التعاقد وحساب الأتعاب بشفافية واستقلالية كاملة تدعم الثقة بين الشركة وعملائها."
              }
            ],
            tech: ["Modern Responsive Frontend", "Performance Optimization", "Corporate Brand Typography", "Enterprise Security & SEO", "Clean Information Architecture"]
          },
          en: {
            tabLabel: "01. Corporate & Assurance",
            roleTitle: "Corporate Identity & Assurance Services",
            roleSubtitle: "Homepage Architecture, 20+ Years Excellence & Value Transparency",
            lead: "The digital flagship for Masters Global, communicating independent audit excellence, strategic corporate tax compliance, and multi-decade leadership across Egyptian and regional markets.",
            specs: [
              { label: "Platform Type", val: "Corporate Audit & Advisory Portal" },
              { label: "Industry Domain", val: "Audit, Tax, Accounting & Advisory" },
              { label: "Live Website", val: '<a href="https://www.masters-g.com/" target="_blank" rel="noopener noreferrer" style="color:var(--accent-gold); text-decoration:underline;">masters-g.com ↗</a>' },
              { label: "Role", val: "Senior Full-Stack Web Developer & UI/UX" }
            ],
            highlights: [
              {
                num: "01",
                title: "Elite Corporate Visual Architecture",
                desc: "Refined aesthetic reflecting audit prestige, corporate assurance, and institutional trust tailored for C-suite decision-makers."
              },
              {
                num: "02",
                title: "Complex Taxation Compliance Matrix",
                desc: "Dedicated sections illuminating corporate tax planning, risk mitigation, and regulatory alignment with Egyptian tax laws."
              },
              {
                num: "03",
                title: "Fee Transparency & Governance Framework",
                desc: "Clear articulation of engagement approach, scope governance, and transparent fee structures reinforcing client confidence."
              }
            ],
            tech: ["Modern Responsive Frontend", "Performance Optimization", "Corporate Brand Typography", "Enterprise Security & SEO", "Clean Information Architecture"]
          }
        },
        steps: [
          {
            image: "imgs/Masters Globel/Screenshot 2026-10-01 205605.png",
            translations: {
              ar: {
                tab: "01. الواجهة والرسالة",
                title: "الواجهة الرئيسية وهوية شركة ماسترز جلوبال",
                caption: "الخبراء الأنسب لحماية استثماراتك: تصميم رصين يعكس المكانة المهنية لشركة المراجعة",
                hotspots: [
                  { x: 23, y: 3, title: "الهوية والشعار المؤسسي (Masters Global)", desc: "شعار الشركة الرسمي بألوان الكحلي والسماوي الرصينة والمعبرة عن الثقة والاستقرار المالي.", tech: "Corporate Vector Identity" },
                  { x: 55, y: 3, title: "قائمة الملاحة المؤسسية المباشرة", desc: "روابط سريعة لأقسام: من نحن، الخدمات، القطاعات، فريق العمل، ونموذج التواصل الفوري.", tech: "Fixed Navbar Component" },
                  { x: 76, y: 3, title: "زر الحجز وبدء المحادثة (Get in Touch)", desc: "دعوة واضحة للعملاء للتواصل وطلب استشارة تدقيق أو فحص ضريبي.", tech: "Conversion CTA Button" },
                  { x: 28, y: 38, title: "شعار القيمة والرسالة الاستراتيجية", desc: "The Right Experts to Protect Your Investments — التعبير عن رعاية مصالح المستثمرين والشركات.", tech: "Hero Typography Hierarchy" },
                  { x: 65, y: 50, title: "معرض الصور الرصين وأفق الأعمال", desc: "لقطات احترافية تجسد بيئة الأعمال المالية المعاصرة مع أفق العاصمة التاريخية.", tech: "Dynamic Masked Hero Frame" }
                ]
              },
              en: {
                tab: "01. Homepage & Mission",
                title: "Corporate Hero & Professional Assurance",
                caption: "The Right Experts to Protect Your Investments: Institutional clarity tailored for corporate leaders",
                hotspots: [
                  { x: 23, y: 3, title: "Official Brand Mark (Masters Global)", desc: "Distinct corporate navy and cyan emblem embodying financial trust, rigor, and stability.", tech: "Corporate Vector Identity" },
                  { x: 55, y: 3, title: "Executive Navigation Suite", desc: "Streamlined pathways to About, Services, Industry Sectors, Partners, and Contact.", tech: "Fixed Navbar Component" },
                  { x: 76, y: 3, title: "Direct Client Engagement CTA (Get in Touch)", desc: "Prominent conversion button initiating confidential audit or advisory inquiries.", tech: "Conversion CTA Button" },
                  { x: 28, y: 38, title: "Core Strategic Value Proposition", desc: "Positions the firm as trusted guardians protecting capital, compliance, and growth.", tech: "Hero Typography Hierarchy" },
                  { x: 65, y: 50, title: "Polished Corporate Visual Showcase", desc: "High-resolution executive photography anchored against the modern metropolis skyline.", tech: "Dynamic Masked Hero Frame" }
                ]
              }
            }
          },
          {
            image: "imgs/Masters Globel/Screenshot 2026-10-01 205619.png",
            translations: {
              ar: {
                tab: "02. الرؤية والريادة",
                title: "رؤية الشركة وخبرة تفوق 20 عاماً في التدقيق",
                caption: "تمكين الشركات من النمو والاستدامة عبر خدمات تدقيق القوائم المالية وإدارة المخاطر",
                hotspots: [
                  { x: 30, y: 28, title: "عنوان قسم من نحن (Leaders in Empowering)", desc: "تأكيد المكانة كرواد في تمكين الكيانات التجارية من الصمود والنمو الاستراتيجي.", tech: "Editorial Storytelling Header" },
                  { x: 30, y: 48, title: "الأساس الموثوق لصناع القرار", desc: "توفير أرضية صلبة ومعلومات مالية محايدة تتيح للإدارة اتخاذ القرارات وحصار المخاطر.", tech: "Governance Narrative Block" },
                  { x: 30, y: 72, title: "بطاقة الرؤية الاستراتيجية (Our Vision)", desc: "أن نكون الشريك العالمي الموثوق بتقديم خدمات مهنية مستقلة وعالية الجودة.", tech: "Glassmorphic Vision Card" },
                  { x: 60, y: 78, title: "وسام الـ 20 عاماً من التميز المهني", desc: "شارة توثق عقدين من الممارسة الناجحة في السوق المصري والإقليمي.", tech: "Milestone Badge Overlay" },
                  { x: 65, y: 50, title: "الصورة التوثيقية لفريق الشركاء والاستشاريين", desc: "عرض للكوادر القيادية في قاعة اجتماعات برج أعمال عالمي.", tech: "Curated Team Portraiture" }
                ]
              },
              en: {
                tab: "02. Vision & Heritage",
                title: "Corporate Vision & 20+ Years Excellence",
                caption: "Empowering businesses to grow and sustain through robust financial assurance and risk mitigation",
                hotspots: [
                  { x: 30, y: 28, title: "Corporate Mandate (Who We Are)", desc: "Positions Masters Global as prime enablers of enterprise resilience and capital growth.", tech: "Editorial Storytelling Header" },
                  { x: 30, y: 48, title: "Data-Driven Foundations for Decision-Makers", desc: "Delivers verified audits empowering boards with actionable risk mitigation.", tech: "Governance Narrative Block" },
                  { x: 30, y: 72, title: "Strategic Vision Statement Card", desc: "To be the trusted partner delivering independent, uncompromising professional quality.", tech: "Glassmorphic Vision Card" },
                  { x: 60, y: 78, title: "20+ Years Excellence Milestone Badge", desc: "Validates two decades of verified practice across top corporate engagements.", tech: "Milestone Badge Overlay" },
                  { x: 65, y: 50, title: "Boardroom Executive Portraiture", desc: "Captures the multidisciplinary partner council in contemporary corporate setting.", tech: "Curated Team Portraiture" }
                ]
              }
            }
          },
          {
            image: "imgs/Masters Globel/Screenshot 2026-10-01 205652.png",
            translations: {
              ar: {
                tab: "03. القيمة والشفافية",
                title: "لماذا ماسترز جلوبال؟ الشفافية والعدالة في الأتعاب",
                caption: "التزام كامل بتقديم أعلى قيمة مقابل الاستثمار مع وضوح تام في خطابات التعاقد",
                hotspots: [
                  { x: 30, y: 28, title: "فلسفة الأتعاب العادلة (Value for Money)", desc: "مراعاة أهمية ترشيد الإنفاق المهني وتقديم خدمات رفيعة المستوى بأسعار تنافسية ومدروسة.", tech: "Value Proposition Typography" },
                  { x: 30, y: 55, title: "وضوح خطاب التعاقد (Engagement Letter)", desc: "تحديد دقيق لمنهجية المراجعة وخدمات الضرائب وهيكل الأتعاب ومؤهلات الفريق مسبقاً.", tech: "Contractual Clarity Standard" },
                  { x: 25, y: 72, title: "خاتم الشعار الرسمي المعتمد", desc: "تأكيد التوقيع المهني والموثوقية القانونية لأعمال الشركة.", tech: "Monochrome Brand Seal" },
                  { x: 85, y: 50, title: "الأشكال الهندسية المتراكبة (Corporate Geometry)", desc: "عناصر بصرية متداخلة تعبر عن التكامل والدقة الحسابية والاستشارات المترابطة.", tech: "Decorative Canvas Geometry" }
                ]
              },
              en: {
                tab: "03. Value & Transparency",
                title: "Why Masters Global: Transparent Governance",
                caption: "Uncompromising commitment to value for money, contractual clarity, and competitive fee structures",
                hotspots: [
                  { x: 30, y: 28, title: "Value for Money Principle", desc: "Balances world-class professional standards with fair, transparent, and competitive pricing.", tech: "Value Proposition Typography" },
                  { x: 30, y: 55, title: "Clear Engagement Letter Framework", desc: "Explicitly defines audit methodologies, tax scopes, credentials, and fee benchmarks.", tech: "Contractual Clarity Standard" },
                  { x: 25, y: 72, title: "Official Corporate Signature Seal", desc: "Represents regulatory sign-off authority and institutional accountability.", tech: "Monochrome Brand Seal" },
                  { x: 85, y: 50, title: "Abstract Corporate Geometric Visuals", desc: "Overlapping angular motifs symbolizing layered auditing accuracy and integration.", tech: "Decorative Canvas Geometry" }
                ]
              }
            }
          }
        ]
      },

      // Chapter 2: Advisory Practice, Industry Matrix & Leadership
      {
        id: "masters-advisory",
        icon: "📊",
        translations: {
          ar: {
            tabLabel: "02. القطاعات وفريق الشركاء",
            roleTitle: "الخدمات الضريبية، مصفوفة القطاعات، وفريق الشركاء",
            roleSubtitle: "التخطيط الضريبي المعقد، تغطية 10 قطاعات صناعية، والخبرات التنفيذية",
            lead: "منظومة الاستشارات التخصصية لشركة ماسترز جلوبال؛ تبرز الكفاءة في فحص الأنظمة الضريبية، ومصفوفة القطاعات الاقتصادية المخدومة، وسجلات الشركاء المعتمدين لدى جمعية المحاسبين والمراجعين المصرية ووزارة المالية.",
            specs: [
              { label: "تغطية القطاعات", val: "10 Industrial & Service Sectors" },
              { label: "فريق الشركاء", val: "Certified Partners (ESAA, EST, RAA)" },
              { label: "الرابط المباشر", val: '<a href="https://www.masters-g.com/" target="_blank" rel="noopener noreferrer" style="color:var(--accent-gold); text-decoration:underline;">masters-g.com ↗</a>' },
              { label: "الأداء والاستجابة", val: "100% Mobile & Desktop Responsive" }
            ],
            highlights: [
              {
                num: "01",
                title: "استشارات الضرائب المعقدة (Taxation Services)",
                desc: "حلول دقيقة للضرائب العامة وضريبة القيمة المضافة وتسعير المعاملات للشركات المحلية ومتعددة الجنسيات."
              },
              {
                num: "02",
                title: "مصفوفة الـ 10 قطاعات الاقتصادية (Industry Matrix)",
                desc: "تغطية قطاعات التصنيع، العقارات، الهندسة، الخدمات المالية، المنظمات غير الحكومية، والتعليم."
              },
              {
                num: "03",
                title: "سجل الشركاء المعتمدين (Key Executive Partners)",
                desc: "بطاقات تفاعلية للشركاء التنفيذيين (عرفه عبد الحفيظ، محمد العزوني، عبد الرحمن بكري) مع تراخيص وزارة المالية."
              }
            ],
            tech: ["Faceted Service Filtering", "Responsive SVG Icon Grid", "Partner Profile Cards", "Corporate Color Palette", "High-Resolution Image Delivery"]
          },
          en: {
            tabLabel: "02. Sectors & Leadership",
            roleTitle: "Tax Advisory, Sector Matrix & Executive Partners",
            roleSubtitle: "Tax Compliance, 10 Industrial Sectors & Certified Partner Directory",
            lead: "The specialized advisory showcase for Masters Global; detailing complex corporate tax structuring, deep sector domain coverage across 10 industries, and partner certifications across Egyptian and international accounting societies.",
            specs: [
              { label: "Industry Coverage", val: "10 Industrial & Service Sectors" },
              { label: "Leadership Credentials", val: "Certified Partners (ESAA, EST, RAA)" },
              { label: "Live Website", val: '<a href="https://www.masters-g.com/" target="_blank" rel="noopener noreferrer" style="color:var(--accent-gold); text-decoration:underline;">masters-g.com ↗</a>' },
              { label: "Experience Tier", val: "15 to 20+ Years Executive Practice" }
            ],
            highlights: [
              {
                num: "01",
                title: "Complex Taxation Advisory Practice",
                desc: "Strategic corporate tax planning, transfer pricing, and disputes resolution aligned with the Ministry of Finance."
              },
              {
                num: "02",
                title: "10 Diverse Industrial Sectors Covered",
                desc: "Specialized auditing for manufacturing, real estate, engineering, banking, agriculture, and educational institutions."
              },
              {
                num: "03",
                title: "Certified Executive Partner Profiles",
                desc: "Interactive credentials directory showcasing Arafa Abdelhafeez, Mohamed El-Azzonni, and Abdelrahman Bakry."
              }
            ],
            tech: ["Faceted Service Filtering", "Responsive SVG Icon Grid", "Partner Profile Cards", "Corporate Color Palette", "High-Resolution Image Delivery"]
          }
        },
        steps: [
          {
            image: "imgs/Masters Globel/Screenshot 2026-10-01 205630.png",
            translations: {
              ar: {
                tab: "01. الاستشارات الضريبية",
                title: "الخدمات والاستشارات الضريبية المتخصصة",
                caption: "الثقة في التعامل مع اللوائح الضريبية المعقدة وحماية الشركات من التعثر أو الغرامات",
                hotspots: [
                  { x: 30, y: 24, title: "عنوان قسم الخدمات الضريبية", desc: "Taxation Services — Confidence in complex tax regulations للتأكيد على الفهم الدقيق للقوانين.", tech: "Service Header Section" },
                  { x: 35, y: 35, title: "التخطيط الضريبي الفعال والتطبيق الصحيح", desc: "فحص الإقرارات والامتثال الكامل مع تعليمات مصلحة الضرائب المصرية.", tech: "Regulatory Compliance Text" },
                  { x: 42, y: 68, title: "شاشة التحليل المالي والبيانات الاستراتيجية", desc: "أدوات رقابية وشاشات تحليل للبيانات التراكمية وهيكلة الضرائب المؤسسية.", tech: "Financial Analytics Display" },
                  { x: 62, y: 65, title: "الخبير الاستشاري في بيئة العمل المباشرة", desc: "صورة تجسد العمل المكتبي والتدقيق المتأني في الملفات المالية والمستندات.", tech: "Executive Workplace Visual" },
                  { x: 35, y: 88, title: "التقارير والمجلدات المالية المعتمدة", desc: "مخرجات التدقيق الرسمية المعتمدة لتقديمها للمجالس الإدارية والجهات الرقابية.", tech: "Documented Audit Artifacts" }
                ]
              },
              en: {
                tab: "01. Tax Advisory",
                title: "Specialized Corporate Taxation Practice",
                caption: "Confidence in navigating complex tax regulations and ensuring strict statutory compliance",
                hotspots: [
                  { x: 30, y: 24, title: "Taxation Services Header", desc: "Establishes authoritative mastery over intricate national and regional tax frameworks.", tech: "Service Header Section" },
                  { x: 35, y: 35, title: "Strategic Tax Planning Narrative", desc: "Articulates rigorous compliance audits shielding enterprises from penalties or disputes.", tech: "Regulatory Compliance Text" },
                  { x: 42, y: 68, title: "Dual-Display Analytics Dashboard", desc: "Visualizes advanced corporate tax modeling, forecasting, and transfer pricing reviews.", tech: "Financial Analytics Display" },
                  { x: 62, y: 65, title: "Senior Tax Advisory Practitioner", desc: "Editorial photo showcasing executive engagement and hands-on auditing diligence.", tech: "Executive Workplace Visual" },
                  { x: 35, y: 88, title: "Bound Audit & Compliance Workpapers", desc: "Physical and digital evidence files assembled according to international auditing norms.", tech: "Documented Audit Artifacts" }
                ]
              }
            }
          },
          {
            image: "imgs/Masters Globel/Screenshot 2026-10-01 205641.png",
            translations: {
              ar: {
                tab: "02. مصفوفة القطاعات",
                title: "القطاعات والصناعات الاقتصادية المخدومة (10 قطاعات)",
                caption: "تغطية شاملة لعشرة قطاعات حيوية تشمل الصناعة والعقارات والخدمات المالية والتعليم",
                hotspots: [
                  { x: 26, y: 25, title: "عنوان مصفوفة القطاعات (Our Services Industries)", desc: "عرض شامل للقطاعات الاقتصادية التي تتولى الشركة تدقيق حساباتها ومراجعتها.", tech: "Matrix Section Banner" },
                  { x: 27, y: 46, title: "قطاع التصنيع (Manufacturing)", desc: "مراجعة تكاليف الإنتاج وسلاسل الإمداد ومخزون المصانع والشركات الصناعية.", tech: "Industry Card Component" },
                  { x: 38, y: 46, title: "التجارة والاستيراد والتصدير (Import & Export)", desc: "التدقيق الجمركي وحسابات التبادل التجاري وتدفقات النقد الأجنبي.", tech: "Industry Card Component" },
                  { x: 50, y: 46, title: "التطوير العقاري (Real Estate Development)", desc: "فحص المشروعات العقارية الكبرى وحسابات الضمان وتكاليف الإنشاء.", tech: "Industry Card Component" },
                  { x: 61, y: 46, title: "الإنشاءات والهندسة (Construction)", desc: "مراجعة المستخلصات الهندسية ومقاولي الباطن والتدفقات النقدية للمشاريع.", tech: "Industry Card Component" },
                  { x: 72, y: 46, title: "الخدمات المالية (Financial Services)", desc: "تدقيق شركات التمويل والاستثمار وحوكمة الالتزام المصرفي.", tech: "Industry Card Component" },
                  { x: 38, y: 66, title: "المؤسسات غير الهادفة للربح (NGOs)", desc: "مراجعة حسابات التبرعات والمنح والشفافية المالية للمنظمات الأهلية.", tech: "Industry Card Component" }
                ]
              },
              en: {
                tab: "02. Industry Matrix",
                title: "Diverse Multi-Sector Industrial Matrix (10 Sectors)",
                caption: "Comprehensive auditing coverage across manufacturing, real estate, finance, NGOs, and food & beverage",
                hotspots: [
                  { x: 26, y: 25, title: "Services Industries Header Banner", desc: "Categorized taxonomy illustrating cross-sectoral versatility and deep subject-matter expertise.", tech: "Matrix Section Banner" },
                  { x: 27, y: 46, title: "Manufacturing & Production", desc: "Specialized cost-of-goods audits, factory depreciation modeling, and inventory verification.", tech: "Industry Card Component" },
                  { x: 38, y: 46, title: "Commercial, Import & Export", desc: "Audits for cross-border freight, customs valuation, and foreign currency reconciliations.", tech: "Industry Card Component" },
                  { x: 50, y: 46, title: "Real Estate Development", desc: "Escrow account verification, asset valuations, and stage-of-completion accounting.", tech: "Industry Card Component" },
                  { x: 61, y: 46, title: "Construction & Engineering", desc: "Subcontractor audit trails, milestone certs, and project cash-flow risk evaluations.", tech: "Industry Card Component" },
                  { x: 72, y: 46, title: "Financial Services & Asset Management", desc: "Audits for investment funds, fintech platforms, and private capital holdings.", tech: "Industry Card Component" },
                  { x: 38, y: 66, title: "Non-Governmental Organizations (NGOs)", desc: "Donor grant compliance, non-profit fund tracking, and statutory transparency reporting.", tech: "Industry Card Component" }
                ]
              }
            }
          },
          {
            image: "imgs/Masters Globel/Screenshot 2026-10-01 205658.png",
            translations: {
              ar: {
                tab: "03. فريق الشركاء",
                title: "سجل الشركاء الرئيسيين والقيادة التنفيذية",
                caption: "نخبة من الشركاء المعتمدين الحاصلين على زمالة جمعية الضرائب والمحاسبين وخبراء التقييم",
                hotspots: [
                  { x: 26, y: 36, title: "عرفه عبد الحفيظ (Arafa Abdelhafeez)", desc: "شريك التدقيق التنفيذي بخبرة 20 عاماً في مكاتب التدقيق الدولية، عضو جمعية المحاسبين المصرية وزميل جمعية الضرائب.", tech: "Executive Partner Card" },
                  { x: 50, y: 36, title: "محمد العزوني (Mohamed El-Azzonni)", desc: "الشريك التنفيذي لخدمات الضرائب بخبرة 15 عاماً، متخصص في معالجة القضايا الضريبية المعقدة ومعتمد من وزارة المالية.", tech: "Executive Partner Card" },
                  { x: 73, y: 36, title: "عبد الرحمن بكري (Abdelrahman Bakry)", desc: "شريك الاستشارات الأول بخبرة 17 عاماً في الاستثمار المالي ودراسات الجدوى وتقييم الشركات.", tech: "Executive Partner Card" },
                  { x: 26, y: 82, title: "الشهادات والاعتمادات الرسمية (ESAA / EST / RAA)", desc: "قائمة نقاط موثقة بالاعتمادات القانونية التي تؤهل الشركاء للتوقيع على الميزانيات الكبرى.", tech: "Accreditation Checklist" },
                  { x: 50, y: 82, title: "الترخيص من وزارة المالية (Ministry of Finance)", desc: "تسجيل رسمي في سجل المحاسبين والمراجعين بوزارة المالية لضمان سلامة الفحص القانوني.", tech: "Accreditation Checklist" }
                ]
              },
              en: {
                tab: "03. Executive Partners",
                title: "Key Executive Partners & Leadership Directory",
                caption: "Distinguished partners with ESAA, EST, and Ministry of Finance certifications and valuation credentials",
                hotspots: [
                  { x: 26, y: 36, title: "Arafa Abdelhafeez — Executive Audit Partner", desc: "20 years of audit experience across multinational firms; Member of ESAA and Fellow of EST.", tech: "Executive Partner Card" },
                  { x: 50, y: 36, title: "Mohamed El-Azzonni — Taxation Executive Partner", desc: "15 years resolving intricate tax disputes; RAA certified by the Egyptian Ministry of Finance.", tech: "Executive Partner Card" },
                  { x: 73, y: 36, title: "Abdelrahman Bakry — Senior Advisory Partner", desc: "17+ years in corporate valuation, private equity structuring, and financial feasibility.", tech: "Executive Partner Card" },
                  { x: 26, y: 82, title: "Statutory Accreditations (ESAA, EST, RAA)", desc: "Checklist verifying license numbers permitting sign-off on public and private balance sheets.", tech: "Accreditation Checklist" },
                  { x: 50, y: 82, title: "Certified by Ministry of Finance", desc: "Official verification on the public audit register assuring legal accountability.", tech: "Accreditation Checklist" }
                ]
              }
            }
          }
        ]
      }
    ]
  }'''

# Insert masters_proj before the closing '];' of PROJECTS
target_proj_end = "    ]\n  }\n];"
if target_proj_end in content:
    content = content.replace(target_proj_end, "    ]\n  }" + masters_proj + "\n];")
    print("Inserted masters_proj into PROJECTS")
else:
    print("Could not find target_proj_end in app.js")

# 2. Add masters-global cover in renderBookshelf
masters_cover_snippet = '''    } else if (proj.id === 'masters-global') {
      card.innerHTML = `
        <div class="book-geometry">
          <div class="book-cover-front">
            <div class="modern-masters-cover">
              <div class="masters-cover-top">
                <span>${proj.code}</span>
                <span>${proj.year}</span>
              </div>
              <div class="masters-cover-center">
                <div class="masters-cover-logo-frame">
                  <img src="imgs/Masters Globel/logo_white.png" alt="Masters Global Logo">
                </div>
                <h3 class="masters-cover-title">${tData.title}</h3>
                <p class="masters-cover-subtitle">${tData.subtitle}</p>
              </div>
              <div class="masters-cover-chapters">
                ${proj.chapters.map((ch, cIdx) => `
                  <div class="masters-cover-ch-row ${cIdx === 0 ? 'active' : ''}">
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
      `;'''

target_shelf = "} else if (proj.id === 'anna-lindh-foundation') {"
if target_shelf in content:
    # Find the closing of this else if block before the next else
    idx = content.find("        ${tapHintHTML}\n      `;\n    } else {")
    if idx != -1:
        part1 = content[:idx + len("        ${tapHintHTML}\n      `;\n")]
        part2 = content[idx + len("        ${tapHintHTML}\n      `;\n"):]
        content = part1 + masters_cover_snippet + "\n" + part2
        print("Inserted masters-global into renderBookshelf")

# 3. Add masters-global left logo in loadChapter
masters_left_logo = '''  } else if (project.id === 'masters-global') {
    leftLogoHTML = `
      <div class="masters-cover-logo-frame" style="width:125px; height:46px; margin-bottom:0.75rem; border-radius:10px; background:rgba(15,76,129,0.3); display:grid; place-items:center; padding:4px 8px; border: 1.5px solid rgba(56,189,248,0.5); box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
        <img src="imgs/Masters Globel/logo_white.png" alt="Masters Global Logo" style="width:100%; height:100%; object-fit:contain;">
      </div>
    `;'''

target_left = "} else if (project.id === 'anna-lindh-foundation') {"
if target_left in content:
    idx2 = content.find("      </div>\n    `;\n  } else {\n    leftLogoHTML = `<img src=")
    if idx2 != -1:
        partA = content[:idx2 + len("      </div>\n    `;\n")]
        partB = content[idx2 + len("      </div>\n    `;\n"):]
        content = partA + masters_left_logo + "\n" + partB
        print("Inserted masters-global into loadChapter")

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Finished updating app.js successfully.")
