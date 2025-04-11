import { Alert } from "../../components"
import { Button } from "../../shared"
import { Toast } from "../../../util"
export const AlertPage = () => {
    const handleTop = () => {
        Toast.success("success", {
            position: "top"
        })
    }
    const handleBottom = () => {
        Toast.error("error", {
            duration: 1500,
            position: "bottom"
        })
    }
    const handleLeft = () => {
        Toast.warning("warning", {
            position: "left"
        })
    }

    const handleRight = () => {
        Toast.info("info", {
            position: "right"
        })
    }
    const handleTopLeft = () => {
        Toast.success("success", {
            position: "top-left"
        })
    }
    const handleBottomLeft = () => {
        Toast.error("error", {
            position: "bottom-left"
        })
    }
    const handleTopRight = () => {
        Toast.warning("warning", {
            position: "top-right"
        })
    }
    const handleBottomRight = () => {
        Toast.info("info", {
            position: "bottom-right"
        })
    }
    return (
        <div className={`flex flex-col justify-center items-center gap-2`}>
            <div className="flex flex-wrap justify-center flex-row gap-2">
                <Alert 
                    type="success"
                />
                <Alert 
                    type="error"
                />
                <Alert 
                    type="warning"
                />
                <Alert 
                    type="info"
                />
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <Button
                    variant="btn-primary"      
                    onClick={handleTop}              
                >
                    Top
                </Button>
                <Button
                    variant="btn-primary"   
                    onClick={handleBottom}                 
                >
                    Bottom
                </Button>
                <Button
                    variant="btn-primary"                    
                    onClick={handleLeft}
                >
                    Left
                </Button>
                <Button
                    variant="btn-primary"         
                    onClick={handleRight}           
                >
                    Right
                </Button>               
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <Button
                    variant="btn-primary"      
                    onClick={handleTopLeft}              
                >
                    Top-Left
                </Button>
                <Button
                    variant="btn-primary"   
                    onClick={handleBottomLeft}                 
                >
                    Bottom-Left
                </Button>
                <Button
                    variant="btn-primary"                    
                    onClick={handleTopRight}
                >
                    Top-Right
                </Button>
                <Button
                    variant="btn-primary"         
                    onClick={handleBottomRight}           
                >
                    Bottom-Right
                </Button>               
            </div>
        </div>
    )
}