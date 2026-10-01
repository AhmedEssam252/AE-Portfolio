# -*- coding: utf-8 -*-
import json
import os
import subprocess

# Generate the JS code for Wasalna chapters 2 through 5
chapters_js = """      {
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
"""

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Locate from 'id: "cashier",' to the end of chapters before '  // 2. CAPITAL FLOW'
start_marker = '      {\n        id: "cashier",'
end_marker = '    ]\n  },\n  // 2. CAPITAL FLOW'

if start_marker not in content:
    print("ERROR: start_marker not found!")
    exit(1)

if end_marker not in content:
    print("ERROR: end_marker not found!")
    exit(1)

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

new_content = content[:start_idx] + chapters_js + content[end_idx:]

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated app.js successfully!")
