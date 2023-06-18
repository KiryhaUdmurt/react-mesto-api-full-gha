
export default function Footer({isLoggedIn}) {
  const currentYear = new Date();
  return (
    isLoggedIn &&
    (<footer className="footer">
      <p className="footer__copyright">© {currentYear.getFullYear()} Калинин Кирилл</p>
    </footer>)
  );
}
