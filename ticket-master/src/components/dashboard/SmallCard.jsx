
function SmallCard({ icon, title="no title", value="0"}) {
    return (
    <div className="card bg-base-100 shadow-xl flex flex-col justify-between items-center">
        <div className="card-body w-[10rem] cursor-pointer">
        <div className="self-center">{icon}</div>
            <h2 className="card-title text-5xl font-bold text-primary text-center self-center">{value}</h2>
            <p className="mt-6 text-xl font-semibold text-center text-gray-300">{title}</p>
        </div>
    </div>);
}

export default SmallCard;