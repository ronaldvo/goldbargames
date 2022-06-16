import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import mangaA from '../../assets/mangaA.png';
import manga from '../../assets/mangafull.png';
import manga2 from '../../assets/manga2.png';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';
import '../../css/manga.css';

const Manga = (): JSX.Element => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [continueText, setContinueText] = useState(0);  

  const continueButton = [
    'To be continued...',
    '...?',
    'Cardano NFT with persistent progression coming soon'
  ];

  let count = 0;

  const openLightbox = (index: number): void => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = (): void => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
 
  const easterEggClick = (index: number): void => {
    count++;
    setContinueText(count); 
  };  

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: manga,
      source: manga,
      rows: 1,
      cols: 3,
    },
  ];

  return (
    <Box>
    
      <Box>
        <ImageList
          variant="quilted"
          cols={3}
          gap={isMd ? 16 : 4}
          style={{
            overflow: 'visible !important;'
          }}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols} rows={item.rows}
            
            >
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                wrapperClassName={'shadow'}
                effect="blur"
                onClick={() => openLightbox(i)}
                style={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'none' : 'none',
                  cursor: 'pointer',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() => setCurrentImage((currentImage + photos.length - 1) % photos.length)}
          onMoveNextRequest={() => setCurrentImage((currentImage + 1) % photos.length)}
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
      <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2} marginTop={5}>
        <Button
          color="primary"
          size="large"
          variant="contained"
          onClick={() => easterEggClick(count)}
        >
          { continueButton[continueText] }
        </Button>
      </Box>        
    </Box>
  );
};

export default Manga;
