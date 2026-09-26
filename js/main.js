// --- 1. Complete Bilingual Translations (EN & AR) ---
const translations = {
    en: {
        // Header
        brand_name: "HAKIM ALQUBATI",
        brand_role: "System Architect",
        nav_about: "Summary",
        nav_skills: "Skills",
        nav_exp: "Experience",
        nav_projects: "ERP & Systems",
        nav_edu: "Education",
        nav_contact: "Contact",
        nav_hire: "Hire Me",

        // Hero
        hero_greeting: "SYSTEM ARCHITECT // BACKEND ENGINEER",
        hero_location: "Sana'a, Yemen",
        hero_first_name: "ABDULHAKIM",
        hero_last_name: "ALQUBATI",
        hero_full_name: "Abdulhakim Ahmed Fadl Qaid — System Architect & Backend Web Developer",
        hero_titles: [
            "System Architect",
            "Backend Web Developer",
            "Laravel & ERP Specialist",
            "Relational Database Architect",
            "SaaS & B2B Systems Engineer"
        ],
        hero_pitch: "Designing and building scalable <strong class='text-slate-100 font-semibold'>SaaS applications</strong>, multi-tenant <strong class='text-blue-400 font-semibold'>Enterprise Resource Planning (ERP)</strong> systems, and <strong class='text-slate-100 font-semibold'>B2B platforms</strong>. Specializing in the <strong class='text-slate-100 font-semibold'>Laravel ecosystem</strong> and normalized relational database architectures that automate complex business workflows.",
        btn_projects: "Explore ERP & Systems",
        btn_exp: "Experience Log",
        btn_contact: "Contact Me",
        hud_role_label: "CURRENT ROLE",
        hud_role_val: "SYSTEM ARCHITECT @ NLT",
        hud_status: "ACTIVE SINCE 2019",
        scroll_down: "SCROLL",

        // About & Metrics
        stat_1_label: "Years Experience (Since 2019)",
        stat_2_label: "Multi-Tenant & B2B Platforms",
        stat_3_label: "FilamentPHP & Livewire Ecosystem",
        stat_4_label: "Normalized Schemas & Optimization",
        section_about: "Professional Summary",
        about_badge: "// ARCHITECTURAL PROFILE",
        about_desc: "A results-driven <strong class='text-blue-400 font-semibold'>System Architect and Backend Developer</strong> with hands-on experience designing and building scalable <strong class='text-slate-50 font-semibold'>SaaS applications</strong>, <strong class='text-slate-50 font-semibold'>Enterprise Resource Planning (ERP) systems</strong>, and <strong class='text-slate-50 font-semibold'>B2B platforms</strong>. Specializing in the <strong class='text-blue-400 font-semibold'>Laravel ecosystem</strong> and relational database architectures.",
        about_desc_2: "Highly capable of professionally analyzing complex business requirements and translating them into robust, highly optimized database structures and clean code to automate and streamline complex operational workflows.",
        pillar_1_title: "Enterprise ERP & SaaS Architecture",
        pillar_1_desc: "Architecting multi-tenant ERP platforms from the ground up, including HR, automated payroll, dynamic shifts, FIFO inventory, and fixed assets.",
        pillar_2_title: "Relational Database Engineering",
        pillar_2_desc: "Translating complex financial and operational rules into normalized relational schemas with strict data integrity and high query performance.",
        pillar_3_title: "Cloud & API Infrastructure",
        pillar_3_desc: "Building secure RESTful APIs for mobile synchronization and managing AWS (S3, DynamoDB, Rekognition), Cloudflare, and Linux VPS environments.",

        // Education
        edu_badge: "Academic Education",
        edu_college: "Sana'a Community College",
        edu_deg_1: "Bachelor of Technical Education — Software Development Track",
        edu_deg_2: "Higher Diploma in Software Development",
        edu_year: "Class of 2019",
        edu_location: "Sana'a, Yemen",

        // Skills
        section_skills: "Technical Skills & Architecture",
        skills_subtitle: "Specialized stack for building high-availability ERP systems, multi-tenant SaaS, and normalized database architectures.",
        skill_cat_1: "Backend & Frameworks",
        skill_cat_1_sub: "Core Ecosystem",
        skill_cat_1_desc: "Architecting clean, modular backend engines, admin panels, reactive full-stack components, and secure APIs.",
        skill_cat_2: "Database Architecture",
        skill_cat_2_sub: "Data Modeling & SQL",
        skill_cat_2_desc: "Designing normalized relational schemas, analyzing complex business logic, and optimizing high-volume queries.",
        tag_rel_db: "Relational DB Design",
        tag_schema_norm: "Schema Normalization",
        tag_biz_logic: "Business Logic Analysis",
        tag_query_opt: "Query Optimization",
        skill_cat_3: "Cloud & Infrastructure",
        skill_cat_3_sub: "AWS & Linux Servers",
        skill_cat_3_desc: "Cloud services integration, AI image recognition (AWS Rekognition), edge protection, and Linux VPS administration.",
        tag_linux_vps: "Linux Server Admin (VPS)",
        skill_cat_4: "Frontend Technologies",
        skill_cat_4_sub: "Responsive UI & Web",
        skill_cat_4_desc: "Building clean, responsive dashboards, interactive interfaces, and corporate web platforms.",
        skill_cat_5: "Tools, DevOps & Engineering Workflows",
        skill_cat_5_sub: "Development Environment & Domain Expertise",
        skill_cat_5_desc: "Streamlined version control, local development environments, database management, API testing, and enterprise domain workflows.",
        tag_fifo: "FIFO Inventory Algorithms",
        tag_multitenant: "Multi-Tenant SaaS",
        tag_hr_payroll: "HR & Automated Payroll",

        // Experience
        section_exp: "Professional Experience",
        exp_subtitle: "Proven track record of architecting ERP platforms, SaaS products, and enterprise backend infrastructures since 2019.",
        exp_current_badge: "CURRENT",
        exp_1_company: "NLT Software Company",
        exp_1_role: "System Architect & Backend Engineer",
        exp_1_date: "Oct 2023 – Present",
        exp_1_b1: "<strong class='text-slate-100 font-semibold'>Technical Leadership & System Architecture:</strong> Hold general responsibility for the company's technical operations. Architected and led the complete backend development of <span class='text-blue-400 font-medium'>\"Workbench ERP\"</span> from the ground up.",
        exp_1_b2: "<strong class='text-slate-100 font-semibold'>Business Analysis & Database Architecture:</strong> Professionally analyze complex business requirements and operational logic, translating them into highly optimized and normalized relational database schemas.",
        exp_1_b3: "<strong class='text-slate-100 font-semibold'>ERP Module Development:</strong> Engineered sophisticated modules for HR management (attendance statistics, dynamic shift resolution, automated payroll) and multi-tenant inventory systems (FIFO algorithms, stock validations, and accounting structures).",
        exp_1_b4: "<strong class='text-slate-100 font-semibold'>Corporate Web Development:</strong> Designed, developed, and currently maintain the company's official websites and landing pages alongside the core systems.",

        exp_2_company: "Smart Life Software Company",
        exp_2_role: "Full Stack Web Developer",
        exp_2_date: "Sep 2022 – Sep 2023",
        exp_2_b1: "<strong class='text-slate-100 font-semibold'>Developed \"Smart ERP\" Modules:</strong> Contributed to the expansion of an integrated ERP system by engineering two major independent modules: a <span class='text-blue-400 font-medium'>Fixed Assets Management</span> system and a <span class='text-blue-400 font-medium'>Restaurant Manufacturing</span> system.",
        exp_2_b2: "<strong class='text-slate-100 font-semibold'>Business Logic Integration:</strong> Translated financial and operational requirements into functional backend code, ensuring strict data consistency across modules.",

        exp_3_company: "Cloud Snap Software Company",
        exp_3_role: "Full Stack Web Developer",
        exp_3_date: "Mar 2022 – Sep 2022",
        exp_3_b1: "<strong class='text-slate-100 font-semibold'>Engineered Time & Attendance System:</strong> Designed and built a comprehensive attendance tracking application tailored for specific work environments, featuring customized dynamic reporting capabilities.",
        exp_3_b2: "<strong class='text-slate-100 font-semibold'>Developed E-commerce Solutions:</strong> Architected a lightweight e-commerce platform, implementing core functionalities from product catalog management to user workflows.",
        exp_3_b3: "<strong class='text-slate-100 font-semibold'>Database Design:</strong> Architected and normalized the relational database schemas for both systems, ensuring strict data integrity and efficient query performance.",

        exp_4_company: "Yottagate Software Company",
        exp_4_role: "Backend Developer",
        exp_4_date: "Oct 2019 – Mar 2022",
        exp_4_b1: "<strong class='text-slate-100 font-semibold'>Engineered 'BawbtMIC' (School Management System):</strong> Developed the core backend architecture and administrative dashboard for a large-scale educational platform.",
        exp_4_b2: "<strong class='text-slate-100 font-semibold'>API Development:</strong> Built and secured RESTful APIs to ensure seamless, real-time data synchronization with the platform's mobile applications.",
        exp_4_b3: "<strong class='text-slate-100 font-semibold'>Internal Tools & Client Systems:</strong> Designed and deployed multiple internal web applications and customized client solutions, streamlining company operations.",

        // Projects / Systems
        section_projects: "Flagship ERP & System Implementations",
        projects_subtitle: "Enterprise-grade systems, ERP modules, and scalable platforms architected and engineered across production environments.",
        proj_1_badge: "Multi-Tenant ERP Architecture",
        proj_1_role: "Lead System Architect",
        proj_1_title: "Workbench ERP",
        proj_1_desc: "Architected and led the complete backend development from the ground up. Engineered sophisticated <strong class='text-slate-100 font-semibold'>HR Management</strong> modules (attendance statistics, dynamic shift resolution, automated payroll) and <strong class='text-slate-100 font-semibold'>Multi-Tenant Inventory</strong> systems (FIFO algorithms, stock validations, and accounting structures).",

        proj_2_badge: "Enterprise ERP Modules",
        proj_2_role: "Full Stack ERP Engineer",
        proj_2_title: "Smart ERP: Assets & Manufacturing",
        proj_2_desc: "Engineered two major independent modules within an integrated ERP ecosystem: a comprehensive <strong class='text-slate-100 font-semibold'>Fixed Assets Management System</strong> and a <strong class='text-slate-100 font-semibold'>Restaurant Manufacturing System</strong>, translating complex financial and operational rules into strict, consistent backend workflows.",

        proj_3_badge: "EdTech Platform & Mobile API",
        proj_3_role: "Backend Architect",
        proj_3_title: "BawbtMIC — School Management",
        proj_3_desc: "Developed the core backend architecture and administrative dashboard for a large-scale educational management platform. Built and secured high-performance <strong class='text-slate-100 font-semibold'>RESTful APIs</strong> for seamless, real-time data synchronization with mobile applications.",

        proj_4_badge: "HR Tech & B2C/B2B E-Commerce",
        proj_4_role: "Full Stack Developer",
        proj_4_title: "Attendance Engine & E-Commerce",
        proj_4_desc: "Designed a comprehensive <strong class='text-slate-100 font-semibold'>Time & Attendance tracking application</strong> featuring customized dynamic reporting engines, alongside a lightweight <strong class='text-slate-100 font-semibold'>E-Commerce platform</strong> backed by normalized database schemas and optimized SQL queries.",

        // Contact & Footer
        section_contact: "Initialize Handshake",
        contact_subtitle: "Available for System Architecture consulting, Enterprise ERP/SaaS development, and Backend Engineering opportunities.",
        contact_email_label: "Direct Email",
        contact_phone_label: "Phone & WhatsApp",
        contact_loc_label: "Location Base",
        contact_loc_val: "Sana'a, Yemen (Remote Ready)",
        form_name_label: "Input Name:",
        form_email_label: "Input Email:",
        form_msg_label: "Message Payload (Project / Inquiry):",
        form_submit_btn: "Send via Email",
        form_whatsapp_btn: "Send via WhatsApp",
        footer_copy: "© 2026 Eng. Abdulhakim Ahmed Fadl Qaid. All systems operational."
    },

    ar: {
        // Header
        brand_name: "عبدالحكيم القباطي",
        brand_role: "مهندس معماري للأنظمة",
        nav_about: "الملخص المهني",
        nav_skills: "المهارات التقنية",
        nav_exp: "الخبرات",
        nav_projects: "الأنظمة والمشاريع",
        nav_edu: "التعليم",
        nav_contact: "تواصل معي",
        nav_hire: "توظيف / تواصل",

        // Hero
        hero_greeting: "مهندس معماري للأنظمة // مطور Backend",
        hero_location: "صنعاء، اليمن",
        hero_first_name: "عبدالحكيم",
        hero_last_name: "القباطي",
        hero_full_name: "عبدالحكيم أحمد فضل قايد — System Architect & Backend Web Developer",
        hero_titles: [
            "مهندس معماري للأنظمة (System Architect)",
            "مطور واجهات خلفية (Backend Developer)",
            "خبير بيئة Laravel وأنظمة ERP",
            "مهندس قواعد بيانات علائقية",
            "مطور تطبيقات SaaS ومنصات B2B"
        ],
        hero_pitch: "خبرة عملية واسعة في تصميم وبناء <strong class='text-slate-100 font-semibold'>تطبيقات SaaS القابلة للتوسع</strong>، وأنظمة <strong class='text-blue-400 font-semibold'>تخطيط موارد المؤسسات (ERP)</strong> متعددة المستأجرين، ومنصات <strong class='text-slate-100 font-semibold'>B2B</strong>. متخصص في بيئة <strong class='text-slate-100 font-semibold'>Laravel</strong> ومعمارية قواعد البيانات العلائقية لأتمتة وتبسيط العمليات التشغيلية المعقدة.",
        btn_projects: "استكشف الأنظمة والمشاريع",
        btn_exp: "السجل المهني",
        btn_contact: "تواصل معي",
        hud_role_label: "المنصب الحالي",
        hud_role_val: "SYSTEM ARCHITECT @ NLT",
        hud_status: "خبرة منذ 2019",
        scroll_down: "مرر للأسفل",

        // About & Metrics
        stat_1_label: "سنوات من الخبرة العملية (منذ 2019)",
        stat_2_label: "أنظمة متعددة المستأجرين ومنصات B2B",
        stat_3_label: "بيئة عمل Laravel & FilamentPHP",
        stat_4_label: "تطبيع الجداول وتحسين الاستعلامات",
        section_about: "الملخص المهني",
        about_badge: "// الملف المعماري والمهني",
        about_desc: "مهندس معماري للأنظمة ومطور واجهات خلفية (<strong class='text-blue-400 font-semibold'>System Architect & Backend Developer</strong>) يركز على النتائج، مع خبرة عملية في تصميم وبناء <strong class='text-slate-50 font-semibold'>تطبيقات SaaS القابلة للتوسع</strong>، وأنظمة <strong class='text-slate-50 font-semibold'>تخطيط موارد المؤسسات (ERP)</strong>، ومنصات <strong class='text-slate-50 font-semibold'>B2B</strong>، مع التخصص الدقيق في بيئة <strong class='text-blue-400 font-semibold'>Laravel</strong> ومعمارية قواعد البيانات العلائقية.",
        about_desc_2: "قدرة احترافية عالية على تحليل متطلبات الأعمال والمنطق التشغيلي المعقد وترجمتها إلى هياكل قواعد بيانات قوية ومُحسّنة وكود برمجي نظيف لأتمتة وتبسيط مسارات العمل المؤسسية.",
        pillar_1_title: "هندسة أنظمة ERP وتطبيقات SaaS",
        pillar_1_desc: "بناء أنظمة ERP متعددة المستأجرين من الصفر، تشمل إدارة الموارد البشرية، الرواتب المؤتمتة، الورديات الديناميكية، المخزون بخوارزميات FIFO، والأصول الثابتة.",
        pillar_2_title: "معمارية قواعد البيانات العلائقية",
        pillar_2_desc: "ترجمة القواعد المالية والتشغيلية المعقدة إلى قواعد بيانات علائقية مطبّعة (Normalized) تضمن أعلى درجات سلامة البيانات وسرعة الاستعلامات.",
        pillar_3_title: "البنية السحابية وواجهات الـ API",
        pillar_3_desc: "بناء وتأمين واجهات RESTful APIs للمزامنة اللحظية مع تطبيقات الجوال، وإدارة خدمات AWS (S3, DynamoDB, Rekognition) وCloudflare وخوادم Linux VPS.",

        // Education
        edu_badge: "التعليم الأكاديمي",
        edu_college: "كلية المجتمع — صنعاء",
        edu_deg_1: "بكالوريوس التعليم التقني — مسار تطوير البرمجيات (Software Development Track)",
        edu_deg_2: "دبلوم عالي في تطوير البرمجيات (Higher Diploma in Software Development)",
        edu_year: "دفعة 2019",
        edu_location: "صنعاء، اليمن",

        // Skills
        section_skills: "المهارات التقنية والمعمارية",
        skills_subtitle: "ترسانة تقنية متخصصة في بناء أنظمة ERP عالية الاعتمادية، وتطبيقات SaaS، وهندسة قواعد البيانات العلائقية.",
        skill_cat_1: "الواجهات الخلفية وأطر العمل (Backend)",
        skill_cat_1_sub: "البيئة الأساسية",
        skill_cat_1_desc: "تصميم وبناء محركات خلفية معيارية، لوحات تحكم متقدمة، مكونات تفاعلية، وواجهات برمجية آمنة.",
        skill_cat_2: "معمارية قواعد البيانات (Database)",
        skill_cat_2_sub: "نمذجة البيانات و SQL",
        skill_cat_2_desc: "تصميم قواعد البيانات العلائقية، تطبيع الجداول (Normalization)، تحليل منطق الأعمال، وتحسين أداء الاستعلامات.",
        tag_rel_db: "تصميم قواعد البيانات العلائقية",
        tag_schema_norm: "تطبيع الجداول (Normalization)",
        tag_biz_logic: "تحليل منطق الأعمال",
        tag_query_opt: "تحسين الاستعلامات (Query Optimization)",
        skill_cat_3: "الحوسبة السحابية والخوادم (Cloud & VPS)",
        skill_cat_3_sub: "خدمات AWS وخوادم Linux",
        skill_cat_3_desc: "تكامل خدمات AWS السحابية والتعرف الذكي على الصور (Rekognition)، وحماية Cloudflare، وإدارة خوادم Linux VPS.",
        tag_linux_vps: "إدارة خوادم Linux (VPS)",
        skill_cat_4: "تقنيات الواجهات الأمامية (Frontend)",
        skill_cat_4_sub: "واجهات مستخدم متجاوبة",
        skill_cat_4_desc: "تطوير لوحات تحكم عصرية متجاوبة، واجهات تفاعلية، ومواقع شركات احترافية.",
        skill_cat_5: "الأدوات وبيئة العمل والخبرات التخصصية",
        skill_cat_5_sub: "أدوات التطوير والعمليات المؤسسية",
        skill_cat_5_desc: "إدارة الإصدارات البرمجية، بيئات التطوير المحلية، إدارة قواعد البيانات، واختبار الواجهات البرمجية.",
        tag_fifo: "خوارزميات مخزون FIFO",
        tag_multitenant: "معمارية Multi-Tenant SaaS",
        tag_hr_payroll: "أتمتة الموارد البشرية والرواتب",

        // Experience
        section_exp: "الخبرات المهنية",
        exp_subtitle: "سجل حافل في هندسة منصات ERP وتطبيقات SaaS والبنية التحتية للأنظمة المؤسسية منذ عام 2019.",
        exp_current_badge: "حالياً",
        exp_1_company: "شركة NLT للبرمجيات (NLT Software Company)",
        exp_1_role: "مهندس معماري للأنظمة ومطور Backend (System Architect & Backend Engineer)",
        exp_1_date: "أكتوبر 2023 – حتى الآن",
        exp_1_b1: "<strong class='text-slate-100 font-semibold'>القيادة التقنية ومعمارية الأنظمة:</strong> تولي المسؤولية العامة عن العمليات التقنية للشركة، وتصميم وقيادة التطوير الكامل للواجهة الخلفية لنظام <span class='text-blue-400 font-medium'>\"Workbench ERP\"</span> من الصفر.",
        exp_1_b2: "<strong class='text-slate-100 font-semibold'>تحليل الأعمال وهندسة قواعد البيانات:</strong> تحليل متطلبات الأعمال المعقدة والمنطق التشغيلي باحترافية، وترجمتها إلى مخططات قواعد بيانات علائقية مطبّعة وعالية الأداء.",
        exp_1_b3: "<strong class='text-slate-100 font-semibold'>تطوير وحدات الـ ERP:</strong> هندسة وحدات متقدمة لإدارة الموارد البشرية (إحصائيات الحضور، معالجة الورديات الديناميكية، الرواتب المؤتمتة) وأنظمة المخزون متعددة المستأجرين (خوارزميات FIFO، التحقق من المخزون، والهياكل المحاسبية).",
        exp_1_b4: "<strong class='text-slate-100 font-semibold'>تطوير المواقع المؤسسية:</strong> تصميم وتطوير وصيانة المواقع الرسمية والصفحات التعريفية للشركة إلى جانب الأنظمة الأساسية.",

        exp_2_company: "شركة سمارت لايف للبرمجيات (Smart Life Software)",
        exp_2_role: "مطور ويب متكامل (Full Stack Web Developer)",
        exp_2_date: "سبتمبر 2022 – سبتمبر 2023",
        exp_2_b1: "<strong class='text-slate-100 font-semibold'>تطوير وحدات \"Smart ERP\":</strong> المساهمة في توسيع نظام ERP متكامل من خلال هندسة وحدتين رئيسيتين مستقلتين: نظام <span class='text-blue-400 font-medium'>إدارة الأصول الثابتة</span> ونظام <span class='text-blue-400 font-medium'>تصنيع المطاعم</span>.",
        exp_2_b2: "<strong class='text-slate-100 font-semibold'>دمج منطق الأعمال:</strong> ترجمة المتطلبات المالية والتشغيلية إلى كود برمجي وظيفي، مع ضمان الاتساق الصارم للبيانات عبر جميع الوحدات.",

        exp_3_company: "شركة كلاود سناب للبرمجيات (Cloud Snap Software)",
        exp_3_role: "مطور ويب متكامل (Full Stack Web Developer)",
        exp_3_date: "مارس 2022 – سبتمبر 2022",
        exp_3_b1: "<strong class='text-slate-100 font-semibold'>هندسة نظام الحضور والانصراف:</strong> تصميم وبناء تطبيق شامل لتتبع الحضور والانصراف مخصص لبيئات العمل المختلفة، مع قدرات تقارير ديناميكية مخصصة.",
        exp_3_b2: "<strong class='text-slate-100 font-semibold'>تطوير حلول التجارة الإلكترونية:</strong> هندسة منصة تجارة إلكترونية خفيفة وسريعة، وتنفيذ الوظائف الأساسية بدءاً من إدارة كتالوج المنتجات وحتى مسارات المستخدمين.",
        exp_3_b3: "<strong class='text-slate-100 font-semibold'>تصميم قواعد البيانات:</strong> تصميم وتطبيع مخططات قواعد البيانات العلائقية لكلا النظامين، لضمان سلامة البيانات وكفاءة أداء الاستعلامات.",

        exp_4_company: "شركة يوتاجيت للبرمجيات (Yottagate Software)",
        exp_4_role: "مطور واجهات خلفية (Backend Developer)",
        exp_4_date: "أكتوبر 2019 – مارس 2022",
        exp_4_b1: "<strong class='text-slate-100 font-semibold'>هندسة منصة 'BawbtMIC' (نظام إدارة المدارس):</strong> تطوير البنية التحتية الأساسية ولوحة التحكم الإدارية لمنصة تعليمية واسعة النطاق.",
        exp_4_b2: "<strong class='text-slate-100 font-semibold'>تطوير واجهات RESTful APIs:</strong> بناء وتأمين واجهات البرمجة لضمان مزامنة البيانات الفورية والسلسة مع تطبيقات الهواتف الذكية الخاصة بالمنصة.",
        exp_4_b3: "<strong class='text-slate-100 font-semibold'>الأدوات الداخلية وأنظمة العملاء:</strong> تصميم ونشر تطبيقات ويب داخلية متعددة وحلول مخصصة للعملاء لتبسيط العمليات التشغيلية.",

        // Projects / Systems
        section_projects: "أبرز الأنظمة ومشاريع الـ ERP المنفذة",
        projects_subtitle: "أنظمة مؤسسية متكاملة، وحدات ERP، ومنصات قابلة للتوسع تم تصميمها وهندستها في بيئات إنتاج فعلية.",
        proj_1_badge: "معمارية ERP متعددة المستأجرين",
        proj_1_role: "مهندس معماري رئيسي",
        proj_1_title: "نظام Workbench ERP",
        proj_1_desc: "تصميم وقيادة التطوير الكامل للنظام من الصفر، بما يشمل وحدات <strong class='text-slate-100 font-semibold'>إدارة الموارد البشرية</strong> (إحصائيات الحضور، الورديات الديناميكية، الرواتب المؤتمتة) وأنظمة <strong class='text-slate-100 font-semibold'>المخزون متعدد المستأجرين</strong> (خوارزميات FIFO، التحقق من المخزون، والهياكل المحاسبية).",

        proj_2_badge: "وحدات أنظمة ERP المؤسسية",
        proj_2_role: "مطور أنظمة ERP",
        proj_2_title: "Smart ERP: الأصول الثابتة وتصنيع المطاعم",
        proj_2_desc: "هندسة وحدتين مستقلتين رئيسيتين ضمن منظومة ERP متكاملة: <strong class='text-slate-100 font-semibold'>نظام إدارة الأصول الثابتة</strong> و<strong class='text-slate-100 font-semibold'>نظام تصنيع المطاعم</strong>، مع ترجمة القواعد المالية والتشغيلية إلى مسارات عمل دقيقة ومتسقة.",

        proj_3_badge: "منصة تعليمية وواجهات API للجوال",
        proj_3_role: "مطور Backend رئيسي",
        proj_3_title: "منصة BawbtMIC — إدارة المدارس",
        proj_3_desc: "بناء المعمارية الخلفية ولوحة التحكم الإدارية لمنصة تعليمية كبرى، مع تطوير وتأمين <strong class='text-slate-100 font-semibold'>واجهات RESTful APIs</strong> عالية الأداء للمزامنة الفورية مع تطبيقات الجوال.",

        proj_4_badge: "أنظمة الحضور والتجارة الإلكترونية",
        proj_4_role: "مطور Full Stack",
        proj_4_title: "محرك الحضور والانصراف ومنصة التجارة الإلكترونية",
        proj_4_desc: "تصميم <strong class='text-slate-100 font-semibold'>نظام شامل لتتبع الحضور والانصراف</strong> بمحرك تقارير ديناميكي مخصص، إلى جانب <strong class='text-slate-100 font-semibold'>منصة تجارة إلكترونية</strong> مبنية على قواعد بيانات علائقية مطبّعة واستعلامات SQL محسّنة.",

        // Contact & Footer
        section_contact: "بدء الاتصال والتعاون",
        contact_subtitle: "متاح لاستشارات هندسة الأنظمة (System Architecture)، وتطوير أنظمة ERP و SaaS، وفرص العمل في هندسة الواجهات الخلفية.",
        contact_email_label: "البريد الإلكتروني المباشر",
        contact_phone_label: "الهاتف و واتساب",
        contact_loc_label: "الموقع",
        contact_loc_val: "صنعاء، اليمن (متاح للعمل عن بعد)",
        form_name_label: "الاسم / الجهة:",
        form_email_label: "البريد الإلكتروني:",
        form_msg_label: "تفاصيل الرسالة أو المشروع:",
        form_submit_btn: "إرسال عبر البريد الإلكتروني",
        form_whatsapp_btn: "إرسال عبر واتساب",
        footer_copy: "© 2026 م. عبدالحكيم أحمد فضل قايد. جميع الأنظمة تعمل بكفاءة."
    }
};

let currentLang = 'en';
let typeWriterIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimer = null;

// --- 2. Language & Mobile Menu Initialization ---
function initLanguage() {
    const langToggleBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Mobile Menu Toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    if (!langToggleBtn) return;

    function updateContent() {
        const t = translations[currentLang];
        document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;

        // Update all elements with [data-key]
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });

        // Update Form Placeholders
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const msgInput = document.getElementById('contact-message');
        if (nameInput && emailInput && msgInput) {
            if (currentLang === 'ar') {
                nameInput.placeholder = "الاسم الكريم / اسم الشركة";
                emailInput.placeholder = "name@company.com";
                msgInput.placeholder = "// اكتب تفاصيل مشروعك (ERP، SaaS، أو استشارة معمارية)...";
            } else {
                nameInput.placeholder = "Your Name / Company";
                emailInput.placeholder = "name@company.com";
                msgInput.placeholder = "// Describe your ERP, SaaS, or Backend Architecture requirements...";
            }
        }

        // Update Font classes
        if (currentLang === 'ar') {
            document.body.classList.add('font-cairo');
            document.body.classList.remove('font-inter');
        } else {
            document.body.classList.add('font-inter');
            document.body.classList.remove('font-cairo');
        }

        // Reset typewriter cleanly on language switch
        charIndex = 0;
        isDeleting = false;
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        langText.innerText = currentLang === 'en' ? 'AR' : 'EN';
        updateContent();
    });
}

// --- 3. Typewriter Effect Logic ---
function typeWriterEffect() {
    const typeElement = document.getElementById('typewriter');
    if (!typeElement) return;

    const titles = translations[currentLang].hero_titles;
    const currentTitle = titles[typeWriterIndex % titles.length];
    let typeSpeed = 85;

    if (isDeleting) {
        typeElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
    } else {
        typeElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 85;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeWriterIndex++;
        typeSpeed = 400;
    }

    if (typeTimer) clearTimeout(typeTimer);
    typeTimer = setTimeout(typeWriterEffect, typeSpeed);
}

// --- 4. Three.js Background (Subtle Enterprise Ambient Nodes) ---
function initThreeJS() {
    const canvas = document.querySelector('#bg-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 160;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 22;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.45,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    camera.position.z = 4;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        particlesMesh.rotation.y = elapsedTime * 0.02 + mouseX * 0.12;
        particlesMesh.rotation.x = mouseY * 0.12;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// --- 5. GSAP Scroll Animations ---
function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.gs-reveal').forEach(elem => {
        gsap.fromTo(elem,
            { y: 28, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 88%",
                }
            }
        );
    });

    gsap.fromTo(".skill-card",
        { y: 28, opacity: 0 },
        {
            scrollTrigger: {
                trigger: "#skills",
                start: "top 82%",
            },
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "power2.out"
        }
    );
}

// --- 6. Contact Form (Email & WhatsApp Integration) ---
function initForm() {
    const form = document.getElementById('contact-form');
    const whatsappBtn = document.getElementById('whatsapp-btn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name')?.value.trim() || 'Visitor';
            const email = document.getElementById('contact-email')?.value.trim() || '';
            const message = document.getElementById('contact-message')?.value.trim() || '';

            const btn = document.getElementById('submit-btn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>SENDING...</span>`;

            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

            setTimeout(() => {
                window.location.href = `mailto:hakimahmed123321@gmail.com?subject=${subject}&body=${body}`;
                btn.innerHTML = `<i class="fas fa-check"></i> <span>READY TO SEND</span>`;
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 2500);
            }, 600);
        });
    }

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const name = document.getElementById('contact-name')?.value.trim() || '';
            const email = document.getElementById('contact-email')?.value.trim() || '';
            const message = document.getElementById('contact-message')?.value.trim() || '';

            let text = `Hello Eng. Abdulhakim,`;
            if (name) text += `\nName: ${name}`;
            if (email) text += `\nEmail: ${email}`;
            if (message) text += `\n\n${message}`;

            const url = `https://wa.me/967773030069?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank', 'noopener,noreferrer');
        });
    }
}

// --- 7. Initialize All Modules ---
function initAll() {
    initLanguage();
    typeWriterEffect();
    initThreeJS();
    initGSAP();
    initForm();
}
