const SectionTitle = ({ title, para }) => {

    return (
        <div className="flex flex-col pb-4  gap-4">
            <div className="flex flex-col mx-auto justify-center ">
                <h4 className="text-[12px] text-white">{para}</h4>
                <h2 className="text-[34px]  text-white font-bold custonFonts">
                    {title}
                </h2>
                <div className="w-[40px] flex justify-start items-start h-[1px] bg-textColor"></div>
            </div>
        </div>
    );
};

export default SectionTitle;
