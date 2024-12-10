import VimalPic from "../assets/vimal.png";
import PrasannaPic from "../assets/prasanna.jpg";

interface CoachContact {
  address: string;
  phone: string;
  email: string;
}

interface CoachData {
  id: string;
  name: string;
  title?: string; // Optional: Add a title for the coach, like "PPR-Certified Coach"
  imageUrl?: string; // Optional: Add a default image or expect this dynamically
  about: string;
  achievementsAndExperience: string[];
  contact: CoachContact;
}

export const coachData: CoachData[] = [
  {
    id: "vimal",
    name: "Vimalraj Jayachandran",
    title: "Founder & Head coach",
    imageUrl: VimalPic,
    about:
      "After over 15 years immersed in professional tennis, I found myself searching for something new to ignite my passion. Eleven months ago, I picked up a pickleball paddle on a whim, and it changed everything. From that first game, I felt a spark, a joy I hadn’t felt in years. Today, pickleball isn’t just a game for me; it’s become a way of life. As a PPR-certified coach and 5+ DUPR-rated player, I’m proud to be one of India’s top players, driven by a genuine love for the sport and a desire to help YOU and the sport grow.",
    achievementsAndExperience: [
      "PPR Certified Coach",
      "Best Pickleball player in South India (according to DUPR)",
      "Featured in New Indian Express",
      "Winner in several tournaments in pro category",
      "Got drafted for both the seasons of MLP Australia",
      "Victories against several national champions",
      "2-time medalist in South India Premiere League",
      "2-time semi-finalist in State championship",
      "Ice water Pickle master winner in mixed doubles",
      "3 P20’s 4 medals",
      "Commentator: Australian Open 2024",
      "Commentator: Roland Garros 2023, 2024",
      "Commentator: Paris Olympics 2024",
      "Former International Tennis Player",
    ],
    contact: {
      address: "Aminjikarai, Chennai, Tamil Nadu - 600029",
      phone: "+91 73582 28529",
      email: "vimaljaypb@gmail.com",
    },
  },
  {
    id: "rohit",
    name: "Rohit Ahuja",
    title: "Founder & Associate coach",
    imageUrl: VimalPic,
    about:
      "Multi-talented athlete and filmmaker. They've won medals in the South India Premiere League, reached State Championship semi-finals, and claimed titles in pickleball. Beyond sports, they've directed films and worked as a line producer and ad film director.",
    achievementsAndExperience: [
      "2 time medalist in South India Premiere League",
      "2 time semi finalist in State championships",
      "Ice water Pickle master winner in mixed doubles",
      "3 P20’s 4 medals",
      "Independent filmmaker",
      "Asst director on 5 films",
      "Line producer and ad film director",
    ],
    contact: {
      address: "Egmore, Chennai, Tamil Nadu - 600029",
      phone: "+91 98843 53935",
      email: "sample@gmail.com",
    },
  },
  {
    id: "prasanna",
    name: "Prasanna S",
    title: "Assistant coach",
    imageUrl: PrasannaPic,
    about:
      "Multi-talented athlete and filmmaker. They've won medals in the South India Premiere League, reached State Championship semi-finals, and claimed titles in pickleball. Beyond sports, they've directed films and worked as a line producer and ad film director.",
    achievementsAndExperience: [
      "Professional Pickleball Referee",
      "Software Engineer",
      "Freelancer for SMM, Websites and Graphic Designs",
    ],
    contact: {
      address: "Royapettah, Chennai, Tamil Nadu - 600029",
      phone: "+91 99523 09594",
      email: "prasanna@sibbc.org",
    },
  },
];
