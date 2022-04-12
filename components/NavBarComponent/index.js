import React, {useState} from 'react';
import Image from 'next/image';
import {useRouter} from "next/router";
import Link from 'next/link';
import styles from './navBar.module.css';


const NavBarComponent = (props) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const {username} = props;
	const router = useRouter();

	const homeClickHandler = (e) => {
		e.preventDefault();
		router.push('/')
	}

	const favoriteClickHandler = (e) => {
		e.preventDefault()
		router.push('/browse/my-list')
	}

	const toggleDropDownHandler = (e) => {
		e.preventDefault();
		setShowDropdown(!showDropdown);
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<a className={styles.logoLink} href={'/'}>
					<div className={styles.logoWrapper}>
						<Image
							src={'/static/icons/logo.svg'} alt={'online watch'}
							width={50} height={50}
						/>
					</div>
				</a>
				<ul className={styles.navItems}>
					<li className={styles.navItem} onClick={homeClickHandler}>
						HOME
					</li>
					<li className={styles.navItem2} onClick={favoriteClickHandler}>FAVORITE</li>
				</ul>
				<nav className={styles.navContainer}>
					<div>
						<button
							className={styles.usernameBtn}
							onClick={toggleDropDownHandler}
						>
							<p className={styles.username}>{username}</p>
							<Image
								src={'/static/icons/down.svg'}
								alt={'down'} width={32} height={32}
							/>
						</button>
						{
							showDropdown && (
								<div className={styles.navDropdown}>
									<div>
										<Link href={'/login'}>
											<a
												className={styles.linkName}
											>LOG OUT</a>
										</Link>

									</div>
									<div className={styles.lineWrapper} />
								</div>
							)
						}
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBarComponent;
