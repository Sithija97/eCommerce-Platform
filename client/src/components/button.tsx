interface IProps {
  styles?: string;
  filled?: boolean;
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
}
export const Button = ({
  styles = "",
  filled = false,
  label,
  type = "submit",
}: IProps) => {
  console.log(styles, filled, label);
  const defaultClassnames = `border border-gray-300 rounded-full px-2 h-8 font-bold ${
    filled ? "bg-gray-300 text-dark" : "text-gray-300"
  }`;
  return (
    <button type={type} className={`${defaultClassnames} ${styles}`}>
      {label}
    </button>
  );
};
