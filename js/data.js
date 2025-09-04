export const questions = [
  {
    number: '01',
    question: '수업을 준비하는 당신의 모습은?',
    choices: [
      { text: '혼자서 조용히 수업 계획을 세운다', value: 'i' },
      { text: '동료 강사들과 아이디어를 나누며 준비한다', value: 'e' }
    ]
  },
  {
    number: '02',
    question: '학생들이 질문이 없다... 이때 당신의 반응은?',
    choices: [
      { text: '생각 중이겠지;<br>학생들에게 생각할 시간을 더 주자!', value: 'i' },
      { text: '게임이나 토론으로 활발하게 참여시켜 보자!', value: 'e' }
    ]
  },
  {
    number: '03',
    question: '새로운 프로젝트를 시작할 때 당신의 모습은?',
    choices: [
      { text: '깊이 있는 연구와 계획을 선호', value: 'i' },
      { text: '팀원들과의 브레인스토밍을 통해<br> 에너지를 얻는다!', value: 'e' }
    ]
  },
  {
    number: '04',
    question: '학습 자료를 선택할 때 당신의 기준은?',
    choices: [
      { text: '구체적 사례와 실제 예시를 중요!', value: 's' },
      { text: '이론적 개념과 미래 지향적 아이디어가 중요!', value: 'n' }
    ]
  },
  {
    number: '05',
    question: '학생이 새로운 개념을 이해하기 힘들어 한다; 당신의 반응은?',
    choices: [
      { text: '구체적이고 실제 상황을 들어 설명한다', value: 's' },
      { text: '개념의 근본적인 의미와<br> 그것이 중요한 이유에 대해 설명한다.', value: 'n' }
    ]
  },
  {
    number: '06',
    question: '기술을 가르칠 때 당신의 접근 방식은?',
    choices: [
      { text: '단계별 지시사항과 절차를 강조한다', value: 's' },
      { text: '학생들이 자유롭게 탐색하고 실험하게 한다', value: 'n' }
    ]
  },
  {
    number: '07',
    question: '수업 계획에 대한 피드백을 받을 때 당신의 반응은?',
    choices: [
      { text: '객관적 분석과 논리적 근거에 주목한다', value: 't' },
      { text: '상대방의 감정과 반응을 세심하게 고려한다.', value: 'f' }
    ]
  },
  {
    number: '08',
    question: '프로젝트에서 갈등이 발생했을 때 당신은?',
    choices: [
      { text: '문제 해결을 위해<br> 원인을 분석하고 논리적으로 접근한다', value: 't' },
      { text: '팀원들의 관계와<br> 감정을 중시하며 조정에 나선다 ', value: 'f' }
    ]
  },
  {
    number: '09',
    question: '학생이 실패했을 때 당신은?',
    choices: [
      { text: '실패의 원인을 분석하고<br> 개선 방안을 제시한다', value: 't' },
      { text: '격려와 지지로<br> 학생의 자신감을 회복시키려 한다', value: 'f' }
    ]
  },
  {
    number: '10',
    question: '새 학기 코딩 수업 계획을 세울 때 당신의 접근 방식은??',
    choices: [
      { text: '전체 학기에 대한 주제,<br>프로젝트,그리고 마김일을 미리 계획한다', value: 'j' },
      { text: '학기 초에는 기본적인 구조만 계획하고,<br>학생들의 관심사와 진행 상황에 따라<br> 유동적으로 조정한다', value: 'p' }
    ]
  },
  {
    number: '11',
    question: '수업에서 예상치 못한 상황이 발생했을 때 당신의 대처 방법은?',
    choices: [
      { text: '미리 준비된 계획 B로 신속하게 전환한다', value: 'j' },
      { text: '상황에 맞게 즉흥적으로 대응하여 처리한다', value: 'p' }
    ]
  },
  {
    number: '12',
    question: '프로젝트 마감일이 다가올 때 당신의 작업 스타일은?',
    choices: [
      { text: '일정에 따라 체계적으로<br> 작업을 마무리 짓는다', value: 'j' },
      { text: '마감 기한 직전에<br> 영감을 받아 집중적으로 작업한다', value: 'p' }
    ]
  },
]
export const results = [
  {
    title: 'ISTJ<br> 체계적인<br> 데이터베이스 관리 강사',
    character: 'images/result_character1.png',
    results: [
      '체계적이고 실용적이며,<br> 일에 대한 책임감이 강해요.',
    ],
    jobs: ['파이썬 프로그래밍, 데이터베이스 관리'],
    work:'실용적인 ISTJ와 즐거움을 추구하는 <br>ESFP는 서로를 완벽하게 보완해요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ISFJ<br> 사용자 친화적인<br> 웹 개발 기초 강사 ',
    character: 'images/result_character2.png',
    results: [
      '친절하고 배려 깊으며,<br> 안정과 조화를 중요시해요.',
      '추천 학습 유형: 블록코딩',
    ],
    jobs: ['블록코딩, 웹 개발 기초'],
    work:'ESTP - 도전을 즐기는 ESTP와 협력적인 ISFJ가<br> 팀을 이루면 멋진 조화를 이뤄요.',
    lectureImg: 'images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'INFJ<br> 비전 있는<br> 사용자 경험 디자인 강사',
    character: 'images/result_character3.png',
    results: [
      '이상적이고 창의적이며,<br> 타인을 돕는 것에 깊은 만족을 느껴요.',
    ],
    jobs: ['웹 개발, 인터랙티브 디자인'],
    work:'ENTP<br> 혁신적인 ENTP와 깊은 통찰력을 가진 INFJ는<br> 서로 영감을 주고받아요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'INTJ<br> 전략적인<br> 프로그래밍 문제 해결 강사',
    character: 'images/result_character4.png',
    results: [
      '독창적이고 독립적인 사고를 가지며,<br> 높은 성취를 추구해요.',
    ],
    jobs: ['인공지능 기초, 알고리즘 문제 해결'],
    work:'ENFP<br> 창의적인 ENFP와 목표 지향적인 INTJ는<br> 서로의 세계를 넓혀 줘요.',
    lectureImg: 'images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ISTP<br> 실용적인<br> 하드웨어 프로그래밍 강사',
    character: 'images/result_character5.png',
    results: [
      '호기심이 많고 융통성이 있으며,<br> 실질적인 문제 해결을 즐겨요.',
    ],
    jobs: ['임베디드 시스템, 하드웨어 프로그래밍'],
    work:'ESFJ<br> 따뜻한 ESFJ와 실용적인 ISTP는<br> 서로에게 안정감과 새로움을 제공해요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ISFP<br> 창의적인<br> 모바일 앱 개발 강사',
    character: 'images/result_character6.png',
    results: [
      '따뜻한 감성을 가지고 있으며,<br> 자유롭게 자신을 표현하는 것을 좋아해요.',
    ],
    jobs: ['모바일 앱 개발, 크리에이티브 코딩'],
    work:'ESTJ<br> 체계적인 ESTJ와 유연한 ISFP는<br> 서로 다른 매력으로 팀워크를 발휘해요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'INFP<br> 꿈꾸는 게임 개발 강사',
    character: 'images/result_character7.png',
    results: [
      '이상적이고 창의적이며,<br> 자신과 타인의 성장을 중요시해요.',
    ],
    jobs: ['게임 개발, 스토리텔링 및 캐릭터 디자인'],
    work:'ENTJ<br> 비전을 가진 ENTJ와 꿈꾸는 INFP는<br> 서로를 향한 깊은 이해와 존중을 바탕으로<br> 멋진 프로젝트를 만들어낼 수 있어요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'INTP<br> 호기심 많은<br> 프로그래밍 언어 이론 강사',
    character: 'images/result_character8.png',
    results: [
      '호기심이 많고 분석적이며,<br> 지식을 탐구하는 것을 즐겨요.',
    ],
    jobs: ['프로그래밍 언어 이론, 인공지능 기초'],
    work:'ENFJ<br> 동기부여가 탁월한 ENFJ와 지적인 INTP는<br> 서로의 발전에 귀중한 영향을 줘요.',
    lectureImg: 'images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ESTP<br> 모험을 즐기는<br> 사이버 보안 강사',
    character: 'images/result_character9.png',
    results: [
      '실용적이고 현실적인 문제 해결에 뛰어나며,<br> 순발력이 있어요.',
    ],
    jobs: ['드론 조종, 네트워크 해킹 기초'],
    work:'ISFJ<br> 세심한 ISFJ와 활동적인 ESTP는<br> 서로의 필요를 잘 채워줘요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ESFP<br> 상상력이 풍부한<br> 프론트엔드 개발 강사',
    character: 'images/result_character10.png',
    results: [
      '사람들과 어울리기를 좋아하고,<br> 즉흥적이며 열정적이에요.',
    ],
    jobs: ['디지털 아트, UI/UX 디자인'],
    work:'ISTJ<br> 신뢰성 높은 ISTJ와 생기 넘치는 ESFP는<br> 서로 다른 시각을 제공해요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ENFP<br> 영감을 주는<br> 인터랙티브 미디어 강사',
    character: 'images/result_character11.png',
    results: [
      '새로운 가능성을 탐구하고,<br> 열정적이며 창의적이에요.',
    ],
    jobs: ['웹 앱 개발, 디지털 스토리텔링'],
    work:'INTJ<br> 목표 지향적인 INTJ와 상상력 풍부한 ENFP는<br> 서로를 완벽하게 보완해요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ENTP<br> 논쟁을 즐기는<br> 신기술 탐색 강사',
    character: 'images/result_character12.png',
    results: [
      '호기심이 많고 지적인 도전을 즐기며,<br> 아이디어를 혁신하는 데 능숙해요.',
    ],
    jobs: ['머신 러닝, 신기술 탐색'],
    work:'INFJ<br> 깊은 통찰력을 가진 INFJ와 혁신적인 ENTP는<br> 함께 큰 성과를 낼 수 있어요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ESTJ<br> 체계적인 소프트웨어<br> 프로젝트 관리 강사',
    character: 'images/result_character13.png',
    results: [
      '조직적이고 체계적인 접근을 선호하며,<br> 리더십이 뛰어나.',
    ],
    jobs: ['소프트웨어 프로젝트 관리, 시스템 설계'],
    work:'ISFP<br> 창의적인 ISFP와 목표를 향해 나아가는<br> ESTJ는 서로의 성장을 도울 수 있어요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ESFJ<br> 협력적인<br> 협업 도구 활용 강사',
    character: 'images/result_character14.png',
    results: [
      '타인에 대한 배려가 깊고,<br> 조화롭고 안정된 환경을 만들려고 해요.',
    ],
    jobs: ['협업 도구 활용, 팀워크 및 커뮤니케이션 스킬'],
    work:'ISTP<br> 실용적인 ISTP와 협력적인 ESFJ는<br> 서로의 다름을 인정하며 효과적으로<br> 협업할 수 있어요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ENFJ<br> 동기 부여하는<br> 코딩 교육 방법론 강사',
    character: 'images/result_character15.png',
    results: [
      '다른 사람의 성장을 도우며,<br> 영감을 주는 능력이 뛰어나요.',
    ],
    jobs: ['교육용 소프트웨어 개발, 코딩 교육 방법론'],
    work:'INTP<br> 지적인 INTP와 동기 부여가 탁월한 ENFJ는<br> 서로의 생각을 넓힐 수 있어요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
  {
    title: 'ENTJ<br> 대담한 기술 리더십 강사',
    character: 'images/result_character16.png',
    results: [
      '효율적이고 체계적인 계획을 세우는 데 능숙하며,<br> 큰 그림을 볼 줄 알아요.'
    ],
    jobs: ['시스템 아키텍처 설계, 기술 리더십'],
    work:'INFP<br>꿈꾸는 INFP와 실행에 능한 <br>ENTJ는 서로의 꿈을 현실로 만드는 데 <br>필요한 조합이에요.',
    lectureImg: '/images/아크랩스코딩클럽.png',
    lectureUrl: 'https://litt.ly/aklabs'
  },
]
export const mbtis = {
  istj: 0,
  isfj: 1,
  infj: 2,
  intj: 3,
  istp: 4,
  isfp: 5,
  infp: 6,
  intp: 7,
  estp: 8,
  esfp: 9,
  enfp: 10,
  entp: 11,
  estj: 12,
  esfj: 13,
  enfj: 14,
  entj: 15,
  
}
