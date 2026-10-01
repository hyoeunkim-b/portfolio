import { ProjectOverview, ProjectSectionHeading, ProjectReflections } from "@/components/project-detail/elements";
import { BluedotImage, BluedotScreenGallery } from "./bluedot-media";
import styles from "./bluedot.module.css";

export function BluedotOverview() {
  return <div className={styles.overview}><ProjectOverview metadata={[
    { label: "기업/클라이언트", value: "크리플레이" },
    { label: "진행 기간", value: "2019. 1. – 2020. 12." },
    { label: "역할", value: "UX/UI 디자이너·웹 퍼블리셔" },
    { label: "협업 인원", value: <>디자이너·웹 퍼블리셔 1명(본인)<br />개발자 1명</> },
    { label: "담당 업무", wide: true, value: "웹·앱 및 키오스크 UX/UI, 웹 퍼블리싱, 온·오프라인 브랜드 디자인, SNS 채널 디자인" },
  ]}>
    <p>Bluedot Lounge의 무인 운영 전환에 맞춰, 웹·앱과 키오스크부터 온·오프라인 브랜드 접점까지 디자인을 총괄했습니다. 고객이 구매·출입·좌석 이용을 스스로 쉽고 빠르게 진행하도록 UX/UI를 설계하고 웹 퍼블리싱을 담당했습니다.</p>
    <p>합리적인 가격으로 부담 없이 방문할 수 있는 브랜드를 목표로, 로고 리뉴얼과 캐릭터 개발, 매장 그래픽 등 온·오프라인 브랜딩과 블로그·카카오채널 등 SNS 채널을 관리했습니다. 간편한 이용 경험과 친근한 브랜드 표현을 연결해, 마음과 지갑 모두 가볍게 방문하는 공간을 지향했습니다.</p>
  </ProjectOverview></div>;
}

export default function BluedotContent() {
  return <div className={styles.content}>
    <div className={`${styles.band} ${styles.gray}`}>
      <section className={styles.section}>
        <ProjectSectionHeading label="상황" title="합리적인 가격의 스터디카페, 이용 과정도 가벼울 수 없을까?">
          <p>기존에는 관리자를 통해 현장에서 이용권을 결제해야 해, 고객의 구매가 번거롭고 운영도 관리자 상주에 의존했습니다.</p>
          <p>이를 개선하기 위해 내부적으로 무인 운영으로 전환 요구가 있었고, 고객이 스스로 결제하고 공간을 이용할 수 있는 앱이 필요했습니다.</p>
          <p>동시에 가성비라는 강점을 주요 고객인 20대에게 친근하게 전달할 수 있도록 온·오프라인 브랜드 표현을 정리하고자 했습니다.</p>
        </ProjectSectionHeading>
        <dl className={`${styles.inset} ${styles.situation}`}>
          <div><dt>기존 이용 방식</dt><dd>관리자 문의 → 현장 이용권 결제 → 자유 좌석 이용</dd></div>
          <div><dt>무인 운영 전환의 필요</dt><dd>관리자 상주에 대한 의존과 구매 불편을 줄일 수 있는 무인 이용 체계 필요</dd></div>
          <div><dt>브랜드의 전달 과제</dt><dd>가성비라는 강점을 주요 고객인 20대에게 친근하게 전달할 온·오프라인 브랜드 표현 필요</dd></div>
        </dl>
      </section>
      <section className={styles.section}>
        <ProjectSectionHeading label="목표" title="관리자 도움 없이 이용하고, 부담 없이 몰입하는 공간">
          <p>구매·출입·좌석 이용을 고객 스스로 쉽고 빠르게 진행하도록 서비스 경험을 설계하는 것이 목표였습니다.</p>
          <p>가성비와 친근한 B급 감성을 로고·매장·온라인 채널에 일관되게 담아, 마음과 지갑 모두 가볍게 방문할 수 있는 브랜드를 지향했습니다.</p>
        </ProjectSectionHeading>
        <dl className={`${styles.inset} ${styles.goals}`}>
          <div><dt>무인 구매와 출입</dt><dd>관리자 도움 없이<br />이용권·사물함 결제부터<br />QR 출입까지 스스로 진행</dd></div>
          <div><dt>쉽고 빠른 이용</dt><dd>별도 설명 없이<br />이용 방법을 이해하고<br />좌석 선택까지 간편하게 진행</dd></div>
          <div><dt>부담 없는 브랜드</dt><dd>20대에게 친근한 B급 감성을<br />로고·매장·온라인 채널에<br />일관되게 표현</dd></div>
        </dl>
      </section>
    </div>
    <div className={styles.band}>
      <section className={styles.section}>
        <ProjectSectionHeading label="핵심 이용 흐름" title="구매부터 출입과 좌석 이용까지, 고객 스스로">
          <p>MVP 기능인 이용권·사물함 결제, QR 출입, 좌석 선택·이동을 사용자가 모바일에서 직접 진행하도록 구성했습니다.</p>
          <p>각 단계에서 필요한 선택과 다음 행동을 안내해, 관리자 설명 없이 이용할 수 있도록 설계했습니다.</p>
        </ProjectSectionHeading>
        <div className={styles.inset}><BluedotScreenGallery flow label="핵심 이용 흐름" items={[
          { name: "purchase", title: "이용권·사물함 결제" }, { name: "qr", title: "QR로 매장 출입" }, { name: "seats", title: "좌석 선택·이동·반납" },
        ]} /></div>
      </section>
      <section className={styles.section}>
        <ProjectSectionHeading label="현장 이용" title="매장에서도 관리자 도움 없이 이용하도록">
          <p>키오스크에서 QR 또는 전화번호·비밀번호로 인증하고, 좌석 선택과 이용권 결제를 직접 진행하도록 설계했습니다.</p>
          <p>선택한 좌석 확인부터 결제 시 카드 투입 방법, 문 열림과 자동 로그아웃까지 안내해 현장에서 필요한 행동과 상태를 명확히 전달했습니다.</p>
        </ProjectSectionHeading>
        <div className={styles.inset}><BluedotScreenGallery compact label="키오스크 이용 흐름" items={[
          { name: "kiosk-login", title: "출입 인증 방법 선택" }, { name: "kiosk-seats", title: "좌석 선택" }, { name: "kiosk-payment", title: "카드 결제 방법 안내" }, { name: "kiosk-door", title: "문 열림·자동 로그아웃 안내" },
        ]} /></div>
      </section>
      <section className={styles.section}>
        <ProjectSectionHeading label="편의 기능" title="관찰과 고객 문의를 바탕으로 다듬은 이용 편의 기능">
          <p>이용 행동을 관찰하고 고객 문의를 살피며, 반복 이용의 번거로움과 좌석 선택에 필요한 정보를 확인했습니다.</p>
          <p>주요 기능 접근과 멤버십 연장을 간편하게 하고, 좌석 정보와 출석 모임을 통해 이용을 지원했습니다.</p>
        </ProjectSectionHeading>
        <BluedotScreenGallery label="이용 편의 기능" items={[
          { name: "home", title: "01  주요 기능을 모은 홈", description: "자주 확인하는 이용권 상태와 좌석 선택·출입 QR을 홈에 모아, 필요한 기능에 빠르게 접근하도록 구성했습니다." },
          { name: "renewal", title: "02  기존 멤버십 연장", description: "같은 조건으로 계속 이용할 때 조건을 다시 고르는 번거로움을 줄이기 위해, 기존 멤버십을 그대로 연장하도록 했습니다." },
          { name: "seat-info", title: "03  좌석 선택을 돕는 정보", description: "남녀 분리 공간에 대한 문의를 바탕으로, 공간 분리가 어려운 지점에서도 선택을 돕도록 주변 좌석 이용객의 성별을 표시했습니다." },
          { name: "community", title: "04  출석 모임 커뮤니티", description: "함께 공부할 모임을 찾고 참여할 수 있도록, 지점과 시간별 모임 탐색부터 신청·출석 확인까지 구성했습니다." },
        ]} />
      </section>
      <section className={styles.brand}>
        <ProjectSectionHeading label="브랜딩" title="마음과 지갑 모두 가볍게, 20대에게 친근한 브랜드로">
          <p>가장 큰 강점인 가성비를 바탕으로, 언제든 부담 없이 방문해 빠르게 몰입할 수 있는 공간을 지향했습니다.</p>
          <p>주요 타깃인 20대에게 편하게 다가가도록 B급 감성의 UI와 캐릭터를 디자인했습니다.</p>
          <p>매장 시각물과 홍보물, 블로그·카카오채널까지 디자인하며, 서비스 이용과 온·오프라인 소통 접점에 브랜드 표현을 이어갔습니다.</p>
        </ProjectSectionHeading>
        <section className={`${styles.inset} ${styles.brandPart}`}>
          <h3 className={styles.tag}>BI 디자인</h3>
          <div className={styles.logoBlock}><h4 className={styles.oldLabel}>기존</h4><div className={styles.oldLogos}>
            <BluedotImage name="logo-old-symbol" alt="리뉴얼 전 블루닷라운지 심볼" /><BluedotImage name="logo-old-wordmark" alt="리뉴얼 전 블루닷라운지 영문 로고" />
          </div></div>
          <div className={styles.logoBlock}><h4>리뉴얼</h4><div className={styles.note}>
            <p>기존의 블루 컬러를 유지하면서 심볼과 글자 형태를 간결하고 부드럽게 다듬어, 친근한 브랜드 인상을 담았습니다.</p>
            <p>매장 사인부터 디지털 화면과 홍보물까지 일관되게 적용할 수 있도록 국·영문과 가로·세로형 로고 조합을 정리했습니다.</p>
          </div><BluedotImage name="logo-renewal" alt="리뉴얼한 블루닷라운지 국문·영문과 가로·세로형 로고 조합" /></div>
        </section>
        <section className={`${styles.inset} ${styles.brandPart}`}>
          <h3 className={styles.tag}>캐릭터 개발</h3>
          <div className={styles.characterIntro}>
            <BluedotImage name="character" alt="블루닷라운지 심볼과 책·노트북을 사용하는 곰 캐릭터" />
            <div className={styles.note}><p>스터디카페에서 묵묵히 오래 공부하는 이용자의 모습과 편안한 이미지를 연결해, 친근한 곰 캐릭터를 개발했습니다.</p><p>여유로운 표정과 자세, 책·노트북 등의 소품에 브랜드의 젊고 유쾌한 성격을 담아, 매장 시각물과 온라인 콘텐츠에 다양하게 활용하도록 구성했습니다.</p></div>
          </div>
          <div className={styles.characters}><div className={styles.bears}>{(["bear-1", "bear-2", "bear-3", "bear-4", "bear-5", "bear-6"] as const).map((name, index) => <BluedotImage key={name} name={name} alt={`좌석 안내용 곰 캐릭터 ${index + 1}`} />)}</div><BluedotImage name="bear-study" alt="열심히 공부하는 곰 캐릭터" /></div>
        </section>
        <section className={`${styles.inset} ${styles.brandPart}`}>
          <h3 className={styles.tag}>매장 시각물</h3>
          <div className={styles.pair}>
            <BluedotImage name="store-sign" alt="블루닷라운지 외부 간판 목업" /><BluedotImage name="store-stairs" alt="계단 높이면에 적용한 브랜드 안내 시트 목업" />
            <BluedotImage name="store-entrance" alt="출입구 키오스크와 이용 안내문 목업" /><BluedotImage name="store-interior" alt="내부 라운지 사인과 이용 안내 포스터 목업" />
          </div>
        </section>
        <section className={`${styles.inset} ${styles.brandPart}`}>
          <h3 className={styles.tag}>제안 및 홍보물</h3>
          <BluedotScreenGallery proposal label="가맹제안서" items={[
            { name: "proposal-cover", title: "블루닷라운지 가맹제안서 표지 — Can Start Anytime" },
            { name: "proposal-growth", title: "가맹제안서의 이용자 증가 추이" },
            { name: "proposal-space", title: "가맹제안서의 프리 라운지 공간 소개" },
            { name: "proposal-system", title: "가맹제안서의 IT 기반 무인 서비스 소개" },
            { name: "proposal-partners", title: "가맹제안서의 가맹점주 인터뷰" },
          ]} />
          <BluedotImage name="brochure" alt="A4 가맹 안내 브로슈어 표지와 주요 내지 목업" />
        </section>
        <section className={`${styles.inset} ${styles.brandPart}`}>
          <h3 className={styles.tag}>네이버 블로그 &amp; 카카오 채널</h3>
          <div className={styles.social}><BluedotImage name="blog-skin" alt="블루닷라운지 블로그 스킨 디자인" className={styles.outlined} /><BluedotImage name="sns" alt="노트북 블로그와 휴대폰 카카오채널을 함께 사용하는 모습" /></div>
        </section>
      </section>
    </div>
    <section className={`${styles.band} ${styles.gray} ${styles.ending}`}>
      <div className={styles.section}>
        <ProjectSectionHeading label="결과" title="스스로 이용하는 서비스, 여러 접점으로 이어진 브랜드">
          <p>웹·앱과 키오스크로 고객이 구매·출입·좌석 이용을 직접 진행할 수 있는 흐름을 구현했습니다.</p>
          <p>빠른 이용권 구매와 간편한 좌석 선택·이동이 장점이라는 고객 피드백을 반복해서 받았습니다.</p>
          <p>로고·캐릭터부터 매장 사인, 가맹 홍보물, SNS 채널까지 친근한 브랜드 표현을 일관되게 적용했습니다.</p>
          <p>재직 기간 운영 지점은 3개에서 12개로 확대됐으며, 이는 디자인 단독 성과가 아닌 사업 규모의 변화입니다.</p>
        </ProjectSectionHeading>
        <dl className={`${styles.inset} ${styles.results}`}><div><dt>재직 기간 동안 운영 지점 수</dt><dd><span>3개 →</span> 12개</dd></div><div><dt>고객이 꼽은 장점</dt><dd>빠른 이용권 구매<br />간편한 좌석 선택과 이동</dd></div></dl>
      </div>
    </section>
    <section className={`${styles.band} ${styles.reflectionBand}`}>
      <div className={styles.section}>
        <ProjectSectionHeading label="회고" title="이용의 편리함과 브랜드의 친근함을 함께 설계하기"><p>서비스와 브랜드를 함께 다루며, 고객이 실제로 겪는 불편을 줄이는 일과 부담 없이 다가가는 표현이 같은 방향을 향해야 함을 배웠습니다.</p></ProjectSectionHeading>
        <ProjectReflections className={styles.reflections} items={[
          { title: "무인 운영일수록\n안내는 더 분명하게", description: "관리자가 하던 안내를 화면과 매장 사인이 나눠 맡도록 설계했습니다. 기능을 제공하는 것뿐 아니라, 다음 행동과 처리 결과를 명확히 알려주는 것이 무인 이용의 핵심임을 배웠습니다." },
          { title: "작은 문의에서\n개선의 근거 찾기", description: "반복 결제의 번거로움과 남녀 분리 공간에 대한 문의를 멤버십 연장과 좌석 정보로 구체화했습니다. 고객의 요청을 그대로 옮기기보다, 그 배경과 지점의 제약을 함께 살펴야 함을 배웠습니다." },
          { title: "접점이 달라도\n같은 브랜드로 느끼도록", description: "앱의 이용 흐름, 매장의 안내, 가맹 홍보물과 SNS 콘텐츠를 하나의 방향으로 정리했습니다. 같은 로고를 반복하는 데서 나아가, 각 접점의 목적에 맞게 편리함과 친근함을 전달하는 것이 중요했습니다." },
        ]} />
      </div>
    </section>
  </div>;
}
