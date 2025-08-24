const narutoIntro = `Naruto is a 12 year old kid who lives in the hidden leaf Village.
            He lost his parents right after he was born so he didn't have anyone
            around to care for him in all his life. He is feeling sad but at the
            same time he tries to be positive about life. For some reason, when
            kids are around him, their parents ask them to get away from him,
            but soon enough, he will find out the reason why.`;

const history = [
  {
    paragraph: `Naruto began as a manga series written and illustrated by Masashi
          Kishimoto, first published in Weekly Shōnen Jump in September 1999. It
          quickly became one of the magazine’s most popular titles, blending
          action, humor, and emotional storytelling in a ninja-themed world. The
          manga ran for 15 years, ending in November 2014 after 700 chapters,
          and has sold over 250 million copies worldwide, making it one of the
          best-selling manga series of all time.`,
  },
  {
    paragraph: `The anime adaptation premiered in Japan in 2002, produced by
          Studio Pierrot, and ran for 220 episodes before continuing as Naruto:
          Shippuden from 2007 to 2017, adding another 500 episodes. The
          franchise’s success played a major role in introducing anime to global
          audiences, becoming a cultural gateway for many fans outside Japan.`,
  },
  {
    paragraph: `Beyond television, Naruto expanded into movies, video games, novels,
          and merchandise, turning it into a multi-billion-dollar franchise.`,
  },
];

const curiosities = [
  {
    curiosity: `Naruto’s favorite food is Ichiraku Ramen, and he can eat dozens of
              bowls in one sitting.`,
  },
  {
    curiosity: `The whisker marks on his face are a result of being born with the
              Nine-Tails sealed inside him.`,
  },
  {
    curiosity: `Despite his playful and mischievous nature, Naruto has a deep
              understanding of loneliness, which allows him to connect with
              others who have suffered.`,
  },
  {
    curiosity: `His name, “Naruto,” comes from a type of fish cake used in ramen,
              symbolizing his love for the dish.`,
  },
  {
    curiosity: `In early drafts of the manga, Naruto was going to be a fox in
              human form, but the concept was changed to a human with a fox
              spirit sealed inside.`,
  },
];

const statsArr = (
  numOfAkatsuki,
  numOfCharacters,
  numOfClans,
  numOfKara,
  numOfKekkeiGenkai,
  numOfTailedBeasts,
  numOfTeams,
  numOfVillages
) => {
  return [
    {
      name: "Number of Akatsuki Members",
      stat: numOfAkatsuki,
    },
    {
      name: "Number of Characters",
      stat: numOfCharacters,
    },
    {
      name: "Number of Clans",
      stat: numOfClans,
    },
    {
      name: "Number of Kara Members",
      stat: numOfKara,
    },
    {
      name: "Number of Kekkei Genkais",
      stat: numOfKekkeiGenkai,
    },
    {
      name: "Number of Tailed Beasts",
      stat: numOfTailedBeasts,
    },
    {
      name: "Number of Teams",
      stat: numOfTeams,
    },
    {
      name: "Number of Villages",
      stat: numOfVillages,
    },
  ];
};

export default {
  narutoIntro,
  history,
  curiosities,
  statsArr,
};
