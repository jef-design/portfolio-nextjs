import project from '../../components/assets/images/Projects/project-gnews.png';
import project1 from '../../components/assets/images/Projects/project-voodu.png';
import project3 from '../../components/assets/images/Projects/project-restcountries.png'
import project2 from '../../components/assets/images/Projects/project-social.jpg';
import project4 from '../../components/assets/images/Projects/project-bookmark.jpg';
import project5 from '../../components/assets/images/Projects/project-manage.jpg';
import gnewsmobile from '../../components/assets/images/Projects/google-news/gnews-mobile.png'
import gnewsdesktop from '../../components/assets/images/Projects/google-news/gnews-desktop.png'
import voodumobile from '../../components/assets/images/Projects/voodu/voodu-mobile.png'
import voodudesktop from '../../components/assets/images/Projects/voodu/voodu-desktop.png'
import socialmobile from '../../components/assets/images/Projects/social/social-mobile2.png'
import socialdesktop from '../../components/assets/images/Projects/social/social-media-desktop-dark.png'
import restcountriesdesktop from '../../components/assets/images/Projects/rest-countries/rest-countries-desktop.png'
import restcountriesmobile from '../../components/assets/images/Projects/rest-countries/rest-countries-mobile.png'
import bookmarkmobile from '../../components/assets/images/Projects/bookmark/bookmark-mobile2.png'
import bookmarkdesktop from '../../components/assets/images/Projects/bookmark/bookmark-desktop2.png'
import managemobile from '../../components/assets/images/Projects/manage/manage-mobile2.png'
import managedesktop from '../../components/assets/images/Projects/manage/manage-desktop2.png'


export const data = [
    {
        img: project,
        mobile_view: gnewsmobile,
        desktop_view: gnewsdesktop,
        alt: 'Google News',
        title: 'Google News',
        description: 'A clone of Google News Website is a news aggregator service developed by Google. It presents a continuous flow of links to articles organized from thousands of publishers. this clone has a google authentication using next-auth',
        tech_use: [
            {name: 'Next.js'},
            {name: 'Next-Auth'},
            {name: 'Tailwind CSS'},
            {name: 'Redux'},
            {name: 'API'}, 
        ],
        site_link: 'https://news-nextjs-app.vercel.app/',
        github_repo: 'https://github.com/jef-design/news-nextjs-app'
    },
    {
        img: project1,
        mobile_view: voodumobile,
        desktop_view: voodudesktop,
        alt: 'Voodu',
        title: 'Voodu',
        description: 'A movie website that shows details and trailers of movies, tv shows and people using TMDB API Built with Reactjs and Redux',
        tech_use: [
            // {name: 'HTML'},
            // {name: 'CSS'},
            {name: 'React.js'},
            {name: 'SCSS'},
            {name: 'Redux'},
            {name: 'API'}, 
        ],
        site_link: 'https://vooduu-demo.netlify.app/',
        github_repo: 'https://github.com/jef-design/voodu-movie'
    },
    {
        img: project3,
        mobile_view: restcountriesmobile,
        desktop_view:restcountriesdesktop,
        alt: 'Country Info',
        title: 'CountryInfo',
        description: 'CountryInfo provides a  information about the world\'s nations consuming REST COUNTRIES API. These calls allow users to retrieve all available countries or to retrieve a given country or country code.Built with Reactjs',
        tech_use: [
            {name: 'React.js'},
            {name: 'Styled-Components'},
            {name: 'Redux'},
            {name: 'API'}, 
        ],
        site_link: 'https://country-infoo.netlify.app/',
        github_repo: 'https://github.com/jef-design/rest-countries'
    },
    {
        img: project2,
        mobile_view: socialmobile,
        desktop_view: socialdesktop,
        alt: 'Social Media Dashboard',
        title: 'Social Media Dashboard',
        description: 'A Social Media Dashboard challenge with theme switcher(light & dark) from front-end mentor',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'Javascript'},
        ],
        site_link: 'https://socialmediadashboard00.netlify.app/',
        github_repo: 'https://github.com/jef-design/social-media-dashboard'
    }
    ,
    {
        img: project4,
        mobile_view: bookmarkmobile,
        desktop_view: bookmarkdesktop,
        alt: 'Bookmark Landing Page',
        title: 'Bookmark Landing Page',
        description: 'A simple Bookmark Landing Page with tabbed features section and FAQ accordion.',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'SCSS'},
            {name: 'Javascript'},
            {name: 'Figma'},
        ],
        site_link: 'https://jef-design.github.io/bookmark-landing-page/',
        github_repo: 'https://github.com/jef-design/bookmark-landing-page'
    }
    ,
    {
        img: project5,
        mobile_view: managemobile,
        desktop_view: managedesktop,
        alt: 'Manage Landing Page',
        title: 'Manage Landing Page',
        description: 'A Manage landing page with fully responsive testimonial section from front-end mentor challenge.',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'SCSS'},
            {name: 'Javascript'},
            {name: 'Figma'},
        ],
        site_link: 'https://manage-fm.netlify.app/',
        github_repo: 'https://github.com/jef-design/manage'
    }
]