import StarIcon from "@/assets/icons/start.svg"; // Make sure the icon path is correct

interface CardHeaderProps {
    title: string;
    description: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, description }) => {
    return (
        <div>
            <div className="flex items-center font-serif text-3xl gap-2 justify-center">
                <StarIcon className="w-8 h-8 text-emerald-300" />
                <h3 className="text-3xl font-semibold text-white">{title}</h3> {/* Display the dynamic title */}
            </div>
            <p className="text-gray-400 text-base text-center">{description}</p> {/* Display the dynamic description */}
        </div>
    );
};
