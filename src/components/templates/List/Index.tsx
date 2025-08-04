import Card from "@/components/Card/Index";
import style from "./styles.module.scss";
import { ITypesCard } from "@/components/Card/TypesCard";

const List = () => {
  const cards: ITypesCard[] = [
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
    {
      link: "#",
      image: "/image/images.jpeg",
      title: "Produto 1",
      category: "Categoria 1",
      description: "Descrição do produto 1",
      price: "R$ 99,99",
    },
  ];
  return (
    <section className={`${style.list} ${loading || error ? "loading" : ""}`}>
      {loading && <div className="anim-loading"></div>}

      {!loading &&
        !error &&
        cards.map((card) => (
          <Card
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
