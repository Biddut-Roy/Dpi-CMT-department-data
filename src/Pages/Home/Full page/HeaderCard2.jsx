

const HeaderCard2 = () => {
    return (
        <div className="card bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">
                    <div className="avatar">
                        <div className="w-16 rounded">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard2;