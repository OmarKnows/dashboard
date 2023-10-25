import { Input } from '@/components/ui/input';
import Card from './shared/components/Card';

function App() {
	return (
		<>
			<div className='w-96'>
				<Card title='omar'>
					<Input type='email' placeholder='Email' />
				</Card>
			</div>
		</>
	);
}

export default App;
