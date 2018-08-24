import { Component } from 'react'
import Link from 'next/link'

import styles from './logo.styles'

import { structureManager, polygonsTransitions, polygons } from '../helpers/logo'

export default ({ shape = 'logo', modifier }) => {
  const structure = (structureManager[shape] || structureManager.logo)()
  const shapeName = structureManager[shape] ? shape : 'logo' // In case it's a shape without structure defined, use logo

  return (
    <Link href='/blog'>
      <div className={`logo root ${modifier} ${shapeName}`}>
        {
          structure.map(({ modifier = '' }, i) => (
            <div key={i} className={`${shapeName}-piece polygon-${++i} polygon ${modifier}`}></div>
          ))
        }
        <style global jsx>{styles}</style>
        <style global jsx>{`
          ${ polygons(structureManager.logo(), 'logo')}
          ${ polygons(structureManager.photography(), 'photography')}
          ${ polygons(structureManager.experiment(), 'experiment')}
          ${ polygons(structureManager.blog(), 'blog')}
          ${ polygonsTransitions()}

          .polygon {
            position: absolute;
            height: 100%;
            width: 100%;
            opacity: 1;
            background: #333;
          }

          .polygon::before {
            content: "";
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0); top: 0; left: 0;
            position: absolute;
          }`}</style>
      </div>
    </Link>
  )
}
