import { FaPeopleGroup } from "react-icons/fa6";

const HeaderCard = () => {
    return (
        <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title"><FaPeopleGroup /></h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    );
};

export default HeaderCard;