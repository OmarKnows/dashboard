import { Input } from '@/components/ui/input';
import Card from './shared/components/Card';
import { Switch } from './components/ui/switch';

function App() {
	return (
		<>
			<div className='w-96'>
				<Card title='omar'>
					<Input type='email' placeholder='Email' />
					<Switch />
				</Card>
			</div>
		</>
	);
}

export default App;
