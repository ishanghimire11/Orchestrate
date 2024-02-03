import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const headerLinks = [
  {
    id: 1,
    title: "Home",
    route: "/",
  },
  {
    id: 2,
    title: "Events",
    route: "/events/create",
  },
  {
    id: 3,
    title: "Profile",
    route: "/profile",
  },
];

export const footerSocials = [
  {
    id: 1,
    icon: <GitHubLogoIcon height={20} width={20} />,
    link: "#",
  },
  {
    id: 2,
    icon: <DiscordLogoIcon height={20} width={20} />,
    link: "#",
  },
  {
    id: 3,
    icon: <TwitterLogoIcon height={20} width={20} />,
    link: "#",
  },
  {
    id: 4,
    icon: <LinkedInLogoIcon height={20} width={20} />,
    link: "#",
  },
];

export const footerInformation = [
  {
    id: 1,
    subheading: "Resources",
    links: [
      {
        id: 11,
        title: "Home",
        link: "#",
      },
      {
        id: 12,
        title: "About",
        link: "#",
      },
      {
        id: 13,
        title: "Blogs",
        link: "#",
      },
      {
        id: 14,
        title: "FAQs",
        link: "#",
      },
      {
        id: 15,
        title: "Support",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    subheading: "Others",
    links: [
      {
        id: 21,
        title: "Terms and Conditions",
        link: "#",
      },
      {
        id: 22,
        title: "Privacy Policy",
        link: "#",
      },
      {
        id: 23,
        title: "Security",
        link: "#",
      },
      {
        id: 24,
        title: "Cookie Policy",
        link: "#",
      },
      {
        id: 25,
        title: "Disclaimer",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    subheading: "PLATFORMS",
    links: [
      {
        id: 31,
        title: "iOS App",
        link: "#",
      },
      {
        id: 32,
        title: "Android App",
        link: "#",
      },
      {
        id: 33,
        title: "Windows App",
        link: "#",
      },
      {
        id: 34,
        title: "Mac App",
        link: "#",
      },
    ],
  },
];

export const EventFormDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  eventUrl: "",
};
