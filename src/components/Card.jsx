import { useState, useEffect } from 'react';

const Card = (props) => {

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImage, setPokemonImage] = useState('');

	const fetchAPI = (id) => {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then((data) => {
				//console.log(data)
                setPokemonName(data.name);
                setPokemonImage(data.sprites.other.dream_world.front_default);
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

    useEffect(() => {
        fetchAPI(props.id);
    }, [props.id]);

	return (
		<div className='bg-zinc-800 w-60 h-80 border-4 border-zinc-900 p-5 flex flex-col items-center justify-between hover:scale-110 ease-in duration-150 cursor-pointer m-5 hover:bg-zinc-900' onClick={() => props.onClick(props.id)}>
			<img src={pokemonImage} alt={pokemonName} className='mt-5'/>
			<h1 className='text-white font-bold capitalize text-center text-2xl mt-4'>{pokemonName}</h1>
		</div>
	)
}

export default Card
