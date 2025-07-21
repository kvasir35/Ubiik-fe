import './InputText.scss';

interface InputTextProps {
	className?: string;
	val: string;
	placeholder?: string;
	isDisabled?: boolean;
	onChange?: (value: string) => void;
}

const InputText = ({
	className = '',
	val,
	placeholder = '',
	isDisabled = false,
	onChange,
}: InputTextProps) => {
	return (
		<input
			className={`inpt-txt ${className}`}
			disabled={isDisabled}
			placeholder={placeholder}
			onChange={(e) => onChange?.(e.target.value)}
			value={val}
		/>
	);
};

export default InputText;
