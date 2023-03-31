const Footer = ({ itemsLength }) => {
  return (
    <footer className="footer">
      {itemsLength} List {itemsLength === 1 ? "item" : "items"}
    </footer>
  );
};

export default Footer;
