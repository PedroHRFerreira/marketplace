import { currencyMask } from "@/hooks/masks";
import { ITypesCard } from "./TypesCard";
import style from "./styles.module.scss";
import Image from "next/image";

const Card = ({
  link,
  image,
  title,
  category,
  description,
  price,
}: ITypesCard) => {
  return (
    <aside className={style.card}>
      <a className={style.card__link} href={link}>
        <Image
          className={style.card__link__image}
          src={image}
          alt={`imagem do ${image}`}
          width={150}
          height={150}
        />
        <div className={style.card__link__content}>
          <span className={style.card__link__content__title}>
            <h4>{title}</h4> <h4>Category: {category}</h4>
          </span>
          <p>{description}</p>
          <p className={style.card__link__content__price}>
            {currencyMask(price)}
          </p>
        </div>
      </a>
    </aside>
  );
};

export default Card;
