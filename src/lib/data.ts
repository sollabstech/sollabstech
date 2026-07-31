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

export const portfolioProjects = [
  {
    id: 1,
    title: "ShopEase E-commerce Platform",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=420&fit=crop&q=80&auto=format",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    client: "RetailCo India",
    description: "Full-featured e-commerce with 10k+ products, custom CMS, and integrated payment gateway.",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "FleetPro CRM System",
    category: "CRM",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=420&fit=crop&q=80&auto=format",
    tech: ["React", "Node.js", "MongoDB"],
    client: "LogiTrack Solutions",
    description: "Customer relationship management system for a logistics company managing 500+ clients.",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "HealthSync Mobile App",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&h=420&fit=crop&q=80&auto=format",
    tech: ["Flutter", "Firebase", "Node.js"],
    client: "HealthFirst Clinic",
    description: "Patient management app with appointment booking, teleconsultation, and health records.",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=420&fit=crop&q=80&auto=format",
    tech: ["React", "Chart.js", "PostgreSQL"],
    client: "DataViz Corp",
    description: "Real-time analytics dashboard with 50+ chart types and automated reporting.",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "EduLearn Platform",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&h=420&fit=crop&q=80&auto=format",
    tech: ["Next.js", "MongoDB", "Stripe"],
    client: "EduTech India",
    description: "Online learning platform with video streaming, quizzes, and certificate generation.",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "SmartBot AI Assistant",
    category: "AI Projects",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&h=420&fit=crop&q=80&auto=format",
    tech: ["Python", "OpenAI", "React"],
    client: "TechStart Mumbai",
    description: "AI-powered customer support bot with NLP, context memory, and CRM integration.",
    liveUrl: "#",
  },
];

export const computerProducts = [
  {
    id: 1,
    name: "Dell XPS 15 Gaming Beast",
    category: "Gaming Laptops",
    specs: { cpu: "Intel i7-12th Gen", ram: "16GB DDR5", storage: "512GB SSD", gpu: "RTX 3060", display: "15.6\" FHD 144Hz" },
    condition: "Excellent",
    warranty: "6 Months",
    price: 65000,
    available: true,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=700&h=420&fit=crop&q=80&auto=format",
  },
  {
    id: 2,
    name: "HP Pavilion Business Pro",
    category: "Business Laptops",
    specs: { cpu: "Intel i5-11th Gen", ram: "8GB DDR4", storage: "256GB SSD", gpu: "Intel Iris Xe", display: "14\" FHD IPS" },
    condition: "Good",
    warranty: "3 Months",
    price: 32000,
    available: true,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&h=420&fit=crop&q=80&auto=format",
  },
  {
    id: 3,
    name: "Lenovo IdeaPad Student",
    category: "Student Laptops",
    specs: { cpu: "AMD Ryzen 5 5500U", ram: "8GB DDR4", storage: "512GB SSD", gpu: "AMD Radeon", display: "15.6\" FHD" },
    condition: "Good",
    warranty: "3 Months",
    price: 28000,
    available: true,
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=700&h=420&fit=crop&q=80&auto=format",
  },
  {
    id: 4,
    name: "Custom Gaming PC – The Titan",
    category: "Custom PCs",
    specs: { cpu: "Intel i9-13th Gen", ram: "32GB DDR5", storage: "1TB NVMe", gpu: "RTX 4070", display: "N/A (Tower)" },
    condition: "Brand New",
    warranty: "1 Year",
    price: 120000,
    available: true,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=700&h=420&fit=crop&q=80&auto=format",
  },
  {
    id: 5,
    name: "Apple MacBook Pro M2",
    category: "Workstations",
    specs: { cpu: "Apple M2 Pro", ram: "16GB Unified", storage: "512GB SSD", gpu: "19-core GPU", display: "14\" Liquid Retina XDR" },
    condition: "Excellent",
    warranty: "6 Months",
    price: 115000,
    available: false,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&h=420&fit=crop&q=80&auto=format",
  },
  {
    id: 6,
    name: "Asus ROG Strix G15",
    category: "Gaming Laptops",
    specs: { cpu: "AMD Ryzen 9 6900HX", ram: "16GB DDR5", storage: "1TB SSD", gpu: "RX 6700M", display: "15.6\" FHD 300Hz" },
    condition: "Excellent",
    warranty: "6 Months",
    price: 72000,
    available: true,
    image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=700&h=420&fit=crop&q=80&auto=format",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Mumbai",
    type: "software",
    rating: 5,
    review: "Sollabs Tech built our e-commerce platform in just 6 weeks. The quality exceeded our expectations and their support is outstanding.",
    project: "E-commerce Platform",
    avatar: "RS",
  },
  {
    id: 2,
    name: "Priya Mehta",
    city: "Bangalore",
    type: "software",
    rating: 5,
    review: "Our mobile app got 10k downloads in the first month. Sollabs Tech's Flutter expertise is truly world-class.",
    project: "HealthSync Mobile App",
    avatar: "PM",
  },
  {
    id: 3,
    name: "Arun Kumar",
    city: "Chennai",
    type: "laptop",
    rating: 5,
    review: "Got my Dell XPS in perfect condition. Came with warranty and was exactly as described. Super fast delivery to Chennai!",
    product: "Dell XPS 15",
    avatar: "AK",
  },
  {
    id: 4,
    name: "Sneha Patel",
    city: "Ahmedabad",
    type: "laptop",
    rating: 5,
    review: "Bought a custom gaming PC and I'm blown away by the build quality. Best value for money in Gujarat!",
    product: "Custom Gaming PC",
    avatar: "SP",
  },
  {
    id: 5,
    name: "Vikash Singh",
    city: "Delhi",
    type: "software",
    rating: 5,
    review: "The CRM system they built has automated 70% of our manual work. Absolutely transformed our business operations.",
    project: "FleetPro CRM",
    avatar: "VS",
  },
  {
    id: 6,
    name: "Anjali Nair",
    city: "Pune",
    type: "laptop",
    rating: 5,
    review: "Excellent student laptop at an unbeatable price. The team helped me choose the right specs for my needs.",
    product: "Lenovo IdeaPad",
    avatar: "AN",
  },
];

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
