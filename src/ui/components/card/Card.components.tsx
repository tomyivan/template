interface CardProps {
    title?: string;
    description?: string;
    image?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export const Card:React.FC<CardProps> = ({
    title,
    description,
    image,
    children,
    className = "",
    onClick,
}) => {
    return (
        <div className="flex flex-col gap-4">
            <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 ${className}`} onClick={onClick}>
                {image && <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-lg" />}
                <div className="p-4">
                    {title && <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{title}</h2>}
                    {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
                    {children}
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200" onClick={onClick}>
                    Action
                </button>
            </div>
        </div>
    )
}