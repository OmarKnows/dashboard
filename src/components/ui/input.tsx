import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				'flex h-10 w-full border-solid border-2 rounded bg-white border-stoke py-3 ps-5 placeholder:text-sm text-gray text-sm disabled:bg-disabled',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = 'Input';

export { Input };
