import Department from "../Department Name/Department";
import BodyContent from "../Full page/BodyContent";
import Header from "../Full page/Header";


const Home = () => {
    return (
        <div className=" grid grid-cols-7">
            <div className=" col-span-3">
                <Department />
            </div>
            <div className=" col-span-4">
                <Header />
                <BodyContent />
            </div>
        </div>
    );
};

export default Home;