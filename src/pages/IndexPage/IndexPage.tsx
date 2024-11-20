import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        <Section
          header="Orbiton Shooting Game"
          footer="Connect Your Wallet"
        >
          <Link to="/ton-connect">
            <Cell
              before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Orbiton Menu"
          footer="This is a space shooter game aimed to give you a Nice experience"
        >
          <Link to="/campaign">
            <Cell subtitle="Play Story Mode">Campaign</Cell>
          </Link>
          <Link to="/endless">
            <Cell subtitle="Play Endless mode.">Non-stop Survival</Cell>
          </Link>
          <Link to="/leaderboards">
            <Cell subtitle="Check Leaderboards">Highscores</Cell>
          </Link>
          <Link to="/Game">
            <Cell subtitle="Play Game">Game</Cell>
          </Link>

          
        </Section>
        <Section
        header = "HINDI KO NA KAYA"
        footer = "Mga par wag na tayo mag pitch nakakahiya na"
        >
        </Section>
      </List>
    </Page>
  );
};
