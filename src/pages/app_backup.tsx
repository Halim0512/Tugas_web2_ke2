import Header from "./components/Header";
import Button from "./components/ui/Button";
import Collapse from "./components/Collapse";
import SpeakerCard from "./components/SpeakerCard";
import Card from "./components/ui/Card";

function App() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "AWS Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Developer",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description: "Festival IT tahunan.",
    },
    {
      title: "Kapan?",
      description: "November 2024.",
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description: "Seminar tentang AI",
    },
    {
      title: "IT Talkshow",
      description: "Diskusi teknologi",
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4">
        {/* HERO */}
        <section className="py-10 flex gap-10 items-center">
          <div className="w-2/3 flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt="Invofest"
              className="w-96"
            />

            <p>Invofest adalah festival IT tahunan.</p>

            <div className="flex gap-3">
              <Button label="Info Selengkapnya" />
              <Button label="Hubungi Panitia" variant="outline" />
            </div>
          </div>

          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="maskot"
            />
          </div>
        </section>

        {/* SPEAKER */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {speakers.map((s, i) => (
            <SpeakerCard key={i} {...s} />
          ))}
        </section>

        {/* CARDS */}
        <section className="py-16 grid md:grid-cols-2 gap-6">
          {cardItems.map((item, i) => (
            <Card key={i}>
              <h3 className="text-xl text-red-900">{item.title}</h3>
              <p>{item.description}</p>
              <Button label="Info Selengkapnya" className="mt-4" />
            </Card>
          ))}
        </section>

        {/* FAQ */}
        <section className="py-16 flex flex-col gap-4">
          {collapseItems.map((item, i) => (
            <Collapse key={i} {...item} />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;