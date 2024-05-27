import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const BreadCrumb = ({ list }) => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {list?.map?.((e, i) => {
            const arias = i === list?.length ? { "aria-label": "current-page" } : {};
            return (
              <li key={e.url}>
                <Link to={e.url} {...arias}>
                  {e.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

BreadCrumb.propTypes = {
  list: PropTypes.array.isRequired,
};
