import {
  FaSeedling,
  FaRecycle,
  FaTree,
  FaBullhorn,
  FaChalkboardTeacher,
  FaFlask,
} from "react-icons/fa";
import {
  PiPlantFill,
  PiBinocularsFill,
} from "react-icons/pi";

export const programs = [
  {
    icon: FaTree,
    title: "Tree Plantation & Urban Forestry",
    text: "Partnering with the Bruhat Bengaluru civic body on large-scale sapling drives — including a Kempegowda Jayanti push that joined BDA's bid for a Guinness World Record of 1.5 million saplings across the city in a single day.",
  },
  {
    icon: FaRecycle,
    title: "Waste Management & Circular Economy",
    text: "Piloting Kasa @ Source with apartment communities in Bengaluru West to fix waste segregation at the doorstep, alongside public education on moving from a linear take-make-waste model to a truly circular one.",
  },
  {
    icon: PiBinocularsFill,
    title: "Forest & Wildlife Conservation",
    text: "Running litter clean-up drives with the Karnataka Forest Department's Umblebailu Range and joining Wildlife Week jungle walks near the Elephant Camp at Gajanur, Shivamogga.",
  },
  {
    icon: FaBullhorn,
    title: "Advocacy & Environmental Justice",
    text: "Leading the Save Sringeri campaign against a proposed 332km railway line through the fragile Western Ghats — pressing for cancelled tenders and protected forest corridors over short-term gain.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Education & Community Awareness",
    text: "Bringing eco-friendly lifestyle workshops, World Environment Day programs and plastic-reduction sessions into schools and Grama Panchayats, from Bengaluru classrooms to Bhadravati villages.",
  },
  {
    icon: FaFlask,
    title: "Research & Capacity Building",
    text: "Contributing to national platforms on natural farming, water security and rural livelihoods, and hosting webinars with sustainability practitioners to sharpen our own thinking.",
  },
];

export const stats = [
  { value: 1500000, suffix: "", label: "Sapling pledge — BDA Guinness World Record drive" },
  { value: 6, suffix: "", label: "Focus areas, from soil to policy" },
  { value: 10, suffix: "+", label: "Partner institutions & collaborators" },
  { value: 2, suffix: "", label: "Hub regions — Bengaluru & Shivamogga" },
];

export const partners = [
  "Bruhat Bengaluru / BDA",
  "Karnataka Forest Department",
  "Shivamogga Wildlife Division",
  "Kuvempu University — Dept. of Social Work",
  "Susthira Eco Solutions",
  "Bajaj Foundation",
  "Vishwa Yuvak Kendra",
  "GreenMic India",
  "WeKnewRenew",
  "BeWiseReuse",
  "Waste Warriors",
  "Umblebailu Grama Panchayat",
];

export const campaignPoints = [
  "Lakhs of trees at risk across Someshwara & Kudremukh's critical habitats",
  "Increased human-wildlife conflict and habitat fragmentation",
  "Landslide and flash-flood risk from blasting and hill-cutting",
  "Threats to river systems — the Tunga, Bhadra and Netravati",
];

export const campaignStats = [
  { value: "332", unit: "km", label: "proposed railway length" },
  { value: "₹3,300", unit: "cr", label: "estimated project cost" },
  { value: "2", unit: "", label: "protected reserves in its path" },
];

export const involvedCards = [
  {
    title: "Volunteer",
    text: "Join a plantation drive, a forest clean-up, or a school outreach session near you.",
    cta: "Reach out",
    href: "#contact",
  },
  {
    title: "Partner With Us",
    text: "Bring your school, RWA, panchayat or company into an existing program.",
    cta: "Start a conversation",
    href: "#contact",
  },
  {
    title: "Spread the Word",
    text: "Follow along, share our campaigns, and help the Save Sringeri ask reach further.",
    cta: "Follow on Instagram",
    href: "https://www.instagram.com/ulivu_foundation/",
  },
];

export const pillars = [
  {
    title: "Conservation",
    text: "Tree plantation drives, forest clean-ups and habitat protection across the Western Ghats and urban Bengaluru.",
    icon: FaSeedling,
  },
  {
    title: "Research",
    text: "Studying waste systems, water security and rural livelihoods to design solutions grounded in evidence.",
    icon: FaFlask,
  },
  {
    title: "Community",
    text: "Working shoulder to shoulder with schools, universities, forest departments and local government.",
    icon: PiPlantFill,
  },
];
