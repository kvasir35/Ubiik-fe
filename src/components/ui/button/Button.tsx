import './Button.scss';

interface ButtonProps {
	onClick?: () => void;
	children: React.ReactNode;
	className?: string;
	isDisabled?: boolean;
}

const Button = ({
	onClick,
	children,
	className = '',
	isDisabled = false,
}: ButtonProps) => {
	const onBtnClick = () => {
		if (!isDisabled && onClick) {
			onClick();
		}
	};

	return (
		<button
			className={`btn ${className}`}
			onClick={onBtnClick}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};

export default Button;
