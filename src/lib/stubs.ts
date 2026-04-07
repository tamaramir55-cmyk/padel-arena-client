// Types and mock data stubs for tournaments and publishers
export type Tournament = {
  id: string;
  title: string;
  date: string;
  location: string;
  format: string;
  deadline: string;
  price: string;
  spots: number;
  publisherId?: string;
};

export type Publisher = {
  id: string;
  name: string;
  bio?: string;
  contact?: string;
};

const MOCK_PUBLISHERS: Publisher[] = [
  {
    id: "p1",
    name: "יוסי כהן",
    bio: "מארגן ותיק של תחרויות מקומיות",
    contact: "yossi@example.com",
  },
  {
    id: "p2",
    name: "שרון לוי",
    bio: "אחראית רישומים ואירועים",
    contact: "sharon@example.com",
  },
    {
    id: "p1",
    name: "יוסי כהן",
    bio: "מארגן ותיק של תחרויות מקומיות",
    contact: "yossi@example.com",
  },
  {
    id: "p2",
    name: "שרון לוי",
    bio: "אחראית רישומים ואירועים",
    contact: "sharon@example.com",
  },
    {
    id: "p1",
    name: "יוסי כהן",
    bio: "מארגן ותיק של תחרויות מקומיות",
    contact: "yossi@example.com",
  },
  {
    id: "p2",
    name: "שרון לוי",
    bio: "אחראית רישומים ואירועים",
    contact: "sharon@example.com",
  },  {
    id: "p1",
    name: "יוסי כהן",
    bio: "מארגן ותיק של תחרויות מקומיות",
    contact: "yossi@example.com",
  },
  {
    id: "p2",
    name: "שרון לוי",
    bio: "אחראית רישומים ואירועים",
    contact: "sharon@example.com",
  },
];

const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: "t1",
    title: "טורניר חובבנים",
    date: "2026-05-10",
    location: "מגרש מרכזי",
    format: "זוגות",
    deadline: "2026-05-05",
    price: "₪80",
    spots: 16,
    publisherId: "p1",
  },
  {
    id: "t2",
    title: "טורניר פרמיום",
    date: "2026-06-02",
    location: "מגרש 2",
    format: "יחידים",
    deadline: "2026-05-28",
    price: "₪150",
    spots: 8,
    publisherId: "p2",
  },
];

export async function fetchPublishers(): Promise<Publisher[]> {
  return new Promise((res) => setTimeout(() => res(MOCK_PUBLISHERS), 120));
}

export async function fetchPublisherById(
  id: string,
): Promise<Publisher | null> {
  return new Promise((res) =>
    setTimeout(
      () => res(MOCK_PUBLISHERS.find((p) => p.id === id) ?? null),
      120,
    ),
  );
}

export async function fetchTournaments(): Promise<Tournament[]> {
  return new Promise((res) => setTimeout(() => res(MOCK_TOURNAMENTS), 140));
}

export async function fetchTournamentsByPublisher(
  publisherId: string,
): Promise<Tournament[]> {
  return new Promise((res) =>
    setTimeout(
      () => res(MOCK_TOURNAMENTS.filter((t) => t.publisherId === publisherId)),
      140,
    ),
  );
}
