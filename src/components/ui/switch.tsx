import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';
import { MdCheck, MdClose } from 'react-icons/md';
import { useState } from 'react';

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
		variant?: 'md' | 'lg';
		icon?: boolean;
	}
>(({ className, variant, icon, ...props }, ref) => {
	const [checked, setChecked] = useState(false);
	return (
		<SwitchPrimitives.Root
			className={cn(
				'peer inline-flex w-[44px] shrink-0 grow-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-lightgray',
				{
					'h-3': variant === 'md',
					'h-5': variant === 'lg',
				},
				className
			)}
			{...props}
			checked={checked}
			onCheckedChange={() => setChecked(!checked)}
			ref={ref}
		>
			<SwitchPrimitives.Thumb
				className={cn(
					'pointer-events-none block h-5 w-5 rounded-full data-[state=unchecked]:bg-white shadow-lg ring-0 transition-transform data-[state=checked]:bg-primary data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 mx-1',
					{
						'flex items-center justify-center': icon,
					}
				)}
			>
				{icon && (
					<div>{checked ? <MdCheck size='0.7rem' color='white' /> : <MdClose size='0.7rem' color='gray' />}</div>
				)}
			</SwitchPrimitives.Thumb>
		</SwitchPrimitives.Root>
	);
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
