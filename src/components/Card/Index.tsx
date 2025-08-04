import { currencyMask } from "@/hooks/masks";
import { ITypesCard } from "./TypesCard";
import style from "./styles.module.scss";
import Image from "next/image";

const Card = ({
  onDetails,
  image,
  title,
  category,
  description,
  price,
}: ITypesCard) => {
  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <aside className={style.card}>
      <div className={style.card__link} onClick={onDetails}>
        <Image
          className={style.card__link__image}
          src={image}
          alt={`imagem do ${image}`}
          width={150}
          height={150}
        />
        <div className={style.card__link__content}>
          <span className={style.card__link__content__title}>
            <h4>{truncateText(title, 15)}</h4>
            <h4>Category: {truncateText(category, 5)}</h4>
          </span>
          <p>{truncateText(description, 15)}</p>
          <p className={style.card__link__content__price}>
            {currencyMask(price)}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Card;
