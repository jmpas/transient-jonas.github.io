import ReactGA from 'react-ga'

export function initGA() {
  ReactGA.initialize('UA-63071852-1', {
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  })
}

export function logPageView() {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
