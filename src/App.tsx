import { Input } from '@/components/ui/input';
import Card from './shared/components/Card';
import { Switch } from './components/ui/switch';
import { DatePicker } from './shared/components/DatePicker';
import { Checkbox } from './components/ui/checkbox';

function App() {
	return (
		<>
			<div className='w-96'>
				<Card title='Input fields'>
					<Input type='text' placeholder='Default Input Text' />
					<Input type='file' className='my-3' />
					<Input type='text' placeholder='Disabled Input Text' disabled />
				</Card>

				<Card title='Toggle Switch input'>
					<Switch variant='md' />
					<Switch variant='md' icon />
					<Switch variant='lg' />
					<Switch variant='lg' icon={true} />
				</Card>

				<Card title='Date Picker'>
					<DatePicker />
				</Card>

				<Card title='Check Boxes'>
					<Checkbox />
					<Checkbox rounded />
				</Card>
			</div>
		</>
	);
}

export default App;
