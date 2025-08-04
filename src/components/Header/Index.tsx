import style from "./styles.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <h1 className={style.header__title}>Marketplace</h1>
        <div className={style.header__search}>
          <input
            type="text"
            placeholder="Buscar produtos..."
            className={style.header__input}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
