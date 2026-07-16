import './styles/main.css';

// 初始化渲染
document.addEventListener('DOMContentLoaded', () => {
  render();
});

const DATA = {
      "categories": [
        {
          "id":"casual",
          "title":"2D休闲游戏",
          "subtitle":"CASUAL GAMES",
          "description":"专注休闲游戏买量素材制作，涵盖消除、合成、放置、解谜等多种休闲品类，擅长用轻松有趣的视觉表现抓住玩家注意力，提升广告点击。",
          "label":"休闲",
          "colors":["#34d399","#22d3ee","#3b82f6"],
          "tags":["消除类","合成类","放置挂机","解谜闯关"],
          "number":"01",
          "videos":[
            {"id":"1","title":"杖剑传说 - 玩偶盲盒流水线","description":"玩偶盲盒流水线创意投放视频","url":"https://aka.doubaocdn.com/s/mvS51wk1wA","tags":["盲盒","流水线","创意"]},
            {"id":"2","title":"凡物 - 旗袍","description":"国风旗袍主题休闲游戏投放","url":"https://aka.doubaocdn.com/s/1JRh1wk1wA","tags":["国风","旗袍","换装"]},
            {"id":"3","title":"Bricks Breaker Quest - VR扫描","description":"VR扫描风格打砖块游戏投放视频","url":"https://aka.doubaocdn.com/s/JSb11wk1wA","tags":["VR","打砖块","扫描"]},
            {"id":"4","title":"杜拉拉H5 - 选择人生","description":"人生选择类休闲互动H5","url":"https://aka.doubaocdn.com/s/ttj61wk1wA","tags":["H5","选择","人生"]},
            {"id":"5","title":"向往的生活 - 插销引水救人","description":"插销解谜类休闲游戏投放","url":"https://aka.doubaocdn.com/s/IsU21wk1wA","tags":["插销","解谜","救人"]},
            {"id":"6","title":"向往的生活 - 悬浮家具摆放","description":"家具摆放装饰类休闲玩法","url":"https://aka.doubaocdn.com/s/KZss1wk1wA","tags":["家具","装饰","摆放"]},
            {"id":"7","title":"向往的生活 - 滑梯流水线","description":"滑梯流水线创意玩法展示","url":"https://aka.doubaocdn.com/s/D7RI1wk1wA","tags":["滑梯","流水线","创意"]},
            {"id":"8","title":"向往的生活 - 插花教学","description":"插花教学主题休闲游戏投放","url":"https://aka.doubaocdn.com/s/baq71wk1wA","tags":["插花","教学","休闲"]}
          ]
        },
        {
          "id":"battle",
          "title":"2D战斗游戏",
          "subtitle":"BATTLE GAMES",
          "description":"深耕战斗类游戏买量视频制作，精通技能特效、打击感表现与战斗节奏把控，通过高燃视觉画面精准传递游戏核心卖点，打造高吸量战斗素材。",
          "label":"战斗",
          "colors":["#f472b6","#fb7185","#a855f7"],
          "tags":["技能特效","战斗剪辑","BOSS战","PVP对战"],
          "number":"02",
          "videos":[
            {"id":"1","title":"CCG - 角色升级点击爽感","description":"角色升级点击爽感战斗展示","url":"https://aka.doubaocdn.com/s/GeUq1wk1wK","tags":["升级","爽感","点击"]},
            {"id":"2","title":"CCG - 排行榜升级逆袭","description":"排行榜升级逆袭战斗玩法","url":"https://aka.doubaocdn.com/s/kYjT1wk1wK","tags":["排行榜","逆袭","升级"]},
            {"id":"3","title":"武将 - 打铁加点满神装","description":"打铁加点神装养成战斗","url":"https://aka.doubaocdn.com/s/hlK21wk1wK","tags":["武将","打铁","神装"]},
            {"id":"4","title":"武将 - 招募组队","description":"招募武将组队战斗玩法","url":"https://aka.doubaocdn.com/s/coIJ1wk1wK","tags":["招募","组队","武将"]},
            {"id":"5","title":"帝国史诗 - 装备收集","description":"装备收集战斗系统展示","url":"https://aka.doubaocdn.com/s/PJ2s1wk1wK","tags":["装备","收集","史诗"]},
            {"id":"6","title":"你去干掉Boss","description":"Boss战战斗投放视频","url":"https://aka.doubaocdn.com/s/XR3g1wk1wK","tags":["Boss","战斗","挑战"]},
            {"id":"7","title":"英雄没有闪 - 开局选套装","description":"开局选套装战斗玩法","url":"https://aka.doubaocdn.com/s/5lpk1wk1wK","tags":["套装","开局","选择"]},
            {"id":"8","title":"英雄没有闪 - 双屏对比迭代","description":"双屏对比战斗效果迭代","url":"https://aka.doubaocdn.com/s/PW4l1wk1wK","tags":["对比","迭代","效果"]}
          ]
        },
        {
          "id":"aigc",
          "title":"AIGC动画",
          "subtitle":"AIGC ANIMATION",
          "description":"结合AI生图与AI视频生成工具，快速产出高质量AIGC动画素材，涵盖角色展示、场景概念、动态海报等多种形式，大幅提升素材生产效率与创意表现。",
          "label":"AIGC",
          "colors":["#818cf8","#a78bfa","#38bdf8"],
          "tags":["AI生图","AI视频","角色动画","概念设计"],
          "number":"03",
          "videos":[
            {"id":"1","title":"AIGC 角色动画 01","description":"AI生成角色动画效果展示","url":"https://aka.doubaocdn.com/s/wEMQ1wk1wS","tags":["角色","动画","AI"]},
            {"id":"2","title":"AIGC 场景动画","description":"AI生成场景动态效果","url":"https://aka.doubaocdn.com/s/UETA1wk1wS","tags":["场景","动态","AI"]},
            {"id":"3","title":"AIGC 特效动画","description":"AI生成技能特效动画","url":"https://aka.doubaocdn.com/s/qOEF1wk1wS","tags":["特效","技能","AI"]},
            {"id":"4","title":"AIGC 转场动画","description":"AI生成创意转场效果","url":"https://aka.doubaocdn.com/s/kfVa1wk1wS","tags":["转场","创意","AI"]},
            {"id":"5","title":"AIGC 角色动画 02","description":"AI生成角色动作动画","url":"https://aka.doubaocdn.com/s/VacO1wk1wS","tags":["角色","动作","AI"]},
            {"id":"6","title":"AIGC 场景漫游","description":"AI生成场景漫游动画","url":"https://aka.doubaocdn.com/s/H1Rk1wk1wS","tags":["场景","漫游","AI"]},
            {"id":"7","title":"AIGC 完成品演示 01","description":"AIGC动画完成效果展示","url":"https://aka.doubaocdn.com/s/0M3V1wk1wS","tags":["完成品","演示","AI"]},
            {"id":"8","title":"AIGC 完成品演示 02","description":"AIGC动画综合效果展示","url":"https://aka.doubaocdn.com/s/3ngC1wk1wS","tags":["完成品","综合","AI"]}
          ]
        }
      ],
      "skills":[
        {"title":"视频全流程制作","desc":"精通AE特效合成、PR剪辑，独立完成游戏买量视频全流程制作","icon":"🎬","number":"01","color":"#3b82f6"},
        {"title":"2D动效设计","desc":"熟练2D动效、画面包装、节奏卡点，精通信息流广告风格","icon":"✨","number":"02","color":"#f472b6"},
        {"title":"AIGC素材生产","desc":"掌握AI生图、AI视频生成、AI素材优化，快速产出高质量买量素材","icon":"🤖","number":"03","color":"#a855f7"},
        {"title":"买量策略思维","desc":"熟悉游戏买量逻辑，懂吸量节奏、投放风格、素材迭代思路","icon":"📊","number":"04","color":"#06b6d4"},
        {"title":"高效交付能力","desc":"高效出片、抗压性强，完美适配买量行业快节奏工作模式","icon":"⚡","number":"05","color":"#f59e0b"},
        {"title":"审美与创意思维","desc":"具备优秀的审美能力与创意发散思维，精准捕捉游戏核心卖点并转化为高吸量视觉表现","icon":"🎨","number":"06","color":"#ec4899"}
      ],
      "personalInfo":{
        "name":"赵春江",
        "title":"2D游戏买量设计师 / AIGC设计师",
        "experience":"2",
        "city":"成都",
        "email":"2090158964@qq.com",
        "wechat":"13684235245",
        "phone":"13684235245",
        "bio":"专注游戏买量视频制作2年，精通AE/PR全流程，熟练掌握AI生图与AI视频生成技术。擅长2D动效设计、画面包装与节奏卡点，熟悉游戏买量逻辑与吸量思路。能够快速产出高质量买量素材，抗压能力强，适配买量行业快节奏工作模式。"
      }
    };

    // 保存默认数据的深拷贝，用于重置功能
    const DEFAULT_VIDEO_DATA = {};
    DATA.categories.forEach(category => {
      DEFAULT_VIDEO_DATA[category.id] = JSON.parse(JSON.stringify(category.videos));
    });
    const DEFAULT_PERSONAL_INFO = JSON.parse(JSON.stringify(DATA.personalInfo));
    const DEFAULT_HERO_VIDEO = "https://aka.doubaocdn.com/s/utGj1wk1wA";

    // Load saved settings from localStorage
    const SETTINGS_KEY = "portfolio_settings";

    function loadSettings() {
      try {
        const saved = localStorage.getItem(SETTINGS_KEY);
        if (saved) {
          const settings = JSON.parse(saved);
          if (settings.personalInfo) {
            Object.assign(DATA.personalInfo, settings.personalInfo);
          }
          if (settings.heroVideo) {
            return settings.heroVideo;
          }
        }
      } catch (e) {
        console.error("Failed to load settings:", e);
      }
      return null;
    }

    const savedHeroVideo = loadSettings();
    const { categories, skills, personalInfo } = DATA;

    let HERO_VIDEO = savedHeroVideo || "https://aka.doubaocdn.com/s/utGj1wk1wA";
    const ADMIN_PASSWORD = "@@zhaoZHAO729";

    const app = document.getElementById("app");

    let selectedCategoryId = null;
    let isAdmin = false;

    const svg = {
      menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`,
      close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`,
      down: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>`,
      back: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>`,
      play: `<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" style="margin-left:3px"><path d="M8 5v14l11-7z"/></svg>`,
      copy: `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
      mail: `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
    };

    function e(value) {
      return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&#39;"
      }[char]));
    }

    function gradientVars(colors) {
      const positions = [
        "80% 55%",
        "69% 34%",
        "8% 6%",
        "41% 38%",
        "86% 85%",
        "82% 18%",
        "51% 4%"
      ];

      const colorMap = [0,1,2,0,1,2,1];

      const vars = positions.map((pos, index) => {
        const names = ["one","two","three","four","five","six","seven"];
        const color = colors[Math.min(colorMap[index], colors.length - 1)];

        return `--gradient-${names[index]}:radial-gradient(at ${pos},${color} 0px,transparent 50%)`;
      }).join(";");

      return `${vars};--gradient-base:linear-gradient(${colors[0]} 0 100%)`;
    }

    function glowCard(inner, colors, extra = "") {
      return `
        <div class="border-glow-card" style="--card-bg:#120F17;${gradientVars(colors)};${extra}">
          <span class="edge-light"></span>
          <div class="border-glow-inner">
            ${inner}
          </div>
        </div>
      `;
    }

    function getCategory(id) {
      return categories.find(item => item.id === id);
    }

    function videoStorageKey(id) {
      return `videos_${id}`;
    }

    function getVideos(category) {
      try {
        const saved = localStorage.getItem(videoStorageKey(category.id));
        return saved ? JSON.parse(saved) : category.videos;
      } catch {
        return category.videos;
      }
    }

    function setVideos(categoryId, videos) {
      localStorage.setItem(videoStorageKey(categoryId), JSON.stringify(videos));
    }

    function getDefaultCategoryVideos(categoryId) {
      return DEFAULT_VIDEO_DATA[categoryId] || [];
    }

    function navigateTo(id) {
      const target = document.querySelector(id);

      if (target) {
        target.scrollIntoView({
          behavior:"smooth"
        });
      }
    }

    function renderHeader() {
      const navItems = [
        ["首页","#hero"],
        ["关于我","#about"],
        ["精选作品","#works"],
        ["核心能力","#skills"],
        ["联系我","#contact"]
      ];

      return `
        <header class="site-header" id="siteHeader">
          <div class="section-container header-inner">
            <a class="brand" href="#hero" data-scroll="#hero" aria-label="回到首页">
              <span class="brand-icon">赵</span>

              <span class="brand-copy">
                <span class="brand-name">${e(personalInfo.name)}</span>
                <span class="brand-role">2D游戏买量设计师</span>
              </span>
            </a>

            <nav class="nav">
              ${navItems.map(([label, href]) => `
                <button class="nav-btn" data-scroll="${href}">
                  ${label}
                </button>
              `).join("")}
            </nav>

            <button class="contact-top" data-scroll="#contact">
              联系我
            </button>

            <button class="menu-toggle" id="menuToggle" aria-label="展开导航">
              ${svg.menu}
            </button>
          </div>
        </header>

        <div class="mobile-nav hidden" id="mobileNav">
          <nav class="mobile-nav-inner">
            ${navItems.map(([label, href]) => `
              <button data-scroll="${href}">
                ${label}
              </button>
            `).join("")}

            <button class="contact-top" data-scroll="#contact">
              联系我
            </button>
          </nav>
        </div>
      `;
    }

    function renderHome() {
      const infoCards = [
        ["所在城市", personalInfo.city, "📍"],
        ["工作经验", `${personalInfo.experience}年经验`, "💼"],
        ["职位方向", "2D游戏买量设计师", "🎮"],
        ["核心领域", "游戏买量 / AIGC", "✨"]
      ];

      const contactItems = [
        {
          label:"邮箱",
          value:personalInfo.email,
          displayValue:"2090158964...",
          icon:"✉️",
          key:"email",
          color:"#3b82f6"
        },
        {
          label:"微信",
          value:personalInfo.wechat,
          displayValue:personalInfo.wechat,
          icon:"💬",
          key:"wechat",
          color:"#ec4899"
        },
        {
          label:"手机",
          value:personalInfo.phone,
          displayValue:personalInfo.phone,
          icon:"📞",
          key:"phone",
          color:"#10b981"
        },
        {
          label:"所在城市",
          value:personalInfo.city,
          displayValue:personalInfo.city,
          icon:"📍",
          key:"city",
          color:"#06b6d4"
        }
      ];

      return `
        <main>
          <section class="hero" id="hero">
            <video
              class="hero-video"
              id="heroVideo"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
              src="${HERO_VIDEO}"
            ></video>

            <div class="hero-content">
              <div class="hero-badge">
                <span class="hero-dot"></span>
                <span>${e(personalInfo.experience)}年经验 · ${e(personalInfo.city)}</span>
              </div>

              <h1 class="hero-name">${e(personalInfo.name)}</h1>

              <p class="hero-title">
                2D游戏买量设计师
              </p>

              <p class="hero-subtitle">
                AIGC设计师 / 2D游戏广告设计师
              </p>
            </div>

            <button class="scroll-down" data-scroll="#works" aria-label="查看作品">
              ${svg.down}
            </button>
          </section>

          <section class="section about-section" id="about">
            <div class="about-bg-text">关于我</div>

            <div class="section-container" style="position:relative;z-index:1">
              <div class="section-title-wrap reveal">
                <h2 class="section-title gradient-title" style="margin-bottom:32px">
                  关于我
                </h2>

                <h3 class="about-heading-name">
                  ${e(personalInfo.name)}
                </h3>

                <p class="about-role">
                  AIGC设计师 / 2D游戏广告设计师
                </p>

                <p class="about-bio">
                  2年游戏买量视频制作经验，精通AE特效合成与PR剪辑，熟练掌握AI生图与AI视频生成工具。擅长结合游戏核心卖点与投放渠道特性，快速产出高质量吸量素材，熟悉买量逻辑与素材迭代思路，能高效适配买量行业快节奏工作模式。
                </p>
              </div>

              <div class="about-grid">
                ${infoCards.map((card, index) => `
                  <div class="reveal delay-${Math.min(index, 3)}">
                    ${glowCard(`
                      <div class="info-card-content">
                        <div class="info-icon">${card[2]}</div>
                        <p class="info-label">${card[0]}</p>
                        <p class="info-value">${e(card[1])}</p>
                      </div>
                    `, ["#22d3ee","#818cf8","#a78bfa"], "--border-radius:16px;--glow-padding:15px;--edge-sensitivity:25;--fill-opacity:.4")}
                  </div>
                `).join("")}
              </div>
            </div>
          </section>

          <section class="section" id="works">
            <div class="section-container">
              <div class="section-title-wrap reveal">
                <h2 class="section-title">
                  三大创作方向
                </h2>

                <p class="section-description">
                  覆盖休闲游戏、战斗游戏与 AIGC 动画三大领域，专注打造高吸量游戏买量素材
                </p>
              </div>

              <div class="works-grid">
                ${categories.map((category, index) => `
                  <div class="reveal delay-${index}">
                    ${glowCard(`
                      <button class="work-btn" data-open-category="${category.id}">
                        <div class="work-number" style="color:${category.colors[0]}">
                          ${category.number}
                        </div>

                        <div class="work-top">
                          <span
                            class="category-label"
                            style="background:linear-gradient(to right,${category.colors[0]}22,${category.colors[1]}22,${category.colors[2]}22)"
                          >
                            ${e(category.label)}
                          </span>
                        </div>

                        <p class="work-en">${e(category.subtitle)}</p>

                        <h3 class="work-title">
                          ${e(category.title)}
                        </h3>

                        <p class="work-description">
                          ${e(category.description)}
                        </p>

                        <div class="tags">
                          ${category.tags.map(tag => `
                            <span class="tag">${e(tag)}</span>
                          `).join("")}
                        </div>

                        <div class="card-cta">
                          <span class="cta-text">点击查看</span>
                          <span class="arrow">→</span>
                        </div>
                      </button>
                    `, category.colors, "--border-radius:20px;--glow-padding:20px;--edge-sensitivity:20;--fill-opacity:.5")}
                  </div>
                `).join("")}
              </div>
            </div>
          </section>

          <section class="section" id="skills">
            <div class="section-container">
              <div class="section-title-wrap reveal">
                <div class="section-badge">
                  核心能力
                </div>

                <h2 class="section-title">
                  六大核心优势
                </h2>

                <p class="section-description">
                  从创意策划到最终交付，全流程把控每一个细节
                </p>
              </div>

              <div class="skills-grid">
                ${skills.map((skill, index) => `
                  <div class="skill-card reveal delay-${index % 4}">
                    <div class="skill-number" style="color:${skill.color}">
                      ${skill.number}
                    </div>

                    <div
                      class="skill-icon"
                      style="background:${skill.color}20;border:1px solid ${skill.color}30"
                    >
                      ${skill.icon}
                    </div>

                    <h3 class="skill-title">
                      ${e(skill.title)}
                    </h3>

                    <p class="skill-desc">
                      ${e(skill.desc)}
                    </p>

                    <div
                      class="skill-line"
                      style="background:linear-gradient(90deg,${skill.color},transparent)"
                    ></div>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>

          <section class="section contact-section" id="contact">
            <div class="section-container" style="width:100%">
              <div class="section-title-wrap reveal" style="margin-bottom:64px">
                <div class="section-badge">
                  ✨ 开放合作机会
                </div>

                <h2 class="section-title" style="font-size:clamp(36px,4.6vw,60px)">
                  一起创造精彩的游戏买量素材
                </h2>

                <p class="section-description">
                  欢迎交流合作，共同打造高质量吸量素材
                </p>
              </div>

              <div class="contact-grid">
                ${contactItems.map((item, index) => `
                  <div class="reveal delay-${index}">
                    ${glowCard(`
                      <div class="contact-content">
                        <div
                          class="contact-icon"
                          style="background:${item.color}20;border:1px solid ${item.color}30"
                        >
                          ${item.icon}
                        </div>

                        <p class="contact-label">
                          ${item.label}
                        </p>

                        <div class="contact-value-line">
                          <p class="contact-value">
                            ${e(item.displayValue)}
                          </p>

                          ${item.key !== "city" ? `
                            <button
                              class="copy-btn"
                              data-copy="${e(item.value)}"
                              data-copy-key="${item.key}"
                              title="复制"
                            >
                              ${svg.copy}
                            </button>
                          ` : ""}
                        </div>

                        <p class="copy-note hidden" id="copy-${item.key}">
                          已复制 ✓
                        </p>
                      </div>
                    `, [item.color, item.color + "80", "#22d3ee"], "--border-radius:16px;--glow-padding:15px;--edge-sensitivity:25;--fill-opacity:.4")}
                  </div>
                `).join("")}
              </div>

              <div class="contact-actions">
                <a class="primary-btn" href="mailto:${e(personalInfo.email)}">
                  ${svg.mail}
                  发送邮件
                </a>

                <button
                  class="secondary-btn"
                  data-copy="${e(personalInfo.wechat)}"
                  data-copy-key="wechat-bottom"
                >
                  ${svg.copy}
                  <span id="wechatCopyText">复制微信号</span>
                </button>
              </div>

              <div class="footer-copy">
                © 2024 ${e(personalInfo.name)} · 2D游戏买量设计师 / AIGC设计师
              </div>
            </div>
          </section>

          <button class="settings-btn" id="settingsBtn" title="全局设置">
            ⚙️
          </button>
        </main>
      `;
    }

    function videoCard(video, category) {
      const colors = category.colors;

      return `
        <article
          class="video-card"
          data-video-id="${e(video.id)}"
          style="
            --card-glow:${colors[0]}20;
            --card-border:${colors[0]}40;
            --play-glow:${colors[0]}50
          "
        >
          <div class="video-thumb">
            <video
              muted
              loop
              playsinline
              preload="metadata"
              src="${e(video.url)}"
            ></video>

            <div class="video-fade"></div>

            <div class="play-circle">
              <div
                class="play-circle-inner"
                style="background:linear-gradient(135deg,${colors[0]},${colors[1]})"
              >
                ${svg.play}
              </div>
            </div>

            <span class="video-zoom">点击放大</span>


          </div>

          <div class="video-info">
            <h3 class="video-info-title">
              ${e(video.title)}
            </h3>

            <p class="video-info-desc">
              ${e(video.description)}
            </p>

            <div class="video-tags">
              ${video.tags.map(tag => `
                <span class="video-tag">${e(tag)}</span>
              `).join("")}
            </div>
          </div>
        </article>
      `;
    }

    function renderCategory(category) {
      const videos = getVideos(category);

      return `
        <main class="category-page">
          <div class="section-container">
            <div class="category-header">
              <button class="back-btn" id="backHome">
                ${svg.back}
                返回首页
              </button>

              <div>
                <span
                  class="category-page-label"
                  style="
                    background:linear-gradient(135deg,${category.colors[0]}25,${category.colors[1]}25);
                    border:1px solid ${category.colors[0]}40
                  "
                >
                  ${e(category.label)}
                </span>
              </div>

              <h1 class="category-page-title">
                ${e(category.title)}
              </h1>

              <p class="category-page-description">
                ${e(category.description)}
              </p>
            </div>

            <div class="video-grid" id="videoGrid">
              ${videos.map(video => videoCard(video, category)).join("")}
            </div>
          </div>


        </main>
      `;
    }

    function render() {
      const currentCategory = selectedCategoryId
        ? getCategory(selectedCategoryId)
        : null;

      app.innerHTML = renderHeader() + (
        currentCategory
          ? renderCategory(currentCategory)
          : renderHome()
      );

      bindShared();

      if (currentCategory) {
        bindCategory(currentCategory);
      } else {
        bindHome();
      }

      updateHeader();
      setupGlow();
      setupReveal();
    }

    function bindShared() {
      document.querySelectorAll("[data-scroll]").forEach(element => {
        element.addEventListener("click", event => {
          event.preventDefault();

          const target = element.dataset.scroll;
          const mobileNav = document.getElementById("mobileNav");

          if (mobileNav) {
            mobileNav.classList.add("hidden");
          }

          if (selectedCategoryId) {
            selectedCategoryId = null;
            isAdmin = false;

            render();

            setTimeout(() => {
              navigateTo(target);
            }, 30);

          } else {
            navigateTo(target);
          }
        });
      });

      const toggle = document.getElementById("menuToggle");

      if (toggle) {
        toggle.addEventListener("click", () => {
          const mobileNav = document.getElementById("mobileNav");
          const hidden = mobileNav.classList.contains("hidden");

          mobileNav.classList.toggle("hidden");
          toggle.innerHTML = hidden ? svg.close : svg.menu;
        });
      }

      document.querySelectorAll("[data-copy]").forEach(button => {
        button.addEventListener("click", () => {
          copyText(button.dataset.copy, button.dataset.copyKey);
        });
      });
    }

    function bindHome() {
      const hero = document.querySelector(".hero");
      const video = document.getElementById("heroVideo");

      const markHeroLoaded = () => {
        if (hero) {
          hero.classList.add("loaded");
        }
      };

      if (video) {
        if (video.readyState >= 2) {
          markHeroLoaded();
        } else {
          video.addEventListener("canplay", markHeroLoaded, { once:true });
        }

        setTimeout(markHeroLoaded, 700);
      }

      document.querySelectorAll("[data-open-category]").forEach(button => {
        button.addEventListener("click", () => {
          selectedCategoryId = button.dataset.openCategory;
          isAdmin = false;

          render();

          window.scrollTo({
            top:0,
            behavior:"auto"
          });
        });
      });

      const settingsBtn = document.getElementById("settingsBtn");

      if (settingsBtn) {
        settingsBtn.addEventListener("click", openSettingsPasswordModal);
      }
    }

    function bindCategory(category) {
      document.getElementById("backHome").addEventListener("click", () => {
        selectedCategoryId = null;
        isAdmin = false;

        render();

        window.scrollTo({
          top:0,
          behavior:"auto"
        });
      });

      document.querySelectorAll(".video-card").forEach(card => {
        const preview = card.querySelector("video");

        card.addEventListener("mouseenter", () => {
          if (preview) {
            preview.muted = true;
            preview.play().catch(() => {});
          }
        });

        card.addEventListener("mouseleave", () => {
          if (preview) {
            preview.pause();

            try {
              preview.currentTime = 0;
            } catch {}
          }
        });

        card.addEventListener("click", event => {
          if (event.target.closest("[data-delete-video]")) {
            return;
          }

          const videos = getVideos(category);
          const video = videos.find(item => item.id === card.dataset.videoId);

          if (video) {
            openVideoModal(video, category);
          }
        });
      });


    }

    function setupGlow() {
      document.querySelectorAll(".border-glow-card").forEach(card => {
        card.addEventListener("pointermove", event => {
          const rect = card.getBoundingClientRect();

          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const dx = x - centerX;
          const dy = y - centerY;

          let kx = Infinity;
          let ky = Infinity;

          if (dx !== 0) {
            kx = centerX / Math.abs(dx);
          }

          if (dy !== 0) {
            ky = centerY / Math.abs(dy);
          }

          const edge = Math.min(
            Math.max(
              1 / Math.min(kx, ky),
              0
            ),
            1
          );

          let angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;

          if (angle < 0) {
            angle += 360;
          }

          card.style.setProperty("--edge-proximity", (edge * 100).toFixed(3));
          card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
        });
      });
    }

    function setupReveal() {
      const targets = [...document.querySelectorAll(".reveal")];

      if (!("IntersectionObserver" in window)) {
        targets.forEach(element => {
          element.classList.add("is-visible");
        });

        return;
      }

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold:.12
      });

      targets.forEach(element => {
        observer.observe(element);
      });
    }

    function updateHeader() {
      const header = document.getElementById("siteHeader");

      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 50);
      }
    }

    function copyText(text, key) {
      const done = () => {
        const note = document.getElementById(`copy-${key}`);

        if (note) {
          note.classList.remove("hidden");

          setTimeout(() => {
            note.classList.add("hidden");
          }, 2000);
        }

        if (key === "wechat-bottom") {
          const label = document.getElementById("wechatCopyText");

          if (label) {
            label.textContent = "已复制 ✓";

            setTimeout(() => {
              label.textContent = "复制微信号";
            }, 2000);
          }
        }
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(text)
          .then(done)
          .catch(() => fallbackCopy(text, done));
      } else {
        fallbackCopy(text, done);
      }
    }

    function fallbackCopy(text, done) {
      const textarea = document.createElement("textarea");

      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      try {
        document.execCommand("copy");
        done();
      } finally {
        document.body.removeChild(textarea);
      }
    }

    function openPasswordModal() {
      const modal = document.createElement("div");

      modal.className = "modal";

      modal.innerHTML = `
        <div class="modal-card">
          <h3 class="modal-title">
            管理员验证
          </h3>

          <p class="modal-note">
            请输入管理员密码以管理作品
          </p>

          <input
            class="form-input"
            type="password"
            id="passwordInput"
            placeholder="请输入密码"
          >

          <p class="form-error hidden" id="passwordError">
            密码错误，请重试
          </p>

          <div class="modal-actions">
            <button class="modal-cancel" id="passwordCancel">
              取消
            </button>

            <button class="modal-confirm" id="passwordConfirm">
              确认
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const input = modal.querySelector("#passwordInput");

      const close = () => {
        modal.remove();
      };

      const submit = () => {
        if (input.value === ADMIN_PASSWORD) {
          isAdmin = true;

          close();
          render();
        } else {
          modal.querySelector("#passwordError").classList.remove("hidden");
        }
      };

      modal.addEventListener("click", event => {
        if (event.target === modal) {
          close();
        }
      });

      modal.querySelector("#passwordCancel").addEventListener("click", close);
      modal.querySelector("#passwordConfirm").addEventListener("click", submit);

      input.addEventListener("input", () => {
        modal.querySelector("#passwordError").classList.add("hidden");
      });

      input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
          submit();
        }
      });

      input.focus();
    }

    function openAddVideoModal() {
      const category = getCategory(selectedCategoryId);

      const modal = document.createElement("div");

      modal.className = "modal";

      modal.innerHTML = `
        <div class="modal-card add-modal">
          <h3 class="modal-title" style="margin-bottom:24px">
            添加新视频
          </h3>

          <div class="form-group">
            <label class="form-label">
              视频标题 *
            </label>

            <input
              class="form-input"
              id="newTitle"
              placeholder="请输入视频标题"
            >
          </div>

          <div class="form-group">
            <label class="form-label">
              视频描述
            </label>

            <textarea
              class="form-input"
              id="newDesc"
              rows="3"
              placeholder="请输入视频描述"
              style="resize:vertical"
            ></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">
              视频URL *
            </label>

            <input
              class="form-input"
              id="newUrl"
              placeholder="请输入视频URL"
            >
          </div>

          <div class="form-group">
            <label class="form-label">
              标签（用逗号分隔）
            </label>

            <input
              class="form-input"
              id="newTags"
              placeholder="例如：休闲, 消除, 创意"
            >
          </div>

          <div class="modal-actions">
            <button class="modal-cancel" id="newCancel">
              取消
            </button>

            <button class="modal-confirm" id="newConfirm">
              添加
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const close = () => {
        modal.remove();
      };

      modal.addEventListener("click", event => {
        if (event.target === modal) {
          close();
        }
      });

      modal.querySelector("#newCancel").addEventListener("click", close);

      modal.querySelector("#newConfirm").addEventListener("click", () => {
        const title = modal.querySelector("#newTitle").value.trim();
        const url = modal.querySelector("#newUrl").value.trim();

        if (!title || !url) {
          alert("请填写标题和视频URL");
          return;
        }

        const description = modal.querySelector("#newDesc").value.trim();

        const tags = modal
          .querySelector("#newTags")
          .value
          .split(",")
          .map(item => item.trim())
          .filter(Boolean);

        const videos = getVideos(category);

        videos.push({
          id:String(Date.now()),
          title,
          description,
          url,
          tags
        });

        setVideos(category.id, videos);

        close();
        render();
      });
    }

    // 设置面板内添加视频弹窗
    function openAddVideoModalInSettings(category, onDone) {
      const modal = document.createElement("div");

      modal.className = "modal";

      modal.innerHTML = `
        <div class="modal-card add-modal">
          <h3 class="modal-title" style="margin-bottom:24px">
            添加新视频 - ${e(category.label)}
          </h3>

          <div class="form-group">
            <label class="form-label">
              视频标题 *
            </label>

            <input
              class="form-input"
              id="newTitle"
              placeholder="请输入视频标题"
            >
          </div>

          <div class="form-group">
            <label class="form-label">
              视频描述
            </label>

            <textarea
              class="form-input"
              id="newDesc"
              rows="3"
              placeholder="请输入视频描述"
              style="resize:vertical"
            ></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">
              视频URL *
            </label>

            <input
              class="form-input"
              id="newUrl"
              placeholder="请输入视频URL"
            >
          </div>

          <div class="form-group">
            <label class="form-label">
              标签（用逗号分隔）
            </label>

            <input
              class="form-input"
              id="newTags"
              placeholder="例如：休闲, 消除, 创意"
            >
          </div>

          <div class="modal-actions">
            <button class="modal-cancel" id="newCancel">
              取消
            </button>

            <button class="modal-confirm" id="newConfirm">
              添加
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const close = () => {
        modal.remove();
      };

      modal.addEventListener("click", event => {
        if (event.target === modal) {
          close();
        }
      });

      modal.querySelector("#newCancel").addEventListener("click", close);

      modal.querySelector("#newConfirm").addEventListener("click", () => {
        const title = modal.querySelector("#newTitle").value.trim();
        const url = modal.querySelector("#newUrl").value.trim();

        if (!title || !url) {
          alert("请填写标题和视频URL");
          return;
        }

        const description = modal.querySelector("#newDesc").value.trim();

        const tags = modal
          .querySelector("#newTags")
          .value
          .split(",")
          .map(item => item.trim())
          .filter(Boolean);

        const videos = getVideos(category);

        videos.push({
          id:String(Date.now()),
          title,
          description,
          url,
          tags
        });

        setVideos(category.id, videos);
        // 同步更新 DATA 引用
        category.videos = videos;

        close();

        if (onDone) {
          onDone();
        }
      });
    }

    // 编辑视频弹窗
    function openEditVideoModal(category, video, onDone) {
      const modal = document.createElement("div");

      modal.className = "modal";

      modal.innerHTML = `
        <div class="modal-card add-modal">
          <h3 class="modal-title" style="margin-bottom:24px">
            编辑视频 - ${e(category.label)}
          </h3>

          <div class="form-group">
            <label class="form-label">
              视频标题 *
            </label>

            <input
              class="form-input"
              id="editTitle"
              value="${e(video.title)}"
              placeholder="请输入视频标题"
            >
          </div>

          <div class="form-group">
            <label class="form-label">
              视频描述
            </label>

            <textarea
              class="form-input"
              id="editDesc"
              rows="3"
              placeholder="请输入视频描述"
              style="resize:vertical"
            >${e(video.description || "")}</textarea>
          </div>

          <div class="form-group">
            <label class="form-label">
              视频URL *
            </label>

            <input
              class="form-input"
              id="editUrl"
              value="${e(video.url)}"
              placeholder="请输入视频URL"
            >
          </div>

          <div class="form-group">
            <label class="form-label">
              标签（用逗号分隔）
            </label>

            <input
              class="form-input"
              id="editTags"
              value="${e((video.tags || []).join(", "))}"
              placeholder="例如：休闲, 消除, 创意"
            >
          </div>

          <div class="modal-actions">
            <button class="modal-cancel" id="editCancel">
              取消
            </button>

            <button class="modal-confirm" id="editConfirm">
              保存
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const close = () => {
        modal.remove();
      };

      modal.addEventListener("click", event => {
        if (event.target === modal) {
          close();
        }
      });

      modal.querySelector("#editCancel").addEventListener("click", close);

      modal.querySelector("#editConfirm").addEventListener("click", () => {
        const title = modal.querySelector("#editTitle").value.trim();
        const url = modal.querySelector("#editUrl").value.trim();

        if (!title || !url) {
          alert("请填写标题和视频URL");
          return;
        }

        const description = modal.querySelector("#editDesc").value.trim();

        const tags = modal
          .querySelector("#editTags")
          .value
          .split(",")
          .map(item => item.trim())
          .filter(Boolean);

        const videos = getVideos(category);
        const index = videos.findIndex(item => item.id === video.id);

        if (index !== -1) {
          videos[index] = {
            ...videos[index],
            title,
            description,
            url,
            tags
          };

          setVideos(category.id, videos);
          // 同步更新 DATA 引用
          category.videos = videos;
        }

        close();

        if (onDone) {
          onDone();
        }
      });
    }

    function openVideoModal(video, category) {
      const modal = document.createElement("div");

      modal.className = "modal video-modal";
      modal.style.setProperty("--modal-glow", `${category.colors[0]}20`);

      modal.innerHTML = `
        <div class="video-modal-box">
          <button class="modal-close" aria-label="关闭">
            ✕
          </button>

          <div class="player-card">
            <video
              autoplay
              controls
              controlsList="nodownload nofullscreen"
              disablePictureInPicture
              loop
              playsinline
              src="${e(video.url)}"
            ></video>

            <div class="player-copy">
              <h3>${e(video.title)}</h3>
              <p>${e(video.description)}</p>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const close = () => {
        modal.remove();
      };

      modal.addEventListener("click", event => {
        if (event.target === modal) {
          close();
        }
      });

      modal.querySelector(".modal-close").addEventListener("click", close);
    }

    // Global Settings Functions
    function openSettingsPasswordModal() {
      const modal = document.createElement("div");

      modal.className = "modal";

      modal.innerHTML = `
        <div class="modal-card">
          <h3 class="modal-title">
            全局设置
          </h3>

          <p class="modal-note">
            请输入管理员密码以修改网站设置
          </p>

          <input
            class="form-input"
            type="password"
            id="settingsPasswordInput"
            placeholder="请输入密码"
          >

          <p class="form-error hidden" id="settingsPasswordError">
            密码错误，请重试
          </p>

          <div class="modal-actions">
            <button class="modal-cancel" id="settingsPasswordCancel">
              取消
            </button>

            <button class="modal-confirm" id="settingsPasswordConfirm">
              确认
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const input = modal.querySelector("#settingsPasswordInput");

      const close = () => {
        modal.remove();
      };

      const submit = () => {
        if (input.value === ADMIN_PASSWORD) {
          close();
          openSettingsModal();
        } else {
          modal.querySelector("#settingsPasswordError").classList.remove("hidden");
        }
      };

      modal.addEventListener("click", event => {
        if (event.target === modal) {
          close();
        }
      });

      modal.querySelector("#settingsPasswordCancel").addEventListener("click", close);
      modal.querySelector("#settingsPasswordConfirm").addEventListener("click", submit);

      input.addEventListener("input", () => {
        modal.querySelector("#settingsPasswordError").classList.add("hidden");
      });

      input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
          submit();
        }
      });

      input.focus();
    }

    function openSettingsModal() {
      const modal = document.createElement("div");

      modal.className = "modal settings-modal";

      // 当前选中的作品分类
      let currentWorkCategory = categories[0].id;

      // 作品管理视频列表渲染函数
      function renderWorkList() {
        const category = getCategory(currentWorkCategory);
        const videos = getVideos(category);
        const listEl = modal.querySelector("#workVideoList");

        if (!listEl) return;

        if (videos.length === 0) {
          listEl.innerHTML = `
            <p class="modal-note" style="text-align:center;padding:40px 0">
              暂无视频，点击下方按钮添加
            </p>
          `;
          return;
        }

        listEl.innerHTML = videos.map(video => `
          <div class="work-video-item" data-video-id="${e(video.id)}">
            <div class="work-video-info">
              <div class="work-video-title">${e(video.title)}</div>
              <div class="work-video-desc">${e(video.description || "暂无描述")}</div>
              <div class="work-video-tags">
                ${(video.tags || []).map(tag => `<span class="work-video-tag">${e(tag)}</span>`).join("")}
              </div>
            </div>
            <div class="work-video-actions">
              <button class="work-video-edit" data-edit-video="${e(video.id)}" title="编辑">✎</button>
              <button class="work-video-delete" data-delete-video="${e(video.id)}" title="删除">✕</button>
            </div>
          </div>
        `).join("");

        // 绑定删除按钮
        listEl.querySelectorAll("[data-delete-video]").forEach(btn => {
          btn.addEventListener("click", event => {
            event.stopPropagation();
            const id = btn.dataset.deleteVideo;

            if (confirm("确定要删除这个视频吗？")) {
              const cat = getCategory(currentWorkCategory);
              const updatedVideos = getVideos(cat).filter(item => item.id !== id);
              setVideos(currentWorkCategory, updatedVideos);
              // 同步更新 DATA 中的引用，确保导出时数据一致
              cat.videos = updatedVideos;
              renderWorkList();
            }
          });
        });

        // 绑定编辑按钮
        listEl.querySelectorAll("[data-edit-video]").forEach(btn => {
          btn.addEventListener("click", event => {
            event.stopPropagation();
            const id = btn.dataset.editVideo;
            const cat = getCategory(currentWorkCategory);
            const video = getVideos(cat).find(item => item.id === id);
            if (video) {
              openEditVideoModal(cat, video, renderWorkList);
            }
          });
        });
      }

      modal.innerHTML = `
        <div class="modal-card">
          <h3 class="modal-title" style="margin-bottom:20px">
            全局设置
          </h3>

          <div class="settings-tabs">
            <button class="settings-tab active" data-tab="personal">
              个人信息
            </button>

            <button class="settings-tab" data-tab="works">
              作品管理
            </button>
          </div>

          <div class="settings-panel active" id="panel-personal">
            <h4 class="settings-section-title">
              基本信息
            </h4>

            <div class="form-group">
              <label class="form-label">姓名</label>
              <input class="form-input" id="setting-name" value="${e(personalInfo.name)}">
            </div>

            <div class="form-group">
              <label class="form-label">职位</label>
              <input class="form-input" id="setting-title" value="${e(personalInfo.title)}">
            </div>

            <div class="form-group">
              <label class="form-label">工作经验</label>
              <input class="form-input" id="setting-experience" value="${e(personalInfo.experience)}">
            </div>

            <div class="form-group">
              <label class="form-label">所在城市</label>
              <input class="form-input" id="setting-city" value="${e(personalInfo.city)}">
            </div>

            <h4 class="settings-section-title" style="margin-top:24px">
              联系方式
            </h4>

            <div class="form-group">
              <label class="form-label">邮箱</label>
              <input class="form-input" id="setting-email" value="${e(personalInfo.email)}">
            </div>

            <div class="form-group">
              <label class="form-label">微信</label>
              <input class="form-input" id="setting-wechat" value="${e(personalInfo.wechat)}">
            </div>

            <div class="form-group">
              <label class="form-label">手机</label>
              <input class="form-input" id="setting-phone" value="${e(personalInfo.phone)}">
            </div>

            <h4 class="settings-section-title" style="margin-top:24px">
              个人简介
            </h4>

            <div class="form-group">
              <textarea class="form-input" id="setting-bio" rows="4">${e(personalInfo.bio)}</textarea>
            </div>

            <h4 class="settings-section-title" style="margin-top:24px">
              头图背景视频
            </h4>

            <div class="form-group">
              <label class="form-label">视频URL</label>
              <input class="form-input" id="setting-hero-video" value="${e(HERO_VIDEO)}">
            </div>

            <p class="modal-note" style="margin-top:12px;font-size:12px">
              输入视频URL后，保存即可替换首页头图背景视频
            </p>
          </div>

          <div class="settings-panel" id="panel-works">
            <div class="work-category-tabs">
              ${categories.map((cat, idx) => `
                <button
                  class="work-category-tab ${idx === 0 ? "active" : ""}"
                  data-category="${e(cat.id)}"
                  style="
                    ${idx === 0 ? `
                      background:linear-gradient(135deg,${cat.colors[0]}30,${cat.colors[1]}30);
                      border-color:${cat.colors[0]}60;
                      color:#fff;
                    ` : ""}
                  "
                >
                  ${e(cat.label)}
                </button>
              `).join("")}
            </div>

            <div class="work-video-list" id="workVideoList"></div>

            <button class="work-add-btn" id="workAddBtn">
              <span>+</span>
              添加视频
            </button>
          </div>

          <div class="settings-actions">
            <button class="settings-reset" id="settingsReset">
              恢复默认
            </button>

            <button class="settings-save" id="settingsSave">
              保存设置
            </button>

            <button class="settings-export" id="settingsExport">
              ⬇ 导出配置
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const close = () => {
        modal.remove();
      };

      // Tab switching (personal / works)
      modal.querySelectorAll(".settings-tab").forEach(tab => {
        tab.addEventListener("click", () => {
          const tabName = tab.dataset.tab;

          modal.querySelectorAll(".settings-tab").forEach(t => t.classList.remove("active"));
          modal.querySelectorAll(".settings-panel").forEach(p => p.classList.remove("active"));

          tab.classList.add("active");
          modal.querySelector(`#panel-${tabName}`).classList.add("active");

          if (tabName === "works") {
            renderWorkList();
          }
        });
      });

      // 作品分类切换
      modal.querySelectorAll(".work-category-tab").forEach(tab => {
        tab.addEventListener("click", () => {
          currentWorkCategory = tab.dataset.category;
          const cat = getCategory(currentWorkCategory);

          modal.querySelectorAll(".work-category-tab").forEach(t => {
            t.classList.remove("active");
            t.style.background = "";
            t.style.borderColor = "";
            t.style.color = "";
          });

          tab.classList.add("active");
          tab.style.background = `linear-gradient(135deg,${cat.colors[0]}30,${cat.colors[1]}30)`;
          tab.style.borderColor = `${cat.colors[0]}60`;
          tab.style.color = "#fff";

          renderWorkList();
        });
      });

      // 添加视频按钮
      modal.querySelector("#workAddBtn").addEventListener("click", () => {
        const cat = getCategory(currentWorkCategory);
        openAddVideoModalInSettings(cat, renderWorkList);
      });

      // Save settings
      modal.querySelector("#settingsSave").addEventListener("click", () => {
        const newPersonalInfo = {
          name: modal.querySelector("#setting-name").value.trim(),
          title: modal.querySelector("#setting-title").value.trim(),
          experience: modal.querySelector("#setting-experience").value.trim(),
          city: modal.querySelector("#setting-city").value.trim(),
          email: modal.querySelector("#setting-email").value.trim(),
          wechat: modal.querySelector("#setting-wechat").value.trim(),
          phone: modal.querySelector("#setting-phone").value.trim(),
          bio: modal.querySelector("#setting-bio").value.trim()
        };

        const newHeroVideo = modal.querySelector("#setting-hero-video").value.trim();

        saveSettings(newPersonalInfo, newHeroVideo);
        close();
        render();
      });

      // Export config
      modal.querySelector("#settingsExport").addEventListener("click", () => {
        exportConfig();
      });

      // Reset settings
      modal.querySelector("#settingsReset").addEventListener("click", () => {
        if (confirm("确定要恢复默认设置吗？这将重置个人信息、头图视频和所有分类的视频数据。")) {
          resetSettings();
          close();
          render();
        }
      });

      modal.addEventListener("click", event => {
        if (event.target === modal) {
          close();
        }
      });

      // 初始渲染作品列表
      renderWorkList();
    }

    function saveSettings(newPersonalInfo, newHeroVideo) {
      try {
        Object.assign(DATA.personalInfo, newPersonalInfo);
        HERO_VIDEO = newHeroVideo;

        const settings = {
          personalInfo: newPersonalInfo,
          heroVideo: newHeroVideo
        };

        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      } catch (e) {
        console.error("Failed to save settings:", e);
      }
    }

    function exportConfig() {
      try {
        // 构建与原DATA对象结构完全一致的导出数据
        const exportData = {
          categories: DATA.categories.map(category => ({
            id: category.id,
            title: category.title,
            subtitle: category.subtitle,
            description: category.description,
            label: category.label,
            colors: category.colors,
            tags: category.tags,
            number: category.number,
            videos: getVideos(category)
          })),
          skills: DATA.skills,
          personalInfo: DATA.personalInfo,
          heroVideo: HERO_VIDEO
        };

        const json = JSON.stringify(exportData, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "portfolio-config.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (e) {
        console.error("Failed to export config:", e);
        alert("导出失败：" + e.message);
      }
    }

    function resetSettings() {
      try {
        localStorage.removeItem(SETTINGS_KEY);

        // 重置所有分类的视频数据
        DATA.categories.forEach(category => {
          localStorage.removeItem(videoStorageKey(category.id));
          const defaultData = getDefaultCategoryVideos(category.id);
          category.videos = JSON.parse(JSON.stringify(defaultData));
        });

        // 重置个人信息
        DATA.personalInfo = JSON.parse(JSON.stringify(DEFAULT_PERSONAL_INFO));

        // 重置首页视频
        HERO_VIDEO = DEFAULT_HERO_VIDEO;
      } catch (e) {
        console.error("Failed to reset settings:", e);
      }
    }

    window.addEventListener("scroll", updateHeader, {
      passive:true
    });

    render();
