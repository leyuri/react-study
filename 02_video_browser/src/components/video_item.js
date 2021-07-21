

import React from 'react'

function ViedoItem(props) {

    const video = {
        channelId: "UCOmHUn--16B90oW2L6FRR3A",
        channelTitle: "BLACKPINK",
        description: "BLACKPINK - 'How You Like That' 보란 듯이 무너졌어 바닥을 뚫고 저 지하까지 옷 끝자락 잡겠다고 저 높이 두 손을 뻗어봐도 다시 캄캄한 이곳에 light up the sky 네 ...",
        id: "ioNng23DkIM",
        kind: "youtube#video",
        link: "https://www.youtube.com/watch?v=ioNng23DkIM",
        publishedAt: "2020-06-26T08:58:14Z",
        thumbnails: {
            default: { url: "https://i.ytimg.com/vi/ioNng23DkIM/default.jpg", width: 120, height: 90 },
            high: { url: "https://i.ytimg.com/vi/ioNng23DkIM/hqdefault.jpg", width: 480, height: 360 },
            medium: { url: "https://i.ytimg.com/vi/ioNng23DkIM/mqdefault.jpg", width: 320, height: 180 },
        },

        title: "BLACKPINK - &#39;How You Like That&#39; M/V"
    }

    return (
        <div className="video-item">
            <div className="row">
                <div className="col">
                    <img alt="" src={video.thumbnails.default.url} />
                </div>
                <div className="col">
                    {video.title}
                </div>
            </div>
        </div>
    )
}
export default ViedoItem;