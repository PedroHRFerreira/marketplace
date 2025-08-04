import style from "./styles.module.scss";
import Image from "next/image";
const MoleculesCard = () => {
  return (
    <aside className={style.card}>
      <a className={style.card__link} href="/teste">
        <Image
          className={style.card__link__image}
          src="/image/images.jpeg"
          alt=""
          width={150}
          height={150}
        />
        <div className={style.card__link__content}>
          <span className={style.card__link__content__title}>
            <h4>Titulo</h4> <h4>Category: teste</h4>
          </span>
          <p>Descrição</p>
          <p className={style.card__link__content__price}>R$ 0,00</p>
        </div>
      </a>
    </aside>
  );
};

export default MoleculesCard;
