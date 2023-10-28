import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css'

const Page = async () => {

  await new Promise(resolve => setTimeout(resolve, 1500))

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Available Series and Movies</h1>
          <div className={styles.card_section}>
            {
              main_data.map((elements) => {
                return <MovieCard key={elements.id}{...elements} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
