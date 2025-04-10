import { useState } from "react";
import { Button, InputSelect } from "../../shared";
import { Modal } from "../../components";

export const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <Modal 
                showModal={showModal}
                setShowModal={setShowModal}
                title="Modal Title"
                
            >
                <InputSelect
                    data={[
                        { id: "1", name: "Option 1" },
                        { id: "2", name: "Option 2" },
                        { id: "3", name: "Option 3" },
                    ]}
                    label="Select Option"
                    placeholder="Select an option"
                    variant="inp-normal"                    
                />
            </ Modal>
            <div className="flex justify-center mt-8">
                <Button
                    variant="btn-primary"
                    size="btn-md"
                    onClick={openModal}
                    aria-label="Open Modal"
                >
                    Open Modal
                </Button>
            </div>
        </>
    );
};