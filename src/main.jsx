import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProfilePictureProvider from './components/globalStates/profilePictureContext'
import ErrorProvider from './components/globalStates/errorContext.jsx'
import DetailsProvider from './components/globalStates/detailsContext.jsx'
import ImageLoadingProvider from './components/globalStates/imageLoadingContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfilePictureProvider>
      <ErrorProvider>
        <DetailsProvider>
          <ImageLoadingProvider>
            <App />
          </ImageLoadingProvider>
        </DetailsProvider>
      </ErrorProvider>
    </ProfilePictureProvider>
  </StrictMode>,
)
