import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  Label: string;
  type: string;
  customStyles?: string;
  error?: string | undefined;
}

export const TextInput: React.FC<IProps> = ({
  customStyles,
  Label,
  error,
  ...inputProps
}) => {
  return (
    <label>
      <span className="text-text-darker">{Label}</span>
      <input
        {...inputProps}
        className={`bg-dark-brighter_gray text-text p-2 border border-dark-brightest_gray rounded-md block ${customStyles}`}
      />
      {error && <div className="text-red-400 text-sm mt-1">{error}</div>}
    </label>
  );
};
