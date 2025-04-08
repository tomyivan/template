import { useRef } from "react";
import gsap from "gsap";
interface InputCollapseProps {
    variant?: 'inp-outline' | 'inp-filled',
    label: string,    
}
export const InputCollapse:React.FC<InputCollapseProps> = ({
    variant = 'inp-filled',
    label = 'Label'
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const handleFocus = () => {
    gsap.to(labelRef.current, { y: -24, color: '#3b82f6' ,scale: 0.87, duration: 0.3, ease: "power.out" });
  };

  const handleBlur = () => {
    if (!inputRef.current?.value) {
      gsap.to(labelRef.current, { y: 0, color: '#4b5563' ,scale: 1, duration: 0.3, ease: "power.out" });
    }
  };
  
  return (
    <div className="relative w-72">
      <input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${variant}`}
      />
      <label
        ref={labelRef}
        className="inp_label_collapse"
      >
        {label}
      </label>    
    </div>
  );
};
