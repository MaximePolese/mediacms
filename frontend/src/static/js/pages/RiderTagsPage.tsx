import React from 'react';
import { ApiUrlConsumer } from '../utils/contexts/';
import { MediaListWrapper } from '../components/MediaListWrapper';
import { LazyLoadItemListAsync } from '../components/item-list/LazyLoadItemListAsync.jsx';
import { Page } from './Page';
import {translate_string} from "../utils/helpers";

interface RiderTagsPageProps {
  id?: string;
  title?: string;
}

export const RiderTagsPage: React.FC<RiderTagsPageProps> = ({ id = 'ridertags', title = translate_string('Riders') }) => (
  <Page id={id}>
    <ApiUrlConsumer>
      {(apiUrl) => (
        <MediaListWrapper title={title} className="items-list-ver">
          <LazyLoadItemListAsync singleLinkContent={true} inTagsList={true} requestUrl={apiUrl.archive.ridertags} />
        </MediaListWrapper>
      )}
    </ApiUrlConsumer>
  </Page>
);