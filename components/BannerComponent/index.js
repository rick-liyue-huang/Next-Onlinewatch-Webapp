import React from 'react';
import styles from './banner.module.css'
import Image from 'next/image';


const BannerComponent = (props) => {
	const {title, subTitle, imgUrl} = props;
	const playHandler = () => {
		console.log('play banner')
	}

	return (
		<div className={styles.container}>
			<div className={styles.leftWrapper}>
				<div className={styles.left}>
					<div className={styles.nseriesWrapper}>
						<p className={styles.firstLetter}>O</p>
						<p className={styles.series}>N L I N E</p>
						<p className={styles.firstLetter}>W</p>
						<p className={styles.series}>A T C H</p>
					</div>
					<h3 className={styles.title}>{title}</h3>
					<h5 className={styles.subTitle}>{subTitle}</h5>
					<div className={styles.playBtnWrapper}>
						<button className={styles.btnWithIcon} onClick={playHandler}>
							<Image
								src={'/static/icons/banner-play.svg'}
								alt={'play banner'} width={32} height={32}
							/>
							<span className={styles.playText}>
								PLAY
							</span>
						</button>
					</div>

				</div>
			</div>

			<div
				className={styles.bannerImg}
				style={{backgroundImage: `url(${imgUrl})`,
					width: '100%', height: '100%', position: 'absolute',
				backgroundSize: 'cover', backgroundPosition: '50% 50%'}} />
		</div>
	);
};

export default BannerComponent;
