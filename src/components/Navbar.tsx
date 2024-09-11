
function Navbar() {
  return <nav className="py-6 bg-sky-700 text-center">Navbar - </nav>;
}

Navbar.Sub = ({text}:{text:string}) => {
  return (
    <h2 className="bg-sky-600 text-center">
      {text}
    </h2>
  );
};
export default Navbar;
