// import PropTypes from 'prop-types';

import { Box } from '../components/Box';
import { Sticker } from './Sticker';

export const StickerList = ({ stickers, onSelect }) => {
  return (
    <Box as="ul" display="flex" gridGap={4} p={2}>
      {stickers.map((sticker, idx) => (
        <li key={idx}>
          <Sticker sticker={sticker} onSelect={onSelect} />
        </li>
      ))}
    </Box>
  );
};

// StickerList.propTypes = {
//   stickers: PropTypes.arrayOf.isRequired,
//   sticker: PropTypes.object.isRequired,
// };
