import { Input } from '@/components/ui/input';
import Card from './shared/components/Card';
import { Switch } from './components/ui/switch';
import { DatePicker } from './shared/components/DatePicker';
import { Checkbox } from './components/ui/checkbox';
import { Textarea } from './components/ui/textarea';
import SelectMenu from './shared/components/SelectMenu';

function App() {
	return (
		<div className='grid grid-cols-3 gap-4 p-3'>
			<Card title='Input fields'>
				<Input type='text' placeholder='Default Input Text' />
				<Input type='file' className='my-3' />
				<Input type='text' placeholder='Disabled Input Text' disabled />
			</Card>

			<Card title='Toggle Switch input'>
				<Switch variant='md' />
				<Switch variant='lg' />
				<Switch variant='md' icon />
				<Switch variant='lg' icon />
			</Card>

			<Card title='Date Picker'>
				<DatePicker />
			</Card>

			<Card title='Check Boxes'>
				<Checkbox />
				<Checkbox rounded />
			</Card>

			<Card title='Text area fields'>
				<Textarea className='mb-3' />
				<Textarea disabled />
			</Card>

			<Card title='Dropdown menu fields'>
				<label>Select Country</label>
				<SelectMenu />
			</Card>
		</div>
	);
}

export default App;
