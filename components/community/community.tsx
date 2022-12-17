import React from 'react';
import { Grid, Row, Spacer } from '@/components';
import { StyledCommunityCard } from './styles';
import { Twitter, LinkedIn, Github, Title, Subtitle } from '@/components';
import withDefaults from '@/utils/with-defaults';

export interface CommunityProps {
  twitter?: string;
  github?: string;
  linkedin?: string;
}

const defaultProps = {
  twitter: 'https://twitter.com/buchanandevops',
  github: 'https://github.com/buchanandevops',
  linkedin: 'https://discord.gg/JBuchananDev#5532',
};


const Community: React.FC<CommunityProps> = ({ twitter, github, linkedin }) => {
  return (
    <Grid.Container justify="center" gap={2} css={{ position: 'relative' }}>
      <Grid xs={12} direction="column" css={{ mb: '$10' }}>
        <Row justify="center">
          <Title css={{ textAlign: 'center' }}>Get in Touch</Title>
        </Row>
        <Row justify="center">
          <Subtitle css={{ textAlign: 'center' }}>
            Get your business on the Map. Everyone business is Welcome!
          </Subtitle>
        </Row>
      </Grid>
      <Grid xs={12} sm={6} md={3} justify="center">
        <StyledCommunityCard
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row justify="flex-start" align="center">
            <Twitter fill="#00ACEE" size={30} />
            <Spacer />
            <h5>Twitter</h5>
          </Row>
          <Spacer />
          <Row justify="flex-start" align="center">
            <p style={{ color: '$accents8', textAlign: 'left' }}>
              For announcements, tips and general information.
            </p>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <Grid xs={12} sm={6} md={3} justify="center">
        <StyledCommunityCard
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row justify="flex-start" align="center">
            <LinkedIn fill="#7289DA" size={30} />
            <Spacer />
            <h5>Discord</h5>
          </Row>
          <Spacer />
          <Row justify="flex-start" align="center">
            <p style={{ color: '$accents8' }}>
              To get involved in the community, ask questions and share tips.
            </p>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <Grid xs={12} sm={6} md={3} justify="center">
        <StyledCommunityCard
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row justify="flex-start" align="center">
            <Github className="github-icon" fill="#E7E7E7" size={30} />
            <Spacer  />
            <h5>GitHub</h5>
          </Row>
          <Spacer  />
          <Row justify="flex-start" align="center">
            <p style={{ color: '$accents8' }}>
              For issues, feature requests and contribute.
            </p>
          </Row>
        </StyledCommunityCard>
      </Grid>
    </Grid.Container>
  );
};

export default withDefaults(Community, defaultProps);
