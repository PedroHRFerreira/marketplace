import style from "./styles.module.scss";
import Card from "@/components/Card/Index";
import { ITypesCard } from "@/components/Card/TypesCard";
import { useFetchCards } from "@/store/useFetchCardStore";

const List = () => {
  const { data, loading, error } = useFetchCards();

  if (loading) {
    return (
      <section className="loading">
        <div className="anim-loading"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={style.list}>
        <div className="error">Erro ao carregar os dados.</div>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className={style.list}>
        <p>Nenhum item encontrado.</p>
      </section>
    );
  }

  const cards: ITypesCard[] = data.map((card) => ({
    id: card.id,
    link: "#",
    image: card.image,
    title: card.title,
    category: card.category,
    description: card.description,
    price: String(card.price),
  }));

  return (
    <section className={`${style.list} ${loading || error ? "loading" : ""}`}>
      {cards.map((card) => (
        <Card
          key={card.id}
          link={card.link}
          image={card.image}
          title={card.title}
          category={card.category}
          description={card.description}
          price={card.price}
        />
      ))}
    </section>
  );
};

export default List;
