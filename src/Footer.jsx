const Footer = () => {

    const currentDate = new Date()

  return (
    <footer className="container  justify-content-center">
      <h3 className="text-center mt-2 mb-3">
        Team memeber allocation App - {currentDate.getFullYear()}
      </h3>
    </footer>
  );
};

export default Footer;
