let currentIndex = 0;
const markers = [];
const tocList = document.getElementById('toc-list');

// 1. 내가 걸었던 경로 데이터
const journeyData = [
    {
        id: 0,
        title: "1. 출발; 아는 길, 모르는 길",
        lat: 0,
        lng: 0, 
        description: "5월 9일 13시 26분 걷기 시작했다.<br>경로는 두 부분으로 구성했다.<br>내가 졸업한 교육기관을 전부 지나는 고등학교 등굣길을 첫 부분으로 삼았다.<br>너무나 익숙하지만 매번 새로움을 느꼈던 의미 있는 길이다.<br>두 번째 경로는 첫 경로의 끝에서 결정하기로 했다.",
        image: "images/photo1.jpg"
    },
    {
        id: 1,
        title: "2. 주의를 돌리는 감각",
        lat: 37.538566, 
        lng: 126.731622, 
        description: "시작과 동시에 머릿속은 과제에 대한 걱정으로 가득 찼다.<br>과제의 내용을 걱정하며 걸었다는 말로 가득 찬 끔찍한 과제를 제출하고 싶지는 않았으므로<br>서둘러 주의를 돌리려 노력했다.<br>다행히도 비가 한차례 내리고 맑게 갠 하늘은 나를 감각에 집중시키기에 충분했다.<br>부드럽게 흐르는 시원한 공기, 피부로 전해지는 따스한 복사열, 유달리 채도가 높아 보이는 길을 한껏 느끼며 걸었다.",
        image: "images/photo2.jpg"
    },    
    {
        id: 2,
        title: "3. 연쇄 불안",
        lat: 37.540493, 
        lng: 126.731577, 
        description: "감각에 집중하며 걷다보니 내가 졸업한 중학교는 이미 지나치고 초등학교 옆을 걷고 있었다.<br>불현듯 이 경로가 여러 옛 기억들이 떠오르게 만들기를 기대하며 선택했었다는 생각이 떠올랐다.<br>그래서 이 길과 관련된 기억들을 떠올리려 애써봤지만 끝내 과제들 중 무엇을 먼저 해결할지 고민하던 지난 주의 기억밖에 떠오르지 않았다.<br>이 과제에 쓰기 좋은 의미있는 기억을 떠올려야 한다는 강박 때문일지도 모른다는 생각이 들었다.<br>강박이 생각을 방해하니 아무 생각도 떠오르지 않아 더 불안해졌다.<br>마감 기한 직전에 글을 쓰는 기분이었다.",
        image: "images/photo2.jpg"
    },
    {
        id: 3,
        title: "4. 환기와 환기",
        lat: 37.543078, 
        lng: 126.728972, 
        description: "불안에 휩싸여 머리가 아파올 때 즈음 지하철역에 도착했다.<br>지하에 위치한 역의 두 출입구를 육교처럼 활용하면 횡단보도 3개의 신호를 기다리지 않고 길을 건널 수 있다.<br>역을 드나들 때에는 종종 강한 바람이 분다. 꽤나 불쾌한 냄새와 함께 얼굴을 강하게 때리는 바람은 하고 있던 생각들을 날려버리곤 한다.<br>이번에도 바람이 불러일으킨 약간의 불만과 궁금증으로 불안은 잊혀졌다.<br>역을 나와서도 그 바람에 관해 생각했다.<br>강한 바람이 부는 원인은 아마 지상과 역 간의 기압차 때문일 것이라거나, <br>지하에 위치한 역은 환기 시설이 잘 작동하지 않으면 공기가 사람을 죽이기에 충분히 나빠질 수 있겠다는 생각들을 했다. <br>딱히 도움이 되거나 옳은지도 알 수 없지만 바람을 맞을 때마다 비슷한 생각을 해왔다는 것이 생각났다.<br>스스로 상상을 자주 하지 않는 사람이라고 생각해왔지만 딱히 그렇지도 않다는 것을 알게 되었다.",
        image: "images/.jpg"
    },
    {
        id: 4,
        title: "5. 생존 본능",
        lat: 37.544291, 
        lng: 126.729196, 
        description: "생각을 이어 나가려던 찰나, 신호등 없이 찻길을 지나고 못보던 꽃이 보이니 정신이 없어졌다.<br> 좁고 더러운 인도, 마찬가지로 좁은 차도에서 들리는 시끄러운 엔진 소리는 나의 감각을 다시 깨웠다.<br>주위를 살피지 않고 생각에 몰입해 있다가는 무언가에 치이거나 무언가를 치게 될 것이라는 예감 때문이었을 것이다.<br>서둘러 그곳에서 벗어나 걷다보니 내가 위협이나 그로 인한 스트레스를 과하게 느끼는 것인지 의문이 들었다.",
        image: "images/.jpg"
    },
    {
        id: 5,
        title: "6. 주의력 결핍?",
        lat: 37.547008, 
        lng: 126.728787,
        description: "그마저도 가팔라지는 길의 끝자락에서 고등학교가 보이자 생각하기를 그만두었다.<br>졸업한 이후에는 지나칠 때면 왜인지 미소를 짓게 된다. 학교생활에 불만이 많았기 때문에 그 이유가 매번 궁금했지만 이번에도 알아낼 수는 없었다.<br>깊게 생각하기는 금세 포기하고 스승의 날에 찾아뵐 선생님께서 아직 이 학교에 남아 계신지 확인해 봐야겠다는 생각을 했다.",
        image: "images/.jpg"
    },
    {
        id: 6,
        title: "7. 갈림길",
        lat: 37.547585, 
        lng: 126.728848,
        description: "세 가지의 선택지가 있었다.<br>산 너머의 강을 따라 북동 방향으로 서울을 향해 걷는 것,<br> 반대로 북서방향으로 강을 따라 바다를 향해 걷는 것,<br>산을 등지고 남동방향으로 가톨릭대 방향으로 걷는 것<br>큰 고민 없이 바다가 보고 싶어 두 번째 선택지를 골랐다.<br>결정을 빨리 내린 스스로에게 놀랐다.<br>음료수 고르기에도 5분 이상 걸리던 나와는 다른 사람이 된 것 같아 뿌듯한 기분도 들었다.<br>전에도 이런 모습이 있었는지 떠올려 보았지만 응답은 없었다.",
        image: "images/.jpg"
    },
    {
        id: 7,
        title: "8. 모험",
        lat: 37.547602, 
        lng: 126.721700,
        description: "이후로는 거의 와 본 적이 없거나 아예 모르는 길들이 남아있었다. 발걸음을 옮길 때마다 새로운 풍경이 펼쳐졌다.<br>괜스레 지나가는 사람들을 관찰하기도 하고 지름길을 찾으려다 막다른 길목으로 들어서기도 했다. <br>집에서 그리 멀지 않은 곳임에도 길을 잘 모르고 모험심에 들뜨는 것이 조금 민망했다.<br>너무 다니던 곳만 다녔던 것은 아닌지 돌아보게 되었다.",
        image: "images/.jpg"
    },
    {
        id: 8,
        title: "9. 목적을 분명히 할 것",
        lat: 37.546507, 
        lng: 126.718266,
        description: "어쩌다 보니 또 막다른 길에 가로막혔다.<br>돌아서 가기에는 목적지에서 너무 멀어진다고 판단하여 산을 조금 가로질러 가기로 결정했다.<br>예상치 못한 곳에서 가로막혀 예정에 없던 산행을 하니 몹시 당황했다. 길을 찾지 못하거나 너무 지쳐 목적지에 도착하지 못할까 봐 겁이 났다.<br>산길은 꽤나 보기 좋은 경관이었고 그것을 알아챘으나 불안과 걱정이 앞서 눈에 들어오지 않았다.<br>다행히도 금방 산을 벗어나 큰 길을 찾을 수 있었지만 여전히 걱정은 사라지지 않았다. 방향을 잃은 것은 아닌지, 걸어서 갈 수 있는 길이 없는 것은 아닌지 하는 생각에 사로잡혔다.<br><br>이제 와서 생각해 보니 목적지에 반드시 가야 할 이유는 없었다. 잘못된 것에 매몰되어 의미없는 걱정에 시야가 더욱 좁아졌던 것 같다.",
        image: "images/.jpg"
    },
    {
        id: 9,
        title: "10. 터널",
        lat: 37.546433, 
        lng: 126.708964,
        description: "길 주변의 건물들이 줄어들고 옆에서 달리는 차들의 속도가 빨라지는 것 같은 느낌에 인도가 끊어지는 것은 아닌가 하는 걱정이 들 때 즈음 터널이 보였다.<br>짧은 터널 너머로 보이는 파란 하늘과 이어져 있는 인도를 보고 크게 안도했다.<br>순풍이 불어오는 터널에 들어서며 마치 다른 세상으로 이동하는 것처럼 느껴졌다. 터널을 소재로 하는 문학 작품들이 떠오르고 그 안에서 터널이 상징하는 것을 느낄 수 있는 것만 같았다. 나중에 창작물을 만들 때 이런 감상을 표현하면 좋겠다는 막연한 생각을 했다.<br>터널을 나오자 어느새 하늘에 구름이 펼쳐져 있었다. 내가 걷는 방향으로 얇게 밀려가는 물결무늬가 횡단보도처럼 보였다.",
        image: "images/.jpg"
    },
    {
        id: 10,
        title: "11. 흉내로 그친",
        lat: 37.551930, 
        lng: 126.691829,
        description: "걷다보니 구름은 더 넓어졌다. 보다보니 연속적으로 나타나는 구름 띠가 해안선과 수평이라는 것을 깨달았다. 불현듯 바다와 육지 사이에는 온도 차이로 인해 바람이 분다는 것이 떠올랐다. 그렇다면 저 구름 모양이 그 바람에 의해 만들어진 것일지도 모른다고 생각했다.<br>그래서 어쩌면 바다가 아주 가까울 수도 있다는 헛된 기대를 하게되었다.<br>목적지가 얼마 남지 않았다는 생각에 괜스레 들떠 주변을 둘러보며 과학자 흉내를 냈다. 마침 길에 나뭇가지가 많이 떨어져 있어 그것을 관찰해 보았다. <br>새가 둥지를 지으려다 떨어뜨린 것이라고 하기에는 너무 많고 길을 따라 길고 고르게 떨어져 있었다.<br>나무가 원래 가지가 잘 부러지는 종이거나 강한 바람에 의해 떨어졌다기에는 그런 나무를 가로수로 심을 사람이 있을 리 없었다.<br>사람이 가지치기를 했다기에는 시기가 애매할뿐더러 바닥에 떨어진 가지들을 치웠을 것이라고 생각했다.<br>생각이 막히니 또 고민하기를 그만두었다.",
        image: "images/.jpg"
    },
    {
        id: 11,
        title: "12. 내가 모르는",
        lat: 37.558156, 
        lng: 126.677243,
        description: "특이한 길을 발견했다. 어딘가 익숙하면서도 낯설었다. 나중에 무언가 만들 때 이런 느낌을 내는 것을 만들고 싶다는 생각이 들어 사진을 찍었다.<br>사진을 찍고 있자니 위화감이 들었다. 평소에도 소프트웨어를 개발하거나 3D 모델링을 할 때 활용할 영감거리들을 모으곤 하는데 이것이 이상했다. 3D 모델링은 그만둔 지 오래고 프로그래밍은 자주 하지도 않는다. 그런데도 이런 것들을 보고 뭔가 만들 생각을 하는 것이 어쩌면 내 흥미나 적성과 관련이 있지 않을까 하는 생각이 들었다.",
        image: "images/wirdspot.jpg"
    },
    {
        id: 12,
        title: "13. 공간, 시간",
        lat: 37.571592,
        lng: 126.668741,
        description: "도심에서 조금 떨어진 강변에서 걷다 보니 하늘이 매우 넓었다. <br>하늘이 너무 넓어서인지 몸이 피로해서인지 강 너머의 건물들이 작아 보였다. 새삼 내가 얼마나 작은지 느껴졌다. 하늘 아래에 저 작은 빌딩조차 나는 홀로 짓지 못할 것이고 심지어는 강을 건너 저곳까지 닿는 것마저도 오래 걸릴 것이라고 생각했다. <br>한편으로는 지금 시대가 굉장히 특수하다는 것을 체감했다. 운송과 통신 기술로 인해 과거와 비교하면 시-공간적 제약이 거의 없다고 봐도 무방하다고 생각했다.<br>과거에 대해 생각하니 옛 사람들에 관한 궁금증이 생겼다. <br>그들은 이 강을 지나며 무슨 생각을 했을까?<br>그들도 이 길을 걸으며 과거나 미래의 사람들에 대해 떠올렸을까?<br>했다면 어느 세대부터?<br>수렵채집을 하던 사람들은 언어가 불충분하거나 생존이 급해서 이런 생각을 하지 않을까?<br>그러나 명백한 답을 내리지 못하고 다른 생각으로 넘어가 버렸다.",
        image: "images/minibuildings.jpg"
    },
    {
        id: 13,
        title: "14. 도착: 열악한 체력",
        lat: 0, 
        lng: 0, 
        description: "이후로 인공지능과 관련된 주제가 여럿 떠올랐지만 곧바로 고민하기를 포기했다. <br>지친 몸은 무언가 깊이 사고하기를 강하게 거부하고 있었다. 왠지 모르게 각각 간격이 100m일 것 같고 0.1씩 줄어드는 숫자가 적힌 표지판을 보고 걷는 것 이외에는 아무것도 할 수 없었다.<br>그렇게 제정신이 아닌 채로 16시 57분 목적지에 닿을 수 있었다. 끝에서 무슨 생각을 했는지는 기억이 잘 나지 않는다. 아마 무거운 노트북을 챙겨간 것을 후회하거나 과제에 대한 부질없는 불평을 하고 있었을 것이다.",
        image: "images/end.jpg"
    }
];


// 2. 지도 초기화
const map = L.map('map').setView([37.5458, 126.7110], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 3. GPX 파일 불러오기 및 시작/끝 좌표 자동 설정
const gpxFile = 'my_route.gpx';

new L.GPX(gpxFile, {
    async: true,
    marker_options: {
        startIconUrl: null, endIconUrl: null, shadowUrl: null
    },
    polyline_options: {
        color: '#286ee6', weight: 8, opacity: 1.0     
    }
}).on('loaded', function(e) {
    const gpxLayer = e.target;
    let allLatLngs = [];
    gpxLayer.getLayers().forEach(layer => {
        if (layer instanceof L.Polyline) {
            allLatLngs = allLatLngs.concat(layer.getLatLngs().flat(Infinity));
        }
    });

    if (allLatLngs.length > 0) {
        journeyData[0].lat = allLatLngs[0].lat;
        journeyData[0].lng = allLatLngs[0].lng;
        journeyData[journeyData.length - 1].lat = allLatLngs[allLatLngs.length - 1].lat;
        journeyData[journeyData.length - 1].lng = allLatLngs[allLatLngs.length - 1].lng;
    }

    buildPresentation();
    map.fitBounds(gpxLayer.getBounds());
}).addTo(map);


// 4. 마커 및 왼쪽 목차 생성 함수
function buildPresentation() {
    journeyData.forEach((point, index) => {
        const popupHTML = `
            <div class="popup-content">
                <img src="${point.image}" alt="${point.title}" onerror="this.style.display='none'">
                <h3>${point.title}</h3>
                <p>${point.description}</p>
            </div>
        `;
        
        // ★ 팝업이 화면 밖으로 잘리지 않도록 지도가 알아서 움직이는 기능 활성화
        const marker = L.marker([point.lat, point.lng]).addTo(map).bindPopup(popupHTML, {
            autoPan: true 
        });
        markers.push(marker);

        const li = document.createElement('li');
        li.textContent = point.title;
        if (index === 0) li.classList.add('active');
        
        li.addEventListener('click', () => {
            goToPoint(index);
        });
        tocList.appendChild(li);
    });

    setTimeout(() => {
        markers[0].openPopup();
    }, 500);
}


// 5. 거리에 따라 동적으로 이동하는 프레젠테이션 동작 함수
function goToPoint(index) {
    // 1. 현재 지점과 이동할 목표 지점의 실제 거리 계산 (미터 단위)
    const currentLatLng = L.latLng(journeyData[currentIndex].lat, journeyData[currentIndex].lng);
    const targetLatLng = L.latLng(journeyData[index].lat, journeyData[index].lng);
    const distance = currentLatLng.distanceTo(targetLatLng); 

    // 인덱스 업데이트
    currentIndex = index;
    const point = journeyData[index];
    
    // 2. 거리에 따라 비행 시간(초)과 줌 레벨 결정
    let flyDuration = 2.0; // 기본 비행 시간
    let targetZoom = 16;   // 기본 줌 레벨

    if (distance === 0) {
        flyDuration = 0.5;
        targetZoom = 16;
    } else if (distance < 500) { 
        flyDuration = 0.8; 
        targetZoom = 17;   
    } else if (distance < 3000) { 
        flyDuration = 1.5;
        targetZoom = 16;
    } else { 
        flyDuration = 2.5; 
        targetZoom = 14;   
    }

    // 3. 이동 시작 시 팝업 닫기
    map.closePopup();

    // 4. 계산된 시간과 줌 레벨을 적용하여 이동
    map.flyTo([point.lat, point.lng], targetZoom, {
        animate: true,
        duration: flyDuration
    });

    // 5. ★ 비행하는 시간(flyDuration)에 맞춰서 팝업이 딱 맞게 열리도록 동기화
    setTimeout(() => {
        markers[index].openPopup();
    }, (flyDuration * 1000) + 200);

    // 왼쪽 목차 활성화 상태 업데이트
    const lis = tocList.querySelectorAll('li');
    lis.forEach(li => li.classList.remove('active'));
    lis[index].classList.add('active');
}

function moveToNext() {
    let newIndex = currentIndex + 1;
    if (newIndex >= journeyData.length) newIndex = 0; // 마지막이면 처음으로
    goToPoint(newIndex);
}

// 6. 하단 버튼 이벤트 연결
document.getElementById('prev-btn').addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = journeyData.length - 1; // 처음이면 마지막으로
    goToPoint(newIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
    moveToNext();
});
