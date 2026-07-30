const STANDARD_CONTACT = {
  email: "support@eraflip.com",
  website: "https://erafliptech.com",
  phone: "+92 309 7770073",
  addressLines: ["428N", "Johar Town, Lahore"],
};

const STANDARD_SERVICE_ITEMS = [
  "Device type and model",
  "Operating system version",
  "Advertising ID (Google Advertising ID)",
  "IP address (approximate location)",
  "App interactions (ad views, clicks, impressions)",
  "Gameplay events and analytics",
  "Crash reports and performance diagnostics",
];

const STANDARD_USE_ITEMS = [
  "Show relevant advertisements",
  "Measure ad performance",
  "Improve app stability and performance",
  "Analyze gameplay trends",
  "Detect crashes and technical issues",
  "Prevent fraud and abuse",
];

function createStandardPolicy({
  slug,
  gameName,
  aboutGame,
  metaDescription,
  servicesSummary = "Google AdMob + Firebase",
  updatedAt = "06/07/2026",
}) {
  const intro = `Eraflip Tech built the ${gameName} as a free game for Android devices. This SERVICE is provided by Eraflip Tech at no cost and is intended for use as is.`;

  return {
    slug,
    gameName,
    title: `Privacy Policy - ${gameName}`,
    updatedAt,
    platform: "Android game",
    servicesSummary,
    metaDescription:
      metaDescription ||
      `Privacy Policy for ${gameName} by Eraflip Tech, including AdMob, Firebase, ad preferences, children's privacy, security, and contact details.`,
    intro,
    highlights: [
      "Free Android game",
      "Google AdMob and Firebase",
      "No direct personal data collection",
      "Support: support@eraflip.com",
    ],
    contact: STANDARD_CONTACT,
    sections: [
      {
        title: "About the Game",
        content: [
          {
            type: "paragraph",
            text: aboutGame,
          },
        ],
      },
      {
        title: "Information Collection and Use",
        content: [
          {
            type: "paragraph",
            text: "We do not directly collect, store, or share any personal information from users.",
          },
          {
            type: "paragraph",
            text:
              "However, the game uses Google AdMob and Firebase, third-party services provided by Google, which may automatically collect certain information to provide advertisements, improve app performance, and maintain the quality of the game.",
          },
          {
            type: "paragraph",
            text: "Information collected automatically may include:",
          },
          {
            type: "bullets",
            items: STANDARD_SERVICE_ITEMS,
          },
          {
            type: "paragraph",
            text:
              "This information is collected by Google, not by Eraflip Tech, and may be used to:",
          },
          {
            type: "bullets",
            items: STANDARD_USE_ITEMS,
          },
          {
            type: "paragraph",
            text:
              "Eraflip Tech does not have access to personally identifiable user data.",
          },
        ],
      },
      {
        title: "Third-Party Services",
        content: [
          {
            type: "paragraph",
            text: "The game uses the following third-party services:",
          },
          {
            type: "links",
            items: [
              {
                label: "Google AdMob (Google LLC)",
                href: "https://policies.google.com/privacy",
                description: "Privacy Policy",
              },
              {
                label: "Google Ad Technology",
                href: "https://policies.google.com/technologies/ads",
                description: "Ad Technology",
              },
              {
                label: "Firebase (Google LLC)",
                href: "https://firebase.google.com/support/privacy",
                description: "Firebase Privacy & Security",
              },
            ],
          },
          {
            type: "paragraph",
            text:
              "Google may use cookies, identifiers, and similar technologies to provide advertising, analytics, and crash reporting services.",
          },
        ],
      },
      {
        title: "Personalized Ads & User Choices",
        content: [
          {
            type: "paragraph",
            text:
              "Depending on your region, you may be asked for consent to receive personalized ads.",
          },
          {
            type: "paragraph",
            text:
              "You can manage your advertising preferences through your Android device settings:",
          },
          {
            type: "steps",
            items: [
              "Settings -> Google -> Ads",
              "Reset Advertising ID",
              "Delete Advertising ID",
              "Opt out of Ads Personalization",
            ],
          },
          {
            type: "paragraph",
            text:
              "You may continue to see advertisements, but they may be less relevant to your interests.",
          },
        ],
      },
      {
        title: "Children's Privacy",
        content: [
          {
            type: "paragraph",
            text: `${gameName} is suitable for users of all ages.`,
          },
          {
            type: "paragraph",
            text: "We do not knowingly collect personal information from children.",
          },
          {
            type: "paragraph",
            text:
              "Google AdMob may serve non-personalized advertisements where required by applicable laws or platform policies. Firebase services are used to improve application stability and performance and are not intended to personally identify users.",
          },
          {
            type: "paragraph",
            text:
              "If you believe that a child has provided personal information through the application, please contact us so that we can take appropriate action.",
          },
        ],
      },
      {
        title: "Security",
        content: [
          {
            type: "paragraph",
            text: "We do not store user data on our own servers.",
          },
          {
            type: "paragraph",
            text:
              "Advertisement delivery, analytics, crash reporting, and related data processing are securely managed by Google through AdMob and Firebase under Google’s privacy and security policies. We strive to provide a safe, secure, and reliable gaming experience for all players.",
          },
        ],
      },
      {
        title: "Changes to This Privacy Policy",
        content: [
          {
            type: "paragraph",
            text: "We may update this Privacy Policy from time to time.",
          },
          {
            type: "paragraph",
            text:
              "Any updates will be reflected on this page with an updated date. You are advised to review this page periodically for any changes.",
          },
        ],
      },
      {
        title: "Contact Us",
        content: [
          {
            type: "paragraph",
            text:
              "If you have any questions or concerns regarding this Privacy Policy, you can contact us:",
          },
          {
            type: "bullets",
            items: [
              "Email: support@eraflip.com",
              "Website: https://erafliptech.com",
              "Phone: +92 309 7770073",
              "Address: 428N, Johar Town, Lahore",
            ],
          },
        ],
      },
    ],
  };
}

export const privacyPolicies = {
  "urban-descent-pov": {
    slug: "urban-descent-pov",
    gameName: "Urban Descent POV",
    title: "Privacy Policy - Urban Descent POV",
    updatedAt: "06/07/2026",
    platform: "Android game",
    servicesSummary: "Google AdMob + Firebase",
    metaDescription:
      "Privacy Policy for Urban Descent POV by Eraflip Tech, including AdMob, Firebase, ad preferences, children's privacy, security, and contact details.",
    intro:
      "Eraflip Tech built the Urban Descent POV as a free game for Android devices. This SERVICE is provided by Eraflip Tech at no cost and is intended for use as is.",
    highlights: [
      "Free Android game",
      "Google AdMob and Firebase",
      "No direct personal data collection",
      "Support: support@eraflip.com",
    ],
    contact: {
      email: STANDARD_CONTACT.email,
      website: STANDARD_CONTACT.website,
      phone: STANDARD_CONTACT.phone,
      addressLines: ["428N", "Johar Town, Lahore"],
    },
    sections: [
      {
        title: "About the Game",
        content: [
          {
            type: "paragraph",
            text:
              "Urban Descent POV is an immersive 3D first-person downhill biking simulation game where players race through fast-paced urban environments, perform daring stunts, avoid challenging obstacles, and master technical downhill tracks. Experience realistic physics, dynamic environments, and exciting level-based gameplay as you push your riding skills to the limit. The game is designed to provide an adrenaline-filled and entertaining mountain biking experience for players of all ages.",
          },
        ],
      },
      {
        title: "Information Collection and Use",
        content: [
          {
            type: "paragraph",
            text: "We do not directly collect, store, or share any personal information from users.",
          },
          {
            type: "paragraph",
            text:
              "However, the game uses Google AdMob and Firebase, third-party services provided by Google, which may automatically collect certain information to provide advertisements, improve app performance, and maintain the quality of the game.",
          },
          {
            type: "bullets",
            items: [
              "Device type and model",
              "Operating system version",
              "Advertising ID (Google Advertising ID)",
              "IP address (approximate location)",
              "App interactions (ad views, clicks, impressions)",
              "Gameplay events and analytics",
              "Crash reports and performance diagnostics",
            ],
          },
          {
            type: "paragraph",
            text:
              "This information is collected by Google, not by Eraflip Tech, and may be used to show relevant advertisements, measure ad performance, improve app stability and performance, analyze gameplay trends, detect crashes and technical issues, and prevent fraud and abuse.",
          },
          {
            type: "paragraph",
            text: "Eraflip Tech does not have access to personally identifiable user data.",
          },
        ],
      },
      {
        title: "Third-Party Services",
        content: [
          {
            type: "paragraph",
            text: "The game uses the following third-party services:",
          },
          {
            type: "links",
            items: [
              {
                label: "Google AdMob (Google LLC)",
                href: "https://policies.google.com/privacy",
                description: "Privacy Policy",
              },
              {
                label: "Google Ad Technology",
                href: "https://policies.google.com/technologies/ads",
                description: "Ad Technology",
              },
              {
                label: "Firebase (Google LLC)",
                href: "https://firebase.google.com/support/privacy",
                description: "Firebase Privacy & Security",
              },
            ],
          },
          {
            type: "paragraph",
            text:
              "Google may use cookies, identifiers, and similar technologies to provide advertising, analytics, and crash reporting services.",
          },
        ],
      },
      {
        title: "Personalized Ads and User Choices",
        content: [
          {
            type: "paragraph",
            text:
              "Depending on your region, you may be asked for consent to receive personalized ads.",
          },
          {
            type: "paragraph",
            text:
              "You can manage your advertising preferences through your Android device settings:",
          },
          {
            type: "steps",
            items: [
              "Settings -> Google -> Ads",
              "Reset Advertising ID",
              "Delete Advertising ID",
              "Opt out of Ads Personalization",
            ],
          },
          {
            type: "paragraph",
            text:
              "You may continue to see advertisements, but they may be less relevant to your interests.",
          },
        ],
      },
      {
        title: "Children's Privacy",
        content: [
          {
            type: "paragraph",
            text: "Urban Descent POV is suitable for users of all ages.",
          },
          {
            type: "paragraph",
            text: "We do not knowingly collect personal information from children.",
          },
          {
            type: "paragraph",
            text:
              "Google AdMob may serve non-personalized advertisements where required by applicable laws or platform policies. Firebase services are used to improve application stability and performance and are not intended to personally identify users.",
          },
          {
            type: "paragraph",
            text:
              "If you believe that a child has provided personal information through the application, please contact us so that we can take appropriate action.",
          },
        ],
      },
      {
        title: "Security",
        content: [
          {
            type: "paragraph",
            text: "We do not store user data on our own servers.",
          },
          {
            type: "paragraph",
            text:
              "Advertisement delivery, analytics, crash reporting, and related data processing are securely managed by Google through AdMob and Firebase under Google's privacy and security policies. We strive to provide a safe, secure, and reliable gaming experience for all players.",
          },
        ],
      },
      {
        title: "Changes to This Privacy Policy",
        content: [
          {
            type: "paragraph",
            text: "We may update this Privacy Policy from time to time.",
          },
          {
            type: "paragraph",
            text:
              "Any updates will be reflected on this page with an updated date. You are advised to review this page periodically for any changes.",
          },
        ],
      },
      {
        title: "Contact Us",
        content: [
          {
            type: "paragraph",
            text:
              "If you have any questions or concerns regarding this Privacy Policy, you can contact us:",
          },
          {
            type: "bullets",
            items: [
              "Email: support@eraflip.com",
              "Website: https://erafliptech.com",
              "Phone: +92 309 7770073",
              "Address: 428N, Johar Town, Lahore",
            ],
          },
        ],
      },
    ],
  },

  "summit-peak-offroad": createStandardPolicy({
    slug: "summit-peak-offroad",
    gameName: "Summit Peak Offroad",
    aboutGame:
      "Summit Peak Offroad is a realistic 3D off-road driving simulation game where players navigate powerful vehicles across rugged mountain trails, steep hills, rocky terrain, and challenging environments. Complete exciting missions, unlock new vehicles, overcome obstacles, and test your driving skills across a variety of off-road levels. The game is designed to provide an immersive and entertaining off-road driving experience for players of all ages.",
  }),

  "custom-diy-phone-case-maker": createStandardPolicy({
    slug: "custom-diy-phone-case-maker",
    gameName: "Custom DIY Phone Case Maker",
    aboutGame:
      "Custom DIY Phone Case Maker is a creative 3D simulation game where players design and customize unique phone cases using a wide variety of colors, paints, stickers, patterns, decorations, and artistic tools. Create personalized phone case designs, unlock new customization options, and express your creativity through endless design possibilities. The game is designed to provide a fun and relaxing creative experience for players of all ages.",
  }),

  "home-makeover-asmr-cleaning": createStandardPolicy({
    slug: "home-makeover-asmr-cleaning",
    gameName: "Home Makeover ASMR Cleaning",
    aboutGame:
      "Home Makeover ASMR Cleaning is a relaxing and satisfying home renovation simulation game where players clean, organize, repair, and decorate different rooms using a variety of cleaning tools and makeover items. Enjoy calming ASMR sound effects, transform messy spaces into beautiful homes, and complete rewarding makeover challenges. The game is designed to provide a peaceful and entertaining experience for players of all ages.",
  }),

  "bomb-chip-challenge-2-players": createStandardPolicy({
    slug: "bomb-chip-challenge-2-players",
    gameName: "Bomb Chip Challenge 2 Players",
    aboutGame:
      "Bomb Chip Challenge 2 Players is a fun and competitive multiplayer arcade game where players compete against each other in exciting bomb-based mini challenges. Play solo against AI or enjoy local two-player gameplay while avoiding hazards, collecting power-ups, and completing fast-paced levels. The game is designed to provide an entertaining and engaging multiplayer experience for players of all ages.",
  }),

  "high-school-teacher-life-games": createStandardPolicy({
    slug: "high-school-teacher-life-games",
    gameName: "High School Teacher Life Games",
    aboutGame:
      "High School Teacher Life Games is an immersive 3D school simulation game where players step into the role of a high school teacher and experience daily classroom activities, teach students, complete educational tasks, participate in school events, and manage various responsibilities throughout the school day. The game is designed to provide an entertaining and engaging virtual teaching experience for players of all ages.",
  }),

  "real-gun-sound-simulator": createStandardPolicy({
    slug: "real-gun-sound-simulator",
    gameName: "Real Gun Sound Simulator",
    aboutGame:
      "Real Gun Sound Simulator is an interactive 3D simulation game that lets players experience a wide variety of realistic firearm sound effects and visual animations in a safe virtual environment. Players can explore different weapon collections, switch between gun models, and enjoy immersive sound and visual effects designed purely for entertainment purposes.",
  }),

  "barber-haircut-shop": createStandardPolicy({
    slug: "barber-haircut-shop",
    gameName: "Barber Haircut Shop",
    aboutGame:
      "Barber Haircut Shop is a realistic 3D barber simulation game where players become professional barbers, create stylish haircuts, trim beards, and customize hairstyles using a variety of salon tools. Complete exciting makeover challenges, unlock new hairstyles, and satisfy customers as you build your reputation as the ultimate barber. The game is designed to provide a fun and creative salon experience for players of all ages.",
  }),

  "fireworks-simulator": createStandardPolicy({
    slug: "fireworks-simulator",
    gameName: "Fireworks Simulator",
    aboutGame:
      "Fireworks Simulator is an immersive 3D open-world simulation game where players can freely explore the environment and create spectacular fireworks displays using a wide variety of fireworks and visual effects. The game is designed to provide a relaxing and entertaining experience through realistic firework simulations and open-world exploration.",
  }),

  "flappy-sky-cloud-runner": createStandardPolicy({
    slug: "flappy-sky-cloud-runner",
    gameName: "Flappy Sky Cloud Runner",
    aboutGame:
      "Flappy Sky Cloud Runner is a fun and addictive 2D endless runner game where players control a flying character, avoid obstacles, collect power-ups, and travel through colorful environments. The game features simple one-tap controls, dynamic gameplay, and endless challenges designed for entertainment.",
  }),

  "jungle-fury": createStandardPolicy({
    slug: "jungle-fury",
    gameName: "Jungle Fury",
    aboutGame:
      "Jungle Fury is an exciting 2D platformer endless runner where players dash through vibrant jungle environments, avoid challenging obstacles, collect powerful upgrades, and survive for as long as possible. Featuring multiple environments, rewarding power-ups, and fast-paced gameplay, the game is designed to provide endless entertainment for players of all ages.",
  }),

  "jumpy-tails": createStandardPolicy({
    slug: "jumpy-tails",
    gameName: "Jumpy Tails",
    aboutGame:
      "Jumpy Tails is a fun and engaging 2D endless runner game where players choose from a variety of adorable animal characters, explore multiple colorful environments, collect exciting power-ups, and overcome challenging obstacles. The game offers fast-paced gameplay and endless adventure designed for players of all ages.",
  }),

  "basket-maze": createStandardPolicy({
    slug: "basket-maze",
    gameName: "Basket Maze",
    aboutGame:
      "Basket Maze is a fun and engaging 2D puzzle game where players guide basketballs through challenging maze-based levels by solving creative physics puzzles. With multiple ball types, progressively difficult levels, and rewarding gameplay mechanics, the game is designed to test problem-solving skills while providing an enjoyable experience for players of all ages.",
  }),

  "road-rush-traffic-jam-puzzle": createStandardPolicy({
    slug: "road-rush-traffic-jam-puzzle",
    gameName: "Road Rush: Traffic Jam Puzzle",
    aboutGame:
      "Road Rush: Traffic Jam Puzzle is an engaging 3D traffic puzzle game where players strategically move cars through congested roads, solve challenging traffic jams, and progress through increasingly difficult levels. With a variety of vehicles, exciting power-ups, and unique obstacles, the game is designed to provide a fun and rewarding puzzle-solving experience for players of all ages.",
  }),

  "brick-arrow-escape-puzzle": {
    ...createStandardPolicy({
      slug: "brick-arrow-escape-puzzle",
      gameName: "Brick Arrow: Escape Puzzle",
      aboutGame:
        "Brick Arrow: Escape Puzzle is a fun and challenging puzzle game where players strategically place directional arrows to guide a moving brick toward the finish point while avoiding obstacles and dead ends. Each level introduces new mechanics and increasingly complex layouts that test logical thinking, planning, and problem-solving skills. The game is designed to provide an engaging and entertaining puzzle-solving experience for players of all ages.",
      updatedAt: "20/07/2026",
      metaDescription:
        "Privacy Policy for Brick Arrow: Escape Puzzle by Eraflip Tech, including AdMob, Firebase, ad preferences, children's privacy, security, and contact details.",
    }),
    title: "Privacy Policy - Brick Arrow: Escape Puzzle",
    intro:
      "Eraflip Tech built Brick Arrow: Escape Puzzle as a free game for Android devices. This SERVICE is provided by Eraflip Tech at no cost and is intended for use as is.",
    sections: [
      {
        title: "About the Game",
        content: [
          {
            type: "paragraph",
            text:
              "Brick Arrow: Escape Puzzle is a fun and challenging puzzle game where players strategically place directional arrows to guide a moving brick toward the finish point while avoiding obstacles and dead ends. Each level introduces new mechanics and increasingly complex layouts that test logical thinking, planning, and problem-solving skills. The game is designed to provide an engaging and entertaining puzzle-solving experience for players of all ages.",
          },
        ],
      },
      {
        title: "Information Collection and Use",
        content: [
          {
            type: "paragraph",
            text: "We do not directly collect, store, or share any personal information from users.",
          },
          {
            type: "paragraph",
            text:
              "However, the game uses Google AdMob and Firebase, third-party services provided by Google, which may automatically collect certain information to provide advertisements, improve app performance, and maintain the quality of the game.",
          },
          {
            type: "bullets",
            items: [
              "Device type and model",
              "Operating system version",
              "Advertising ID (Google Advertising ID)",
              "IP address (approximate location)",
              "App interactions (ad views, clicks, impressions)",
              "Gameplay events and analytics",
              "Crash reports and performance diagnostics",
            ],
          },
          {
            type: "paragraph",
            text:
              "This information is collected by Google, not by Eraflip Tech, and may be used to show relevant advertisements, measure ad performance, improve app stability and performance, analyze gameplay trends, detect crashes and technical issues, and prevent fraud and abuse.",
          },
          {
            type: "paragraph",
            text: "Eraflip Tech does not have access to personally identifiable user data.",
          },
        ],
      },
      {
        title: "Third-Party Services",
        content: [
          {
            type: "paragraph",
            text: "The game uses the following third-party services:",
          },
          {
            type: "links",
            items: [
              {
                label: "Google AdMob (Google LLC)",
                href: "https://policies.google.com/privacy",
                description: "Privacy Policy",
              },
              {
                label: "Google Ad Technology",
                href: "https://policies.google.com/technologies/ads",
                description: "Ad Technology",
              },
              {
                label: "Firebase (Google LLC)",
                href: "https://firebase.google.com/support/privacy",
                description: "Firebase Privacy & Security",
              },
            ],
          },
          {
            type: "paragraph",
            text:
              "Google may use cookies, identifiers, and similar technologies to provide advertising, analytics, and crash reporting services.",
          },
        ],
      },
      {
        title: "Personalized Ads & User Choices",
        content: [
          {
            type: "paragraph",
            text:
              "Depending on your region, you may be asked for consent to receive personalized ads.",
          },
          {
            type: "paragraph",
            text:
              "You can manage your advertising preferences through your Android device settings:",
          },
          {
            type: "steps",
            items: [
              "Settings -> Google -> Ads",
              "Reset Advertising ID",
              "Delete Advertising ID",
              "Opt out of Ads Personalization",
            ],
          },
          {
            type: "paragraph",
            text:
              "You may continue to see advertisements, but they may be less relevant to your interests.",
          },
        ],
      },
      {
        title: "Children's Privacy",
        content: [
          {
            type: "paragraph",
            text: "Brick Arrow: Escape Puzzle is suitable for users of all ages.",
          },
          {
            type: "paragraph",
            text: "We do not knowingly collect personal information from children.",
          },
          {
            type: "paragraph",
            text:
              "Google AdMob may serve non-personalized advertisements where required by applicable laws or platform policies. Firebase services are used to improve application stability and performance and are not intended to personally identify users.",
          },
          {
            type: "paragraph",
            text:
              "If you believe that a child has provided personal information through the application, please contact us so that we can take appropriate action.",
          },
        ],
      },
      {
        title: "Security",
        content: [
          {
            type: "paragraph",
            text: "We do not store user data on our own servers.",
          },
          {
            type: "paragraph",
            text:
              "Advertisement delivery, analytics, crash reporting, and related data processing are securely managed by Google through AdMob and Firebase under Google's privacy and security policies. We strive to provide a safe, secure, and reliable gaming experience for all players.",
          },
        ],
      },
      {
        title: "Changes to This Privacy Policy",
        content: [
          {
            type: "paragraph",
            text: "We may update this Privacy Policy from time to time.",
          },
          {
            type: "paragraph",
            text:
              "Any updates will be reflected on this page with an updated date. You are advised to review this page periodically for any changes.",
          },
        ],
      },
      {
        title: "Contact Us",
        content: [
          {
            type: "paragraph",
            text:
              "If you have any questions or concerns regarding this Privacy Policy, you can contact us:",
          },
          {
            type: "bullets",
            items: [
              "Email: support@eraflip.com",
              "Website: https://erafliptech.com",
              "Phone: +92 309 7770073",
              "Address: 428N, Johar Town, Lahore, Pakistan",
            ],
          },
        ],
      },
    ],
  },

  "speed-asmr-keyboard-escape": createStandardPolicy({
    slug: "speed-asmr-keyboard-escape",
    gameName: "Speed ASMR Keyboard Escape",
    aboutGame:
      "Speed ASMR Keyboard Escape is a fast-paced, oddly satisfying runner game where players race across giant candy and chocolate-themed keyboards, collecting speed boosts to escape obstacles. With smooth ASMR-style visuals and sound effects, the game is designed to provide a relaxing yet exciting pick-up-and-play experience for players of all ages.",
    updatedAt: "29/07/2026",
    metaDescription:
      "Privacy Policy for Speed ASMR Keyboard Escape by Eraflip Tech, including AdMob, Firebase, ad preferences, children's privacy, security, and contact details.",
  }),

  "rest-stop-tycoon": createStandardPolicy({
    slug: "rest-stop-tycoon",
    gameName: "Rest Stop Tycoon",
    aboutGame:
      "Rest Stop Tycoon is a fun and addictive idle tycoon game where players build and manage their own roadside rest stop business. Players construct shops, attract a steady stream of customers, sell items to increase average customer spend, and use the rebirth system to grow their business faster. The game is designed to provide an engaging business simulation experience for players of all ages.",
    updatedAt: "29/07/2026",
    metaDescription:
      "Privacy Policy for Rest Stop Tycoon by Eraflip Tech, including AdMob, Firebase, ad preferences, children's privacy, security, and contact details.",
  }),

  "paint-flags": createStandardPolicy({
    slug: "paint-flags",
    gameName: "Paint Flags",
    aboutGame:
      "Paint Flags is a relaxing and educational coloring game where players paint the flags of over 200 countries, regions, and territories, including all 193 officially recognized UN member states. Players can display their completed flags around the game's base. The game is designed to provide a calming and informative experience for players of all ages.",
    updatedAt: "29/07/2026",
    metaDescription:
      "Privacy Policy for Paint Flags by Eraflip Tech, including AdMob, Firebase, ad preferences, children's privacy, security, and contact details.",
  }),
};

export const privacyPolicyList = Object.values(privacyPolicies).sort((a, b) =>
  a.gameName.localeCompare(b.gameName)
);

export function getPrivacyPolicy(slug) {
  return privacyPolicies[slug] ?? null;
}
