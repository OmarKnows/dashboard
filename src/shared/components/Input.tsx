export enum EInputTypes {
	text = 'text',
	email = 'email',
	password = 'password',
}

interface IInputProps {
	type?: EInputTypes;
	disabled?: boolean;
	placeholder?: string;
}
const Input: React.FC<IInputProps> = ({ type = EInputTypes.text, disabled = false, placeholder = '' }) => {
	return (
		<div>
			<input
				className='w-64 h-12 border-solid border-2 rounded bg-white border-stoke py-3 ps-5 placeholder:text-sm text-gray text-sm'
				type={type}
				disabled={disabled}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
