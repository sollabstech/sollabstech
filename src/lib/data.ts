export const softwareServices = [
  {
    id: 1,
    icon: "📱",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps built with Flutter & React Native for iOS and Android.",
    tech: ["Flutter", "React Native", "Firebase", "Dart"],
  },
  {
    id: 2,
    icon: "🌐",
    title: "Website Development",
    description: "Modern, fast websites and web apps built with Next.js, React, and cutting-edge technologies.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    icon: "🛒",
    title: "E-commerce Development",
    description: "Feature-rich online stores with payment integration, inventory management, and analytics.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Node.js"],
  },
  {
    id: 4,
    icon: "⚙️",
    title: "Custom Business Software",
    description: "Tailored ERP, CRM, and business automation solutions that streamline your operations.",
    tech: ["Node.js", "PostgreSQL", "React", "Docker"],
  },
  {
    id: 5,
    icon: "🖥️",
    title: "Admin Panels & Dashboards",
    description: "Powerful admin dashboards with real-time analytics, data visualization, and user management.",
    tech: ["React", "Chart.js", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    icon: "🔌",
    title: "API Development",
    description: "RESTful and GraphQL APIs built for scale, with comprehensive documentation and testing.",
    tech: ["Node.js", "Express", "GraphQL", "PostgreSQL"],
  },
  {
    id: 7,
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with a deep focus on user experience and conversion.",
    tech: ["Figma", "Adobe XD", "Framer", "Tailwind CSS"],
  },
  {
    id: 8,
    icon: "🤖",
    title: "AI Integration",
    description: "Integrate AI capabilities—chatbots, recommendations, automation—into your existing systems.",
    tech: ["OpenAI", "LangChain", "Python", "TensorFlow"],
  },
  {
    id: 9,
    icon: "☁️",
    title: "Cloud Deployment",
    description: "Reliable cloud deployment on AWS, Vercel, or GCP with CI/CD pipelines and monitoring.",
    tech: ["AWS", "Vercel", "Docker", "GitHub Actions"],
  },
  {
    id: 10,
    icon: "🛠️",
    title: "Maintenance & Support",
    description: "Ongoing maintenance, bug fixes, security updates, and 24/7 technical support.",
    tech: ["All Platforms", "Monitoring", "Security", "Updates"],
  },
];

export const techStack = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "Express", color: "#ffffff" },
  { name: "Flutter", color: "#54C5F8" },
  { name: "Firebase", color: "#FFA000" },
  { name: "MongoDB", color: "#4DB33D" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Vercel", color: "#ffffff" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "TypeScript", color: "#3178C6" },
];

export const portfolioProjects: {
  id: number; title: string; category: string; image: string;
  tech: string[]; client: string; description: string; liveUrl: string;
}[] = [];

export const computerProducts: {
  id: number; name: string; category: string;
  specs: { cpu: string; ram: string; storage: string; gpu: string; display: string };
  condition: string; warranty: string; price: number; available: boolean; image: string;
}[] = [];

export const reviews: {
  id: number; name: string; city: string; type: string; rating: number;
  review: string; project?: string; product?: string; avatar: string;
}[] = [];

export const warrantyRecords: Record<string, {
  serialNumber: string;
  laptopName: string;
  laptopModel: string;
  brand: string;
  brandEmoji: string;
  specs: string;
  purchaseDate: string;
  warrantyMonths: number;
  warrantyEndDate: string;
  clientName: string;
  clientCity: string;
  clientAvatar: string;
  clientInitials: string;
  saleVideoId: string;
  stickerColor: string;
}> = {
  "197979": {
    serialNumber: "197979",
    laptopName: "Asus TUF Gaming F15",
    laptopModel: "FX506LH-HN258W",
    brand: "Asus",
    brandEmoji: "🎮",
    specs: "Intel i5-10300H · 8GB DDR4 · 512GB SSD · GTX 1650 · 15.6\" FHD 144Hz",
    purchaseDate: "2026-01-15",
    warrantyMonths: 12,
    warrantyEndDate: "2027-01-15",
    clientName: "Arjun Mehta",
    clientCity: "Mumbai",
    clientAvatar: "",
    clientInitials: "AM",
    saleVideoId: "49x5rfxmv4E",
    stickerColor: "#0066FF",
  },
  "205610": {
    serialNumber: "205610",
    laptopName: "Dell XPS 15",
    laptopModel: "9500-D769",
    brand: "Dell",
    brandEmoji: "💻",
    specs: "Intel i7-12th Gen · 16GB DDR5 · 512GB NVMe · RTX 3060 · 15.6\" FHD",
    purchaseDate: "2025-10-01",
    warrantyMonths: 6,
    warrantyEndDate: "2026-04-01",
    clientName: "Sneha Patel",
    clientCity: "Ahmedabad",
    clientAvatar: "",
    clientInitials: "SP",
    saleVideoId: "49x5rfxmv4E",
    stickerColor: "#00AAFF",
  },
  "312244": {
    serialNumber: "312244",
    laptopName: "HP Pavilion 14",
    laptopModel: "14-dv2029TU",
    brand: "HP",
    brandEmoji: "🖥️",
    specs: "Intel i5-11th Gen · 8GB DDR4 · 256GB SSD · Intel Iris Xe · 14\" FHD",
    purchaseDate: "2026-04-10",
    warrantyMonths: 3,
    warrantyEndDate: "2026-07-10",
    clientName: "Rahul Singh",
    clientCity: "Delhi",
    clientAvatar: "",
    clientInitials: "RS",
    saleVideoId: "49x5rfxmv4E",
    stickerColor: "#7C3AED",
  },
};

export type ProjectStatus = "planning" | "development" | "testing" | "delivered" | "maintenance";

export const projectRecords: Record<string, {
  projectId: string;
  projectName: string;
  projectType: string;
  typeEmoji: string;
  platform: string;
  stack: string;
  clientName: string;
  clientCity: string;
  clientInitials: string;
  startDate: string;
  deliveryDate: string;
  status: ProjectStatus;
  progress: number;
  currentMilestone: string;
  demoVideoId: string;
  accentColor: string;
  features: string[];
}> = {
  "PRJ001": {
    projectId: "PRJ001",
    projectName: "HealthSync Mobile App",
    projectType: "Mobile App",
    typeEmoji: "📱",
    platform: "iOS + Android",
    stack: "Flutter · Firebase · Node.js",
    clientName: "Priya Mehta",
    clientCity: "Bangalore",
    clientInitials: "PM",
    startDate: "2026-01-10",
    deliveryDate: "2026-03-15",
    status: "delivered",
    progress: 100,
    currentMilestone: "Live on Play Store & App Store",
    demoVideoId: "49x5rfxmv4E",
    accentColor: "#00AAFF",
    features: ["Appointment booking", "Teleconsultation", "Health records", "Push notifications"],
  },
  "PRJ002": {
    projectId: "PRJ002",
    projectName: "ShopEase E-commerce Platform",
    projectType: "Website",
    typeEmoji: "🌐",
    platform: "Web (Next.js)",
    stack: "Next.js · Node.js · PostgreSQL · Stripe",
    clientName: "Rahul Sharma",
    clientCity: "Mumbai",
    clientInitials: "RS",
    startDate: "2026-04-01",
    deliveryDate: "2026-07-31",
    status: "development",
    progress: 65,
    currentMilestone: "Frontend complete · Backend API in progress",
    demoVideoId: "49x5rfxmv4E",
    accentColor: "#0066FF",
    features: ["Product catalog", "Cart & checkout", "Payment gateway", "Admin dashboard"],
  },
  "PRJ003": {
    projectId: "PRJ003",
    projectName: "StockPro Inventory System",
    projectType: "Windows Software",
    typeEmoji: "🖥️",
    platform: "Windows Desktop",
    stack: "Electron · React · SQLite",
    clientName: "Vikash Singh",
    clientCity: "Delhi",
    clientInitials: "VS",
    startDate: "2026-05-15",
    deliveryDate: "2026-08-30",
    status: "testing",
    progress: 82,
    currentMilestone: "Beta testing with client team",
    demoVideoId: "49x5rfxmv4E",
    accentColor: "#7C3AED",
    features: ["Stock management", "Purchase orders", "Sales reports", "Barcode scanner"],
  },
  "PRJ004": {
    projectId: "PRJ004",
    projectName: "FleetPro CRM System",
    projectType: "Custom Software",
    typeEmoji: "⚙️",
    platform: "Web + Mobile",
    stack: "React · Node.js · MongoDB · Flutter",
    clientName: "Anjali Nair",
    clientCity: "Pune",
    clientInitials: "AN",
    startDate: "2026-06-01",
    deliveryDate: "2026-09-30",
    status: "planning",
    progress: 20,
    currentMilestone: "UI/UX wireframes approved · Development starting",
    demoVideoId: "49x5rfxmv4E",
    accentColor: "#F59E0B",
    features: ["Client management", "Task tracking", "Invoice generation", "Team collaboration"],
  },
};

export const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "500+", label: "Laptops Sold" },
  { value: "5★", label: "Average Rating" },
];
