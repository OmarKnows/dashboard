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
				className='w-full h-full border-solid border-2 rounded bg-white border-stoke py-3 ps-5 placeholder:text-sm text-gray text-sm disabled:bg-disabled'
				type={type}
				disabled={disabled}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
