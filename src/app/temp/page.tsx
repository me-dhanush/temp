import { generateRound1Matches, pairing } from "@/lib/pairing";

export default function Page() {
  const players = [
    // 🔥 Elite (2400–2250)
    { name: "Aman", rating: 2415 },
    { name: "Ravi", rating: 2380 },
    { name: "Suresh", rating: 2345 },
    { name: "Kiran", rating: 2310 },
    { name: "Ajay", rating: 2290 },
    { name: "Vikram", rating: 2265 },
    { name: "Manoj", rating: 2240 },
    { name: "Rahul", rating: 2220 },

    // 💪 Strong (2210–2050)
    { name: "Arjun", rating: 2195 },
    { name: "Rohit", rating: 2170 },
    { name: "Nikhil", rating: 2140 },
    { name: "Deepak", rating: 2115 },
    { name: "Surya", rating: 2090 },
    { name: "Varun", rating: 2075 },
    { name: "Tejas", rating: 2055 },
    { name: "Harish", rating: 2030 },

    // ⚔️ Competitive Mid (2020–1850)
    { name: "Karthik", rating: 2005 },
    { name: "Yash", rating: 1980 },
    { name: "Pranav", rating: 1955 },
    { name: "Abhinav", rating: 1930 },
    { name: "Tarun", rating: 1905 },
    { name: "Shyam", rating: 1880 },
    { name: "Lokesh", rating: 1860 },
    { name: "Gokul", rating: 1845 },

    // 🧠 Developing (1830–1600)
    { name: "Ritesh", rating: 1820 },
    { name: "Ankit", rating: 1795 },
    { name: "Dev", rating: 1765 },
    { name: "Sahil", rating: 1735 },
    { name: "Aditya", rating: 1700 },
    { name: "Neeraj", rating: 1670 },
    { name: "Vamsi", rating: 1635 },
    { name: "Harsha", rating: 1605 },
  ];

  const matches = generateRound1Matches(players);

  return (
    <div>
      <h1>Round 1 Matches</h1>

      {matches.map((match) => (
        <div key={match.id}>
          {match.players[0]?.name} ({match.players[0]?.rating}) vs{" "}
          {match.players[1]?.name} ({match.players[1]?.rating})
        </div>
      ))}
    </div>
  );
}
