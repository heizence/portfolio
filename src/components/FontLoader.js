import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

// You can add Google Font styles to fontOption array and apply it on App.css file. 
// Change font-family property at * {}.

const fontOption = [
    {
      font: 'Roboto',
      weights: [400, '400i'],
    },
    {
      font: 'Roboto Mono',
      weights: [400, 700],
    },
    {
      font: 'Montserrat'
    }
  ]

const FontLoader = () => {
    return (
        <GoogleFontLoader
        fonts={fontOption}
        subsets={['cyrillic-ext', 'greek']}
      />
    )
}

export default FontLoader;
