import { Info } from "lucide-react";
import { Button } from "../../shared";
export const ButtonsPage = () => {
    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div className="flex flex-row justify-center gap-2 ">
                <Button 
                    variant="btn-primary"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-secondary"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-success"
                    size="btn-md"
                    disabled={false}
                />
                <Button 
                    variant="btn-warning"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-danger"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-info"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-light"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-dark"                    
                    disabled={false}
                />              
            </div>
            <div className="flex flex-row justify-center gap-2">
                <Button 
                    variant="btn-outline-primary"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-outline-secondary"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-outline-success"
                    size="btn-md"
                    disabled={false}
                />
                <Button 
                    variant="btn-outline-warning"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-outline-danger"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-outline-info"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-outline-light"                    
                    disabled={false}
                />
                <Button 
                    variant="btn-outline-dark"                    
                    disabled={false}
                />              
            </div>
            <div className="flex gap-2 justify-center items-center">
                <Button 
                    variant="btn-primary"                    
                    size="btn-sm"
                />  
                <Button 
                    variant="btn-primary"                    
                    
                />  
                <Button 
                    variant="btn-primary"                    
                    size="btn-lg"
                />                  
                <Button 
                    variant="btn-primary"                    
                    size="btn-lg"
                    disabled
                />                  
            </div>
            <div className="flex flex-row gap-2">
                <Button 
                    variant="btn-primary"
                    icon={<Info />}
                />
                <Button                     
                    children={<Info />}
                />
            </div>
        </div>
    );
}