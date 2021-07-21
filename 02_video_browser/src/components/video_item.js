import React from 'react'

function ViedoItem({videos}) {

    return (
        <div className="video-item">
            <div className="row">
                <div className="col mr-0">
                    <img alt="" src={videos.thumbnails.default.url} />
                </div>
                <div className="col pr-0 pl-0 ml-0 mr-0" style={{fontSize:'13px'}}>
                    {videos.title}
                </div>
            </div>
        </div>
    )
}
export default ViedoItem;