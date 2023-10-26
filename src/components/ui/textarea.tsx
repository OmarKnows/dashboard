import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				'flex min-h-[80px] w-full text-gray rounded-md border border-border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2  disabled:bg-disabled dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray dark:focus-visible:ring-gray-300',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = 'Textarea';

export { Textarea };
