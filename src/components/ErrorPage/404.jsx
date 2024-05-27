import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <section className="flex flex-col gap-3 justify-center self-center w-full py-36">
      <h1 className="text-3xl text-red-500 mx-auto">Page Not Found</h1>
      <p className="text-xl text-slate-800 mx-auto">Sorry, but the page you were trying to view does not exist.</p>
      <Link to="/" className="p-2 h-[10%] w-[10%] rounded-lg mx-auto text-center bg-red-400 text-xl text-white hover:bg-red-500 duration-200">
        Back
      </Link>
    </section>
  );
};
