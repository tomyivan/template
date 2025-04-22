import { Card } from "../../components";

export const CardPage = () => { 
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-center items-center gap-2">
                <Card
                    title="Card Title"
                    description="This is a description of the card."
                    // imageUrl=
                    // buttonLabel="Click Me"
                    onClick={() => alert("Button Clicked")}
                />
            </div>
        </div>
    );
}