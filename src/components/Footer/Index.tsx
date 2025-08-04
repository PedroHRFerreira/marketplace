import style from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <p>© 2025 Marketplace. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
