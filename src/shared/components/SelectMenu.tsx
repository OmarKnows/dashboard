import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TbWorld } from 'react-icons/tb';

const SelectMenu = () => {
	return (
		<Select>
			<SelectTrigger className='w-full border text-gray border-border justify-start gap-2'>
				<TbWorld />
				<SelectValue placeholder='Country' />
			</SelectTrigger>
			<SelectContent className='text-gray'>
				<SelectItem value='USA'>United States</SelectItem>
				<SelectItem value='UK'>United Kingdom</SelectItem>
				<SelectItem value='UAE'>United Arab Emirates</SelectItem>
			</SelectContent>
		</Select>
	);
};

export default SelectMenu;
