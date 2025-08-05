import { useState } from "react";
import style from "./styles.module.scss";
import Card from "@/components/Card/Index";
import { ITypesCard } from "@/components/Card/TypesCard";
import { useFetchCards, useFetchCardDetails } from "@/store/useFetchCardStore";
import Modal from "@/components/Modal/Index";

const List = () => {
  const { data, loading, error } = useFetchCards();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const {
    data: detailData,
    loading: detailLoading,
    error: detailError,
  } = useFetchCardDetails(selectedId);

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
    image: card.image,
    title: card.title,
    category: card.category,
    description: card.description,
    price: String(card.price),
  }));

  return (
    <section className={style.list}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          onDetails={() => setSelectedId(card.id)}
          image={card.image}
          title={card.title}
          category={card.category}
          description={card.description}
          price={card.price}
        />
      ))}

      {detailData && (
        <Modal
          isOpen={isModalOpen}
          textSave=""
          title="Detalhes do produto"
          onSave={handleCloseModal}
          onCancel={handleCloseModal}
        >
          <div className={style.modal}>
            <MoleculesFormInputFloatLabel
              label="Nome do produto*"
              value={name}
              disabled={true}
            />
            <MoleculesFormInputFloatLabel
              label="Descrição"
              value={description || ""}
              disabled={true}
            />
            <MoleculesFormInputFloatLabel
              label="Preço do produto*"
              value={price}
              mask="currency"
              disabled={true}
            />
            <MoleculesFormInputFloatLabel
              label="Quantidade do produto*"
              value={quantity}
              mask="quantity"
              disabled={true}
            />
            <MoleculesFormInputFloatLabel
              label="Imagem do produto"
              value={image || ""}
              disabled={true}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default List;
