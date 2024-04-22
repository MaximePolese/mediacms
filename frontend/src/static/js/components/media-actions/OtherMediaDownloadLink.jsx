import React from 'react';
import PropTypes from 'prop-types';
import {CircleIconButton, MaterialIcon} from '../_shared/';
import {translate_string} from "../../utils/helpers";

export function OtherMediaDownloadLink(props) {
    return (
        <div className="download">
            <a href={props.link} target="_blank" download={props.title} title={translate_string("Download")} rel="noreferrer">
                <CircleIconButton type="span">
                    <MaterialIcon type="arrow_downward"/>
                </CircleIconButton>
                <span>{translate_string('DOWNLOAD')}</span>
            </a>
        </div>
    );
}

OtherMediaDownloadLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
