# video_browser
원하는 비디오 영상을 검색할 수 있다 🔎

### Development environment
- react.js
- node.js
- react-bootstrap, react-fontawesome
- youtube-search, google cloud platform(YouTube Data API v3)



### Features
- 검색어에 맞는 비디오 리스트를 보여준다.

### Components
- search_bar : search term 전달함
- video_detail : video list 를 받아서 각각의 video item 에 전달함
- video_item : 재생하고자 하는 video 가 선택되었을 때 알려줌
- video_list : 선택된 video 가 바귀었을 때 화면에 보여주도록 함


### Screenshots
<img width="1321" alt="Screen Shot 2021-08-02 at 11 51 03 PM" src="https://user-images.githubusercontent.com/33794732/127881553-1305f275-1c7e-4459-b46f-4d894c43ae99.png">

### What I learned
- API 사용법
   - YouTube Data API v3
   - React.createElement로 변환됨 
   - API 결정 시, 유지보수성에 대해 항상 유의할 것
- Component Lifecycle
   - ComponentDidMount
   - ComponentDidUpdate 
   - ComponentWillUnmount
