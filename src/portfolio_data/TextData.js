// Text data used in components

// Star wars website portfolio image/video files
// image files
import img01 from './mediaFiles/starwars-website/img01.png';
import img02 from './mediaFiles/starwars-website/img02.png';
import img03 from './mediaFiles/starwars-website/img03.png';

// demo-video files
import video01 from './mediaFiles/starwars-website/video01.mp4';
import video02 from './mediaFiles/starwars-website/video02.mp4';

export const HomeText = {
    title: "Hi, I'm ",
    name: 'Doheon Keum',
    content: '계속 성장하기를 바라는 주니어 웹 개발자입니다.'
}

export const AboutText = [
    {
        title: "Who I am",
        contents: [
            {
                subtitle: "",
                text: "대학에서 전자 공학을 전공했지만 소프트웨어에 흥미를 느껴 부트캠프에서 소프트웨어 개발 과정을 수료했습니다. " +
                "약 1년간 공부를 하면서 개발 기술과 문제 해결 능력을 키웠고 지금은 개인 프로젝트를 하면서 " +
                "계속 공부를 하고 있습니다. " +
                "Front-end, Back-end 모두에 관심이 있고 앞으로 여러 가지 서비스를 개발해 보고 싶습니다." 
            }          
        ]
    }
]

export const SkillText = [       
    {
        title: 'Front-end',
        stacks: [
            'HTML5', 'CSS3', 'Javascript', 'React', 'Redux', 'React-router', 
            'Redux-logger', 'Redux-thunk', 'React-Native',
        ],
    },
    {   
        title: 'Back-end',
        stacks: [
             
            'Node.js', 'Express', 'MongoDB', 'Mongoose',
            'JWT', 'Heroku', 'Parse-Server', 'Back4App'
        ],
    }
]

export const PortfolioText = [
    // each project
    {
        title: "Star wars website",
        span: "2020. 3. 6 ~ 진행 중",
        content: 
        "영화 스타워즈에 나오는 인물, 장비, 행성 등의 요소들에 대한 정보를 제공하는 웹사이트입니다. " +
        "정보 제공 외에 로그인, 회원 가입/탈퇴 등 유저 관리 기능이 추가적으로 있습니다. " +
        "지금 현재는 게시물을 올리고 댓글을 달 수 있는 일반적인 게시판 기능을 구현하는 것을 진행하고 있습니다.",
        imgFiles: [ 
            { 
                file: img01, 
                description: ''
            },
            { 
                file: img02, 
                description: ''
            },
            { 
                file: img03, 
                description: ''
            }
        ],
        videoFiles: [
            { 
                file: video01, 
                description: '정보 탐색'
            },
            { 
                file: video02,
                description: '회원정보 관리'
            }
        ],
        stacks: [
            'React','Redux','React-router','Node.js', 'Express', 'JWT', 
            'Parse-Server', 'Back4App', 'Heroku'
        ],
        githubRepo: {
            client: "https://github.com/heizence/Star-Wars-Website-client",
            server: "https://github.com/heizence/Star-Wars-Website-server"
        }
    }
]

export const ContactText = {
    Email: "heizence6626@gmail.com",
    github: "https://github.com/heizence",
    linkedIn: "https://www.linkedin.com/in/%EB%8F%84%ED%97%8C-%EA%B8%88-30937a187/"
}
