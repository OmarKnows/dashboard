import { Input } from '@/components/ui/input';
import Card from './shared/components/Card';
import { Switch } from './components/ui/switch';
import { DatePicker } from './shared/components/DatePicker';
import { Checkbox } from './components/ui/checkbox';
import { Textarea } from './components/ui/textarea';
import Select, { components } from 'react-select';
import { TbWorld } from 'react-icons/tb';

function App() {
	const options = [
		{ value: 'USA', label: 'United States' },
		{ value: 'UAE', label: 'United Arab Emirates' },
		{ value: 'UK', label: 'United Kingdom' },
	];

	return (
		<div className='grid grid-cols-3 gap-4 p-3'>
			<Card title='Input fields'>
				<Input type='text' placeholder='Default Input Text' />
				<Input id='picture' type='file' />
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
				<Select
					components={{
						Control: ({ children, ...rest }) => (
							<components.Control {...rest} className='ps-3'>
								{!rest.isMulti && <TbWorld color='gray' />}
								{children}
							</components.Control>
						),
						IndicatorSeparator: null,
					}}
					options={options}
					isMulti
				/>
				<Select
					components={{
						Control: ({ children, ...rest }) => (
							<components.Control {...rest} className='ps-3'>
								{!rest.isMulti && <TbWorld color='gray' />}
								{children}
							</components.Control>
						),
						IndicatorSeparator: null,
					}}
					options={options}
				/>
			</Card>
		</div>
	);
}

export default App;
