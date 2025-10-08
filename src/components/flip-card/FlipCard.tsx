export default ({ front, back }: any) => {
    return (
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="card absolute inset-0 bg-base-200 shadow-xl [backface-visibility:hidden] flex items-center justify-center">
                <div className="card-body">
                    {back}
                </div>
            </div>
            <div className="card absolute inset-0 bg-primary text-primary-content shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                <div className="card-body">
                    {back}
                </div>
            </div>
        </div>
    )
}