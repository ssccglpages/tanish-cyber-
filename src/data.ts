export interface RoadmapTask {
  days: string;
  topic: string;
  task: string;
  videoUrl: string;
}

export interface RoadmapMonth {
  id: number;
  title: string;
  subtitle: string;
  tasks: RoadmapTask[];
}

export const ROADMAP_DATA: RoadmapMonth[] = [
  {
    id: 1,
    title: "Month 1: Building Your Foundation",
    subtitle: "Look, everyone wants to be a hacker, but you can't build a house on sand. This month, we're building your bedrock.",
    tasks: [
      {
        days: "1-5",
        topic: "The Blueprint: OSI & TCP/IP",
        task: "Deep dive into how the internet actually moves data. Don't just memorize the 7 layers—understand how they talk to each other.",
        videoUrl: "https://www.youtube.com/watch?v=rzlpzl71vPI"
      },
      {
        days: "6-10",
        topic: "Speaking the Language: IP & Subnetting",
        task: "This is where most people quit. Master IPv4 and Subnetting now, and everything in your career will be easier later.",
        videoUrl: "https://www.youtube.com/watch?v=cEOvSdAN-3c"
      },
      {
        days: "11-15",
        topic: "The Phonebook: DNS & Routing",
        task: "Ever wonder how 'google.com' turns into an IP? Let's figure out the magic behind DNS and how packets find their way home.",
        videoUrl: "https://www.youtube.com/watch?v=D63H1aOE2CA"
      },
      {
        days: "16-22",
        topic: "Living in the Terminal: Linux Basics",
        task: "Break up with your mouse for a week. Learn to navigate, create, and move files using only the command line.",
        videoUrl: "https://www.youtube.com/watch?v=HKJe3BhQYkE"
      },
      {
        days: "23-30",
        topic: "Control & Power: Permissions",
        task: "Learn who gets to see what. Permissions (chmod) and package management (APT) are your daily tools from here on out.",
        videoUrl: "https://www.youtube.com/watch?v=CL0MDXVzyAE"
      }
    ]
  },
  {
    id: 2,
    title: "Month 2: Thinking Like a Defender (Blue Team)",
    subtitle: "Before you learn to break things, you have to know how to protect them. Transitioning into the SOC mindset.",
    tasks: [
      {
        days: "31-35",
        topic: "The Security Bible: CIA & AAA",
        task: "The core philosophy of everything we do. Learn why Confidentiality, Integrity, and Availability are actually worth fighting for.",
        videoUrl: "https://www.youtube.com/watch?v=quopplZJHRw"
      },
      {
        days: "36-40",
        topic: "Know Your Enemy: Threats & Malware",
        task: "Study how hackers actually get in. Phishing and Ransomware aren't just buzzwords—they are the real threats you'll be fighting.",
        videoUrl: "https://www.youtube.com/watch?v=2pOAzLVtSl8"
      },
      {
        days: "41-45",
        topic: "The Gatekeepers: Firewalls & IDS",
        task: "Understand the walls we build. Learn how Firewalls and Intrusion Detection Systems spot trouble before it starts.",
        videoUrl: "https://www.youtube.com/watch?v=uDTM-89nwMc"
      },
      {
        days: "46-52",
        topic: "Your First Real Role: SOC Basics",
        task: "This is what an L1 Analyst does all day. Get familiar with Splunk—it's going to be your best friend in a real job.",
        videoUrl: "https://www.youtube.com/watch?v=YEakNjb4oLU"
      },
      {
        days: "53-60",
        topic: "The Detective Work: Log Triage",
        task: "Logs tell the truth when everyone else lies. Learn to read through them and spot the 'needle in the haystack'.",
        videoUrl: "https://www.youtube.com/watch?v=YEakNjb4oLU"
      }
    ]
  },
  {
    id: 3,
    title: "Month 3: The Fun Stuff: Ethical Hacking",
    subtitle: "Time to put on the hoodie. We're learning the tools and techniques hackers use—so we can stay one step ahead.",
    tasks: [
      {
        days: "61-70",
        topic: "Digital Surveillance: Recon & Nmap",
        task: "The most important part of any attack is the prep. Master Nmap to find every open door and window in a network.",
        videoUrl: "https://www.youtube.com/watch?v=jqZ5w0Lreq0"
      },
      {
        days: "71-80",
        topic: "Striking Back: Metasploit Basics",
        task: "Learning to use the world's most popular exploitation framework carefully. Remember: with great power comes responsibility.",
        videoUrl: "https://www.youtube.com/watch?v=jqZ5w0Lreq0"
      },
      {
        days: "81-90",
        topic: "Web Warfare: OWASP Top 10",
        task: "Web apps are the softest targets. Learn about SQLi and XSS—once you see them, you'll see them everywhere.",
        videoUrl: "https://www.youtube.com/watch?v=9FptCN0yvp8"
      }
    ]
  },
  {
    id: 4,
    title: "Month 4: Automate or Die (Python & Labs)",
    subtitle: "In 2026, if you can't script, you're falling behind. Let's make the computer do the boring work for you.",
    tasks: [
      {
        days: "91-105",
        topic: "Python for Security",
        task: "You don't need to be a software engineer. You just need to build scanners and tools that help you work faster.",
        videoUrl: "https://www.youtube.com/watch?v=07c4nUeR_Vs"
      },
      {
        days: "106-120",
        topic: "Hands-on Combat: TryHackMe",
        task: "Enough theory. Go get your hands dirty. Completing the Jr. Pentester path is your proof that you can actually do this.",
        videoUrl: "https://www.youtube.com/shorts/BXTRMYxJFyU"
      }
    ]
  },
  {
    id: 5,
    title: "Month 5: Getting You Hired",
    subtitle: "The finish line. We're polishing your profile and getting you ready to impress recruiters in Delhi-NCR.",
    tasks: [
      {
        days: "121-135",
        topic: "The Gold Standard: Security+",
        task: "It's the cert that gets your resume past the bots. Revise hard; this is the final hurdle before the real world.",
        videoUrl: "https://www.youtube.com/watch?v=O-e_cWwfeGc"
      },
      {
        days: "136-140",
        topic: "Personal Branding: LinkedIn & Resume",
        task: "Recruiters are human too. Show your passion, share your badges, and make a resume that actually tells your story.",
        videoUrl: "https://www.youtube.com/watch?v=VGMgSasBeT4"
      },
      {
        days: "141-150",
        topic: "The Final Boss: Mock Interviews",
        task: "Don't panic. We'll practice the tough questions together so when the real call comes, you're ready.",
        videoUrl: "https://www.youtube.com/watch?v=2pOAzLVtSl8"
      }
    ]
  }
];

export const JOB_STRATEGY = {
  platforms: [
    { name: "Naukri: Your Daily Hustle", tip: "Upload your resume in .docx. Use keywords recruiters search for in Delhi-NCR like 'SOC' and 'VAPT'." },
    { name: "LinkedIn: Your Digital Identity", tip: "Don't just lurk. Share what you learn. Recruiters in Noida and Gurgaon love to see curiosity." }
  ],
  salary: "₹4.5 LPA to ₹8 LPA (Starting Fresh)",
  locationFocus: ["Noida", "Gurugram", "Delhi Hubs"]
};
