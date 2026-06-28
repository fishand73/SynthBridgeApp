(function () {
  const appStoreFallbackUrl = "https://itunes.apple.com/app/id6778690596?mt=8";
  const appStorePath = "synthbridge-midi-synthesizer/id6778690596";
  const languageDefaultCountries = {
    de: "de",
    es: "es",
    fr: "fr",
    it: "it",
    ja: "jp",
    ko: "kr",
    pt: "br",
    ru: "ru",
    zh: "cn"
  };

  const copy = {
    en: {
      title: "SynthBridge - MIDI Synthesizer",
      description: "Connect a MIDI controller and play live on your phone or tablet with SynthBridge, a mobile MIDI synth, router, SoundFont player, looper, and practice workstation.",
      navPrivacy: "Privacy",
      navTerms: "Terms",
      navChangelog: "Changelog",
      eyebrow: "MIDI synth, looper and Cloud resources",
      heroTitle: "Connect a MIDI controller and play live on your phone or tablet.",
      heroLead: "Connect a keyboard, pad controller or another MIDI app, load SF2/SF3 sounds, and perform with responsive mobile controls.",
      appStoreLine: "Download on the",
      playStoreLine: "Get it on",
      appStoreAria: "Download SynthBridge on the App Store",
      playStoreAria: "Get SynthBridge on Google Play",
      proofChannels: "MIDI channels",
      featuresEyebrow: "Built for mobile music making",
      featuresTitle: "One app for MIDI input, sounds, practice, and recording.",
      featureMidiTitle: "MIDI connections",
      featureMidiBody: "Use Bluetooth MIDI, USB MIDI, virtual MIDI routing, and network MIDI sessions where your platform supports them.",
      featureRouteTitle: "MIDI routing",
      featureRouteBody: "Route MIDI between controllers, apps, channels, and sounds so SynthBridge can sit at the center of a compact mobile rig.",
      featureSoundTitle: "SoundFont engine",
      featureSoundBody: "Load SF2/SF3 libraries, keep the built-in GeneralUser-GS set ready, and tune per-channel sound, pan, volume, reverb, and chorus.",
      featurePlayTitle: "Expressive controls",
      featurePlayBody: "Play with multi-touch keys, dual keyboard layouts, programmable drum pads, pitch bend, modulation, transpose, and velocity curves.",
      featurePlayerTitle: "MIDI player",
      featurePlayerBody: "Open standard MIDI files, manage a local song library, practice with backing parts, and export performance data when an idea is ready.",
      featureLoopTitle: "Looper and Styles",
      featureLoopBody: "Capture loop ideas, build sections, use Style accompaniment, and practice with chord recognition and single-finger chord assist.",
      screenshotsEyebrow: "Live-ready workflow",
      screenshotsTitle: "From controller to sound in a few taps.",
      screenshotsBody: "Move from controller setup to sound, MIDI playback, routing, accompaniment, and loop capture in one mobile live workflow.",
      storyMainEyebrow: "Start playing",
      storyMainTitle: "Open the stage and play immediately.",
      storyMainBody: "The main workspace keeps connection status, presets, drum pads, keys, and live controls within reach, so practice can start without a long setup ritual.",
      storyLandscapeEyebrow: "Hands-on control",
      storyLandscapeTitle: "Turn the phone sideways for a compact live rig.",
      storyLandscapeBody: "Landscape mode gives controllers, pads, modulation, velocity, and a wider keyboard more room, making the screen feel closer to a hardware performance surface.",
      storyPlayerEyebrow: "Practice with MIDI files",
      storyPlayerTitle: "Load a MIDI file and practice with the parts.",
      storyPlayerBody: "The MIDI player turns local songs into a playable practice session, with visible tracks, transport controls, and instrument parts that stay connected to the synth engine.",
      storyRouteEyebrow: "MIDI routing",
      storyRouteTitle: "Route MIDI where it should go.",
      storyRouteBody: "Every source gets its own route matrix: choose output targets, filter MIDI channels, prevent loops, and apply velocity curves where supported before events are forwarded.",
      storyAccompanimentEyebrow: "Build accompaniment",
      storyAccompanimentTitle: "Add accompaniment without leaving the instrument.",
      storyAccompanimentBody: "Style accompaniment and chord assist help turn a short idea into a playable backing flow while the keyboard, pads, and synth controls remain available.",
      storyLooperEyebrow: "Capture ideas",
      storyLooperTitle: "Capture the idea, then shape the loop.",
      storyLooperBody: "Use the MIDI Looper to record parts, organize sections, and keep a groove moving while you refine the performance instead of starting over.",
      routeDiagramAria: "Animated MIDI route matrix diagram from input sources through processing rules to output targets",
      routeHeadIn: "Inputs",
      routeHeadHub: "Route matrix",
      routeHeadOut: "Outputs",
      routeSourceTouch: "Virtual touch",
      routeSourcePlayers: "Loop / Style / Player",
      routeSourceExternal: "App / BLE / USB / RTP",
      routeRuleTargets: "Pick output targets",
      routeRuleChannels: "Filter MIDI channels",
      routeRuleGuard: "Loop guard / velocity curve",
      routeTargetApp: "Virtual MIDI apps",
      routeTargetBle: "BLE Host / Device",
      routeTargetUsbRtp: "USB MIDI / RTP-MIDI",
      flowEyebrow: "A compact live setup",
      flowTitle: "Connect, load, play, and export.",
      flowConnectTitle: "Connect",
      flowConnectBody: "Pair a BLE controller, plug in USB MIDI, or route MIDI from another app.",
      flowLoadTitle: "Load",
      flowLoadBody: "Choose built-in sounds, import SoundFonts, or open Cloud resources.",
      flowPlayTitle: "Play",
      flowPlayBody: "Perform with keys, pads, presets, effects, transpose, metronome, and MIDI CC.",
      flowExportTitle: "Export",
      flowExportBody: "Save ideas as audio or MIDI and keep your practice library moving.",
      downloadEyebrow: "Available on iOS and Android",
      downloadTitle: "Start playing with SynthBridge."
    },
    zh: {
      title: "音桥 SynthBridge - MIDI 合成器",
      description: "连接 MIDI 控制器，用手机或平板实时演奏。音桥支持 MIDI 合成、路由、SoundFont 播放、Looper 和移动练习工作流。",
      navPrivacy: "隐私",
      navTerms: "条款",
      navChangelog: "更新日志",
      eyebrow: "MIDI 合成器、循环器与 Cloud 资源",
      heroTitle: "连接 MIDI 控制器，用手机或平板实时演奏。",
      heroLead: "连接键盘、打击垫控制器或其他 MIDI 应用，载入 SF2/SF3 音色，用适合移动演奏的响应式控制完成现场演奏。",
      appStoreLine: "前往",
      playStoreLine: "前往",
      appStoreAria: "在 App Store 下载音桥 SynthBridge",
      playStoreAria: "在 Google Play 获取音桥 SynthBridge",
      proofChannels: "MIDI 通道",
      featuresEyebrow: "为移动音乐创作而生",
      featuresTitle: "一个应用完成 MIDI 输入、音色、练习与录音。",
      featureMidiTitle: "MIDI 连接",
      featureMidiBody: "支持蓝牙 MIDI、USB MIDI、虚拟 MIDI 路由，以及平台可用的网络 MIDI 会话。",
      featureRouteTitle: "MIDI 路由",
      featureRouteBody: "在控制器、应用、通道与音色之间路由 MIDI，让音桥成为移动演奏配置的中心。",
      featureSoundTitle: "SoundFont 引擎",
      featureSoundBody: "载入 SF2/SF3 音源库，保留内置 GeneralUser-GS 音色，并可独立调整每通道音色、声像、音量、混响与合唱。",
      featurePlayTitle: "表现力控制",
      featurePlayBody: "使用多点触控键盘、双键盘布局、可编程打击垫、弯音、调制、移调和力度曲线进行演奏。",
      featurePlayerTitle: "MIDI 播放器",
      featurePlayerBody: "打开标准 MIDI 文件，管理本地曲库，配合伴奏声部练习，并在灵感成形后导出演奏数据。",
      featureLoopTitle: "循环器与 Style",
      featureLoopBody: "录制循环灵感、编排段落，使用 Style 自动伴奏，并通过和弦识别与单指和弦辅助练习。",
      screenshotsEyebrow: "可用于现场的工作流",
      screenshotsTitle: "从控制器到出声，只需几步。",
      screenshotsBody: "从连接控制器到出声，再到 MIDI 播放、路由、伴奏和循环录制，一套移动现场工作流顺着走。",
      storyMainEyebrow: "开始演奏",
      storyMainTitle: "打开主演奏台，马上开始出声。",
      storyMainBody: "主工作区把连接状态、快捷预设、打击垫、键盘和现场控制放在一起，练习不需要漫长配置。",
      storyLandscapeEyebrow: "现场控制",
      storyLandscapeTitle: "横过手机，就是一套紧凑现场控制台。",
      storyLandscapeBody: "横屏模式给控制器、打击垫、调制、力度和更宽的键盘留出空间，手感更接近硬件演奏界面。",
      storyPlayerEyebrow: "MIDI 文件练习",
      storyPlayerTitle: "载入 MIDI 文件，跟着各声部练习。",
      storyPlayerBody: "MIDI 播放器把本地曲库变成可演奏的练习会话，轨道、播放控制和乐器声部都连接到同一套合成器引擎。",
      storyRouteEyebrow: "MIDI 路由",
      storyRouteTitle: "把 MIDI 路由到它该去的地方。",
      storyRouteBody: "每个来源都有自己的路由矩阵：选择输出目标，过滤 MIDI 通道，防止回环，并在支持的来源上先套用力度曲线再转发事件。",
      storyAccompanimentEyebrow: "自动伴奏",
      storyAccompanimentTitle: "不用离开乐器，也能加入自动伴奏。",
      storyAccompanimentBody: "Style 自动伴奏和和弦辅助能把短小动机扩展成可演奏的伴奏流程，同时保留键盘、打击垫和合成器控制。",
      storyLooperEyebrow: "捕捉灵感",
      storyLooperTitle: "录下灵感，再整理成循环段落。",
      storyLooperBody: "用 MIDI Looper 录制声部、组织段落，让 Groove 持续运转，再慢慢打磨演奏细节。",
      routeDiagramAria: "MIDI 输入源经过路由矩阵、处理规则再转发到输出目标的动态示意图",
      routeHeadIn: "MIDI 输入",
      routeHeadHub: "音桥路由",
      routeHeadOut: "输出目标",
      routeSourceTouch: "虚拟触控",
      routeSourcePlayers: "循环 / Style / 播放器",
      routeSourceExternal: "App / BLE / USB / RTP",
      routeRuleTargets: "选择输出目标",
      routeRuleChannels: "过滤 MIDI 通道",
      routeRuleGuard: "防回环 / 力度曲线",
      routeTargetApp: "其他 App 虚拟 MIDI",
      routeTargetBle: "BLE Host / Device",
      routeTargetUsbRtp: "USB MIDI / RTP-MIDI",
      flowEyebrow: "紧凑的移动现场配置",
      flowTitle: "连接、载入、演奏、导出。",
      flowConnectTitle: "连接",
      flowConnectBody: "配对 BLE 控制器，接入 USB MIDI，或从其他应用路由 MIDI。",
      flowLoadTitle: "载入",
      flowLoadBody: "选择内置音色，导入 SoundFont，或打开 Cloud 资源。",
      flowPlayTitle: "演奏",
      flowPlayBody: "使用键盘、打击垫、预设、效果、移调、节拍器和 MIDI CC 表演。",
      flowExportTitle: "导出",
      flowExportBody: "将灵感保存为音频或 MIDI，持续积累你的练习曲库。",
      downloadEyebrow: "支持 iOS 与 Android",
      downloadTitle: "开始使用音桥 SynthBridge。"
    }
  };

  const languageButtons = document.querySelectorAll("[data-lang-option]");
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  function normalizeCountry(country) {
    if (!country || !/^[a-z]{2}$/i.test(country)) {
      return null;
    }
    return country.toLowerCase();
  }

  function countryFromLocale(locale) {
    if (!locale) {
      return null;
    }

    const normalized = locale.replace(/_/g, "-");
    const parts = normalized.split("-");
    for (let index = parts.length - 1; index >= 1; index -= 1) {
      const country = normalizeCountry(parts[index]);
      if (country) {
        return country;
      }
    }

    const language = parts[0] && parts[0].toLowerCase();
    if (language === "zh" && normalized.toLowerCase().includes("hant")) {
      return "tw";
    }

    return languageDefaultCountries[language] || null;
  }

  function appStoreUrl() {
    const params = new URLSearchParams(window.location.search);
    const requestedCountry = normalizeCountry(params.get("storefront"));
    if (requestedCountry) {
      return `https://apps.apple.com/${requestedCountry}/app/${appStorePath}`;
    }

    const languages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    const country = languages.map(countryFromLocale).find(Boolean);
    if (country) {
      return `https://apps.apple.com/${country}/app/${appStorePath}`;
    }

    return appStoreFallbackUrl;
  }

  function updateAppStoreLinks() {
    const url = appStoreUrl();
    document.querySelectorAll("[data-app-store-link]").forEach((element) => {
      element.setAttribute("href", url);
    });
  }

  function detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang");
    if (requested === "zh" || requested === "en") {
      return requested;
    }

    const saved = window.localStorage.getItem("synthbridge-site-lang");
    if (saved === "zh" || saved === "en") {
      return saved;
    }

    const languages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];
    return languages.some((language) => language.toLowerCase().startsWith("zh")) ? "zh" : "en";
  }

  function localizedHref(element, language) {
    return language === "zh" ? element.dataset.hrefZh : element.dataset.hrefEn;
  }

  function applyLanguage(language, shouldPersist) {
    const text = copy[language] || copy.en;
    document.body.dataset.lang = language;
    document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
    document.title = text.title;

    if (metaDescription) {
      metaDescription.setAttribute("content", text.description);
    }
    if (ogTitle) {
      ogTitle.setAttribute("content", text.title);
    }
    if (ogDescription) {
      ogDescription.setAttribute("content", text.description);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(text, key)) {
        element.textContent = text[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      if (Object.prototype.hasOwnProperty.call(text, key)) {
        element.setAttribute("aria-label", text[key]);
      }
    });

    document.querySelectorAll("[data-href-en][data-href-zh]").forEach((element) => {
      const href = localizedHref(element, language);
      if (href) {
        element.setAttribute("href", href);
      }
    });

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.langOption === language ? "true" : "false");
    });

    if (shouldPersist) {
      window.localStorage.setItem("synthbridge-site-lang", language);
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langOption, true));
  });

  applyLanguage(detectLanguage(), false);
  updateAppStoreLinks();
})();
