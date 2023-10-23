import React, { ReactNode } from 'react';

interface ICardProps {
	title: string;
	children: ReactNode;
}

const Card: React.FC<ICardProps> = ({ title, children }) => {
	return (
		<div>
			<div className='border-solid border-2 border-stoke rounded-sm w-full h-full pt-4 px-6 pb-6 bg-white'>
				<p className='text-dark'>{title}</p>
				<div className='border-t border-stoke mb-6 mt-4 -mx-6'></div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Card;
