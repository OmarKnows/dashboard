import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				{
					'ps-3 py-3': type !== 'file',
					'file:text-sm': type === 'file',
				},
				'flex h-10 w-full  file:bg-border file:h-full file:border-0 file:text-gray border-solid border-2 rounded bg-white border-border placeholder:text-sm text-gray text-sm disabled:bg-disabled',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = 'Input';

export { Input };
