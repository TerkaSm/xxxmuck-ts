import './style.css'

export const ErrorPage = () => {
	return (
		<main>
			<section className='error'>
				<div className='error__content'>
					<h1 className='error__title'>404: Tady nic není</h1>
					<p className='error__text u-padding-bottom'>Asi jste se spletli</p>
					<button src={'/'}>Zpět domů</button>
				</div>
			</section>
		</main>
	)
}
