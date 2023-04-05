import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Image First',
    github: 'https://github.com',
    demo: 'https://ello.co/taudalpoi/post/lgsomeffw2ijvx3wfmepoq'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Image Second',
    github: 'https://github.com',
    demo: 'https://ello.co/taudalpoi/post/lgsomeffw2ijvx3wfmepoq'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Image Third',
    github: 'https://github.com',
    demo: 'https://ello.co/taudalpoi/post/lgsomeffw2ijvx3wfmepoq'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio Image Fourth',
    github: 'https://github.com',
    demo: 'https://ello.co/taudalpoi/post/lgsomeffw2ijvx3wfmepoq'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Image Fifth',
    github: 'https://github.com',
    demo: 'https://ello.co/taudalpoi/post/lgsomeffw2ijvx3wfmepoq'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio Image Sixth',
    github: 'https://github.com',
    demo: 'https://ello.co/taudalpoi/post/lgsomeffw2ijvx3wfmepoq'
  },
]

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
