import React from 'react';
import { ApiUrlConsumer } from '../utils/contexts/';
import { MediaListWrapper } from '../components/MediaListWrapper';
import { LazyLoadItemListAsync } from '../components/item-list/LazyLoadItemListAsync.jsx';
import { Page } from './Page';

interface HorseTagsPageProps {
  id?: string;
  title?: string;
}

export const HorseTagsPage: React.FC<HorseTagsPageProps> = ({ id = 'horsetags', title = 'Horses' }) => (
  <Page id={id}>
    <ApiUrlConsumer>
      {(apiUrl) => (
        <MediaListWrapper title={title} className="items-list-ver">
          <LazyLoadItemListAsync singleLinkContent={true} inTagsList={true} requestUrl={apiUrl.archive.horsetags} />
        </MediaListWrapper>
      )}
    </ApiUrlConsumer>
  </Page>
);