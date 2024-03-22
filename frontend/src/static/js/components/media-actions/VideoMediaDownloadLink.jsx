import React, {useState} from 'react';
import {usePopup} from '../../utils/hooks/';
import {SiteContext} from '../../utils/contexts/';
import {MediaPageStore} from '../../utils/stores/';
import {formatInnerLink} from '../../utils/helpers/';
import {CircleIconButton, MaterialIcon, NavigationContentApp, NavigationMenuList, PopupMain} from '../_shared/';

function downloadOptionsList() {
    const media_data = MediaPageStore.get('media-data');

    const title = media_data.title;
    const encodings_info = media_data.encodings_info;

    const optionsList = {};

    let k, g;
    for (k in encodings_info) {
        if (encodings_info.hasOwnProperty(k)) {
            if (Object.keys(encodings_info[k]).length) {
                for (g in encodings_info[k]) {
                    if (encodings_info[k].hasOwnProperty(g)) {
                        if ('success' === encodings_info[k][g].status && 100 === encodings_info[k][g].progress && null !== encodings_info[k][g].url) {
                            optionsList[encodings_info[k][g].title] = {
                                text: k + ' - ' + g.toUpperCase() + ' (' + encodings_info[k][g].size + ')',
                                link: formatInnerLink(encodings_info[k][g].url, SiteContext._currentValue.url),
                                linkAttr: {
                                    target: '_blank',
                                    download: media_data.title + '_' + k + '_' + g.toUpperCase(),
                                },
                            };
                        }
                    }
                }
            }
        }
    }

    optionsList.original_media_url = {
        text: 'Original file (' + media_data.size + ')',
        link: formatInnerLink(media_data.original_media_url, SiteContext._currentValue.url),
        linkAttr: {
            target: '_blank',
            download: media_data.title,
        },
    };

    return Object.values(optionsList);
}

function downloadOptionsPages() {
    return {
        main: (
            <div className="popup-fullscreen">
                <PopupMain>
                    <span className="popup-fullscreen-overlay"></span>
                    <NavigationMenuList items={downloadOptionsList()}/>
                </PopupMain>
            </div>
        ),
    };
}

export function VideoMediaDownloadLink(props) {
    const [popupContentRef, PopupContent, PopupTrigger] = usePopup();

    const [downloadOptionsCurrentPage, setDownloadOptionsCurrentPage] = useState('main');

    return (
        <div className="video-downloads">
            <PopupTrigger contentRef={popupContentRef}>
                <button>
                    <CircleIconButton type="span">
                        <MaterialIcon type="arrow_downward"/>
                    </CircleIconButton>
                    <span>DOWNLOAD</span>
                </button>
            </PopupTrigger>

            <PopupContent contentRef={popupContentRef}>
                <NavigationContentApp
                    initPage={downloadOptionsCurrentPage}
                    pageChangeSelector={'.change-page'}
                    pageIdSelectorAttr={'data-page-id'}
                    pages={downloadOptionsPages()}
                    focusFirstItemOnPageChange={false}
                    pageChangeCallback={null}
                />
            </PopupContent>
        </div>
    );
}
