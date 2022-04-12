import React, {useState} from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"
import cls from 'classnames';
import styles from './card.module.css';

const CardComponent = (props) => {
	const {imgUrl = 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', size = 'medium'} = props;

	const [imgSrc, setImgSrc] = useState(imgUrl);

	const onErrorHandler = () => {
		console.log('hi error');
		setImgSrc('https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')
	}

	const classMap = {
		'large': styles.lgItem,
		'medium': styles.mdItem,
		'small': styles.smItem
	}

	return (
		<div
			className={styles.container}
		>
			<motion.div
				whileHover={{ scale: 1.1 }}
				onHoverStart={e => {}}
				onHoverEnd={e => {}}
				className={cls(classMap[size], styles.imgMotionWrapper)}
			>
				<Image className={styles.cardImg}
					src={imgSrc} alt={'image'} layout={'fill'}
							 onError={onErrorHandler}
				/>
			</motion.div>
		</div>
	);
};

export default CardComponent;
