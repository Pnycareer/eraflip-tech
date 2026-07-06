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
      email: "support@eraflip.com",
      website: "https://erafliptech.com",
      phone: "+92 309 7770073",
      addressLines: ["428N, Johar Town, Lahore"],
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
            text:
              "We do not directly collect, store, or share any personal information from users.",
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
            text:
              "We do not knowingly collect personal information from children.",
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
            text:
              "We may update this Privacy Policy from time to time.",
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
};

export const privacyPolicyList = Object.values(privacyPolicies).sort((a, b) =>
  a.gameName.localeCompare(b.gameName)
);

export function getPrivacyPolicy(slug) {
  return privacyPolicies[slug] ?? null;
}
