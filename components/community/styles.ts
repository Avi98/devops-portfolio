import { styled } from '@/theme/stitches.config';
import { StyledCardBlur } from '@/components';


export const StyledCommunityCard = styled('a', StyledCardBlur, {
  width: '100%',
  minHeight: '140px',
  transition: '$default',
  '& .github-icon > path': {
    fill: '#343434',
  },
  '&:hover': {
    opacity: 0.8,
  },
});
