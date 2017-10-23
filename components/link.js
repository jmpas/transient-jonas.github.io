import Router from 'next/router'

function onClickHandler (href, as, middleware, delay) {
  return (e) => {
    e.preventDefault()
    if (Router.pathname === href) return

    middleware()
    setTimeout(() => Router.push(href, as), delay)
  }
}

export default ({ children, href, as, middleware, delay }) => (
  <a href='#' onClick={ onClickHandler(href, as, middleware, delay) }>
    { children }
  </a>
)
