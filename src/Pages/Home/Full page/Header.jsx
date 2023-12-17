import HeaderCard from "./HeaderCard";
import HeaderCard2 from "./HeaderCard2";



const Header = () => {
    return (
        <div className=" flex gap-5">
            <div className=" flex flex-col">
                <button className="btn btn-outline btn-primary">Job Circular</button>
                <button className="btn btn-active btn-primary">Teachers</button>
                <button className="btn btn-outline btn-primary">View All</button>
            </div>
            <div className=" flex gap-5">
                <HeaderCard />
                <HeaderCard2 />
            </div>
        </div>
    );
};

export default Header;