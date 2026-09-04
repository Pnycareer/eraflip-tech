// Dynamic game data array — swap this for an API/CMS call once the backend is ready.

// Barber Game
import Barber1 from "../../../assets/Barber Game Screenshots WEBP/1.webp";
import Barber2 from "../../../assets/Barber Game Screenshots WEBP/2.webp";
import Barber3 from "../../../assets/Barber Game Screenshots WEBP/3.webp";
import Barber4 from "../../../assets/Barber Game Screenshots WEBP/4.webp";
import Barber5 from "../../../assets/Barber Game Screenshots WEBP/5.webp";
import Barber6 from "../../../assets/Barber Game Screenshots WEBP/6.webp";
import Barber7 from "../../../assets/Barber Game Screenshots WEBP/7.webp";

// Custom DIY Phone Case Maker
import Phone1 from "../../../assets/Custom DIY Phone Case Maker WEBP/01.webp";
import Phone2 from "../../../assets/Custom DIY Phone Case Maker WEBP/02.webp";
import Phone3 from "../../../assets/Custom DIY Phone Case Maker WEBP/03.webp";
import Phone4 from "../../../assets/Custom DIY Phone Case Maker WEBP/04.webp";
import Phone5 from "../../../assets/Custom DIY Phone Case Maker WEBP/06.webp";
import Phone6 from "../../../assets/Custom DIY Phone Case Maker WEBP/10.webp";

// Fireworks Simulator
import Fireworks1 from "../../../assets/Fireworks Simulator WEBP/SS1.webp";
import Fireworks2 from "../../../assets/Fireworks Simulator WEBP/SS2 (3).webp";
import Fireworks3 from "../../../assets/Fireworks Simulator WEBP/SS3 (2).webp";

// Flappy Cloudy
import Flappy1 from "../../../assets/Flappy Cloudy Screen Shot/Flappy-Cloudy-take-1.webp";
import Flappy2 from "../../../assets/Flappy Cloudy Screen Shot/Flappy-Cloudy-take-2.webp";
import Flappy3 from "../../../assets/Flappy Cloudy Screen Shot/Flappy-Cloudy-Take-3.webp";
import Flappy4 from "../../../assets/Flappy Cloudy Screen Shot/Flappy-Cloudy-Take-4.webp";
import Flappy5 from "../../../assets/Flappy Cloudy Screen Shot/Flappy-Cloudy-Take-5.webp";
import Flappy6 from "../../../assets/Flappy Cloudy Screen Shot/Flappy-Cloudy-Take-6.webp";
import Flappy7 from "../../../assets/Flappy Cloudy Screen Shot/Flappy-Cloudy-Take-7.webp";
import Flappy8 from "../../../assets/Flappy Cloudy Screen Shot/Flappy-Cloudy-Take-8.webp";

// Home Makeover ASMR Cleaning
import Home1 from "../../../assets/Home Makeover ASMR Cleaning WEBP/1.webp";
import Home2 from "../../../assets/Home Makeover ASMR Cleaning WEBP/2.webp";
import Home3 from "../../../assets/Home Makeover ASMR Cleaning WEBP/3.webp";
import Home4 from "../../../assets/Home Makeover ASMR Cleaning WEBP/4.webp";
import Home5 from "../../../assets/Home Makeover ASMR Cleaning WEBP/5.webp";

// Jungle Fury
import Jungle1 from "../../../assets/Jungle Fury WEBP/SS1.webp";
import Jungle2 from "../../../assets/Jungle Fury WEBP/SS2.webp";
import Jungle3 from "../../../assets/Jungle Fury WEBP/SS3.webp";
import Jungle4 from "../../../assets/Jungle Fury WEBP/SS4.webp";
import Jungle5 from "../../../assets/Jungle Fury WEBP/SS5.webp";
import Jungle6 from "../../../assets/Jungle Fury WEBP/SS6.webp";
import Jungle7 from "../../../assets/Jungle Fury WEBP/SS7.webp";

// MTB Downhill Bike Race
import Mtb1 from "../../../assets/MTB Downhill Bike Race WEBP/SS 1.webp";
import Mtb2 from "../../../assets/MTB Downhill Bike Race WEBP/SS 2.webp";
import Mtb3 from "../../../assets/MTB Downhill Bike Race WEBP/SS 3.webp";
import Mtb4 from "../../../assets/MTB Downhill Bike Race WEBP/SS 4.webp";
import Mtb5 from "../../../assets/MTB Downhill Bike Race WEBP/SS 5.webp";

// Real Gun Simulator
import Gun1 from "../../../assets/Real Gun Simulator WEBP/1.webp";
import Gun2 from "../../../assets/Real Gun Simulator WEBP/2.webp";
import Gun3 from "../../../assets/Real Gun Simulator WEBP/3.webp";
import Gun4 from "../../../assets/Real Gun Simulator WEBP/4.webp";
import Gun5 from "../../../assets/Real Gun Simulator WEBP/5.webp";

// Road Rush Traffic Jam Puzzle
import Road1 from "../../../assets/Road Rush Traffic Jam Puzzle WEBP/SS1.webp";
import Road2 from "../../../assets/Road Rush Traffic Jam Puzzle WEBP/SS2.webp";
import Road3 from "../../../assets/Road Rush Traffic Jam Puzzle WEBP/SS3.webp";
import Road4 from "../../../assets/Road Rush Traffic Jam Puzzle WEBP/SS4.webp";
import Road5 from "../../../assets/Road Rush Traffic Jam Puzzle WEBP/SS5.webp";

// Summit Peak
import Summit1 from "../../../assets/Summit Peak WEBP/1.webp";
import Summit2 from "../../../assets/Summit Peak WEBP/2.webp";
import Summit3 from "../../../assets/Summit Peak WEBP/3.webp";
import Summit4 from "../../../assets/Summit Peak WEBP/4.webp";

// Teacher Simulator
import Teacher1 from "../../../assets/Teacher Simulator WEBP/1.webp";
import Teacher2 from "../../../assets/Teacher Simulator WEBP/2.webp";
import Teacher3 from "../../../assets/Teacher Simulator WEBP/3.webp";
import Teacher4 from "../../../assets/Teacher Simulator WEBP/4.webp";

export const categories = ["All Games", "Action", "Racing", "RPG", "Adventure", "Multiplayer", "Mobile"];

export const games = [
  {
    id: 1,
    slug: "barber-shop-simulator",
    playStore: "https://play.google.com/store/apps/details?id=com.EraFlip.BarberHaircutShop",
    title: "Barber Shop Simulator",
    genre: "Simulation",
    categories: ["Adventure", "Mobile"],
    screenshots: [Barber1, Barber2, Barber3, Barber4, Barber5, Barber6, Barber7],
    description: "Run your own barber shop — cut, shave, style and satisfy a stream of quirky customers in this relaxing, satisfying simulation game.",
    features: ["Realistic Styling Tools", "Customer Progression", "Shop Upgrades", "Relaxing Gameplay"],
    platforms: ["Mobile"],
    tech: ["Unity", "C++"],
    status: "Live",
    rating: 4.6,
    downloads: "10K+",
  },
  {
    id: 2,
    slug: "custom-diy-phone-case-maker",
    playStore: "https://play.google.com/store/apps/details?id=com.EraFlip.CustomDIYPhoneCaseMaker",
    title: "Custom DIY Phone Case Maker",
    genre: "Casual Creation",
    categories: ["Adventure", "Mobile"],
    screenshots: [Phone1, Phone2, Phone3, Phone4, Phone5, Phone6],
    description: "Design and craft your own phone cases with endless colors, stickers and charms in this creative, ASMR-inspired casual experience.",
    features: ["Endless Customization", "ASMR Sound Design", "Sticker & Charm Packs", "Satisfying Crafting Loop"],
    platforms: ["Mobile"],
    tech: ["Unity"],
    status: "Live",
    rating: 4.5,
    downloads: "8K+",
  },
  {
    id: 3,
    slug: "fireworks-simulator-2025",
    playStore: "https://play.google.com/store/apps/details?id=com.EraFlip.FireworkSimulator2025",
    title: "Fireworks Simulator 2025",
    genre: "Simulation",
    categories: ["Action", "Mobile"],
    screenshots: [Fireworks1, Fireworks2, Fireworks3],
    description: "Design your dream Diwali or New Year show with stunning 3D fireworks, explosive ASMR sound design and an open-world city to light up.",
    features: ["Open World", "Explosive FX", "Festival Fun", "Realistic Physics"],
    platforms: ["Mobile"],
    tech: ["Unity", "C++"],
    status: "Live",
    rating: 4.9,
    downloads: "30K+",
  },
  {
    id: 4,
    slug: "flappy-sky-cloud-runner",
    playStore: "https://play.google.com/store/apps/details?id=com.EraFlip.FlappyCloudy",
    title: "Flappy Sky Cloud Runner",
    genre: "Endless Runner",
    categories: ["Adventure", "Mobile"],
    screenshots: [Flappy1, Flappy2, Flappy3, Flappy4, Flappy5, Flappy6, Flappy7, Flappy8],
    description: "Tap to fly through a dynamic sky, dodge birds and unlock adorable cloud skins in this addictive one-more-try runner.",
    features: ["Tap-to-Fly", "Unlockable Skins", "Dynamic Weather", "Endless Fun"],
    platforms: ["Mobile"],
    tech: ["Unity", "C++"],
    status: "Live",
    rating: 4.6,
    downloads: "5K+",
  },
  {
    id: 5,
    slug: "home-makeover-asmr-cleaning",
    playStore: "https://play.google.com/store/apps/details?id=com.Eraflip.HomeMakeoverASMRCleaning",
    title: "Home Makeover ASMR Cleaning",
    genre: "Simulation",
    categories: ["Adventure", "Mobile"],
    screenshots: [Home1, Home2, Home3, Home4, Home5],
    description: "Restore messy, cluttered rooms to spotless perfection with soothing ASMR cleaning sounds and satisfying before-and-after makeovers.",
    features: ["ASMR Sound Design", "Room Makeovers", "Relaxing Gameplay", "Progressive Levels"],
    platforms: ["Mobile"],
    tech: ["Unity"],
    status: "Live",
    rating: 4.7,
    downloads: "12K+",
  },
  {
    id: 6,
    slug: "jungle-fury",
    playStore: "https://play.google.com/store/apps/details?id=com.eraflip.junglefury",
    title: "Jungle Fury",
    genre: "2D Platformer",
    categories: ["Action", "Adventure", "Mobile"],
    screenshots: [Jungle1, Jungle2, Jungle3, Jungle4, Jungle5, Jungle6, Jungle7],
    description: "Escape an erupting volcano — climb ancient totems, dodge falling rocks and outrun rising lava in this vertical platformer.",
    features: ["Vertical Climber", "Lava Escape", "Reflex Test", "50+ Levels"],
    platforms: ["Mobile"],
    tech: ["Unity"],
    status: "Live",
    rating: 4.7,
    downloads: "10K+",
  },
  {
    id: 7,
    slug: "mtb-downhill-bike-race",
    playStore: "https://play.google.com/store/apps/details?id=com.Eraflip.UrbanDescentPOV",
    title: "MTB Downhill Bike Race",
    genre: "Racing",
    categories: ["Racing", "Mobile"],
    screenshots: [Mtb1, Mtb2, Mtb3, Mtb4, Mtb5],
    description: "Bomb down rugged mountain trails at breakneck speed — master jumps, tight corners and realistic bike physics across scenic downhill tracks.",
    features: ["Realistic Bike Physics", "Scenic Trails", "Trick System", "Time Trials"],
    platforms: ["Mobile", "PC"],
    tech: ["Unity", "C++"],
    status: "Live",
    rating: 4.6,
    downloads: "7K+",
  },
  {
    id: 8,
    slug: "real-gun-sound-simulator",
    playStore: "https://play.google.com/store/apps/details?id=com.EraFlip.RealGunSoundSimulator",
    title: "Real Gun Sound Simulator",
    genre: "Simulation",
    categories: ["Action", "Mobile"],
    screenshots: [Gun1, Gun2, Gun3, Gun4, Gun5],
    description: "Explore a realistic arsenal of firearms with authentic sound design, detailed 3D models and interactive customization.",
    features: ["Authentic Sound FX", "Detailed 3D Models", "Weapon Customization", "Interactive Range"],
    platforms: ["Mobile"],
    tech: ["Unity"],
    status: "Live",
    rating: 4.5,
    downloads: "15K+",
  },
  {
    id: 9,
    slug: "road-rush-traffic-jam-puzzle",
    playStore: "https://play.google.com/store/apps/details?id=com.EraFlip.BusEscapeParkingJamGame",
    title: "Road Rush: Traffic Jam Puzzle",
    genre: "Puzzle",
    categories: ["RPG", "Mobile"],
    screenshots: [Road1, Road2, Road3, Road4, Road5],
    description: "Untangle gridlocked traffic jams by sliding cars and trucks out of the way in this brain-teasing puzzle adventure with hundreds of levels.",
    features: ["Brain-Teasing Puzzles", "Hundreds of Levels", "Vehicle Variety", "Progressive Difficulty"],
    platforms: ["Mobile"],
    tech: ["Unity"],
    status: "Live",
    rating: 4.6,
    downloads: "9K+",
  },
  {
    id: 10,
    slug: "summit-peak",
    playStore: "https://play.google.com/store/apps/details?id=com.Eraflip.SummitPeakOffroad",
    title: "Summit Peak",
    genre: "Adventure",
    categories: ["Adventure", "Mobile"],
    screenshots: [Summit1, Summit2, Summit3, Summit4],
    description: "Climb treacherous mountain peaks, manage stamina and equipment, and conquer breathtaking summits in this atmospheric climbing adventure.",
    features: ["Atmospheric Visuals", "Stamina Management", "Gear Progression", "Breathtaking Vistas"],
    platforms: ["Mobile", "PC"],
    tech: ["Unity"],
    status: "Live",
    rating: 4.7,
    downloads: "6K+",
  },
  {
    id: 11,
    slug: "teacher-simulator",
    playStore: "https://play.google.com/store/apps/details?id=com.EraFlip.HighSchoolTeacherLifeGames",
    title: "Teacher Simulator",
    genre: "Simulation",
    categories: ["Adventure", "Mobile"],
    screenshots: [Teacher1, Teacher2, Teacher3, Teacher4],
    description: "Step into the classroom, manage mischievous students, teach lessons and keep order in this funny and chaotic simulation game.",
    features: ["Classroom Management", "Quirky Characters", "Mini-Games", "Comedic Scenarios"],
    platforms: ["Mobile"],
    tech: ["Unity"],
    status: "Live",
    rating: 4.5,
    downloads: "11K+",
  },
];

export const pipeline = [
  { title: "Concept", desc: "Ideation, market research and core game-loop design." },
  { title: "Design", desc: "Level design, art direction and character concepts." },
  { title: "Development", desc: "Engine setup, systems programming and asset integration." },
  { title: "Multiplayer", desc: "Netcode, matchmaking and live-service infrastructure." },
  { title: "Testing", desc: "QA passes, performance profiling and device compatibility." },
  { title: "Launch", desc: "Store submission, marketing rollout and post-launch support." },
];

export const stats = [
  { label: "Games Created", value: 50, suffix: "+" },
  { label: "Downloads", value: 10, suffix: "M+" },
  { label: "Countries", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 100, suffix: "+" },
];

export const getGameBySlug = (slug) => games.find((g) => g.slug === slug);
