
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Expart Agent | Advanced 142-Factor Analysis</title>
    <!-- Premium Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Orbitron:wght@400;500;700;900&display=swap"
        rel="stylesheet">
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        :root {
            --bg-primary: #050505;
            --bg-secondary: #0a0a0a;
            --bg-card: rgba(20, 20, 20, 0.6);
            --text-primary: #ffffff;
            --text-secondary: #aaaaaa;
            --accent-main: #ff00ff;
            /* Magenta - 15% */
            --accent-glow: rgba(255, 0, 255, 0.4);
            --accent-secondary: #8a2be2;
            /* BlueViolet - 10% */
            --accent-secondary-glow: rgba(138, 43, 226, 0.4);
            --border-color: rgba(255, 0, 255, 0.3);
            --success: #00ff9d;
            --warning: #ffcc00;
            --danger: #ff0055;

            --font-heading: 'Orbitron', sans-serif;
            --font-body: 'Inter', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-primary);
            color: var(--text-primary);
            font-family: var(--font-body);
            overflow-x: hidden;
            height: 100vh;
        }

        #app {
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        h1,
        h2,
        h3,
        .logo-text,
        .btn-text {
            font-family: var(--font-heading);
            letter-spacing: 1px;
        }

        .hidden {
            display: none !important;
        }

        .highlight {
            color: var(--accent-main);
            text-shadow: 0 0 10px var(--accent-glow);
        }

        /* HEADER */
        .main-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(5, 5, 5, 0.8);
            backdrop-filter: blur(10px);
            z-index: 100;
        }

        .logo-container {
            font-size: 1.5rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo-icon {
            color: var(--accent-secondary);
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            margin-left: 30px;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--accent-main);
            text-shadow: 0 0 8px var(--accent-glow);
        }

        /* HERO SECTION */
        .hero-section {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background: radial-gradient(circle at 10% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 40%);
        }

        .hero-content {
            text-align: center;
            max-width: 800px;
            width: 100%;
            padding: 20px;
        }

        .glitch-text {
            font-size: 4rem;
            font-weight: 900;
            margin-bottom: 10px;
            position: relative;
            color: var(--text-primary);
            text-shadow: 2px 2px var(--accent-secondary);
        }

        .subtitle {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 50px;
        }

        /* INPUT AREA */
        .input-wrapper {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 60px;
        }

        .input-container {
            position: relative;
            width: 60%;
        }

        #url-input {
            width: 100%;
            padding: 20px 20px 20px 50px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            font-family: var(--font-body);
            font-size: 1.1rem;
            border-radius: 4px;
            outline: none;
            transition: all 0.3s ease;
        }

        #url-input:focus {
            box-shadow: 0 0 20px var(--accent-glow);
            border-color: var(--accent-main);
        }

        .input-icon {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--accent-main);
        }

        .cyber-btn {
            padding: 0 40px;
            background: transparent;
            border: 1px solid var(--accent-main);
            color: var(--accent-main);
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            text-transform: uppercase;
            height: 60px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .small-btn {
            height: 40px;
            padding: 0 20px;
            font-size: 0.8rem;
        }

        .cyber-btn:hover {
            background: var(--accent-main);
            color: black;
            box-shadow: 0 0 30px var(--accent-glow);
        }

        /* STATS TICKER */
        .stats-ticker {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin-top: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 20px;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .stat-item .label {
            font-size: 0.8rem;
            color: var(--text-secondary);
            text-transform: uppercase;
        }

        .stat-item .value {
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 1.2rem;
        }

        .value.online {
            color: var(--success);
            text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
        }

        /* SCANNING OVERLAY */
        .scanning-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(5, 5, 5, 0.95);
            z-index: 200;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px);
        }

        .scanner-content {
            text-align: center;
            width: 400px;
        }

        .loader-ring {
            position: relative;
            width: 150px;
            height: 150px;
            margin: 0 auto 30px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .loader-ring .ring {
            position: absolute;
            top: -2px;
            left: -2px;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            border-top-color: var(--accent-main);
            border-right-color: var(--accent-secondary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            box-shadow: 0 0 20px var(--accent-glow);
        }

        #scan-percentage {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: var(--font-heading);
            font-size: 1.5rem;
            font-weight: 700;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .scan-log {
            height: 100px;
            overflow: hidden;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            color: var(--success);
            text-align: left;
            background: rgba(0, 0, 0, 0.5);
            padding: 10px;
            border-left: 2px solid var(--accent-secondary);
        }

        /* DASHBOARD */
        .dashboard-section {
            flex: 1;
            display: flex;
            overflow: hidden;
        }

        .sidebar {
            width: 250px;
            background: var(--bg-secondary);
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            padding: 20px;
            overflow-y: auto;
        }

        .menu-item {
            display: block;
            width: 100%;
            padding: 12px;
            background: transparent;
            border: none;
            color: var(--text-secondary);
            text-align: left;
            font-family: var(--font-body);
            font-size: 0.9rem;
            cursor: pointer;
            border-left: 3px solid transparent;
            margin-bottom: 5px;
            transition: all 0.2s;
        }

        .menu-item:hover,
        .menu-item.active {
            background: rgba(255, 0, 255, 0.1);
            color: white;
            border-left-color: var(--accent-main);
        }

        .menu-item i {
            width: 25px;
            color: var(--accent-secondary);
        }

        .dashboard-main {
            flex: 1;
            padding: 40px;
            overflow-y: auto;
            background: linear-gradient(45deg, rgba(5, 5, 5, 1) 0%, rgba(10, 10, 10, 1) 100%);
        }

        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 20px;
        }

        .overall-score {
            font-family: var(--font-heading);
            font-size: 1.2rem;
            color: var(--accent-main);
            margin-top: 5px;
        }

        .score-value {
            font-size: 2rem;
            margin-left: 10px;
            text-shadow: 0 0 15px var(--accent-glow);
        }

        .factors-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }

        .factor-card {
            background: var(--bg-card);
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s;
        }

        .factor-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-secondary);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }

        .factor-card h3 {
            font-size: 0.95rem;
            margin-bottom: 10px;
            color: var(--text-primary);
        }

        .factor-status {
            font-size: 0.75rem;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .status-pass {
            background: rgba(0, 255, 157, 0.2);
            color: var(--success);
        }

        .status-fail {
            background: rgba(255, 0, 85, 0.2);
            color: var(--danger);
        }

        .status-warning {
            background: rgba(255, 204, 0, 0.2);
            color: var(--warning);
        }

        .factor-desc {
            font-size: 0.8rem;
            color: var(--text-secondary);
            line-height: 1.4;
        }

        .s-word,
        .s-char {
            display: inline-block;
            white-space: pre;
        }

        /* Required for individual Rects */

        /* SNOWFALL CANVAS */
        #snow-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 5;
            /* Behind UI elements but above background */
            opacity: 0.5;
        }

        /* MOBILE RESPONSIVENESS */
        @media (max-width: 768px) {
            .main-header {
                padding: 15px 20px;
                flex-direction: column;
                gap: 15px;
            }

            .nav-links {
                display: flex;
                gap: 15px;
                width: 100%;
                justify-content: center;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                padding-top: 10px;
            }

            .nav-links a {
                margin: 0;
                font-size: 0.8rem;
            }

            .logo-text {
                white-space: nowrap;
                font-size: 1.3rem;
            }

            .glitch-text {
                font-size: 2.8rem;
                line-height: 1;
                white-space: normal;
                margin-bottom: 20px;
                display: block;
            }

            .subtitle {
                font-size: 0.95rem;
                margin-bottom: 30px;
            }

            .input-wrapper {
                flex-direction: column;
                gap: 10px;
                padding: 0 10px;
            }

            .input-container {
                width: 100%;
            }

            .stats-ticker {
                gap: 15px;
                flex-wrap: wrap;
            }

            .dashboard-section {
                flex-direction: column;
                height: calc(100% - 60px);
                overflow: auto;
            }

            .sidebar {
                width: 100%;
                height: auto;
                min-height: 60px;
                max-height: 120px;
                border-right: none;
                border-bottom: 1px solid rgba(255, 0, 255, 0.2);
                display: block;
                overflow-x: auto;
                overflow-y: hidden;
                padding: 5px;
                position: sticky;
                top: 0;
                z-index: 50;
                background: var(--bg-secondary);
                flex-shrink: 0;
            }

            .sidebar-menu {
                display: flex;
                flex-direction: row;
                gap: 5px;
                width: max-content;
            }

            .menu-item {
                white-space: nowrap;
                padding: 10px 15px;
                margin-bottom: 0;
                border-left: none;
                border-bottom: 2px solid transparent;
                font-size: 0.8rem;
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .menu-item:hover,
            .menu-item.active {
                border-left-color: transparent;
                border-bottom-color: var(--accent-main);
                background: rgba(255, 0, 255, 0.1);
            }

            .dashboard-main {
                padding: 15px;
                width: 100%;
                overflow: visible;
            }

            .dashboard-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
                margin-bottom: 30px;
            }

            #target-url-display {
                font-size: 1.1rem;
                word-break: break-all;
                max-width: 100%;
                line-height: 1.3;
            }

            .overall-score {
                font-size: 1rem;
            }

            .score-value {
                font-size: 1.8rem;
            }

            .factors-grid {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .factor-card {
                padding: 15px;
            }
        }
    </style>
</head>

<body>
    <canvas id="snow-canvas"></canvas>
    <div id="app">
        <header class="main-header">
            <div class="logo-container">
                <span class="logo-text">SEO <span class="highlight">EXPART</span></span>
                <i class="fa-solid fa-brain logo-icon"></i>
            </div>
            <nav class="nav-links">
                <a href="#" id="nav-home" class="active">Home</a>
                <a href="#" id="nav-history">History</a>
                <a href="#" id="nav-settings">Settings</a>
            </nav>
        </header>

        <main id="home-section" class="hero-section">
            <div class="hero-content">
                <h1 class="glitch-text" data-text="ADVANCED SEO ANALYSIS">ADVANCED SEO ANALYSIS</h1>
                <p class="subtitle">Analyze 142 Ranking Factors with AI Precision</p>
                <div class="input-wrapper">
                    <div class="input-container">
                        <i class="fa-solid fa-globe input-icon"></i>
                        <input type="text" id="url-input" placeholder="Enter Website URL (e.g., https://example.com)">
                    </div>
                    <button id="analyze-btn" class="cyber-btn">INITIATE SCAN</button>
                </div>
                <div class="stats-ticker">
                    <div class="stat-item"><span class="label">Total Factors</span><span class="value">142</span></div>
                    <div class="stat-item"><span class="label">Engine</span><span class="value">V.3.1.0</span></div>
                    <div class="stat-item"><span class="label">Status</span><span class="value online">ONLINE</span>
                    </div>
                </div>
            </div>
        </main>

        <!-- HISTORY SECTION -->
        <section id="history-section" class="dashboard-section hidden" style="padding: 40px; flex-direction: column;">
            <h2 style="font-family: var(--font-heading); margin-bottom: 30px;">Scan History</h2>
            <div id="history-list" class="factors-grid">
                <!-- History cards will be injected here -->
            </div>
        </section>

        <!-- SETTINGS SECTION -->
        <section id="settings-section" class="dashboard-section hidden" style="padding: 40px; flex-direction: column;">
            <h2 style="font-family: var(--font-heading); margin-bottom: 30px;">Agent Settings</h2>
            <div class="factor-card" style="max-width: 600px;">
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 10px;">Scan Intensity</label>
                    <select class="cyber-btn small-btn"
                        style="width: 100%; background: #222; border-color: var(--accent-secondary);">
                        <option>Standard (142 Factors)</option>
                        <option>Deep Scan (Extended Database)</option>
                        <option>Express (On-Page Only)</option>
                    </select>
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 10px;">UI Theme</label>
                    <div style="display: flex; gap: 10px;">
                        <button class="cyber-btn small-btn active">Cyber Magenta</button>
                        <button class="cyber-btn small-btn" style="opacity: 0.5;">Neon Blue</button>
                    </div>
                </div>
            </div>
        </section>

        <div id="scanning-overlay" class="scanning-overlay hidden">
            <div class="scanner-content">
                <div class="loader-ring">
                    <div class="ring"></div><span id="scan-percentage">0%</span>
                </div>
                <h2 id="scan-status">initializing scan engine...</h2>
                <div class="scan-log" id="scan-log"></div>
            </div>
        </div>

        <section id="results-dashboard" class="dashboard-section hidden">
            <aside class="sidebar">
                <div class="sidebar-menu">
                    <button class="menu-item active" data-category="overview"><i class="fa-solid fa-chart-pie"></i>
                        Overview</button>
                    <button class="menu-item" data-category="domain"><i class="fa-solid fa-server"></i> Domain
                        Factors</button>
                    <button class="menu-item" data-category="page"><i class="fa-solid fa-file-code"></i> Page
                        Level</button>
                    <button class="menu-item" data-category="site"><i class="fa-solid fa-sitemap"></i> Site
                        Level</button>
                    <button class="menu-item" data-category="backlink"><i class="fa-solid fa-link"></i>
                        Backlinks</button>
                    <button class="menu-item" data-category="interaction"><i class="fa-solid fa-users"></i>
                        Interaction</button>
                    <button class="menu-item" data-category="special"><i class="fa-brands fa-google"></i>
                        Algorithm</button>
                    <button class="menu-item" data-category="social"><i class="fa-solid fa-share-nodes"></i>
                        Social</button>
                    <button class="menu-item" data-category="brand"><i class="fa-solid fa-copyright"></i> Brand</button>
                    <button class="menu-item" data-category="spam"><i class="fa-solid fa-shield-virus"></i>
                        Spam</button>
                </div>
            </aside>

            <div class="dashboard-main">
                <div class="dashboard-header" style="flex-wrap: wrap; gap: 20px;">
                    <div>
                        <h2 id="target-url-display">example.com</h2>
                        <div class="overall-score">Score: <span id="score-value" class="score-value">--</span></div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button id="new-scan-btn" class="cyber-btn small-btn"
                            style="border-color: var(--accent-secondary); color: var(--accent-secondary);">
                            <i class="fa-solid fa-rotate-left"></i> NEW SCAN
                        </button>
                        <button id="export-btn" class="cyber-btn small-btn"><i class="fa-solid fa-download"></i> EXPORT
                            REPORT</button>
                    </div>
                </div>
                <div id="factors-grid" class="factors-grid"></div>
            </div>
        </section>
    </div>

    <script>
        const homeSection = document.getElementById('home-section');
        const historySection = document.getElementById('history-section');
        const settingsSection = document.getElementById('settings-section');
        const scanningOverlay = document.getElementById('scanning-overlay');
        const resultsDashboard = document.getElementById('results-dashboard');

        const urlInput = document.getElementById('url-input');
        const analyzeBtn = document.getElementById('analyze-btn');
        const newScanBtn = document.getElementById('new-scan-btn');
        const scanPercentage = document.getElementById('scan-percentage');
        const scanLog = document.getElementById('scan-log');
        const factorsGrid = document.getElementById('factors-grid');
        const historyList = document.getElementById('history-list');
        const targetUrlDisplay = document.getElementById('target-url-display');
        const scoreValue = document.getElementById('score-value');
        const sideMenu = document.querySelector('.sidebar-menu');
        const exportBtn = document.getElementById('export-btn');

        const navLinks = {
            home: document.getElementById('nav-home'),
            history: document.getElementById('nav-history'),
            settings: document.getElementById('nav-settings')
        };

        let currentUrl = '';
        let currentScore = 0;
        let history = JSON.parse(localStorage.getItem('seo_history') || '[]');

        const factorCategories = {
            domain: [
                { id: 1, name: "Domain Age (ডোমেইনের বয়স)", desc: "Older domains tend to rank better.", type: "manual" },
                { id: 2, name: "Keyword in Domain (কিওয়ার্ড)", desc: "Keywords in domain act as relevancy signal.", type: "onpage" },
                { id: 3, name: "Domain Registration Length", desc: "Valuable domains are often paid for several years in advance.", type: "manual" },
                { id: 4, name: "Keyword in Subdomain", desc: "Keywords in subdomain can boost rank.", type: "onpage" },
                { id: 5, name: "Domain History", desc: "Avoid domains with a history of penalties.", type: "manual" },
                { id: 6, name: "Country TLD Extension", desc: "Helps rank in specific target regions (.bd, .uk).", type: "manual" },
                { id: 7, name: "Public vs Private WhoIs", desc: "Private WhoIs can sometimes be a sign of something to hide.", type: "manual" }
            ],
            page: [
                { id: 8, name: "Keyword in Title Tag", desc: "Title tag is a critical On-Page SEO signal.", type: "onpage" },
                { id: 9, name: "Title Starts with Keyword", desc: "Front-loading keywords often performs better.", type: "onpage" },
                { id: 10, name: "Keyword in Meta Description", desc: "Relevant descriptions improve CTR.", type: "onpage" },
                { id: 11, name: "Keyword in H1 Tag", desc: "H1 acts as a secondary title signal.", type: "onpage" },
                { id: 12, name: "Keyword Frequency", desc: "Keywords should appear naturally in content.", type: "onpage" },
                { id: 13, name: "Content Length", desc: "Longer content often covers topics more thoroughly.", type: "onpage" },
                { id: 17, name: "Page Loading Speed (HTML)", desc: "Faster pages rank better.", type: "manual" },
                { id: 32, name: "Broken Links", desc: "Broken links hurt usability and SEO.", type: "onpage" }
            ],
            site: [
                { id: 45, name: "Contact Us Page", desc: "Google prefers sites with appropriate contact info.", type: "onpage" },
                { id: 50, name: "SSL Certificate (HTTPS)", desc: "Essential security and ranking signal.", type: "onpage" },
                { id: 54, name: "Mobile Optimization", desc: "Mobile-first indexing is default.", type: "manual" }
            ],
            backlink: [
                { id: 59, name: "Number of Linking Root Domains", desc: "One of the most important ranking factors.", type: "offpage" },
                { id: 64, name: ".edu or .gov Links", desc: "High trust domains pass more authority.", type: "offpage" },
                { id: 73, name: "Anchor Text", desc: "Exact match anchor text acts as a strong signal.", type: "offpage" }
            ],
            interaction: [
                { id: 87, name: "Organic CTR", desc: "Higher click-through rate boosts rank.", type: "offpage" },
                { id: 89, name: "Bounce Rate", desc: "Lower bounce rate indicates quality.", type: "offpage" }
            ],
            special: [
                { id: 97, name: "QDF (Freshness)", desc: "Query Deserves Freshness.", type: "algo" },
                { id: 101, name: "Geo-Targeting", desc: "Local preference.", type: "algo" }
            ],
            social: [
                { id: 110, name: "Tweet/X Shares", desc: "Social signals from Twitter.", type: "offpage" },
                { id: 111, name: "Facebook Likes/Shares", desc: "Facebook engagement.", type: "offpage" }
            ],
            brand: [
                { id: 115, name: "Brand Anchor Text", desc: "Branded links.", type: "offpage" },
                { id: 123, name: "Physical Location", desc: "Google Business Profile.", type: "offpage" }
            ],
            spam: [
                { id: 124, name: "Panda Penalty", desc: "Algorithm for low quality content.", type: "penalty" },
                { id: 137, name: "Penguin Penalty", desc: "Link spam algorithm.", type: "penalty" }
            ]
        };

        const allFactors = [];
        Object.values(factorCategories).forEach(list => allFactors.push(...list));

        // Navigation Logic
        function showSection(id) {
            [homeSection, historySection, settingsSection, resultsDashboard, scanningOverlay].forEach(s => s.classList.add('hidden'));
            document.getElementById(id).classList.remove('hidden');

            // Update nav links
            Object.values(navLinks).forEach(l => l.classList.remove('active'));
            if (id === 'home-section') navLinks.home.classList.add('active');
            if (id === 'history-section') {
                navLinks.history.classList.add('active');
                renderHistory();
            }
            if (id === 'settings-section') navLinks.settings.classList.add('active');
        }

        navLinks.home.addEventListener('click', (e) => { e.preventDefault(); showSection('home-section'); });
        navLinks.history.addEventListener('click', (e) => { e.preventDefault(); showSection('history-section'); });
        navLinks.settings.addEventListener('click', (e) => { e.preventDefault(); showSection('settings-section'); });

        analyzeBtn.addEventListener('click', () => {
            const url = urlInput.value.trim();
            if (!url) return alert("Please enter a URL");
            currentUrl = url;
            targetUrlDisplay.textContent = currentUrl;
            showSection('scanning-overlay');
            runSimulation();
        });

        newScanBtn.addEventListener('click', () => {
            showSection('home-section');
            urlInput.value = '';
            urlInput.focus();
        });

        sideMenu.addEventListener('click', (e) => {
            const btn = e.target.closest('.menu-item');
            if (btn) {
                document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderDashboard(btn.getAttribute('data-category'));
            }
        });

        exportBtn.addEventListener('click', () => {
            let content = `SEO REPORT FOR ${currentUrl}\nSCORE: ${currentScore}/100\nDATE: ${new Date().toLocaleString()}\n\n`;
            allFactors.forEach(f => content += `${f.name} - ${simulateCheck(f)}\n`);
            const blob = new Blob([content], { type: 'text/plain' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `SEO_Report_${currentUrl.replace(/[^a-z0-9]/gi, '_')}.txt`;
            a.click();
        });

        function runSimulation() {
            let progress = 0;
            scanLog.innerHTML = '';
            const logs = ["DNS Check...", "Robots.txt Analysis...", "Crawling Sitemap...", "Checking SSL...", "Analyzing DOM...", "Parsing CSS..."];
            const timer = setInterval(() => {
                progress++;
                scanPercentage.textContent = `${progress}%`;
                if (progress % 12 === 0) {
                    const p = document.createElement('p');
                    p.textContent = `> ${logs[Math.floor(Math.random() * logs.length)]}`;
                    scanLog.prepend(p);
                }
                if (progress >= 100) {
                    clearInterval(timer);
                    currentScore = Math.floor(Math.random() * 30) + 65;
                    saveToHistory(currentUrl, currentScore);
                    showSection('results-dashboard');
                    animateScore(currentScore);
                    renderDashboard('overview');
                }
            }, 30);
        }

        function saveToHistory(url, score) {
            const entry = { url, score, date: new Date().toLocaleString() };
            history.unshift(entry);
            if (history.length > 20) history.pop();
            localStorage.setItem('seo_history', JSON.stringify(history));
        }

        function renderHistory() {
            historyList.innerHTML = '';
            if (history.length === 0) {
                historyList.innerHTML = '<p style="color: var(--text-secondary);">No scan history found. Start a new scan!</p>';
                return;
            }
            history.forEach(item => {
                const card = document.createElement('div');
                card.className = 'factor-card';
                card.style.cursor = 'pointer';
                card.innerHTML = `
                    <h3>${item.url}</h3>
                    <span class="factor-status status-pass" style="font-size: 1.2rem;">${item.score}%</span>
                    <p class="factor-desc">Scanned on: ${item.date}</p>
                `;
                card.addEventListener('click', () => {
                    currentUrl = item.url;
                    currentScore = item.score;
                    targetUrlDisplay.textContent = currentUrl;
                    showSection('results-dashboard');
                    const el = document.getElementById('score-value');
                    if (el) {
                        el.textContent = currentScore;
                        el.style.color = currentScore < 50 ? 'var(--danger)' : currentScore < 80 ? 'var(--warning)' : 'var(--success)';
                    }
                    renderDashboard('overview');
                });
                historyList.appendChild(card);
            });
        }

        function animateScore(target) {
            let s = 0;
            const el = document.getElementById('score-value');
            if (!el) return;
            const it = setInterval(() => {
                s++; el.textContent = s;
                el.style.color = s < 50 ? 'var(--danger)' : s < 80 ? 'var(--warning)' : 'var(--success)';
                if (s >= target) clearInterval(it);
            }, 20);
        }

        function renderDashboard(cat) {
            factorsGrid.innerHTML = '';
            const list = cat === 'overview' ? allFactors : factorCategories[cat] || [];
            list.forEach(f => {
                const res = simulateCheck(f);
                const card = document.createElement('div');
                card.className = 'factor-card';
                card.innerHTML = `<h3>${f.name}</h3><span class="factor-status ${getStatus(res)}">${res}</span><p class="factor-desc">${f.desc}</p>`;
                factorsGrid.appendChild(card);
            });
        }

        function simulateCheck(f) {
            const s = (f.name.length + currentUrl.length) % 3;
            return s === 0 ? 'PASS' : s === 1 ? 'WARNING' : 'FAIL';
        }

        function getStatus(r) {
            return r === 'PASS' ? 'status-pass' : r === 'FAIL' ? 'status-fail' : 'status-warning';
        }

        // --- PHYSICS-BASED SNOWFALL ---
        const canvas = document.getElementById('snow-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, snowflakes = [], obstacles = [];
        let mouse = { x: -100, y: -100 };

        function wrapText() {
            const targets = document.querySelectorAll('h1, h2, .subtitle, .logo-text');
            targets.forEach(el => {
                if (el.hasAttribute('data-wrapped')) return;
                const text = el.innerText;
                if (el.tagName === 'H1') {
                    // Letter level for main heading
                    el.innerHTML = text.split('').map(c => `<span class="s-char">${c}</span>`).join('');
                } else {
                    // Word level for others
                    el.innerHTML = text.split(' ').map(w => `<span class="s-word">${w}</span>`).join(' ');
                }
                el.setAttribute('data-wrapped', 'true');
            });
        }

        function getObstacles() {
            obstacles = [];
            wrapText(); // Ensure text is wrapped
            const targets = document.querySelectorAll('.cyber-btn, #url-input, .logo-container, .nav-links a, .menu-item, .factor-card, .s-word, .s-char, .stats-ticker, #score-value');
            targets.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                    obstacles.push({
                        left: rect.left,
                        right: rect.right,
                        top: rect.top,
                        bottom: rect.bottom
                    });
                }
            });
        }

        function initSnow() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            snowflakes = [];
            getObstacles();
            for (let i = 0; i < 200; i++) {
                snowflakes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 2 + 1,
                    v: Math.random() * 1 + 0.5,
                    life: Math.random() * 100 + 100, // For "melting"
                    stopped: false
                });
            }
        }

        function drawSnow() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.beginPath();
            for (let i = 0; i < snowflakes.length; i++) {
                let f = snowflakes[i];
                ctx.moveTo(f.x, f.y);
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
            }
            ctx.fill();
            updateSnow();
        }

        function updateSnow() {
            for (let i = 0; i < snowflakes.length; i++) {
                let f = snowflakes[i];

                // Mouse Interaction (Cleaning)
                const dx = mouse.x - f.x;
                const dy = mouse.y - f.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 60) {
                    f.stopped = false; // Move if mouse gets close
                    const angle = Math.atan2(dy, dx);
                    f.x -= Math.cos(angle) * 5;
                    f.y -= Math.sin(angle) * 5;
                    f.life = Math.random() * 200 + 200; // Refill life when moved
                }

                if (f.stopped) {
                    f.life--;
                    if (f.life <= 0) {
                        f.y = -10;
                        f.x = Math.random() * width;
                        f.life = Math.random() * 200 + 200;
                        f.stopped = false;
                    }
                    continue;
                }

                f.y += f.v;
                f.x += Math.sin(f.y / 50) * 0.3;

                // Collision Detection
                for (let o of obstacles) {
                    if (f.y + f.r >= o.top && f.y <= o.top + 3 && f.x >= o.left && f.x <= o.right) {
                        f.y = o.top - f.r;
                        f.stopped = true;
                        break;
                    }
                }

                if (f.y > height) {
                    f.y = -10;
                    f.x = Math.random() * width;
                }
            }
        }

        function animateSnow() {
            drawSnow();
            requestAnimationFrame(animateSnow);
        }

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // Periodically update obstacles to account for scrolling/dynamic cards
        setInterval(getObstacles, 1000);
        window.addEventListener('resize', initSnow);
        initSnow();
        animateSnow();
    </script>

</body>

</html>
