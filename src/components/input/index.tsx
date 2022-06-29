import { FC } from "react";

interface IProps {
    inputVal: string;
    labelVal: string;
    classNameVal: string;
}
const InputText: FC<IProps> = ({ inputVal, labelVal, classNameVal }) => {
    return (
        <div className="w-full">
            <div className="input-with-placeholder">
                <input type="text" id={inputVal} className={classNameVal} required />
                <label htmlFor={inputVal} className="cursor-text">{labelVal}</label>
            </div>
        </div>
    )
}
export default InputText;